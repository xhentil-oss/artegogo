import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Target, Diamond, Plus, ArrowRight } from "lucide-react";

const ICONS = [
  { Icon: Heart,   labelAl: "Zemra",  labelEn: "Heart" },
  { Icon: Target,  labelAl: "Truri",  labelEn: "Mind" },
  { Icon: Diamond, labelAl: "Trupi",  labelEn: "Body" },
];

const FLOW = [
  { Icon: Heart,   labelAl: "Zemra",   labelEn: "Heart" },
  { Icon: Target,  labelAl: "Truri",   labelEn: "Mind" },
  { Icon: Diamond, labelAl: "Trupi",   labelEn: "Body" },
  { Icon: Plus,    labelAl: "Harmoni", labelEn: "Harmony", highlight: true },
];

export const SignaturePhilosophySection = () => {
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
    <section ref={ref} className="w-full bg-white py-8 md:py-16 px-6 overflow-hidden"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}>

      <div className="max-w-lg mx-auto text-center">

        {/* Label */}
        <div className="flex justify-center mb-3 md:mb-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
            <span className="text-[8px] md:text-xs font-bold tracking-widest uppercase"
              style={{ color: "#7c3aed", fontFamily: "'Inter', sans-serif" }}>
              {t("FILOZOFIA JONË", "SIGNATURE PHILOSOPHY")}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg md:text-[2.6rem] font-bold text-zinc-900 leading-tight mb-4 md:mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif",
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s" }}>
          {t("Kur ndryshon", "When")}{" "}
          <span style={{ color: "#4e29c5" }}>{t("energjia,", "energy changes,")}</span>
          <br />
          {t("ndryshon gjithçka", "everything changes")}
        </h2>

        {/* 3 icon circles */}
        <div className="flex justify-center gap-6 md:gap-12 mb-3 md:mb-8">
          {ICONS.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1 md:gap-2"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: `opacity 0.5s ease ${300 + i * 100}ms, transform 0.5s ease ${300 + i * 100}ms` }}>
              <div className="w-9 h-9 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                style={{ background: "#f5f3ff", border: "1.5px solid #ddd6fe" }}>
                <item.Icon className="w-4 h-4 md:w-6 md:h-6" style={{ color: "#7c3aed" }} strokeWidth={1.5} />
              </div>
              <span className="text-[9px] md:text-base font-medium text-zinc-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                {lang === "al" ? item.labelAl : item.labelEn}
              </span>
            </div>
          ))}
        </div>

        {/* Flow pills */}
        <div className="flex items-center justify-center flex-nowrap gap-1 md:gap-2 mb-4 md:mb-8"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}>
          {FLOW.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1 md:gap-1.5 rounded-full px-2 py-1 md:px-3 md:py-1.5"
                style={item.highlight
                  ? { background: "linear-gradient(135deg, #5b21b6, #7c3aed)", color: "#fff" }
                  : { background: "#f5f3ff", border: "1px solid #ddd6fe", color: "#7c3aed" }}>
                <item.Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                <span className="text-[9px] md:text-xs font-semibold">
                  {lang === "al" ? item.labelAl : item.labelEn}
                </span>
              </div>
              {i < FLOW.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#c4b5fd" }} />
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs md:text-base leading-relaxed mb-4 md:mb-8"
          style={{ color: "#52525b", fontFamily: "'Inter', sans-serif", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.6s" }}>
          {t(
            "Kur zemra, truri dhe trupi fillojnë të punojnë në harmoni, ndryshon mënyra si ndihesh, si mendon, si vepron dhe çfarë tërheq në jetën tënde.",
            "When the heart, mind and body begin to work in harmony, the way you feel, think, act and what you attract into your life changes."
          )}
        </p>

        {/* Quote card */}
        <div className="rounded-2xl px-4 py-4 md:px-6 md:py-6 text-center"
          style={{ background: "#faf5ff", border: "1px solid #ede9fe",
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s" }}>
          <p className="text-xs md:text-base leading-relaxed italic"
            style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
            {t(
              "Puna jonë nuk fillon dhe mbaron me ndjenjën e mirë — ajo ndryshon mënyrën si jeton.",
              "Our work doesn't begin and end with feeling good — it changes the way you live."
            )}
          </p>
        </div>

      </div>
    </section>
  );
};
