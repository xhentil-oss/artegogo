import { ShoppingCart, ArrowLeft, CalendarDays, MapPin, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export const EventetPage = () => {
  const { t } = useLanguage();

  const eventCards = [
    {
      title: t("Retreat", "Retreat"),
      subtitle: t("Transformim i thellë — disa ditë", "Deep transformation — several days"),
      desc: t("Përvojë imersive në natyrë ku meditime, punë me trupin dhe coaching intensiv takohen për të ndryshuar jetën tënde.", "Immersive experience in nature where meditations, body work and intensive coaching meet to change your life."),
      href: "/eventet/retreat",
      emoji: "🏔️",
      badge: "Most Popular",
    },
    {
      title: t("Trajnime Online", "Online Trainings"),
      subtitle: t("Programe live & të regjistruara", "Live & recorded programs"),
      desc: t("Mëso hap pas hapi nga kudo që ndodhesh. Programe të strukturuara me Dr. Artemisa dhe ekipin.", "Learn step by step from wherever you are. Structured programs with Dr. Artemisa and the team."),
      href: "/eventet/trajnime-online",
      emoji: "💻",
      badge: null,
    },
    {
      title: t("Workshope", "Workshops"),
      subtitle: t("Takime intensive — teori & praktikë", "Intensive meetings — theory & practice"),
      desc: t("Workshope me grupe të vogla ku çdo pjesëmarrës merr vëmendje direkte, ushtrime praktike dhe meditime të udhëhequra.", "Workshops with small groups where every participant receives direct attention, practical exercises and guided meditations."),
      href: "/eventet/workshope",
      emoji: "🎯",
      badge: t("I ri", "New"),
    },
  ];

  const features = [
    { icon: <CalendarDays className="w-5 h-5 text-white" />, label: t("Evente të rregullta", "Regular events"), desc: t("Çdo muaj", "Every month") },
    { icon: <MapPin className="w-5 h-5 text-white" />, label: t("Live & Online", "Live & Online"), desc: t("Prezencë & distancë", "In-person & remote") },
    { icon: <Users className="w-5 h-5 text-white" />, label: t("Grupe të vogla", "Small groups"), desc: t("Vëmendje personale", "Personal attention") },
    { icon: <Zap className="w-5 h-5 text-white" />, label: t("Transformim real", "Real transformation"), desc: t("Rezultate të dëshmuara", "Proven results") },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative py-28 px-6 overflow-hidden"
        style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777361096433-1.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/20 text-white border border-white/30">
            {t("Evente", "Events")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {t("Eventet", "Our")}{" "}
            <span style={{ color: "#C4B5FD" }}>{t("tona", "Events")}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {t(
              "Retreat, workshope dhe trajnime online — eksperienca të dizajnuara për të sjellë ndryshim të vërtetë në jetën tënde.",
              "Retreats, workshops and online trainings — experiences designed to bring real change to your life."
            )}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">{t("Zgjidh llojin e eventit", "Choose the event type")}</h2>
          <p className="text-zinc-500 text-lg mt-1">{eventCards.length} {t("kategori eventesh në dispozicion", "event categories available")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventCards.map((e) => (
            <Link key={e.href} to={e.href} className="bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 group block">
              <div className="h-36 relative flex items-center justify-center" style={{ backgroundColor: "#9D8FEF" }}>
                <span className="text-5xl">{e.emoji}</span>
                {e.badge && (
                  <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${e.badge === "Most Popular" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"}`}>
                    {e.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-zinc-800 text-lg leading-tight mb-0.5 group-hover:text-[#9D8FEF] transition-colors">{e.title}</h3>
                <p className="text-base font-medium mb-2" style={{ color: "#9D8FEF" }}>{e.subtitle}</p>
                <p className="text-base text-zinc-500 leading-relaxed mb-4">{e.desc}</p>
                <div className="flex items-center justify-end">
                  <span className="flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all group-hover:scale-105" style={{ backgroundColor: "#9D8FEF" }}>
                    {t("Shiko më shumë", "View more")} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 rounded-3xl p-8 text-center border" style={{ backgroundColor: "#F3F0FF", borderColor: "#9D8FEF44" }}>
          <p className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
            {t("Nuk jeni të sigurt cili event është për ju?", "Not sure which event is for you?")}
          </p>
          <p className="text-zinc-500 text-lg leading-relaxed mb-6 max-w-md mx-auto">
            {t("Na kontaktoni dhe do t'ju ndihmojmë të gjeni programin e duhur sipas nevojave dhe qëllimeve tuaja.", "Contact us and we will help you find the right program according to your needs and goals.")}
          </p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-all" style={{ backgroundColor: "#9D8FEF" }}>
            {t("Na kontaktoni", "Contact us")}
          </Link>
        </div>
      </div>
    </div>
  );
};
