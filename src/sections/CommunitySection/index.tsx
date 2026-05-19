import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80", alt: "Grua me krahë hapur" },
  { src: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=500&q=80", alt: "Dy njerëz" },
  { src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&q=80", alt: "Grup meditimi" },
  { src: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=500&q=80", alt: "Grup pranë zjarrit" },
  { src: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=500&q=80", alt: "Meditim individual" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80", alt: "Yoga në grup" },
];

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

  const total = IMAGES.length;
  const prev = () => setStartIndex((i) => (i - 1 + total) % total);
  const next = () => setStartIndex((i) => (i + 1) % total);

  const img1 = IMAGES[startIndex % total];
  const img2 = IMAGES[(startIndex + 1) % total];

  return (
    <section ref={sectionRef} className="w-full bg-white pt-16 pb-6 md:pt-20 md:pb-12 overflow-hidden">
      <div
        className="max-w-6xl mx-auto px-6 flex flex-row items-start gap-6 md:gap-10"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}
      >
        {/* Left — text */}
        <div className="flex-shrink-0 w-[42%] md:w-[40%] pr-3 md:pr-0">
          <p className="text-[8px] md:text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "#4e29c5" }}>
            {t("BËHU PJESË E DICKAS MË TË MADHE", "BE PART OF SOMETHING GREATER")}
          </p>
          <h2
            className="text-lg md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-snug mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t("Një komunitet që", "A community that")}{" "}
            <span style={{ color: "#4e29c5" }}>{t("të mbështet", "supports you")}</span>{" "}
            {t("dhe", "and")}{" "}
            <span style={{ color: "#4e29c5", fontStyle: "italic" }}>{t("të frymëzon.", "inspires you.")}</span>
          </h2>
          <p className="text-xs md:text-base leading-relaxed mb-5"
            style={{ fontFamily: "'Inter', sans-serif", color: "#52525b" }}>
            {t(
              "Lidhu me njerëz që ndajnë të njëjtat vlera, rritet vetëdijën dhe krijoni jetën që doni.",
              "Connect with people who share the same values, grow awareness and create the life you want."
            )}
          </p>
          <Link
            to="/rezultatet/testimonials"
            className="inline-flex items-center gap-1.5 text-xs md:text-lg font-semibold px-3 py-1.5 md:px-8 md:py-4 rounded-xl text-white transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #4e29c5 0%, #3f1e92 100%)", fontFamily: "'Inter', sans-serif" }}
          >
            {t("Bëhu pjesë e komunitetit", "Join the community")} →
          </Link>
        </div>

        {/* Right — photos with overlaid arrows */}
        <div className="flex-1 relative">

          {/* Mobile: single image */}
          <div className="relative md:hidden rounded-2xl overflow-hidden" style={{ height: "220px" }}>
            <img src={img1.src} alt={img1.alt} className="w-full h-full object-cover" />
            <button onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
              <svg className="w-4 h-4" fill="none" stroke="#4e29c5" strokeWidth={2} viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
              <svg className="w-4 h-4" fill="none" stroke="#4e29c5" strokeWidth={2} viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>

          {/* Desktop: two images */}
          <div className="hidden md:flex gap-3">
            <div className="flex-1 rounded-2xl overflow-hidden" style={{ height: "260px" }}>
              <img src={img1.src} alt={img1.alt} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden relative" style={{ height: "260px" }}>
              <img src={img2.src} alt={img2.alt} className="w-full h-full object-cover" />
              <button onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                <svg className="w-4 h-4" fill="none" stroke="#4e29c5" strokeWidth={2} viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>

          {/* Desktop left arrow */}
          <button onClick={prev}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
            <svg className="w-4 h-4" fill="none" stroke="#4e29c5" strokeWidth={2} viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i)}
                style={{
                  width: i === startIndex ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === startIndex ? "#4e29c5" : "#ddd6fe",
                  border: "none",
                  cursor: "pointer",
                  transition: "width 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
