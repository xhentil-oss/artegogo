import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  const pillarData = [
    {
      label: t('Shërim Emocional', 'Emotional Healing'),
      desc: t('Lirimi i bllokimeve dhe traumave të së shkuarës', 'Releasing blockages and past traumas'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      label: t('Kërkimi Shkencor', 'Scientific Research'),
      desc: t('EEG, koherencë zemër-tru dhe metoda klinike të provuara', 'EEG, heart-brain coherence and proven clinical methods'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      label: t('Transformim i Thellë', 'Deep Transformation'),
      desc: t('Modele të reja mendimi, ndjenje dhe veprim', 'New patterns of thought, feeling and action'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      label: t('Potencial i Plotë', 'Full Potential'),
      desc: t('Aktivizimi i burimeve dhe energjisë suaj të brendshme', 'Activating your inner resources and energy'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
  ];

  const differentiators = [
    {
      num: '01',
      title: t('Bazë Shkencore', 'Scientific Foundation'),
      desc: t('Çdo metodë mbështetet nga hulumtime klinike dhe neuroshencat e aplikuara.', 'Every method is supported by clinical research and applied neuroscience.'),
    },
    {
      num: '02',
      title: t('Qasje Holistike', 'Holistic Approach'),
      desc: t('Trajtojmë njeriun në tërësi — trup, mendje dhe shpirt.', 'We treat the whole person — body, mind and spirit.'),
    },
    {
      num: '03',
      title: t('Rezultate të Matshme', 'Measurable Results'),
      desc: t('Monitorojmë progresin me instrumente EEG dhe feedback të vazhdueshëm.', 'We monitor progress with EEG instruments and continuous feedback.'),
    },
    {
      num: '04',
      title: t('Eksperiencë e Personalizuar', 'Personalized Experience'),
      desc: t('Çdo program është i adaptuar sipas nevojave dhe qëllimeve tuaja.', 'Every program is adapted to your needs and goals.'),
    },
  ];

  const doctors = [
    {
      name: 'Dr. Marvin',
      role: t('Neuroshumënicë & Koçing Kuantik', 'Neuroscience & Quantum Coaching'),
      color: 'from-violet-600 to-purple-700',
      initials: 'DM',
    },
    {
      name: 'Dr. Artemisa',
      role: t('Psikologji Pozitive & Shërim Emocional', 'Positive Psychology & Emotional Healing'),
      color: 'from-purple-500 to-fuchsia-600',
      initials: 'DA',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1 mb-4" style={{color:'#9D8FEF', background:'#F3F0FF', border:'1px solid #C4B8F9'}}>
            {t('Rreth Nesh', 'About Us')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 leading-tight">
            {t('Shkenca që', 'The Science that')}{' '}
            <span style={{color:'#9D8FEF'}}>
              {t('Transformon', 'Transforms')}
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base max-w-2xl mx-auto">
            {t(
              'Harmonizim Kuantik bashkon neuroshkencat moderne me kuptimet e thella të psikologjisë për të sjellë ndryshim të qëndrueshëm.',
              'Quantum Harmonization combines modern neuroscience with deep psychological insights to bring sustainable change.'
            )}
          </p>
        </div>

        {/* Doctor Cards */}
        <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Dr. Marvin */}
          <div className="relative rounded-3xl p-8 overflow-hidden group hover:-translate-y-1 transition-all duration-300" style={{background:'#F9FAFB',border:'1px solid #E5E7EB'}}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
            <div className="relative flex items-start gap-5">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden">
                <img src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777283783333-0.png" alt="Dr. Marvin Bundo" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="font-bold text-zinc-900 text-xl">Dr. Marvin Bundo</p>
                </div>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                  {t(
                    'Mjek dhe studiues shkencor në Zvicër. Specialist i neuroshumënicës dhe koçingut kuantik — bashkon shkencën e trurit me metodat e transformimit të thellë personal.',
                    'Medical doctor and scientific researcher in Switzerland. Specialist in neuroscience and quantum coaching — bridging brain science with deep personal transformation methods.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[t('Neuroshumënicë', 'Neuroscience'), t('EEG & Biofeedback', 'EEG & Biofeedback'), t('Koçing Kuantik', 'Quantum Coaching')].map((tag) => (
                    <span key={tag} className="text-sm md:text-base bg-white rounded-full px-3 py-1 font-medium" style={{color:'#9D8FEF', border:'1px solid #C4B8F9'}}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Artemisa */}
          <div className="relative rounded-3xl p-8 overflow-hidden group hover:-translate-y-1 transition-all duration-300" style={{background:'#F9FAFB',border:'1px solid #E5E7EB'}}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
            <div className="relative flex items-start gap-5">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden">
                <img src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777283875044-0.png" alt="Dr. Artemisa Gogollari" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="font-bold text-zinc-900 text-xl">Dr. Artemisa Gogollari</p>
                </div>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                  {t(
                    'Mjeke dhe mentore e zhvillimit personal. Eksperte e psikologjisë pozitive dhe shërimit emocional — ndihmon njerëzit të çlirohen nga bllokimet dhe të rikthehen tek vetja e tyre e vërtetë.',
                    'Medical doctor and personal development mentor. Expert in positive psychology and emotional healing — helping people release blockages and reconnect with their true selves.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[t('Psikologji Pozitive', 'Positive Psychology'), t('Shërim Emocional', 'Emotional Healing'), t('Meditim', 'Meditation')].map((tag) => (
                    <span key={tag} className="text-sm md:text-base bg-white rounded-full px-3 py-1 font-medium" style={{color:'#9D8FEF', border:'1px solid #C4B8F9'}}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Quote */}
        <div className={`relative bg-zinc-900 rounded-3xl p-8 md:p-12 text-white text-center mb-16 overflow-hidden transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
          <p className="relative text-5xl font-black text-white/20 leading-none mb-4 select-none">&ldquo;</p>
          <p className="relative text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto -mt-6">
            {t(
              'Ne ju ndihmojmë të riktheheni tek vetja juaj e vërtetë, të lironi bllokimet emocionale dhe të krijoni një jetë me më shumë qartësi, energji dhe dashuri.',
              'We help you reconnect with your true self, release emotional blockages and create a life with more clarity, energy and love.'
            )}
          </p>
          <div className="relative flex items-center justify-center gap-4 mt-6">
            <span className="w-8 h-0.5 bg-white/40 rounded-full" />
            <p className="text-white/70 text-sm font-medium">Dr. Marvin Bundo & Dr. Artemisa Gogollari</p>
            <span className="w-8 h-0.5 bg-white/40 rounded-full" />
          </div>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {pillarData.map((p) => (
            <div key={p.label} className="bg-white border border-zinc-100 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-all duration-300">
              <span className="w-10 h-10 flex items-center justify-center rounded-xl" style={{background:'#F3F0FF', color:'#9D8FEF'}}>{p.icon}</span>
              <p className="font-semibold text-zinc-800">{p.label}</p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 text-center">{t('Pse Harmonizim Kuantik?', 'Why Quantum Harmonization?')}</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {differentiators.map((d) => (
              <div key={d.num} className="flex gap-4 rounded-2xl p-6" style={{background:'#F9FAFB', border:'1px solid #E5E7EB'}}>
                <span className="flex-shrink-0 text-3xl font-black text-violet-200 leading-none select-none">{d.num}</span>
                <div>
                  <p className="font-semibold text-zinc-800 mb-1">{d.title}</p>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
