import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const STEPS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
      </svg>
    ),
    al: "Rregulloni Sistemin Nervor",
    en: "Regulate Your Nervous System",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    al: "Shëroni Plagët Emocionale",
    en: "Heal Emotional Wounds",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    al: "Arrini Koherencën Zemër-Tru",
    en: "Achieve Heart-Brain Coherence",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
      </svg>
    ),
    al: "Rritni Energjinë & Vitalitetin",
    en: "Increase Energy & Vitality",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8c-2.8 0-5 1.8-5 4s2.2 4 5 4c2.8 0 5-1.8 5-4" />
        <path d="M17 8c0-2.2-2.2-4-5-4s-5 1.8-5 4" />
      </svg>
    ),
    al: "Rilidhuni Me Veten Tuaj",
    en: "Reconnect With Your True Self",
  },
];

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Meditim në perëndim dielli",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&q=80",
    alt: "Grup meditimi",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&q=80",
    alt: "Lidhje njerëzore",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
    alt: "Ecje në natyrë",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    alt: "Neuroshkencë dhe truri",
    tall: false,
  },
];

export const PromiseSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white py-8 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 md:px-12 lg:px-20 flex flex-row items-center gap-3 md:gap-16">

        {/* ── Left — text ── */}
        <div
          className="flex-shrink-0 w-[45%]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Label */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 mb-2 md:mb-5"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
            <span className="badge font-bold tracking-widest uppercase"
              style={{ color: "#7c3aed", fontFamily: "'Inter', sans-serif", fontSize: 10 }}>
              {t("PREMTIMI YNË", "OUR PROMISE")}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-lg md:text-4xl lg:text-[2.6rem] font-bold leading-tight mb-2 md:mb-6 text-zinc-900"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t("Kur sistemi nervor", "When the nervous system")}{" "}
            <br className="hidden md:block" />
            {t("ndryshon,", "changes,")}{" "}
            <span style={{ fontStyle: "italic", color: "#3f1e92" }}>
              {t("gjithçka ndryshon.", "everything changes.")}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-xs md:text-base leading-relaxed mb-2 md:mb-10 hidden md:block"
            style={{ color: "#52525b", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {t(
              "Përdorim një kombinim unik të shkencës dhe urtësisë së lashtë për t'ju ndihmuar të lironi emocionet e grumbulluara, të shëroni të kaluarën dhe të krijoni një të ardhme të re nga një gjendje koherence të brendshme.",
              "We use a unique blend of science and ancient wisdom to help you release stored emotions, heal the past and create a new future from a place of inner coherence."
            )}
          </p>

          {/* Steps as bullets */}
          <ul className="flex flex-col gap-1.5 md:gap-2.5">
            {STEPS.map((step, i) => (
              <li key={i} className="flex items-center gap-2 md:gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#4e29c5" }}
                />
                <span
                  className="text-xs md:text-base leading-snug font-medium"
                  style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}
                >
                  {lang === "al" ? step.al : step.en}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right — images collage ── */}
        <div
          className="flex-1 flex gap-1.5 md:gap-3 h-[180px] md:h-[340px] mt-6 md:mt-0"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          {/* Tall center image */}
          <div className="flex-shrink-0 w-[45%] rounded-xl md:rounded-2xl overflow-hidden h-full">
            <img
              src={IMAGES[0].src}
              alt={IMAGES[0].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2×2 grid */}
          <div className="flex-1 grid grid-cols-2 gap-1.5 md:gap-3 h-full">
            {IMAGES.slice(1).map((img, i) => (
              <div key={i} className="rounded-xl md:rounded-2xl overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
