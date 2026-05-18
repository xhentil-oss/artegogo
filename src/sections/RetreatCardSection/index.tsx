import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const INCLUDES = [
  { al: "Meditim i thellë", en: "Deep meditation", icon: "◎" },
  { al: "Praktika somatike", en: "Somatic practices", icon: "◈" },
  { al: "Punë me frymëmarrjen", en: "Breathwork", icon: "♡" },
  { al: "Grupie të vogla", en: "Small groups", icon: "⟡" },
  { al: "Materiale & audio", en: "Materials & audio", icon: "◎" },
  { al: "Mbështetje pas retreat-it", en: "Post-retreat support", icon: "◈" },
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
      {/* ── Photos collage — full width ── */}
      <div
        className="relative w-full mb-0"
        style={{
          height: "420px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      >
          {/* Background large image */}
          <img
            src="/img/retreat-photo.png"
            alt="Retreat venue"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(78,41,197,0.15) 0%, rgba(78,41,197,0.55) 85%, rgba(78,41,197,0.85) 100%)" }}
          />

          {/* Small photo left */}
          <div
            className="absolute rounded-xl overflow-hidden shadow-2xl border-2 border-white"
            style={{ width: "110px", height: "130px", bottom: "44px", left: "18px", transform: "rotate(-5deg)", zIndex: 2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80"
              alt="Retreat"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small photo right */}
          <div
            className="absolute rounded-xl overflow-hidden shadow-2xl border-2 border-white"
            style={{ width: "110px", height: "130px", bottom: "44px", right: "18px", transform: "rotate(5deg)", zIndex: 2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=300&q=80"
              alt="Retreat group"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Purple banner at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 text-center py-2.5 px-4"
            style={{ background: "rgba(78,41,197,0.92)", zIndex: 3 }}
          >
            <p
              className="text-white font-bold text-xs tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}
            >
              {t(
                "PUSHIME, SHËRIM, MANIFESTIM, & HAPJE ZEMRE, RIKTIM TE VETJA",
                "REST, HEALING, MANIFESTATION, & HEART OPENING, RETURN TO SELF"
              )}
            </p>
          </div>
      </div>

      {/* ── Content below image ── */}
      <div
        className="max-w-2xl mx-auto px-6 py-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        }}
      >
        {/* ── Description ── */}
        <p
          className="text-base leading-relaxed text-zinc-600 mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t(
            "Një përvojë immersive për të liruar emocionet, për të harmonizuar energjinë dhe për të hyrë në një nivel më të lartë të vetes.",
            "An immersive experience to release emotions, to harmonize energy and to enter a higher level of yourself."
          )}
        </p>

        {/* ── Stats ── */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { icon: "◎", value: t("7 Ditë", "7 Days"), label: t("KOHËZGJATJA", "DURATION") },
            { icon: "⟡", value: "20+", label: t("SEANCA", "SESSIONS") },
            { icon: "♡", value: "30", label: t("VENDE GJITHSEJ", "TOTAL SPOTS") },
          ].map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-2xl py-4 px-2"
              style={{ border: "1px solid rgba(78,41,197,0.15)", background: "rgba(78,41,197,0.03)" }}
            >
              <span className="text-lg mb-1" style={{ color: "#9D8FEF" }}>{s.icon}</span>
              <span
                className="text-xl font-bold"
                style={{ color: "#4e29c5", fontFamily: "'Playfair Display', serif" }}
              >
                {s.value}
              </span>
              <span
                className="text-[10px] font-semibold tracking-widest uppercase mt-0.5"
                style={{ color: "rgba(78,41,197,0.5)", fontFamily: "'Inter', sans-serif" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Includes ── */}
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: "#4e29c5", fontFamily: "'Inter', sans-serif", letterSpacing: "0.18em" }}
        >
          {t("ÇFARË PËRFSHIN", "WHAT IT INCLUDES")}
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
          {INCLUDES.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="text-sm flex-shrink-0" style={{ color: "#9D8FEF" }}>{item.icon}</span>
              <span
                className="text-sm"
                style={{ color: "#3f1e92", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {lang === "al" ? item.al : item.en}
              </span>
            </div>
          ))}
        </div>

        {/* ── Quote ── */}
        <p
          className="text-sm italic leading-relaxed text-zinc-500 mb-8 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t(
            "Ky retreat është për ata që duan të dalin nga mbijetesa dhe të hyjnë në një gjendje më të lartë paqeje, fuqie dhe krijimi.",
            "This retreat is for those who want to move beyond survival and enter a higher state of peace, power and creation."
          )}
        </p>

        {/* ── CTA Button ── */}
        <button
          onClick={() => navigate("/eventet/retreat")}
          className="w-full py-4 rounded-2xl text-white font-semibold text-base flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #4e29c5 0%, #7c3aed 100%)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {t("Rezervo vendin tënd", "Reserve your spot")}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};
