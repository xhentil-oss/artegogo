import { useLanguage } from "@/context/LanguageContext";
import { FAQSection } from "@/sections/FAQSection";

export const MeditimePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777032248494-0.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.52)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
          <div className="flex-1 text-left">
            <h1 className="font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#ffffff" }}>
              {t("Falja e vetes", "Forgiveness of the Self")}<br />
              <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("Një kthim drejt koherencës zemër-tru", "A return to heart-brain coherence")}</span>
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>♦</span>
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
            </div>

            <p className="leading-relaxed mb-4 md:mb-6 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.85)", maxWidth: 420 }}>
              {t(
                "Një eksperiencë e thellë meditimi për të çliruar fajin, turpin dhe emocionet e së shkuarës… dhe për t'u rikthyer në harmoninë natyrale të zemrës dhe trurit.",
                "A deep meditation experience to release guilt, shame and past emotions… and to return to the natural harmony of the heart and brain."
              )}
            </p>

            <a href="/signup"
              className="inline-flex items-center gap-1.5 text-white text-sm md:text-base px-3 py-1.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              {t("Regjistrohu", "Register")}
            </a>
          </div>
        </div>
      </div>

      {/* ── "Ne do të vazhdojmë derisa..." section ── */}
      <section className="py-12 md:py-16 px-4" style={{ background: "#f9f9fb" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-bold mt-3 md:mt-0 mb-3 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1033" }}>
            {t("Ne do të vazhdojmë derisa...", "We will continue until...")}
          </h2>
          <p className="text-zinc-500 mb-10 max-w-xl mx-auto text-sm md:text-base">
            {t(
              "Së bashku krijojmë hapësirën e brendshme për transformim të vërtetë. Ky është udhëtimi ynë i përbashkët.",
              "Together we create the inner space for true transformation. This is our shared journey."
            )}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 md:mt-0">
            {/* 1 */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#ede9fe" }}>
                <svg className="w-7 h-7" fill="none" stroke="#7c3aed" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-4 3-4 7a4 4 0 0 0 8 0c0-4-4-7-4-7z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 17c0 2 1.8 3 4 3s4-1 4-3"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20h12"/>
                </svg>
              </div>
              <p className="font-semibold text-zinc-900 text-sm md:text-base">
                {t("Të ndiesh më shumë qetësi në trup", "To feel more peace in the body")}
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                {t(
                  "Të liroj tensionet, të gjenerojnë substanca mirëqenie dhe të ndjesh paqen që ka qenë gjithmonë brenda teje.",
                  "To release tensions, generate wellbeing substances and feel the peace that has always been within you."
                )}
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#fce7f3" }}>
                <svg className="w-7 h-7" fill="none" stroke="#ec4899" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                </svg>
              </div>
              <p className="font-semibold text-zinc-900 text-sm md:text-base">
                {t("Të çlirosh emocionet që të kanë mbajtur peng", "To release emotions that have held you back")}
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                {t(
                  "Të çlirosh fajin, turpin, pendimin dhe të gjitha emocionet e shkuarës ende patur brenda.",
                  "To release guilt, shame, regret and all emotions of the past still held inside."
                )}
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#e0f2fe" }}>
                <svg className="w-7 h-7" fill="none" stroke="#0ea5e9" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
                </svg>
              </div>
              <p className="font-semibold text-zinc-900 text-sm md:text-base">
                {t("Të rikthesh sigurinë në sistemin nervor", "To restore safety to the nervous system")}
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                {t(
                  "Të ndiesh sikurjet, të rregullosh sistemin nervor dhe të jetosh me qetësi dhe siguri të brendshme.",
                  "To feel safe, regulate the nervous system and live with inner calm and security."
                )}
              </p>
            </div>

            {/* 4 */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#fef3c7" }}>
                <svg className="w-7 h-7" fill="none" stroke="#f59e0b" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564z"/>
                </svg>
              </div>
              <p className="font-semibold text-zinc-900 text-sm md:text-base">
                {t("Të rikthehesh në energjinë e dashurisë dhe krijimit", "To return to the energy of love and creation")}
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                {t(
                  "Të hapësh zemrën, të jetosh jetën me lumturi dhe të ndiesh harmoninë me veten dhe jetën.",
                  "To open your heart, live life with joy and feel harmony with yourself and life."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── "Një rikthim drejt koherencës" section ── */}
      <section className="relative overflow-hidden py-14 md:py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Left: text */}
          <div className="flex-1 min-w-0 z-10">
            <h2 className="font-bold leading-tight mt-3 md:mt-0 mb-5 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1033" }}>
              {t("Një rikthim", "A return")}<br />
              <span style={{ color: "#7c3aed", fontStyle: "italic" }}>{t("drejt koherencës", "toward coherence")}</span>
            </h2>

            <p className="leading-relaxed mb-4 text-sm md:text-base" style={{ color: "#52525b" }}>
              {t(
                "Studimet tregojnë se zemra dhe truri ndikojnë vazhdimisht njëri-tjetrin. Kur jetojmë në emocione si stresi, faji apo frika, trupi hyn në gjendje jo-koherente.",
                "Studies show that the heart and brain constantly influence each other. When we live in emotions like stress, guilt or fear, the body enters an incoherent state."
              )}
            </p>
            <p className="leading-relaxed mb-8 text-sm md:text-base" style={{ color: "#52525b" }}>
              {t(
                "Por kur aktivizojmë zemrën përmes frymëmarrjes së thellë, pranisë dhe emocioneve të ngritura… zemra fillon të dërgojë sinjale të reja drejt trurit.",
                "But when we activate the heart through deep breathing, presence and elevated emotions… the heart begins to send new signals to the brain."
              )}
            </p>

            <div className="flex flex-col gap-4">
              {[
                { from: t("Nga mbijetesë", "From survival"), to: t("drejt krijimit.", "toward creation.") },
                { from: t("Nga tension", "From tension"), to: t("drejt harmonisë.", "toward harmony.") },
                { from: t("Nga vetëgjykim", "From self-judgment"), to: t("drejt dashurisë.", "toward love.") },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.3)" }}>
                    {i === 0 && (
                      <svg className="w-4 h-4" fill="none" stroke="#a78bfa" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-4 3-4 7a4 4 0 0 0 8 0c0-4-4-7-4-7z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17c0 2 1.8 3 4 3s4-1 4-3"/>
                      </svg>
                    )}
                    {i === 1 && (
                      <svg className="w-4 h-4" fill="none" stroke="#a78bfa" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414M16.95 7.05l1.414-1.414"/>
                        <circle cx="12" cy="12" r="4"/>
                      </svg>
                    )}
                    {i === 2 && (
                      <svg className="w-4 h-4" fill="none" stroke="#a78bfa" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                      </svg>
                    )}
                  </div>
                  <p className="text-sm md:text-base" style={{ color: "#1a1033" }}>
                    {item.from}{" "}
                    <span style={{ color: "#7c3aed" }}>→</span>{" "}
                    <span style={{ color: "#7c3aed", fontStyle: "italic", fontWeight: 600 }}>{item.to}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="shrink-0 w-full md:w-96 h-72 md:h-[420px] rounded-3xl overflow-hidden">
            <img src="/img/TONI0877.JPG" alt="" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>

      {/* ── "Çfarë do të përjetoni" section ── */}
      <section className="py-14 md:py-20 px-4" style={{ background: "#f9f9fb" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-bold mb-3 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1033" }}>
            {t("Çfarë do të ", "What you will ")}<span style={{ color: "#7c3aed" }}>{t("përjetoni", "experience")}</span>
          </h2>
          <p className="text-zinc-500 mb-10 max-w-2xl mx-auto" style={{ fontSize: 15 }}>
            {t(
              "Një udhëtim i thellë meditimi për të çliruar emocionet e së shkuarës dhe për t'u rikthyer në koherencën natyrale të zemrës dhe trurit.",
              "A deep meditation journey to release past emotions and return to the natural coherence of the heart and brain."
            )}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                img: "/img/TONI1666.JPG",
                title: t("Harmonizimi zemër-tru", "Heart-brain harmonization"),
                desc: t(
                  "Një meditim i udhëhequr për të sinkronizuar zemrën dhe trurin përmes frymëmarrjes, pranisë dhe emocioneve të ngritura.",
                  "A guided meditation to synchronize the heart and brain through breathing, presence and elevated emotions."
                ),
              },
              {
                img: "/img/TONI2472.JPG",
                title: t("Çlirimi emocional", "Emotional release"),
                desc: t(
                  "Teknika të fuqishme për të liruar fajin, turpin, pendimin dhe emocionet që sistemi nervor vazhdon t'i mbajë aktive.",
                  "Powerful techniques to release guilt, shame, regret and emotions the nervous system continues to hold active."
                ),
              },
              {
                img: "/img/TONI1379.JPG",
                title: t("Rikthim në siguri", "Return to safety"),
                desc: t(
                  "Aktivizim i gjendjes të brendshme të qëllimit, pranimit dhe dashurisë ndaj vetes për të rikthyer sigurinë në trup.",
                  "Activation of the inner state of purpose, acceptance and self-love to restore safety in the body."
                ),
              },
              {
                img: "/img/TONI2629.JPG",
                title: t("Krijimi i një realiteti të ri", "Creating a new reality"),
                desc: t(
                  "Kur zemra dhe truri harmonizojnë, trupi del nga mbijetesa dhe hyn në gjendjen e krijimit dhe mundësive të reja.",
                  "When the heart and brain harmonize, the body exits survival and enters the state of creation and new possibilities."
                ),
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#ffffff", boxShadow: "0 2px 16px rgba(124,58,237,0.08)", border: "1px solid #ede9fe" }}>
                <div className="h-36 overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto -mt-8 relative z-10" style={{ background: "#7c3aed" }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M3 12h2m14 0h2"/>
                      <circle cx="12" cy="12" r="4"/>
                    </svg>
                  </div>
                  <p className="font-bold text-zinc-900 text-center mt-1 text-sm md:text-base min-h-[2.5rem] flex items-start justify-center">{card.title}</p>
                  <p className="text-zinc-500 text-center leading-relaxed text-sm md:text-base">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote section full width ── */}
      <div className="relative overflow-hidden py-2 md:py-12 px-4 text-center" style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #ede9fe 30%, #ddd6fe 60%, #fce7f3 100%)" }}>
        {/* Light rays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-40" style={{ background: "radial-gradient(ellipse at top, #ffffff 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] opacity-30" style={{ background: "radial-gradient(ellipse, #c4b5fd 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] opacity-30" style={{ background: "radial-gradient(ellipse, #f9a8d4 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Opening quote mark */}
          <div style={{ color: "#a78bfa", fontFamily: "Georgia, serif", fontSize: 72, lineHeight: 1, opacity: 0.6 }}>"</div>

          {/* Heart divider */}
          <div className="flex justify-center mb-5 -mt-2">
            <svg className="w-5 h-5" fill="#a78bfa" viewBox="0 0 24 24">
              <path d="M12 21C12 21 3 13.5 3 8.25C3 5.765 5.1 3.75 7.688 3.75c1.935 0 3.597 1.126 4.312 2.733.715-1.607 2.377-2.733 4.313-2.733C18.9 3.75 21 5.765 21 8.25 21 13.5 12 21 12 21z"/>
            </svg>
          </div>

          <blockquote className="font-bold leading-relaxed mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)", color: "#1a1033" }}>
            {t("al", "en") === "al" ? (
              <>„Sa herë që zgjedh të falësh veten, sistemi yt nervor mëson se është i sigurt të jetojë përsëri në dashuri."</>
            ) : (
              <>"Every time you choose to forgive yourself, your nervous system learns it is safe to live again in love."</>
            )}
          </blockquote>

          {/* Heart divider */}
          <div className="flex justify-center mb-4">
            <svg className="w-5 h-5" fill="#a78bfa" viewBox="0 0 24 24">
              <path d="M12 21C12 21 3 13.5 3 8.25C3 5.765 5.1 3.75 7.688 3.75c1.935 0 3.597 1.126 4.312 2.733.715-1.607 2.377-2.733 4.313-2.733C18.9 3.75 21 5.765 21 8.25 21 13.5 12 21 12 21z"/>
            </svg>
          </div>

          <p style={{ color: "#6b7280", fontSize: 15, fontStyle: "italic" }}>— Marvin Bundo</p>
        </div>
      </div>

      {/* ── "Një eksperiencë kolektive" section ── */}
      <div className="relative overflow-hidden py-4 md:py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-5 md:gap-16">

          {/* Left: text */}
          <div className="flex-1 min-w-0">
            <h2 className="font-bold leading-tight mb-4 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1033" }}>
              {t("Një eksperiencë", "A collective")}<br />
              <span style={{ color: "#7c3aed" }}>{t("kolektive", "experience")}</span>
            </h2>

            <p className="leading-relaxed mb-8" style={{ color: "#52525b", fontSize: 15, maxWidth: 420 }}>
              {t(
                "Kur shumë njerëz bashkohen në emocione si dashurisë, mirënjohjes dhe pranimit… krijojnë një fushë energjitike kolektive që lidh zemrat dhe transformon botën.",
                "When many people come together in emotions of love, gratitude and acceptance… they create a collective energy field that connects hearts and transforms the world."
              )}
            </p>

            <div className="flex flex-col gap-5 mb-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="#a78bfa" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M3 12h2m14 0h2"/>
                      <circle cx="12" cy="12" r="4"/>
                    </svg>
                  ),
                  title: t("Ndaj zërin tënd", "Share your voice"),
                  desc: t("Meditimi kolektiv amplifikëon qëllimin individual dhe çdo anëtar shton në fuqinë e fushës.", "Collective meditation amplifies individual intention and each member adds to the power of the field."),
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="#a78bfa" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  ),
                  title: t("Ndaj vajti një përfituese", "Together we rise"),
                  desc: t("Meditimi i bashkuar krijon një rrjet dashurie ku secili prej nesh shërohet dhe shëron të tjerët.", "United meditation creates a network of love where each of us heals and heals others."),
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="#a78bfa" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                    </svg>
                  ),
                  title: t("Dashuri që bashkon", "Love that unites"),
                  desc: t("Kur zemrat bashkohen në dashuri dhe mirënjohje, krijojmë së bashku një realitet të ri dhe më të bukur.", "When hearts unite in love and gratitude, we create together a new and more beautiful reality."),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.3)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 mb-0.5" style={{ fontSize: 15 }}>{item.title}</p>
                    <p className="text-sm md:text-base" style={{ color: "#71717a" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/kontakt"
              className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-xl transition-all hover:scale-105"
              style={{ background: "#7c3aed", color: "#ffffff", fontSize: 15 }}>
              {t("Bashkohu", "Join us")}
            </a>
          </div>

          {/* Right: photo */}
          <div className="shrink-0 w-full md:w-96 h-72 md:h-[480px] rounded-3xl overflow-hidden">
            <img src="/img/TONI2879.JPG" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* ── FAQ section ── */}
      <FAQSection />


      {/* ── Final CTA ── */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center justify-center py-16 px-4 text-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777032248494-0.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.58)" }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-bold mb-5 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#ffffff" }}>
            {t("Je gati të lirosh të shkuarën?", "Are you ready to release the past?")}
          </h2>

          <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16 }}>
            {t(
              "Regjistrohu për këtë eksperiencë meditimi dhe fillo të rikthehesh në harmoninë tënde natyrale.",
              "Register for this meditation experience and begin returning to your natural harmony."
            )}
          </p>

          <a href="/signup"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all hover:scale-105 hover:shadow-lg text-sm md:text-base"
            style={{ background: "linear-gradient(135deg, #7c3aed 0%, #4e29c5 100%)", color: "#ffffff" }}>
            {t("Regjistrohu tani", "Register now")}
          </a>
        </div>
      </div>
    </div>
  );
};
