import { FAQSection } from "@/sections/FAQSection";
import { useLanguage } from "@/context/LanguageContext";

export const FAQPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776944742321-0.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
          <div className="flex-1 text-left">
            <h1 className="font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#ffffff" }}>
              {t("Pyetje të", "Frequently Asked")}<br />
              <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("Shpeshta", "Questions")}</span>
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>♦</span>
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
            </div>

            <p className="leading-relaxed mb-4 md:mb-6 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.85)", maxWidth: 420 }}>
              {t(
                "Gjeni përgjigjet për pyetjet tuaja më të shpeshta rreth metodologjisë, programeve dhe rezultateve tona.",
                "Find answers to your most common questions about our methodology, programs and results."
              )}
            </p>

            <a href="/kontakt"
              className="inline-flex items-center gap-1.5 text-white text-sm md:text-base px-3 py-1.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              {t("Na kontaktoni", "Contact us")}
            </a>
          </div>
        </div>
      </div>
      <FAQSection />
    </div>
  );
};
