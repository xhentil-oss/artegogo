import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const QUOTES = [
  {
    quoteAl: "Kam qarë dhe jam ndier i lirë. Dicka brenda meje u çlirua.",
    quoteEn: "I cried and felt free. Something inside me was released.",
    nameAl: "Ardit", nameEn: "Ardit",
    locationAl: "Tiranë, Shqipëri", locationEn: "Tirana, Albania",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
  {
    quoteAl: "Kam fjetur i qetë për herë të parë pas shumë vitesh. Ishte magjike.",
    quoteEn: "I slept peacefully for the first time in many years. It was magical.",
    nameAl: "Elira", nameEn: "Elira",
    locationAl: "Prishtinë, Kosovë", locationEn: "Pristina, Kosovo",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80",
  },
  {
    quoteAl: "Ndjeva trupin tim të rilindej me zemrën dhe frymën. Pa fjalë.",
    quoteEn: "I felt my body reborn with heart and breath. Beyond words.",
    nameAl: "Besnik", nameEn: "Besnik",
    locationAl: "Shkodër, Shqipëri", locationEn: "Shkoder, Albania",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  },
];

export const VideoTestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
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

  const changeQuote = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setQuoteIndex(next);
      setAnimating(false);
    }, 300);
  };

  const visibleQuotes = [
    QUOTES[quoteIndex % QUOTES.length],
    QUOTES[(quoteIndex + 1) % QUOTES.length],
  ];

  return (
    <section ref={ref} className="relative w-full overflow-hidden py-8 md:py-20 px-6"
      style={{
        background: "#F9FAFB",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s ease",
      }}>


<div className="relative z-10 max-w-4xl mx-auto">

        {/* Badge + Title */}
        <div className="text-center mb-5 md:mb-10">
          <span className="inline-block text-[8px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full px-4 py-1.5 mb-3 md:mb-5"
            style={{ background: "rgba(124,58,237,0.12)", color: "#7C3AED", border: "1px solid rgba(124,58,237,0.25)" }}>
            {t("TRANSFORMIME REALE", "REAL TRANSFORMATIONS")}
          </span>
          <h2 className="text-lg md:text-4xl lg:text-[2.6rem] font-bold text-zinc-900 mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {t("Kur njerëzit rikthehen", "When people return")}{" "}
            <span style={{ color: "#4e29c5" }}>{t("tek vetja", "to themselves")}</span>
          </h2>
          <p className="text-xs md:text-base leading-relaxed max-w-lg mx-auto"
            style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
            {t(
              "Momentet reale nga retreat-et ku pjesëmarrësit përjetuan çlirim emocional, qetësi të thellë dhe transformim.",
              "Real moments from retreats where participants experienced emotional release, deep peace and transformation."
            )}
          </p>
        </div>

        {/* Featured video card */}
        <div className="relative rounded-3xl overflow-hidden mb-5 md:mb-10 shadow-2xl">
          {videoOpen ? (
            /* Inline YouTube player */
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/Dh_LXdkriZs?autoplay=1"
                title="Testimonial Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold transition-opacity hover:opacity-80"
                style={{ background: "rgba(0,0,0,0.6)" }}
              >
                ✕
              </button>
            </div>
          ) : (
            <>
              {/* Thumbnail */}
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80"
                alt="Testimonial"
                className="w-full h-52 md:h-96 object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.6) 100%)" }} />

              {/* Testimonial badge top-left */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(8px)" }}>
                <Play className="w-3 h-3 text-white" fill="white" />
                <span className="text-white text-[8px] md:text-xs font-semibold tracking-wide">{t("TESTIMONIAL REAL", "REAL TESTIMONIAL")}</span>
              </div>

              {/* Play button centered */}
              <button
                onClick={() => setVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(78,41,197,0.9)" }}>
                  <Play className="w-6 h-6 ml-1 text-white" fill="white" />
                </div>
              </button>

              {/* Quote + stats bottom overlay */}
              <div className="absolute bottom-0 left-0 px-4 md:px-6 py-3 md:py-5 text-left" style={{ width: "40%" }}>
                <p className="text-white text-sm md:text-base font-semibold leading-relaxed mb-1 md:mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span style={{ color: "#a78bfa" }}>&ldquo;</span>{t("Ndjeva zemrën time të hapej për herë të parë pas shumë vitesh.", "I felt my heart open for the first time in many years.")}
                </p>
                <p className="text-white/60 text-[8px] md:text-base font-bold tracking-widest uppercase mb-2 md:mb-4">
                  — {t("PJESËMARRËSE NE RETREAT", "RETREAT PARTICIPANT")}
                </p>
                <div className="flex items-center gap-2 md:gap-3 pt-2 md:pt-3 border-t border-white/20">
                  <span className="text-white/70 text-[8px] md:text-xs flex items-center gap-1">
                    <Play className="w-2.5 h-2.5 md:w-3 md:h-3" fill="currentColor" /> 1:42
                  </span>
                  <span className="text-white/40 text-[8px] md:text-xs">|</span>
                  <span className="text-white/70 text-[8px] md:text-xs">{t("VIDEO", "VIDEO")}</span>
                  <span className="text-white/40 text-[8px] md:text-xs">|</span>
                  <span className="text-white/70 text-[8px] md:text-xs">{t("ZË + PAMJE", "AUDIO + VIDEO")}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Quote carousel */}
        <div className="relative mb-8">
          {/* Arrow left */}
          <button
            onClick={() => changeQuote((quoteIndex - 1 + QUOTES.length) % QUOTES.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
            style={{ background: "#fff", border: "1px solid #e9d5ff" }}>
            <ChevronLeft className="w-5 h-5" style={{ color: "#7C3AED" }} />
          </button>

          {/* Cards */}
          <div
            className="grid grid-cols-2 gap-2 md:gap-4 px-2 md:px-6"
            style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
            {visibleQuotes.map((q, i) => (
              <div key={`${quoteIndex}-${i}`}
                className="rounded-2xl p-3 md:p-6 bg-white flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,0,0,0.13)]"
                style={{ boxShadow: "0 4px 24px rgba(124,58,237,0.08)", border: "1px solid #f3f0ff" }}>
                <div>
                  <p className="text-3xl md:text-7xl font-serif leading-none mb-1" style={{ color: "#a78bfa", lineHeight: "0.8" }}>&ldquo;</p>
                  <p className="text-[11px] md:text-base leading-relaxed font-medium mb-3 md:mb-5"
                    style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
                    {lang === "al" ? q.quoteAl : q.quoteEn}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 md:gap-3">
                  <img
                    src={q.avatar}
                    alt={lang === "al" ? q.nameAl : q.nameEn}
                    className="w-6 h-6 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-[8px] md:text-base font-semibold text-zinc-900">{lang === "al" ? q.nameAl : q.nameEn}</p>
                    <p className="text-[7px] md:text-base text-zinc-400">{lang === "al" ? q.locationAl : q.locationEn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow right */}
          <button
            onClick={() => changeQuote((quoteIndex + 1) % QUOTES.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
            style={{ background: "#fff", border: "1px solid #e9d5ff" }}>
            <ChevronRight className="w-5 h-5" style={{ color: "#7C3AED" }} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mb-4 md:mb-8">
          {QUOTES.map((_, i) => (
            <button key={i} onClick={() => changeQuote(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === quoteIndex ? 24 : 8,
                height: 8,
                background: i === quoteIndex ? "#7C3AED" : "#ddd6fe",
              }} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[11px] md:text-base font-bold tracking-[0.15em] uppercase mb-3 md:mb-5"
            style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
            {t("KËTO MUND TË JENË MOMENTET QE NDRYSHOJNË JETËN TËNDE", "THESE COULD BE THE MOMENTS THAT CHANGE YOUR LIFE")}
          </p>
          <button onClick={() => navigate("/rezultatet/testimonials")}
            className="inline-flex items-center gap-1.5 text-white font-semibold px-3 py-1.5 md:px-8 md:py-4 rounded-xl text-xs md:text-lg transition-all duration-300 hover:scale-105 active:scale-100"
            style={{ background: "linear-gradient(135deg, #4e29c5 0%, #3f1e92 100%)", fontFamily: "'Inter', sans-serif" }}>
            <Play className="w-4 h-4" fill="white" />
            {t("Shiko më shumë video testimoniale", "Watch more video testimonials")}
          </button>
        </div>
      </div>


    </section>
  );
};
