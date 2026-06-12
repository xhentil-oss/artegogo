import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const HL = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#a78bfa" }}>{children}</span>
);

const SLIDES = [
  {
    bg: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777298905998-0.jpeg",
    bgPos: "center top",
  },
  {
    bg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80",
    bgPos: "center center",
  },
  {
    bg: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1400&q=80",
    bgPos: "center center",
  },
];

const STATS = [
  {
    value: "200+",
    label: "PJESMARRËS",
    sub: "Në retreat-et tona",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    value: "50+",
    label: "EVENTE LIVE",
    sub: "Transformuese",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
  {
    value: "1000+",
    label: "TRAJNIME ONLINE",
    sub: "Ndryshime reale",
    icon: (
      <>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
      </>
    ),
  },
  {
    value: "5 ★",
    label: "VLERËSIM MESATAR",
    sub: "Nga komuniteti ynë",
    icon: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
  },
];

// Infinite loop: clone last slide at front, clone first slide at end
// Layout: [clone-last, slide0, slide1, slide2, clone-first]
//          index  0       1      2      3        4
const LOOP = [SLIDES[SLIDES.length - 1], ...SLIDES, SLIDES[0]];
const FIRST_REAL = 1;
const LAST_REAL = SLIDES.length; // = 3

export const HeroSection = () => {
  // start at index 1 (first real slide)
  const [current, setCurrent] = useState(FIRST_REAL);
  const [visible, setVisible] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();
  const slidingRef = useRef(false);
  const currentRef = useRef(FIRST_REAL);
  const touchStartX = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => { currentRef.current = current; }, [current]);

  const goTo = (idx: number) => {
    if (slidingRef.current) return;
    slidingRef.current = true;
    setNoTransition(false);
    setCurrent(idx);
    currentRef.current = idx;
    setTimeout(() => {
      // If we landed on a clone, silently jump to the real counterpart
      if (idx === 0) {
        setNoTransition(true);
        setCurrent(LAST_REAL);
        currentRef.current = LAST_REAL;
        setTimeout(() => { setNoTransition(false); slidingRef.current = false; }, 30);
      } else if (idx === LOOP.length - 1) {
        setNoTransition(true);
        setCurrent(FIRST_REAL);
        currentRef.current = FIRST_REAL;
        setTimeout(() => { setNoTransition(false); slidingRef.current = false; }, 30);
      } else {
        slidingRef.current = false;
      }
    }, 650);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) goTo(currentRef.current + 1);
    }, 7000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = e.touches[0].clientX - touchStartX.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    setIsDragging(false);
    setDragOffset(0);
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? currentRef.current + 1 : currentRef.current - 1);
    }
  };

  // dot index (0-based) for the 3 real slides
  const dotIndex = (current - FIRST_REAL + SLIDES.length) % SLIDES.length;

  const StatsBar = () => (
    <div className="stats-bar absolute bottom-[-48px] left-0 right-0 w-full px-4 md:px-10 lg:px-16" style={{ zIndex: 9999 }}>
      <div
        className="max-w-5xl mx-auto flex rounded-2xl overflow-hidden"
        style={{ background: "#ffffff", border: "1px solid #f0eeff", boxShadow: "0 8px 32px rgba(78,41,197,0.12)" }}
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="flex-1 flex items-center gap-1 md:gap-4 px-1 md:px-7 py-2 md:py-6"
            style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
          >
            <div className="w-6 h-6 md:w-14 md:h-14 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "#EDE8FA" }}>
              <svg className="w-3 h-3 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                {stat.icon}
              </svg>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>
              <p className="stat-value text-zinc-900 text-[11px] md:text-xl leading-none mb-0.5" style={{ fontWeight: 700 }}>{stat.value}</p>
              <p className="stat-label text-zinc-500 text-[8px] md:text-[11px] uppercase leading-tight mb-0.5" style={{ fontWeight: 600, letterSpacing: "0.05em" }}>{stat.label}</p>
              <p className="stat-sub hidden md:block text-zinc-400 text-xs leading-tight" style={{ fontWeight: 400 }}>{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* ── MOBILE: full-page slider (swipe + auto-advance) ── */}
      <div
        className="md:hidden relative w-full h-[450px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: `${LOOP.length * 100}%`,
            transform: `translateX(calc(-${(current * 100) / LOOP.length}% + ${dragOffset}px))`,
            transition: isDragging || noTransition ? "none" : "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {LOOP.map((slide, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-center"
              style={{
                flex: `0 0 ${100 / LOOP.length}%`,
                backgroundImage: `url('${slide.bg}')`,
                backgroundSize: "cover",
                backgroundPosition: slide.bgPos,
                height: "100%",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(6,2,22,0.95) 0%, rgba(6,2,22,0.88) 28%, rgba(6,2,22,0.45) 48%, rgba(6,2,22,0.08) 65%, transparent 80%)",
                }}
              />
              <div
                className="relative z-10 px-6 pt-12 pb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <div
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(14px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    maxWidth: "90%",
                  }}
                >
                  {/* ri = real slide index (0-2), regardless of clone position */}
                  {(() => { const ri = (i - FIRST_REAL + SLIDES.length) % SLIDES.length; return (
                  <>
                  <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-2.5 py-1 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-300 animate-pulse inline-block" />
                    <span className="badge text-white/90 font-semibold tracking-widest uppercase" style={{ letterSpacing: "0.15em", fontSize: 8 }}>
                      {ri === 0 && t("Harmonizim Kuantik", "Quantum Harmonization")}
                      {ri === 1 && t("Retreat Intensive", "Retreat Intensive")}
                      {ri === 2 && t("Trajnime Online", "Online Training")}
                    </span>
                  </div>
                  <h1 className="leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, lineHeight: 1.1, fontSize: "clamp(3.8rem, 14vw, 4.5rem)", marginTop: 16, marginBottom: 28 }}>
                    {ri === 0 && (<><span className="block text-white mb-1">{t("Rikthehu në frekuencën tënde", "Return to your true")}</span><span className="block text-white italic">{t("të vërtetë.", "frequency.")}</span></>)}
                    {ri === 1 && (<><span className="block text-white mb-1">{t("Zbulo thellësinë e", "Discover the depth of")}</span><span className="block text-white italic">{t("vetë-njohjes tënde.", "your self-knowledge.")}</span></>)}
                    {ri === 2 && (<><span className="block text-white mb-1">{t("Mëso kudo,", "Learn anywhere,")}</span><span className="block text-white italic">{t("transformohu gjithmonë.", "transform always.")}</span></>)}
                  </h1>
                  <p className="text-sm text-white/80 mb-2 leading-relaxed line-clamp-2" style={{ fontWeight: 400 }}>
                    {ri === 0 && (<>{t("Kur", "When")} <HL>{t("zemra", "heart")}</HL>, <HL>{t("truri", "mind")}</HL> {t("dhe", "and")} <HL>{t("trupi", "body")}</HL> {t("harmonizohen... fillon", "align... begins the")} <HL>{t("transformimi", "transformation")}</HL>.</>)}
                    {ri === 1 && (<>{t("5 ditë transformim i plotë —", "5 days of complete transformation —")} <HL>{t("shpirtëror", "spiritual")}</HL>, <HL>{t("mendor", "mental")}</HL> {t("dhe", "and")} <HL>{t("fizik", "physical")}</HL>.</>)}
                    {ri === 2 && (<>{t("Mbi", "Over")} <HL>1000+</HL> {t("trajnime online në dispozicion tënde", "online trainings at your disposal")} <HL>24/7</HL>.</>)}
                  </p>
                  <p className="text-xs text-white mb-4 leading-relaxed line-clamp-2" style={{ fontWeight: 300 }}>
                    {ri === 0 && t("Një udhëtim transformues drejt qetësisë, vetëdijes dhe jetës në harmoni me ritmin tënd të brendshëm.", "A transformative journey toward inner peace, awareness and life in harmony with your inner rhythm.")}
                    {ri === 1 && t("Retreat me natyrë, heshtje dhe udhëzues të certifikuar. Largohesh ndryshe nga kush je sot.", "A retreat in nature, silence and certified guides. You leave different from who you are today.")}
                    {ri === 2 && t("Akses i plotë ndaj bibliotekës sonë: meditim, vetëdije, teknika kuantike dhe shumë më tepër.", "Full access to our library: meditation, mindfulness, quantum techniques and much more.")}
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <button
                      onClick={() => navigate(ri === 2 ? "/eventet/trajnime-online" : "/eventet/retreat")}
                      className="inline-flex items-center gap-1.5 text-white px-3 py-1.5 rounded-xl text-xs transition-all duration-300 hover:scale-105 active:scale-100"
                      style={{ backgroundColor: "#4e29c5", fontWeight: 600 }}
                    >
                      {ri === 2 ? <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                        : <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>}
                      {ri === 0 && t("Rezervo Retreat-in", "Book the Retreat")}
                      {ri === 1 && t("Rezervo Retreat-in", "Book the Retreat")}
                      {ri === 2 && t("Shiko Trajnimet", "View Trainings")}
                    </button>
                    <button
                      onClick={() => navigate(ri === 2 ? "/signup" : ri === 1 ? "/eventet/retreat" : "/eventet/trajnime-online")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all duration-300 hover:scale-105 active:scale-100"
                      style={{ fontWeight: 600, backgroundColor: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.75)", color: "white" }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                      {ri === 0 && t("Shiko Trajnimet Online", "View Online Trainings")}
                      {ri === 1 && t("Shiko Datat", "View Dates")}
                      {ri === 2 && t("Regjistrohu Falas", "Register Free")}
                    </button>
                  </div>
                  </>
                  ); })()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: sliding hero with dots ── */}
      <div className="hidden md:block relative min-h-[80vh] overflow-hidden">
        {/* Sliding track */}
        <div
          style={{
            display: "flex",
            height: "100%",
            width: `${LOOP.length * 100}%`,
            transform: `translateX(-${(current * 100) / LOOP.length}%)`,
            transition: noTransition ? "none" : "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
            minHeight: "80vh",
          }}
        >
          {LOOP.map((slide, i) => {
            const ri = (i - FIRST_REAL + SLIDES.length) % SLIDES.length;
            return (
              <div
                key={i}
                className="relative flex flex-col justify-center"
                style={{
                  flex: `0 0 ${100 / LOOP.length}%`,
                  backgroundImage: `url('${slide.bg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: slide.bgPos,
                  minHeight: "80vh",
                }}
              >
                {/* Gradient */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,2,22,0.95) 0%, rgba(6,2,22,0.88) 28%, rgba(6,2,22,0.45) 48%, rgba(6,2,22,0.08) 65%, transparent 80%)" }} />

                {/* Content */}
                <div className="relative z-10 px-12 lg:px-20 xl:px-28 pt-28 pb-24" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.6s ease, transform 0.6s ease", maxWidth: "52%" }}>
                    <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8">
                      <span className="w-2 h-2 rounded-full bg-violet-300 animate-pulse inline-block" />
                      <span className="text-white/90 font-semibold tracking-widest uppercase" style={{ letterSpacing: "0.15em", fontSize: 16 }}>
                        {ri === 0 && t("Harmonizim Kuantik", "Quantum Harmonization")}
                        {ri === 1 && t("Retreat Intensive", "Retreat Intensive")}
                        {ri === 2 && t("Trajnime Online", "Online Training")}
                      </span>
                    </div>
                    <h1 className="hero-title-lg leading-tight mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, lineHeight: 1.12 }}>
                      {ri === 0 && (<><span className="block text-5xl lg:text-[4rem] text-white mb-1">{t("Rikthehu në frekuencën tënde", "Return to your true")}</span><span className="block text-5xl lg:text-[4rem] text-white italic">{t("të vërtetë.", "frequency.")}</span></>)}
                      {ri === 1 && (<><span className="block text-5xl lg:text-[4rem] text-white mb-1">{t("Zbulo thellësinë e", "Discover the depth of")}</span><span className="block text-5xl lg:text-[4rem] text-white italic">{t("vetë-njohjes tënde.", "your self-knowledge.")}</span></>)}
                      {ri === 2 && (<><span className="block text-5xl lg:text-[4rem] text-white mb-1">{t("Mëso kudo,", "Learn anywhere,")}</span><span className="block text-5xl lg:text-[4rem] text-white italic">{t("transformohu gjithmonë.", "transform always.")}</span></>)}
                    </h1>
                    <p className="text-white/80 mb-4 leading-relaxed" style={{ fontWeight: 400, fontSize: 16 }}>
                      {ri === 0 && (<>{t("Kur", "When")} <HL>{t("zemra", "heart")}</HL>, <HL>{t("truri", "mind")}</HL> {t("dhe", "and")} <HL>{t("trupi", "body")}</HL> {t("harmonizohen... fillon", "align... begins the")} <HL>{t("transformimi", "transformation")}</HL>.</>)}
                      {ri === 1 && (<>{t("5 ditë transformim i plotë —", "5 days of complete transformation —")} <HL>{t("shpirtëror", "spiritual")}</HL>, <HL>{t("mendor", "mental")}</HL> {t("dhe", "and")} <HL>{t("fizik", "physical")}</HL>.</>)}
                      {ri === 2 && (<>{t("Mbi", "Over")} <HL>1000+</HL> {t("trajnime online në dispozicion tënde", "online trainings at your disposal")} <HL>24/7</HL>.</>)}
                    </p>
                    <p className="text-white mb-9 leading-relaxed" style={{ fontWeight: 300, fontSize: 16 }}>
                      {ri === 0 && t("Një udhëtim transformues drejt qetësisë, vetëdijes dhe jetës në harmoni me ritmin tënd të brendshëm.", "A transformative journey toward inner peace, awareness and life in harmony with your inner rhythm.")}
                      {ri === 1 && t("Retreat me natyrë, heshtje dhe udhëzues të certifikuar. Largohesh ndryshe nga kush je sot.", "A retreat in nature, silence and certified guides. You leave different from who you are today.")}
                      {ri === 2 && t("Akses i plotë ndaj bibliotekës sonë: meditim, vetëdije, teknika kuantike dhe shumë më tepër.", "Full access to our library: meditation, mindfulness, quantum techniques and much more.")}
                    </p>
                    <div className="flex items-start gap-4">
                      <button
                        onClick={() => navigate(ri === 2 ? "/eventet/trajnime-online" : "/eventet/retreat")}
                        className="inline-flex items-center gap-1.5 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
                        style={{ backgroundColor: "#4e29c5", fontWeight: 600, fontSize: 16 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                        {ri === 0 && t("Rezervo Retreat-in", "Book the Retreat")}
                        {ri === 1 && t("Rezervo Retreat-in", "Book the Retreat")}
                        {ri === 2 && t("Shiko Trajnimet", "View Trainings")}
                      </button>
                      <button
                        onClick={() => navigate(ri === 2 ? "/signup" : ri === 1 ? "/eventet/retreat" : "/eventet/trajnime-online")}
                        className="inline-flex items-center gap-1.5 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
                        style={{ fontWeight: 600, backgroundColor: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.75)", color: "white", fontSize: 16 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                        {ri === 0 && t("Shiko Trajnimet Online", "View Online Trainings")}
                        {ri === 1 && t("Shiko Datat", "View Dates")}
                        {ri === 2 && t("Regjistrohu Falas", "Register Free")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 3 dots — desktop only ── */}
        <div className="absolute bottom-24 left-0 right-0 flex items-center justify-center gap-3" style={{ zIndex: 10000 }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i + FIRST_REAL)}
              style={{
                width: i === dotIndex ? 28 : 10,
                height: 10,
                borderRadius: 999,
                background: i === dotIndex ? "#ffffff" : "rgba(255,255,255,0.35)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Stats bar — outside both overflow-hidden containers ── */}
      <StatsBar />
    </div>
  );
};
