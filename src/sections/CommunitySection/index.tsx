import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
    alt: "Grua me krahë hapur pranë detit",
  },
  {
    src: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=500&q=80",
    alt: "Dy njerëz duke u përqafuar",
  },
  {
    src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&q=80",
    alt: "Grup meditimi jashtë",
  },
  {
    src: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=500&q=80",
    alt: "Grup pranë zjarrit",
  },
  {
    src: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=500&q=80",
    alt: "Meditim individual",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80",
    alt: "Yoga në grup",
  },
];

const VISIBLE = 4;

export const CommunitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < IMAGES.length;

  const prev = () => { if (canPrev) setStartIndex((i) => i - 1); };
  const next = () => { if (canNext) setStartIndex((i) => i + 1); };

  const shownImages = IMAGES.slice(startIndex, startIndex + VISIBLE);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F4F2FF] py-10 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 pl-6 md:pl-12 lg:pl-20 xl:pl-28 pr-6 md:pr-10">
        {/* Left — text */}
        <div
          className="flex-shrink-0 w-full md:w-72 lg:w-80"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2
            className="text-2xl lg:text-3xl font-bold text-zinc-900 leading-snug mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t("Një komunitet që rritet", "A community that grows")}{" "}
            <br />
            <span style={{ color: "#4e29c5", fontStyle: "italic" }}>
              {t("së bashku", "together")}
            </span>
          </h2>

          <p
            className="text-base leading-relaxed text-zinc-500 mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {t(
              "Këtu gjen mbështetje, frymëzim dhe njerëz që kanë zgjedhur të jetojnë me më shumë vetëdije.",
              "Here you find support, inspiration and people who have chosen to live with more awareness."
            )}
          </p>

          <Link
            to="/rezultatet/testimonials"
            className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 hover:gap-2"
            style={{ color: "#4e29c5", fontFamily: "'Inter', sans-serif" }}
          >
            {t("Bëhu pjesë e komunitetit", "Join the community")} →
          </Link>
        </div>

        {/* Right — image carousel */}
        <div
          className="flex-1 flex items-center gap-3 min-w-0"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={!canPrev}
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: canPrev ? "white" : "rgba(255,255,255,0.4)",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: canPrev ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
              color: canPrev ? "#4e29c5" : "#c4b8f9",
              cursor: canPrev ? "pointer" : "default",
            }}
            aria-label="Imazhi paraardhës"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Images */}
          <div className="flex-1 flex gap-3 min-w-0 overflow-hidden">
            {shownImages.map((img, i) => (
              <div
                key={startIndex + i}
                className="flex-1 rounded-2xl overflow-hidden"
                style={{
                  height: "220px",
                  minWidth: 0,
                  opacity: 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={!canNext}
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: canNext ? "white" : "rgba(255,255,255,0.4)",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: canNext ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
              color: canNext ? "#4e29c5" : "#c4b8f9",
              cursor: canNext ? "pointer" : "default",
            }}
            aria-label="Imazhi tjetër"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
