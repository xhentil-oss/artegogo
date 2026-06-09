import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Flower2, Users, Wind, Headphones, HeartHandshake, Activity, type LucideIcon } from "lucide-react";

const INCLUDES: { al: string; en: string; Icon: LucideIcon }[] = [
  { al: "Meditim i thellë", en: "Deep meditation", Icon: Flower2 },
  { al: "Praktika somatike", en: "Somatic practices", Icon: Activity },
  { al: "Punë me frymëmarrjen", en: "Breathwork", Icon: Wind },
  { al: "Grupie të vogla", en: "Small groups", Icon: Users },
  { al: "Materiale & audio", en: "Materials & audio", Icon: Headphones },
  { al: "Mbështetje pas retreat-it", en: "Post-retreat support", Icon: HeartHandshake },
];

export const RetreatCardSection = () => {
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
    <section ref={ref} className="w-full bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-4 md:py-10 grid lg:grid-cols-2 gap-4 md:gap-10 items-center"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>

      {/* ── Content left ── */}
      <div className="order-2 lg:order-1">
        {/* ── Description ── */}
        <p
          className="text-xs md:text-base leading-relaxed text-zinc-800 mb-4 md:mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t(
            "Një përvojë immersive për të liruar emocionet, për të harmonizuar energjinë dhe për të hyrë në një nivel më të lartë të vetes.",
            "An immersive experience to release emotions, to harmonize energy and to enter a higher level of yourself."
          )}
        </p>

        {/* ── Stats ── */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
          {[
            { Icon: Flower2, value: t("7 Ditë", "7 Days"), label: t("KOHËZGJATJA", "DURATION") },
            { Icon: Users, value: "20+", label: t("SEANCA", "SESSIONS") },
            { Icon: Activity, value: "30", label: t("VENDE GJITHSEJ", "TOTAL SPOTS") },
          ].map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-2xl py-3 md:py-4 px-2"
              style={{ border: "1px solid rgba(78,41,197,0.15)", background: "rgba(78,41,197,0.03)" }}
            >
              <s.Icon className="w-4 h-4 md:w-6 md:h-6 mb-1" style={{ color: "#9D8FEF" }} />
              <span
                className="badge font-bold"
                style={{ color: "#4e29c5", fontFamily: "'Inter', sans-serif", fontSize: 10 }}
              >
                {s.value}
              </span>
              <span
                className="badge font-semibold tracking-widest uppercase mt-0.5"
                style={{ color: "rgba(78,41,197,0.5)", fontFamily: "'Inter', sans-serif", fontSize: 10 }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Includes ── */}
        <p
          className="text-[8px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-3"
          style={{ color: "#4e29c5", fontFamily: "'Inter', sans-serif", letterSpacing: "0.18em" }}
        >
          {t("ÇFARË PËRFSHIN", "WHAT IT INCLUDES")}
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-2.5 mb-5 md:mb-8">
          {INCLUDES.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.Icon className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" style={{ color: "#9D8FEF" }} />
              <span
                className="text-xs md:text-base"
                style={{ color: "#52525b", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {lang === "al" ? item.al : item.en}
              </span>
            </div>
          ))}
        </div>

        {/* ── Quote ── */}
        <p
          className="text-xs md:text-base italic leading-relaxed text-zinc-500 mb-5 md:mb-8 text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t(
            "Ky retreat është për ata që duan të dalin nga mbijetesa dhe të hyjnë në një gjendje më të lartë paqeje, fuqie dhe krijimi.",
            "This retreat is for those who want to move beyond survival and enter a higher state of peace, power and creation."
          )}
        </p>

        {/* ── CTA Button ── */}
        <button
          onClick={() => navigate("/eventet/retreat")}
          className="w-full py-3 md:py-4 rounded-2xl text-white font-semibold text-xs md:text-[16px] flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #4e29c5 0%, #3f1e92 100%)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {t("Rezervo vendin tënd", "Reserve your spot")}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── Image right ── */}
      <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/img/retreat-photo.png"
          alt="Retreat venue"
          className="w-full h-auto block"
        />
        <div
          className="absolute inset-0 rounded-3xl"
          style={{ background: "linear-gradient(180deg, rgba(78,41,197,0.05) 0%, rgba(78,41,197,0.35) 100%)" }}
        />
      </div>

      </div>
    </section>
  );
};
