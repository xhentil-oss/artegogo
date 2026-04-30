import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { useLanguage } from "@/context/LanguageContext";

export const TestimonialsPage = () => {
  const { t } = useLanguage();
  return (
    <div>
      <div className="relative py-16 md:py-28 px-4 md:px-6 overflow-hidden min-h-[300px] md:min-h-[420px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776859294564-0.png')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/15 text-white border border-white/20">
            {t("Dëshmitë tona", "Our testimonials")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
            {t("Çfarë thonë", "What our")}{" "}
            <span style={{ color: "#C4B5FD" }}>
              {t("pjesëmarrësit tanë", "participants say")}
            </span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("Mijëra njerëz kanë kaluar nëpër retreat-et, trajnimet dhe eventet tona. Secili ka sjellë shtëpi ndryshimin e tij unik.", "Thousands of people have gone through our retreats, trainings and events. Each has brought home their unique change.")}
          </p>
        </div>
      </div>
      <TestimonialsSection />
    </div>
  );
};
