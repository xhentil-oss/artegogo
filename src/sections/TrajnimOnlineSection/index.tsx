import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { CalendarDays, CheckCircle2, Flower2, Brain, Atom, UserRound, ShieldCheck, type LucideIcon } from "lucide-react";

const LungsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {/* Trachea */}
    <path d="M12 3 L12 9" />
    {/* Left bronchus + lobe */}
    <path d="M12 9 C10 9 8 9.5 7 11 C5.5 13 5 15 5 17.5 C5 20 6.5 21.5 8 21.5 C9 21.5 9.5 21 10 20 L11 17 L11 10" />
    {/* Left inner branch */}
    <path d="M7.5 14 C7 15.5 7 17 7.5 18.5" />
    {/* Right bronchus + lobe */}
    <path d="M12 9 C14 9 16 9.5 17 11 C18.5 13 19 15 19 17.5 C19 20 17.5 21.5 16 21.5 C15 21.5 14.5 21 14 20 L13 17 L13 10" />
    {/* Right inner branch */}
    <path d="M16.5 14 C17 15.5 17 17 16.5 18.5" />
  </svg>
);

const PILLARS = [
  {
    titleAl: "TRANSFORMIM BIOLOGJIK",
    titleEn: "BIOLOGICAL TRANSFORMATION",
    descAl: "Meditime të avancuara dhe teknika të reja të frymëmarrjes që aktivizojnë trupin, lirojnë fasciat, harmonizojnë strukturën biologjike dhe ndihmojnë në çlirimin e emocioneve të bllokuara. Trupi bëhet i fortë, i lirë, energjik.",
    descEn: "Advanced meditations and new breathing techniques that activate the body, release fascia, harmonize biological structure and help release blocked emotions. The body becomes strong, free, energetic.",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&q=80",
    Icon: null,
  },
  {
    titleAl: "TRANSFORMIM EMOCIONAL",
    titleEn: "EMOTIONAL TRANSFORMATION",
    descAl: "Teknikat e zbuluara dhe ushtrimet e reja do të aplikohen së bashku për të krijuar një identitet të ri, plot fuqi, energji, shëndet dhe dashuri. Kjo do të të ndihmojë të transformosh mendimet, emocionet dhe trupin në një nivel të ri jete.",
    descEn: "The discovered techniques and new exercises will be applied together to create a new identity full of power, energy, health and love. This will help you transform your thoughts, emotions and body.",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&q=80",
    Icon: Brain,
  },
  {
    titleAl: "TRANSFORMIM FIZIK, MENTAL",
    titleEn: "PHYSICAL, MENTAL TRANSFORMATION",
    descAl: "Teknika të avancuara nga fizika kuantike shkencore për manifestim. Do të mësosh si të bëhesh një observues koherent në meditim dhe si ta mbash këtë energji në trup për të manifestuar shpejt dhe me stabilitet.",
    descEn: "Advanced techniques from scientific quantum physics for manifestation. You will learn how to become a coherent observer in meditation and how to keep this energy in the body.",
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80",
    Icon: Atom,
  },
];

const PROGRAM_ITEMS = [
  { al: "7 seanca live me Zoom në orën 21:00 — teori dhe meditim (ruhet për 6 muaj)", en: "7 live Zoom sessions at 21:00 — theory and meditation (recorded for 6 months)" },
  { al: "7 seanca pyetje-përgjigje në orën 19:00 (nuk ruhet)", en: "7 Q&A sessions at 19:00 (not recorded)" },
  { al: "Leksione shtesë teorike të regjistruara në platformë — akses i pakufizuar 6 muaj", en: "Additional theoretical lessons on the platform — unlimited access for 6 months" },
];

export const TrajnimOnlineSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { t, lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white overflow-hidden"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}>

      <div className="max-w-2xl mx-auto px-6 py-14">

        {/* ── Title ── */}
        <div className="text-center mb-8">
          <h2 className="font-black leading-none mb-3"
            style={{ fontSize: "clamp(3rem, 10vw, 5rem)", color: "#5b21b6", fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}>
            {t("TRAJNIM", "ONLINE")}<br />
            <span style={{ color: "#4e29c5" }}>{t("ONLINE", "TRAINING")}</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-1">
            <Flower2 className="w-4 h-4" style={{ color: "#a78bfa" }} />
          </div>
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-1" style={{ color: "#7c3aed" }}>
            {t("HARMONIZIM KUANTIK", "QUANTUM HARMONIZATION")}
          </p>
          <p className="text-sm text-zinc-500">
            {t("Shkenca e transformimit me meditim", "The science of transformation through meditation")}
          </p>
        </div>

        {/* ── 3 icon columns — one card with dividers ── */}
        <div className="flex rounded-2xl mb-10 overflow-hidden"
          style={{ background: "#ffffff", boxShadow: "0 4px 20px rgba(124,58,237,0.10)", border: "1px solid #ede9fe" }}>
          {PILLARS.map((p, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-3 text-center py-6 px-3"
              style={{ borderRight: i < PILLARS.length - 1 ? "1px solid #ede9fe" : "none" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)" }}>
                {p.Icon ? <p.Icon className="w-8 h-8" color="#ffffff" strokeWidth={1.5} /> : <LungsIcon />}
              </div>
              <p className="text-[10px] font-black tracking-widest uppercase leading-tight" style={{ color: "#374151" }}>
                {lang === "al" ? p.titleAl : p.titleEn}
              </p>
            </div>
          ))}
        </div>

        {/* ── 3 pillar rows ── */}
        <div className="space-y-4 mb-10">
          {PILLARS.map((p, i) => (
            <div key={i} className="flex gap-0 items-stretch rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                border: "1px solid #f1f1f1",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${300 + i * 130}ms, transform 0.5s ease ${300 + i * 130}ms`,
              }}>
              {/* Image full height */}
              <div className="flex-shrink-0 overflow-hidden relative self-stretch" style={{ width: 130 }}>
                <img
                  src={p.img}
                  alt={lang === "al" ? p.titleAl : p.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text */}
              <div className="flex-1 bg-white px-5 py-4 flex flex-col justify-center">
                <p className="text-sm font-black tracking-wider uppercase mb-2" style={{ color: "#7c3aed" }}>
                  {lang === "al" ? p.titleAl : p.titleEn}
                </p>
                <p className="text-base leading-relaxed text-zinc-700">
                  {lang === "al" ? p.descAl : p.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── PROGRAMI 6 JAVË ── */}
        <div className="rounded-2xl p-5 mb-5"
          style={{ background: "#ffffff", border: "1px solid #ede9fe", boxShadow: "0 2px 12px rgba(124,58,237,0.07)" }}>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)" }}>
              <CalendarDays className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <p className="font-black text-base tracking-widest uppercase" style={{ color: "#1e1b4b" }}>
              {t("PROGRAMI 6 JAVË", "6-WEEK PROGRAM")}
            </p>
          </div>
          <div className="space-y-3">
            {PROGRAM_ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#7c3aed" }} />
                <p className="text-sm leading-relaxed text-zinc-700">
                  {lang === "al" ? item.al : item.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA button ── */}
        <button
          onClick={() => navigate("/eventet/trajnime-online")}
          className="w-full py-4 rounded-2xl text-white font-bold text-base tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:opacity-90 mb-5"
          style={{ background: "linear-gradient(135deg, #4e29c5 0%, #3f1e92 100%)" }}>
          <UserRound className="w-5 h-5" />
          {t("REGJISTROHU TANI", "REGISTER NOW")}
        </button>

        {/* ── Footer note ── */}
        <div className="flex items-start gap-3 rounded-2xl px-4 py-4"
          style={{ background: "#f9fafb", border: "1px solid #ede9fe" }}>
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "#ede9fe" }}>
            <ShieldCheck className="w-4 h-4" style={{ color: "#7c3aed" }} />
          </div>
          <p className="text-xs leading-relaxed text-zinc-500">
            {t(
              "Çdo ditë do të marrësh ushtrime të reja, të ndara në një grup privat në Telegram, ku do të jesh në kontakt të vazhdueshëm me Dr. Artemisën dhe Dr. Marvinin personalisht.",
              "Every day you will receive new exercises, shared in a private Telegram group, staying in continuous contact with Dr. Artemisa and Dr. Marvin personally."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
