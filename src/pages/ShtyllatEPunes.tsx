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
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden min-h-[52vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776844664912-0.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        <div className="relative w-full max-w-3xl mx-auto px-6 py-24 text-center"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] font-semibold mb-6 px-5 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.25)" }}>
            {t("Shtyllat e Punës", "Pillars of Our Work")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {t("Shtyllat e punës", "The pillars of our")}{" "}
            <span style={{ color: "#C4B5FD" }}>{t("sonë", "work")}</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.82)" }}>
            {t("Meditimet dhe teknikat e avancuara që përdorim në retreatet dhe trajnimet tona bazohen ekskluzivisht në evidencë shkencore nga neuroshkenca, epigenetika, mjekësia integruese dhe studimet mbi biofield-in.", "The meditations and advanced techniques we use in our retreats and trainings are based exclusively on scientific evidence from neuroscience, epigenetics, integrative medicine and biofield studies.")}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-10 text-center">
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
            {t("Këto janë", "These are the")}{" "}
            <span className="font-bold" style={{ color: "#C3B1E1" }}>
              {t("7 shtyllat kryesore të punës sonë", "7 main pillars of our work")}
            </span>{" "}
            — {t("çdo shtyllë është e ndërtuar mbi baza shkencore dhe ofron benefite konkrete, të matshme dhe reale.", "every pillar is built on scientific foundations and offers concrete, measurable and real benefits.")}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
        {pillars.map((pillar, i) => (
          <FadeIn key={pillar.number} delay={(i % 3) * 80}>
            <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
              <div className="px-8 py-5 flex items-center gap-5 border-b border-gray-100" style={{ background: "#F9FAFB" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm text-white" style={{ background: "#C3B1E1" }}>
                  {pillar.number}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{t("Shtylla", "Pillar")} {pillar.number}</span>
                  <h2 className="text-zinc-800 text-2xl md:text-3xl font-bold leading-snug">{pillar.title}</h2>
                </div>
              </div>
              <div className="px-8 py-7 grid md:grid-cols-2 gap-8">
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{pillar.description}</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{t("Benefitet", "Benefits")}</p>
                  <ul className="space-y-2">
                    {pillar.benefits.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-700 md:text-base">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C3B1E1" }} />
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
    </div>
  );
};
