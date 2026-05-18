import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const HL = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#3f1e92" }}>{children}</span>
);

const BG_IMAGES = [
  "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777298905998-0.jpeg",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80",
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1400&q=80",
];

const STATS = [
  {
    value: "200+",
    label: "PJESMARRËS",
    sub: "Në retreat-et tona",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    value: "50+",
    label: "EVENTE LIVE",
    sub: "Transformuese",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
  {
    value: "1000+",
    label: "TRAJNIME ONLINE",
    sub: "Ndryshime reale",
    icon: (
      <>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
      </>
    ),
  },
  {
    value: "5 ★",
    label: "VLERËSIM MESATAR",
    sub: "Nga komuniteti ynë",
    icon: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
  },
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [initialVisible, setInitialVisible] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();
  const fadingRef = useRef(false);
  const currentRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setInitialVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => { fadingRef.current = fading; }, [fading]);
  useEffect(() => { currentRef.current = current; }, [current]);

  const goTo = (idx: number) => {
    if (fadingRef.current) return;
    fadingRef.current = true;
    setFading(true);
    setTimeout(() => {
      currentRef.current = idx;
      setCurrent(idx);
      fadingRef.current = false;
      setFading(false);
    }, 350);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((currentRef.current + 1) % 3);
    }, 7000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contentVisible = initialVisible && !fading;

  return (
    <div
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: "92vh" }}
    >
      {/* Background images — cross-fade */}
      {BG_IMAGES.map((bg, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${bg}')`,
            backgroundSize: "cover",
            backgroundPosition: i === 0 ? "center top" : "center center",
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
          }}
        />
      ))}

      {/* Gradient overlay — dark left, translucent right */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(6,2,22,0.95) 0%, rgba(6,2,22,0.90) 35%, rgba(6,2,22,0.62) 62%, rgba(6,2,22,0.18) 100%)",
        }}
      />

      {/* ── Main content ── */}
      <section
        className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-28 pt-28 pb-10"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >

        <div
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            maxWidth: "600px",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-300 animate-pulse inline-block" />
            <span className="text-white/90 text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em" }}>
              {current === 0 && t("Harmonizim Kuantik", "Quantum Harmonization")}
              {current === 1 && t("Retreat Intensive", "Retreat Intensive")}
              {current === 2 && t("Trajnime Online", "Online Training")}
            </span>
          </div>

          {/* Heading */}
          <h1 className="leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, letterSpacing: "0em", lineHeight: 1.12 }}>
            {current === 0 && (
              <>
                <span className="block text-5xl md:text-6xl lg:text-[4rem] text-white mb-1">
                  {t("Rikthehu në frekuencën tënde", "Return to your true")}
                </span>
                <span
                  className="block text-5xl md:text-6xl lg:text-[4rem]"
                  style={{ color: "#3f1e92", fontStyle: "italic" }}
                >
                  {t("të vërtetë.", "frequency.")}
                </span>
              </>
            )}
            {current === 1 && (
              <>
                <span className="block text-5xl md:text-6xl lg:text-[4rem] text-white mb-1">
                  {t("Zbulo thellësinë e", "Discover the depth of")}
                </span>
                <span
                  className="block text-5xl md:text-6xl lg:text-[4rem]"
                  style={{ color: "#3f1e92", fontStyle: "italic" }}
                >
                  {t("vetë-njohjes tënde.", "your self-knowledge.")}
                </span>
              </>
            )}
            {current === 2 && (
              <>
                <span className="block text-5xl md:text-6xl lg:text-[4rem] text-white mb-1">
                  {t("Mëso kudo,", "Learn anywhere,")}
                </span>
                <span
                  className="block text-5xl md:text-6xl lg:text-[4rem]"
                  style={{ color: "#3f1e92", fontStyle: "italic" }}
                >
                  {t("transformohu gjithmonë.", "transform always.")}
                </span>
              </>
            )}
          </h1>

          {/* Subtitle with highlights */}
          <p className="text-xl md:text-2xl text-white/80 mb-4 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            {current === 0 && (
              <>
                {t("Kur", "When")}{" "}
                <HL>{t("zemra", "heart")}</HL>,{" "}
                <HL>{t("truri", "mind")}</HL>{" "}
                {t("dhe", "and")}{" "}
                <HL>{t("trupi", "body")}</HL>{" "}
                {t("harmonizohen... fillon", "align... begins the")}{" "}
                <HL>{t("transformimi", "transformation")}</HL>.
              </>
            )}
            {current === 1 && (
              <>
                {t("5 ditë transformim i plotë —", "5 days of complete transformation —")}{" "}
                <HL>{t("shpirtëror", "spiritual")}</HL>,{" "}
                <HL>{t("mendor", "mental")}</HL>{" "}
                {t("dhe", "and")}{" "}
                <HL>{t("fizik", "physical")}</HL>.
              </>
            )}
            {current === 2 && (
              <>
                {t("Mbi", "Over")}{" "}
                <HL>1000+</HL>{" "}
                {t("trajnime online në dispozicion tënde", "online trainings at your disposal")}{" "}
                <HL>24/7</HL>.
              </>
            )}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white/55 mb-9 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            {current === 0 &&
              t(
                "Një udhëtim transformues drejt qetësisë, vetëdijes dhe jetës në harmoni me ritmin tënd të brendshëm.",
                "A transformative journey toward inner peace, awareness and life in harmony with your inner rhythm."
              )}
            {current === 1 &&
              t(
                "Retreat me natyrë, heshtje dhe udhëzues të certifikuar. Largohesh ndryshe nga kush je sot.",
                "A retreat in nature, silence and certified guides. You leave different from who you are today."
              )}
            {current === 2 &&
              t(
                "Akses i plotë ndaj bibliotekës sonë: meditim, vetëdije, teknika kuantike dhe shumë më tepër.",
                "Full access to our library: meditation, mindfulness, quantum techniques and much more."
              )}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <button
              onClick={() =>
                navigate(current === 2 ? "/eventet/trajnime-online" : "/eventet/retreat")
              }
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              {current === 2 ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
              {current === 0 && t("Rezervo Retreat-in", "Book the Retreat")}
              {current === 1 && t("Rezervo Retreat-in", "Book the Retreat")}
              {current === 2 && t("Shiko Trajnimet", "View Trainings")}
            </button>

            <button
              onClick={() =>
                navigate(
                  current === 2
                    ? "/signup"
                    : current === 1
                    ? "/eventet/retreat"
                    : "/eventet/trajnime-online"
                )
              }
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600,
                backgroundColor: "rgba(78,41,197,0.15)",
                border: "1.5px solid rgba(78,41,197,0.55)",
                color: "white",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              {current === 0 && t("Shiko Trajnimet Online", "View Online Trainings")}
              {current === 1 && t("Shiko Datat", "View Dates")}
              {current === 2 && t("Regjistrohu Falas", "Register Free")}
            </button>
          </div>


          {/* ── Carousel navigation ── */}
          <div className="flex items-center gap-3">
            {/* Prev */}
            <button
              onClick={() => goTo((current - 1 + 3) % 3)}
              aria-label="Slide paraardhës"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/20"
              style={{
                border: "1.5px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.08)",
                color: "white",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    height: "8px",
                    width: i === current ? "32px" : "8px",
                    borderRadius: "4px",
                    backgroundColor:
                      i === current ? "#4e29c5" : "rgba(255,255,255,0.28)",
                    transition: "width 0.35s ease, background-color 0.35s ease",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => goTo((current + 1) % 3)}
              aria-label="Slide tjetër"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/20"
              style={{
                border: "1.5px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.08)",
                color: "white",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-8">
        <div
          className="max-w-5xl mx-auto flex rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex-1 flex items-center gap-4 px-7 py-6"
              style={{
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{
                  background: "rgba(78,41,197,0.18)",
                  border: "1.5px solid rgba(160,110,255,0.55)",
                }}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {stat.icon}
                </svg>
              </div>

              {/* Text */}
              <div style={{ fontFamily: "'Inter', sans-serif" }}>
                <p className="text-white text-xl leading-none mb-1" style={{ fontWeight: 700 }}>
                  {stat.value}
                </p>
                <p className="text-white/70 text-[11px] uppercase leading-tight mb-0.5" style={{ fontWeight: 600, letterSpacing: "0.12em" }}>
                  {stat.label}
                </p>
                <p className="text-white text-xs leading-tight" style={{ fontWeight: 400 }}>
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
