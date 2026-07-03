import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PHOTO_IMGS = [
  "/img/TONI0886.JPG",
  "/img/TONI0935.JPG",
  "/img/TONI1379.JPG",
  "/img/TONI2462.JPG",
  "/img/TONI1866.JPG",
  "/img/TONI1042.JPG",
];

const TESTIMONIALS = [
  { quote: "Një nga përvojat më transformuese të jetës sime. Ndihëm sikur jam rilindur!", author: "Arta, Kosovë" },
  { quote: "Tre ditë që ndryshuan perspektivën time për gjithçka. Ju rekomandoj të gjithëve!", author: "Blerina, Tiranë" },
  { quote: "Kam mësuar se si të liroj frikën dhe të jetoj me zemër të hapur. Faleminderit!", author: "Driton, Shkodër" },
  { quote: "Meditimi dhe energjia e grupit ishin mahnitëse. Do të kthehem patjetër vitin tjetër.", author: "Vjosa, Prishtinë" },
];

function PhotoCarousel() {
  const [idx, setIdx] = useState(0);
  const [tIdx, setTIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgW, setImgW] = useState(0);

  const total = PHOTO_IMGS.length;
  const tTotal = TESTIMONIALS.length;
  const visibleCount = 3;
  const maxIdx = total - visibleCount;

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setImgW(containerRef.current.offsetWidth / visibleCount);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const prev = () => setIdx(i => (i <= 0 ? maxIdx : i - 1));
  const next = () => setIdx(i => (i >= maxIdx ? 0 : i + 1));
  const tPrev = () => setTIdx(i => (i - 1 + tTotal) % tTotal);
  const tNext = () => setTIdx(i => (i + 1) % tTotal);

  return (
    <div>
      {/* Image carousel */}
      <div className="relative px-5">
        <div ref={containerRef} className="overflow-hidden rounded-2xl">
          <div
            className="flex"
            style={{ transform: `translateX(-${idx * imgW}px)`, transition: "transform 0.4s ease" }}
          >
            {PHOTO_IMGS.map((src, i) => (
              <div key={i} style={{ minWidth: imgW, paddingRight: i < total - 1 ? 6 : 0 }}>
                <img src={src} alt="" className="w-full rounded-xl object-cover" style={{ height: 140 }} />
              </div>
            ))}
          </div>
        </div>
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md" style={{ background: "#fff" }}>
          <ChevronLeft size={16} color="#7c3aed" />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md" style={{ background: "#fff" }}>
          <ChevronRight size={16} color="#7c3aed" />
        </button>
        <div className="flex justify-center gap-1.5 mt-3">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 18 : 6, height: 6, borderRadius: 3, background: i === idx ? "#7c3aed" : "#ddd6fe", border: "none", cursor: "pointer", transition: "width 0.3s" }} />
          ))}
        </div>
      </div>

      {/* Testimonials slider */}
      <div className="mt-8 relative px-8">
        <div className="overflow-hidden">
          <div className="flex" style={{ transform: `translateX(-${tIdx * 100}%)`, transition: "transform 0.4s ease" }}>
            {TESTIMONIALS.map((item, i) => (
              <div key={i} className="flex-shrink-0 text-center px-2" style={{ width: "100%" }}>
                <div className="flex justify-center gap-1 mb-3">
                  {[0,1,2,3,4].map(s => (
                    <svg key={s} width="18" height="18" fill="#f59e0b" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="font-semibold leading-snug mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#18181b" }}>
                  "{item.quote}"
                </p>
                <p style={{ fontSize: 13, color: "#71717a" }}>– {item.author}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={tPrev} className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md" style={{ background: "#fff" }}>
          <ChevronLeft size={16} color="#7c3aed" />
        </button>
        <button onClick={tNext} className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md" style={{ background: "#fff" }}>
          <ChevronRight size={16} color="#7c3aed" />
        </button>
        <div className="flex justify-center gap-1.5 mt-4">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setTIdx(i)} style={{ width: i === tIdx ? 18 : 6, height: 6, borderRadius: 3, background: i === tIdx ? "#7c3aed" : "#ddd6fe", border: "none", cursor: "pointer", transition: "width 0.3s" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const days = [
  {
    num: "01",
    titleAL: "Rikthe energjinë tek vetja",
    titleEN: "Reclaim Your Energy",
    descAL: "Bashkë në këtë ditë do të rikthejmë energjinë te vetja. Meditimet dhe shpjegimet do të kenë fokus harmonizimin e zemrës, mendjes dhe të gjithë sistemit nervor. Lirimin dhe pastrimin emocional.",
    descEN: "Together on this day we will reclaim our energy. The meditations and teachings will focus on harmonizing the heart, mind and the entire nervous system — releasing and cleansing emotional blockages.",
    color: "",
  },
  {
    num: "02",
    titleAL: "Ndjeje pasionin për jetën",
    titleEN: "Feel Your Passion for Life",
    descAL: "Në këtë ditë do të rrisim energjinë edhe më tepër. Bashkë do të kemi fokusin në lirimin dhe hapjen e plotë të zemrës, frymëzimin dhe zbulimin e qëllimit tuaj.",
    descEN: "On this day we will raise our energy even higher. Together we will focus on fully releasing and opening the heart, finding inspiration and discovering your true purpose.",
    color: "",
  },
  {
    num: "03",
    titleAL: "Manifesto jetën e ëndrrave",
    titleEN: "Manifest Your Dream Life",
    descAL: "Bashkë do të krijojmë dhe do të vendosim fokusin te manifestimi. Do të kemi shpjegime të avancuara të fushës kuantike, teknika dhe meditime për të harmonizuar energjinë me jetën e re, me trupin e ri.",
    descEN: "Together we will create and set our focus on manifestation. We will explore advanced teachings on the quantum field, techniques and meditations to align your energy with your new life and new self.",
    color: "",
  },
];


const SLIDE_IMGS = [
  "/img/TONI0886.JPG",
  "/img/TONI0935.JPG",
  "/img/TONI1379.JPG",
  "/img/TONI2462.JPG",
  "/img/TONI1866.JPG",
  "/img/TONI1042.JPG",
];

export const WorkshopePage = () => {
  const { t } = useLanguage();
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx(i => (i + 1) % (SLIDE_IMGS.length - 2));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden min-h-[280px] md:min-h-[520px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/TONI1692.JPG')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-5 py-8 md:py-14 w-full">

          {/* Title */}
          <h1 className="hero-title-mobile md:hidden font-bold text-white mb-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.12 }}>
            Dyert<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>Infinite</span>
          </h1>
          <h1 className="hidden md:block font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.12, fontSize: "clamp(1.8rem, 7vw, 3.5rem)" }}>
            Dyert<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>Infinite</span>
          </h1>

          {/* Location */}
          <div className="flex items-center gap-3 mt-2 mb-2 md:mt-4 md:mb-4">
            <span className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              {t("Prishtinë", "Pristina")}
            </span>
            <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.25)" }} />
            <span style={{ color: "#f9a8d4", fontSize: 16 }}>♡</span>
          </div>

          {/* Date */}
          <div className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 mb-3 md:mb-5"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <svg className="w-4 h-4" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth={1.8} viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
            <span className="font-semibold text-white text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.04em" }}>
              1 – 3 DHJETOR 2025
            </span>
          </div>

          {/* Description */}
          <p className="mb-3 md:mb-5 max-w-xs md:max-w-sm leading-relaxed text-sm md:text-base" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif", lineHeight: 1.6, fontWeight: 400 }}>
            {t("3 ditë për t'u rikthyer tek vetja, për të krijuar", "3 days to return to yourself, to create the")}{" "}
            <span style={{ color: "#c4b5fd", fontWeight: 600 }}>{t("jetë më të re.", "new life you deserve.")}</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            <a href="/signup"
              className="inline-flex items-center gap-1.5 text-white px-3 py-1.5 text-sm md:px-8 md:py-4 md:text-base rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontWeight: 600 }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              {t("Rezervo Vendin", "Reserve Spot")}
            </a>
          </div>

        </div>
      </div>

      {/* ── Stats bar ── */}
      <section className="border-y border-zinc-100" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-3 py-2 md:px-6 md:py-6 grid grid-cols-4 gap-1 md:gap-4">
          {[
            { icon: (
              <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            ), value: "1800+", labelAL: "Pjesëmarrës nga e gjithë bota", labelEN: "Participants worldwide" },
            { icon: (
              <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
            ), value: "100+", labelAL: "Evente transformues", labelEN: "Transformative events" },
            { icon: (
              <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            ), value: "8+", labelAL: "Vite eksperience", labelEN: "Years experience" },
            { icon: (
              <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            ), value: "20+", labelAL: "Vende të prekura", labelEN: "Countries reached" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-0.5 py-1.5 px-0.5 md:py-2 md:px-1 rounded-2xl overflow-hidden" style={{ background: "rgba(124,58,237,0.04)", border: "1px solid rgba(124,58,237,0.1)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(124,58,237,0.08)" }}>
                {s.icon}
              </div>
              <span className="font-bold text-zinc-900 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>{s.value}</span>
              <span className="font-medium text-[7px] md:text-base w-full" style={{ color: "#71717a", lineHeight: 1.3 }}>{t(s.labelAL, s.labelEN)}</span>
            </div>
          ))}
        </div>
      </section>


      {/* ── Çfarë është Dyert Infinite ── */}
      <section className="py-10 md:py-16 px-6" style={{ background: "#F4F4F5" }}>
        <div className="max-w-5xl mx-auto">

          {/* Desktop: text left + image right */}
          <div className="md:grid md:grid-cols-2 md:gap-10 md:items-center mb-6">
            {/* Text */}
            <div>
              <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#18181b" }}>
                {t("Çfarë është", "What is")}{" "}
                <span style={{ color: "#7c3aed" }}>Dyert Infinite?</span>
              </h2>
              <p className="leading-relaxed mb-3" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
                {t(
                  "Dyert Infinite është një përvojë e thellë 3-ditore që të ndihmon të çlirohesh nga sulfizimet, të rikthesh energjinë, të qartësosh dhe të manifestosh jetën që e meriton.",
                  "Dyert Infinite is a deep 3-day experience that helps you break free from limitations, restore your energy, gain clarity and manifest the life you deserve."
                )}
              </p>
              <p className="font-semibold" style={{ color: "#7c3aed", fontFamily: "'Inter', sans-serif" }}>
                {t("Një udhëtim drejt vetes tënde më të lartë.", "A journey toward your higher self.")}
              </p>
            </div>

            {/* Main image */}
            <div className="hidden md:block rounded-2xl overflow-hidden" style={{ height: 340 }}>
              <img src="/img/TONI1692.JPG" alt="Dyert Infinite" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Carousel — 3 at a time */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${slideIdx * (100 / 3)}%)` }}>
                {SLIDE_IMGS.map((src, i) => (
                  <div key={i} className="shrink-0 px-1" style={{ width: "33.333%" }}>
                    <div style={{ height: 160 }}>
                      <img src={src} alt="" className="w-full h-full object-cover rounded-xl" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button onClick={() => setSlideIdx(i => Math.max(0, i - 1))}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md z-10"
              style={{ background: "#fff", border: "1px solid #e9d5ff" }}>
              <ChevronLeft className="w-4 h-4" style={{ color: "#7c3aed" }} />
            </button>
            <button onClick={() => setSlideIdx(i => Math.min(SLIDE_IMGS.length - 3, i + 1))}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md z-10"
              style={{ background: "#fff", border: "1px solid #e9d5ff" }}>
              <ChevronRight className="w-4 h-4" style={{ color: "#7c3aed" }} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: SLIDE_IMGS.length - 2 }).map((_, i) => (
              <button key={i} onClick={() => setSlideIdx(i)}
                className="rounded-full transition-all duration-300"
                style={{ width: i === slideIdx ? 24 : 8, height: 8, background: i === slideIdx ? "#7c3aed" : "#ddd6fe" }} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Çfarë do përjetosh ── */}
      <section className="py-10 md:py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-8">
            <div className="flex-1 h-px" style={{ background: "#e4e4e7" }} />
            <h2 className="font-bold whitespace-nowrap" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#18181b" }}>
              {t("Çfarë do përjetosh?", "What will you experience?")}
            </h2>
            <div className="flex-1 h-px" style={{ background: "#e4e4e7" }} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, titleAL: "Hapje e zemrës dhe qetësi të thellë", titleEN: "Heart opening and deep peace" },
              { icon: <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>, titleAL: "Qartësi mendore dhe fokus i pastër", titleEN: "Mental clarity and pure focus" },
              { icon: <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, titleAL: "Energji e re dhe vitalitet", titleEN: "New energy and vitality" },
              { icon: <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, titleAL: "Manifestim dhe krijim i ëndërrave", titleEN: "Manifestation and dream creation" },
              { icon: <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5S7 9.76 7 7a5 5 0 0 1 5-5z"/><path d="M4 22c0-4 3.58-7 8-7s8 3 8 7"/></svg>, titleAL: "Meditime të avancuara", titleEN: "Advanced meditations" },
              { icon: <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, titleAL: "Komunitet transformues", titleEN: "Transformative community" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 rounded-2xl p-3 md:p-5"
                style={{ background: "#F4F4F5", border: "1px solid rgba(124,58,237,0.08)" }}>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(124,58,237,0.08)" }}>
                  {item.icon}
                </div>
                <span className="font-semibold leading-snug text-[13px] md:text-base" style={{ color: "#18181b", fontFamily: "'Inter', sans-serif" }}>
                  {t(item.titleAL, item.titleEN)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program 3 Days ── */}
      <section className="py-10 md:py-14 px-6" style={{ background: "#F4F4F5" }}>
        <div className="max-w-5xl mx-auto">

          {/* Header with dividers */}
          <div className="flex items-center gap-3 mb-3 md:mb-8">
            <div className="flex-1 h-px" style={{ background: "#e4e4e7" }} />
            <h2 className="font-bold whitespace-nowrap" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#18181b" }}>
              {t("Programi 2-ditor", "2-Day Program")}
            </h2>
            <div className="flex-1 h-px" style={{ background: "#e4e4e7" }} />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: <svg className="w-6 h-6" fill="none" stroke="#a78bfa" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, img: "/img/TONI0886.JPG", imgPos: "center 30%", titleAL: days[0].titleAL, titleEN: days[0].titleEN, descAL: days[0].descAL, descEN: days[0].descEN },
              { icon: <svg className="w-6 h-6" fill="none" stroke="#a78bfa" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>, img: "/img/TONI1379.JPG", imgPos: "center center", titleAL: days[1].titleAL, titleEN: days[1].titleEN, descAL: days[1].descAL, descEN: days[1].descEN },
            ].map((d, i) => (
              <div key={i} className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#ffffff", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1px solid #f0f0f0" }}>
                {/* Image top */}
                <div className="relative" style={{ height: 200 }}>
                  <img src={d.img} alt="" className="w-full h-full object-cover" style={{ objectPosition: d.imgPos }} />
                  <div className="absolute inset-0" style={{ background: "rgba(20,0,50,0.18)" }} />
                </div>
                {/* Text bottom */}
                <div className="p-3 md:p-5 flex flex-col gap-1 md:gap-2">
                  <div className="hidden md:flex w-10 h-10 rounded-full items-center justify-center" style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}>
                    {d.icon}
                  </div>
                  <h3 className="font-bold leading-snug text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "#18181b" }}>{t(d.titleAL, d.titleEN)}</h3>
                  <p className="leading-relaxed text-sm md:text-base" style={{ color: "#52525b" }}>{t(d.descAL, d.descEN)}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>


      {/* ── Schedule 3 days ── */}
      <section className="py-10 md:py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-bold leading-tight mb-3 text-xl md:text-5xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#18181b" }}>
              {t("1–3 dhjetor: Dyert Infinite vijnë në Prishtinë", "1–3 December: Dyert Infinite comes to Pristina")}
            </h2>
            <p className="leading-relaxed mx-auto text-sm md:text-base" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif", maxWidth: 520 }}>
              {t(
                "Ju mirëpresim në një nga eventet tona më transformuese. Për 3 ditë do të përjetojmë bashkë mrekullinë e krijimit, potencialet pafund, fuqinë e trupit, mendjes dhe zemrës tonë.",
                "We welcome you to one of our most transformative events. For 3 days we will experience together the miracle of creation, infinite potentials, the power of body, mind and heart."
              )}
            </p>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            {[
              { num: "DITA 1", time: "14:30 – 20:30", img: "/img/TONI0886.JPG", titleAL: days[0].titleAL, titleEN: days[0].titleEN, descAL: days[0].descAL, descEN: days[0].descEN },
              { num: "DITA 2", time: "08:00 – 19:00", img: "/img/TONI1379.JPG", titleAL: days[1].titleAL, titleEN: days[1].titleEN, descAL: days[1].descAL, descEN: days[1].descEN },
            ].map((d, i) => (
              <div key={i} className="flex gap-4 rounded-2xl overflow-hidden" style={{ background: "#F9FAFB", border: "1px solid #f0f0f0" }}>
                {/* Image left */}
                <div className="shrink-0 self-stretch" style={{ width: 130 }}>
                  <img src={d.img} alt="" className="w-full h-full object-cover" />
                </div>
                {/* Content right */}
                <div className="flex flex-col justify-center py-4 pr-5">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-bold px-2.5 py-0.5 rounded-full" style={{ background: "#7c3aed", color: "#fff", fontSize: 10, letterSpacing: "0.1em" }}>{d.num}</span>
                    <span className="flex items-center gap-1" style={{ color: "#71717a", fontSize: 12 }}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                      {d.time}
                    </span>
                  </div>
                  <h3 className="font-bold mb-1 leading-snug text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "#18181b" }}>{t(d.titleAL, d.titleEN)}</h3>
                  <p className="leading-relaxed" style={{ color: "#52525b", fontSize: 14 }}>{t(d.descAL, d.descEN)}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Benefits + CTA ── */}
      <section className="py-10 md:py-12 px-6" style={{ background: "#F4F4F5" }}>
        <div className="max-w-4xl mx-auto">

          <div className="grid grid-cols-3 gap-4 mb-8 mt-3 md:mt-0">
            {[
              { icon: <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, labelAL: "Matjet e qëndrave të energjisë", labelEN: "Energy center measurements" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5S7 9.76 7 7a5 5 0 0 1 5-5z"/><path d="M4 22c0-4 3.58-7 8-7s8 3 8 7"/></svg>, labelAL: "Akses në platformë me meditime", labelEN: "Access to meditation platform" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, labelAL: "5 ditë Manifestim", labelEN: "5 days Manifestation" },
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(124,58,237,0.1)" }}>
                  {b.icon}
                </div>
                <span className="font-semibold leading-snug" style={{ fontSize: 16, color: "#18181b", fontFamily: "'Inter', sans-serif" }}>{t(b.labelAL, b.labelEN)}</span>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}>
            <h2 className="font-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#18181b" }}>
              {t("Gati për të transformuar jetën tënde?", "Ready to transform your life?")}
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif", fontSize: 16 }}>
              {t(
                "Rezervo vendin tënd tani dhe bëhu pjesë e një përvoje që do ndryshojë gjithçka.",
                "Reserve your spot now and become part of an experience that will change everything."
              )}
            </p>
            <a href="/signup"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-xl text-white transition-all hover:scale-105"
              style={{ background: "#7c3aed", fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
              {t("Rezervo Tani", "Reserve Now")} →
            </a>
          </div>

        </div>
      </section>

      {/* ── 4 Transformations ── */}
      <section style={{ background: "#ffffff" }}>
        {/* Top image + 2×2 icon grid — same container */}
        <div className="px-5 py-4 md:py-8 max-w-4xl mx-auto">
          {/* Top image */}
          <div className="w-full overflow-hidden rounded-2xl mb-5" style={{ height: 220 }}>
            <img src="/img/TONI2879.JPG" alt="" className="w-full h-full object-cover object-center" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                icon: (
                  <svg width="36" height="36" fill="none" stroke="#7c3aed" strokeWidth={1.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="4"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/><path d="M12 11v4"/><path d="M10 15h4"/>
                  </svg>
                ),
                titleAL: "Përjeto transformimin",
                titleEN: "Experience transformation",
                descAL: "Mëso t'i perceptosh sfidat si mundësi për rritje dhe të zhvendosësh mendjen drejt pozitivitetit.",
                descEN: "Learn to perceive challenges as growth opportunities and shift your mind toward positivity.",
              },
              {
                icon: (
                  <svg width="36" height="36" fill="none" stroke="#7c3aed" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                ),
                titleAL: "Ndërgjegje më e lartë",
                titleEN: "Higher consciousness",
                descAL: "Zhvillo meditime të thella që të lejojnë të kultivojmë vetëdijen dhe të bëjmë çdo ditë të jashtëzakonshme.",
                descEN: "Develop deep meditations that let you cultivate awareness and make every day extraordinary.",
              },
              {
                icon: (
                  <svg width="36" height="36" fill="none" stroke="#7c3aed" strokeWidth={1.5} viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ),
                titleAL: "Gjeni qëllimin tuaj",
                titleEN: "Find your purpose",
                descAL: "Lidhu me zemrën për të zbuluar veten e vërtëtë, potencialin dhe qëllimin e jetës suaj.",
                descEN: "Connect with the heart to discover your true self, potential and life's purpose.",
              },
              {
                icon: (
                  <svg width="36" height="36" fill="none" stroke="#7c3aed" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path d="M12 22c0 0-7-4.5-7-9.5A7 7 0 0 1 12 6a7 7 0 0 1 7 6.5C19 17.5 12 22 12 22z"/>
                    <path d="M12 10v4M10 12h4"/>
                  </svg>
                ),
                titleAL: "Praktika e shërimit",
                titleEN: "Healing practices",
                descAL: "Zgjo fuqinë e ndërgjegjës për të shëruar trupin, ushqyer marrëdhëniet dhe përmirësuar cilësinë e jetës.",
                descEN: "Awaken the power of consciousness to heal your body, nourish relationships and improve life quality.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-row items-center gap-4 rounded-2xl p-4" style={{ background: "#ffffff", border: "1px solid #ede9fe", boxShadow: "0 4px 20px rgba(124,58,237,0.12)" }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "#ede9fe" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold leading-snug mb-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#18181b" }}>
                    {t(item.titleAL, item.titleEN)}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#71717a", fontSize: 13 }}>
                    {t(item.descAL, item.descEN)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Përvojat që flasin vetë ── */}
      <section className="py-10 px-5" style={{ background: "#F4F4F5" }}>
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <h2 className="font-bold text-center mb-32 md:mb-8 mt-1 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.4rem, 5vw, 2rem)", color: "#18181b" }}>
            {t("Përvojat që", "Experiences that")}{" "}
            <span style={{ color: "#7c3aed", fontStyle: "italic" }}>{t("flasin vetë", "speak for themselves")}</span>
          </h2>

          {/* Photo carousel */}
          <PhotoCarousel />
        </div>
      </section>

      {/* ── Bonuset Ekskluzive ── */}
      <section className="py-10 px-5" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="font-bold text-center mt-3 md:mt-0 mb-2 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 6vw, 2.2rem)", color: "#18181b" }}>
            {t("Bonuset që e bëjnë këtë përvojë", "Bonuses that make this experience")}{" "}
            <span style={{ color: "#7c3aed" }}>{t("transformuese", "transformative")}</span>
          </h2>
          <p className="text-center mb-7" style={{ color: "#71717a", fontSize: 14, lineHeight: 1.6 }}>
            {t("Çdo pjesëmarrës përfiton akses në këto bonuse ekskluzive përpara, gjatë dhe pas eventit.", "Every participant gets exclusive access to these bonuses before, during and after the event.")}
          </p>

          {/* Vertical cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                img: "/img/TONI2743.JPG",
                icon: (
                  <svg width="22" height="22" fill="none" stroke="#7c3aed" strokeWidth={1.6} viewBox="0 0 24 24">
                    <path d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                ),
                titleAL: "Matjet e qendrave të energjisë",
                titleEN: "Energy centers measurement",
                descAL: "Kuoto se me cilën qendër mund të punosh më tepër, dhe ku ke më tepër nevojë për energji",
                descEN: "Assess which energy center needs the most work and where you need more energy.",
              },
              {
                img: "/img/TONI2462.JPG",
                icon: (
                  <svg width="22" height="22" fill="none" stroke="#7c3aed" strokeWidth={1.6} viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="10" r="2.5"/>
                  </svg>
                ),
                titleAL: "Akses në platformë me meditime",
                titleEN: "Access to meditation platform",
                descAL: "Për të krijuar një mendësi optimiste, sukses në karrierë, marrëdhënie të mira familjare, manifestim të një dëshire, shëndet dhe bollëk",
                descEN: "To create an optimistic mindset, career success, good family relationships, manifestation of desires, health and abundance.",
              },
              {
                img: "/img/TONI1866.JPG",
                icon: (
                  <svg width="22" height="22" fill="none" stroke="#7c3aed" strokeWidth={1.6} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 15h3M8 18h5"/>
                  </svg>
                ),
                titleAL: "5 ditë Manifestim",
                titleEN: "5 Days of Manifestation",
                descAL: "Seminare dhe meditime për 5 ditë rresht që ti përdoresh për të manifestuar çdo dëshirë",
                descEN: "Seminars and meditations for 5 consecutive days to help you manifest any desire.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1px solid #f0f0f0" }}>
                <div style={{ height: 220, overflow: "hidden" }}>
                  <img src={item.img} alt="" className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-4 flex flex-row items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#ede9fe" }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold leading-snug mb-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#18181b" }}>
                      {t(item.titleAL, item.titleEN)}
                    </h3>
                    <p className="leading-relaxed" style={{ color: "#71717a", fontSize: 13 }}>
                      {t(item.descAL, item.descEN)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Çmimi & Qëndrimi ── */}
      <section className="py-10 px-5" style={{ background: "#F4F4F5" }}>
        <div className="max-w-4xl mx-auto">

          {/* Çmimi */}
          <div className="mb-8 text-center">
            <h2 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#18181b" }}>
              {t("Çmimi", "Pricing")}
            </h2>
            <p style={{ fontSize: 15, color: "#3f3f46", lineHeight: 1.7 }}>
              {t("160 euro (tre ditë trajnim)", "160 euro (three days training")}
            </p>
            <p style={{ fontSize: 15, color: "#3f3f46", lineHeight: 1.7 }}>
              {t("+ 20 euro (dy ditë dreke të shtunë dhe të dielë)", "+ 20 euro (two days lunch Saturday and Sunday)")}
            </p>
            <p className="font-bold mt-2" style={{ fontSize: 16, color: "#18181b" }}>
              {t("= 180 euro gjithsej për person", "= 180 euro total per person")}
            </p>
          </div>

          <div style={{ height: 1, background: "#e4e4e7", marginBottom: 32 }} />

          {/* Qëndrimi */}
          <div className="text-center">
            <h2 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#18181b" }}>
              {t("Qëndrimi", "Accommodation")}
            </h2>
            <p className="mb-3" style={{ fontSize: 15, color: "#3f3f46", lineHeight: 1.7 }}>
              {t(
                "Qëndrimi nuk është i përfshirë. Në rast se do doni të qëndroni te Hoteli ku zhvillohet eventi:",
                "Accommodation is not included. If you wish to stay at the hotel where the event takes place:"
              )}
            </p>
            <p className="font-bold mb-3" style={{ fontSize: 15, color: "#18181b" }}>
              Venus Hotel, Prishtinë
            </p>
            <p style={{ fontSize: 14, color: "#52525b", lineHeight: 1.7 }}>
              {t(
                "mundeni të telefononi hotelin në numrin: +383(0)49403030 dhe do ju japin çmimin me 20% ulje prej 88 euro çifti ose 76 euro nëse jeni vetëm një person. Prenotimin e bëni personalisht duke kontaktuar me hotelin.",
                "You can call the hotel at: +383(0)49403030 and they will give you a 20% discount price of 88 euro for a double or 76 euro for a single person. Make your reservation directly by contacting the hotel."
              )}
            </p>
          </div>

        </div>
      </section>

      {/* ── Vlerësime ── */}
      <section className="py-10 px-5" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">

          {/* Title + subtitle */}
          <h2 className="font-bold text-center mb-2 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 7vw, 2.8rem)", color: "#18181b" }}>
            {t("Vlerësime", "Reviews")}
          </h2>
          <p className="text-center mb-8" style={{ color: "#71717a", fontSize: 14, lineHeight: 1.7 }}>
            {t(
              "Mijëra zemra të transformuara. Mijëra jetë të ndrysuara. Çfarë thonë pjesëmarrësit tanë.",
              "Thousands of transformed hearts. Thousands of changed lives. What our participants say."
            )}
          </p>

          {/* Review cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                textAL: "Përshëndetje Arte & Marvin ju fal dy jeni bekimi i shpirtit tim ❤️. Ju jam mirënjohëse shum falënderuese fund për gjithë çka që bëm për ne dhe për trojet Shqiptare ❤️. Ju jam mirënjohëse shumë shumë për sekondat që na i dedikoni dhe për të gjitha shpjegimet dhe dashurinë pa limit që na dhuruat ❤️💛🙏. Falënderoj nga thellësia e zemrës stafin tuaj të mrekullueshme për punë e pa llogaritur që bëm për ne për çdo sekondë që na qëndruan pranë 🙏🙏🙏🙏🙏🙏🙏🙏.",
                textEN: "Hello Arte & Marvin, you are both a blessing to my soul ❤️. I am so grateful for everything you did for us. Thank you from the bottom of my heart for every second you dedicate to us and for all the explanations and limitless love you share ❤️💛🙏.",
                name: "Arta, Kosovë",
              },
              {
                textAL: "Përshëndetje Arte, ne Workshopin 3 ditor jam ndjer si në Parajsë! Kam pasur shum energji pozitive gjatë gjithë kohës, gjithçka aty ishte e mrekullueshme, shpjegimet ishin shum të qarta, meditimet ishin diçka e mrekullueshme, vërtet hyjnore. Kam pasur dridha të papritshme 3 ditë radhë. Tani ndihem shum shum e qetë dhe shum më mirë. Do të doja që workshopi të vazhdonte me shum sepse aty ndodhen shum mrekulli. Ju jam mirënjohëse pafund ty dhe Marvinit, ju përqafoj me shum dashuri, Almira 💜",
                textEN: "Hello Arte, the 3-day Workshop felt like Paradise to me. I had so much positive energy, everything was wonderful. The explanations were very clear, the meditations were incredible, truly divine. Now I feel so much calmer and better. I am endlessly grateful to you and Marvin. With much love, Almira 💜",
                name: "Almira, Shqipëri",
              },
              {
                textAL: "Arta të falënderit zemër për gjithçka, për kontributin tënd maksimal aty për ne. Workshopi ishte perfekt, shpjegimet më të mira që unë i kam dëgjuar ndonjëherë. Aty kuptova që unë doja të harroj gjithçka dhe të besoj se jeta ka mrekulli. Këtë e kuptova falë teje Arta dhe Marvinit — se s'duhet të fajësoj as të gjykoj, gjithçka ndodh për një arsye. Wow, pashë mrekulli në meditime dhe pata shumë lëshime emocionale. Mësova ta dëgjoj vetëm zërin tim të brendshëm. O Arta, faleminderit nga zemra! 🙏",
                textEN: "Arta, thank you from the heart for everything, for your maximum contribution for us. The workshop was perfect, the best explanations I've ever heard. I understood there that I wanted to forget everything and believe that life has miracles. I experienced a miracle in meditation. Arta",
                name: "Arta, Shqipëri",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #f0f0f0" }}>
                {/* Top row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#ede9fe" }}>
                    <span style={{ color: "#7c3aed", fontSize: 18, lineHeight: 1, fontFamily: "Georgia, serif", fontWeight: 700 }}>"</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-semibold" style={{ fontSize: 12, color: "#7c3aed" }}>{t("Vlerësime", "Review")}</span>
                    <div className="flex gap-0.5">
                      {[0,1,2,3,4].map(s => (
                        <svg key={s} width="13" height="13" fill="#f59e0b" viewBox="0 0 24 24">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Text */}
                <p className="leading-relaxed mb-4" style={{ color: "#3f3f46", fontSize: 14 }}>
                  {t(item.textAL, item.textEN)}
                </p>
                {/* Footer */}
                <div className="flex justify-end pt-3" style={{ borderTop: "1px solid #f4f4f5" }}>
                  <svg width="16" height="16" fill="#f43f5e" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="px-5 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl text-center px-6 py-10" style={{ background: "#ede9fe" }}>
            <h2 className="font-bold leading-snug mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 6vw, 2.2rem)", color: "#1c1917" }}>
              {t("Gati për të transformuar jetën tënde?", "Ready to transform your life?")}
            </h2>

            <p className="mb-7 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#52525b", fontSize: 15 }}>
              {t(
                "Rezervo vendin tënd tani dhe bëhu pjesë e një përvoje që do ndryshojë gjithçka.",
                "Reserve your spot now and become part of an experience that will change everything."
              )}
            </p>

            <a href="/kontakt"
              className="inline-flex items-center gap-2 font-semibold rounded-xl transition-all hover:scale-105"
              style={{ background: "#7c3aed", color: "#ffffff", fontFamily: "'Inter', sans-serif", fontSize: 14, padding: "14px 32px" }}>
              {t("Rezervo Tani", "Reserve Now")} →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
