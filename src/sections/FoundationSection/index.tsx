import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const PILLARS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: { al: "Formim Mjekësor & Akademik", en: "Medical & Academic Background" },
    desc: {
      al: "Mjekë me formim të fortë në shkencë dhe fiziologji njerëzore.",
      en: "Medical doctors with a strong foundation in science and human physiology.",
    },
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: { al: "I Bazuar në Neuroshkencë", en: "Neuroscience Informed" },
    desc: {
      al: "Duke përdorur EEG biofeedback dhe metoda të bazuara në neuroshkencë për të krijuar ndryshim real.",
      en: "Using EEG biofeedback and neuroscience-based methods to create real change.",
    },
    hasArrow: true,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        <path d="M5 14c1.5-1 3.5-1.5 7-1.5s5.5.5 7 1.5" />
        <path d="M7 14l-2 5h14l-2-5" />
      </svg>
    ),
    title: { al: "Ekspertë Meditimi", en: "Meditation Experts" },
    desc: {
      al: "Vite praktike personale dhe trajnime të avancuara në meditim, punë me frymëmarrjen dhe vetëdije.",
      en: "Years of personal practice and advanced training in meditation, breathwork and awareness.",
    },
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: { al: "Specialistë të Shërimit Emocional", en: "Emotional Healing Specialists" },
    desc: {
      al: "Ju ndihmojmë të lironi bllokimet e thella emocionale të ruajtura në trup dhe mendje.",
      en: "Helping you release deep emotional blocks stored in the body and mind.",
    },
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: { al: "Përvojë Globale në Retreat", en: "Global Retreat Experience" },
    desc: {
      al: "Retreat-e imersive kryesore në Shqipëri dhe më gjerë, duke transformuar jetë.",
      en: "Leading immersive retreats in Albania and beyond, transforming lives.",
    },
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: { al: "Qasje e Përqendruar tek Njeriu", en: "Human Centered Approach" },
    desc: {
      al: "Gjithçka që bëjmë është e rrënjosur në dhembshuri, praninë dhe lidhjen njerëzore.",
      en: "Everything we do is rooted in compassion, presence and real human connection.",
    },
  },
];

export const FoundationSection = () => {
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
    <section ref={ref} className="w-full py-8 md:py-12 overflow-hidden" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-7xl mx-auto px-2 md:px-12 lg:px-20">

        {/* ── Header ── */}
        <div
          className="text-center mb-6 md:mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p
            className="text-[8px] font-bold uppercase tracking-widest mb-3 md:mb-5"
            style={{ color: "#4e29c5", fontFamily: "'Inter', sans-serif", letterSpacing: "0.2em" }}
          >
            {t("I rrënjosur në shkencë. I udhëhequr nga përvoja.", "Rooted in science. Guided by experience.")}
          </p>
          <h2
            className="text-lg md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-snug max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t(
              "Puna jonë është ndërtuar mbi themelin e arsimit mjekësor, kërkimit shkencor dhe mijëra orëve të përvojës retreat.",
              "Our work is built on a foundation of medical education, scientific research and thousands of hours of retreat experience."
            )}
          </h2>
        </div>

        {/* ── Pillars ── */}
        <div className="relative grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">

          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
              }}
            >

              {/* Icon circle */}
              <div
                className="w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-2 md:mb-4 relative z-10 overflow-hidden"
                style={{ background: "#EDE8FA" }}
              >
                <div className="scale-[0.45] md:scale-100">{p.icon}</div>
              </div>

              {/* Title */}
              <h3
                className="text-16 font-semibold mb-2 leading-snug"
                style={{ fontFamily: "'Inter', sans-serif", color: "#52525b" }}
              >
                {lang === "al" ? p.title.al : p.title.en}
              </h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
