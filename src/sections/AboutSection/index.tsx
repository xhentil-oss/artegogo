import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const STATS = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: '4000+',
    label: { al: 'LIVES IMPACTED', en: 'LIVES IMPACTED' },
    desc: {
      al: 'Nëpër retreat-e, trajnime dhe programe online në Shqipëri dhe ndërkombëtarisht.',
      en: 'Across retreats, trainings and online programs in Albania and internationally.',
    },
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
      </svg>
    ),
    value: '',
    label: { al: 'Neuroshkencë & Meditim', en: 'Neuroscience & Meditation' },
    desc: {
      al: 'Duke integruar njohuri mjekësore, EEG biofeedback, rregullim nervoz dhe praktika kontemplative.',
      en: 'Integrating medical knowledge, EEG biofeedback, nervous system regulation and contemplative practices.',
    },
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
      </svg>
    ),
    value: '',
    label: { al: 'Retreat 8-Ditësh', en: '8-Day Immersive Retreats' },
    desc: {
      al: 'Udhëtime transformuese për të liruar, rireshtuar dhe rikthyer lidhjen me thelbin tuaj.',
      en: 'Deep transformational journeys designed to release, realign and reconnect you with your essence.',
    },
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4e29c5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    value: '',
    label: { al: 'Transformim Real', en: 'Real Transformation' },
    desc: {
      al: 'Nga mbingarkesa emocionale drejt koherencës, qartësisë dhe jetës që doni.',
      en: 'From emotional overwhelm and disconnection to coherence, clarity and a life you love.',
    },
  },
];

export function AboutSection({ mobileCentered = false }: { mobileCentered?: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden" style={{ backgroundColor: "#F9FAFB" }}>

      {/* ── Hero split ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-3 pb-6 md:py-14 min-h-0 md:min-h-[600px] flex flex-col md:flex-row items-stretch gap-6 md:gap-8">

        {/* Text — left */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center ${mobileCentered ? "items-center md:items-start text-center md:text-left" : ""}`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          {/* Label */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 mb-5"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
            <span className="badge font-bold tracking-widest uppercase text-[10px] md:text-xs"
              style={{ color: "#7c3aed", fontFamily: "'Inter', sans-serif" }}>
              {t('KUSH JEMI', 'WHO WE ARE')}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-lg md:text-4xl lg:text-5xl font-bold leading-tight text-zinc-900 mb-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t('Ku shkenca takon', 'Where science meets')}
            <br />
            {t('ndërgjegjën.', 'consciousness.')}
          </h2>
          <h2
            className="text-lg md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: '#4e29c5',
              fontStyle: 'italic',
            }}
          >
            {t('Transformimi fillon.', 'Transformation begins.')}
          </h2>

          {/* Gold divider */}
          <div className="w-10 h-0.5 mb-3 md:mb-6" style={{ background: '#4e29c5' }} />

          {/* Description */}
          <p
            onClick={() => !expanded && setExpanded(true)}
            className={`md:text-base text-zinc-500 leading-relaxed mb-3 md:mb-5 md:line-clamp-none md:cursor-auto ${expanded ? "" : "line-clamp-3 cursor-pointer"}`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14 }}
          >
            {t(
              'Jemi Dr. Marvin Bundo dhe Dr. Artemisa Gogellari. Prej më shumë se një dekade, kemi udhëhequr mijëra njerëz nëpër retreat-e imersive, trajnime dhe përvoja transformuese që kombinojnë neuroshkencën, shërimin emocional dhe praktika të avancuara meditimi.',
              'We are Dr. Marvin Bundo and Dr. Artemisa Gogellari. For more than a decade, we have guided thousands of people through immersive retreats, trainings and transformational experiences that combine neuroscience, emotional healing and advanced meditation practices.'
            )}
          </p>

          {/* Mission bold */}
          <p
            onClick={() => !expanded && setExpanded(true)}
            className={`md:text-base text-zinc-800 leading-relaxed font-semibold md:line-clamp-none md:cursor-auto ${expanded ? "" : "line-clamp-3 cursor-pointer"}`}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 14 }}
          >
            {t(
              "Misioni ynë është t'ju ndihmojmë të rregulloni sistemin nervor, të riktheheni tek vetja dhe të krijoni një jetë qartësie, koherence dhe fuqie të brendshme.",
              "Our mission is to help you regulate your nervous system, reconnect with yourself and create a life of clarity, coherence and inner power."
            )}
          </p>

          {/* Collapse button — mobile only, shown after expand */}
          {expanded && (
            <button
              onClick={() => setExpanded(false)}
              className="md:hidden mt-1 text-xs font-semibold"
              style={{ color: "#7c3aed", fontFamily: "'Inter', sans-serif" }}
            >
              {t("Mbyll ▲", "Show less ▲")}
            </button>
          )}

          {/* CTA button */}
          <Link
            to="/rreth-nesh"
            className={`${mobileCentered ? "self-center md:self-start" : "self-start"} inline-flex items-center gap-2 mt-4 text-sm md:text-base font-semibold px-4 py-2 md:px-6 md:py-3 rounded-xl text-white transition-all duration-300 hover:scale-105`}
            style={{ background: "linear-gradient(135deg, #4e29c5 0%, #3f1e92 100%)", fontFamily: "'Inter', sans-serif" }}
          >
            {t("Mëso më shumë", "Learn more")} →
          </Link>
        </div>

        {/* Photo — right */}
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden h-60 md:h-auto">
          <img
            src="/img/photo-rrethnesh.png"
            alt="Dr. Marvin Bundo dhe Dr. Artemisa Gogellari"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>

      {/* ── Stats row ── */}
      <div
        className="w-full"
        style={{
          background: '#F9FAFB',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.35s',
        }}
      >
        <div className="max-w-7xl mx-auto px-2 md:px-12 lg:px-20 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-1 md:px-6 py-3 md:py-12"
              style={{
                borderRight: i < STATS.length - 1 ? '1px solid rgba(120,80,200,0.12)' : 'none',
              }}
            >
              {/* Icon circle */}
              <div
                className="w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-2 md:mb-4 overflow-hidden"
                style={{ background: '#EDE8FA' }}
              >
                <div className="scale-[0.45] md:scale-100">{stat.icon}</div>
              </div>

              {/* Label */}
              <p
                className="md:text-lg font-bold mb-1 md:mb-3 leading-snug"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#4e29c5',
                  fontSize: 14,
                }}
              >
                {stat.value ? `${stat.value} ${lang === 'al' ? stat.label.al : stat.label.en}` : (lang === 'al' ? stat.label.al : stat.label.en)}
              </p>

              {/* Description */}
              <p
                className="md:text-base leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  color: '#52525b',
                  fontSize: 14,
                }}
              >
                {lang === 'al' ? stat.desc.al : stat.desc.en}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
