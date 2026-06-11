import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const TrajnimeOnlinePage = () => {
  const { t, lang } = useLanguage();
  const [openMed, setOpenMed] = useState<number | null>(null);

const pillars = [
    {
      emoji: "🧬",
      titleAL: "Biologji",
      titleEN: "Biology",
      descAL:
        "Meditime të avancuara dhe teknika të reja të frymëmarrjes që aktivizojnë trupin, lirojnë fasciat, harmonizojnë strukturën biologjike dhe ndihmojnë në çlirimin e emocioneve të bllokuara. Trupi bëhet i fortë, i lirë, energjik.",
      descEN:
        "Advanced meditations and new breathing techniques that activate the body, release fascia, harmonize biological structure and help release blocked emotions. The body becomes strong, free, energetic.",
    },
    {
      emoji: "🔄",
      titleAL: "Transformim",
      titleEN: "Transformation",
      descAL:
        "Teknikat e zbuluara dhe ushtrimet e reja do të aplikohen së bashku për të krijuar një identitet të ri, plot fuqi, energji, shëndet dhe dashuri. Kjo do të të ndihmojë të transformosh mendimet, emocionet dhe trupin në një nivel të ri jete.",
      descEN:
        "The discovered techniques and new exercises will be applied together to create a new identity full of power, energy, health and love. This will help you transform your thoughts, emotions and body to a new level of life.",
    },
    {
      emoji: "⚛️",
      titleAL: "Fizikë Kuantike",
      titleEN: "Quantum Physics",
      descAL:
        "Teknika të avancuara nga fizika kuantike shkencore për manifestim. Do të mësosh si të bëhesh një observues koherent në meditim dhe si ta mbash këtë energji në trup për të manifestuar shpejt dhe me stabilitet.",
      descEN:
        "Advanced techniques from scientific quantum physics for manifestation. You will learn how to become a coherent observer in meditation and how to keep this energy in the body to manifest quickly and with stability.",
    },
  ];

  const programItems = [
    {
      icon: "🎥",
      titleAL: "9 seanca live me Zoom",
      titleEN: "9 live sessions via Zoom",
      descAL: "Në orën 21:00 — teori dhe meditim (ruhet për 6 muaj)",
      descEN: "At 21:00 — theory and meditation (recorded for 6 months)",
    },
    {
      icon: "🙋",
      titleAL: "7 seanca pyetje-përgjigje",
      titleEN: "7 Q&A sessions",
      descAL: "Në orën 19:00 (nuk ruhet)",
      descEN: "At 19:00 (not recorded)",
    },
    {
      icon: "📚",
      titleAL: "Leksione shtesë teorike",
      titleEN: "Additional theoretical lessons",
      descAL: "Të regjistruara në platformë — akses 6 muaj",
      descEN: "Recorded on the platform — 6 months access",
    },
    {
      icon: "💬",
      titleAL: "Kontakt i drejtpërdrejtë",
      titleEN: "Direct contact",
      descAL: "Me Dr. Artemisën dhe Dr. Marvinin personalisht",
      descEN: "With Dr. Artemisa and Dr. Marvin personally",
    },
    {
      icon: "📱",
      titleAL: "Ushtrime ditore",
      titleEN: "Daily exercises",
      descAL: "Çdo ditë ushtrime të reja në një grup privat në Telegram",
      descEN: "New exercises every day in a private Telegram group",
    },
  ];

  const meditations = [
    {
      titleAL: "Harmonizim i 7 qendrave energjitike & sistemit endokrin",
      titleEN: "Harmonization of 7 energy centers & endocrine system",
      descAL:
        "Harmonizim i plotë i 7 qendrave kryesore dhe sistemit endokrin për të liruar trupin, për ta ushqyer me energji të re dhe për të çliruar emocionet e bllokuara.",
      descEN:
        "Full harmonization of the 7 main centers and the endocrine system to free the body, nourish it with new energy and release blocked emotions.",
    },
    {
      titleAL: "Harmonizim zemër–mendje për koherencë të plotë",
      titleEN: "Heart–mind harmonization for full coherence",
      descAL:
        "Meditim i thellë për të sinkronizuar mendjen dhe zemrën, duke rritur fuqinë e manifestimit dhe duke të lidhur me potenciale pafund.",
      descEN:
        "Deep meditation to synchronize mind and heart, increasing the power of manifestation and connecting you with infinite potential.",
    },
    {
      titleAL: "Aktivizimi i nervit vagus & fuqia shëruese e trupit",
      titleEN: "Vagus nerve activation & body&#39;s healing power",
      descAL:
        "Teknika inovative për të liruar trupin nga ankthi, depresioni dhe stresi; për të rigjeneruar sistemin nervor dhe për të rikthyer ekuilibrin biologjik.",
      descEN:
        "Innovative techniques to free the body from anxiety, depression and stress; to regenerate the nervous system and restore biological balance.",
    },
    {
      titleAL: "Meditime për lidhjen me veten e vërtetë",
      titleEN: "Meditations for connection with the true self",
      descAL:
        "Udhëtime të brendshme që krijojnë një identitet të ri me mendime dhe ndjenja të fuqishme, duke krijuar një jetë pa limite.",
      descEN:
        "Inner journeys that create a new identity with powerful thoughts and feelings, creating a life without limits.",
    },
  ];

  const practiceItems = [
    {
      titleAL: "Ushtrime të avancuara me frymëmarrje dinamike",
      titleEN: "Advanced exercises with dynamic breathing",
      descAL:
        "Praktika të përditshme për të çliruar bllokime emocionale, për të rritur energjinë jetësore dhe për të aktivizuar trupin në nivel qelizor.",
      descEN:
        "Daily practices to release emotional blockages, increase vital energy and activate the body at a cellular level.",
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
      imgLeft: false,
    },
    {
      titleAL: "Meditime të fuqishme të manifestimit",
      titleEN: "Powerful manifestation meditations",
      descAL:
        "Teknika që ndihmojnë në krijimin e realiteteve të reja për shëndet, marrëdhënie, karrierë dhe bollëk.",
      descEN:
        "Techniques that help create new realities for health, relationships, career and abundance.",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
      imgLeft: true,
    },
    {
      titleAL: "Bonus special: Meditim në ecje",
      titleEN: "Special bonus: Walking meditation",
      descAL:
        "Një praktikë unike që të mëson si të mbash gjendjen e lartë meditative edhe gjatë ditës, duke ecur në natyrë si vetja jote e re, i/e pandikuar nga mjedisi i jashtëm.",
      descEN:
        "A unique practice that teaches you how to maintain the high meditative state throughout the day, walking in nature as your new self, unaffected by the external environment.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      imgLeft: false,
    },
  ];

  const results = [
    { al: "Trup i fortë, i lirë dhe energjik", en: "Strong, free and energetic body" },
    { al: "Lirimi i emocioneve të bllokuara", en: "Release of blocked emotions" },
    { al: "Identitet i ri — plot fuqi dhe dashuri", en: "New identity — full of power and love" },
    { al: "Koherencë zemër-mendje e plotë", en: "Full heart-mind coherence" },
    { al: "Aftësi për manifestim të shpejtë", en: "Ability for fast manifestation" },
    { al: "Sistem nervor i rigjeneruar", en: "Regenerated nervous system" },
    { al: "Çlirim nga ankthia, depresioni dhe stresi", en: "Freedom from anxiety, depression and stress" },
    { al: "Jetë pa limite", en: "A life without limits" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden min-h-[280px] md:min-h-[520px] flex items-center"
        style={{ background: "linear-gradient(135deg, #0a0015 0%, #1a0535 50%, #0d0228 100%)" }}>
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/TONI1692.JPG')", opacity: 0.85 }} />
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative max-w-5xl mx-auto px-5 py-8 md:py-14 w-full" style={{ fontFamily: "'Inter', sans-serif" }}>
          {/* Main title */}
          <h1 className="font-bold text-white leading-tight mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.12, fontSize: "clamp(1.8rem, 7vw, 3.5rem)" }}>
            {lang === "al" ? <>Meditime të<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>Avancuara</span></> : <>Advanced<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>Meditations</span></>}
          </h1>

          {/* Subtitle */}
          <p className="font-semibold text-white mb-2 leading-snug" style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)", letterSpacing: "0.05em" }}>
            {lang === "al" ? <>E dhe për fillestarë<br />edhe për të avancuar</> : <>For beginners<br />and advanced alike</>}
          </p>

          {/* Description */}
          <p className="mb-5 max-w-xs md:max-w-sm" style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)", lineHeight: 1.6, fontWeight: 400 }}>
            {t("Një udhëtim i thellë transformimi që punon në trup, mendje dhe shpirt.", "A deep transformational journey that works on body, mind and spirit.")}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            <a href="/signup"
              className="inline-flex items-center gap-1.5 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontWeight: 600, fontSize: 16 }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              {t("Regjistrohu Tani", "Register Now")}
            </a>
          </div>
        </div>
      </div>

      {/* ── 3 SHTYLLA TRANSFORMIMI ── */}
      <section style={{ background: "linear-gradient(180deg, #080014 0%, #130028 100%)" }} className="py-10 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 4vw, 2rem)" }}>
              {t("3 SHTYLLA TRANSFORMIMI", "3 PILLARS OF TRANSFORMATION")}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
              {t("Një qasje e integruar për trupin, emocionet dhe mendjen.", "An integrated approach for body, emotions and mind.")}
            </p>
          </div>
          <div className="divide-y divide-white/10">
            {[
              {
                num: "01",
                titleAL: "TRANSFORMIM BIOLOGJIK",
                titleEN: "BIOLOGICAL TRANSFORMATION",
                descAL: pillars[0].descAL,
                descEN: pillars[0].descEN,
                img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
              },
              {
                num: "02",
                titleAL: "TRANSFORMIM EMOCIONAL",
                titleEN: "EMOTIONAL TRANSFORMATION",
                descAL: pillars[1].descAL,
                descEN: pillars[1].descEN,
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
              },
              {
                num: "03",
                titleAL: "TRANSFORMIM FIZIK, MENTAL",
                titleEN: "PHYSICAL & MENTAL TRANSFORMATION",
                descAL: pillars[2].descAL,
                descEN: pillars[2].descEN,
                img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&q=80",
              },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8 py-6 md:py-8">
                <div className="w-28 h-20 md:w-44 md:h-28 rounded-xl overflow-hidden shrink-0">
                  <img src={p.img} alt={p.titleAL} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 md:gap-3 mb-1.5">
                    <span className="font-bold shrink-0" style={{ color: "rgba(196,181,253,0.4)", fontSize: "clamp(1rem, 3vw, 1.4rem)", fontFamily: "'Playfair Display', serif" }}>{p.num}</span>
                    <h3 className="font-bold text-white tracking-wide" style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}>{t(p.titleAL, p.titleEN)}</h3>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)", lineHeight: 1.6 }}>
                    {t(p.descAL, p.descEN)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO / DESCRIPTION ── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: "#9D8FEF" }}>
              {t("Rreth programit", "About the program")}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 leading-snug">
              {t("Shkenca e Transformimit me Meditim", "The Science of Transformation through Meditation")}
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-zinc-700 md:text-base">
              <p>
                {t(
                  "Harmonizim Kuantik është programi më i plotë 6-javor online ku biologjia, transformimi personal dhe fizika kuantike bashkohen për të krijuar ndryshim real dhe të qëndrueshëm.",
                  "Harmonizim Kuantik is the most complete 6-week online program where biology, personal transformation and quantum physics come together to create real and lasting change."
                )}
              </p>
              <p>
                {t(
                  "Do të jesh në kontakt të vazhdueshëm me Dr. Artemisën dhe Dr. Marvinin personalisht gjatë gjithë 6 javëve. Çdo ditë ushtrime të reja, meditime të avancuara dhe mbështetje direkte.",
                  "You will be in continuous contact with Dr. Artemisa and Dr. Marvin personally throughout all 6 weeks. New exercises every day, advanced meditations and direct support."
                )}
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-100 p-8" style={{ backgroundColor: "#F9FAFB" }}>
            <h3 className="text-base font-bold text-zinc-800 mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full text-white text-xs flex items-center justify-center" style={{ backgroundColor: "#9D8FEF" }}>?</span>
              {t("Çfarë do të mësosh?", "What will you learn?")}
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
              <p>
                {t(
                  "Do të mësosh teknika të avancuara meditimi, frymëmarrjeje dhe fizike kuantike për të aktivizuar potencialin e brendshëm.",
                  "You will learn advanced techniques of meditation, breathing and quantum physics to activate your inner potential."
                )}
              </p>
              <p>
                {t(
                  "Çdo seancë live ndërthur teorinë shkencore me praktikën — kështu që ndryshimi ndihet menjëherë, jo vetëm kuptohet.",
                  "Every live session combines scientific theory with practice — so change is felt immediately, not just understood."
                )}
              </p>
              <p className="font-medium" style={{ color: "#9D8FEF" }}>
                {t("Transformim real — nga brenda jashtë.", "Real transformation — from the inside out.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM 6 WEEKS ── */}
      <section id="programi" className="max-w-4xl mx-auto px-6 py-16">
        <span className="text-xs font-bold tracking-widest uppercase mb-3 block text-center" style={{ color: "#9D8FEF" }}>
          {t("Struktura", "Structure")}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10 text-center">
          {t("Programi 6 Javë", "6-Week Program")}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {programItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-violet-100 p-5" style={{ backgroundColor: "#F9FAFB" }}>
              <div>
                <p className="font-bold text-zinc-700 text-sm leading-relaxed md:text-base mb-1">{t(item.titleAL, item.titleEN)}</p>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{t(item.descAL, item.descEN)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight banner */}
        <div className="rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center gap-6" style={{ backgroundColor: "#000000" }}>
          <div>
            <p className="font-extrabold text-lg mb-1">{t("Programi i Ri — Kontakt i Drejtpërdrejtë", "New Program — Direct Contact")}</p>
            <p className="text-sm leading-relaxed text-white/70 md:text-base">
              {t(
                "Do të jesh në kontakt të vazhdueshëm me Dr. Artemisën dhe Dr. Marvinin personalisht gjatë gjithë 6 javëve.",
                "You will be in continuous contact with Dr. Artemisa and Dr. Marvin personally throughout all 6 weeks."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ── ADVANCED MEDITATIONS (accordion) ── */}
      <section className="border-y border-zinc-100 py-16 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase mb-3 block text-center" style={{ color: "#9D8FEF" }}>
            {t("Praktika", "Practice")}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10 text-center">
            {t("Meditime të Avancuara", "Advanced Meditations")}
          </h2>
          <div className="space-y-3">
            {meditations.map((m, i) => (
              <div key={i} className="rounded-xl border border-zinc-100 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenMed(openMed === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0" style={{ backgroundColor: "#9D8FEF" }}>{i + 1}</span>
                    <span className="font-semibold text-zinc-700 text-sm leading-relaxed md:text-base">{t(m.titleAL, m.titleEN)}</span>
                  </div>
                  <span className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-transform ${openMed === i ? "rotate-45" : ""}`} style={{ borderColor: "#9D8FEF", color: "#9D8FEF" }}>+</span>
                </button>
                {openMed === i && (
                  <div className="px-6 pb-5 pl-16">
                    <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{t(m.descAL, m.descEN)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRACTICE ITEMS (alternating) ── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <span className="text-xs font-bold tracking-widest uppercase mb-3 block text-center" style={{ color: "#9D8FEF" }}>
          {t("Çfarë do të praktikosh", "What you will practice")}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-14 text-center">
          {t("Praktika ditore & teknika speciale", "Daily practices & special techniques")}
        </h2>
        <div className="space-y-16">
          {practiceItems.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col ${item.imgLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
            >
              {/* Text side */}
              <div className="flex-1">
                <h3 className="text-sm leading-relaxed font-bold text-zinc-700 md:text-base mb-3">
                  {t(item.titleAL, item.titleEN)}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                  {t(item.descAL, item.descEN)}
                </p>
              </div>
              {/* Image side */}
              <div className="flex-1 w-full">
                <img
                  src={item.img}
                  alt={t(item.titleAL, item.titleEN)}
                  className="w-full h-56 md:h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT YOU GAIN ── */}
      <section className="border-y border-zinc-100 py-16 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-widest uppercase mb-3 block text-center" style={{ color: "#9D8FEF" }}>
          {t("Rezultati", "Result")}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10 text-center">
          {t("Çfarë do të fitosh pas 6 javëve", "What you gain after 6 weeks")}
        </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {results.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-violet-100 p-4">
                <span className="mt-0.5 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0" style={{ backgroundColor: "#9D8FEF" }}>✓</span>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{t(item.al, item.en)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
          {t("Gati të fillosh transformimin?", "Ready to start your transformation?")}
        </h2>
        <p className="text-sm leading-relaxed md:text-base mb-8" style={{ color: "#3f3f46" }}>
          {t(
            "Bashkohu me trajnimin 6-javor dhe transformo jetën tënde me shkencë dhe meditim.",
            "Join the 6-week training and transform your life with science and meditation."
          )}
        </p>
        <a
          href="/kontakt"
          className="inline-flex items-center gap-3 text-white font-bold px-10 py-4 rounded-full hover:scale-105 transition-all"
          style={{ backgroundColor: "#9D8FEF" }}
        >
          {t("Regjistrohu tani", "Register now")} →
        </a>
      </section>

    </div>
  );
};
