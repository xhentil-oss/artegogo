import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export const TestimonialsSection = () => {
  const { ref, visible } = useVisible(0.1);
  const [activeCategory, setActiveCategory] = useState(0);
  const { t } = useLanguage();

  const categories = [
    {
      id: "hapje-zemre",
      label: t("Hapje Zemre", "Heart Opening"),
      emoji: "",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=75",
      description: t("Çlirim emocional dhe hapje e thellë e zemrës", "Emotional release and deep heart opening"),
      testimonials: [
        {
          name: "Arta Kelmendi",
          location: t("Tiranë", "Tirana"),
          quote: t(
            "Pas retreat-it ndihem sikur u zgjova nga një gjumë i gjatë. Për herë të parë ndiej qetësi të vërtetë — jo që e detyruaj, por që ishte aty.",
            "After the retreat I feel like I woke up from a long sleep. For the first time I feel real peace — not forced, but naturally there."
          ),
          result: t("Çlirim nga ankthi kronik", "Relief from chronic anxiety"),
          initials: "AK",
          color: "from-pink-400 to-rose-600",
        },
        {
          name: "Sonila Xhafa",
          location: t("Vlorë", "Vlore"),
          quote: t(
            "U ktheva në shtëpi si njeri tjetër — jo dramë, por thjesht e qetë, e plotë dhe e qartë. Familja ime e vuri re ndryshimin menjëherë.",
            "I returned home as a different person — no drama, just calm, complete and clear. My family noticed the change immediately."
          ),
          result: t("Stabiliteti emocional dhe intuita", "Emotional stability and intuition"),
          initials: "SX",
          color: "from-fuchsia-400 to-pink-600",
        },
        {
          name: "Mirela Duka",
          location: t("Shkodër", "Shkoder"),
          quote: t(
            "Zemra ime kishte qenë e mbyllur për vite. Pas këtij workshopi ndiej që mund të dua dhe të pritem ashtu siç jam.",
            "My heart had been closed for years. After this workshop I feel that I can love and be accepted as I am."
          ),
          result: t("Hapje emocionale e thellë", "Deep emotional opening"),
          initials: "MD",
          color: "from-rose-400 to-pink-500",
        },
      ],
    },
    {
      id: "manifestime",
      label: t("Manifestime", "Manifestations"),
      emoji: "",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=75",
      description: t("Krijimi i jetës dhe realitetit të ri duke manifestuar", "Creating a new life and reality through manifestation"),
      testimonials: [
        {
          name: "Blerim Hoxha",
          location: t("Prishtinë", "Pristina"),
          quote: t(
            "Kisha bërë shumë seminare dhe trajnime. Asnjë nuk shkoi aq thellë sa ky. Nuk është motivim — është transformim real.",
            "I had attended many seminars and trainings. None went as deep as this one. It's not motivation — it's real transformation."
          ),
          result: t("Qartësi dhe drejtim në jetë", "Clarity and direction in life"),
          initials: "BH",
          color: "from-indigo-400 to-violet-600",
        },
        {
          name: "Ardit Çela",
          location: t("Tiranë", "Tirana"),
          quote: t(
            "Gjatë gjithë jetës sime kisha menduar se kjo nuk është për mua. Sot jam falënderues që e provova. Ndryshoi mënyrën si e shoh veten.",
            "All my life I thought this wasn't for me. Today I'm grateful I tried it. It changed the way I see myself."
          ),
          result: t("Vetëbesim dhe rritje personale", "Self-confidence and personal growth"),
          initials: "AÇ",
          color: "from-purple-500 to-violet-700",
        },
        {
          name: "Lira Musa",
          location: t("Gjakovë", "Gjakova"),
          quote: t(
            "Brenda disa javësh pas workshopit, situata financiare ime ndryshoi plotësisht. Mësova si të alinjohem me atë që dua të krijoj.",
            "Within a few weeks after the workshop, my financial situation changed completely. I learned how to align with what I want to create."
          ),
          result: t("Manifestim i qëllimit të jetës", "Manifestation of life's purpose"),
          initials: "LM",
          color: "from-violet-400 to-purple-600",
        },
      ],
    },
    {
      id: "e-brendshme",
      label: t("Puna e Brendshme", "Inner Work"),
      emoji: "",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=75",
      description: t("Vetënjohja dhe transformimi i thellë i brendshëm", "Self-knowledge and deep inner transformation"),
      testimonials: [
        {
          name: "Erjon Malaj",
          location: t("Durrës", "Durres"),
          quote: t(
            "Meditimet nuk ishin si mendoja. Ishin konkrete, të aplikueshme dhe ndieja ndryshim që nga sesioni i parë.",
            "The meditations weren't what I expected. They were concrete, applicable and I felt change from the very first session."
          ),
          result: t("Energji dhe gjallëri e re", "New energy and vitality"),
          initials: "EM",
          color: "from-emerald-400 to-teal-600",
        },
        {
          name: "Anxhela Prendi",
          location: t("Elbasan", "Elbasan"),
          quote: t(
            "Punova me besime të vjetra që kishin qëndruar me mua për dekada. Procesi ishte i thellë por shumë i sigurt — fasilitatorët janë jashtëzakonisht kompetent.",
            "I worked with old beliefs that had been with me for decades. The process was deep but very safe — the facilitators are exceptionally competent."
          ),
          result: t("Lirimi nga besimet kufizuese", "Release from limiting beliefs"),
          initials: "AP",
          color: "from-teal-400 to-green-600",
        },
        {
          name: "Gentian Shehu",
          location: t("Korçë", "Korce"),
          quote: t(
            "Nuk prisja që do të ndikonte kaq thellë. Çdo mbrojtje që kisha ndërtuar u zbus dhe ndieja lirinë e vërtetë për herë të parë.",
            "I didn't expect it to affect me so deeply. Every defense I had built softened and I felt true freedom for the first time."
          ),
          result: t("Paqe e brendshme e qëndrueshme", "Sustainable inner peace"),
          initials: "GS",
          color: "from-green-400 to-emerald-600",
        },
      ],
    },
    {
      id: "sherime",
      label: t("Shërime", "Healings"),
      emoji: "",
      image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&q=75",
      description: t("Shërim fizik, emocional dhe energjetik", "Physical, emotional and energetic healing"),
      testimonials: [
        {
          name: "Fatmira Leka",
          location: t("Berat", "Berat"),
          quote: t(
            "Trupi im kishte mbajtur dhimbje dhe tension për vite. Pas tri ditësh retreat, ndihet sikur u hoq një barrë shumëvjeçare.",
            "My body had held pain and tension for years. After three days of retreat, it feels like a long-held burden was lifted."
          ),
          result: t("Lirimi i tensionit fizik dhe emocional", "Release of physical and emotional tension"),
          initials: "FL",
          color: "from-amber-400 to-orange-500",
        },
        {
          name: "Drita Osmani",
          location: t("Prizren", "Prizren"),
          quote: t(
            "Kisha trauma të vjetra që askush nuk kish arritur t'i prekë. Këtu i afrova me kujdes dhe dashuri. Tani ndihem e lirë nga ato zinxhirë.",
            "I had old traumas that no one had been able to reach. Here I approached them with care and love. Now I feel free from those chains."
          ),
          result: t("Shërim nga trauma e vjetër", "Healing from old trauma"),
          initials: "DO",
          color: "from-pink-400 to-rose-500",
        },
        {
          name: "Rezart Hyseni",
          location: t("Tiranë", "Tirana"),
          quote: t(
            "Sistemi nervor im ishte konstant i mbingarkuar. Pas disa seancave ndihem i qetë, i qartë dhe energjia ime u rikthye.",
            "My nervous system was constantly overloaded. After a few sessions I feel calm, clear and my energy has returned."
          ),
          result: t("Balancim i sistemit nervor", "Nervous system balancing"),
          initials: "RH",
          color: "from-rose-400 to-purple-500",
        },
      ],
    },
  ];

  const outcomes = [
    { stat: "93%", label: t("raportojnë qetësi të shtuar pas retreat-it", "report increased calm after the retreat") },
    { stat: "1200+", label: t("pjesëmarrës në evente dhe trajnime", "participants in events and trainings") },
    { stat: "87%", label: t("vazhdojnë praktikën pas 3 muajsh", "continue the practice after 3 months") },
    { stat: "4.9★", label: t("vlerësim mesatar i retreat-eve", "average rating of retreats") },
  ];

  const cat = categories[activeCategory];

  return (
    <section ref={ref} className="relative overflow-hidden py-28 px-6 bg-white">

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
          {outcomes.map((o, i) => (
            <div key={i} className="rounded-2xl border border-purple-100 text-center py-6 px-4 relative overflow-hidden"
              style={{ background: "linear-gradient(145deg, rgba(157,143,239,0.08) 0%, rgba(157,143,239,0.03) 100%)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 to-transparent pointer-events-none" />
              <div className="text-3xl font-bold mb-1" style={{ color: "#9D8FEF" }}>{o.stat}</div>
              <div className="text-sm leading-relaxed text-zinc-700 md:text-base">{o.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-10"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <button key={c.id} onClick={() => setActiveCategory(i)}
                className="relative rounded-2xl overflow-hidden group cursor-pointer border-2 transition-all duration-300 text-left"
                style={{ borderColor: activeCategory === i ? "#ffffff" : "rgba(0,0,0,0.08)", boxShadow: activeCategory === i ? "0 0 0 3px rgba(255,255,255,0.6)" : "none", aspectRatio: "16/10" }}>
                <img src={c.image} alt={c.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: activeCategory === i ? "brightness(0.85)" : "brightness(0.75)" }} />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-sm md:text-base font-bold leading-tight text-white drop-shadow">{c.label}</span>
                  <span className="text-sm mt-1 leading-relaxed text-white/80 md:text-base">{c.description}</span>
                </div>
                {activeCategory === i && (
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #9D8FEF, #c084fc)" }} />
                )}
              </button>
            ))}
          </div>
        </div>

          <div key={activeCategory} style={{ opacity: 1, animation: "fadeInUp 0.45s ease both" }}>
          <div className="relative rounded-3xl overflow-hidden mb-8">
            <img src={cat.image} alt={cat.label} className="w-full h-48 md:h-64 object-cover" style={{ filter: "brightness(0.75)" }} />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-2">{cat.label}</h3>
              <p className="text-sm leading-relaxed text-white md:text-base max-w-md" style={{ color: "rgba(255,255,255,0.9)" }}>{cat.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {cat.testimonials.map((testimonial, i) => (
              <div key={i} className="rounded-2xl border border-purple-100 p-6 flex flex-col justify-between relative overflow-hidden group hover:border-purple-300 transition-colors duration-300"
                style={{ background: "#F9FAFB", animationDelay: `${i * 80}ms`, animation: "fadeInUp 0.5s ease both" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-5 text-6xl font-serif text-purple-100 leading-none select-none">"</div>
                <div className="relative z-10">
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-5 italic">&#34;{testimonial.quote}&#34;</p>
                  <div className="inline-flex items-center gap-1.5 border border-purple-200 rounded-full px-3 py-1 mb-5" style={{ background: "rgba(157,143,239,0.08)" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#9D8FEF" }} />
                    <span className="text-sm leading-relaxed text-zinc-700 md:text-base font-medium" style={{ color: "#9D8FEF" }}>{testimonial.result}</span>
                  </div>
                </div>
                <div className="relative z-10 flex items-center gap-3 mt-auto pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#000000" }}>
                    <span className="text-white text-xs font-bold">{testimonial.initials}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-zinc-800 text-sm font-semibold leading-tight">{testimonial.name}</p>
                    <p className="text-zinc-400 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
