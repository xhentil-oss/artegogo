import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  LayoutDashboard, User, Headphones, BookOpen, GraduationCap,
  Settings, HelpCircle, LogOut, ChevronRight, Lock, Unlock,
  Key, Menu, X, ArrowLeft, Search, ChevronDown,
} from 'lucide-react';

type Section = 'dashboard' | 'profili' | 'meditimet' | 'librat' | 'trajnimet' | 'ndrysho' | 'ndihme';

interface Meditation {
  id: number;
  title: string;
  duration: string;
  description: string;
  image: string;
  free: boolean;
}

const MEDITATIONS: Meditation[] = [
  { id: 1, title: 'Meditimi i Faljes', duration: '10 min', description: 'Falje dhe çlirim emocional', image: '/img/TONI1692.JPG', free: true },
  { id: 2, title: 'Qetësia e Brendshme', duration: '15 min', description: 'Relaksim i thellë i mendjes', image: '/img/TONI2743.JPG', free: true },
  { id: 3, title: 'Harmonizim i Avancuar', duration: '20 min', description: 'Harmonizim i thellë i energjive dhe zemrës.', image: '/img/TONI2879.JPG', free: false },
  { id: 4, title: 'Transformim i Plotë', duration: '25 min', description: 'Udhëtim i strukturuar për ndryshim të qëndrueshëm.', image: '/img/TONI1692.JPG', free: false },
];

const NAV_ITEMS: { key: Section; labelAl: string; labelEn: string; Icon: React.ElementType }[] = [
  { key: 'dashboard',  labelAl: 'Dashboard',             labelEn: 'Dashboard',           Icon: LayoutDashboard },
  { key: 'profili',    labelAl: 'Profili im',             labelEn: 'My Profile',          Icon: User },
  { key: 'meditimet',  labelAl: 'Meditimet e mia',        labelEn: 'My Meditations',      Icon: Headphones },
  { key: 'librat',     labelAl: 'Librat e mi',            labelEn: 'My Books',            Icon: BookOpen },
  { key: 'trajnimet',  labelAl: 'Trajnimet e mia',        labelEn: 'My Trainings',        Icon: GraduationCap },
  { key: 'ndrysho',    labelAl: 'Ndrysho të dhënat e tua', labelEn: 'Edit Profile',      Icon: Settings },
  { key: 'ndihme',     labelAl: 'Ndihmë',                 labelEn: 'Help',                Icon: HelpCircle },
];

export const UserDashboardPage = () => {
  const { user, logout, loading } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [active, setActive] = useState<Section>('meditimet');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [hasRetreat, setHasRetreat] = useState(false);
  const [lockedMsg, setLockedMsg] = useState(false);
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [passMsg, setPassMsg] = useState('');
  const [passSaving, setPassSaving] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [emailPass, setEmailPass] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [emailSaving, setEmailSaving] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const profileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loading && !user) navigate('/login?redirect=/dashboard', { replace: true });
  }, [user, loading, navigate]);

  useEffect(() => {
    const checkRetreat = async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' });
        if (!res.ok) return;
      } catch { /* ignore */ }
    };
    checkRetreat();
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 50);
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') { setSearchOpen(false); setSearchQuery(''); } };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const SEARCH_ITEMS = [
    ...NAV_ITEMS.map(n => ({ label: n.labelAl, section: n.key as Section, type: 'nav' as const })),
    ...MEDITATIONS.map(m => ({ label: m.title, section: 'meditimet' as Section, type: 'meditation' as const })),
  ];

  const searchResults = searchQuery.trim().length > 0
    ? SEARCH_ITEMS.filter(i => i.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleSavePass = async () => {
    if (!oldPass) { setPassMsg(t('Vendos fjalëkalimin e vjetër.', 'Enter your old password.')); return; }
    if (!newPass || newPass.length < 8) { setPassMsg(t('Min. 8 karaktere.', 'Min. 8 characters.')); return; }
    if (newPass !== confirmPass) { setPassMsg(t('Fjalëkalimet nuk përputhen.', 'Passwords do not match.')); return; }
    setPassSaving(true); setPassMsg('');
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        credentials: 'include', body: JSON.stringify({ oldPassword: oldPass, newPassword: newPass }),
      });
      const d = await res.json();
      setPassMsg(res.ok ? t('Fjalëkalimi u ndryshua!', 'Password changed!') : (d.message || t('Gabim.', 'Error.')));
      if (res.ok) { setOldPass(''); setNewPass(''); setConfirmPass(''); }
    } catch { setPassMsg(t('Gabim lidhjeje.', 'Connection error.')); }
    finally { setPassSaving(false); }
  };

  const handleSaveEmail = async () => {
    if (!newEmail || !newEmail.includes('@')) { setEmailMsg(t('Vendos email të vlefshëm.', 'Enter a valid email.')); return; }
    if (!emailPass) { setEmailMsg(t('Vendos fjalëkalimin tënd.', 'Enter your password.')); return; }
    setEmailSaving(true); setEmailMsg('');
    try {
      const res = await fetch('/api/auth/change-email', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        credentials: 'include', body: JSON.stringify({ newEmail, password: emailPass }),
      });
      const d = await res.json();
      setEmailMsg(res.ok ? t('Emaili u ndryshua!', 'Email changed!') : (d.message || t('Gabim.', 'Error.')));
      if (res.ok) { setNewEmail(''); setEmailPass(''); }
    } catch { setEmailMsg(t('Gabim lidhjeje.', 'Connection error.')); }
    finally { setEmailSaving(false); }
  };

  if (loading || !user) return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f8f7ff' }}>
      <div className="w-8 h-8 border-3 border-violet-600 border-t-transparent rounded-full animate-spin" style={{ borderWidth: 3 }} />
    </div>
  );

  const initials = `${user.firstName?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase();

  const renderContent = () => {
    switch (active) {
      case 'dashboard': return <DashboardHome user={user} setActive={setActive} t={t} hasRetreat={hasRetreat} />;
      case 'profili': return <ProfileView user={user} t={t} />;
      case 'meditimet': return <MeditimetView meditations={MEDITATIONS} hasRetreat={hasRetreat} lockedMsg={lockedMsg} setLockedMsg={setLockedMsg} t={t} navigate={navigate} />;
      case 'librat': return <ComingSoonView title={t('Librat e mi', 'My Books')} desc={t('Librat tuaj do shfaqen këtu.', 'Your books will appear here.')} t={t} />;
      case 'trajnimet': return <ComingSoonView title={t('Trajnimet e mia', 'My Trainings')} desc={t('Trajnimet tuaja do shfaqen këtu.', 'Your trainings will appear here.')} t={t} />;
      case 'ndrysho': return <EditProfileView user={user} oldPass={oldPass} setOldPass={setOldPass} newPass={newPass} setNewPass={setNewPass} confirmPass={confirmPass} setConfirmPass={setConfirmPass} passMsg={passMsg} passSaving={passSaving} handleSavePass={handleSavePass} newEmail={newEmail} setNewEmail={setNewEmail} emailPass={emailPass} setEmailPass={setEmailPass} emailMsg={emailMsg} emailSaving={emailSaving} handleSaveEmail={handleSaveEmail} t={t} />;
      case 'ndihme': return <HelpView t={t} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f5f3ff', fontFamily: "'Inter', 'Poppins', sans-serif" }}>

      {/* Top Header */}
      <header className="bg-white border-b border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition" onClick={() => setSidebarOpen(v => !v)}>
            <Menu className="w-5 h-5 text-zinc-600" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776774255229-0.png" alt="Arte Gogo" className="h-8 w-auto object-contain" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button className="p-2 rounded-xl hover:bg-violet-50 transition-all" title="Kërko" onClick={() => setSearchOpen(true)}>
            <Search className="w-5 h-5 text-zinc-500" />
          </button>

          {/* Profile dropdown */}
          <div className="relative" ref={profileRef}>
            <button onClick={() => setProfileOpen(v => !v)}
              className="flex items-center gap-2 px-2 md:px-3 py-1.5 rounded-xl hover:bg-violet-50 transition-all">
              <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {initials}
              </div>
              <span className="hidden md:block text-sm font-medium text-zinc-700">{user.firstName}</span>
              <ChevronDown className="hidden md:block w-4 h-4 text-zinc-400" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 py-2 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">{t('Menuja e profilit', 'Profile menu')}</p>
                  <p className="text-sm font-semibold text-zinc-800 mt-0.5">{user.firstName} {user.lastName}</p>
                </div>
                {[
                  { key: 'profili' as Section, label: t('Profili im', 'My Profile') },
                  { key: 'ndrysho' as Section, label: t('Ndrysho fjalëkalimin', 'Change Password') },
                  { key: 'meditimet' as Section, label: t('Meditimet e mia', 'My Meditations') },
                  { key: 'librat' as Section, label: t('Librat e mi', 'My Books') },
                  { key: 'trajnimet' as Section, label: t('Trajnimet e mia', 'My Trainings') },
                  { key: 'ndihme' as Section, label: t('Ndihmë', 'Help') },
                ].map(item => (
                  <button key={item.key} onClick={() => { setActive(item.key); setProfileOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 hover:bg-violet-50 hover:text-violet-700 transition-all font-medium">
                    {item.label}
                  </button>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <button onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-all font-medium">
                    {t('Dil', 'Log Out')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          onClick={() => { setSearchOpen(false); setSearchQuery(''); }}>
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <Search className="w-5 h-5 text-zinc-400 shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t('Kërko në dashboard...', 'Search dashboard...')}
                className="flex-1 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none bg-transparent"
              />
              <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                className="p-1 rounded-lg hover:bg-gray-100 transition shrink-0">
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto py-2">
              {searchQuery.trim() === '' && (
                <div className="px-4 py-8 text-center">
                  <p className="text-xs text-zinc-400">{t('Shkruaj për të kërkuar seksione ose meditime...', 'Type to search sections or meditations...')}</p>
                </div>
              )}
              {searchQuery.trim() !== '' && searchResults.length === 0 && (
                <div className="px-4 py-8 text-center">
                  <p className="text-xs text-zinc-400">{t('Asnjë rezultat.', 'No results found.')}</p>
                </div>
              )}
              {searchResults.map((item, i) => (
                <button key={i}
                  onClick={() => { setActive(item.section); setSearchOpen(false); setSearchQuery(''); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-violet-50 transition-all text-left">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#ede9fe' }}>
                    {item.type === 'nav'
                      ? (() => { const nav = NAV_ITEMS.find(n => n.key === item.section); return nav ? <nav.Icon className="w-3.5 h-3.5" style={{ color: '#7c3aed' }} /> : null; })()
                      : <Headphones className="w-3.5 h-3.5" style={{ color: '#7c3aed' }} />
                    }
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-800">{item.label}</p>
                    <p className="text-xs text-zinc-400">{item.type === 'nav' ? t('Seksion', 'Section') : t('Meditim', 'Meditation')}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-300 ml-auto" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <aside className={`fixed md:static top-0 left-0 h-full md:h-auto w-72 bg-white border-r border-gray-100 z-40 flex flex-col transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ paddingTop: sidebarOpen ? 0 : undefined }}>

          {/* Mobile sidebar header */}
          <div className="md:hidden flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <span className="font-bold text-zinc-800">Menu</span>
            <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-lg hover:bg-gray-100">
              <X className="w-5 h-5 text-zinc-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-3">
            {/* Back to site */}
            <Link to="/" className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-violet-600 uppercase tracking-widest mb-6 px-2 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              {t('Shko tek Website', 'Back to Website')}
            </Link>

            <p className="text-2xl font-bold text-zinc-900 px-2 mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Dashboard</p>

            <nav className="space-y-1">
              {NAV_ITEMS.map(({ key, labelAl, labelEn, Icon }) => {
                const isActive = active === key;
                return (
                  <button key={key}
                    onClick={() => { setActive(key); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? 'text-violet-700 bg-violet-100' : 'text-zinc-600 hover:bg-gray-50 hover:text-zinc-900'}`}>
                    <Icon className={`w-4.5 h-4.5 shrink-0 ${isActive ? 'text-violet-600' : 'text-zinc-400'}`} style={{ width: 18, height: 18 }} />
                    {t(labelAl, labelEn)}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Logout at bottom */}
          <div className="p-3 border-t border-gray-100">
            <button onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
              <LogOut style={{ width: 18, height: 18 }} className="shrink-0" />
              {t('Dil nga llogaria', 'Log Out')}
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-3xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

/* ── Sections ─────────────────────────────────────────────────────── */

const DashboardHome = ({ user, setActive, t, hasRetreat }: { user: any; setActive: (s: Section) => void; t: any; hasRetreat: boolean }) => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        {t(`Mirë se erdhe, ${user.firstName}!`, `Welcome, ${user.firstName}!`)}
      </h1>
      <p className="text-zinc-500 text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>{t('Nga këtu menaxho gjithçka.', 'Manage everything from here.')}</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        { key: 'meditimet' as Section, icon: Headphones, label: t('Meditimet e mia', 'My Meditations'), count: '2 falas', color: '#ede9fe', iconColor: '#7c3aed' },
        { key: 'librat'    as Section, icon: BookOpen,   label: t('Librat e mi', 'My Books'),           count: '—',         color: '#fce7f3', iconColor: '#db2777' },
        { key: 'trajnimet' as Section, icon: GraduationCap, label: t('Trajnimet e mia', 'My Trainings'), count: '—',       color: '#d1fae5', iconColor: '#059669' },
      ].map(({ key, icon: Icon, label, count, color, iconColor }) => (
        <button key={key} onClick={() => setActive(key)}
          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-left hover:shadow-md transition-all hover:-translate-y-0.5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: color }}>
            <Icon className="w-5 h-5" style={{ color: iconColor }} />
          </div>
          <p className="font-semibold text-zinc-800 text-sm">{label}</p>
          <p className="text-xs text-zinc-400 mt-0.5">{count}</p>
        </button>
      ))}
    </div>

    {!hasRetreat && (
      <div className="bg-white rounded-2xl border border-violet-100 p-5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#ede9fe' }}>
          <Key className="w-5 h-5" style={{ color: '#7c3aed' }} />
        </div>
        <div>
          <p className="font-semibold text-zinc-800 text-sm">{t('Zhblloko përmbajtje premium', 'Unlock premium content')}</p>
          <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{t('Regjistrohu në retreat ose trajnim për të aksesuar meditimet dhe materialet ekskluzive.', 'Register for a retreat or training to access exclusive meditations and materials.')}</p>
          <Link to="/shop/regjistrohu-retreat" className="inline-block mt-2 text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors">
            {t('Shiko retreat-et →', 'View retreats →')}
          </Link>
        </div>
      </div>
    )}
  </div>
);

const ProfileView = ({ user, t }: { user: any; t: any }) => (
  <div className="space-y-6">
    <SectionHeader icon={User} title={t('Profili im', 'My Profile')} desc={t('Të dhënat e llogarisë suaj.', 'Your account details.')} />
    <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
      <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
        <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-white text-xl font-bold">
          {`${user.firstName?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase()}
        </div>
        <div>
          <p className="font-bold text-zinc-900 text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{user.firstName} {user.lastName}</p>
          <p className="text-sm text-zinc-500">{user.email}</p>
        </div>
      </div>
      {[
        { label: t('Emri', 'First Name'), value: user.firstName },
        { label: t('Mbiemri', 'Last Name'), value: user.lastName },
        { label: 'Email', value: user.email },
      ].map(({ label, value }) => (
        <div key={label} className="flex items-center justify-between py-2 border-b border-gray-50">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">{label}</span>
          <span className="text-sm font-medium text-zinc-800">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const MeditimetView = ({ meditations, hasRetreat, lockedMsg, setLockedMsg, t, navigate }: {
  meditations: Meditation[]; hasRetreat: boolean; lockedMsg: boolean;
  setLockedMsg: (v: boolean) => void; t: any; navigate: any;
}) => {
  const free = meditations.filter(m => m.free);
  const premium = meditations.filter(m => !m.free);
  return (
    <div className="space-y-6">
      <SectionHeader icon={Headphones} title={t('Meditimet e mia', 'My Meditations')} desc={t('Zgjidh meditimin që dëshiron të dëgjosh.', 'Choose the meditation you want to listen to.')} />

      {/* Free */}
      <div>
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">{t('Meditime Falas', 'Free Meditations')}</p>
        <div className="space-y-3">
          {free.map(m => <MeditationCard key={m.id} m={m} unlocked t={t} onClick={() => {}} />)}
        </div>
      </div>

      {/* Premium */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Key className="w-4 h-4" style={{ color: '#7c3aed' }} />
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t('Meditime për Pjesëmarrësit e Retreatit', 'Retreat Participant Meditations')}</p>
          <span className="ml-auto text-xs font-bold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: '#ede9fe', color: '#7c3aed' }}>
            {t('PËR PJESËMARRËSIT', 'MEMBERS ONLY')}
          </span>
        </div>
        <div className="space-y-3">
          {premium.map(m => (
            <MeditationCard key={m.id} m={m} unlocked={hasRetreat} t={t}
              onClick={() => { if (!hasRetreat) setLockedMsg(true); }} />
          ))}
        </div>
      </div>

      {/* Locked info box */}
      {lockedMsg && (
        <div className="rounded-2xl p-4 flex items-start gap-3" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
          <Key className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#7c3aed' }} />
          <div>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {t('Këto meditime janë të disponueshme vetëm për pjesëmarrësit e retreat-eve tona.', 'These meditations are available only for participants of our retreats.')}
            </p>
            <Link to="/shop/regjistrohu-retreat" className="inline-block mt-1.5 text-xs font-semibold text-violet-600 hover:underline">
              {t('Regjistrohu tani →', 'Register now →')}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const MeditationCard = ({ m, unlocked, t, onClick }: { m: Meditation; unlocked: boolean; t: any; onClick: () => void }) => (
  <button onClick={onClick}
    className="w-full flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-left hover:shadow-md transition-all group">
    <img src={m.image} alt={m.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-zinc-900 text-sm leading-snug">{m.title}</p>
      <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
        <span>⏱</span>{m.duration}
      </p>
      <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{m.description}</p>
    </div>
    <div className="flex items-center gap-2 shrink-0">
      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: unlocked ? '#d1fae5' : '#f4f4f5' }}>
        {unlocked
          ? <Unlock className="w-4 h-4" style={{ color: '#059669' }} />
          : <Lock className="w-4 h-4 text-zinc-400" />}
      </div>
      <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-violet-500 transition-colors" />
    </div>
  </button>
);

const ComingSoonView = ({ title, desc, t }: { title: string; desc: string; t: any }) => (
  <div className="space-y-6">
    <div className="text-center py-16">
      <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-4">
        <BookOpen className="w-8 h-8 text-violet-400" />
      </div>
      <h2 className="text-xl font-bold text-zinc-800 mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</h2>
      <p className="text-sm text-zinc-500">{desc}</p>
    </div>
  </div>
);

const EditProfileView = ({ user, oldPass, setOldPass, newPass, setNewPass, confirmPass, setConfirmPass, passMsg, passSaving, handleSavePass, newEmail, setNewEmail, emailPass, setEmailPass, emailMsg, emailSaving, handleSaveEmail, t }: any) => (
  <div className="space-y-8">
    <SectionHeader icon={Settings} title={t('Ndrysho të dhënat', 'Edit Account')} desc={t('Ndrysho fjalëkalimin ose emailin e llogarisë tënde.', 'Change your password or account email.')} />

    {/* ── Change Password ── */}
    <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4 max-w-md">
      <p className="text-sm font-bold text-zinc-800">{t('Ndrysho fjalëkalimin', 'Change Password')}</p>
      <div>
        <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t('Fjalëkalimi i vjetër', 'Old Password')}</label>
        <input type="password" value={oldPass} onChange={e => setOldPass(e.target.value)} placeholder="••••••••"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
          style={{ backgroundColor: '#fafafa' }} />
      </div>
      <div>
        <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t('Fjalëkalimi i ri', 'New Password')}</label>
        <input type="password" value={newPass} onChange={e => setNewPass(e.target.value)} placeholder={t('Min. 8 karaktere, 1 shkronjë e madhe, 1 numër', 'Min. 8 chars, 1 uppercase, 1 number')}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
          style={{ backgroundColor: '#fafafa' }} />
      </div>
      <div>
        <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t('Konfirmo fjalëkalimin e ri', 'Confirm New Password')}</label>
        <input type="password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)} placeholder={t('Rishkruaj fjalëkalimin e ri', 'Re-enter new password')}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
          style={{ backgroundColor: '#fafafa' }} />
      </div>
      {passMsg && (
        <p className={`text-xs font-medium ${passMsg.includes('u ndryshua') || passMsg.includes('changed') ? 'text-green-600' : 'text-red-500'}`}>{passMsg}</p>
      )}
      <button onClick={handleSavePass} disabled={passSaving}
        className="w-full py-2.5 rounded-xl text-white text-sm font-semibold transition-all disabled:opacity-60"
        style={{ backgroundColor: '#7c3aed' }}>
        {passSaving ? t('Duke ruajtur...', 'Saving...') : t('Ruaj fjalëkalimin', 'Save Password')}
      </button>
    </div>

    {/* ── Change Email ── */}
    <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4 max-w-md">
      <p className="text-sm font-bold text-zinc-800">{t('Ndrysho emailin', 'Change Email')}</p>
      <div>
        <label className="block text-xs font-semibold text-zinc-500 mb-1">{t('Email aktual', 'Current email')}</label>
        <p className="text-sm text-zinc-700 font-medium">{user.email}</p>
      </div>
      <div>
        <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t('Email i ri', 'New Email')}</label>
        <input type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} placeholder={t('emri@shembull.com', 'name@example.com')}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
          style={{ backgroundColor: '#fafafa' }} />
      </div>
      <div>
        <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t('Konfirmo me fjalëkalimin tënd', 'Confirm with your password')}</label>
        <input type="password" value={emailPass} onChange={e => setEmailPass(e.target.value)} placeholder="••••••••"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
          style={{ backgroundColor: '#fafafa' }} />
      </div>
      {emailMsg && (
        <p className={`text-xs font-medium ${emailMsg.includes('u ndryshua') || emailMsg.includes('changed') ? 'text-green-600' : 'text-red-500'}`}>{emailMsg}</p>
      )}
      <button onClick={handleSaveEmail} disabled={emailSaving}
        className="w-full py-2.5 rounded-xl text-white text-sm font-semibold transition-all disabled:opacity-60"
        style={{ backgroundColor: '#7c3aed' }}>
        {emailSaving ? t('Duke ruajtur...', 'Saving...') : t('Ruaj emailin', 'Save Email')}
      </button>
    </div>
  </div>
);

const HelpView = ({ t }: { t: any }) => (
  <div className="space-y-6">
    <SectionHeader icon={HelpCircle} title={t('Ndihmë', 'Help')} desc={t('Si mund t\'ju ndihmojmë?', 'How can we help you?')} />
    <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
      {[
        { q: t('Si mund të ndrysho fjalëkalimin?', 'How can I change my password?'), a: t('Shko te "Ndrysho të dhënat e tua" në menu të majtë.', 'Go to "Edit Profile" in the left menu.') },
        { q: t('Si aksesoj meditimet premium?', 'How do I access premium meditations?'), a: t('Duhet të jesh i regjistruar në një retreat aktiv.', 'You need to be registered for an active retreat.') },
        { q: t('Kam problem me llogarinë time.', 'I have a problem with my account.'), a: t('Na kontakto përmes WhatsApp më poshtë.', 'Contact us via WhatsApp below.') },
      ].map(({ q, a }, i) => (
        <div key={i} className="py-3 border-b border-gray-50 last:border-0">
          <p className="font-semibold text-zinc-800 text-sm mb-1">{q}</p>
          <p className="text-xs text-zinc-500 leading-relaxed">{a}</p>
        </div>
      ))}
      <div className="pt-2">
        <a href="https://wa.me/355692420827" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
  <div className="flex items-center gap-4 mb-2">
    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#ede9fe' }}>
      <Icon className="w-6 h-6" style={{ color: '#7c3aed' }} />
    </div>
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-zinc-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</h1>
      <p className="text-sm text-zinc-500" style={{ fontFamily: "'Inter', sans-serif" }}>{desc}</p>
    </div>
  </div>
);
