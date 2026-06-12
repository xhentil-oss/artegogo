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
      <div className="relative overflow-hidden min-h-[420px] md:min-h-[560px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/TONI1692.JPG')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-14 md:py-20 w-full">

          {/* Title */}
          <h1 className="font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.12, fontSize: "clamp(1.8rem, 7vw, 3.5rem)" }}>
            Dyert<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>Infinite</span>
          </h1>

          {/* Location */}
          <div className="flex items-center gap-3 mt-4 mb-4">
            <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Playfair Display', serif", fontSize: 17, fontStyle: "italic" }}>
              {t("Prishtinë", "Pristina")}
            </span>
            <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.25)" }} />
            <span style={{ color: "#f9a8d4", fontSize: 16 }}>♡</span>
          </div>

          {/* Date */}
          <div className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 mb-5"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <svg className="w-4 h-4" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth={1.8} viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
            <span className="font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.04em" }}>
              1 – 3 DHJETOR 2025
            </span>
          </div>

          {/* Description */}
          <p className="mb-5 max-w-xs md:max-w-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)", lineHeight: 1.6, fontWeight: 400 }}>
            {t("3 ditë për t'u rikthyer tek vetja, për të krijuar", "3 days to return to yourself, to create the")}{" "}
            <span style={{ color: "#c4b5fd", fontWeight: 600 }}>{t("jetë më të re.", "new life you deserve.")}</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            <a href="/signup"
              className="inline-flex items-center gap-1.5 text-white px-3 py-1.5 text-xs md:px-8 md:py-4 md:text-base rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontWeight: 600 }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              {t("Rezervo Vendin", "Reserve Spot")}
            </a>
          </div>

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
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-3" style={{ backgroundColor: "#eeeaf9", border: "1px solid #c4baf7", color: "#7c3aed" }}>
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border" style={{ backgroundColor: "#EDE9FD", color: "#7c3aed", borderColor: "#C4B5FD" }}>
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 border" style={{ backgroundColor: "#EDE9FD", color: "#7c3aed", borderColor: "#C4B5FD" }}>
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
