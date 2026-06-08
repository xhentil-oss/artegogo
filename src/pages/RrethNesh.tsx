import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const useVisible = (threshold = 0.12) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className={className}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  );
};

const PILLARS = [
  {
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Staff */}
        <line x1="12" y1="3" x2="12" y2="21"/>
        {/* Orb at top */}
        <circle cx="12" cy="3.5" r="1"/>
        {/* Left wing */}
        <path d="M12 7 C10 5.5 7 5.5 5.5 7 C7 6 9.5 6.5 11 8.5"/>
        {/* Right wing */}
        <path d="M12 7 C14 5.5 17 5.5 18.5 7 C17 6 14.5 6.5 13 8.5"/>
        {/* Snake left - upper cross */}
        <path d="M9.5 10 C8 11 8 13 10 13 C12 13 12 13 12 13"/>
        {/* Snake right - upper cross */}
        <path d="M14.5 10 C16 11 16 13 14 13 C12 13 12 13 12 13"/>
        {/* Snake left - lower cross */}
        <path d="M9.5 16 C8 17 8.5 19 11 19.5"/>
        {/* Snake right - lower cross */}
        <path d="M14.5 16 C16 17 15.5 19 13 19.5"/>
      </svg>
    ),
    titleAl: "Mjekë",
    titleEn: "Doctors",
    descAl: "Ekspertizë mjekësore në shërbim të shëndetit tuaj holistik.",
    descEn: "Medical expertise in service of your holistic health.",
  },
  {
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Eyepiece tube */}
        <rect x="9" y="2" width="3" height="5" rx="0.5"/>
        {/* Arm */}
        <path d="M10.5 7 L10.5 10 L14 10"/>
        {/* Objective */}
        <line x1="14" y1="10" x2="14" y2="14"/>
        <path d="M12.5 14 L15.5 14 L15 15.5 L13 15.5 Z"/>
        {/* Stage */}
        <line x1="9" y1="16" x2="19" y2="16"/>
        {/* Support arm */}
        <path d="M10.5 10 L7 16"/>
        {/* Base */}
        <path d="M5 21 L19 21"/>
        <path d="M7 21 L7 18 Q11 17 13 18 L13 21"/>
      </svg>
    ),
    titleAl: "Studiues shkencorë",
    titleEn: "Scientific researchers",
    descAl: "Kërkimi dhe inovacioni i vazhdueshëm për rezultate të vërtetuara.",
    descEn: "Continuous research and innovation for verified results.",
  },
  {
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Head */}
        <circle cx="12" cy="4" r="2"/>
        {/* Body */}
        <path d="M12 6 L12 9"/>
        {/* Left leg in lotus */}
        <path d="M12 9 Q9 9.5 7 12 Q8.5 15 12 14"/>
        {/* Right leg in lotus */}
        <path d="M12 9 Q15 9.5 17 12 Q15.5 15 12 14"/>
        {/* Left arm resting */}
        <path d="M10 10 Q7 12 7 12"/>
        {/* Right arm resting */}
        <path d="M14 10 Q17 12 17 12"/>
        {/* Lotus base */}
        <path d="M7 18 Q12 16 17 18"/>
        <path d="M6 19.5 Q12 17.5 18 19.5"/>
      </svg>
    ),
    titleAl: "Mentorë meditimi",
    titleEn: "Meditation mentors",
    descAl: "Udhëheqje e personalizuar drejt qetësisë dhe vetëdijes.",
    descEn: "Personalized guidance toward peace and awareness.",
  },
];

export const RrethNeshPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const { t } = useLanguage();
  useEffect(() => { const timer = setTimeout(() => setHeroVisible(true), 80); return () => clearTimeout(timer); }, []);

  return (
    <div className="bg-white text-zinc-800 min-h-screen rreth-nesh">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[35vh] md:min-h-[52vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776841953356-0.jpeg')", backgroundPosition: "center 30%" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.38)" }} />
        <div className="relative w-full max-w-3xl mx-auto px-6 py-24 text-center"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <h1 className="hero-title-lg font-bold text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {t("Kush jemi", "Who we are")}{" "}
            <span style={{ color: "#C4B5FD", fontSize: "inherit" }}>{t("ne", "we")}</span>
          </h1>
        </div>
      </section>

      {/* ── Kush jemi ne ── */}
      <section style={{ background: "linear-gradient(180deg, #faf7ff 0%, #ffffff 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-24">
          <FadeIn>
            <h2 className="text-2xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {t("Kush jemi ne", "Who we are")}
            </h2>

            <p className="text-base leading-relaxed mb-5" style={{ color: "#3f3f46", fontFamily: "'Inter', sans-serif" }}>
              {t("Ne jemi Dr. Marvin Bundo dhe Dr. Artemisa Gogollari — ", "We are Dr. Marvin Bundo and Dr. Artemisa Gogollari — ")}
              <span style={{ color: "#7c3aed", fontWeight: 600 }}>{t("mjekë, studiues shkencorë", "doctors, scientific researchers")}</span>
              {t(" në Zvicër dhe ", " in Switzerland and ")}
              <span style={{ color: "#7c3aed", fontWeight: 600 }}>{t("mentorë", "mentors")}</span>
              {t(" të zhvillimit personal dhe meditimit.", " of personal development and meditation.")}
            </p>

            <p className="text-base leading-relaxed mb-5" style={{ color: "#3f3f46", fontFamily: "'Inter', sans-serif" }}>
              {t("Misioni ynë është t'ju ndihmojmë të riktheheni tek vetja juaj e vërtetë, të lironi bllokimet emocionale dhe të krijoni një jetë me më shumë ", "Our mission is to help you return to your true self, release emotional blockages and create a life with more ")}
              <span style={{ color: "#7c3aed", fontWeight: 600 }}>{t("qartësi, energji dhe dashuri", "clarity, energy and love")}</span>.
            </p>

            <p className="text-base leading-relaxed mb-12" style={{ color: "#3f3f46", fontFamily: "'Inter', sans-serif" }}>
              {t("Kemi krijuar një metodologji unike që bashkon shkencën moderne me praktikat më të avancuara të meditimit, duke ofruar një rrugë ", "We have created a unique methodology that combines modern science with the most advanced meditation practices, offering a path of ")}
              <span style={{ color: "#7c3aed", fontWeight: 600 }}>{t("transformimi të thellë", "deep transformation")}</span>
              {t(" dhe të qëndrueshëm.", " and lasting.")}
            </p>

            {/* 3 Pillars — inside a single bordered card */}
            <div className="flex rounded-2xl overflow-hidden"
              style={{ background: "#ffffff", boxShadow: "0 4px 20px rgba(124,58,237,0.08)", border: "1px solid #ede9fe" }}>
              {PILLARS.map((p, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center px-1 md:px-4 py-3 md:py-7"
                  style={{ borderRight: i < PILLARS.length - 1 ? "1px solid #ede9fe" : "none" }}>
                  <div className="w-9 h-9 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2"
                    style={{ background: "#ede9fe" }}>
                    <div className="scale-75 md:scale-100">{p.icon}</div>
                  </div>
                  <div className="flex items-center justify-center mb-1" style={{ minHeight: "3.2rem" }}>
                    <p className="font-bold text-zinc-800 leading-snug text-center" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12 }}>
                      {t(p.titleAl, p.titleEn)}
                    </p>
                  </div>
                  <div className="w-5 h-px mb-1" style={{ background: "#ddd6fe" }} />
                  <p className="leading-relaxed text-zinc-500" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12 }}>
                    {t(p.descAl, p.descEn)}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ── Çfarë bëjmë ── */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {t("Çfarë bëjmë", "What we do")}
            </h2>
            <p className="text-base leading-relaxed mb-4 md:mb-8" style={{ fontFamily: "'Inter', sans-serif", color: "#3f3f46" }}>
              {t("Në trajnimet dhe retreat-et tona, ju ndihmojmë të:", "In our trainings and retreats, we help you to:")}
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-2 md:gap-4 mb-4 md:mb-10">
              {[
                t("Shërojnë emocionet e bllokuara dhe traumat e së shkuarës", "Heal blocked emotions and past traumas"),
                t("Aktivizoni energjinë dhe potencialin tuaj të plotë", "Activate your full energy and potential"),
                t("Arrini koherencën zemër-tru dhe qartësi mendore", "Achieve heart-brain coherence and mental clarity"),
                t("Përdorni teknika të avancuara për manifestim dhe krijim", "Use advanced techniques for manifestation and creation"),
                t("Transformoni modelet e vjetra dhe krijoni një realitet të ri", "Transform old patterns and create a new reality"),
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#ede9fe" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", color: "#3f3f46", lineHeight: 1.6 }}>{text}</span>
                </li>
              ))}
            </ul>

            {/* Scientific foundation card */}
            <div className="flex items-start gap-4 rounded-2xl p-6"
              style={{ background: "#faf7ff", border: "1px solid #ede9fe" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#ede9fe" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>
                </svg>
              </div>
              <p className="text-base leading-relaxed text-zinc-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t(
                  "Metodat tona bazohen në kërkime shkencore — përfshirë matje ",
                  "Our methods are based on scientific research — including "
                )}
                <strong style={{ color: "#3f3f46" }}>EEG</strong>
                {t(" dhe koherencën ", " measurements and ")}
                <strong style={{ color: "#3f3f46" }}>{t("zemër-tru", "heart-brain coherence")}</strong>
                {t(" — të kombinuara me përvojë të drejtpërdrejtë transformuese.", " — combined with direct transformative experience.")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Çfarë na bën ndryshe ── */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {t("Çfarë na bën ndryshe", "What makes us different")}
            </h2>
            <p className="text-base leading-relaxed text-zinc-500 mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t(
                "Ne krijojmë një eksperiencë ku trupi, mendja dhe zemra hyjnë në një gjendje koherence të thellë, ku transformimi ndodh natyrshëm.",
                "We create an experience where body, mind and heart enter a state of deep coherence, where transformation happens naturally."
              )}
            </p>

            <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "#9D8FEF", fontFamily: "'Inter', sans-serif" }}>
              {t("Pjesëmarrësit tanë shpesh raportojnë:", "Our participants often report:")}
            </p>

            {/* 4 cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-5 mb-0">
              {[
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
                  titleAl: "Lirim emocional të menjëhershëm",
                  titleEn: "Immediate emotional release",
                  descAl: "Çlirim nga ngarkeset emocionale dhe lehtësi të thellë.",
                  descEn: "Release from emotional burdens and deep relief.",
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                  titleAl: "Rritje të energjisë dhe qartësisë",
                  titleEn: "Increase in energy and clarity",
                  descAl: "Më shumë vitalitet, fokus dhe qartësi mendore.",
                  descEn: "More vitality, focus and mental clarity.",
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></svg>,
                  titleAl: "Përmirësim të gjendjes fizike dhe mendore",
                  titleEn: "Improvement in physical and mental state",
                  descAl: "Trupi relaksohet, mendja qetësohet dhe sistemi nervor balancohet.",
                  descEn: "The body relaxes, the mind calms and the nervous system balances.",
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                  titleAl: "Ndjenjë të thellë lidhje me veten",
                  titleEn: "Deep sense of connection with yourself",
                  descAl: "Rikthim të vetës autentike dhe paqja e brendshme.",
                  descEn: "Return to authentic self and inner peace.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-3 md:p-5 flex flex-col items-center text-center"
                  style={{ background: "#faf7ff", border: "1px solid #ede9fe" }}>
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2" style={{ background: "#ede9fe" }}>
                    <div className="scale-75 md:scale-100">{item.icon}</div>
                  </div>
                  <p className="font-bold mb-1 leading-snug" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#7c3aed" }}>
                    {t(item.titleAl, item.titleEn)}
                  </p>
                  <div className="w-6 h-px mb-1 mx-auto" style={{ background: "#ddd6fe" }} />
                  <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#3f3f46" }}>
                    {t(item.descAl, item.descEn)}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Eksperienca & Kërkimi ── */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-24">
          <FadeIn>
            {/* Top: text left + image right */}
            <div className="grid grid-cols-2 gap-3 md:gap-10 items-stretch mb-4 md:mb-10">
              <div>
                <h2 className="font-bold text-zinc-900 mb-2 md:mb-5 leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {t("Eksperienca dhe kërkimi shkencor", "Experience and scientific research")}
                </h2>
                <p className="leading-relaxed mb-2 md:mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "#3f3f46" }}>
                  {t(
                    "Ne jemi mjekë dhe studiues shkencorë në Zvicër, me fokus në edukimin mjekësor, mjekësinë parandaluese dhe shëndetin mendor.",
                    "We are doctors and scientific researchers in Switzerland, focusing on medical education, preventive medicine and mental health."
                  )}
                </p>
                <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3f3f46" }}>
                  {t("Kemi zhvilluar karrierën tonë kërkimore në Austri dhe Zvicër, duke fituar ", "We have developed our research careers in Austria and Switzerland, having won ")}
                  <span style={{ color: "#7c3aed", fontWeight: 600 }}>{t("grante prestigjioze", "prestigious grants")}</span>
                  {t(" ndërkombëtare si:", " internationally such as:")}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-full">
                <img
                  src="https://images.unsplash.com/photo-1599982890963-3aabd60064d2?w=600&q=80"
                  alt="Zvicër - Kërkimi shkencor"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "200px" }}
                />
              </div>
            </div>

            {/* Grants row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                  label: t("Grant i Komisionit Evropian", "European Commission Grant"),
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M8 12L6 22l6-3 6 3-2-10"/></svg>,
                  label: "Marie Skłodowska-Curie",
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>,
                  label: t("Grante nacionale në Zvicër (SNF)", "National grants in Switzerland (SNF)"),
                },
              ].map((g, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2 rounded-xl px-2 py-3"
                  style={{ background: "#ffffff", border: "1px solid #ede9fe" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#ede9fe" }}>
                    <div className="scale-75">{g.icon}</div>
                  </div>
                  <p className="text-[9px] font-semibold text-zinc-700 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {g.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ── Fushat e kërkimit ── */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-24">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10 text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {t("Kërkimi ynë fokusohet në:", "Our research focuses on:")}
            </h2>

            <div className="grid grid-cols-3 gap-2 md:gap-5 mb-3 md:mb-12">
              {[
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
                  titleAl: "Edukimi mjekësor dhe të mësuarit dixhital",
                  titleEn: "Medical education and digital learning",
                  descAl: "Studime inovative për metodat moderne të edukimit mjekësor dhe dixhital.",
                  descEn: "Innovative studies on modern methods of medical and digital education.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
                  titleAl: "Epigjenetika dhe ndikimi i mendjes në trup",
                  titleEn: "Epigenetics and the mind-body impact",
                  descAl: "Bashkëveprimi mes mendjes, emocioneve dhe ndryshimeve biologjike në nivel qelizor.",
                  descEn: "The interaction between mind, emotions and biological changes at cellular level.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></svg>,
                  titleAl: "Shëndeti mendor dhe faktorët mjedisorë",
                  titleEn: "Mental health and environmental factors",
                  descAl: "Ndikimi i mjedisit, stresit dhe faktorëve socialë në shëndetin mendor.",
                  descEn: "The impact of environment, stress and social factors on mental health.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-2 md:p-5 text-center flex flex-col items-center"
                  style={{ background: "#faf7ff", border: "1px solid #ede9fe" }}>
                  <div className="w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center mb-1.5 md:mb-4" style={{ background: "#ede9fe" }}>
                    <div className="scale-[0.65] md:scale-100">{item.icon}</div>
                  </div>
                  <p className="font-bold mb-1 leading-snug flex items-center justify-center" style={{ fontFamily: "'Inter', sans-serif", color: "#7c3aed", fontSize: 12, minHeight: "3.5rem" }}>
                    {t(item.titleAl, item.titleEn)}
                  </p>
                  <div className="w-5 h-px mb-1" style={{ background: "#ddd6fe" }} />
                  <p className="leading-relaxed text-zinc-500" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12 }}>
                    {t(item.descAl, item.descEn)}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Quote with lab background */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&q=80"
            alt="Lab"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(30,20,60,0.72)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 py-6 md:py-16 text-center">
            <p className="text-4xl font-serif mb-4" style={{ color: "#a78bfa" }}>&ldquo;</p>
            <p className="text-base md:text-lg leading-relaxed text-white font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t(
                "Kombinojmë shkencën moderne me praktika të avancuara të meditimit, për të krijuar transformim të thellë dhe të qëndrueshëm.",
                "We combine modern science with advanced meditation practices to create deep and lasting transformation."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ── Metoda jonë + CTA final ── */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 md:py-24">
          <FadeIn>
            {/* Main card: list left + photo right */}
            <div className="rounded-3xl overflow-hidden mb-6"
              style={{ background: "linear-gradient(135deg, #ede9fe 0%, #e0d9ff 100%)" }}>
              <div className="grid md:grid-cols-2">
                {/* Left: text + list */}
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#2e1065" }}>
                    {t("Metoda jonë", "Our method")}
                  </h2>
                  <div className="w-6 h-0.5 mb-4" style={{ background: "#7c3aed" }} />
                  <p className="text-base text-zinc-600 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t("Metoda jonë ndërthet:", "Our method includes:")}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3"/><path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4"/><path d="M5 19c1-2 3.5-3 7-3s6 1 7 3"/></svg>, text: t("Meditime të avancuara dhe frymëmarrje dinamike", "Advanced meditations and dynamic breathwork") },
                      { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></svg>, text: t("Aktivizimin e sistemit nervor dhe nervit vagus", "Activation of the nervous system and vagus nerve") },
                      { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, text: t("Koherencën zemër-tru me valët gama", "Heart-brain coherence with gamma waves") },
                      { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>, text: t("Shërimin emocional dhe punën me nënndërgjegjen", "Emotional healing and subconscious work") },
                      { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>, text: t("Aktivizimin dhe lirimin e fashave", "Activation and release of fascia") },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(255,255,255,0.6)" }}>
                          {item.svg}
                        </div>
                        <span className="text-base text-zinc-700" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: photo */}
                <div className="relative hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80"
                    alt="Meditim"
                    className="w-full h-full object-cover"
                    style={{ minHeight: 420 }}
                  />
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div className="rounded-2xl p-6 mb-5 text-center"
              style={{ background: "#ffffff", border: "1px solid #ede9fe" }}>
              <p className="text-4xl font-serif leading-none mb-3" style={{ color: "#a78bfa" }}>&ldquo;</p>
              <p className="text-base leading-relaxed text-zinc-600 italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t(
                  "Kjo qasje krijon një transformim që nuk është vetëm mendor, por i ndjerë në trup, zemër dhe i reflektuar në jetën reale.",
                  "This approach creates a transformation that is not only mental, but felt in the body, heart and reflected in real life."
                )}
              </p>
            </div>

            {/* Info card with image */}
            <div className="rounded-2xl overflow-hidden mb-6"
              style={{ background: "linear-gradient(135deg, #ede9fe 0%, #e5deff 100%)" }}>
              <div className="grid md:grid-cols-2">
                {/* Left: 3 items */}
                <div className="p-7 flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.6)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <p className="text-base leading-relaxed text-zinc-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {t("Përmes retreat-eve dhe programeve tona online, kemi ndihmuar ", "Through our retreats and online programs, we have helped ")}
                      <strong style={{ color: "#5b21b6" }}>{t("mijëra njerëz", "thousands of people")}</strong>
                      {t(" të transformojnë jetën e tyre.", " transform their lives.")}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.6)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#7c3aed" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </div>
                    <p className="text-base text-zinc-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {t("Edhe ju mund të krijoni ", "You too can create ")}
                      <strong style={{ color: "#5b21b6" }}>{t("jetën tuaj të re", "your new life")}</strong>.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.6)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#7c3aed" stroke="#7c3aed" strokeWidth="1.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    </div>
                    <p className="text-base font-bold" style={{ color: "#3b0764", fontFamily: "'Inter', sans-serif" }}>
                      {t("Jeni të mirëpritur!", "You are welcome!")} 💙
                    </p>
                  </div>
                </div>

                {/* Right: nature photo */}
                <div className="hidden md:block relative">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                    alt="Natyrë"
                    className="w-full h-full object-cover"
                    style={{ minHeight: 240 }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(237,233,254,0.4) 0%, transparent 40%)" }} />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/eventet/retreat"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all hover:opacity-90 text-base"
                style={{ background: "linear-gradient(135deg, #4e29c5 0%, #3f1e92 100%)", fontFamily: "'Inter', sans-serif" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {t("Rezervo vendin tënd", "Reserve your spot")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/eventet/trajnime-online"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all text-base hover:opacity-80"
                style={{ background: "#ede9fe", border: "1.5px solid #ddd6fe", color: "#5b21b6", fontFamily: "'Inter', sans-serif" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {t("Mëso më shumë", "Learn more")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};
