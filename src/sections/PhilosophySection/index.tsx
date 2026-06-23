import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Brain, Heart, Flower2, Flame, Compass, Sparkles } from "lucide-react";

const PILLARS = [
  {
    Icon: Brain,
    labelAl: "HARMONIZIM",
    labelEn: "HARMONIZATION",
    descAl: "Rikthim i balancës së sistemit nervor, trupit dhe mendjes.",
    descEn: "Restoring the balance of the nervous system, body and mind.",
  },
  {
    Icon: Heart,
    labelAl: "LIRIM EMOCIONAL",
    labelEn: "EMOTIONAL RELEASE",
    descAl: "Çlirimi i bllokimeve të vjetra që ju mbajnë pas.",
    descEn: "Releasing old blockages that hold you back.",
  },
  {
    Icon: Flower2,
    labelAl: "HAPJE ZEMRE",
    labelEn: "HEART OPENING",
    descAl: "Zgjerim i kapacitetit për dashuri, mirënjohje dhe lidhje të vërtetë.",
    descEn: "Expanding capacity for love, gratitude and true connection.",
  },
  {
    Icon: Flame,
    labelAl: "ENERGJI & VITALITET",
    labelEn: "ENERGY & VITALITY",
    descAl: "Rritje e energjisë jetësore, qartësi mendore dhe vitalitet i qëndrueshëm.",
    descEn: "Increasing life energy, mental clarity and sustainable vitality.",
  },
  {
    Icon: Compass,
    labelAl: "LIDHJE ME VETEN",
    labelEn: "CONNECTION TO SELF",
    descAl: "Zgjimi i intuitës dhe lidhja me udhëzimin e brendshëm.",
    descEn: "Awakening intuition and connecting with inner guidance.",
  },
  {
    Icon: Sparkles,
    labelAl: "MANIFESTIM",
    labelEn: "MANIFESTATION",
    descAl: "Krijimi i realitetit të ri në përputhje me vlerat dhe misionin tuaj.",
    descEn: "Creating a new reality aligned with your values and mission.",
  },
];

export const PhilosophySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white border-b border-zinc-100 md:border-y overflow-hidden"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}>

      {/* 6-column grid */}
      <div className="grid grid-cols-3 lg:grid-cols-6 divide-x divide-zinc-100">
        {PILLARS.map((p, i) => (
          <div key={i} className={`flex flex-col items-center text-center px-2 md:px-5 py-5 md:py-10 gap-2 md:gap-4${i >= 3 ? " border-t border-zinc-100 md:border-t-0" : ""}`}>
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0"
              style={{ background: "#EDE8FA" }}>
              <div className="scale-[0.65] md:scale-100">
                <p.Icon className="w-6 h-6" style={{ color: "#4e29c5" }} strokeWidth={1.5} />
              </div>
            </div>
            <p className="md:text-xs font-bold tracking-widest leading-tight"
              style={{ color: "#7C3AED", fontSize: 14 }}>
              {lang === "al" ? p.labelAl : p.labelEn}
            </p>
            <p className={`md:text-base leading-relaxed ${(i === 0 || i === 2 || i === 5) ? "mt-6 md:mt-0" : ""}`}
              style={{ color: "#52525b", fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
              {lang === "al" ? p.descAl : p.descEn}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};
