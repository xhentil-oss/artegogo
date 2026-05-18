import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const BRAND = "#3f1e92";
const BRAND_BG = "#EDE8FA";

const ITEMS = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Meditation sitting figure */}
        <circle cx="12" cy="5" r="2" />
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        <path d="M5 14c1.5-1 3.5-1.5 7-1.5s5.5.5 7 1.5" />
        <path d="M7 14l-2 4h14l-2-4" />
        <path d="M10 12l-3 2M14 12l3 2" />
      </svg>
    ),
    al: "Medittime të thella dhe praktika transformuese",
    en: "Deep meditations and transformative practices",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Guidance — two people */}
        <circle cx="9" cy="5" r="2" />
        <circle cx="17" cy="6" r="2" />
        <path d="M5 20v-4a4 4 0 0 1 4-4h2" />
        <path d="M13 14l3-3 3 3" />
        <path d="M16 11v9" />
      </svg>
    ),
    al: "Udhëzim i personalizuar për rritje mentale e shpirtërore",
    en: "Personalized guidance for mental and spiritual growth",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Geometric mandala / retreat star */}
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
        <circle cx="12" cy="12" r="7" strokeDasharray="2 3" />
      </svg>
    ),
    al: "Retreat dhe ditë energjie të fuqishme e transformuese",
    en: "Retreats and powerful transformative energy days",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Music note double */}
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    al: "Muzikë, kreativitet dhe harmonizim i brendshëm",
    en: "Music, creativity and inner harmonization",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Heart with person — connection */}
        <circle cx="12" cy="5" r="2" />
        <path d="M12 9v5" />
        <path d="M9 21v-3a3 3 0 0 1 6 0v3" />
        <path d="M7 13c-1.5.5-2 1.5-2 2.5 0 1.5 1 2.5 3 3" />
        <path d="M17 13c1.5.5 2 1.5 2 2.5 0 1.5-1 2.5-3 3" />
        <path d="M9.5 11.5C8 10 6 10 5 11.5s0 3.5 2 4.5" strokeDasharray="1 0" />
      </svg>
    ),
    al: "Lidhje të vërteta dhe mbështetje në çdo përjetim",
    en: "Genuine connections and support in every experience",
  },
];

export const WhatWeOfferStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white pt-4 pb-8">
      {/* Title */}
      <h2
        className="text-center text-2xl md:text-3xl font-bold mb-6"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          color: BRAND,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {t("Çfarë ofrojmë", "What we offer")}
      </h2>

      {/* Items strip */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 flex flex-nowrap items-start justify-between gap-3 md:gap-10 overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-1 flex-shrink-0 w-[18%] md:flex-1 md:w-auto"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 90}ms, transform 0.5s ease ${i * 90}ms`,
            }}
          >
            {/* Icon circle */}
            <div
              className="w-9 h-9 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: BRAND_BG }}
            >
              <div className="scale-75 md:scale-100">{item.icon}</div>
            </div>

            {/* Text */}
            <p
              className="text-[9px] md:text-base leading-snug"
              style={{ fontWeight: 400, color: BRAND }}
            >
              {lang === "al" ? item.al : item.en}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
