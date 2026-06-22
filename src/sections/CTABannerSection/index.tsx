import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export const CTABannerSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden py-6 md:py-24" style={{ backgroundColor: '#F9FAFB' }}>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-3 text-lg font-bold leading-tight text-zinc-900 md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {t("Gati të bësh", "Ready to take")}{" "}
          <span style={{ color: '#4e29c5' }}>
            {t("hapin e parë?", "the first step?")}
          </span>
        </h2>

        <p className="mx-auto mb-4 max-w-xl text-xs md:text-base leading-relaxed" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
          {t(
            "Retreat-i, trajnimet online dhe eventet tona të presin. Zgjedh rrugën që i përshtatet momentit tënd dhe fillo transformimin.",
            "Our retreat, online trainings and events await you. Choose the path that suits your moment and begin the transformation."
          )}
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button onClick={() => navigate("/eventet/retreat")}
            className="inline-flex items-center gap-2 text-white font-semibold text-sm md:text-base px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #4e29c5 0%, #3f1e92 100%)", fontFamily: "'Inter', sans-serif" }}>
            {t("Rezervo Retreat-in", "Book the Retreat")}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button onClick={() => navigate("/eventet/trajnime-online")}
            className="inline-flex items-center gap-2 font-semibold text-sm md:text-base px-8 py-4 rounded-xl border border-gray-200 bg-white text-zinc-700 transition-all duration-300 hover:scale-105 hover:bg-gray-50"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            {t("Shiko trajnimet online", "View online trainings")}
          </button>
        </div>

      </div>
    </section>
  );
};
