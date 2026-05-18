import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export const RetreatVideoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section ref={ref} className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* ── Left — text ── */}
        <div
          className="flex-shrink-0 w-full md:w-[42%]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Label */}
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              color: "#4e29c5",
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "0.16em",
            }}
          >
            {t(
              "Për ty që ndjen se ka diçka më shumë",
              "For you who feel there is something more"
            )}
          </p>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight text-zinc-900 mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t("Retreat-e që", "Retreats that")}{" "}
            <br />
            {t("ndryshojnë jetën", "change lives")}
          </h2>

          {/* Description */}
          <p
            className="text-base text-zinc-500 leading-relaxed mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
          >
            {t(
              "Një përvojë magjike, për rregim të mendjes, shpirtit dhe trupit. Kthim tek vetja juaj e vërtetë.",
              "A magical experience for renewal of mind, spirit and body. A return to your true self."
            )}
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/eventet/retreat")}
            className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all duration-300 hover:scale-105 active:scale-100"
            style={{
              backgroundColor: "#4e29c5",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            {t("Shiko Retreat-et tona", "View our Retreats")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── Right — video ── */}
        <div
          className="flex-1 w-full relative"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ background: "#000" }}>
            <video
              ref={videoRef}
              src="/img/TONI2730.mp4"
              controls
              playsInline
              className="w-full block"
              style={{ maxHeight: "420px", objectFit: "cover" }}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {/* Play overlay — shown before first play */}
            {!playing && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center group"
                style={{ background: "rgba(0,0,0,0.28)" }}
                aria-label="Luaj videon"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.92)" }}
                >
                  <svg className="w-7 h-7 ml-1" viewBox="0 0 24 24" fill="#4e29c5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
