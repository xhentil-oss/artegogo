import { useLanguage } from "@/context/LanguageContext";

export const LivePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-zinc-800" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="relative py-28 px-6 overflow-hidden" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 border border-red-300 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">LIVE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-5 leading-tight">
            {t("Transmetimet", "Live")}{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              {t("Live", "Broadcasts")}
            </span>
          </h1>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base max-w-2xl mx-auto">
            {t("Ndiqni sesionet tona live të meditimit, workshopeve dhe seancave të koçingut në kohë reale.", "Follow our live meditation sessions, workshops and coaching sessions in real time.")}
          </p>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-violet-200 bg-white p-10 text-center mb-10">
          <div className="w-16 h-16 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">{t("Asnjë transmetim live aktiv momentalisht", "No live broadcast currently active")}</h2>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-7 max-w-md mx-auto">
            {t("Na ndiqni në rrjetet sociale për të mësuar kur do të fillojë transmetimi i radhës.", "Follow us on social media to learn when the next broadcast will begin.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://instagram.com/arte_gogo" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm leading-relaxed md:text-base">
              Instagram — @arte_gogo
            </a>
            <a href="https://youtube.com/@artegogo3246" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm leading-relaxed md:text-base">
              YouTube — @artegogo3246
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { icon: "🧘", title: t("Meditime Live", "Live Meditations"), desc: t("Sesione të udhëhequra nga Dr. Artemisa në kohë reale", "Sessions guided by Dr. Artemisa in real time") },
            { icon: "💡", title: t("Workshope Online", "Online Workshops"), desc: t("Mësimet dhe praktikat live me interaksion të drejtpërdrejtë", "Live lessons and practices with direct interaction") },
            { icon: "🎯", title: t("Q&A dhe Koçing", "Q&A and Coaching"), desc: t("Pyetje dhe përgjigje live — merr ndihmë direkt", "Live questions and answers — get help directly") },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-zinc-800 text-base mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
