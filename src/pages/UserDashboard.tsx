import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  LayoutDashboard, User, Headphones, BookOpen, GraduationCap,
  Settings, HelpCircle, LogOut, ChevronRight, Lock, Unlock,
  Key, Menu, X, ArrowLeft, Search, ChevronDown, ShoppingBag,
} from 'lucide-react';

type Section = 'dashboard' | 'profili' | 'meditimet' | 'librat' | 'trajnimet' | 'porosit' | 'ndrysho' | 'ndihme';

interface Meditation {
  id: number;
  title: string;
  duration: string;
  description: string;
  image: string;
  free: boolean;
  pdfUrl: string;
  audioUrl?: string;
}

const MEDITATIONS: Meditation[] = [
  { id: 1, title: 'Meditimi i Faljes', duration: '10 min', description: 'Falje dhe çlirim emocional', image: '/img/TONI1692.JPG', free: true, pdfUrl: '' },
  { id: 2, title: 'Qetësia e Brendshme', duration: '15 min', description: 'Relaksim i thellë i mendjes', image: '/img/TONI2743.JPG', free: true, pdfUrl: '' },
  { id: 3, title: 'Harmonizim i Avancuar', duration: '20 min', description: 'Harmonizim i thellë i energjive dhe zemrës.', image: '/img/TONI2879.JPG', free: false, pdfUrl: '', audioUrl: 'https://api.drartegogo.com/uploads/audio/harmonizim-i-avancuar.mp3' },
  { id: 4, title: 'Transformim i Plotë', duration: '25 min', description: 'Udhëtim i strukturuar për ndryshim të qëndrueshëm.', image: '/img/TONI1692.JPG', free: false, pdfUrl: '' },
];

const NAV_ITEMS: { key: Section; labelAl: string; labelEn: string; Icon: React.ElementType }[] = [
  { key: 'dashboard',  labelAl: 'Dashboard',             labelEn: 'Dashboard',           Icon: LayoutDashboard },
  { key: 'profili',    labelAl: 'Profili im',             labelEn: 'My Profile',          Icon: User },
  { key: 'meditimet',  labelAl: 'Meditimet e mia',        labelEn: 'My Meditations',      Icon: Headphones },
  { key: 'librat',     labelAl: 'Librat e mi',            labelEn: 'My Books',            Icon: BookOpen },
  { key: 'trajnimet',  labelAl: 'Trajnimet e mia',        labelEn: 'My Trainings',        Icon: GraduationCap },
  { key: 'porosit',   labelAl: 'Porositë e mia',         labelEn: 'My Orders',           Icon: ShoppingBag },
  { key: 'ndrysho',    labelAl: 'Ndrysho të dhënat e tua', labelEn: 'Edit Profile',      Icon: Settings },
  { key: 'ndihme',     labelAl: 'Ndihmë',                 labelEn: 'Help',                Icon: HelpCircle },
];

export const UserDashboardPage = () => {
  const { user, logout, loading } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [active, setActive] = useState<Section>('dashboard');
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
        let res = await fetch('/api/auth/has-retreat', { credentials: 'include' });
        if (res.status === 401) {
          const ref = await fetch('/api/auth/refresh', { method: 'POST', credentials: 'include' });
          if (ref.ok) res = await fetch('/api/auth/has-retreat', { credentials: 'include' });
        }
        if (!res.ok) return;
        const d = await res.json();
        setHasRetreat(d.hasRetreat === true);
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
      case 'trajnimet': return <TrainingsView t={t} />;
      case 'porosit': return <OrdersView t={t} />;
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
          <Link to="/" className="md:hidden flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-violet-600 transition-colors">
            <ArrowLeft className="w-3 h-3" />
            {t('Shko tek faqja kryesore', 'Homepage')}
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
                  { key: 'porosit' as Section, label: t('Porositë e mia', 'My Orders') },
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
              {t('Shko tek faqja kryesore', 'Back to Homepage')}
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

const DashboardHome = ({ user, setActive, t, hasRetreat }: { user: any; setActive: (s: Section) => void; t: any; hasRetreat: boolean }) => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [trainingsCount, setTrainingsCount] = useState(0);
  const [lastOrder, setLastOrder] = useState<any>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        let resO = await fetch('/api/auth/my-orders', { credentials: 'include' });
        if (resO.status === 401) {
          const ref = await fetch('/api/auth/refresh', { method: 'POST', credentials: 'include' });
          if (ref.ok) resO = await fetch('/api/auth/my-orders', { credentials: 'include' });
        }
        const dO = await resO.json();
        const orders = resO.ok && Array.isArray(dO.data) ? dO.data : [];
        setOrdersCount(orders.length);
        if (orders.length > 0) setLastOrder(orders[0]);

        let resT = await fetch('/api/auth/my-trainings', { credentials: 'include' });
        if (resT.status === 401) {
          const ref = await fetch('/api/auth/refresh', { method: 'POST', credentials: 'include' });
          if (ref.ok) resT = await fetch('/api/auth/my-trainings', { credentials: 'include' });
        }
        const dT = await resT.json();
        setTrainingsCount(resT.ok && Array.isArray(dT.data) ? dT.data.length : 0);
      } catch { /* ignore */ } finally {
        setStatsLoading(false);
      }
    };
    load();
  }, []);

  const hour = new Date().getHours();
  const greeting = hour < 12
    ? t('Mirëmëngjes', 'Good morning')
    : hour < 18
    ? t('Mirëdita', 'Good afternoon')
    : t('Mirëmbrëma', 'Good evening');

  const initials = `${user.firstName?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase();

  const STAT_ST: Record<string, { label: string; color: string }> = {
    paid:      { label: t('Paguar', 'Paid'),       color: '#059669' },
    pending:   { label: t('Në pritje', 'Pending'),  color: '#d97706' },
    cancelled: { label: t('Anuluar', 'Cancelled'),  color: '#dc2626' },
    refunded:  { label: t('Rimbursuar','Refunded'), color: '#7c3aed' },
  };

  const checklist = [
    { done: true,                              label: t('Llogaria u krijua', 'Account created') },
    { done: ordersCount > 0,                   label: t('Bëre blerjen e parë', 'Made your first purchase') },
    { done: hasRetreat || trainingsCount > 0,  label: t('U regjistrove në retreat ose trajnim', 'Registered for retreat or training') },
    { done: hasRetreat,                        label: t('Ke akses në meditimet premium', 'Access to premium meditations') },
  ];

  return (
    <div className="space-y-5">

      {/* ── Hero banner ── */}
      <div className="relative rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #3b1fa3 0%, #6d28d9 60%, #a855f7 100%)' }}>
        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #fff, transparent)' }} />
        <div className="absolute -right-2 bottom-0 w-24 h-24 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #fff, transparent)' }} />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-15 hidden sm:block">
          <svg width="90" height="90" viewBox="0 0 64 64" fill="none">
            <path d="M32 8C32 8 24 18 24 28C24 33 27.6 37 32 37C36.4 37 40 33 40 28C40 18 32 8 32 8Z" fill="white"/>
            <path d="M12 22C12 22 18 32 26 35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M52 22C52 22 46 32 38 35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6 14C6 14 14 24 22 28" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
            <path d="M58 14C58 14 50 24 42 28" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
            <path d="M32 37V52" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="px-6 py-6 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white font-bold text-base shrink-0">
              {initials}
            </div>
            <div>
              <p className="text-violet-200 text-xs font-medium">{greeting}</p>
              <h1 className="text-xl md:text-2xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {user.firstName} {user.lastName}
              </h1>
            </div>
          </div>
          <p className="text-violet-100 text-sm leading-relaxed max-w-sm mb-4">
            {t('Ky është hapësira jote personale — menaxho meditimet, trajnimet dhe udhëtimin tënd.', 'This is your personal space — manage your meditations, trainings and journey.')}
          </p>
          {trainingsCount > 0 && (
            <Link to="/eventet/trajnime-online/platforma"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-violet-700 bg-white hover:bg-violet-50 transition-all shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
              </svg>
              {t('Hyr në Platformë', 'Access Platform')}
            </Link>
          )}
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: t('Porosi', 'Orders'),    value: statsLoading ? '…' : String(ordersCount),   color: '#fef3c7', text: '#d97706' },
          { label: t('Trajnime', 'Trainings'), value: statsLoading ? '…' : String(trainingsCount), color: '#d1fae5', text: '#059669' },
          { label: t('Meditime', 'Meditations'), value: hasRetreat ? t('Premium', 'Premium') : '2 free', color: '#ede9fe', text: '#7c3aed' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
            <p className="text-lg font-bold" style={{ color: s.text }}>{s.value}</p>
            <p className="text-xs text-zinc-400 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Quick actions ── */}
      <div>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">{t('Çfarë dëshironi të bëni?', 'What would you like to do?')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { key: 'meditimet' as Section, icon: Headphones,   bg: '#ede9fe', ic: '#7c3aed', label: t('Meditimet e mia','My Meditations'),  desc: t('Dëgo meditimet falas dhe premium.','Listen to free and premium meditations.') },
            { key: 'trajnimet' as Section, icon: GraduationCap,bg: '#d1fae5', ic: '#059669', label: t('Trajnimet e mia','My Trainings'),    desc: t('Shiko trajnimet ku jeni regjistruar.','View the trainings you have registered for.') },
            { key: 'librat'    as Section, icon: BookOpen,     bg: '#fce7f3', ic: '#db2777', label: t('Librat e mi','My Books'),            desc: t('Librat që keni blerë.','Books you have purchased.') },
            { key: 'porosit'   as Section, icon: ShoppingBag,  bg: '#fef3c7', ic: '#d97706', label: t('Porositë e mia','My Orders'),        desc: t('Historia e blerjeve dhe pagesave tuaja.','Your purchase and payment history.') },
            { key: 'profili'   as Section, icon: User,         bg: '#e0f2fe', ic: '#0284c7', label: t('Profili im','My Profile'),           desc: t('Shiko dhe përditëso të dhënat e llogarisë.','View and update your account details.') },
          ].map(({ key, icon: Icon, bg, ic, label, desc }) => (
            <button key={key} onClick={() => setActive(key)}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-left hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: bg }}>
                  <Icon className="w-5 h-5" style={{ color: ic }} />
                </div>
                <div>
                  <p className="font-semibold text-zinc-800 text-sm">{label}</p>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Last order ── */}
      {lastOrder && (
        <div>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">{t('Aktiviteti i fundit', 'Recent activity')}</p>
          <button onClick={() => setActive('porosit')}
            className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center justify-between text-left hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-4 h-4 text-amber-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-800">{t('Porosia', 'Order')} #{lastOrder.id}</p>
                <p className="text-xs text-zinc-400">{new Date(lastOrder.createdAt).toLocaleDateString('sq-AL', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ color: STAT_ST[lastOrder.status]?.color ?? '#6b7280', backgroundColor: lastOrder.status === 'paid' ? '#d1fae5' : lastOrder.status === 'pending' ? '#fef3c7' : '#fee2e2' }}>
                {STAT_ST[lastOrder.status]?.label ?? lastOrder.status}
              </span>
              <p className="text-sm font-bold text-zinc-700">{lastOrder.totalAmount} {lastOrder.currency}</p>
              <ChevronRight className="w-4 h-4 text-zinc-300" />
            </div>
          </button>
        </div>
      )}

      {/* ── Onboarding checklist ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <p className="text-sm font-bold text-zinc-800 mb-4">{t('Hapat e tua', 'Your journey')}</p>
        <div className="space-y-3">
          {checklist.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${item.done ? 'bg-violet-600' : 'border-2 border-zinc-200'}`}>
                {item.done && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                )}
              </div>
              <p className={`text-sm ${item.done ? 'text-zinc-700 font-medium' : 'text-zinc-400'}`}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Unlock premium ── */}
      {!hasRetreat && (
        <div className="rounded-2xl border border-violet-100 p-5 flex items-start gap-4" style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%)' }}>
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#ede9fe' }}>
            <Key className="w-5 h-5" style={{ color: '#7c3aed' }} />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-zinc-800 text-sm">{t('Zhblloko meditimet premium', 'Unlock premium meditations')}</p>
            <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{t('Regjistrohu në retreat ose trajnim për të aksesuar të gjitha meditimet ekskluzive.', 'Join a retreat or training to access all exclusive meditations.')}</p>
            <Link to="/eventet/retreat" className="inline-flex items-center gap-1 mt-2.5 text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors">
              {t('Shiko retreat-et', 'View retreats')} <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const ProfileView = ({ user, t }: { user: any; t: any }) => {
  const [profile, setProfile] = useState<any>(null);
  const [ordersCount, setOrdersCount] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        let res = await fetch('/api/auth/me', { credentials: 'include' });
        if (res.status === 401) {
          const ref = await fetch('/api/auth/refresh', { method: 'POST', credentials: 'include' });
          if (ref.ok) res = await fetch('/api/auth/me', { credentials: 'include' });
        }
        const d = await res.json();
        if (res.ok) setProfile(d.data?.user ?? d.user ?? null);
      } catch { /* ignore */ }

      try {
        let res2 = await fetch('/api/auth/my-orders', { credentials: 'include' });
        if (res2.status === 401) {
          const ref = await fetch('/api/auth/refresh', { method: 'POST', credentials: 'include' });
          if (ref.ok) res2 = await fetch('/api/auth/my-orders', { credentials: 'include' });
        }
        const d2 = await res2.json();
        if (res2.ok) setOrdersCount(Array.isArray(d2.data) ? d2.data.length : 0);
      } catch { /* ignore */ }
    };
    load();
  }, []);

  const data = profile ?? user;
  const joinDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString('sq-AL', { day: '2-digit', month: 'long', year: 'numeric' })
    : '—';

  return (
    <div className="space-y-6">
      <SectionHeader icon={User} title={t('Profili im', 'My Profile')} desc={t('Të dhënat e llogarisë suaj.', 'Your account details.')} />
      <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
        {/* Avatar + name */}
        <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
          <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-white text-xl font-bold shrink-0">
            {`${data.firstName?.[0] ?? ''}${data.lastName?.[0] ?? ''}`.toUpperCase()}
          </div>
          <div>
            <p className="font-bold text-zinc-900 text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{data.firstName} {data.lastName}</p>
            <p className="text-sm text-zinc-500">{data.email}</p>
          </div>
        </div>

        {/* Fields */}
        {[
          { label: t('Emri', 'First Name'),    value: data.firstName },
          { label: t('Mbiemri', 'Last Name'),   value: data.lastName },
          { label: 'Email',                      value: data.email },
          { label: t('Telefon', 'Phone'),        value: data.phone || '—' },
          { label: t('Anëtar që nga', 'Member since'), value: joinDate },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between py-2 border-b border-gray-50">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">{label}</span>
            <span className="text-sm font-medium text-zinc-800">{value}</span>
          </div>
        ))}

        {/* Orders count */}
        <div className="flex items-center justify-between py-2">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">{t('Numri i porosive', 'Total orders')}</span>
          <span className="text-sm font-bold text-violet-700">{ordersCount !== null ? ordersCount : '—'}</span>
        </div>
      </div>
    </div>
  );
};

const MeditimetView = ({ meditations, hasRetreat, lockedMsg, setLockedMsg, t, navigate }: {
  meditations: Meditation[]; hasRetreat: boolean; lockedMsg: boolean;
  setLockedMsg: (v: boolean) => void; t: any; navigate: any;
}) => {
  const [comingSoon, setComingSoon] = useState(false);
  const [playing, setPlaying] = useState<Meditation | null>(null);
  const free = meditations.filter(m => m.free);
  const premium = meditations.filter(m => !m.free);

  const openMeditation = (m: Meditation) => {
    if (m.audioUrl) { setPlaying(m); setComingSoon(false); }
    else if (m.pdfUrl) { window.open(m.pdfUrl, '_blank'); setComingSoon(false); }
    else setComingSoon(true);
  };

  return (
    <div className="space-y-6">
      <SectionHeader icon={Headphones} title={t('Meditimet e mia', 'My Meditations')} desc={t('Zgjidh meditimin që dëshiron të dëgjosh.', 'Choose the meditation you want to listen to.')} />

      {/* Free */}
      <div>
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">{t('Meditime Falas', 'Free Meditations')}</p>
        <div className="space-y-3">
          {free.map(m => <MeditationCard key={m.id} m={m} unlocked t={t} onClick={() => openMeditation(m)} />)}
        </div>
        {comingSoon && (
          <div className="rounded-2xl p-4 flex items-start gap-3" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
            <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#7c3aed' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {t('PDF-ja e këtij meditimi është duke u përgatitur dhe do të jetë e disponueshme së shpejti.', 'The PDF for this meditation is being prepared and will be available soon.')}
            </p>
          </div>
        )}
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
              onClick={() => { if (!hasRetreat) setLockedMsg(true); else openMeditation(m); }} />
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

      {/* Audio player modal */}
      {playing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          onClick={() => setPlaying(null)}>
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <p className="font-bold text-zinc-800">{playing.title}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{playing.description}</p>
              </div>
              <button onClick={() => setPlaying(null)} className="p-1 rounded-lg hover:bg-gray-100 transition shrink-0">
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
            <audio controls autoPlay src={playing.audioUrl} className="w-full">
              {t('Shfletuesi juaj nuk mbështet luajtjen e audios.', 'Your browser does not support audio playback.')}
            </audio>
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
      {unlocked && m.pdfUrl && (
        <span className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-violet-600">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          {t('Hap PDF', 'Open PDF')}
        </span>
      )}
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

const STATUS_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  paid:      { label: 'Paguar',    color: '#059669', bg: '#d1fae5' },
  pending:   { label: 'Në pritje', color: '#d97706', bg: '#fef3c7' },
  cancelled: { label: 'Anuluar',   color: '#dc2626', bg: '#fee2e2' },
  refunded:  { label: 'Rimbursuar',color: '#7c3aed', bg: '#ede9fe' },
};

const TrainingsView = ({ t }: { t: any }) => {
  const [trainings, setTrainings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTrainings = useCallback(async () => {
    try {
      let res = await fetch('/api/auth/my-trainings', { credentials: 'include' });
      if (res.status === 401) {
        const ref = await fetch('/api/auth/refresh', { method: 'POST', credentials: 'include' });
        if (ref.ok) res = await fetch('/api/auth/my-trainings', { credentials: 'include' });
      }
      const d = await res.json();
      if (!res.ok) throw new Error(d.message || 'Gabim');
      setTrainings(d.data);
    } catch (e: any) {
      setError(e.message || t('Gabim gjatë ngarkimit.', 'Error loading trainings.'));
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => { fetchTrainings(); }, [fetchTrainings]);

  if (loading) return (
    <div className="flex justify-center py-16">
      <div className="w-7 h-7 rounded-full border-2 border-violet-600 border-t-transparent animate-spin" />
    </div>
  );

  if (error) return <div className="py-8 text-center text-sm text-red-500">{error}</div>;

  return (
    <div className="space-y-6">
      <SectionHeader icon={GraduationCap} title={t('Trajnimet e mia', 'My Trainings')} desc={t('Trajnimet që keni ndjekur.', 'Trainings you have registered for.')} />
      {trainings.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8 text-violet-400" />
          </div>
          <p className="text-sm text-zinc-500">{t('Nuk keni asnjë trajnim të regjistruar ende.', 'You have no registered trainings yet.')}</p>
          <Link to="/eventet/trajnime-online" className="inline-block mt-4 text-xs font-semibold text-violet-600 hover:underline">
            {t('Shiko trajnimet →', 'View trainings →')}
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {trainings.map((tr: any) => {
            const st = STATUS_LABELS[tr.status] ?? { label: tr.status, color: '#6b7280', bg: '#f3f4f6' };
            const date = new Date(tr.createdAt).toLocaleDateString('sq-AL', { day: '2-digit', month: 'long', year: 'numeric' });
            return (
              <div key={tr.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-violet-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-800">{tr.productTitleSq}</p>
                      <p className="text-xs text-zinc-400 mt-0.5">{date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ color: st.color, backgroundColor: st.bg }}>
                      {st.label}
                    </span>
                    {tr.totalAmount && (
                      <p className="text-sm font-bold text-zinc-700">{tr.totalAmount} {tr.currency}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="pt-2">
            <Link to="/eventet/trajnime-online/platforma" className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 hover:underline">
              {t('Hyr në Platformë →', 'Access Platform →')}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const OrdersView = ({ t }: { t: any }) => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchOrders = useCallback(async () => {
    try {
      let res = await fetch('/api/auth/my-orders', { credentials: 'include' });
      if (res.status === 401) {
        // Token skadoi — provo refresh
        const ref = await fetch('/api/auth/refresh', { method: 'POST', credentials: 'include' });
        if (ref.ok) {
          res = await fetch('/api/auth/my-orders', { credentials: 'include' });
        }
      }
      const d = await res.json();
      if (!res.ok) throw new Error(d.message || 'Gabim');
      setOrders(d.data);
    } catch (e: any) {
      setError(e.message || t('Gabim gjatë ngarkimit.', 'Error loading orders.'));
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => { fetchOrders(); }, [fetchOrders]);

  if (loading) return (
    <div className="flex justify-center py-16">
      <div className="w-7 h-7 rounded-full border-2 border-violet-600 border-t-transparent animate-spin" />
    </div>
  );

  if (error) return (
    <div className="py-8 text-center text-sm text-red-500">{error}</div>
  );

  return (
    <div className="space-y-6">
      <SectionHeader icon={ShoppingBag} title={t('Porositë e mia', 'My Orders')} desc={t('Historia e blerjeve tuaja.', 'Your purchase history.')} />
      {orders.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-8 h-8 text-violet-400" />
          </div>
          <p className="text-sm text-zinc-500">{t('Nuk keni asnjë porosi ende.', 'You have no orders yet.')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order: any) => {
            const st = STATUS_LABELS[order.status] ?? { label: order.status, color: '#6b7280', bg: '#f3f4f6' };
            const date = new Date(order.createdAt).toLocaleDateString('sq-AL', { day: '2-digit', month: 'long', year: 'numeric' });
            return (
              <div key={order.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Order header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <div>
                    <p className="font-bold text-zinc-800 text-sm">{order.items[0]?.productTitleSq ?? `${t('Porosia', 'Order')} #${order.id}`}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ color: st.color, backgroundColor: st.bg }}>
                      {st.label}
                    </span>
                    <p className="text-sm font-bold text-zinc-800">{order.totalAmount} {order.currency}</p>
                  </div>
                </div>
                {/* Items */}
                <div className="px-5 py-3 space-y-2">
                  {order.items.length === 0 && (
                    <p className="text-xs text-zinc-400 italic">{t('Nuk ka artikuj.', 'No items.')}</p>
                  )}
                  {order.items.map((item: any, i: number) => (
                    <div key={i} className="flex items-center justify-between py-1">
                      <div>
                        <p className="text-sm font-medium text-zinc-800">{item.productTitleSq}</p>
                        {item.variantNameSq && <p className="text-xs text-zinc-400">{item.variantNameSq}</p>}
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-zinc-700">{item.unitPrice} {order.currency}</p>
                        {item.quantity > 1 && <p className="text-xs text-zinc-400">x{item.quantity}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

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
        <label className="block text-xs font-semibold text-zinc-600 mb-0.5">{t('Konfirmo me fjalëkalimin tënd', 'Confirm with your password')}</label>
        <p className="text-xs text-zinc-400 mb-1.5">{t('Fjalëkalimi me të cilin hyni në llogarinë tuaj aktuale.', 'The password you use to log into your current account.')}</p>
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
