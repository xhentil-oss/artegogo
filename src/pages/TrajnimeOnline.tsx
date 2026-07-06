import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export const TrajnimeOnlinePage = () => {
  const { t, lang } = useLanguage();
  const { user } = useAuth();
  const [openMed, setOpenMed] = useState<number | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const QUOTES = [
    { quoteAl: "Kam qarë dhe jam ndier i lirë. Dicka brenda meje u çlirua.", quoteEn: "I cried and felt free. Something inside me was released.", nameAl: "Ardit", nameEn: "Ardit", locationAl: "Tiranë, Shqipëri", locationEn: "Tirana, Albania", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" },
    { quoteAl: "Kam fjetur i qetë për herë të parë pas shumë vitesh. Ishte magjike.", quoteEn: "I slept peacefully for the first time in many years. It was magical.", nameAl: "Elira", nameEn: "Elira", locationAl: "Prishtinë, Kosovë", locationEn: "Pristina, Kosovo", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" },
    { quoteAl: "Ndjeva trupin tim të rilindej me zemrën dhe frymën. Pa fjalë.", quoteEn: "I felt my body reborn with heart and breath. Beyond words.", nameAl: "Besnik", nameEn: "Besnik", locationAl: "Shkodër, Shqipëri", locationEn: "Shkoder, Albania", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80" },
  ];

  const changeQuote = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setQuoteIndex(next); setAnimating(false); }, 300);
  };

  const visibleQuotes = [QUOTES[quoteIndex % QUOTES.length], QUOTES[(quoteIndex + 1) % QUOTES.length]];

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
      titleAL: "Meditime për Lidhjen me Veten e Vërtetë",
      titleEN: "Meditations for Connection with the True Self",
      descAL:
        "Udhëtime të brendshme që krijojnë një identitet të ri me mendime dhe ndjenja të fuqishme, duke krijuar një jetë pa limite.",
      descEN:
        "Inner journeys that create a new identity with powerful thoughts and feelings, creating a life without limits.",
      img: "/img/TONI2472.JPG",
      imgLeft: false,
    },
    {
      titleAL: "Riprogramimi Kuantik",
      titleEN: "Quantum Reprogramming",
      descAL:
        "Teknikat e zbuluara dhe ushtrimet e reja do të aplikohen bashku për të krijuar një identitet të ri, plot fuqi, energji, shëndet dhe dashuri.",
      descEN:
        "The discovered techniques and new exercises will be applied together to create a new identity full of power, energy, health and love.",
      img: "/img/TONI2629.JPG",
      imgLeft: true,
    },
    {
      titleAL: "Shërimi i Fëmijës së Brendshëm",
      titleEN: "Inner Child Healing",
      descAL:
        "Meditime të thella për të shëruar plagët e fëmijërisë, duke rivendosur ndjenjën e sigurisë, dashurisë dhe lirisë emocionale.",
      descEN:
        "Deep meditations to heal childhood wounds, restoring the sense of safety, love and emotional freedom.",
      img: "/img/TONI2879.JPG",
      imgLeft: false,
    },
    {
      titleAL: "Ushtrime të Avancuara me Frymëmarrje Dinamike",
      titleEN: "Advanced Exercises with Dynamic Breathing",
      descAL:
        "Praktika të përditshme për të çliruar bllokime emocionale, për të rritur energjinë jetësore dhe për të aktivizuar trupin në nivel qelizor.",
      descEN:
        "Daily practices to release emotional blockages, increase vital energy and activate the body at a cellular level.",
      img: "/img/TONI1666.JPG",
      imgLeft: true,
    },
    {
      titleAL: "Meditime të Fuqishme të Manifestimit",
      titleEN: "Powerful Manifestation Meditations",
      descAL:
        "Teknika që ndihmojnë në krijimin e realiteteve të reja për shëndet, marrëdhënie, karrierë dhe bollëk.",
      descEN:
        "Techniques that help create new realities for health, relationships, career and abundance.",
      img: "/img/TONI2743.JPG",
      imgLeft: false,
    },
    {
      titleAL: "Bonus Special: Meditim në Ecje",
      titleEN: "Special Bonus: Walking Meditation",
      descAL:
        "Një praktikë unike që të mëson si të mbash gjendjen e lartë meditative edhe gjatë ditës, duke ecur në natyrë si vetja jote e re, i/e pandikuar nga mjedisi i jashtëm.",
      descEN:
        "A unique practice that teaches you how to maintain the high meditative state throughout the day, walking in nature as your new self, unaffected by the external environment.",
      img: "/img/TONI1029 (1).JPG",
      imgLeft: true,
    },
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
          <h1 className="hero-title-mobile md:hidden font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.12 }}>
            {lang === "al" ? <>Meditime të<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>Avancuara</span></> : <>Advanced<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>Meditations</span></>}
          </h1>
          <h1 className="hidden md:block font-bold text-white leading-tight mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.12, fontSize: "clamp(1.8rem, 7vw, 3.5rem)" }}>
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
            {user ? (
              <>
                <div className="mb-3 flex items-center gap-2 px-3 py-1.5 rounded-xl" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span className="text-white text-xs font-semibold">{t(`Mirë se vjen, ${user.firstName}! Ke akses të plotë.`, `Welcome, ${user.firstName}! You have full access.`)}</span>
                </div>
                <Link to="/eventet/trajnime-online/platforma"
                  className="inline-flex items-center gap-1.5 text-white px-3 py-1.5 text-xs md:px-8 md:py-4 md:text-base rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
                  style={{ backgroundColor: "#4e29c5", fontWeight: 600 }}>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
                  </svg>
                  {t("Hyr në Platformë", "Access Platform")}
                </Link>
              </>
            ) : (
              <Link to="/signup"
                className="inline-flex items-center gap-1.5 text-white px-3 py-1.5 text-xs md:px-8 md:py-4 md:text-base rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
                style={{ backgroundColor: "#4e29c5", fontWeight: 600 }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
                {t("Regjistrohu Tani", "Register Now")}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ── 3 SHTYLLA TRANSFORMIMI ── */}
      <section style={{ background: "#F4F4F5" }} className="py-10 md:py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="font-bold text-zinc-900 mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 4vw, 2rem)" }}>
              {t("3 Shtylla Transformimi", "3 Pillars of Transformation")}
            </h2>
            <p style={{ color: "#71717a", fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
              {t("Një qasje e integruar për trupin, emocionet dhe mendjen.", "An integrated approach for body, emotions and mind.")}
            </p>
          </div>
        <div className="space-y-3">
          {[
            {
              num: "01",
              titleAL: "TRANSFORMIM BIOLOGJIK",
              titleEN: "BIOLOGICAL TRANSFORMATION",
              descAL: pillars[0].descAL,
              descEN: pillars[0].descEN,
              img: "/img/TONI0886.JPG",
            },
            {
              num: "02",
              titleAL: "TRANSFORMIM EMOCIONAL",
              titleEN: "EMOTIONAL TRANSFORMATION",
              descAL: pillars[1].descAL,
              descEN: pillars[1].descEN,
              img: "/img/TONI1379.JPG",
            },
            {
              num: "03",
              titleAL: "TRANSFORMIM FIZIK, MENTAL",
              titleEN: "PHYSICAL, MENTAL TRANSFORMATION",
              descAL: pillars[2].descAL,
              descEN: pillars[2].descEN,
              img: "/img/TONI2462.JPG",
            },
          ].map((p, i) => (
            <div key={i} className="flex items-stretch rounded-2xl overflow-hidden"
              style={{ background: "#ffffff", border: "1px solid rgba(124,58,237,0.12)" }}>
              {/* Image */}
              <div className="relative shrink-0" style={{ width: "38%" }}>
                <img src={p.img} alt={p.titleAL} className="w-full h-full object-cover" style={{ minHeight: 130 }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(13,1,32,0.55) 100%)" }} />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ background: "#7c3aed", fontSize: 12 }}>
                  {p.num}
                </div>
              </div>
              {/* Text */}
              <div className="flex-1 px-4 py-4 md:px-6 md:py-5 flex flex-col justify-center">
                <h3 className="font-bold uppercase mb-2"
                  style={{ color: "#7c3aed", fontSize: 16, letterSpacing: "0.05em", lineHeight: 1.2 }}>
                  {t(p.titleAL, p.titleEN)}
                </h3>
                <p style={{ color: "#52525b", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", lineHeight: 1.6 }}>
                  {t(p.descAL, p.descEN)}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ── PROGRAM HIGHLIGHTS ── */}
      <section className="py-8 md:py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" style={{ gridAutoRows: "1fr" }}>
          {[
            {
              badge: "LIVE",
              badgeBg: "#7c3aed",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
              ),
              titleAL: "9 Sesione Live",
              titleEN: "9 Live Sessions",
              subAL: "në Zoom",
              subEN: "via Zoom",
            },
            {
              badge: null,
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              ),
              titleAL: "Ushtrime Ditore",
              titleEN: "Daily Exercises",
              subAL: "dhe praktika të guiduara",
              subEN: "and guided practices",
            },
            {
              badge: null,
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
                </svg>
              ),
              titleAL: "Grup Privat",
              titleEN: "Private Group",
              subAL: "në Telegram",
              subEN: "on Telegram",
            },
            {
              badge: "24/7",
              badgeBg: "#059669",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              ),
              titleAL: "Akses 24/7",
              titleEN: "24/7 Access",
              subAL: "në platformë",
              subEN: "on the platform",
            },
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center gap-2 bg-white rounded-2xl px-3 py-5 md:px-5 md:py-6 h-full"
              style={{ border: "1px solid rgba(124,58,237,0.15)", boxShadow: "0 2px 12px rgba(124,58,237,0.06)" }}>
              {item.badge && (
                <span className="absolute top-2 left-2 text-white font-bold rounded px-1.5 py-0.5"
                  style={{ fontSize: 9, backgroundColor: item.badgeBg, letterSpacing: "0.05em" }}>
                  {item.badge}
                </span>
              )}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.08)" }}>
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-zinc-800" style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
                  {t(item.titleAL, item.titleEN)}
                </p>
                <p style={{ color: "#71717a", fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)" }}>
                  {t(item.subAL, item.subEN)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMI & ORARET ── */}
      <section style={{ background: "#F4F4F5" }} className="py-10 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-center font-bold text-zinc-900 mb-8 md:mb-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 4vw, 2rem)" }}>
            {t("Programi dhe Oraret", "Program and Schedule")}
          </h2>

          {/* Program rows */}
          <div className="space-y-3 mb-8">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                  </svg>
                ),
                titleAL: "9 Sesione Live në Zoom",
                titleEN: "9 Live Sessions on Zoom",
                descAL: "Nga ora 21:00 — teori dhe meditim (regjistrohet, akses 6 muaj)",
                descEN: "From 21:00 — theory and meditation (recorded, 6 months access)",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                ),
                titleAL: "7 Seanca Pyetje-Përgjigje",
                titleEN: "7 Q&A Sessions",
                descAL: "Në orën 19:00 (nuk regjistrohet)",
                descEN: "At 19:00 (not recorded)",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="#7c3aed" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                ),
                titleAL: "Plus Leksione Shtesë Teorike",
                titleEN: "Plus Extra Theoretical Lessons",
                descAL: "Të regjistruara në platformë — akses 24/7 për 6 muaj",
                descEN: "Recorded on the platform — 24/7 access for 6 months",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white"
                style={{ border: "1px solid rgba(124,58,237,0.15)", boxShadow: "0 2px 8px rgba(124,58,237,0.05)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(124,58,237,0.08)" }}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-zinc-800" style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
                    {t(item.titleAL, item.titleEN)}
                  </p>
                  <p style={{ color: "#71717a", fontSize: "clamp(0.65rem, 1.5vw, 0.78rem)" }}>
                    {t(item.descAL, item.descEN)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Schedule */}
          <div className="rounded-2xl p-4 md:p-5 mb-8 bg-white"
            style={{ border: "1px solid rgba(124,58,237,0.15)", boxShadow: "0 2px 8px rgba(124,58,237,0.05)" }}>
            <p className="font-bold text-zinc-800 mb-3 flex items-center gap-2" style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
              <svg className="w-4 h-4" fill="none" stroke="#7c3aed" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {t("Orari i Takimeve (Zoom)", "Meeting Schedule (Zoom)")}
            </p>
            <div className="space-y-2">
              {[
                { labelAL: "Janar–Shkurt", labelEN: "January–February", dates: "17.01 · 21.01 · 24.01 · 28.01 · 31.01 · 04.02 · 07.02 · 21.02 · 24.02", time: "21:00" },
                { labelAL: "Korrik", labelEN: "July", dates: "02 · 09 · 16 · 19 · 23", time: "21:00 / 19:00" },
              ].map((row, i) => (
                <div key={i} className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-zinc-400 shrink-0" style={{ fontSize: 16, minWidth: 110 }}>{t(row.labelAL, row.labelEN)}</span>
                  <span className="font-bold shrink-0" style={{ color: "#7c3aed", fontSize: 16 }}>{row.time}</span>
                  <span style={{ color: "#71717a", fontSize: 16 }}>{row.dates}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing CTA */}
          <div className="rounded-2xl px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#ede9fe] md:bg-[#18181b]">
            <div className="text-center sm:text-left">
              <p className="text-violet-700 md:text-white/55" style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)", letterSpacing: "0.05em" }}>
                {t("INVESTO NË VETEN TËNDE. TRANSFORMIMI YT FILLON KËTU.", "INVEST IN YOURSELF. YOUR TRANSFORMATION STARTS HERE.")}
              </p>
              <p className="font-bold text-violet-900 md:text-white" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", lineHeight: 1.1 }}>320€</p>
            </div>
            {user ? (
              <Link to="/eventet/trajnime-online/platforma"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shrink-0"
                style={{ backgroundColor: "#7c3aed", fontSize: 14 }}>
                {t("Hyr në Platformë →", "Access Platform →")}
              </Link>
            ) : (
              <Link to="/signup"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shrink-0"
                style={{ backgroundColor: "#7c3aed", fontSize: 14 }}>
                {t("Regjistrohu Tani", "Register Now")}
              </Link>
            )}
          </div>

          {/* Stats row */}
          <div className="mt-6 rounded-2xl bg-white grid grid-cols-2 md:grid-cols-4 divide-zinc-100"
            style={{ border: "1px solid rgba(124,58,237,0.12)", boxShadow: "0 2px 12px rgba(124,58,237,0.06)", gap: "1px", background: "rgba(124,58,237,0.08)" }}>
            {[
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="#7c3aed" strokeWidth={1.4} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                valueAL: "1000+", valueEN: "1000+", labelAL: "Pjesëmarrës të transformuar", labelEN: "Transformed participants",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="#7c3aed" strokeWidth={1.4} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                valueAL: "50+", valueEN: "50+", labelAL: "Orë trajnimi online", labelEN: "Training hours online",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="#7c3aed" strokeWidth={1.4} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
                valueAL: "6", valueEN: "6", labelAL: "Java transformimi i plotë", labelEN: "Full weeks of transformation",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="#7c3aed" strokeWidth={1.4} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
                valueAL: "9", valueEN: "9", labelAL: "Sesione live me specialistë", labelEN: "Live sessions with specialists",
              },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-4 bg-white">
                {s.icon}
                <div>
                  <p className="font-bold leading-none" style={{ color: "#7c3aed", fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>{t(s.valueAL, s.valueEN)}</p>
                  <p className="font-medium leading-snug mt-0.5" style={{ color: "#3f3f46", fontSize: 14 }}>{t(s.labelAL, s.labelEN)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UDHËTIMI 6 JAVË ── */}
      <section style={{ background: "#ffffff" }} className="pt-3 pb-10 md:pt-12 md:pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 justify-center mt-3 md:mt-0 mb-3 md:mb-12">
            <div className="flex-1 h-px max-w-20" style={{ background: "linear-gradient(to right, transparent, #7c3aed)" }} />
            <p className="font-bold text-center whitespace-nowrap" style={{ color: "#7c3aed", fontSize: "clamp(0.65rem, 2vw, 0.8rem)", letterSpacing: "0.15em" }}>
              {t("UDHËTIMI YT TRANSFORMUES – 6 JAVË", "YOUR TRANSFORMATIVE JOURNEY – 6 WEEKS")}
            </p>
            <div className="flex-1 h-px max-w-20" style={{ background: "linear-gradient(to left, transparent, #7c3aed)" }} />
          </div>

          {/* 3x2 grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              {
                titleAL: "Lidhja me Veten e Vërtetë",
                titleEN: "Connection with True Self",
                descAL: "Zgjoje vetëdijen dhe fillo transformimin tënd të brendshëm.",
                descEN: "Awaken consciousness and begin inner transformation.",
                img: "/img/TONI0877.JPG",
              },
              {
                titleAL: "Riprogramimi Emocional",
                titleEN: "Emotional Reprogramming",
                descAL: "Çliro bllokimet emocionale dhe rikodo besimet.",
                descEN: "Release emotional blockages and recode beliefs.",
                img: "/img/TONI0935.JPG",
              },
              {
                titleAL: "Heqja e Brendshme",
                titleEN: "Inner Healing",
                descAL: "Shëro plagët e së shkuarës dhe ndjenjën e sigurisë të brendshme.",
                descEN: "Heal past wounds and restore inner safety.",
                img: "/img/TONI1042.JPG",
              },
              {
                titleAL: "Koherenca Zemër–Mendje",
                titleEN: "Heart–Mind Coherence",
                descAL: "Sinkronizo zemrën dhe mendjen për krijimin e energjisë së dëshiruar.",
                descEN: "Synchronize heart and mind to create desired energy.",
                img: "/img/TONI1503.JPG",
              },
              {
                titleAL: "Nervi Vagus & Energjia",
                titleEN: "Vagus Nerve & Energy",
                descAL: "Aktivizo sistemin nervor, rrit energjinë dhe qetësinë e brendshme.",
                descEN: "Activate the nervous system, increase energy and inner calm.",
                img: "/img/TONI1866.JPG",
              },
              {
                titleAL: "Manifestimi & Shpirtërorja",
                titleEN: "Manifestation & Spirituality",
                descAL: "Krijo identitetin e ri dhe manifesto jetën që dëshiron me lehtësi.",
                descEN: "Create your new identity and manifest the life you desire.",
                img: "/img/TONI2719.JPG",
              },
            ].map((w, i) => (
              <div key={i} className="relative bg-white rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(124,58,237,0.12)", boxShadow: "0 2px 12px rgba(124,58,237,0.06)" }}>
                {/* Number badge */}
                <div className="absolute top-2.5 left-2.5 z-10 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ background: "#7c3aed", fontSize: 12 }}>
                  {i + 1}
                </div>
                {/* Image */}
                <div className="w-full h-28 md:h-40 overflow-hidden">
                  <img src={w.img} alt={w.titleAL} className="w-full h-full object-cover" />
                </div>
                {/* Content */}
                <div className="p-3 text-center">
                  <p className="font-bold uppercase mb-1" style={{ color: "#7c3aed", fontSize: 13, letterSpacing: "0.05em", lineHeight: 1.3 }}>
                    {t(w.titleAL, w.titleEN)}
                  </p>
                  <p style={{ color: "#52525b", fontSize: 16, lineHeight: 1.5 }}>
                    {t(w.descAL, w.descEN)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÇFARË PËRFSHIN PROGRAMI ── */}
      <section style={{ background: "#F4F4F5" }} className="pt-3 pb-10 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-center mt-3 md:mt-0 mb-10 md:mb-8"
            style={{ color: "#18181b", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 4vw, 2rem)" }}>
            {t("Çfarë Përfshin Programi?", "What Does the Program Include?")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-4 md:mt-0">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                  </svg>
                ),
                titleAL: "9 Sesione Live në Zoom",
                titleEN: "9 Live Sessions on Zoom",
                descAL: "Nga ora 21:00 me teori dhe meditim (çdo javë).",
                descEN: "From 21:00 with theory and meditation (every week).",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12l2 2 4-4"/>
                  </svg>
                ),
                titleAL: "Ushtrime Ditore dhe Praktika",
                titleEN: "Daily Exercises and Practices",
                descAL: "Për të integruar mësimet në jetën tënde.",
                descEN: "To integrate the lessons into your daily life.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
                  </svg>
                ),
                titleAL: "Grup Privat në Telegram",
                titleEN: "Private Group on Telegram",
                descAL: "Mbështetje, motivim dhe komunitet.",
                descEN: "Support, motivation and community.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                ),
                titleAL: "Akses 24/7 në Platformë",
                titleEN: "24/7 Access to Platform",
                descAL: "Me materiale, meditime dhe leksione.",
                descEN: "With materials, meditations and lessons.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#7c3aed" }}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold uppercase mb-1" style={{ color: "#7c3aed", fontSize: 12, letterSpacing: "0.05em", lineHeight: 1.3 }}>
                    {t(item.titleAL, item.titleEN)}
                  </p>
                  <p style={{ color: "#52525b", fontSize: 14, lineHeight: 1.5 }}>
                    {t(item.descAL, item.descEN)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── PRACTICE ITEMS (alternating) ── */}
      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-zinc-900 text-center mb-10 md:mb-14"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 4vw, 2rem)", marginBottom: 56 }}>
            {t("Çfarë do të Praktikosh", "What You Will Practice")}
          </h2>
          <div className="space-y-6 md:space-y-10">
            {practiceItems.map((item, i) => (
              <div key={i} className={`flex flex-col ${item.imgLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-10 items-center`}>
                <div className="flex-1">
                  <h3 className="font-bold text-zinc-800 mt-3 md:mt-0 mb-3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontFamily: "'Inter', sans-serif" }}>
                    {t(item.titleAL, item.titleEN)}
                  </h3>
                  <p className="mt-3 md:mt-0" style={{ color: "#52525b", fontSize: 16, lineHeight: 1.7 }}>
                    {t(item.descAL, item.descEN)}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <img src={item.img} alt={t(item.titleAL, item.titleEN)}
                    className="w-full h-52 md:h-64 object-cover rounded-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BONUS SPECIAL BANNER ── */}
      <section style={{ background: "#F4F4F5" }} className="pt-8 pb-0 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 rounded-2xl px-6 py-5"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
            <svg className="w-10 h-10 shrink-0" fill="none" stroke="#7c3aed" strokeWidth={1.4} viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <div>
              <p className="font-bold uppercase" style={{ color: "#7c3aed", fontSize: 13, letterSpacing: "0.08em" }}>
                {t("Bonus Special: Meditim në Ecje", "Special Bonus: Walking Meditation")}
              </p>
              <p style={{ color: "#52525b", fontSize: 15, lineHeight: 1.5 }}>
                {t("Një praktikë unike që të ndihmon të mbash gjendjen e lartë meditative edhe gjatë ditës, kudo që je.", "A unique practice that helps you maintain the high meditative state throughout the day, wherever you are.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {/* ── QUOTE CAROUSEL ── */}
      <section className="pt-4 pb-8 md:pb-12 px-6" style={{ background: "#F4F4F5" }}>
        <div className="max-w-4xl mx-auto relative">
          <button onClick={() => changeQuote((quoteIndex - 1 + QUOTES.length) % QUOTES.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all"
            style={{ background: "#fff", border: "1px solid #e9d5ff" }}>
            <ChevronLeft className="w-5 h-5" style={{ color: "#7c3aed" }} />
          </button>
          <div className="grid grid-cols-2 gap-2 md:gap-4 px-2 md:px-6"
            style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
            {visibleQuotes.map((q, i) => (
              <div key={`${quoteIndex}-${i}`} className="rounded-2xl p-4 md:p-6 bg-white flex flex-col justify-between"
                style={{ boxShadow: "0 4px 24px rgba(124,58,237,0.08)", border: "1px solid #f3f0ff" }}>
                <div>
                  <p className="text-3xl md:text-7xl font-serif leading-none mb-1" style={{ color: "#a78bfa", lineHeight: "0.8" }}>&ldquo;</p>
                  <p className="text-sm md:text-base leading-relaxed font-medium mb-3 md:mb-5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
                    {lang === "al" ? q.quoteAl : q.quoteEn}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 md:gap-3">
                  <img src={q.avatar} alt={lang === "al" ? q.nameAl : q.nameEn} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="text-xs md:text-base font-semibold text-zinc-900">{lang === "al" ? q.nameAl : q.nameEn}</p>
                    <p className="text-[10px] md:text-sm text-zinc-400">{lang === "al" ? q.locationAl : q.locationEn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => changeQuote((quoteIndex + 1) % QUOTES.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all"
            style={{ background: "#fff", border: "1px solid #e9d5ff" }}>
            <ChevronRight className="w-5 h-5" style={{ color: "#7c3aed" }} />
          </button>
          <div className="flex items-center justify-center gap-2 mt-5">
            {QUOTES.map((_, i) => (
              <button key={i} onClick={() => changeQuote(i)} className="rounded-full transition-all duration-300"
                style={{ width: i === quoteIndex ? 24 : 8, height: 8, background: i === quoteIndex ? "#7c3aed" : "#ddd6fe" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDITIME TË AVANCUARA ── */}
      <section style={{ background: "#ffffff" }} className="py-10 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {[
              {
                titleAL: "Meditime të Avancuara për Qëndrat Energjitike dhe Gjëndrat Endokrine",
                titleEN: "Advanced Meditations for Energy Centers and Endocrine Glands",
                descAL: "Harmonizim i plotë i 7 qendrave kryesore dhe sistemit endokrin për të liruar trupin, për ta ushqyer me energji të re dhe për të çliruar emocionet e bllokuara.",
                descEN: "Full harmonization of the 7 main centers and the endocrine system to free the body, nourish it with new energy and release blocked emotions.",
                img: "/img/TONI0947 (1).JPG",
                imgLeft: false,
              },
              {
                titleAL: "Harmonizim Zemër-Mendje për Koherencë të Plotë",
                titleEN: "Heart-Mind Harmonization for Full Coherence",
                descAL: "Meditim i thellë për të sinkronizuar mendjen dhe zemrën, duke rritur fuqinë e manifestimit dhe duke të lidhur me potenciale pafund.",
                descEN: "Deep meditation to synchronize mind and heart, increasing the power of manifestation and connecting you with infinite potential.",
                img: "/img/TONI0834 (1).JPG",
                imgLeft: true,
              },
              {
                titleAL: "Aktivizimi i Nervit Vagus dhe Fuqia Shëruese e Trupit",
                titleEN: "Vagus Nerve Activation and the Healing Power of the Body",
                descAL: "Teknika inovative për të liruar trupin nga ankthi, depresioni dhe stresi; për të rigjeneruar sistemin nervor dhe për të rikthyer ekuilibrin biologjik.",
                descEN: "Innovative techniques to free the body from anxiety, depression and stress; to regenerate the nervous system and restore biological balance.",
                img: "/img/TONI1379.JPG",
                imgLeft: false,
              },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${item.imgLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-10 items-center`}>
                <div className="flex-1">
                  <h3 className="font-bold uppercase mt-3 md:mt-0 mb-3"
                    style={{ color: "#7c3aed", fontSize: 16, letterSpacing: "0.04em", lineHeight: 1.3 }}>
                    {t(item.titleAL, item.titleEN)}
                  </h3>
                  <p className="mt-3 md:mt-0" style={{ color: "#52525b", fontSize: 16, lineHeight: 1.7 }}>
                    {t(item.descAL, item.descEN)}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <img src={item.img} alt={t(item.titleAL, item.titleEN)}
                    className="w-full h-52 md:h-64 object-cover rounded-2xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Telegram CTA */}
          <div className="mt-10 rounded-2xl px-5 py-4 flex items-center gap-4"
            style={{ background: "#4e29c5" }}>
            <svg className="w-8 h-8 shrink-0" fill="white" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.548 13.93l-2.948-.924c-.64-.203-.654-.64.136-.953l11.521-4.443c.537-.194 1.006.131.831.638h-.527z"/>
            </svg>
            <p style={{ color: "#ffffff", fontSize: 15, lineHeight: 1.5 }}>
              {t("Çdo ditë do të marrësh ushtrime të reja, të ndara në një grup privat në Telegram.", "Every day you will receive new exercises, shared in a private Telegram group.")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Vlerësime ── */}
      <section className="py-10 px-5" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-center mb-2 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 7vw, 2.8rem)", color: "#18181b" }}>
            {t("Vlerësime", "Reviews")}
          </h2>
          <p className="text-center mb-8" style={{ color: "#71717a", fontSize: 14, lineHeight: 1.7 }}>
            {t(
              "Mijëra zemra të transformuara. Mijëra jetë të ndrysuara. Çfarë thonë pjesëmarrësit tanë.",
              "Thousands of transformed hearts. Thousands of changed lives. What our participants say."
            )}
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                textAL: "Përshëndetje Arte & Marvin ju fal dy jeni bekimi i shpirtit tim ❤️. Ju jam mirënjohëse shum falënderuese fund për gjithë çka që bëm për ne dhe për trojet Shqiptare ❤️. Ju jam mirënjohëse shumë shumë për sekondat që na i dedikoni dhe për të gjitha shpjegimet dhe dashurinë pa limit që na dhuruat ❤️💛🙏. Falënderoj nga thellësia e zemrës stafin tuaj të mrekullueshme për punë e pa llogaritur që bëm për ne për çdo sekondë që na qëndruan pranë 🙏🙏🙏🙏🙏🙏🙏🙏.",
                textEN: "Hello Arte & Marvin, you are both a blessing to my soul ❤️. I am so grateful for everything you did for us. Thank you from the bottom of my heart for every second you dedicate to us and for all the explanations and limitless love you share ❤️💛🙏.",
              },
              {
                textAL: "Përshëndetje Arte, ne Workshopin 3 ditor jam ndjer si në Parajsë! Kam pasur shum energji pozitive gjatë gjithë kohës, gjithçka aty ishte e mrekullueshme, shpjegimet ishin shum të qarta, meditimet ishin diçka e mrekullueshme, vërtet hyjnore. Kam pasur dridha të papritshme 3 ditë radhë. Tani ndihem shum shum e qetë dhe shum më mirë. Do të doja që workshopi të vazhdonte me shum sepse aty ndodhen shum mrekulli. Ju jam mirënjohëse pafund ty dhe Marvinit, ju përqafoj me shum dashuri, Almira 💜",
                textEN: "Hello Arte, the 3-day Workshop felt like Paradise to me. I had so much positive energy, everything was wonderful. The explanations were very clear, the meditations were incredible, truly divine. Now I feel so much calmer and better. I am endlessly grateful to you and Marvin. With much love, Almira 💜",
              },
              {
                textAL: "Arta të falënderit zemër për gjithçka, për kontributin tënd maksimal aty për ne. Workshopi ishte perfekt, shpjegimet më të mira që unë i kam dëgjuar ndonjëherë. Aty kuptova që unë doja të harroj gjithçka dhe të besoj se jeta ka mrekulli. Këtë e kuptova falë teje Arta dhe Marvinit — se s'duhet të fajësoj as të gjykoj, gjithçka ndodh për një arsye. Wow, pashë mrekulli në meditime dhe pata shumë lëshime emocionale. Mësova ta dëgjoj vetëm zërin tim të brendshëm. O Arta, faleminderit nga zemra! 🙏",
                textEN: "Arta, thank you from the heart for everything, for your maximum contribution for us. The workshop was perfect, the best explanations I've ever heard. I understood that life has miracles. I experienced a miracle in meditation. Arta",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #f0f0f0" }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#ede9fe" }}>
                    <span style={{ color: "#7c3aed", fontSize: 18, lineHeight: 1, fontFamily: "Georgia, serif", fontWeight: 700 }}>"</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-semibold" style={{ fontSize: 12, color: "#7c3aed" }}>{t("Vlerësime", "Review")}</span>
                    <div className="flex gap-0.5">
                      {[0,1,2,3,4].map(s => (
                        <svg key={s} width="13" height="13" fill="#f59e0b" viewBox="0 0 24 24">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: "#3f3f46", fontSize: 14 }}>
                  {t(item.textAL, item.textEN)}
                </p>
                <div className="flex justify-end pt-3" style={{ borderTop: "1px solid #f4f4f5" }}>
                  <svg width="16" height="16" fill="#f43f5e" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="relative overflow-hidden px-6 py-10 md:py-16">
        {/* Background image + overlay */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/TONI1692.JPG')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-bold text-white mb-2 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.12 }}>
              {t(<>Versioni yt i ri<br />po të pret.</>, <>Your new self<br />is waiting.</>)}
            </h2>
            <p className="mb-6" style={{ color: "#ffffff", fontSize: 16 }}>
              {t("Trajnim fillon më 11 Qershor", "Training starts June 11")}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start">
              {[
                {
                  icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
                  labelAL: "Transformimi i thellë dhe i qëndrueshëm",
                  labelEN: "Deep and lasting transformation",
                },
                {
                  icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                  labelAL: "Komunitet mbështetës",
                  labelEN: "Supportive community",
                },
                {
                  icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
                  labelAL: "Udhëzim nga specialistë",
                  labelEN: "Guidance from specialists",
                },
                {
                  icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
                  labelAL: "Akses i plotë në materiale",
                  labelEN: "Full access to materials",
                },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-1.5 text-white">
                  {f.icon}
                  <span className="text-white" style={{ fontSize: 16 }}>{t(f.labelAL, f.labelEN)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px self-stretch" style={{ background: "rgba(255,255,255,0.15)" }} />

          {/* Right */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3 shrink-0">
            <p className="font-bold uppercase leading-snug text-sm md:text-base"
              style={{ color: "#ffffff", letterSpacing: "0.08em", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
              {t("INVESTO NË VETEN TËNDE.", "INVEST IN YOURSELF.")}<br/>
              {t("TRANSFORMIMI YT FILLON KËTU.", "YOUR TRANSFORMATION STARTS HERE.")}
            </p>
            <p className="font-bold text-white text-3xl md:text-5xl" style={{ lineHeight: 1, fontFamily: "'Inter', sans-serif", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
              320€
            </p>
            {user ? (
              <Link to="/eventet/trajnime-online/platforma"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 w-full md:w-auto justify-center text-sm md:text-base"
                style={{ background: "#ffffff", color: "#4e29c5" }}>
                {t("Hyr në Platformë", "Access Platform")} →
              </Link>
            ) : (
              <Link to="/signup"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 w-full md:w-auto justify-center text-sm md:text-base"
                style={{ background: "#ffffff", color: "#4e29c5" }}>
                {t("Regjistrohu Tani", "Register Now")} →
              </Link>
            )}
            <p className="text-white text-sm md:text-base" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
              {t("Vendet janë të limituara!", "Spots are limited!")}
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
