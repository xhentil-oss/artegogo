import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const MissionBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d0a2e 0%, #1a0f4e 40%, #0d0a2e 100%)" }}
    >
      {/* Glow left */}
      <div className="absolute left-0 top-0 bottom-0 w-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at left center, rgba(120,80,220,0.35) 0%, transparent 70%)" }} />
      {/* Glow right */}
      <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at right center, rgba(120,80,220,0.25) 0%, transparent 70%)" }} />

      {/* Stars */}
      {[
        { top: "18%", left: "8%" }, { top: "60%", left: "15%" },
        { top: "30%", left: "88%" }, { top: "70%", left: "80%" },
        { top: "20%", left: "55%" }, { top: "75%", left: "45%" },
      ].map((s, i) => (
        <div key={i} className="absolute pointer-events-none"
          style={{ top: s.top, left: s.left, width: "3px", height: "3px", borderRadius: "50%", background: "rgba(200,180,255,0.7)" }} />
      ))}

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-5 md:py-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* 1 MISSION */}
        <div className="flex items-baseline gap-2 md:gap-3 mb-0">
          <span
            className="text-2xl md:text-[4.5rem]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              color: "#c9a84c",
              lineHeight: 1,
            }}
          >
            1
          </span>
          <span
            className="text-lg md:text-[2.5rem]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              color: "#c9a84c",
              letterSpacing: "0.12em",
            }}
          >
            {t("MISION", "MISSION")}
          </span>
        </div>

        {/* Divider with text */}
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="h-px w-10 md:w-24" style={{ background: "#c9a84c", opacity: 0.7 }} />
          <span
            className="text-[8px] md:text-base"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#c9a84c",
              letterSpacing: "0.22em",
            }}
          >
            {t("PËR TË NGRITUR NJERËZIMIN", "TO ELEVATE HUMANITY")}
          </span>
          <div className="h-px w-10 md:w-24" style={{ background: "#c9a84c", opacity: 0.7 }} />
        </div>

        {/* Subtitle */}
        <p
          className="text-xs md:text-base"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(255,255,255,0.75)",
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          {t(
            "Një person, një frymëmarrje, një transformim në të njëjtën kohë.",
            "One person, one breath, one transformation at a time."
          )}
        </p>
      </div>
    </section>
  );
};
