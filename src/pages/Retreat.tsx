import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { VideoTestimonialsSection } from "@/sections/VideoTestimonialsSection";
import { AboutSection } from "@/sections/AboutSection";

export const RetreatPage = () => {
  const { t, lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const pricingVariants = [
    {
      title: t("Varianti 1 — Dhomë dyshe/treshe", "Variant 1 — Double/Triple Room"),
      training: "500€",
      hotel: "364€",
      total: "864€",
      note: t("Trajnimi + Hotel 5★ ALL inclusive, 7 netë, dhomë dyshe ose treshe", "Training + 5★ Hotel ALL inclusive, 7 nights, double or triple room"),
      highlight: false,
    },
    {
      title: t("Varianti 2 — Dhomë teke", "Variant 2 — Single Room"),
      training: "500€",
      hotel: "616€",
      total: "1,116€",
      note: t("Trajnimi + Hotel 5★ ALL inclusive, 7 netë, dhomë teke", "Training + 5★ Hotel ALL inclusive, 7 nights, single room"),
      highlight: true,
    },
  ];

  const companions = [
    {
      label: t("Të rritur (shoqërues)", "Adults (companions)"),
      price: "364€",
      note: t("Hoteli 5★ ALL inclusive, 7 netë, dhomë me personin që shoqëron", "5★ Hotel ALL inclusive, 7 nights, room with participant"),
    },
    {
      label: t("Fëmijë 4–8 vjeç", "Children 4–8 years"),
      price: t("182€ / 364€", "182€ / 364€"),
      note: t("182€ nëse shoqërohen nga ≥2 të rritur, përndryshe 364€", "182€ if accompanied by ≥2 adults, otherwise 364€"),
    },
    {
      label: t("Fëmijë 9–10 vjeç", "Children 9–10 years"),
      price: t("255€ / 364€", "255€ / 364€"),
      note: t("255€ nëse shoqërohen nga ≥2 të rritur, përndryshe 364€", "255€ if accompanied by ≥2 adults, otherwise 364€"),
    },
  ];

  const faqs = [
    {
      q: t("A duhet të kem përvojë me meditim?", "Do I need meditation experience?"),
      a: t("Jo. Retreat-i është i hapur për të gjithë — fillestarë dhe të avancuar. Udhëheqësit do të të udhëheqin hap pas hapi.", "No. The retreat is open to everyone — beginners and advanced. Facilitators will guide you step by step."),
    },
    {
      q: t("Ku zhvillohet retreat-i?", "Where does the retreat take place?"),
      a: t("Retreat-i mbahet në bregdetin shqiptar, në një hotel me 5 yje. Lokacioni i saktë ndahet me pjesëmarrësit pas konfirmimit.", "The retreat is held on the Albanian Riviera in a 5-star hotel. The exact location is shared with participants after confirmation."),
    },
    {
      q: t("Çfarë përfshihet në çmim?", "What is included in the price?"),
      a: t("Çmimi i trajnimit (500€) mbulon të gjitha seancat, leksionet dhe materialet. Çmimi i hotelit mbulon akomodimin ALL inclusive (7 netë). Çmimet e hotelit janë të negociuara posaçërisht për të marrë ofertën më të mirë.", "The training price (500€) covers all sessions, lectures and materials. The hotel price covers ALL inclusive accommodation (7 nights). Hotel prices are specially negotiated to get the best offer."),
    },
    {
      q: t("Si mund të rezervoj vendin tim?", "How can I reserve my spot?"),
      a: t("Na kontaktoni nëpërmjet faqes Kontakt ose na shkruani drejtpërdrejt. Vendet janë të kufizuara — rezervo sa më parë.", "Contact us through the Contact page or write to us directly. Spots are limited — reserve as soon as possible."),
    },
  ];

  return (
    <div className="retreat-page min-h-screen bg-white">

      {/* Hero */}
      <div className="relative overflow-hidden min-h-[280px] md:min-h-[520px] flex items-center justify-center">
        <img
          src="/img/retreat-cover.jpeg"
          alt="Retreat"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.38)" }} />
        <div className="relative w-full max-w-5xl mx-auto px-6 text-center" />
      </div>

      {/* Intro text section */}
      <section className="max-w-5xl mx-auto px-6 py-10 md:py-16">
        <div className="space-y-4 text-zinc-700 [&_strong]:text-violet-600" style={{ lineHeight: 1.8 }}>
          {lang === "al" ? (
            <>
              <p>Retreati ynë është i veçantë pasi është i pari i këtij lloji në Shqipëri. Sjellim eksperiencën <strong>ndërkombëtare</strong> në një <strong>event 8 ditor</strong> i cili do mbahet në <strong>bregetin Shqiptar</strong>.</p>
              <p>Në këtë event çdo ditë duke nisur nga orët e para të mëngjesit deri mbasdite do mbahen meditime dhe leksione teorike, shpjegime të teknikave dhe ushtrime të ndryshme <strong>për të krijuar një jetë të re, shërim dhe çlirim emocional</strong>.</p>
              <p>Fokusi është tek <strong>vetja jote</strong>, dhe <strong>rifitimi i energjisë tënde</strong>.</p>
              <p>Është një javë transformuese për <strong>trupin, mendjen dhe shpirtin</strong>, në një ambient luksoz 5 yjesh, ku takon veten tënde të re dhe hap dyert drejt <strong>mundësive të reja</strong>.</p>
            </>
          ) : (
            <>
              <p>Our retreat is special as it is among the first of its kind in Albania. We bring <strong>international experience</strong> to an <strong>8-day event</strong> which will be held on the <strong>Albanian Riviera</strong>.</p>
              <p>Every day — from early morning until afternoon — meditations and theoretical lectures will be held, technique explanations and various exercises <strong>to create a new life, healing and emotional release</strong>.</p>
              <p>The focus is on <strong>you</strong>, and <strong>restoring your energy</strong>.</p>
              <p>It is a transformative week for <strong>body, mind and spirit</strong>, in a luxurious 5-star setting, where you meet your renewed self and open the doors to <strong>new possibilities</strong>.</p>
            </>
          )}
        </div>
      </section>

      {/* What is retreat section */}
      <section className="pb-12 pt-12" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-bold mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", color: "#18181b" }}>
          {lang === "al" ? (
            <>Çfarë është <span style={{ color: "#7C3AED" }}>retreati jonë</span> i meditimit?</>
          ) : (
            <>What is <span style={{ color: "#7C3AED" }}>our retreat</span> of meditation?</>
          )}
        </h2>
        <p className="text-zinc-600 mb-6" style={{ fontSize: 16, lineHeight: 1.7 }}>
          {t(
            "Retreati ynë është i veçantë pasi është i pari i këtij lloji në Shqipëri. Sjellim një përvojë transformuese në një event 8 ditor në bregdetin e mrekullueshëm Shqiptar.",
            "Our retreat is special as it is among the first of its kind in Albania. We bring a transformative experience to an 8-day event on the magnificent Albanian Riviera."
          )}
        </p>

        {/* Main image with overlay text */}
        <div className="relative rounded-2xl overflow-hidden mb-3" style={{ minHeight: 220 }}>
          <img
            src="/img/TONI1692.JPG"
            alt="Retreat"
            className="w-full h-full object-cover absolute inset-0"
            style={{ minHeight: 220 }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          <div className="relative p-6 flex flex-col justify-end" style={{ minHeight: 220 }}>
            <h3 className="font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1rem, 2.5vw, 1.5rem)", lineHeight: 1.35 }}>
              {lang === "al" ? (
                <>8 ditë për t'u rikthyer tek vetja dhe për të krijuar <span style={{ color: "#C4B5FD" }}>një jetë më të re.</span></>
              ) : (
                <>8 days to return to yourself and create <span style={{ color: "#C4B5FD" }}>a new life.</span></>
              )}
            </h3>
          </div>
        </div>

        {/* Image grid 3x2 */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {[
            "/img/TONI0886.JPG",
            "/img/TONI0935.JPG",
            "/img/TONI0877.JPG",
            "/img/TONI2462.JPG",
            "/img/TONI2743.JPG",
            "/img/TONI2719.JPG",
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ height: 180 }}>
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Stats 2x2 */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <svg width="22" height="22" fill="none" stroke="#7C3AED" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, value: "1,800+", label: t("Pjesëmarrës nga e gjithë bota", "Participants from around the world") },
            { icon: <svg width="22" height="22" fill="none" stroke="#7C3AED" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>, value: "100+", label: t("Sessions transformuese", "Transformative sessions") },
            { icon: <svg width="22" height="22" fill="none" stroke="#7C3AED" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, value: "100+", label: t("Vende të përfaqësuara", "Countries represented") },
            { icon: <svg width="22" height="22" fill="none" stroke="#7C3AED" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, value: null, label: t("Një tribu. Një mision. Jetë të re.", "One tribe. One mission. New life.") },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="shrink-0">{stat.icon}</div>
              <div className="flex items-baseline gap-2">
                {stat.value && <span className="font-extrabold text-zinc-900" style={{ fontSize: 16 }}>{stat.value}</span>}
                <span className="text-zinc-700" style={{ fontSize: 16, lineHeight: 1.7 }}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>



      {/* Për çfarë arsye mund të vish */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

          {/* Left: text */}
          <div className="flex-1">
            <h2 className="font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "#18181b" }}>
              {lang === "al" ? (
                <>Për çfarë arsye <span style={{ color: "#7C3AED" }}>mund të vish?</span></>
              ) : (
                <>For what reason <span style={{ color: "#7C3AED" }}>can you come?</span></>
              )}
            </h2>
            <div className="space-y-4 text-zinc-600 [&_strong]:text-violet-600" style={{ fontSize: 16, lineHeight: 1.8 }}>
              {lang === "al" ? (
                <>
                  <p>Ti mund të vish për arsye të ndryshme: të shërohesh, të rifitosh <strong>paqen, harmoninë</strong>, të tërheqesh <strong>pasuri, bollëk, liri financiare</strong>, të rifitosh <strong>fuqinë tënde</strong> dhe në këtë mënyrë të <strong>transformosh rrënjësisht jetën tënde</strong>.</p>
                  <p>Për tu <strong>zhvilluar mentalisht dhe emocionalisht</strong>, gjë që është e vështirë në jetën e përditshme ku jemi të mbingarkuar nga punë dhe përgjegjësi të shumta.</p>
                  <p>Do ju mësojmë si të futeni thellë në meditim dhe të qëndroni gjatë të shijoni mrekullinë në trupin tuaj, të përjetoni <strong>jetën dhe energjinë që rrjedh në trup</strong> duke i dhënë jetë sërish.</p>
                </>
              ) : (
                <>
                  <p>You can come for various reasons: to heal, to regain <strong>peace, harmony</strong>, to attract <strong>wealth, abundance, financial freedom</strong>, to reclaim <strong>your power</strong> and in this way to <strong>radically transform your life</strong>.</p>
                  <p>To <strong>develop mentally and emotionally</strong>, something that is difficult in everyday life where we are overwhelmed by work and many responsibilities.</p>
                  <p>We will teach you how to enter deep meditation and stay long to enjoy the wonder in your body, to experience <strong>the life and energy that flows through the body</strong>, bringing it back to life.</p>
                </>
              )}
            </div>
          </div>

          {/* Right: image */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg" style={{ minHeight: 380 }}>
            <img
              src="/img/TONI1503.JPG"
              alt="Retreat participants"
              className="w-full h-full object-cover"
              style={{ minHeight: 380 }}
            />
          </div>
        </div>
      </section>

      {/* Çfarë do bëjmë */}
      <section className="pt-8 pb-14" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-bold mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "#18181b" }}>
          {lang === "al" ? (
            <>Çfarë do <span style={{ color: "#7C3AED" }}>bëjmë?</span></>
          ) : (
            <>What will we <span style={{ color: "#7C3AED" }}>do?</span></>
          )}
        </h2>
        <div className="space-y-4 text-zinc-600 [&_strong]:text-violet-600" style={{ fontSize: 16, lineHeight: 1.85 }}>
          {lang === "al" ? (
            <>
              <p>Koha do kalojë duke medituar, mësuar gjëra të reja, njohur njerëz të rinj, po më së shumti duke <strong>rinjoftuar veten</strong>.</p>
              <p>Do kalonit kohë duke u lidhur me veten në një nivel më të thellë që do ju mundësojë të <strong>shëroni veten dhe jetën tuaj</strong>.</p>
              <p>Nuk do keni asnjë përgjegjësi, as pastrim, as gatim – çdo gjë është <strong>gatë për ju</strong>.</p>
              <p>Do ju japim mundësi pafund për të tërhequr dhe rikrijuar veten, për të <strong>hapur zemrën</strong> dhe për tu ndjerë të plotë sërish.</p>
              <p>Në një ambient të qetë, privat dhe me hapësira të mëdha, ju do mund të relaksoheni dhe të shijoni të plotë eksperiencën.</p>
              <p>Në sallën e konferencave do organizohen <strong>medititmimet dhe seminaret</strong>.</p>
              <p>Do përjetojmë bashkë meditimeve të thella ku do zhvillojmë një botë të re, një univers dhe një krijim brënda trupit tonë.</p>
              <p>Muzika e zgjedhur, fjalët e meditimit dhe tingujt e zërit, çdo gjë e studiuar për të harmonizuar valët e trurit dhe për t'ju ndihmuar të <strong>bëheni me veten dhe burimin e gjithçkaje</strong>.</p>
            </>
          ) : (
            <>
              <p>Time will pass meditating, learning new things, meeting new people, but most of all <strong>rediscovering yourself</strong>.</p>
              <p>You will spend time connecting with yourself at a deeper level that will enable you to <strong>heal yourself and your life</strong>.</p>
              <p>You will have no responsibilities, no cleaning, no cooking – everything is <strong>ready for you</strong>.</p>
              <p>We will give you endless opportunities to attract and recreate yourself, to <strong>open your heart</strong> and feel complete again.</p>
              <p>In a quiet, private environment with large spaces, you will be able to relax and fully enjoy the experience.</p>
              <p>In the conference hall, <strong>meditations and seminars</strong> will be organized.</p>
              <p>Together we will experience deep meditations where we will develop a new world, a universe and a creation within our body.</p>
              <p>Carefully chosen music, meditation words and vocal sounds, everything studied to harmonize brainwaves and help you <strong>become one with yourself and the source of everything</strong>.</p>
            </>
          )}
        </div>
      </div>
      </section>

      {/* Çfarë do mësojmë */}
      <section className="relative overflow-hidden" style={{ minHeight: 420 }}>
        {/* Background image */}
        <img
          src="/img/TONI1042.JPG"
          alt="Retreat seminar"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(12,9,38,0.72) 0%, rgba(12,9,38,0.45) 50%, rgba(12,9,38,0.10) 100%)" }} />
        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 py-16 flex items-center w-full" style={{ minHeight: 420 }}>
          <div className="text-left">
            <h2 className="font-bold leading-tight text-white mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
              {lang === "al" ? (
                <>Çfarë do <span style={{ color: "#8B5CF6" }}>mësojmë?</span></>
              ) : (
                <>What will we <span style={{ color: "#8B5CF6" }}>learn?</span></>
              )}
            </h2>
            <p className="text-white/50 uppercase tracking-widest font-semibold" style={{ fontSize: 11 }}>
              {t("Një udhëtim transformues ne 5 dimensione", "A transformative journey in 5 dimensions")}
            </p>
          </div>
        </div>
      </section>

      {/* Çfarë do mësojmë — lista */}
      <section className="max-w-5xl mx-auto px-6 py-6 md:py-8">
        <div className="divide-y divide-zinc-100">
          {[
            {
              title: lang === "al" ? "Përfshirje e thellë në meditim" : "Deep immersion in meditation",
              body: lang === "al" ? (
                <p>Si të përfshihemi 100% në <strong>meditim</strong>, të gjejmë çastin e <strong>tanishëm</strong> ku ndodh ndryshimi dhe të arrijmë <strong>harmonizim zemër-tru</strong> me metoda shkencore. Ambienti, muzika, zëri dhe komuniteti e bëjnë që një orë të të duket si <strong>10 min</strong>.</p>
              ) : (
                <p>How to be 100% immersed in <strong>meditation</strong>, to find the <strong>present moment</strong> where change happens and achieve <strong>heart-brain harmony</strong> through scientific methods. The environment, music, sound and community make one hour feel like <strong>10 min</strong>.</p>
              ),
            },
            {
              title: lang === "al" ? "Ligjet e realitetit sipas fizikës kuantike" : "Laws of reality according to quantum physics",
              body: lang === "al" ? (
                <p>Si funksionon çdo gjë. Me këto çelësa në dorë, ne do mund të <strong>hapim çdo derë</strong>.</p>
              ) : (
                <p>How everything works. With these keys in hand, we will be able to <strong>open every door</strong>.</p>
              ),
            },
            {
              title: lang === "al" ? "Zgjidhja e problemeve & manifestimi" : "Problem solving & manifestation",
              body: lang === "al" ? (
                <p>Si të <strong>zgjidhim problemet</strong> dhe si të <strong>manifestojmë</strong> jetën që <strong>duam</strong>.</p>
              ) : (
                <p>How to <strong>solve problems</strong> and how to <strong>manifest</strong> the life we <strong>want</strong>.</p>
              ),
            },
            {
              title: lang === "al" ? "Shërimi me meditim" : "Healing through meditation",
              body: lang === "al" ? (
                <p>Si të <strong>shërojmë</strong> veten ose dikë tjetër me <strong>meditim</strong>.</p>
              ) : (
                <p>How to <strong>heal</strong> yourself or someone else through <strong>meditation</strong>.</p>
              ),
            },
            {
              title: lang === "al" ? "Hapja e zemrës & ndjenja e plotësisë" : "Opening the heart & feeling of wholeness",
              body: lang === "al" ? (
                <p>Si të arrijmë hapjen e zemrës dhe ndjenjën e <strong>plotësisë</strong> të pavarur nga mjedisi i jashtëm.</p>
              ) : (
                <p>How to achieve heart opening and the feeling of <strong>wholeness</strong> independent of the external environment.</p>
              ),
            },
          ].map((item, i) => (
            <div key={i} className="py-2 [&_strong]:text-violet-600 [&_p]:text-zinc-600" style={{ fontSize: 16, lineHeight: 1.6 }}>
              <h3 className="font-bold mb-1 text-zinc-900" style={{ fontSize: 16, lineHeight: 1.4 }}>
                {item.title}
              </h3>
              {item.body}
            </div>
          ))}
        </div>
      </section>

      {/* Meditimet */}
      <section className="pt-8 pb-14" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Title row: title+subtitle left, image right */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mb-6">
            <div className="flex-1">
              <h2 className="font-bold mb-2 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "#18181b" }}>
                {lang === "al" ? <>Meditimet</> : <>Meditations</>}
              </h2>
              <p className="text-zinc-500" style={{ fontSize: 16, lineHeight: 1.6 }}>
                {lang === "al" ? <>Udhëtim i brendshëm drejt <strong style={{ color: "#3f3f46" }}>transformimit</strong> të vërtetë.</> : <>An inner journey toward true <strong style={{ color: "#3f3f46" }}>transformation</strong>.</>}
              </p>
            </div>
            <div className="hidden md:flex flex-1 rounded-2xl overflow-hidden shadow-md" style={{ height: 160 }}>
              <img src="/img/TONI2462.JPG" alt="Meditimet" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
            </div>
          </div>

          {/* Items 2-col grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4" style={{ fontSize: 16, lineHeight: 1.75, color: "#3f3f46" }}>
                {(lang === "al" ? [
                  <>Meditime të avancuara për <strong style={{ color: "#7C3AED" }}>harmonizimin e qëndrave energjitike</strong></>,
                  <>Meditim per të harmonizuar <strong style={{ color: "#7C3AED" }}>zemrën dhe mendjen</strong> dhe për të arritur koherencën e plotë të tyre.</>,
                  <>Meditim per <strong style={{ color: "#7C3AED" }}>tu lidhur me veten</strong> tonë të vërtetë dhe për të krijuar një jetë të re me ndenja dhe mendime të reja.</>,
                  <><strong style={{ color: "#7C3AED" }}>Teknika frymëmarrje dinamike</strong> gjatë meditimeve për tu çliruar nga emocionet e së shkuarës dhe për t'u lidhur me emocionet e së ardhmes.</>,
                  <>Meditime <strong style={{ color: "#7C3AED" }}>për të sjellë ndryshime në jetën tënde</strong> duke përdorur formulën për të krijuar nga brënda jashtë.</>,
                  <>Meditim i thellë <strong style={{ color: "#7C3AED" }}>për të shëruar fëmijën e brendshëm</strong> dhe për të integruar plotësinit veten tënde. Për të sjellë balancë në jetë dhe të mos reagojmë më ndaj situatave të jashtme.</>,
                  <>Meditim <strong style={{ color: "#7C3AED" }}>në ecje</strong>. Duke ecur në natyrë, do bëni disa meditime të përshtatura për ecje. Në ecje do ndryshoni vibranconin dhe do ecni si vetja juaj e vërtetë. Kjo ka për qëllim të trajnojmë që gjendjen e lartë meditative ta ruajmë edhe gjatë përditësi dhe të mos reagojmë ndaj mjedisit të jashtëm. Në këtë mënyrë ne jemi në gjendje krijuese më gjatë dhe arrijmë rezultatet më shpejt.</>,
                  <>Meditim <strong style={{ color: "#7C3AED" }}>për të shëruar dikë tjetër</strong>. Do mësojmë se si të meditojmë për të shëruar një person tjetër. Kjo do ju shërbejë edhe më von në rast doni ta aplikoni në familjarë tuaj kur t'ktheheni në shtëpi apo persona të tjerë.</>,
                ] : [
                  <>Advanced meditations for <strong style={{ color: "#7C3AED" }}>harmonizing energy centers</strong></>,
                  <>Meditation to harmonize <strong style={{ color: "#7C3AED" }}>the heart and the mind</strong> and to achieve their full coherence.</>,
                  <>Meditation to <strong style={{ color: "#7C3AED" }}>connect with your true self</strong> and to create a new life with new feelings and thoughts.</>,
                  <><strong style={{ color: "#7C3AED" }}>Dynamic breathing technique</strong> during meditations to release emotions from the past and connect with the emotions of the future.</>,
                  <>Meditations <strong style={{ color: "#7C3AED" }}>to bring change into your life</strong> using the formula to create from the inside out.</>,
                  <>Deep meditation <strong style={{ color: "#7C3AED" }}>to heal the inner child</strong> and to fully integrate yourself. To bring balance into life and no longer react to external situations.</>,
                  <>Walking <strong style={{ color: "#7C3AED" }}>meditation</strong>. Walking in nature, you will do several meditations adapted for walking. While walking you will shift your vibration and walk as your true self. This aims to train us to maintain the high meditative state even in daily life and not react to the external environment. This way we stay in a creative state longer and achieve results faster.</>,
                  <>Meditation <strong style={{ color: "#7C3AED" }}>to heal someone else</strong>. We will learn how to meditate to heal another person. This will also serve you later if you want to apply it to your family when you return home or to other people.</>,
                ]).map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#7C3AED" }} />
                    <p style={{ margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Matjet */}
      <section className="max-w-5xl mx-auto px-6 py-10 md:py-14">
        <h2 className="font-bold text-center mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "#18181b" }}>
          {t("Matjet", "Measurements")}
        </h2>

        <div className="space-y-0">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-start gap-3 w-full">
              <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full" style={{ background: "#7C3AED" }} />
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "#3f3f46" }}>
                <strong>{t("Matje që do jenë për të gjithë për t'ju ndihmuar ju:", "Measurements for everyone to help you:")}</strong>{" "}
                {t("Matjet e qëndrave të energjisë do të mundësohen për të gjithë pjesëmarrësit vetëm nje herë gjatë ", "Energy center measurements will be available for all participants once during the ")}<strong style={{ color: "#7C3AED" }}>{t("8 ditëve", "8 days")}</strong>{t(" që do jemi bashkë. Mund të kuptoni se me cilën qendër keni më tepër nevojë të punoni, dhe ku keni më tepër nevojë për ", " we are together. You can understand which energy center you need to work on most, and where you need more ")}<strong style={{ color: "#7C3AED" }}>{t("energji.", "energy.")}</strong>
              </p>
            </div>
            <div className="text-2xl text-violet-300 my-3 select-none">+</div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-start gap-3 w-full">
              <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full" style={{ background: "#7C3AED" }} />
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "#3f3f46" }}>
                <strong>{t("Matje që janë me short për të ndihmuar grupin me qëllime studimore:", "Measurements by lottery to help the group for research purposes:")}</strong>{" "}
                {t("Matjet e valeve të trurit gjatë meditimit me elektroencefalograme. Mund të zbulojmë se si ka ndikuar meditimi në sistemin nervor. Dhe matje të ", "Brain wave measurements during meditation with electroencephalograms. We can discover how meditation has affected the nervous system. And measurements of ")}<strong style={{ color: "#7C3AED" }}>{t("koherens së zemrës.", "heart coherence.")}</strong>
              </p>
            </div>
            <div className="text-2xl text-violet-300 my-3 select-none">+</div>
          </div>

          {/* Note */}
          <p className="text-center text-zinc-500 mt-2 mb-6" style={{ fontSize: 16, lineHeight: 1.7 }}>
            {t("Gjithshtu disa persona do përzgjidhen me short për të bërë matjet e qëndrave të energjisë ", "Additionally, a few people will be selected by lottery to have their energy center measurements done ")}<strong style={{ color: "#7C3AED" }}>{t("2 herë", "2 times")}</strong>{t(" (në fillim dhe në fund të retreatit)", " (at the beginning and end of the retreat)")}
          </p>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden" style={{ maxHeight: 320, marginTop: 32 }}>
            <img
              src="/img/TONI2743.JPG"
              alt="Matjet"
              className="w-full object-cover"
              style={{ height: 320, objectPosition: "center top" }}
            />
          </div>
        </div>
      </section>

      {/* Benefitet e retreatit */}
      <section className="py-10 md:py-16" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-bold text-center mb-2 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "#18181b" }}>
            {lang === "al" ? <>Benefitet e <span style={{ color: "#7C3AED" }}>retreatit</span></> : <>Benefits of the <span style={{ color: "#7C3AED" }}>retreat</span></>}
          </h2>
          <div className="flex justify-center mb-8"><span style={{ color: "#c4b5fd", fontSize: 22 }}>✦</span></div>

          {(() => {
            const allItems = lang === "al" ? [
              { n: 1, body: <><strong>Mundësia për tu liruar nga emocionet e ulëta, ankthi dhe stres.</strong> Jeta jonë është bërë shumë kërkuese dhe e ulëta, ankthi dhe stres e bën të thjeshtë të rumbëesh fokusin, të duash të kontrollosh çdo gjë duke kaluar <strong>në stres.</strong> Izolimi për një javë do të të mundësojë një hapësirë ku të <strong>marrësh frymë sërish.</strong></> },
              { n: 2, body: <><strong>Disiplinë mendore.</strong> Nuk ka rëndësi nqs je i avancuar apo fillestar, praktikat e meditimeve do të të ndihmojnë <strong>të disiplinosh mendjen dhe të jesh më i organizuar.</strong></> },
              { n: 3, body: <><strong>Aftësi të shërosh dhe kontrollosh emocionet.</strong> Ndërgjegjësimi i lartë që fitohet nga seminaret do mundësojë që ju të jeni të aftë të kuptoni dhe menaxhoni çdo emocion.</> },
              { n: 4, body: <><strong>Ndjenja të larta emocionale.</strong> Programi do ju mundësojë që në çdo kohë të jeni në gjendje të lartë emocionale dhe të përjetoni emocione si dashuria, ndjenja e plotësimit, falënderimi, <strong>paqe dhe harmoni në trup dhe në zemër.</strong></> },
              { n: 5, body: <><strong>Shërim i plagëve të së shkuarës.</strong> Jemi në një ambient të sigurt ku mund të lëshojmë çdo gjë që na mban.</> },
              { n: 6, body: <><strong>Përmirësimi i marrëdhënieve.</strong> Kjo vjen automatikisht, pasi ne ndryshojmë mendimet, jemi në gjendje të lartë emocionale dhe <strong>shërojmë të kaluarën tonë.</strong></> },
              { n: 7, body: <><strong>Çasti i tanishëm.</strong> Të lidhemi me momentin, me jetën çdo po ndodh tani, të ndiejm diellim, ajrin, ujin, të ndiejm vetë mrekullitë e jetës që po ndodhin <strong>pikërisht tani.</strong></> },
              { n: 8, body: <><strong>Qartësi mendore.</strong> Do jesh më i aftë të kuptosh veten dhe njerëzit rreth teje. Do fitosh <strong>një perspektivë të re</strong> mbi jetën e cila do bëjë <strong>më shumë kuptim.</strong> Krijimi i një identiteti të ri që i përgjigjet <strong>vetes tënde të vërtetë.</strong></> },
              { n: 9, body: <><strong>Përshpejtim i zhvillimit personal.</strong> Në një javë do kesh mundur të bësh punën e njëviti të zhvillimit personal. <strong>Zhvillimi i lartë i ndërgjegjës</strong> mbi gjendjet emocionale dhe fizike.</> },
              { n: 10, body: <><strong>Mësimi i një formule</strong> për të krijuar jetën tonë nga brënda jashtë.</> },
              { n: 11, body: <><strong>Ndjenja e plotësisë dhe shërimi i shpirtit,</strong> madje në shumë raste edhe shërim i problemeve fizike të ndryshme.</> },
            ] : [
              { n: 1, body: <><strong>The ability to release low emotions, anxiety and stress.</strong> Our lives have become very demanding and stress makes it easy to lose focus. One week of isolation gives you space to <strong>breathe again.</strong></> },
              { n: 2, body: <><strong>Mental discipline.</strong> Whether advanced or beginner, meditation practices will help you <strong>discipline your mind and become more organized.</strong></> },
              { n: 3, body: <><strong>Ability to heal and control emotions.</strong> The high awareness gained from seminars will enable you to understand and manage every emotion.</> },
              { n: 4, body: <><strong>High emotional states.</strong> The program enables you to stay in a high emotional state and experience emotions like love, fulfillment, gratitude, <strong>peace and harmony in body and heart.</strong></> },
              { n: 5, body: <><strong>Healing of past wounds.</strong> We are in a safe environment where we can release everything that holds us back.</> },
              { n: 6, body: <><strong>Improvement of relationships.</strong> This comes automatically as we change our thoughts, stay in a high emotional state and <strong>heal our past.</strong></> },
              { n: 7, body: <><strong>The present moment.</strong> Connecting with the moment, with life as it happens now, feeling the sun, air, water, feeling the miracles of life happening <strong>right now.</strong></> },
              { n: 8, body: <><strong>Mental clarity.</strong> You'll be better able to understand yourself and those around you. You'll gain <strong>a new perspective</strong> on life that will make <strong>more sense.</strong> Creating a new identity that aligns with <strong>your true self.</strong></> },
              { n: 9, body: <><strong>Accelerated personal development.</strong> In one week you'll accomplish the equivalent of a year of personal growth. <strong>High development of consciousness</strong> over emotional and physical states.</> },
              { n: 10, body: <><strong>Learning a formula</strong> for creating our life from the inside out.</> },
              { n: 11, body: <><strong>Feeling of wholeness and healing of the spirit,</strong> and in many cases even healing of various physical problems.</> },
            ];

            const images = [
              { src: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776946918258-0.jpeg", pos: "center center" },
              { src: "/img/TONI1503.JPG", pos: "center 30%" },
              { src: "/img/TONI1042.JPG", pos: "center 20%" },
              { src: "/img/TONI2719.JPG", pos: "center center" },
              { src: "/img/TONI2879.JPG", pos: "center center" },
            ];

            const groups = [];
            for (let i = 0; i < images.length; i++) {
              const start = i * 2;
              const isLast = i === images.length - 1;
              groups.push({ img: images[i], items: allItems.slice(start, isLast ? allItems.length : start + 2) });
            }
            const remaining: typeof allItems = [];

            return (
              <div className="space-y-8">
                {groups.map((g, gi) => (
                  <div key={gi}>
                    {/* Image full width */}
                    <div className="rounded-2xl overflow-hidden mb-5" style={{ height: 220 }}>
                      <img src={g.img.src} alt="" className="w-full h-full object-cover" style={{ objectPosition: g.img.pos }} />
                    </div>
                    {/* items: if 3, left=item[0], right=item[1]+item[2] stacked; else 2-col grid */}
                    {g.items.length > 2 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 [&_strong]:text-violet-600" style={{ fontSize: 16, lineHeight: 1.8, color: "#3f3f46" }}>
                        {/* Left col: item 0 */}
                        <div className="flex items-start gap-1">
                          <span className="font-bold shrink-0" style={{ color: "#7C3AED", minWidth: 20 }}>{g.items[0].n}-</span>
                          <p style={{ margin: 0 }}>{g.items[0].body}</p>
                        </div>
                        {/* Right col: item 1 + item 2 stacked */}
                        <div className="flex flex-col gap-2">
                          {g.items.slice(1).map((item) => (
                            <div key={item.n} className="flex items-start gap-1">
                              <span className="font-bold shrink-0" style={{ color: "#7C3AED", minWidth: 20 }}>{item.n}-</span>
                              <p style={{ margin: 0 }}>{item.body}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 [&_strong]:text-violet-600" style={{ fontSize: 16, lineHeight: 1.8, color: "#3f3f46" }}>
                        {g.items.map((item) => (
                          <div key={item.n} className="flex items-start gap-1">
                            <span className="font-bold shrink-0" style={{ color: "#7C3AED", minWidth: 20 }}>{item.n}-</span>
                            <p style={{ margin: 0 }}>{item.body}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {remaining.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 [&_strong]:text-violet-600" style={{ fontSize: 16, lineHeight: 1.8, color: "#3f3f46" }}>
                    {remaining.map((item) => (
                      <div key={item.n} className="flex items-start gap-1">
                        <span className="font-bold shrink-0" style={{ color: "#7C3AED", minWidth: 20 }}>{item.n}-</span>
                        <p style={{ margin: 0 }}>{item.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })()}

        </div>
      </section>

      {/* Detaje shtesë mbi eventin */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-bold text-center mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "#18181b" }}>
            {lang === "al" ? <>Detaje shtesë <span style={{ color: "#7C3AED" }}>mbi eventin</span></> : <>Additional <span style={{ color: "#7C3AED" }}>event details</span></>}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            {/* Stafi */}
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col" style={{ boxShadow: "0 4px 18px rgba(0,0,0,0.10)", border: "1px solid #e4e4e7" }}>
              <div style={{ height: 180 }} className="overflow-hidden shrink-0">
                <img src="/img/TONI1666.JPG" alt="Stafi" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-1">
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", color: "#18181b" }}>
                {lang === "al" ? "Stafi" : "Staff"}
              </h3>
              <div className="space-y-3 text-zinc-600 [&_strong]:text-violet-600" style={{ fontSize: 15, lineHeight: 1.75 }}>
                <p>{lang === "al" ? <>Gjatë kohës do të jeni në asistencën e <strong>2 mentorëve</strong> që do mund t'ju asistojnë për çdo paqartësi në lidhje me teknikat apo praktikat.</> : <>During the event you will have the assistance of <strong>2 mentors</strong> who can assist you with any questions about techniques or practices.</>}</p>
                <p>{lang === "al" ? <>Staf profesional për organizimin e eventeve do jetë disponueshëm për çdo <strong>detaj teknik</strong> gjatë zhvillimit të eventit.</> : <>Professional event management staff will be available for every <strong>technical detail</strong> during the event.</>}</p>
                <p>{lang === "al" ? <>Stafi i hotelit do jetë gjithashtu në disponimin tuaj për çdo detaj në lidhje me <strong>qëndrimin dhe ushqimin.</strong></> : <>Hotel staff will also be at your disposal for any details regarding your <strong>stay and meals.</strong></>}</p>
              </div>
              </div>
            </div>

            {/* Muzika */}
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col" style={{ boxShadow: "0 4px 18px rgba(0,0,0,0.10)", border: "1px solid #e4e4e7" }}>
              <div style={{ height: 180 }} className="overflow-hidden shrink-0">
                <img src="/img/TONI2472.JPG" alt="Muzika" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-1">
                <h3 className="font-bold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", color: "#18181b" }}>
                  {lang === "al" ? "Muzika" : "Music"}
                </h3>
                <p className="text-zinc-600 [&_strong]:text-violet-600" style={{ fontSize: 15, lineHeight: 1.75 }}>
                  {lang === "al" ? <>Një bonus i eventit është dhe <strong>muzika!</strong> Do kemi muzikë të përzgjedhur gjatë meditimeve që është shkencërisht provuar të harmonizojë zemrën dhe të ndihmojë procesin e meditimit. Muzika dhe fonia do jenë të kënaqura nga një <strong>DJ profesional.</strong> Nuk do mungojë dhe muzika e gëzueshme e përzgjedhur dhe kërcimi gjatë intervaleve të pushimit!</> : <>A bonus of the event is also the <strong>music!</strong> We will have carefully selected music during meditations that is scientifically proven to harmonize the heart and support the meditation process. Music and sound will be managed by a <strong>professional DJ.</strong> Joyful curated music and dancing during break intervals won't be missing either!</>}
                </p>
              </div>
            </div>

            {/* Komuniteti */}
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col" style={{ boxShadow: "0 4px 18px rgba(0,0,0,0.10)", border: "1px solid #e4e4e7" }}>
              <div style={{ height: 180 }} className="overflow-hidden shrink-0">
                <img src="/img/TONI0935.JPG" alt="Komuniteti" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-1">
                <h3 className="font-bold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", color: "#18181b" }}>
                  {lang === "al" ? "Komuniteti" : "Community"}
                </h3>
                <p className="text-zinc-600 [&_strong]:text-violet-600" style={{ fontSize: 15, lineHeight: 1.75 }}>
                  {lang === "al" ? <>
                    <span className="block mb-2">Një surprizë e këtij eventi është dhe <strong>krijimi i komunitetit.</strong> Në retreatin e fundit, një grup komplet i panjohur personash krijuan një atmosferë të jashtëzakonshme <strong>bashkëpunimi dhe miqësie</strong> gjatë eventit.</span>
                    <span className="block">Kur njerëzit punojnë bashkë drejt të njëjtit qëllim — <strong>transformimit të brendshëm</strong> — krijohen lidhje të thella dhe autentike që nuk mund të krijohen lehtë në jetën e përditshme.</span>
                  </> : <>
                    <span className="block mb-2">A surprise of this event is also the <strong>creation of community.</strong> At the last retreat, a group of complete strangers created an extraordinary atmosphere of <strong>collaboration and friendship</strong> during the event.</span>
                    <span className="block mb-2">When people work together toward the same goal — <strong>inner transformation</strong> — deep and authentic connections form that are hard to create in everyday life.</span>
                    <span className="block">When people work together toward the same goal — <strong>inner transformation</strong> — deep and authentic connections form that are hard to create in everyday life.</span>
                  </>}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Seanca Bonus Online */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#F4F4F5" }}>
        <div className="max-w-4xl mx-auto px-6">

          {/* Badge + Title */}
          <div className="mb-8">
            <h2 className="font-bold leading-tight mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#18181b" }}>
              {lang === "al" ? <>3 Seanca <span style={{ color: "#7C3AED" }}>Bonus Online</span></> : <>3 Bonus <span style={{ color: "#7C3AED" }}>Online Sessions</span></>}
            </h2>
            <p className="text-zinc-500" style={{ fontSize: 16, lineHeight: 1.6 }}>
              {t("Zhvilloje veten. Lidhu më thellë. Krijo ndryshimin.", "Develop yourself. Connect deeper. Create change.")}
            </p>
          </div>

          {/* 3 Items */}
          <div className="space-y-8 mb-10">
            {[
              {
                n: 1,
                title: lang === "al" ? "ZHVILLIMI I QËNDRUESHËM" : "SUSTAINABLE DEVELOPMENT",
                img: "/img/TONI1379.JPG",
                text: lang === "al"
                  ? <>Ne marrim gjë sa shto sa mili të përgatiturave nga ana juaj para retreatit. Do zhvillojmë bashkë <strong>2 seanca online</strong> për t'ju informuar paraprakisht dhe për t'ju ndihmuar të kuptoni teknikat dhe praktikat. Qëllimi është që të vini të <strong>përgatitur dhe të motivuar</strong> për të nxjerrë maksimumin nga 8 ditët e retreatit.</>
                  : <>We take care of your preparation before the retreat. Together we will conduct <strong>2 online sessions</strong> to inform you in advance and help you understand the techniques and practices. The goal is for you to arrive <strong>prepared and motivated</strong> to get the most out of the 8 days.</>,
              },
              {
                n: 2,
                title: lang === "al" ? "LIDHJE MË E THELLË" : "DEEPER CONNECTION",
                img: "/img/TONI2629.JPG",
                text: lang === "al"
                  ? <>Seanca online do të ofrojnë mundësinë për t'u njohur me bashkëpjesëmarrësit para retreatit. Ky <strong>lidhje paraprake</strong> ju ndihmon të ndiheni të lirshëm dhe të hapeni plotësisht gjatë javës së retreatit, duke e bërë <strong>eksperiencën shumë më të thellë.</strong></>
                  : <>The online sessions offer the opportunity to meet fellow participants before the retreat. This <strong>prior connection</strong> helps you feel free and fully open during the retreat week, making the <strong>experience much deeper.</strong></>,
              },
              {
                n: 3,
                title: lang === "al" ? "MBËSHTETJE & INTEGRIM" : "SUPPORT & INTEGRATION",
                img: "/img/TONI0877.JPG",
                text: lang === "al"
                  ? <>Pas retreatit, do keni akses në <strong>1 seancë integrimi online</strong> ku do të ndani eksperiencën tuaj dhe do të merrni mbështetje për të <strong>integruar ndryshimet</strong> në jetën tuaj të përditshme. Kjo seancë është thelbësore për të mbajtur gjallë transformimin e arritur.</>
                  : <>After the retreat, you will have access to <strong>1 online integration session</strong> where you will share your experience and receive support to <strong>integrate the changes</strong> into your daily life. This session is essential to keep the achieved transformation alive.</>,
              },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-5">
                {/* Circle image with number */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden">
                    <img src={item.img} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Text */}
                <div>
                  <p className="font-bold mb-1 tracking-wide" style={{ color: "#18181b", fontSize: 13 }}>{item.title}</p>
                  <p className="text-zinc-600" style={{ fontSize: 15, lineHeight: 1.75 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Zoom CTA */}
          <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #7C3AED 0%, #a78bfa 100%)" }}>
            {/* Laptop image */}
            <div className="w-full overflow-hidden" style={{ height: 200 }}>
              <img
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=900&q=80"
                alt="Zoom online session"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 40%" }}
              />
            </div>
            {/* Text + button */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="text-center md:text-left">
                <p className="text-white font-bold text-lg mb-1">{t("3 SEANCA BONUS PER TY!", "3 BONUS SESSIONS FOR YOU!")}</p>
                <p className="text-white/80" style={{ fontSize: 14 }}>{t("Një ofertë e paçmuar për trupin, mendjen & shpirtin.", "An invaluable offer for body, mind & spirit.")}</p>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#2D8CFF"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13.5l-3-2.25V15H7V9h6.5v1.75l3-2.25v7z"/></svg>
                <span className="font-bold text-zinc-800">Zoom</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vendi / Hotel Section */}
      <section className="py-14 md:py-20 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-center mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "#18181b" }}>
            {lang === "al" ? <>Në çfarë vendi do <span style={{ color: "#7C3AED" }}>organizohet?</span></> : <>Where will it <span style={{ color: "#7C3AED" }}>be held?</span></>}
          </h2>
          <p className="text-center text-zinc-500 mb-10 max-w-xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
            {t("Çmimet e hotelit janë të negociuara posaçërisht për të siguruar ofertën më të mirë.", "Hotel prices are specially negotiated to ensure the best offer.")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                img: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776946918258-0.jpeg",
                icon: <svg width="22" height="22" fill="none" stroke="#7C3AED" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
                title: t("Vendi", "Venue"),
                text: t("Retreat-i do të mbahet në një hotel resort me 5 yje, buzë detit dhe i rrethuar nga natyra, me palma. Hoteli disponon ambiente të ndryshme buzë detit ku mund të drekoni, të shijoni një kafe apo të shëtisni.", "The retreat will be held at a 5-star resort hotel, by the sea and surrounded by nature, with palm trees."),
              },
              {
                img: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776946918266-1.jpeg",
                icon: <svg width="22" height="22" fill="none" stroke="#7C3AED" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
                title: t("Salla", "Conference Hall"),
                text: t("Salla e konferencave do të jetë me hapësira të mëdha, të përshtatura për një event të tillë. Ndriçimi dhe akustika janë të dizajnuara për të krijuar një ambient të rehatshëm dhe frymëzues gjatë gjithë sesioneve.", "The conference hall will have large spaces, adapted for such an event. The lighting and acoustics are designed to create a comfortable and inspiring atmosphere throughout all sessions."),
              },
              {
                img: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776946918274-2.jpeg",
                icon: <svg width="22" height="22" fill="none" stroke="#7C3AED" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M2 20v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6"/><path d="M2 10V8a2 2 0 0 1 2-2h4V4h8v2h4a2 2 0 0 1 2 2v2"/></svg>,
                title: t("Dhomat", "Rooms"),
                text: t("Dhomat janë me një dizajn modern dhe funksional, me pamje nga deti ose kopështi. Çdo dhomë disponon të gjitha komoditetet e nevojshme. Çmimet janë të negociuara posaçërisht për të siguruar ofertën më të favorshme për pjesëmarrësit.", "The rooms have a modern and functional design, with sea or garden views. Each room has all the necessary amenities. Prices are specially negotiated to provide the most favorable offer for participants."),
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden flex flex-col" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1px solid #f0f0f0" }}>
                <div className="overflow-hidden" style={{ height: 180 }}>
                  <img src={card.img} alt={typeof card.title === "string" ? card.title : ""} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col items-center text-center px-4 py-5 flex-1">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ background: "rgba(124,58,237,0.08)" }}>
                    {card.icon}
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, color: "#7C3AED" }}>{card.title}</h3>
                  <p className="text-zinc-600" style={{ fontSize: 14, lineHeight: 1.7 }}>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="cmimi" className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-bold mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#18181b" }}>
            {t("Çmimi: Trajnim + Hotel ALL inclusive", "Pricing: Training + Hotel ALL inclusive")}
          </h2>

          {/* Varianti 1 */}
          <div className="mb-6">
            <p className="font-bold italic mb-1" style={{ color: "#7C3AED", fontSize: 17 }}>
              {t(
                <>Varianti 1: <strong>500 Euro</strong> (trajnimi) + <strong>364 Euro</strong></>,
                <>Variant 1: <strong>500 Euro</strong> (training) + <strong>364 Euro</strong></>
              )}
            </p>
            <p className="text-zinc-500 mb-2" style={{ fontSize: 14 }}>
              {t("(hotel me 5 yje all inclusive, 7 netë dhomë dyshe ose treshe) =", "(5-star hotel all inclusive, 7 nights double or triple room) =")}
            </p>
            <p className="font-extrabold" style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", color: "#18181b" }}>
              {t("864 Euro (totali)", "864 Euro (total)")}
            </p>
          </div>

          <div className="h-px bg-zinc-200 my-6" />

          {/* Varianti 2 */}
          <div className="mb-8">
            <p className="font-bold italic mb-1" style={{ color: "#7C3AED", fontSize: 17 }}>
              {t(
                <>Varianti 2: <strong>500 Euro</strong> (trajnimi) + <strong>616 Euro</strong></>,
                <>Variant 2: <strong>500 Euro</strong> (training) + <strong>616 Euro</strong></>
              )}
            </p>
            <p className="text-zinc-500 mb-2" style={{ fontSize: 14 }}>
              {t("(hotel me 5 yje all inclusive, 7 netë dhomë teke) =", "(5-star hotel all inclusive, 7 nights single room) =")}
            </p>
            <p className="font-extrabold" style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", color: "#18181b" }}>
              {t("1116 Euro (totali)", "1116 Euro (total)")}
            </p>
          </div>

          <div className="h-px bg-zinc-200 mb-8" />

          {/* Companion pricing */}
          <p className="font-bold mb-5 text-zinc-800" style={{ fontSize: 15 }}>
            {t(
              "Për familjarët ose personat që duan t'ju shoqërojnë (por nuk do marrin pjesë në trajnim):",
              "For family members or those who want to accompany you (but will not attend the training):"
            )}
          </p>

          <div className="space-y-5 text-left">
            <div>
              <p className="font-bold text-zinc-800" style={{ fontSize: 15 }}>
                {t("Për të rriturit: 364 Euro për person", "For adults: 364 Euro per person")}
              </p>
              <p className="text-zinc-500" style={{ fontSize: 14 }}>
                {t("(hoteli me 5 yje all inclusive, 7 netë dhomë me personin që shoqëron)", "(5-star hotel all inclusive, 7 nights room with the participant)")}
              </p>
            </div>
            <div>
              <p className="font-bold text-zinc-800" style={{ fontSize: 15 }}>
                {t("Për fëmijët 4–8 vjeç: 182 Euro", "For children 4–8 years: 182 Euro")}
              </p>
              <p className="text-zinc-500" style={{ fontSize: 14 }}>
                {t("(nëse fëmijët shoqërohen të paktën nga 2 të rritur, përndryshe 364 Euro)", "(if children are accompanied by at least 2 adults, otherwise 364 Euro)")}
              </p>
            </div>
            <div>
              <p className="font-bold text-zinc-800" style={{ fontSize: 15 }}>
                {t("Për fëmijët 9–10 vjeç: 255 Euro", "For children 9–10 years: 255 Euro")}
              </p>
              <p className="text-zinc-500" style={{ fontSize: 14 }}>
                {t("(nëse fëmijët shoqërohen të paktën nga 2 të rritur, përndryshe 364 Euro)", "(if children are accompanied by at least 2 adults, otherwise 364 Euro)")}
              </p>
            </div>
          </div>

          <p className="mt-8 italic text-center" style={{ color: "#7C3AED", fontSize: 14, lineHeight: 1.7 }}>
            {t(
              "Çmimet e hotelit janë të negociuara me hotelin në mënyrë që të merrni një ofertë më të ulët se zakonisht për sezonin kur zhvillohet aktiviteti.",
              "Hotel prices are negotiated with the hotel so that you receive a lower offer than usual for the season when the event takes place."
            )}
          </p>
        </div>
      </section>

      {/* Kush Jemi */}
      <AboutSection />

      {/* Transformime Reale */}
      <VideoTestimonialsSection />


      {/* Final CTA Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(30,10,60,0.72) 0%, rgba(30,10,60,0.82) 100%)" }} />

        {/* Content */}
        <div className="relative z-10 max-w-xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="font-bold text-white mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            {t(
              <>Gati të hapësh derën e<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>transformimit tënd?</span></>,
              <>Ready to open the door to<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>your transformation?</span></>
            )}
          </h2>

          <div className="text-2xl mb-4">🤍</div>

          <p className="text-white/80 mb-7 mx-auto" style={{ fontSize: 15, lineHeight: 1.75, maxWidth: 380 }}>
            {t(
              "Rezervo vendin tënd në Retreatin e Meditimit 8-Ditësh. Bëhu pjesë e një përvoje që mund të ndryshojë jetën tënde.",
              "Reserve your spot at the 8-Day Meditation Retreat. Be part of an experience that can change your life."
            )}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-7">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/20">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              <span className="text-white font-semibold" style={{ fontSize: 13 }}>11 – 18 Prill 2027</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/20">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              <span className="text-white font-semibold" style={{ fontSize: 13 }}>{t("Hotel 5★ • Bregdeti", "5★ Hotel • Seaside")}</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 mb-4"
            style={{ background: "linear-gradient(135deg, #7C3AED 0%, #4e29c5 100%)", color: "#fff", fontSize: 15, letterSpacing: "0.05em" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            {t("REZERVO VENDIN TANI", "RESERVE YOUR SPOT NOW")} ›
          </a>

          <p className="text-white/60 flex items-center justify-center gap-1.5" style={{ fontSize: 13 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {t("Vendet janë të kufizuara!", "Spots are limited!")}
          </p>
        </div>

        {/* Stats row */}
        <div className="relative z-10 border-t border-white/10" style={{ background: "rgba(20,5,50,0.7)" }}>
          <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "2500+", label: t("Pjesëmarrës nga e gjithë bota", "Participants from around the world") },
              { value: "30+", label: t("Retreat-e dhe trajnime transformuese", "Transformative retreats and trainings") },
              { value: "95%", label: t("Pjesëmarrësve do të riktheheshin sërish", "Would return again") },
              { value: t("Një tribu.", "One tribe."), label: t("Një mision. Jetë e re.", "One mission. New life.") },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-extrabold text-white mb-1" style={{ fontSize: 18 }}>{s.value}</p>
                <p className="text-white/60 leading-tight" style={{ fontSize: 12 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
