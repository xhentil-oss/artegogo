import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

export function OfferSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const offers = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      tag: 'Immersive',
      title: t('Retreat-e transformuese', 'Transformative Retreats'),
      desc: t(
        'Përvoja të thella immersive, ku për disa ditë shkëputesh nga zhurma e jashtme dhe hyn në një proces të plotë rigjenerimi të brendshëm.',
        'Deep immersive experiences, where for several days you disconnect from external noise and enter a complete process of internal regeneration.'
      ),
      cta: t('Më shumë për retreat →', 'More about retreats →'),
      route: '/eventet/retreat',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      tag: 'Online',
      title: t('Trajnime online', 'Online Trainings'),
      desc: t(
        'Programe të strukturuara hap pas hapi, për të punuar me emocionet, energjinë, intuitën, manifestimin dhe lidhjen me veten.',
        'Step-by-step structured programs to work with emotions, energy, intuition, manifestation and connection with yourself.'
      ),
      cta: t('Shiko trajnimet online →', 'View online trainings →'),
      route: '/eventet/trajnime-online',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      tag: 'Live',
      title: t('Evente dhe workshope live', 'Live Events and Workshops'),
      desc: t(
        'Takime intensive me teori, praktikë dhe meditime të udhëhequra për të hyrë në një nivel të ri vetëdijeje dhe fuqie personale.',
        'Intensive meetings with theory, practice and guided meditations to enter a new level of awareness and personal power.'
      ),
      cta: t('Shiko eventet →', 'View events'),
      route: '/eventet',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
        </svg>
      ),
      tag: t('Digjital', 'Digital'),
      title: t('Meditime dhe materiale digjitale', 'Meditations and Digital Materials'),
      desc: t(
        'Meditime të regjistruara, audio, ushtrime dhe burime për harmonizim të përditshëm.',
        'Recorded meditations, audio, exercises and resources for daily harmonization.'
      ),
      cta: t('Shko tek produktet →', 'Go to products'),
      route: '/shop',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="offer" className="relative py-20 overflow-hidden" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1 mb-4" style={{ color: '#9D8FEF', backgroundColor: '#F3F0FF', border: '1px solid #DDD6FE' }}>
            {t('Çfarë ofrojmë', 'What we offer')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 leading-tight">
            {t('Transformohu', 'Transform')}{' '}
            <span style={{ color: '#9D8FEF' }}>{t('me ne', 'with us')}</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base max-w-2xl mx-auto">
            {t(
              'Zgjidh rrugën që i përshtatet momentit tënd të jetës. Qoftë në retreat, online apo në evente live, çdo përvojë është krijuar për të të çuar drejt ndryshimit real dhe të qëndrueshëm.',
              'Choose the path that suits your current moment in life. Whether in a retreat, online or at live events, every experience is designed to lead you toward real and lasting change.'
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((offer, i) => (
            <div key={offer.title} className={`flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}>
              <span className="text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1 mb-5" style={{ backgroundColor: '#F3F0FF', color: '#9D8FEF' }}>{offer.tag}</span>
              <div className="w-12 h-12 rounded-xl text-white flex items-center justify-center mb-5 transition-colors duration-200" style={{ backgroundColor: '#000000' }}>{offer.icon}</div>
              <h3 className="text-base font-bold text-zinc-900 mb-2 leading-snug">{offer.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base flex-1 mb-6">{offer.desc}</p>
              <button onClick={() => navigate(offer.route)} className="w-full py-2.5 px-4 rounded-xl text-sm leading-relaxed text-zinc-700 md:text-base font-semibold transition-all duration-200 hover:text-white whitespace-nowrap" style={{ border: '1px solid #DDD6FE', color: '#9D8FEF' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#9D8FEF'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#9D8FEF'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#DDD6FE'; (e.currentTarget as HTMLButtonElement).style.color = '#9D8FEF'; }}>
                {offer.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
