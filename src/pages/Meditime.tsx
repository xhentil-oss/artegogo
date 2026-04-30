import { Sparkles, Heart, Sunrise, Wind, Zap, Baby, Footprints, HandHeart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const MeditimePage = () => {
  const { t } = useLanguage();

  const meditations = [
    {
      icon: Sparkles,
      color: "from-violet-500 to-purple-600",
      bg: "bg-violet-50",
      iconColor: "text-violet-600",
      title: t(
        "Meditime të avancuara për harmonizimin e qendrave energjitike",
        "Advanced meditations for harmonizing energy centers"
      ),
      desc: t(
        "Praktikat tona të avancuara të meditimit punojnë drejtpërdrejt me qendrat energjitike të trupit për të rivendosur harmoninë dhe lëvizjen e lirë të energjisë.",
        "Our advanced meditation practices work directly with the body\'s energy centers to restore harmony and the free flow of energy."
      ),
    },
    {
      icon: Heart,
      color: "from-rose-500 to-pink-600",
      bg: "bg-rose-50",
      iconColor: "text-rose-500",
      title: t(
        "Harmoni zemër-mendje — koherenca e plotë",
        "Heart-mind harmony — complete coherence"
      ),
      desc: t(
        "Meditim i dedikuar për të sjellë zemrën dhe mendjen në gjendjen e koherencës së plotë — harmonizim i thellë mes dy qendrave më të rëndësishme të qenies sonë.",
        "A meditation dedicated to bringing the heart and mind into a state of complete coherence — a deep harmonization between the two most important centers of our being."
      ),
    },
    {
      icon: Sunrise,
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      iconColor: "text-amber-500",
      title: t(
        "Lidhja me veten e vërtetë — krijimi i jetës së re",
        "Connection to your true self — creating a new life"
      ),
      desc: t(
        "Meditim për t'u lidhur me veten tonë të vërtetë dhe për të krijuar një jetë të re me ndjenja dhe mendime të reja, duke dalë nga automatizmat e vjetër.",
        "A meditation to connect with your true self and create a new life with new feelings and thoughts, stepping out of old automatic patterns."
      ),
    },
    {
      icon: Wind,
      color: "from-teal-500 to-emerald-600",
      bg: "bg-teal-50",
      iconColor: "text-teal-600",
      title: t(
        "Teknika frymëmarrjeje dinamike",
        "Dynamic breathing techniques"
      ),
      desc: t(
        "Teknika të fuqishme frymëmarrjeje gjatë meditimeve për t'u çliruar nga emocionet e së shkuarës dhe për t'u lidhur me emocionet e plotësuara të së ardhmes.",
        "Powerful breathing techniques during meditations to release past emotions and connect with the elevated emotions of the future."
      ),
    },
    {
      icon: Zap,
      color: "from-indigo-500 to-violet-600",
      bg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      title: t(
        "Krijimi nga brenda jashtë — formula e ndryshimit",
        "Creating from the inside out — the formula for change"
      ),
      desc: t(
        "Meditime për të sjellë ndryshime reale në jetën tënde duke përdorur formulën shkencore për të krijuar realitetin e ri nga brenda jashtë.",
        "Meditations to bring real change in your life using the scientific formula to create a new reality from the inside out."
      ),
    },
    {
      icon: Baby,
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-50",
      iconColor: "text-pink-500",
      title: t(
        "Shërimi i fëmijës së brendshëm",
        "Healing the inner child"
      ),
      desc: t(
        "Meditim i thellë për të shëruar fëmijën e brendshëm dhe për të integruar plotësisht veten — balancë jetësore dhe liri nga reagimet ndaj situatave të jashtme.",
        "A deep meditation to heal the inner child and fully integrate the self — life balance and freedom from reactions to external situations."
      ),
    },
    {
      icon: Footprints,
      color: "from-green-500 to-emerald-600",
      bg: "bg-green-50",
      iconColor: "text-green-600",
      title: t(
        "Meditim në ecje — ndryshimi i vibrimeve",
        "Walking meditation — shifting vibrations"
      ),
      desc: t(
        "Duke ecur në natyrë, do të bëni meditime të përshtatura për ecje për të ndryshuar vibracionin, për të ecur si vetja juaj e vërtetë dhe për të ruajtur gjendjen meditative edhe gjatë përditshërisë.",
        "Walking in nature, you will practice walking-adapted meditations to shift your vibration, walk as your true self, and maintain a meditative state throughout daily life."
      ),
    },
    {
      icon: HandHeart,
      color: "from-purple-500 to-violet-600",
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
      title: t(
        "Meditim për të shëruar të tjerët",
        "Meditation to heal others"
      ),
      desc: t(
        "Do të mësoni si të meditoni për të shëruar një person tjetër — praktikë që do t'ju shërbejë edhe për familjarët tuaj dhe persona të tjerë pas programit.",
        "You will learn how to meditate to heal another person — a practice that will serve you for your family and others beyond the program."
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777032248494-0.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/20 text-white border border-white/30">
            {t("Meditim & Praktika", "Meditation & Practices")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {t("Meditime të", "Advanced")}{" "}
            <span style={{ color: "#C4B5FD" }}>{t("Avancuara", "Meditations")}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {t(
              "Transformo mendjen, zemrën dhe trupin me praktikat tona të bazuara shkencërisht — nga harmonizimi energjitik deri te krijimi i realitetit të ri.",
              "Transform your mind, heart and body with our science-based practices — from energy harmonization to the creation of a new reality."
            )}
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {meditations.map((med, i) => {
            const Icon = med.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-zinc-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden group flex gap-5 p-6"
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${med.bg} flex items-center justify-center mt-1`}>
                  <Icon className={`w-7 h-7 ${med.iconColor}`} strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-zinc-900 text-lg mb-2 leading-snug group-hover:text-violet-600 transition-colors">
                    {med.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{med.desc}</p>
                </div>
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${med.color} transition-all duration-500 rounded-b-2xl`} />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl p-10 text-white text-center" style={{ backgroundColor: "#000000" }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {t("Dëshiron akses në të gjitha meditimet?", "Want access to all meditations?")}
          </h2>
          <p className="text-sm leading-relaxed text-white/70 md:text-base mb-7 max-w-xl mx-auto">
            {t(
              "Bashkohu me programet tona online ose retreat-et për akses të plotë dhe udhëzim personal.",
              "Join our online programs or retreats for full access and personal guidance."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/eventet/trajnime-online"
              className="inline-block bg-white font-bold px-8 py-3.5 rounded-xl hover:bg-zinc-100 transition-all text-sm leading-relaxed md:text-base" style={{ color: "#000000" }}
            >
              {t("Shiko Trajnimet Online", "View Online Programs")}
            </a>
            <a
              href="/eventet/retreat"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all text-sm leading-relaxed md:text-base"
            >
              {t("Rezervo Retreat-in", "Book the Retreat")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
