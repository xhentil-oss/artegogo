import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const UniversityBanner = () => {
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
      style={{ minHeight: "180px" }}
    >
      {/* Background building image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />

      {/* Dark overlay — dark left, slightly lighter right */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(8,4,28,0.96) 0%, rgba(8,4,28,0.92) 40%, rgba(8,4,28,0.70) 65%, rgba(8,4,28,0.45) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between py-10 gap-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Left — text */}
        <div className="flex-1 max-w-xl">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{
              color: "#a78bfa",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.18em",
            }}
          >
            {t("Shkëncë. Ndërgjegjë. Transformim.", "Science. Awareness. Transformation.")}
          </p>

          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t(
              "Bashkëpunim akademik me University of Bern",
              "Academic collaboration with University of Bern"
            )}
          </h2>

          <p
            className="text-base text-white/60"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            {t("Hulumtim. Inovacion. Ndikim global.", "Research. Innovation. Global impact.")}
          </p>
        </div>

        {/* Right — University of Bern logo badge */}
        <div className="flex-shrink-0">
          <div
            className="w-24 h-24 rounded-full flex flex-col items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            <span
              className="text-2xl font-black leading-none"
              style={{ color: "#1a1a2e", fontFamily: "'Playfair Display', serif" }}
            >
              u<sup style={{ fontSize: "0.6em", verticalAlign: "super" }}>b</sup>
            </span>
            <span
              className="text-[7px] font-semibold uppercase tracking-wider text-center leading-tight mt-1 px-2"
              style={{ color: "#444", fontFamily: "'Inter', sans-serif" }}
            >
              Universität<br />Bern
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
