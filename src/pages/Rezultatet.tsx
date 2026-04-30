import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export const RezultatetPage = () => {
  const { t } = useLanguage();

  const results = [
    {
      category: t("Shëndeti Mendor", "Mental Health"),
      items: [
        t("Ulje e ndjeshme e ankthit dhe stresit kronik", "Significant reduction of anxiety and chronic stress"),
        t("Lirimi nga depresioni dhe gjendjet e ulëta emocionale", "Relief from depression and low emotional states"),
        t("Qartësi mendore dhe fokus i rritur", "Mental clarity and increased focus"),
        t("Gjumë më i thellë dhe rigjenerues", "Deeper and more regenerative sleep"),
      ],
      color: "from-violet-500 to-purple-600",
      icon: "🧠",
    },
    {
      category: t("Shëndeti Fizik", "Physical Health"),
      items: [
        t("Ulje e dhimbjeve kronike dhe tension muskulor", "Reduction of chronic pain and muscle tension"),
        t("Rritje e nivelit të energjisë dhe vitalitetit", "Increased energy levels and vitality"),
        t("Forcim i sistemit imunitar", "Strengthening of the immune system"),
        t("Ekuilibër hormonal dhe metabolik", "Hormonal and metabolic balance"),
      ],
      color: "from-emerald-500 to-teal-600",
      icon: "💚",
    },
    {
      category: t("Relacionet & Lidhjet", "Relationships & Connections"),
      items: [
        t("Komunikim më i thellë dhe autentik", "Deeper and more authentic communication"),
        t("Lirimi nga modelet e dëmshme të marrëdhënieve", "Liberation from harmful relationship patterns"),
        t("Rritje e kapacitetit për dashuri dhe dhënie", "Increased capacity for love and giving"),
        t("Lidhje më e fortë me veten dhe të tjerët", "Stronger connection with yourself and others"),
      ],
      color: "from-pink-500 to-rose-600",
      icon: "❤️",
    },
    {
      category: t("Qëllimi & Krijimi", "Purpose & Creation"),
      items: [
        t("Zbulimi i qëllimit tuaj të vërtetë në jetë", "Discovery of your true life purpose"),
        t("Aftësi e rritur për manifestim dhe krijim", "Increased ability for manifestation and creation"),
        t("Vendimmarrje nga zemra, jo nga frika", "Decision-making from the heart, not from fear"),
        t("Jetë me kuptim dhe drejtim të qartë", "Life with meaning and clear direction"),
      ],
      color: "from-amber-500 to-orange-600",
      icon: "✨",
    },
  ];

  const testimonials = [
    {
      name: "Arta K.",
      result: t("Lirimi nga ankthi", "Freedom from anxiety"),
      quote: t(
        "Pas retreat-it, ndjeva sikur u hoq një barrë e rëndë nga shpina ime. Ankthi që më shoqëronte për vite u zua.",
        "After the retreat, I felt as if a heavy burden was lifted from my back. The anxiety that had accompanied me for years disappeared."
      ),
    },
    {
      name: "Blerim M.",
      result: t("Transformim i plotë", "Complete transformation"),
      quote: t(
        "Trajnimi online ndryshoi mënyrën time të të menduarit. Sot jetoj me qëllim dhe gëzim të vërtetë.",
        "The online training changed my way of thinking. Today I live with real purpose and joy."
      ),
    },
    {
      name: "Drita S.",
      result: t("Shërim emocional", "Emotional healing"),
      quote: t(
        "Pas shumë vitesh dhimbje emocionale, gjetëm rrugën e shërimit. Faleminderit Dr. Marvin dhe Dr. Artemisa!",
        "After many years of emotional pain, we found the path of healing. Thank you Dr. Marvin and Dr. Artemisa!"
      ),
    },
  ];

  const stats = [
    { value: "1000+", label: t("Njerëz të transformuar", "People transformed") },
    { value: "95%", label: t("Raportojnë ulje të ankthit", "Report reduction in anxiety") },
    { value: "12+", label: t("Vite eksperiencë", "Years of experience") },
    { value: "4.9★", label: t("Vlerësim mesatar", "Average rating") },
  ];

  return (
    <div className="bg-white text-zinc-800 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-purple-900 to-violet-800 text-white">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-20 text-center">
          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-violet-200 font-semibold mb-5">
            {t("Rezultatet", "Results")}
          </span>
          <h1 className="text-4xl md:text-6xl font-light leading-[1.1] tracking-tight mb-6">
            {t("Rezultate reale,", "Real results,")}<br />
            <span className="font-semibold bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">
              {t("njerëz realë", "real people")}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            {t(
              "Mbi 1000 njerëz kanë transformuar jetën e tyre nëpërmjet metodave tona. Këtu janë rezultatet e tyre.",
              "Over 1000 people have transformed their lives through our methods. Here are their results."
            )}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-violet-600 mb-1">{value}</p>
                <p className="text-zinc-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center mb-14">
            <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-violet-200 font-semibold mb-4">
              {t("Fushat e transformimit", "Areas of transformation")}
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
            {t("Çfarë ndryshon pas programeve tona", "What changes after our programs")}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {results.map(({ category, items, color, icon }) => (
            <div key={category} className="border border-zinc-100 rounded-2xl overflow-hidden transition-all">
              <div className={`bg-gradient-to-r ${color} p-5 flex items-center gap-3`}>
                <span className="text-2xl">{icon}</span>
                <h3 className="text-white font-semibold text-lg">{category}</h3>
              </div>
              <ul className="p-6 flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-600 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-violet-200 font-semibold mb-4">
              {t("Histori suksesi", "Success stories")}
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
              {t("Fjalët e tyre", "Their words")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, result, quote }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-zinc-100">
                <p className="text-[10px] uppercase tracking-[0.15em] text-violet-200 font-semibold mb-3">{result}</p>
                <p className="text-zinc-600 text-sm leading-relaxed mb-5 italic">&#34;{quote}&#34;</p>
                <p className="text-zinc-800 text-sm font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
          {t("Edhe ju mund të keni", "You too can have")}<br />
          <span className="font-semibold text-violet-600">{t("këto rezultate.", "these results.")}</span>
        </h2>
        <p className="text-zinc-500 text-base mb-10 max-w-md mx-auto">
          {t(
            "Filloni udhëtimin tuaj të transformimit sot me retreat-et ose programet tona online.",
            "Start your transformation journey today with our retreats or online programs."
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/eventet/retreat"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition-all">
            {t("Rezervo Retreat-in", "Book the Retreat")}
          </Link>
          <Link to="/eventet/trajnime-online"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-zinc-200 hover:border-violet-300 text-zinc-700 hover:text-violet-700 text-sm font-medium transition-all">
            {t("Shiko Trajnimet Online", "View Online Trainings")}
          </Link>
        </div>
      </section>
    </div>
  );
};
