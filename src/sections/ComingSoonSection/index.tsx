import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Lock, Sparkles, Download, Infinity, ShieldCheck, Heart, Flower2, User, Moon, Wind } from "lucide-react";

const CARDS = [
  {
    titleAl: "Meditimi i Manifestimit",
    titleEn: "Manifestation Meditation",
    img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400&q=80",
    Icon: Flower2,
  },
  {
    titleAl: "Meditimi i Energjisë",
    titleEn: "Energy Meditation",
    img: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=400&q=80",
    Icon: User,
  },
  {
    titleAl: "Meditimi i Gjumit të Thellë",
    titleEn: "Deep Sleep Meditation",
    img: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?w=400&q=80",
    Icon: Moon,
  },
  {
    titleAl: "Eksperiencë me Frymëmarrje",
    titleEn: "Breathwork Experience",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    Icon: Wind,
  },
];

const FEATURES = [
  { Icon: Download,    titleAl: "Shkarko menjëherë",      titleEn: "Download instantly",    descAl: "Dëgjo kudo, kurdo",             descEn: "Listen anywhere, anytime" },
  { Icon: Infinity,    titleAl: "Përdor sa herë dëshiron", titleEn: "Use as many times",     descAl: "Pa limit kohor",                descEn: "No time limit" },
  { Icon: ShieldCheck, titleAl: "Sigurt & Privat",         titleEn: "Safe & Private",        descAl: "Përvoja jote, hapësira jote",   descEn: "Your experience, your space" },
  { Icon: Heart,       titleAl: "Mbështetje",              titleEn: "Support",               descAl: "Jemi këtu për ty",              descEn: "We are here for you" },
];

export const ComingSoonSection = () => {
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
    <section ref={ref} className="w-full bg-white py-4 md:py-16 px-6 overflow-hidden"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}>

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-3 md:mb-10">
          <Sparkles className="w-5 h-5 mx-auto mb-3" style={{ color: "#a78bfa" }} />
          <h2 className="text-lg md:text-4xl font-bold text-zinc-900 mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {t("Do të vijne", "Coming")} <span style={{ color: "#4e29c5" }}>{t("së shpejti", "soon")}</span>
          </h2>
          <p className="md:text-base"
            style={{ color: "#52525b", fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
            {t("Meditime të reja për çdo aspekt të jetës tënde.", "New meditations for every aspect of your life.")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-3 md:mb-12">
          {CARDS.map((card, i) => (
            <div key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
              }}>
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group h-[160px] md:h-[260px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
              {/* Background image */}
              <img src={card.img} alt={lang === "al" ? card.titleAl : card.titleEn}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {/* Dark overlay */}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.75) 100%)" }} />

              {/* Lock top-right */}
              <div className="absolute top-2 right-2 w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}>
                <Lock className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-white" />
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 text-center">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2"
                  style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                  <card.Icon className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={1.5} />
                </div>
                <p className="text-white font-semibold md:text-base leading-tight mb-1 md:mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
                  {lang === "al" ? card.titleAl : card.titleEn}
                </p>
                <span className="inline-block px-2 py-1 rounded-full text-white text-[10px] md:text-xs font-bold tracking-widest uppercase"
                  style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}>
                  {t("SË SHPEJTI", "COMING SOON")}
                </span>
              </div>
            </div>
            </div>
          ))}
        </div>

        {/* Features row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 pt-4 md:pt-8 border-t border-zinc-100">
          {FEATURES.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-1 md:gap-2">
              <f.Icon className="w-5 h-5 md:w-9 md:h-9" style={{ color: "#4e29c5" }} strokeWidth={1.5} />
              <p className="md:text-base font-semibold"
                style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
                {lang === "al" ? f.titleAl : f.titleEn}
              </p>
              <p className="md:text-base"
                style={{ color: "#52525b", fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
                {lang === "al" ? f.descAl : f.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
