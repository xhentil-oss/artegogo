import { useState } from 'react';
import { User, Mail, Phone, Globe, MapPin, CreditCard, Lock, Heart, Brain, Clock, Users, ChevronRight, MessageCircle, Shield, X, CheckCircle, Headphones } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const WhatsAppSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className ?? 'w-7 h-7 fill-white'}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LotusSmall = () => (
  <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8C32 8 24 18 24 28C24 33 27.6 37 32 37C36.4 37 40 33 40 28C40 18 32 8 32 8Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.3"/>
    <path d="M12 22C12 22 18 32 26 35" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
    <path d="M52 22C52 22 46 32 38 35" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
    <path d="M6 14C6 14 14 24 22 28" stroke="#7c3aed" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <path d="M58 14C58 14 50 24 42 28" stroke="#7c3aed" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <path d="M32 37V52" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

export const RegjistrohuRetreatPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);

  return (
    <div className="min-h-screen pb-12" style={{ backgroundColor: '#f8f7ff' }}>

      {/* Header */}
      <div className="text-center pt-10 pb-6 px-4">
        <div className="flex justify-center mb-3">
          <svg width="48" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 4C32 4 22 16 22 28C22 34 26.5 38.5 32 38.5C37.5 38.5 42 34 42 28C42 16 32 4 32 4Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.3"/>
            <path d="M32 4C32 4 42 16 42 28" stroke="#7c3aed" strokeWidth="1" opacity="0.35"/>
            <path d="M8 20C8 20 15 32 24 36" stroke="#7c3aed" strokeWidth="1.3" strokeLinecap="round" opacity="0.8"/>
            <path d="M56 20C56 20 49 32 40 36" stroke="#7c3aed" strokeWidth="1.3" strokeLinecap="round" opacity="0.8"/>
            <path d="M3 12C3 12 12 24 22 29" stroke="#7c3aed" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
            <path d="M61 12C61 12 52 24 42 29" stroke="#7c3aed" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
            <path d="M14 6C14 6 20 20 27 27" stroke="#7c3aed" strokeWidth="0.8" strokeLinecap="round" opacity="0.25"/>
            <path d="M50 6C50 6 44 20 37 27" stroke="#7c3aed" strokeWidth="0.8" strokeLinecap="round" opacity="0.25"/>
            <path d="M32 38.5V58" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
            <ellipse cx="32" cy="59" rx="7" ry="1.8" fill="#ede9fe" opacity="0.5"/>
          </svg>
        </div>
        <h1 className="font-bold leading-tight mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: '#1a1a2e' }}>
          {t("Regjistrohu për ", "Register for ")}
          <span style={{ color: '#7c3aed', fontStyle: 'italic' }}>{t("Retreatin", "the Retreat")}</span>
        </h1>
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-px w-8" style={{ background: 'rgba(124,58,237,0.3)' }} />
          <span style={{ color: '#7c3aed', fontSize: 14 }}>♦</span>
          <div className="h-px w-8" style={{ background: 'rgba(124,58,237,0.3)' }} />
        </div>
        <p className="text-zinc-600 text-sm md:text-base max-w-md mx-auto">
          {t("Plotëso të dhënat më poshtë për të rezervuar vendin tënd.", "Fill in the details below to reserve your spot.")}
        </p>
      </div>

      {/* Main layout */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

          {/* Left: Form */}
          <div className="lg:col-span-3 space-y-5">

            {/* Personal details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ede9fe' }}>
                  <User className="w-5 h-5" style={{ color: '#7c3aed' }} />
                </div>
                <h2 className="font-bold text-zinc-800 text-base">{t("Të dhënat personale", "Personal details")}</h2>
              </div>
              <p className="text-xs text-zinc-400 mb-5 pl-11">{t("Ju lutemi plotësoni të dhënat tuaja saktësisht.", "Please fill in your details accurately.")}</p>

              <div className="space-y-4">
                {/* Emër & Mbiemër */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t("Emër", "First name")}</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input type="text" placeholder={t("Shkruaj emrin tënd", "First name")}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
                        style={{ backgroundColor: '#fafafa' }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t("Mbiemër", "Last name")}</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input type="text" placeholder={t("Shkruaj mbiemrin tënd", "Last name")}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
                        style={{ backgroundColor: '#fafafa' }} />
                    </div>
                  </div>
                </div>

                {/* Shtet & Qytet */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t("Shtet", "Country")}</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      <select className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all appearance-none"
                        style={{ backgroundColor: '#fafafa', color: '#71717a' }}>
                        <option value="">{t("Zgjidh shtetin", "Select country")}</option>
                        <option>Shqipëri</option><option>Kosovë</option><option>Maqedoni e Veriut</option>
                        <option>Mal i Zi</option><option>Zvicër</option><option>Gjermani</option>
                        <option>Itali</option><option>Greqi</option><option>Mbretëria e Bashkuar</option>
                        <option>SHBA</option><option>Tjetër</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t("Qytet", "City")}</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input type="text" placeholder={t("Shkruaj qytetin", "City")}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
                        style={{ backgroundColor: '#fafafa' }} />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input type="email" placeholder="example@email.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
                      style={{ backgroundColor: '#fafafa' }} />
                  </div>
                </div>

                {/* Nr. celularit */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t("Nr. i celularit", "Phone number")}</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input type="tel" placeholder="+355 69 242 0827"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
                      style={{ backgroundColor: '#fafafa' }} />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t("Nr. i WhatsApp", "WhatsApp number")}</label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input type="tel" placeholder={t("Shkruaj të njëjtin numër nëse përputhet me nr. tënd të celularit", "Same as phone if applicable")}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
                      style={{ backgroundColor: '#fafafa' }} />
                  </div>
                </div>

                {/* Dhoma */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t("Preferenca e dhomës", "Room preference")}</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <select className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all appearance-none"
                      style={{ backgroundColor: '#fafafa', color: '#3f3f46' }}>
                      <option value="">{t("Zgjidh preferencën", "Select preference")}</option>
                      <option value="single">{t("Dhomë teke (vetëm për ty)", "Single room (just for you)")}</option>
                      <option value="shared">{t("Dhomë e ndarë (me persona të tjerë)", "Shared room (with other participants)")}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagesa */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ede9fe' }}>
                  <CreditCard className="w-5 h-5" style={{ color: '#7c3aed' }} />
                </div>
                <h2 className="font-bold text-zinc-800 text-base">{t("Pagesa e sigurt", "Secure payment")}</h2>
              </div>
              <p className="text-xs text-zinc-400 mb-4 pl-11">{t("Pagesa bëhet në mënyrë të sigurt përmes partnerit tanë të besuar.", "Payment is made securely through our trusted partner.")}</p>

              <div className="rounded-xl p-3 mb-4 flex items-start gap-2" style={{ backgroundColor: '#f8f7ff', border: '1px solid #ede9fe' }}>
                <Lock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#7c3aed' }} />
                <p className="text-xs text-zinc-500">{t("Të dhënat e kartës bankare nuk ruhen nga ne.", "Your card details are not stored by us.")}</p>
              </div>

              {/* Payment logos */}
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-bold text-sm" style={{ color: '#635bff', fontFamily: 'Arial, sans-serif' }}>stripe</span>
                <span className="font-extrabold text-sm px-2 py-0.5 rounded" style={{ color: '#1a1f71', border: '1.5px solid #1a1f71', fontFamily: 'Arial, sans-serif', letterSpacing: 1 }}>VISA</span>
                <div className="flex items-center -space-x-1.5">
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#eb001b' }} />
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#f79e1b' }} />
                </div>
                <div className="flex items-center gap-1 ml-auto">
                  <Shield className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-xs text-green-700 font-medium">256-bit SSL Secure Payment</span>
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded shrink-0 cursor-pointer accent-violet-600" />
              <span className="text-xs text-zinc-600 leading-relaxed">
                {t("Duke plotësuar këtë formular, konfirmoj se të dhënat e mia janë të sakta dhe dëshiroj të regjistrohem për retreatin.", "By completing this form, I confirm that my details are accurate and I wish to register for the retreat.")}
              </span>
            </label>

            {/* Button */}
            <button
              onClick={() => setReserveOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: '#7c3aed' }}>
              {t("Regjistrohu", "Register")}
              <ChevronRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-zinc-400 text-center leading-relaxed">
              {t("Të dhënat tuaja janë të mbrojtura dhe përdoren vetëm për regjistrimin tuaj.", "Your data is protected and used only for your registration.")}
            </p>
          </div>

          {/* Right: Info panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              {/* Image with overlay text */}
              <div className="relative">
                <img src="/img/TONI1692.JPG" alt="Retreat" className="w-full h-44 object-cover" />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-zinc-800 mb-4" style={{ fontSize: 16 }}>
                  {t("Pse ky retreat?", "Why this retreat?")}
                </h3>

                <div className="space-y-4 mb-5">
                  {[
                    { Icon: Heart,  title: t("Zhvillim i thellë personal", "Deep personal development"),      desc: t("Hyr udhëtim i strukturuar për transformim të qëndrueshëm.", "Begin a structured journey for lasting transformation.") },
                    { Icon: Brain,  title: t("Metoda shkencore", "Scientific methods"),                       desc: t("Bazuar në neuroshkencë, psikologji moderne dhe praktika të provuara.", "Based on neuroscience, modern psychology and proven practices.") },
                    { Icon: Clock,  title: t("Mjedis transformues", "Transformative environment"),            desc: t("Largohuni nga rutina dhe zhytuni plotësisht në përvojën e retreatit.", "Disconnect from routine and immerse yourself fully in the retreat experience.") },
                    { Icon: Users,  title: t("Mbështetje e vazhdueshme", "Ongoing support"),                  desc: t("Qasje në komunitet dhe mentorim gjatë gjithë udhëtimit.", "Access to community and mentoring throughout your journey.") },
                  ].map(({ Icon, title, desc }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#ede9fe' }}>
                        <Icon className="w-4 h-4" style={{ color: '#7c3aed' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-800" style={{ fontSize: 16 }}>{title}</p>
                        <p className="text-zinc-500 mt-0.5 leading-relaxed" style={{ fontSize: 16 }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 mb-4">
                  <h4 className="font-bold text-zinc-800 mb-3" style={{ fontSize: 16 }}>{t("Keni pytje?", "Have questions?")}</h4>
                  <div className="space-y-2">
                    <p className="text-zinc-500 mb-1" style={{ fontSize: 16 }}>{t("Ne jemi këtu për t'ju ndihmuar.", "We are here to help you.")}</p>
                    <a href="tel:+355692420827" className="flex items-center gap-2 text-zinc-600 hover:text-violet-700 transition-colors" style={{ fontSize: 16 }}>
                      <Phone className="w-3.5 h-3.5" style={{ color: '#7c3aed' }} /> +355 69 242 0827
                    </a>
                    <a href="mailto:info@artegogo.com" className="flex items-center gap-2 text-zinc-600 hover:text-violet-700 transition-colors" style={{ fontSize: 16 }}>
                      <Mail className="w-3.5 h-3.5" style={{ color: '#7c3aed' }} /> info@artegogo.com
                    </a>
                    <a href="https://www.artegogo.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 hover:text-violet-700 transition-colors" style={{ fontSize: 16 }}>
                      <Globe className="w-3.5 h-3.5" style={{ color: '#7c3aed' }} /> www.artegogo.com
                    </a>
                  </div>
                </div>

                <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: '#f8f7ff', border: '1px solid #ede9fe' }}>
                  <p className="text-zinc-600 italic leading-relaxed" style={{ fontSize: 16 }}>
                    "{t("Investimi më i mirë që mund të bësh është ai për veten.", "The best investment you can make is in yourself.")}"
                  </p>
                </div>

                <div className="flex justify-center">
                  <LotusSmall />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Reserve Modal */}
      {reserveOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}>
          <div className="bg-white rounded-3xl shadow-2xl relative overflow-y-auto" style={{ width: 800, maxWidth: '95vw', maxHeight: '90vh' }}>
            <button onClick={() => setReserveOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-gray-100 transition-all z-10">
              <X className="w-5 h-5" />
            </button>
            <div className="px-7 pt-4 pb-4 text-center">
              <div className="flex justify-center mb-1">
                <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
                  <path d="M32 8C32 8 24 18 24 28C24 33 27.6 37 32 37C36.4 37 40 33 40 28C40 18 32 8 32 8Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.3"/>
                  <path d="M12 22C12 22 18 32 26 35" stroke="#7c3aed" strokeWidth="1.3" strokeLinecap="round" opacity="0.8"/>
                  <path d="M52 22C52 22 46 32 38 35" stroke="#7c3aed" strokeWidth="1.3" strokeLinecap="round" opacity="0.8"/>
                  <path d="M32 37V56" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="font-bold mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 26, color: '#4e29c5' }}>
                {t("Rezervo vendin tënd", "Reserve your spot")}
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-px w-10" style={{ background: 'rgba(124,58,237,0.25)' }} />
                <span style={{ color: '#7c3aed', fontSize: 14 }}>♦</span>
                <div className="h-px w-10" style={{ background: 'rgba(124,58,237,0.25)' }} />
              </div>
              <p className="text-zinc-500 mb-3 max-w-sm mx-auto" style={{ fontSize: 13 }}>
                {t("Zgjidh mënyrën që preferon për të siguruar vendin në retreat.", "Choose how you prefer to secure your spot in the retreat.")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="flex flex-col items-center rounded-2xl p-4 border-2 text-center" style={{ borderColor: '#7c3aed', backgroundColor: '#faf9ff' }}>
                  <div className="relative w-12 h-12 mb-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ede9fe' }}>
                      <CreditCard className="w-6 h-6" style={{ color: '#7c3aed' }} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7c3aed' }}>
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-1" style={{ color: '#4e29c5', fontSize: 16, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {t("Regjistrohu online", "Register online")}
                  </h3>
                  <div className="flex justify-center mb-2"><span style={{ color: '#7c3aed', fontSize: 12 }}>♦</span></div>
                  <p className="text-zinc-500 leading-relaxed mb-3" style={{ fontSize: 13 }}>
                    {t("Plotëso formularin dhe kryej pagesën menjëherë për të siguruar vendin tënd.", "Fill the form and complete payment immediately to secure your spot.")}
                  </p>
                  <button
                    onClick={() => { setReserveOpen(false); navigate('/eventet/retreat/pagesa'); }}
                    className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold transition-all hover:scale-105"
                    style={{ backgroundColor: '#7c3aed', fontSize: 15 }}>
                    {t("Regjistrohu online", "Register online")}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex flex-col items-center rounded-2xl p-4 border-2 text-center" style={{ borderColor: '#22c55e', backgroundColor: '#f0fdf4' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#22c55e' }}>
                    <WhatsAppSVG className="w-7 h-7 fill-white" />
                  </div>
                  <h3 className="font-bold mb-1" style={{ color: '#16a34a', fontSize: 16, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {t("Regjistrohu me WhatsApp", "Register via WhatsApp")}
                  </h3>
                  <div className="flex justify-center mb-2"><span style={{ color: '#22c55e', fontSize: 12 }}>♦</span></div>
                  <p className="text-zinc-500 leading-relaxed mb-3" style={{ fontSize: 13 }}>
                    {t("Flit direkt me stafin tonë. Do të të ndihmojmë me regjistrimin, pagesën dhe çdo pyetje që mund të kesh.", "Talk directly with our staff. We will help with registration, payment and any question you may have.")}
                  </p>
                  <a href="https://wa.me/355692420827" target="_blank" rel="noopener noreferrer"
                    className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold transition-all hover:scale-105"
                    style={{ backgroundColor: '#22c55e', fontSize: 15 }}>
                    <WhatsAppSVG className="w-4 h-4 fill-white shrink-0" />
                    {t("Na shkruaj në WhatsApp", "Message us on WhatsApp")}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 flex-wrap border-t border-gray-100 pt-4">
                <div className="flex items-center gap-1.5 text-zinc-500" style={{ fontSize: 12 }}>
                  <Shield className="w-3.5 h-3.5" style={{ color: '#7c3aed' }} />
                  {t("Pagesë e sigurt", "Secure payment")}
                </div>
                <span className="text-zinc-300">•</span>
                <div className="flex items-center gap-1.5 text-zinc-500" style={{ fontSize: 12 }}>
                  <CheckCircle className="w-3.5 h-3.5" style={{ color: '#7c3aed' }} />
                  {t("Konfirmim i menjëhershëm", "Instant confirmation")}
                </div>
                <span className="text-zinc-300">•</span>
                <div className="flex items-center gap-1.5 text-zinc-500" style={{ fontSize: 12 }}>
                  <Headphones className="w-3.5 h-3.5" style={{ color: '#7c3aed' }} />
                  {t("Mbështetje nga stafi", "Staff support")}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
