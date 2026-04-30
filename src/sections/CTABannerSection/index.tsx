import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export const CTABannerSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-24" style={{ backgroundColor: '#F9FAFB' }}>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-5 text-2xl font-bold leading-tight text-zinc-900 md:text-3xl">
          {t("Gati të bësh", "Ready to take")}{" "}
          <span style={{ color: '#9D8FEF' }}>
            {t("hapin e parë?", "the first step?")}
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-zinc-700 md:text-base">
          {t(
            "Retreat-i, trajnimet online dhe eventet tona të presin. Zgjedh rrugën që i përshtatet momentit tënd dhe fillo transformimin.",
            "Our retreat, online trainings and events await you. Choose the path that suits your moment and begin the transformation."
          )}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button onClick={() => navigate("/eventet/retreat")}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.03]" style={{ backgroundColor: '#9D8FEF' }}>
            <span className="relative z-10 text-sm leading-relaxed md:text-base">{t("Rezervo Retreat-in", "Book the Retreat")}</span>
            <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="absolute inset-0 -translate-x-full bg-white/15 skew-x-12 transition-transform duration-500 group-hover:translate-x-full" />
          </button>

          <button onClick={() => navigate("/eventet/trajnime-online")}
            className="inline-flex items-center gap-3 rounded-full border-2 bg-white px-8 py-[14px] font-semibold transition-all duration-300 hover:scale-[1.02]"
            style={{ borderColor: '#000000', color: '#000000' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f4f4f5'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff'; }}>
            <span className="text-sm leading-relaxed text-zinc-700 md:text-base">{t("Shiko trajnimet online", "View online trainings")}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
