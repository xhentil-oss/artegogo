import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const ValetGamaPage = () => {
  const { t } = useLanguage();
  const [waveImg, setWaveImg] = useState(0);
  const waveImages = ["/img/valet1.png", "/img/valet2.png", "/img/valet3.png"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/TONI1866.JPG')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
          <div className="flex-1 text-left">
            <h1 className="font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#ffffff" }}>
              {t("Valët Gamma", "Gamma Waves")}<br />
              <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("Gjendja e Superndërgjegjies", "The State of Super-Consciousness")}<br />{t("e matur me EEG", "measured with EEG")}</span>
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>♦</span>
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
            </div>

            <p className="leading-relaxed mb-4 md:mb-6 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.85)", maxWidth: 420 }}>
              {t(
                "Në retreatet tona kemi matje reale EEG që tregojnë se pjesëmarrësit arrijnë valë Gamma të sinkronizuara në të gjithë trurin.",
                "In our retreats we have real EEG measurements showing that participants reach Gamma waves synchronized across the entire brain."
              )}
            </p>

            <a href="/shop/regjistrohu-retreat"
              className="inline-flex items-center gap-1.5 text-white text-sm md:text-base px-3 py-1.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              {t("Regjistrohu", "Register")}
            </a>
          </div>
        </div>
      </div>

      {/* "Çfarë janë Valët Gamma?" section */}
      <section className="py-12 md:py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

            {/* Left: text */}
            <div className="flex-1 min-w-0">
              <h2 className="font-bold leading-tight mb-3 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1033" }}>
                {t("Çfarë janë ", "What are ")}<span style={{ color: "#7c3aed" }}>{t("Valët Gamma?", "Gamma Waves?")}</span>
              </h2>

              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-6" style={{ background: "rgba(124,58,237,0.3)" }} />
                <span style={{ color: "#a78bfa", fontSize: 14 }}>♦</span>
                <div className="h-px w-6" style={{ background: "rgba(124,58,237,0.3)" }} />
              </div>

              {/* List */}
              <div className="flex flex-col gap-5">
                {/* 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "#ede9fe", border: "1px solid rgba(124,58,237,0.2)" }}>
                    <svg className="w-4 h-4" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2l2-6 4 12 3-8 2 4h5"/>
                    </svg>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#3f3f46" }}>
                    <span className="font-bold" style={{ color: "#1a1033" }}>31–120 Hz</span>{" "}
                    {t("frekuenca e valëve Gamma.", "the frequency of Gamma waves.")}
                  </p>
                </div>

                {/* 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "#ede9fe", border: "1px solid rgba(124,58,237,0.2)" }}>
                    <svg className="w-4 h-4" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#3f3f46" }}>
                    <span className="font-bold" style={{ color: "#1a1033" }}>{t("Aktiviteti elektrik", "The fastest electrical")}</span>{" "}
                    {t("më i shpejtë i trurit.", "activity of the brain.")}
                  </p>
                </div>

                {/* 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "#ede9fe", border: "1px solid rgba(124,58,237,0.2)" }}>
                    <svg className="w-4 h-4" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 0 1 7 7c0 3-1.7 5.4-4 6.6V17a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.4C6.7 14.4 5 12 5 9a7 7 0 0 1 7-7z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6"/>
                    </svg>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#3f3f46" }}>
                    {t("Lidhet me momentet ", "Connected with ")}<span style={{ color: "#7c3aed", fontWeight: 600 }}>"Eureka"</span>
                    {t(", insight të thella dhe kreativitetit të lartë.", ", deep insights and high creativity.")}
                  </p>
                </div>

                {/* 4 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "#ede9fe", border: "1px solid rgba(124,58,237,0.2)" }}>
                    <svg className="w-4 h-4" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/>
                    </svg>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#3f3f46" }}>
                    {t('Zakonisht zgjat vetëm fraksione sekonde (0.5 sek) në momente "Eureka!".', 'Usually lasts only fractions of a second (0.5 sec) in "Eureka!" moments.')}
                  </p>
                </div>

                {/* 5 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "#ede9fe", border: "1px solid rgba(124,58,237,0.2)" }}>
                    <svg className="w-4 h-4" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2l2-6 4 12 3-8 2 4h5"/>
                    </svg>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#3f3f46" }}>
                    {t("Në retreatet tona, valët Gamma janë matur ", "In our retreats, Gamma waves have been measured ")}
                    <span style={{ color: "#7c3aed", fontWeight: 600 }}>{t("për minuta (5–40)", "for minutes (5–40)")}</span>
                    {t(" – madje deri në ", " – even up to ")}<span style={{ color: "#7c3aed", fontWeight: 600 }}>100–400 {t("herë", "times")}</span>
                    {t(" mbi nivelin normal.", " above normal levels.")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: brain image + bubble */}
            <div className="shrink-0 w-full md:w-80 flex flex-col items-center gap-5">
              <div className="w-full rounded-3xl overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(124,58,237,0.15)" }}>
                <img src="/img/TONI1866.JPG" alt="Brain gamma waves" className="w-full h-64 md:h-72 object-cover" />
              </div>

              {/* Bubble */}
              <div className="rounded-2xl px-5 py-4 text-center" style={{ background: "rgba(124,58,237,0.1)", border: "1.5px solid rgba(124,58,237,0.2)" }}>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#4c1d95", fontFamily: "'Inter', sans-serif" }}>
                  {t(
                    "Valët Gamma përfaqësojnë performancën më të lartë të trurit njerëzor.",
                    "Gamma Waves represent the highest performance of the human brain."
                  )}
                </p>
              </div>
            </div>

          </div>

          {/* Bottom banner */}
          <div className="mt-10 flex items-center gap-4 rounded-2xl px-6 py-5" style={{ background: "#f3f0ff", border: "1px solid rgba(124,58,237,0.15)" }}>
            <svg className="w-7 h-7 shrink-0" fill="#a78bfa" viewBox="0 0 24 24">
              <path d="M12 2C9 2 6 4 6 7c0 2.5 1.5 4.5 3.5 5.5C8 14 7 16 7 18c0 2.5 1.5 4 5 4s5-1.5 5-4c0-2-.9-4-2.5-5.5C16.5 11.5 18 9.5 18 7c0-3-3-5-6-5z"/>
            </svg>
            <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: "#4c1d95", fontFamily: "'Inter', sans-serif" }}>
              {t(
                "Në retreatet tona kemi matje reale EEG që tregojnë se pjesëmarrësit arrijnë valë Gamma të sinkronizuara në të gjithë trurin.",
                "In our retreats we have real EEG measurements showing that participants reach Gamma waves synchronized across the entire brain."
              )}
            </p>
            <svg className="w-6 h-6 shrink-0" fill="#a78bfa" viewBox="0 0 24 24">
              <path d="M12 21C12 21 3 13.5 3 8.25C3 5.765 5.1 3.75 7.688 3.75c1.935 0 3.597 1.126 4.312 2.733.715-1.607 2.377-2.733 4.313-2.733C18.9 3.75 21 5.765 21 8.25 21 13.5 12 21 12 21z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* "Çfarë ndodh në tru" section */}
      <section className="py-12 md:py-20 px-4" style={{ background: "#f9f9fb" }}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-bold leading-tight mb-3 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1033" }}>
              {t("Çfarë ndodh në tru", "What happens in the brain")}
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: "rgba(124,58,237,0.3)" }} />
              <span style={{ color: "#a78bfa", fontSize: 14 }}>♦</span>
              <div className="h-px w-6" style={{ background: "rgba(124,58,237,0.3)" }} />
            </div>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
              {t("Kur arrin valët Gamma, truri, zemra dhe sistemi nervor hyjnë në një gjendje të jashtëzakonshme ", "When Gamma waves arrive, the brain, heart and nervous system enter an extraordinary state of ")}
              <span style={{ color: "#7c3aed", fontWeight: 600 }}>{t("koherence", "coherence")}</span>.
            </p>
          </div>

          {/* 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                  </svg>
                ),
                title: t("Truri bëhet i unifikuar", "The brain becomes unified"),
                desc: t("Të gjitha zonat e trurit komunikojnë njëkohësisht në frekuencë të lartë. Informacioni rrjedh lirshëm, duke krijuar një ndjesi uniteti dhe qartësie absolute.", "All brain regions communicate simultaneously at high frequency. Information flows freely, creating a sense of unity and absolute clarity."),
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                ),
                title: t("Aktivizohet talamusi", "The thalamus activates"),
                desc: t("Talamusi (qendra gjeneruese e valëve Gamma) aktivizohet me shpejtësi 40–200 herë më shumë, duke sinkronizuar të gjithë trurin.", "The thalamus (the Gamma wave generating center) activates 40–200 times faster, synchronizing the entire brain."),
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                ),
                title: t('Aktivizohet "truri i zemrës"', 'The "heart brain" activates'),
                desc: t("Rreth 40,000 neurone në zemër dërgojnë sinjale në tru, duke përmirësuar intuitën, ndjeshmërinë dhe koherencën emocionale.", "About 40,000 neurons in the heart send signals to the brain, improving intuition, sensitivity and emotional coherence."),
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4m0 0-5 6m5-6 5 6"/>
                  </svg>
                ),
                title: t("Komunikimi i sinkronizuar", "Synchronized communication"),
                desc: t("Të gjitha zonat e trurit punojnë së bashku në harmoni të plotë, me valët të sinkronizuara në të gjithë trurin. Energjia mendore rritet ndjeshëm.", "All brain regions work together in full harmony, with waves synchronized across the entire brain. Mental energy increases significantly."),
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#ffffff", minHeight: 260, border: "1px solid #ede9fe", boxShadow: "0 2px 16px rgba(124,58,237,0.08)" }}>
                <div className="p-4 flex flex-col gap-3 h-full">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#ede9fe", border: "1px solid rgba(124,58,237,0.2)" }}>
                    {card.icon}
                  </div>
                  <p className="font-bold text-sm md:text-base leading-snug min-h-[2.5rem]" style={{ color: "#1a1033" }}>{card.title}</p>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#52525b" }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom banner */}
          <div className="flex items-center gap-4 rounded-2xl px-6 py-5" style={{ background: "#f3f0ff", border: "1px solid rgba(124,58,237,0.15)" }}>
            <svg className="w-7 h-7 shrink-0" fill="#a78bfa" viewBox="0 0 24 24">
              <path d="M12 2C9 2 6 4 6 7c0 2.5 1.5 4.5 3.5 5.5C8 14 7 16 7 18c0 2.5 1.5 4 5 4s5-1.5 5-4c0-2-.9-4-2.5-5.5C16.5 11.5 18 9.5 18 7c0-3-3-5-6-5z"/>
            </svg>
            <p className="text-sm md:text-base leading-relaxed text-center flex-1" style={{ color: "#4c1d95", fontFamily: "'Inter', sans-serif" }}>
              {t(
                "Koherencë zemër-tru + aktivizim i Sistemit Nervor Autonom nga energji të larta harmonike. ",
                "Heart-brain coherence + activation of the Autonomic Nervous System by high harmonic energies. "
              )}
              <span className="font-bold">{t("Kjo është baza e gjendjes Gamma.", "This is the foundation of the Gamma state.")}</span>
            </p>
            <svg className="w-6 h-6 shrink-0" fill="#a78bfa" viewBox="0 0 24 24">
              <path d="M12 21C12 21 3 13.5 3 8.25C3 5.765 5.1 3.75 7.688 3.75c1.935 0 3.597 1.126 4.312 2.733.715-1.607 2.377-2.733 4.313-2.733C18.9 3.75 21 5.765 21 8.25 21 13.5 12 21 12 21z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* "Pamja e Valëve Gamma" section */}
      <section className="py-12 md:py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">

          {/* Title with dashes */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[60px]" style={{ background: "#d4d4d8" }} />
            <h2 className="font-bold text-lg md:text-3xl text-center" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1033" }}>
              {t("Pamja e Valëve Gamma", "The View of Gamma Waves")}
            </h2>
            <div className="h-px flex-1 max-w-[60px]" style={{ background: "#d4d4d8" }} />
          </div>

          {/* Two columns */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-8">

            {/* Left: info */}
            <div className="flex-1 min-w-0">
              <p className="font-bold mb-2 text-sm md:text-base" style={{ color: "#7c3aed", fontFamily: "'Inter', sans-serif" }}>
                {t("Valët Gamma (30–100 Hz)", "Gamma Waves (30–100 Hz)")}
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: "#52525b" }}>
                {t(
                  "Valët të shpejta me amplitudë të lartë dhe koherencë të qëndrueshme.",
                  "Fast waves with high amplitude and sustained coherence."
                )}
              </p>
              <div className="flex flex-col gap-3">
                {[
                  t("Frekuencë: 30 – 100 Hz", "Frequency: 30 – 100 Hz"),
                  t("Amplitudë: e lartë", "Amplitude: high"),
                  t("Koherencë: shumë e lartë", "Coherence: very high"),
                  t("Gjendje: unitet, qartësi, prezencë e zgjeruar, krijimtari e lartë", "State: unity, clarity, expanded presence, high creativity"),
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#7c3aed" }}>
                      <svg className="w-3 h-3" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p className="text-sm md:text-base" style={{ color: "#3f3f46" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image carousel */}
            <div className="shrink-0 w-full md:w-[420px]">
              <div className="relative rounded-2xl overflow-hidden" style={{ background: "#0d0d2b" }}>
                <img
                  src={waveImages[waveImg]}
                  alt={`Gamma wave ${waveImg + 1}`}
                  className="w-full object-cover"
                  style={{ maxHeight: 280 }}
                />
                {/* Left arrow */}
                <button
                  onClick={() => setWaveImg(i => (i === 0 ? waveImages.length - 1 : i - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                {/* Right arrow */}
                <button
                  onClick={() => setWaveImg(i => (i === waveImages.length - 1 ? 0 : i + 1))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {waveImages.map((_, i) => (
                    <button key={i} onClick={() => setWaveImg(i)}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{ background: waveImg === i ? "#ffffff" : "rgba(255,255,255,0.35)" }}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom quote */}
          <div className="flex items-center gap-4 rounded-2xl px-6 py-5" style={{ background: "#f3f0ff", border: "1px solid rgba(124,58,237,0.15)" }}>
            <svg className="w-7 h-7 shrink-0" fill="#a78bfa" viewBox="0 0 24 24">
              <path d="M12 2C9 2 6 4 6 7c0 2.5 1.5 4.5 3.5 5.5C8 14 7 16 7 18c0 2.5 1.5 4 5 4s5-1.5 5-4c0-2-.9-4-2.5-5.5C16.5 11.5 18 9.5 18 7c0-3-3-5-6-5z"/>
            </svg>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#4c1d95", fontFamily: "'Inter', sans-serif" }}>
              {t(
                "Kur truri dhe zemra janë në koherencë, ti hyn në rrjedhën e jetës dhe përjeton potencialin tënd më të lartë.",
                "When the brain and heart are in coherence, you enter the flow of life and experience your highest potential."
              )}
            </p>
            <svg className="w-6 h-6 shrink-0" fill="#a78bfa" viewBox="0 0 24 24">
              <path d="M12 21C12 21 3 13.5 3 8.25C3 5.765 5.1 3.75 7.688 3.75c1.935 0 3.597 1.126 4.312 2.733.715-1.607 2.377-2.733 4.313-2.733C18.9 3.75 21 5.765 21 8.25 21 13.5 12 21 12 21z"/>
            </svg>
          </div>

        </div>
      </section>

      {/* "Pjesëmarrësit përjetojnë" section */}
      <section className="py-12 md:py-20 px-4" style={{ background: "#f9f9fb" }}>
        <div className="max-w-5xl mx-auto">

          {/* Top: title + brain image */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-10">
            <div className="flex-1 min-w-0">
              <h2 className="font-bold leading-tight mb-4 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1033" }}>
                {t("Pjesëmarrësit", "Participants")}<br />
                <span style={{ color: "#7c3aed" }}>{t("përjetojnë", "experience")}</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-2" style={{ color: "#52525b" }}>
                {t(
                  "Kur truri hyn në valët Gamma të sinkronizuara, trupi, mendja dhe emocionet transformohen.",
                  "When the brain enters synchronized Gamma waves, the body, mind and emotions transform."
                )}
              </p>
              <p className="text-sm font-semibold" style={{ color: "#7c3aed" }}>
                {t("Ja çfarë kemi vërejtur të pjesëmarrësit tanë:", "Here is what we have observed in our participants:")}
              </p>
            </div>
            <div className="shrink-0 w-full md:w-72 h-56 md:h-64 rounded-3xl overflow-hidden">
              <img src="/img/TONI1866.JPG" alt="Brain gamma" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Benefits list */}
          <div className="flex flex-col divide-y" style={{ borderRadius: 16, background: "#ffffff", border: "1px solid #ede9fe", overflow: "hidden" }}>
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5"/>,
                title: t("Supermemorie dhe aftësi kognitive të larta", "Super-memory and high cognitive abilities"),
                desc: t("Mbaje më shumë informacion për kohë të gjatë dhe ", "Retain more information for a long time and "),
                bold: t("mëson më shpejt e më thellë.", "learn faster and deeper."),
              },
              {
                icon: <><circle cx="12" cy="12" r="9"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01"/></>,
                title: t("Fokus i lartë dhe performancë mjeshtrëore", "High focus and masterful performance"),
                desc: t("Rritet përqendrimi, ", "Concentration increases, "),
                bold: t("qartësia mendore", "mental clarity"),
                after: t(" dhe performancë në çdo fushë.", " and performance in every field."),
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75Zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z"/>,
                title: t("Ndjesi euforie dhe lumturie", "Feelings of euphoria and happiness"),
                desc: t("Çlirohet dopamina, serotonina dhe endorfinë – ", "Dopamine, serotonin and endorphins are released – "),
                bold: t("efekt antidepresant", "antidepressant effect"),
                after: t(" natyral.", " natural."),
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>,
                title: t("Shërim fizik dhe emocional", "Physical and emotional healing"),
                desc: t("Ulet stresi, forcohet ", "Stress decreases, "),
                bold: t("sistemi imunitar", "the immune system"),
                after: t(" dhe trupi rigjenerrohet më shpejt.", " strengthens and the body regenerates faster."),
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>,
                title: t("Lidhje e thellë me gjithçka – ndjenja uniteti", "Deep connection with everything – feeling of unity"),
                desc: t("Përjetoni ", "Experience "),
                bold: t("unitet", "unity"),
                after: t(" me veten, të tjerët dhe jetën. Zhduken ndarjet, rritet dashuria.", " with yourself, others and life. Divisions disappear, love grows."),
              },
              {
                icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></>,
                title: t("Intuitë me komandë", "Intuition on command"),
                desc: t("Aftësi për të marrë ", "Ability to receive "),
                bold: t("udhëzim të brendshëm", "inner guidance"),
                after: t(" të qartë (hipergamma 40–100 Hz).", " clearly (hypergamma 40–100 Hz)."),
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/>,
                title: t("Manifestime të shpejta dhe 'mrekulli'", "Fast manifestations and 'miracles'"),
                desc: t("Idete marrin formë më lehtë dhe ", "Ideas take shape more easily and "),
                bold: t("realiteti", "reality"),
                after: t(" përgjigjet më shpejt ndaj brendëshmërisë suaj.", " responds faster to your inner world."),
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "#ede9fe" }}>
                  <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.6} viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm md:text-base mb-0.5" style={{ color: "#1a1033" }}>{item.title}</p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#52525b" }}>
                    {item.desc}<span style={{ fontWeight: 700, color: "#1a1033" }}>{item.bold}</span>{item.after || ""}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "#7c3aed" }}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom dark quote */}
          <div className="mt-8 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch" style={{ background: "#f3f0ff", border: "1px solid rgba(124,58,237,0.15)" }}>
            <div className="shrink-0 w-full md:w-48 h-40 md:h-auto overflow-hidden">
              <img src="/img/TONI2879.JPG" alt="" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="flex-1 px-6 py-6 flex flex-col justify-center">
              <div style={{ color: "#a78bfa", fontSize: 40, lineHeight: 1, fontFamily: "Georgia, serif", marginBottom: 4 }}>"</div>
              <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: "#4c1d95", fontFamily: "'Inter', sans-serif" }}>
                {t(
                  "Valët Gamma janë porta drejt potencialit të pakufishëm të njeriut.",
                  "Gamma Waves are the gateway to the unlimited potential of the human being."
                )}
              </p>
              <p className="font-bold text-sm md:text-base" style={{ color: "#7c3aed" }}>
                {t("Ne i matim. Ti i përjeton.", "We measure them. You experience them.")}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* "Shkenca e valëve Gamma" section */}
      <section className="py-12 md:py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">

          {/* Top: photo + text */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-10">
            {/* Left: photo */}
            <div className="shrink-0 w-full md:w-64 h-72 md:h-80 rounded-3xl overflow-hidden">
              <img src="/img/richard-davidson.webp" alt="Richard Davidson" className="w-full h-full object-cover object-left-top" />
            </div>

            {/* Right: text */}
            <div className="flex-1 min-w-0">
              <p className="font-bold tracking-widest uppercase mb-1 text-xs" style={{ color: "#7c3aed", fontFamily: "'Inter', sans-serif" }}>
                RICHARD DAVIDSON
              </p>
              <h2 className="font-bold leading-tight mb-3 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1033" }}>
                {t("Shkenca e", "The science of")}<br />
                <span style={{ color: "#7c3aed" }}>{t("valëve Gamma", "Gamma waves")}</span>
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-6" style={{ background: "rgba(124,58,237,0.3)" }} />
                <span style={{ color: "#a78bfa", fontSize: 14 }}>♦</span>
                <div className="h-px w-6" style={{ background: "rgba(124,58,237,0.3)" }} />
              </div>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#52525b" }}>
                {t(
                  "Studiuesi i famshëm Richard Davidson (Universiteti i Wisconsin) tregoi se murgjit me mbi 16,000 orë meditim mund të aktivizojnë valë Gamma me komandë – deri në ",
                  "The renowned researcher Richard Davidson (University of Wisconsin) showed that monks with over 16,000 hours of meditation can activate Gamma waves on command – up to "
                )}
                <span style={{ color: "#7c3aed", fontWeight: 700 }}>700–800%</span>
                {t(
                  " rritje kur fokusohen të dashuria, dhembshuria dhe pranimi.",
                  " increase when focusing on love, compassion and acceptance."
                )}
              </p>
            </div>
          </div>

          {/* Middle: our results */}
          <div className="mb-6">
            <p className="text-sm md:text-base leading-relaxed mb-6 font-medium" style={{ color: "#1a1033" }}>
              {t("Në retreatet tona kemi arritur të njëjtin fenomen me ", "In our retreats we have achieved the same phenomenon with ")}
              <span style={{ color: "#7c3aed", fontWeight: 700 }}>{t("njerëz të zakonshëm.", "ordinary people.")}</span>
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5"/>,
                  text: t("Valë Gamma të sinkronizuara në të gjithë trurin.", "Gamma waves synchronized across the entire brain."),
                },
                {
                  icon: <><circle cx="12" cy="12" r="9"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/></>,
                  text: t("Valë Gamma të vazhdueshme për minuta të tëra.", "Continuous Gamma waves for entire minutes."),
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>,
                  text: t("Rritje 100–400 herë mbi normalen.", "Increase 100–400 times above normal."),
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>,
                  text: t("Koherencë zemër-tru + aktivizim i Sistemit Nervor Autonom nga energji të larta harmonike.", "Heart-brain coherence + activation of the Autonomic Nervous System through high harmonic energies."),
                  purple: true,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "#ede9fe" }}>
                    <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.6} viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed pt-2" style={{ color: item.purple ? "#7c3aed" : "#3f3f46" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom proof box */}
          <div className="flex items-start gap-4 rounded-2xl px-6 py-5" style={{ background: "#f3f0ff", border: "1px solid rgba(124,58,237,0.15)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#ede9fe" }}>
              <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.6} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm md:text-base mb-1" style={{ color: "#4c1d95" }}>
                {t("Provë shkencore konkrete, jo teori.", "Concrete scientific proof, not theory.")}
              </p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#52525b" }}>
                {t("Matjet tona EEG dokumentojnë se çdo pjesëmarrës mund të arrijë këtë gjendje ", "Our EEG measurements document that every participant can reach this state of ")}
                <span style={{ color: "#7c3aed", fontWeight: 700 }}>{t("superndërgjegjeje.", "super-consciousness.")}</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* "Transformime që flasin vetë" section */}
      <section className="py-12 md:py-20 px-4" style={{ background: "#f9f9fb" }}>
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="font-bold tracking-widest uppercase mb-2 text-xs" style={{ color: "#7c3aed", fontFamily: "'Inter', sans-serif" }}>
              {t("PËRVOJA E PJESËMARRËSVE TANË", "OUR PARTICIPANTS' EXPERIENCES")}
            </p>
            <h2 className="font-bold leading-tight mb-3 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1033" }}>
              {t("Transformime", "Transformations")}<br />
              <span style={{ color: "#7c3aed" }}>{t("që flasin vetë", "that speak for themselves")}</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: "rgba(124,58,237,0.3)" }} />
              <span style={{ color: "#a78bfa", fontSize: 14 }}>♦</span>
              <div className="h-px w-6" style={{ background: "rgba(124,58,237,0.3)" }} />
            </div>
            <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto" style={{ color: "#52525b" }}>
              {t(
                "Mijëra njerëz kanë përjetuar ndryshime të thella në jetën e tyre pas retreatit.",
                "Thousands of people have experienced deep changes in their lives after the retreat."
              )}
            </p>
          </div>

          {/* Testimonials list */}
          <div className="flex flex-col gap-4">
            {[
              {
                img: "/img/TONI1666.JPG",
                quote: t("Për herë të parë në jetën time ndjeva paqe të vërtetë të brendshme. Retreati më ndryshoi përgjithmonë.", "For the first time in my life I felt true inner peace. The retreat changed me forever."),
                name: "Elira K.",
                location: t("Tiranë, Shqipëri", "Tirana, Albania"),
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>,
              },
              {
                img: "/img/TONI2472.JPG",
                quote: t("Qartësi mendore, energji e jashtëzakonshme dhe fokus i thellë – si asnjëherë më parë. Valët Gamma më hapën një dimension të ri.", "Mental clarity, extraordinary energy and deep focus – like never before. Gamma Waves opened a new dimension for me."),
                name: "Arben D.",
                location: t("Prishtinë, Kosovë", "Pristina, Kosovo"),
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3"/>,
              },
              {
                img: "/img/TONI1379.JPG",
                quote: t("U lidha me veten time në një nivel shumë më të thellë. Faleminderit Arte Gogo për këtë dhuratë.", "I connected with myself at a much deeper level. Thank you Arte Gogo for this gift."),
                name: "Besiana M.",
                location: t("Shkup, Maqedoni e Veriut", "Skopje, North Macedonia"),
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-4 3-4 7a4 4 0 0 0 8 0c0-4-4-7-4-7z"/>,
              },
              {
                img: "/img/TONI2629.JPG",
                quote: t("Pas retreatit ndjej një transformim të plotë në jetën time – më shumë qetësi, dashuri dhe qëllim.", "After the retreat I feel a complete transformation in my life – more peace, love and purpose."),
                name: "Gentian P.",
                location: t("Durrës, Shqipëri", "Durrës, Albania"),
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/>,
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl px-5 py-5" style={{ background: "#ffffff", border: "1px solid #ede9fe", boxShadow: "0 2px 12px rgba(124,58,237,0.06)" }}>
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div style={{ color: "#a78bfa", fontSize: 28, lineHeight: 1, fontFamily: "Georgia, serif" }}>"</div>
                  <p className="text-sm md:text-base leading-relaxed mb-2" style={{ color: "#3f3f46" }}>{item.quote}</p>
                  <p className="font-bold text-sm" style={{ color: "#7c3aed" }}>{item.name}</p>
                  <p className="text-xs" style={{ color: "#a1a1aa" }}>{item.location}</p>
                </div>

                {/* Icon */}
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "#ede9fe" }}>
                  <svg className="w-4 h-4" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[380px] flex items-center justify-center py-16 px-4 text-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777032248494-0.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(15,5,40,0.62)" }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-bold leading-tight mb-3 text-lg md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#ffffff" }}>
            {t("Dëshiron ta provosh vetë", "Do you want to experience yourself")}<br />
            {t("këtë gjendje ", "this ")}
            <span style={{ color: "#c4b5fd" }}>{t("të jashtëzakonshme?", "extraordinary state?")}</span>
          </h2>

          <div className="flex items-center justify-center gap-2 my-4">
            <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.3)" }} />
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>♦</span>
            <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.3)" }} />
          </div>

          <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.82)" }}>
            {t(
              "Bashkohu me retreatin tonë të radhës dhe përjeto gjendjen e mbinatyrshme kur sistemi nervor përjeton valët Gamma.",
              "Join our next retreat and experience the extraordinary state when the nervous system experiences Gamma waves."
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/shop/regjistrohu-retreat"
              className="inline-flex items-center gap-2 font-bold rounded-xl transition-all hover:scale-105 text-sm md:text-base"
              style={{ background: "#7c3aed", color: "#ffffff", padding: "11px 22px" }}>
              <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
              </svg>
              {t("Rezervo vendin tënd", "Reserve your spot")}
            </a>
            <a href="/eventet/retreat"
              className="inline-flex items-center gap-2 font-bold rounded-xl transition-all hover:scale-105 text-sm md:text-base"
              style={{ background: "transparent", color: "#ffffff", padding: "10px 22px", border: "1.5px solid rgba(255,255,255,0.5)" }}>
              <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01"/>
              </svg>
              {t("Mëso më shumë", "Learn more")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
