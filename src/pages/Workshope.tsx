import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

const days = [
  {
    num: "01",
    titleAL: "Rikthe energjinë tek vetja",
    titleEN: "Reclaim Your Energy",
    descAL: "Bashkë në këtë ditë do të rikthejmë energjinë te vetja. Meditimet dhe shpjegimet do të kenë fokus harmonizimin e zemrës, mendjes dhe të gjithë sistemit nervor. Lirimin dhe pastrimin emocional.",
    descEN: "Together on this day we will reclaim our energy. The meditations and teachings will focus on harmonizing the heart, mind and the entire nervous system — releasing and cleansing emotional blockages.",
    color: "",
  },
  {
    num: "02",
    titleAL: "Ndjeje pasionin për jetën",
    titleEN: "Feel Your Passion for Life",
    descAL: "Në këtë ditë do të rrisim energjinë edhe më tepër. Bashkë do të kemi fokusin në lirimin dhe hapjen e plotë të zemrës, frymëzimin dhe zbulimin e qëllimit tuaj.",
    descEN: "On this day we will raise our energy even higher. Together we will focus on fully releasing and opening the heart, finding inspiration and discovering your true purpose.",
    color: "",
  },
  {
    num: "03",
    titleAL: "Manifesto jetën e ëndrrave",
    titleEN: "Manifest Your Dream Life",
    descAL: "Bashkë do të krijojmë dhe do të vendosim fokusin te manifestimi. Do të kemi shpjegime të avancuara të fushës kuantike, teknika dhe meditime për të harmonizuar energjinë me jetën e re, me trupin e ri.",
    descEN: "Together we will create and set our focus on manifestation. We will explore advanced teachings on the quantum field, techniques and meditations to align your energy with your new life and new self.",
    color: "",
  },
];

const extras = [
  {
    icon: "⚡",
    titleAL: "Matni balancën e qendrave të energjisë",
    titleEN: "Measure the balance of your energy centers",
    descAL: "Kupto se me cilën qendër mund të punosh më tepër dhe ku ke më tepër nevojë për energji.",
    descEN: "Understand which energy center needs the most attention and where you need more energy.",
  },
  {
    icon: "🧠",
    titleAL: "Çliroje dhe balancoje sistemin nervor",
    titleEN: "Release and balance your nervous system",
    descAL: "Nëse duam të krijojmë sukses dhe lumturi në jetën tonë, është e nevojshme të kemi një sistem nervor të çliruar nga emocionet e ulëta dhe të harmonizuar — një sistem nervor që ndihet i balancuar dhe i sigurt. Paraqesim teknikat më të avancuara, të krijuara nga vetë ne dhe të bazuara në njohuri dhe matje shkencore, për të arritur këtë në një kohë të shkurtër dhe në mënyrën më efikase. Mëso të krijosh një jetë të re me një sistem nervor dhe zemër të harmonizuar dhe ndjehu i fuqizuar si kurrë më parë.",
    descEN: "If we want to create success and happiness in our lives, it is essential to have a nervous system freed from low emotions and harmonized — a nervous system that feels balanced and safe. We present the most advanced techniques, created by us and based on scientific knowledge and measurements, to achieve this in a short time and in the most efficient way. Learn to create a new life with a harmonized nervous system and heart, and feel empowered like never before.",
  },
];

export const WorkshopePage = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="relative py-16 md:py-28 px-4 md:px-6 overflow-hidden min-h-[300px] md:min-h-[420px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776948791548-0.jpeg')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/15 text-white border border-white/20">
            {t("Workshope", "Workshops")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {t("Workshope", "Intensive")}{" "}
            <span style={{ color: "#C4B5FD" }}>{t("Intensive", "Workshops")}</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            {t(
              "Takime intensive me teori, praktikë dhe meditime të udhëhequra — në grupe të vogla me vëmendje personale.",
              "Intensive meetings with theory, practice and guided meditations — in small groups with personal attention."
            )}
          </p>
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="border-y border-zinc-100 py-14 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
            {t(
              "Ju mirëpresim në një nga eventet tona më transformuese. Për disa ditë përjetojmë bashkë mrekullinë e krijimit, potencialet e pafund, fuqinë e trupit, mendjes dhe zemrës tonë. Imagjino të jesh me një grup njerëzish në harmoni, në një energji e cila tejkalon të zakonshmen, duke ju hapur mundësitë e jashtëzakonshme për një jetë të re.",
              "We welcome you to one of our most transformative events. For a few days we experience together the miracle of creation, the infinite potentials, the power of body, mind and heart. Imagine being with a group of people in harmony, in an energy that goes beyond the ordinary, opening extraordinary possibilities for a new life."
            )}
          </p>
        </div>
      </section>

      {/* ── Program 3 Days ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-3" style={{ backgroundColor: "#eeeaf9", border: "1px solid #c4baf7", color: "#9D8FEF" }}>
            {t("Programi", "Program")}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
            {t("3 Ditë Transformimi", "3 Days of Transformation")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {days.map((d, i) => (
            <div key={i} className="rounded-2xl border border-zinc-100 bg-white transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-1.5 bg-zinc-900" />
              <div className="p-7 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-white font-bold text-lg mb-5">
                  {d.num}
                </div>
                <h3 className="font-bold text-zinc-800 text-xl mb-3 leading-snug">{t(d.titleAL, d.titleEN)}</h3>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{t(d.descAL, d.descEN)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Extras accordion ── */}
      <section className="border-y border-zinc-100 py-16 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 text-center">
            {t("Çfarë do të mësosh gjithashtu", "What You'll Also Learn")}
          </h2>
          <div className="space-y-3">
            {extras.map((e, i) => (
              <div key={i} className="bg-white rounded-2xl border border-violet-100 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-violet-50/50 transition-colors"
                >
                  <span className="flex-1 font-semibold text-sm leading-relaxed text-zinc-700 md:text-base">{t(e.titleAL, e.titleEN)}</span>
                  <ChevronDown
                    size={18}
                    className={`text-violet-500 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-base text-zinc-500 leading-relaxed border-t border-violet-50 pt-4">
                    {t(e.descAL, e.descEN)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qëndrimi ── */}
      <section className="max-w-3xl mx-auto px-6 py-14 text-center">
        <div className="rounded-2xl border border-zinc-100 p-8" style={{ backgroundColor: "#F9FAFB" }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border" style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
            {t("Qëndrimi", "Accommodation")}
          </span>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">
            {t(
              "Qëndrimi nuk është i përfshirë. Në rast se doni të qëndroni te hoteli ku zhvillohet eventi:",
              "Accommodation is not included. If you wish to stay at the hotel where the event takes place:"
            )}
          </p>
          <p className="text-xs text-zinc-400 font-semibold tracking-widest uppercase">
            {t("Së shpejti", "Coming Soon")}
          </p>
        </div>
      </section>

      {/* ── Testimonials placeholder ── */}
      <section className="border-y border-zinc-100 py-16 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 border" style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
            {t("Vlerësime", "Reviews")}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10">
            {t("Çfarë thonë pjesëmarrësit", "What Participants Say")}
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white rounded-2xl border border-violet-100 px-8 py-10 max-w-lg">
              <p className="text-violet-200 text-4xl mb-3 font-serif">"</p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base italic mb-4">
                {t("Së shpejti do të shfaqen vlerësimet nga pjesëmarrësit tanë.", "Participant reviews coming soon.")}
              </p>
              <p className="text-xs text-zinc-400 font-semibold tracking-widest uppercase">
                {t("Së shpejti", "Coming Soon")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-3xl p-10 text-white text-center" style={{ backgroundColor: "#000000" }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {t("Regjistrohu tani", "Register Now")}
          </h2>
          <p className="text-sm leading-relaxed text-white/70 md:text-base mb-7 max-w-xl mx-auto">
            {t("Na kontaktoni dhe do të gjejmë programin që i përshtatet nevojave tuaja.", "Contact us and we will find the program that fits your needs.")}
          </p>
          <a href="/kontakt" className="inline-block bg-white text-violet-700 font-bold px-8 py-3.5 rounded-xl hover:bg-violet-50 transition-all text-sm leading-relaxed md:text-base">
            {t("Na kontaktoni", "Contact us")}
          </a>
        </div>
      </section>

    </div>
  );
};
