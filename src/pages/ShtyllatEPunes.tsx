import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
};

export const ShtyllatEPunesPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const { t } = useLanguage();
  useEffect(() => { const timer = setTimeout(() => setHeroVisible(true), 80); return () => clearTimeout(timer); }, []);

  const PILLAR_IMAGES = [
    "/img/TONI0877.JPG",
    "/img/TONI0886.JPG",
    "/img/TONI0935.JPG",
    "/img/TONI1042.JPG",
    "/img/TONI1379.JPG",
    "/img/TONI1503.JPG",
    "/img/TONI1666.JPG",
  ];

  const pillars = [
    {
      number: "01",
      title: t("Koherenca zemër-tru dhe hapja e zemrës", "Heart-brain coherence and opening of the heart"),
      description: t("Teknikat tona aktivizojnë sinkronizimin e fuqishëm midis rrahjeve të zemrës dhe aktivitetit elektrik të trurit, duke krijuar një gjendje koherence të lartë.", "Our techniques activate the powerful synchronization between heartbeats and the brain's electrical activity, creating a state of high coherence."),
      benefits: [
        t("Ulje të thellë të stresit kronik dhe inflamacioneve.", "Deep reduction of chronic stress and inflammation."),
        t("Fokus më i fortë, vendimmarrje më e qartë dhe stabilitet emocional.", "Stronger focus, clearer decision-making and emotional stability."),
        t("Ndjenjë e thellë dashurie, dhembshurie dhe uniteti pa gjykim.", "Deep feeling of love, compassion and unity without judgment."),
        t("Çlirim emocional i shpejtë dhe efekt i fortë antidepresant natyral.", "Quick emotional release and strong natural antidepressant effect."),
        t("Akses intuitiv i drejtpërdrejtë dhe marrje vendimesh nga zemra.", "Direct intuitive access and decision-making from the heart."),
      ],
    },
    {
      number: "02",
      title: t("Shërimi i emocioneve të supresuara dhe i fëmijës së brendshëm", "Healing of suppressed emotions and the inner child"),
      description: t("Përdorim teknika specifike për të çliruar dhe shëruar emocionet e supresuara dhe të ruajtura në sistemin nervor autonom, duke punuar drejtpërdrejt me fëmijën e brendshëm dhe plagët emocionale nga e shkuara.", "We use specific techniques to release and heal suppressed emotions stored in the autonomic nervous system, working directly with the inner child and emotional wounds from the past."),
      benefits: [
        t("Çlirim i thellë i emocioneve të ngujuar (frikë, zemërim, turp, trishtim).", "Deep release of trapped emotions (fear, anger, shame, sadness)."),
        t("Shërim i plagëve emocionale nga fëmijëria dhe e shkuara.", "Healing of emotional wounds from childhood and the past."),
        t("Shërim i fëmijës së brendshëm dhe rikthim i vitalitetit dhe gëzimit natyral.", "Healing of the inner child and return of natural vitality and joy."),
        t("Ulje dramatike e modeleve të vjetra emocionale dhe sjelljeve automatike.", "Dramatic reduction of old emotional patterns and automatic behaviors."),
        t("Hapësirë më e madhe për ndjenja pozitive dhe paqe të brendshme.", "Greater space for positive feelings and inner peace."),
      ],
    },
    {
      number: "03",
      title: t("Koherenca dhe sinkronizimi i pjesëve të ndryshme të trurit", "Coherence and synchronization of different brain regions"),
      description: t("Sinkronizojmë aktivitetin elektrik midis hemisferave të majta-djathta dhe zonave të përparme-pasme të trurit. Baza shkencore: Punimet e Dr. Richard Davidson (Universiteti i Wisconsin).", "We synchronize electrical activity between left-right hemispheres and front-back areas of the brain. Scientific basis: Works of Dr. Richard Davidson (University of Wisconsin)."),
      benefits: [
        t("Qetësi mendore dhe reduktim i stresit.", "Mental calm and stress reduction."),
        t("Fokus dhe qartësi më e lartë.", "Increased focus and clarity."),
        t("Rritje e kreativitetit dhe intuitës.", "Increase in creativity and intuition."),
        t("Përmirësim i gjendjes emocionale.", "Improvement in emotional state."),
        t("Rritje e energjisë dhe vitalitetit.", "Increase in energy and vitality."),
        t("Përmirësim i gjumit.", "Improvement in sleep."),
      ],
    },
    {
      number: "04",
      title: t("Induksioni i valëve gamma", "Induction of gamma waves"),
      description: t("Aktivizojmë talamusin për të gjeneruar vale gama për të hyrë në gjendje superndërgjegjeje.", "We activate the thalamus to generate gamma waves to enter a state of super-consciousness."),
      benefits: [
        t("Supermemorie, fokus ekstrem dhe performancë në nivel mjeshtërie.", "Super-memory, extreme focus and mastery-level performance."),
        t("Eufori, ekstazë dhe lumturi të thellë.", "Euphoria, ecstasy and deep happiness."),
        t("Akses intuitiv me komandë dhe eksperienca mistike të matshme.", "Intuitive access on command and measurable mystical experiences."),
        t("Shërim.", "Healing."),
      ],
    },
    {
      number: "05",
      title: t("Aktivizimi dhe lirimi i fashave të trupit (indit lidhor)", "Activation and release of body fascia (connective tissue)"),
      description: t("Çlirojmë tensionin e ruajtur në fashat e trupit përmes frymëmarrjes së thellë, lëvizjes së ndërgjegjshme dhe fokusit somatik.", "We release tension stored in body fascia through deep breathing, conscious movement and somatic focus."),
      benefits: [
        t("Çlirim i shpejtë i tensionit fizik dhe emocional.", "Quick release of physical and emotional tension."),
        t("Përmirësim i qarkullimit, fleksibilitetit dhe energjisë vitale.", "Improvement in circulation, flexibility and vital energy."),
        t("Ulje e dhimbjeve kronike dhe rikthim i vitalitetit fizik.", "Reduction of chronic pain and return of physical vitality."),
      ],
    },
    {
      number: "06",
      title: t("Teknikat e avancuara të frymëmarrjes", "Advanced breathing techniques"),
      description: t("Përdorim teknika të avancuara të frymëmarrjes për të balancuar energjinë në trup, për të çliruar sistemin nervor nga emocionet e ulëta dhe për të aktivizuar sistemin nervor parasimpatik.", "We use advanced breathing techniques to balance the body's energy, release the nervous system from low emotions and activate the parasympathetic nervous system."),
      benefits: [
        t("Çlirim i shpejtë i emocioneve të shtypura.", "Quick release of suppressed emotions."),
        t("Ulje e ndjeshme e ankthit, stresit dhe emocioneve të ulëta.", "Significant reduction of anxiety, stress and low emotions."),
        t("Aktivizim i gjendjes së shërimit dhe rigjenerimit të thellë.", "Activation of the state of healing and deep regeneration."),
        t("Përgatitje optimale e trupit dhe mendjes për gjendje më të larta si valët gama.", "Optimal preparation of body and mind for higher states such as gamma waves."),
      ],
    },
    {
      number: "07",
      title: t("Harmonizimi dhe balancimi i fushës energjetike", "Harmonization and balancing of the energy field"),
      description: t("Matim dhe balancojmë fushën elektromagnetike të trupit.", "We measure and balance the body's electromagnetic field."),
      benefits: [
        t("Balancim i energjisë së organeve dhe sistemeve të trupit.", "Balancing of the energy of organs and body systems."),
        t("Rritje e vitalitetit të përgjithshëm dhe forcimit të imunitetit.", "Increase in overall vitality and immune strengthening."),
        t("Harmonizim i plotë i trupit, mendjes dhe zemrës për shërim të thellë.", "Complete harmonization of body, mind and heart for deep healing."),
      ],
    },
  ];

  return (
    <div className="shtyllat-e-punes min-h-screen bg-white">
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776844664912-0.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
          <div className="flex-1 text-left">
            <h1 className="hero-title-mobile md:hidden font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#ffffff" }}>
              {t("Shtylla të", "Pillars of")}<br />
              <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("transformimit.", "transformation.")}</span>
            </h1>
            <h1 className="hidden md:block font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#ffffff" }}>
              {t("Shtylla të", "Pillars of")}<br />
              <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("transformimit.", "transformation.")}</span>
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>♦</span>
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
            </div>

            <p className="leading-relaxed mb-4 md:mb-6 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.85)", maxWidth: 420 }}>
              {t(
                "7 metodat shkencore që përdorim për të transformuar trupin, mendjen dhe shpirtin në retreatet dhe trajnimet tona.",
                "7 scientific methods we use to transform body, mind and spirit in our retreats and trainings."
              )}
            </p>

            <a href="/eventet/retreat"
              className="inline-flex items-center gap-1.5 text-white text-sm md:text-base px-3 py-1.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              {t("Shiko Retreat", "View Retreat")}
            </a>
          </div>
        </div>
      </div>


      <section className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-10 md:space-y-14">
        {pillars.map((pillar, i) => (
          <FadeIn key={pillar.number} delay={(i % 3) * 80}>
            <div className="rounded-3xl overflow-hidden shadow-sm border border-violet-100 mt-4 md:mt-0">
              {/* Image */}
              <div className="relative h-60 md:h-80 overflow-hidden">
                <img src={PILLAR_IMAGES[i]} alt={pillar.title} className="w-full h-full object-cover object-top" />
              </div>

              {/* Content */}
              <div className="bg-white px-6 py-6">
                {/* Decorated number */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-px" style={{ background: "#ddd6fe" }} />
                  <span className="font-bold text-xl" style={{ color: "#a78bfa", fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {parseInt(pillar.number)}.
                  </span>
                  <div className="flex-1 h-px" style={{ background: "#ddd6fe" }} />
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold leading-snug mb-3 text-zinc-800"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {pillar.title}
                </h2>

                {/* Description */}
                <p className="leading-relaxed text-zinc-600 mb-5" style={{ fontSize: 16 }}>
                  {pillar.description}
                </p>

                {/* Benefits box */}
                <div className="rounded-2xl px-4 py-4" style={{ background: "#f5f0ff" }}>
                  <p className="font-bold mb-3" style={{ color: "#7c3aed", fontSize: 16 }}>
                    {t("Benefitet:", "Benefits:")}
                  </p>
                  <ul className="space-y-2">
                    {pillar.benefits.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 leading-relaxed text-zinc-700" style={{ fontSize: 16 }}>
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#ede9fe" }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* ── CTA final ── */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <FadeIn>
          <div className="rounded-3xl overflow-hidden shadow-sm border border-violet-100">
            {/* Image */}
            <div className="relative h-52 md:h-72 overflow-hidden">
              <img
                src="/img/TONI1692.JPG"
                alt="CTA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 100%)" }} />
            </div>

            {/* Content */}
            <div className="bg-white px-6 py-7 text-center">
              {/* Star icon */}
              <div className="flex justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#a78bfa" stroke="none">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                </svg>
              </div>

              <h2 className="font-bold leading-snug mb-3 text-zinc-800"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22 }}>
                {t("Gati të ndryshosh jetën tënde nga brenda?", "Ready to change your life from within?")}
              </h2>

              <p className="leading-relaxed text-zinc-500 mb-6">
                {t(
                  "Rezervo vendin tënd në trajnimin e radhës dhe përjeto këto metoda të fuqishme në veprim.",
                  "Reserve your spot in the next training and experience these powerful methods in action."
                )}
              </p>

              {/* Buttons */}
              <div className="flex flex-col items-center gap-3 w-full max-w-xs mx-auto">
                <Link to="/signup"
                  className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl text-white font-semibold w-full text-sm md:text-base"
                  style={{ background: "linear-gradient(135deg, #6d28d9 0%, #4e29c5 100%)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {t("Rezervo vendin tënd", "Reserve your spot")}
                </Link>

                <Link to="/eventet/retreat"
                  className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl font-semibold border w-full text-sm md:text-base"
                  style={{ borderColor: "#ddd6fe", color: "#6d28d9", background: "#faf7ff" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {t("Mëso më shumë", "Learn more")}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};
