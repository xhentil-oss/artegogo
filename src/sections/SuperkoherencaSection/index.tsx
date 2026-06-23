import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Brain, Sparkles, Headphones, Zap, Play } from "lucide-react";

const FEATURES = [
  { Icon: Heart,      al: "Harmoni zemër-tru",          en: "Heart-brain harmony" },
  { Icon: Brain,      al: "Qetësim i sistemit nervor",  en: "Nervous system calming" },
  { Icon: Sparkles,   al: "Aktivizim emocional",        en: "Emotional activation" },
  { Icon: Headphones, al: "Audio imersive experience", en: "Audio imersive experience" },
  { Icon: Zap,        al: "Akses i menjëhershëm",         en: "Instant access" },
];

export const SuperkoherencaSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
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
    <section ref={ref} className="relative w-full overflow-hidden"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}>

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1400&q=90"
        alt="Meditation"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)" }} />

      {/* Content */}
      <div className="relative z-10 flex items-center px-6 md:px-16 py-5 md:py-16">
        <div className="w-full md:max-w-md"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mt-3 md:mt-0 mb-3 md:mb-5"
            style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.35)", backdropFilter: "blur(8px)" }}>
            <Headphones className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
            <span className="badge font-bold tracking-widest uppercase text-white text-[10px] md:text-xs">
              {t("AUDIO EXPERIENCE", "AUDIO EXPERIENCE")}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg md:text-[2.8rem] font-bold leading-tight mb-2 md:mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {t("Meditimi i", "Meditation of")}{" "}
            <span style={{ color: "#c4b5fd" }}>{t("Superkoherencës", "Supercoherence")}</span>
          </h2>

          {/* Subtitle */}
          <p className="md:text-base leading-relaxed mb-3 md:mb-6 line-clamp-3 md:line-clamp-none" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
            {t(
              "Një udhëtim i thellë për të harmonizuar zemrën, sistemin nervor dhe energjinë e trupit.",
              "A deep journey to harmonize the heart, nervous system and body energy."
            )}
          </p>

          {/* Features */}
          <ul className="space-y-1.5 md:space-y-2.5 mb-4 md:mb-7">
            {FEATURES.map((f, i) => (
              <li key={i} className="flex items-center gap-2 md:gap-3"
                style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-16px)", transition: `opacity 0.4s ease ${400 + i * 80}ms, transform 0.4s ease ${400 + i * 80}ms` }}>
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}>
                  <f.Icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" strokeWidth={1.8} />
                </div>
                <span className="font-medium text-white text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {lang === "al" ? f.al : f.en}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => navigate("/meditime")}
            className="inline-flex items-center gap-1.5 text-white font-semibold px-3 py-1.5 md:px-8 md:py-4 rounded-xl text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-100 mb-3"
            style={{ background: "linear-gradient(135deg, #4e29c5 0%, #3f1e92 100%)", fontFamily: "'Inter', sans-serif" }}>
            <Play className="w-4 h-4" fill="white" />
            {t("Fillo meditimin", "Start meditation")}
          </button>

          {/* Headphones note */}
          <div className="flex items-center gap-2">
            <Headphones className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.6)" }} />
            <span className="md:text-[16px]" style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
              {t("Rekomandohen kufje", "Headphones recommended")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
