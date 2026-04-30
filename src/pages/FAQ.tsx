import { FAQSection } from "@/sections/FAQSection";
import { useLanguage } from "@/context/LanguageContext";

export const FAQPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="relative py-16 md:py-28 px-4 md:px-6 overflow-hidden min-h-[300px] md:min-h-[420px] flex items-center"
        style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776944742321-0.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/20 text-white border border-white/30">
            FAQ
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {t("Pyetje të", "Frequently Asked")}{" "}
            <span style={{ color: "#C4B5FD" }}>{t("Shpeshta", "Questions")}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            {t("Gjeni përgjigjet për pyetjet tuaja më të shpeshta rreth metodologjisë, programeve dhe rezultateve tona.", "Find answers to your most common questions about our methodology, programs and results.")}
          </p>
        </div>
      </div>
      <FAQSection />
    </div>
  );
};
