import { useLanguage } from "@/context/LanguageContext";

export const RezultatetShkencorePage = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/TONI2879.JPG')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 w-full">
          <div className="flex-1 text-left">
            <h1 className="font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#ffffff" }}>
              {t("Matjet shkencore që kryejmë", "Scientific measurements we perform")}<br />
              <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("në çdo Retreat.", "at every Retreat.")}</span>
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>♦</span>
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
            </div>

            <p className="leading-relaxed mb-4 md:mb-6 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.85)", maxWidth: 420 }}>
              {t(
                "Ne dokumentojmë transformimin para, gjatë dhe pas meditimit përmes matjeve reale shkencore.",
                "We document the transformation before, during and after meditation through real scientific measurements."
              )}
            </p>

            <a href="/kontakt"
              className="inline-flex items-center gap-1.5 text-white text-sm md:text-base px-3 py-1.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              {t("Mëso më shumë", "Learn more")}
            </a>
          </div>
        </div>
      </div>

      {/* ── Icons + Image strip ── */}
      <section style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-5 pt-2 pb-1 md:pt-8 md:pb-6">

          {/* 4 icon pills */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              {
                label: t("Truri", "Brain"),
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                  </svg>
                ),
              },
              {
                label: t("Zemra", "Heart"),
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                ),
              },
              {
                label: t("Energjia", "Energy"),
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                  </svg>
                ),
              },
              {
                label: t("Stresi", "Stress"),
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 py-3 px-2 rounded-2xl" style={{ background: "#f5f0ff", border: "1px solid #ede9fe" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#7c3aed", color: "#ffffff" }}>
                  {item.icon}
                </div>
                <span className="font-semibold text-center" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#3f3f46" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden" style={{ height: 220 }}>
            <img src="/img/TONI2743.JPG" alt="Matje shkencore" className="w-full h-full object-cover object-center" />
          </div>

        </div>
      </section>

      {/* ── 4 matje kryesore ── */}
      <section style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-5 pb-8 pt-0 md:pt-0">

          <h2 className="font-bold text-center mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2.2rem", color: "#1c1917" }}>
            {t("4 Matje kryesore", "4 Key measurements")}{" "}
            <span style={{ color: "#7c3aed" }}>{t("që përdorim", "we use")}</span>
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                  </svg>
                ),
                title: "EEG",
                subtitle: t("Elektroencefalografia", "Electroencephalography"),
                desc: t("Mat aktivitetin elektrik të trurit në kohë reale.", "Measures brain's electrical activity in real time."),
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                ),
                title: "HRV",
                subtitle: t("Heart Rate Variability", "Heart Rate Variability"),
                desc: t("Mat balancën e sistemit nervor autonom.", "Measures the balance of the autonomic nervous system."),
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                  </svg>
                ),
                title: t("Biofield Scan", "Biofield Scan"),
                subtitle: t("Matja e fushës energjetike", "Energy field measurement"),
                desc: t("Përmes Gas Discharge Visualization.", "Through Gas Discharge Visualization."),
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                  </svg>
                ),
                title: "GSR",
                subtitle: t("Galvanic Skin Response", "Galvanic Skin Response"),
                desc: t("Mat reagimin e sistemit nervor përmes lëkurës.", "Measures the nervous system's response through the skin."),
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-3 rounded-2xl p-4" style={{ background: "#faf8ff", border: "1px solid #ede9fe" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "#7c3aed", color: "#ffffff" }}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold leading-snug" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#1c1917" }}>
                    {item.title}
                  </p>
                  <p className="font-medium" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#7c3aed" }}>
                    {item.subtitle}
                  </p>
                  <p className="leading-snug mt-0.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#71717a" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="flex justify-center">
            <a
              href="/eventet/retreat"
              className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 transition-all duration-200 hover:opacity-90"
              style={{ background: "#7c3aed", color: "#ffffff", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
              </svg>
              {t("Rezervo vendin tënd", "Reserve your spot")}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* ── Detajet e matjeve ── */}
      <section style={{ background: "#f9f9fb" }}>
        <div className="max-w-5xl mx-auto px-5 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                  </svg>
                ),
                title: "EEG",
                subtitle: t("Elektroencefalografia", "Electroencephalography"),
                desc: t("Mat aktivitetin elektrik të trurit në kohë reale.", "Measures brain's electrical activity in real time."),
                image: "/img/TONI2879.JPG",
                items: [
                  { title: t("Valët Gamma (40–120 Hz)", "Gamma Waves (40–120 Hz)"), desc: t("Monitorojmë rritjen e valëve Gamma, që lidhen me gjendjet e avancuara të ndërgjegjës dhe fokusit.", "We monitor the increase of Gamma waves, linked to advanced states of consciousness and focus.") },
                  { title: t("Sinkronizimin e trurit", "Brain Synchronization"), desc: t("Matim koherencën midis rajoneve të trurit për funksionim optimal.", "We measure coherence between brain regions for optimal functioning.") },
                  { title: t("Gjendjet e thella të meditimit", "Deep Meditation States"), desc: t("Identifikojmë tranzicionet në gjendjet e thella (alfa, theta) gjatë praktikave.", "We identify transitions into deep states (alpha, theta) during practices.") },
                  { title: t("Superndërgjegjën", "Super-consciousness"), desc: t("Vëzhgojmë gjendjet e larta të koherencës dhe integrimit të trurit.", "We observe high states of coherence and brain integration.") },
                ],
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                ),
                title: "HRV",
                subtitle: t("Heart Rate Variability", "Heart Rate Variability"),
                desc: t("Mat balancën e sistemit nervor autonom.", "Measures the balance of the autonomic nervous system."),
                image: "/img/TONI2719.JPG",
                items: [
                  { title: t("Aktivizimi parasimpatik", "Parasympathetic Activation"), desc: t("Tregon rritjen e aktivizimit qetësues të trupit dhe sistemit nervor.", "Shows the increase of the calming activation of the body and nervous system.") },
                  { title: t("Ulja e stresit", "Stress Reduction"), desc: t("Vëzhgojmë uljen e rrahjeve të zemrës dhe frekuencës së frymëmarrjes.", "We observe the reduction in heart rate and breathing frequency.") },
                  { title: t("Qetësimi emocional", "Emotional Calm"), desc: t("Matjet e HRV-së tregojnë stabilitet dhe ekuilibër emocional të lartë.", "HRV measurements show high emotional stability and balance.") },
                  { title: t("Rritja e vigjilencës", "Increased Alertness"), desc: t("Trupi kalon në gjendje ndërgjegjeje më të lartë dhe funksionim optimal.", "The body shifts to a higher state of consciousness and optimal functioning.") },
                ],
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                  </svg>
                ),
                title: t("Biofield Scan", "Biofield Scan"),
                subtitle: t("Matja e fushës energjetike", "Energy Field Measurement"),
                desc: t("Përmes Gas Discharge Visualization.", "Through Gas Discharge Visualization."),
                image: "/img/TONI2743.JPG",
                items: [
                  { title: t("Nivelet e energjisë", "Energy Levels"), desc: t("Matim nivelin e përgjithshëm të energjisë dhe vitalitetit të trupit.", "We measure the overall energy level and vitality of the body.") },
                  { title: t("Balancën e organeve dhe sistemeve", "Organ & System Balance"), desc: t("Identifikojmë balancën energjetike të organeve dhe sistemeve kryesore.", "We identify the energetic balance of key organs and systems.") },
                  { title: t("Balancimin e çakrave / qendrave energjetike", "Chakra / Energy Center Balancing"), desc: t("Analizojmë hapjen, balancën dhe rrjedhën e energjisë në çakrat kryesore.", "We analyze the opening, balance and flow of energy in the main chakras.") },
                  { title: t("Nivelet e stresit", "Stress Levels"), desc: t("Matim stresin energjetik dhe ndikimin e tij në fushën bioenergjike.", "We measure energetic stress and its impact on the bioenergetic field.") },
                ],
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                  </svg>
                ),
                title: "GSR",
                subtitle: t("Galvanic Skin Response", "Galvanic Skin Response"),
                desc: t("Mat reagimin e sistemit nervor përmes lëkurës.", "Measures the nervous system's response through the skin."),
                image: "/img/TONI2462.JPG",
                items: [
                  { title: t("Relaksimin", "Relaxation"), desc: t("Identifikojmë rënien e aktivizimit simpatik dhe gjendjen e qetësimit.", "We identify the decrease in sympathetic activation and the state of calm.") },
                  { title: t("Aktivizimin simpatik", "Sympathetic Activation"), desc: t("Matim reagimet e trupit ndaj stresit dhe ngarkesave të jashtme.", "We measure the body's reactions to stress and external loads.") },
                  { title: t("Nivelet e stresit", "Stress Levels"), desc: t("Vlerësojmë intensitetin e stresit përmes përgjigjes elektrike të lëkurës.", "We assess stress intensity through the electrical response of the skin.") },
                  { title: t("Gjendjen emocionale", "Emotional State"), desc: t("Tregues i qartë i ndryshimeve emocionale në kohë reale.", "A clear indicator of emotional changes in real time.") },
                ],
              },
            ].map((m, i) => (
              <div key={i} className="rounded-3xl overflow-hidden flex flex-col" style={{ background: "#ffffff", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1px solid #ede9fe" }}>
                {/* Header */}
                <div className="flex flex-col items-center text-center px-5 pt-6 pb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ background: "#ede9fe", color: "#7c3aed" }}>
                    {m.icon}
                  </div>
                  <h3 className="font-bold" style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, color: "#1c1917" }}>{m.title}</h3>
                  <p className="font-semibold" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#7c3aed" }}>{m.subtitle}</p>
                  <p className="mt-1 leading-snug" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#71717a" }}>{m.desc}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="h-px w-6" style={{ background: "#c4b5fd" }} />
                    <span style={{ color: "#a78bfa", fontSize: 12 }}>♦</span>
                    <div className="h-px w-6" style={{ background: "#c4b5fd" }} />
                  </div>
                </div>

                {/* Image */}
                <div style={{ height: 160, overflow: "hidden" }}>
                  <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
                </div>

                {/* Çfarë shohim */}
                <div className="px-5 py-5 flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "#ede9fe", color: "#7c3aed" }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9ZM6 7.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 7.5Zm.75 2.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM6 13.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"/>
                      </svg>
                    </div>
                    <span className="font-bold" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#1c1917" }}>{t("Çfarë shohim?", "What do we see?")}</span>
                  </div>
                  {m.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#7c3aed" }}>
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold leading-snug" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#7c3aed" }}>{item.title}</p>
                        <p className="leading-snug" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#71717a" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pse i bëjmë këto matje ── */}
      <section style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-5 py-10">
          <div className="text-center mb-6">
            <h2 className="font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "#1c1917" }}>
              {t("Pse i bëjmë këto matje?", "Why do we do these measurements?")}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="h-px w-6" style={{ background: "#c4b5fd" }} />
              <span style={{ color: "#a78bfa", fontSize: 13 }}>♦</span>
              <div className="h-px w-6" style={{ background: "#c4b5fd" }} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                  </svg>
                ),
                title: t("Për pjesëmarrësit", "For participants"),
                desc: t("Të shohin objektivisht çfarë po ndodh në trupin dhe trurin e tyre.", "To objectively see what is happening in their body and brain."),
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                  </svg>
                ),
                title: t("Për evidencën shkencore", "For scientific evidence"),
                desc: t("Rezultatet nuk bazohen vetëm në përjetime subjektive.", "Results are not based only on subjective experiences."),
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>
                  </svg>
                ),
                title: t("Për përmirësimin e teknikave", "For technique improvement"),
                desc: t("Matjet na ndihmojnë të optimizojmë çdo protokoll dhe praktikë.", "Measurements help us optimize every protocol and practice."),
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9ZM6 12a6 6 0 1 0 12 0A6 6 0 0 0 6 12Zm6-3.75v3.75l2.25 2.25"/>
                  </svg>
                ),
                title: t("Për të treguar efektivitetin", "To demonstrate effectiveness"),
                desc: t("Valët Gamma, HRV dhe koherenca zemër-tru bëhen të matshme.", "Gamma waves, HRV and heart-brain coherence become measurable."),
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 rounded-2xl p-4" style={{ background: "#f5f0ff", border: "1px solid #ede9fe" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: "#ffffff", color: "#7c3aed", boxShadow: "0 2px 8px rgba(124,58,237,0.15)" }}>
                  {item.icon}
                </div>
                <p className="font-bold leading-snug w-full" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#1c1917", minHeight: 72 }}>
                  {item.title}
                </p>
                <p className="leading-snug w-full" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#52525b" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Çfarë shohim vazhdimisht ── */}
      <section style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-5 py-10">
          <div className="text-center mb-6">
            <h2 className="font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "#1c1917" }}>
              {t("Çfarë shohim vazhdimisht", "What we consistently see")}{" "}
              <span style={{ color: "#7c3aed" }}>{t("në retreatet tona?", "in our retreats?")}</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="h-px w-6" style={{ background: "#c4b5fd" }} />
              <span style={{ color: "#a78bfa", fontSize: 13 }}>♦</span>
              <div className="h-px w-6" style={{ background: "#c4b5fd" }} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                iconBg: "#ede9fe",
                iconColor: "#7c3aed",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                  </svg>
                ),
                title: t("Rritje të valëve Gamma", "Increase in Gamma waves"),
                desc: t("Më shumë fokus, qartësi dhe zgjerim të ndërgjegjës.", "More focus, clarity and expansion of consciousness."),
              },
              {
                iconBg: "#ffe4e6",
                iconColor: "#e11d48",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                ),
                title: t("Përmirësim të HRV-së", "Improvement in HRV"),
                desc: t("Më shumë balancë dhe koherencë zemër-tru.", "More balance and heart-brain coherence."),
              },
              {
                iconBg: "#fef3c7",
                iconColor: "#d97706",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                  </svg>
                ),
                title: t("Balancim të fushës energjetike", "Energy field balancing"),
                desc: t("Harmoni e organeve, çakrave dhe sistemeve kryesore.", "Harmony of organs, chakras and key systems."),
              },
              {
                iconBg: "#dbeafe",
                iconColor: "#1d4ed8",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
                  </svg>
                ),
                title: t("Ulje të parametrave të stresit", "Reduction in stress parameters"),
                desc: t("Më shumë qetësi, relaksim dhe rigjenerim të thellë.", "More calm, relaxation and deep regeneration."),
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 rounded-2xl p-5" style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0" style={{ background: item.iconBg, color: item.iconColor }}>
                  {item.icon}
                </div>
                <p className="font-bold leading-snug w-full" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#7c3aed", minHeight: 60 }}>
                  {item.title}
                </p>
                <p className="leading-snug w-full" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#71717a" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden flex items-center justify-center" style={{ minHeight: 480 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/TONI2719.JPG')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.58)" }} />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 text-center">
          <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", color: "#ffffff" }}>
            {t(
              "Këto matje e bëjnë transformimin të prekshëm, të matshëm dhe të verifikueshëm.",
              "These measurements make the transformation tangible, measurable and verifiable."
            )}
          </h2>

          <p className="mb-5 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.82)" }}>
            {t(
              "Shkenca na tregon rrugën. Përvoja e jetuar e transformon jetën.",
              "Science shows us the way. The lived experience transforms life."
            )}
          </p>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.35)" }} />
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>♦</span>
            <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.35)" }} />
          </div>

          <a
            href="/eventet/retreat"
            className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "#7c3aed", color: "#ffffff", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, padding: "14px 32px" }}
          >
            {t("Rezervo vendin tënd", "Reserve your spot")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
            </svg>
          </a>

          <div className="flex items-center justify-center gap-1.5 mt-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "rgba(255,255,255,0.6)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
            </svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
              {t("Vende të limituara për çdo retreat", "Limited spots for each retreat")}
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
