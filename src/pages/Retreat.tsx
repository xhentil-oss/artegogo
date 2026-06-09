import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

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
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative overflow-hidden min-h-[280px] md:min-h-[520px] flex items-center justify-center">
        <img
          src="/img/retreat-photo.png"
          alt="Retreat"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.38)" }} />
        <div className="relative w-full max-w-5xl mx-auto px-6 text-center">
          <h1 className="hero-title-lg font-bold text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {t("Retreat", "Meditation")}{" "}
            <span style={{ color: "#C4B5FD", fontSize: "inherit" }}>{t("Meditimi", "Retreat")}</span>
          </h1>
        </div>
      </div>

      {/* Intro text section */}
      <section className="max-w-5xl mx-auto px-6 py-10 md:py-16">
        <div className="space-y-4 text-zinc-700 [&_strong]:text-violet-600" style={{ fontSize: 12, lineHeight: 1.8 }}>
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
          <div className="absolute inset-0" style={{ background: "rgba(20,5,50,0.58)" }} />
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
            <div key={i} className="rounded-xl overflow-hidden" style={{ height: 110 }}>
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
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
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
            <div key={i} className="py-4 [&_strong]:text-violet-600 [&_p]:text-zinc-600" style={{ fontSize: 16, lineHeight: 1.7 }}>
              <h3 className="font-bold mb-2 text-zinc-900" style={{ fontSize: 16, lineHeight: 1.7 }}>
                {item.title}
              </h3>
              {item.body}
            </div>
          ))}
        </div>
      </section>

      {/* Vendi / Hotel Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 border" style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
          {t("Vendndodhja", "Venue")}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 text-center">
          {t("Hotel Resort 5★ — Bregdeti Shqiptar", "5★ Resort Hotel — Albanian Riviera")}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-700 md:text-base text-center max-w-5xl mx-auto mb-12">
          {t(
            "Çmimet e hotelit janë të negociuara posaçërisht me hotelin në mënyrë që të merrni një ofertë më të ulët se zakonisht për sezonin kur zhvillohet aktiviteti.",
            "Hotel prices are specially negotiated to give you a lower rate than usual for the season when the event takes place."
          )}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Vendi */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-56 rounded-2xl overflow-hidden">
              <img
                src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776946918258-0.jpeg"
                alt="Hotel resort buzë detit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-2">
              <h3 className="font-bold text-zinc-800 text-base mb-2">{t("Vendi", "Venue")}</h3>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {t(
                  "Retreat-i do të mbahet në një hotel resort me 5 yje, buzë detit dhe i rrethuar nga natyra, me palma. Hoteli disponon ambiente të ndryshme buzë detit ku mund të drekoni, të shijoni një kafe apo të shëtisni buzë detit.",
                  "The retreat will be held at a 5-star resort hotel, by the sea and surrounded by nature, with palm trees. The hotel has various beachside venues where you can dine, enjoy a coffee or take a walk by the sea."
                )}
              </p>
            </div>
          </div>

          {/* Salla */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-56 rounded-2xl overflow-hidden">
              <img
                src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776946918266-1.jpeg"
                alt="Salla e konferencave"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-2">
              <h3 className="font-bold text-zinc-800 text-base mb-2">{t("Salla", "Conference Hall")}</h3>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {t(
                  "Salla e konferencave do të jetë me hapësira të mëdha, të përshtatura për një event të tillë.",
                  "The conference hall will have large spaces, adapted for such an event."
                )}
              </p>
            </div>
          </div>

          {/* Dhomat */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-56 rounded-2xl overflow-hidden">
              <img
                src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776946918274-2.jpeg"
                alt="Dhomat e hotelit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-2">
              <h3 className="font-bold text-zinc-800 text-base mb-2">{t("Dhomat", "Rooms")}</h3>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {t(
                  "Dhomat janë me një dizajn modern dhe funksional. Çmimet e hotelit janë të negociuara me hotelin në mënyrë që të merrni një ofertë më të ulët se zakonisht për sezonin kur zhvillohet aktiviteti.",
                  "The rooms have a modern and functional design. Hotel prices are negotiated with the hotel so you receive a lower offer than usual for the season when the event takes place."
                )}
              </p>
            </div>
          </div>

          {/* Ushqimi */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-56 rounded-2xl overflow-hidden">
              <img
                src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776947079089-0.jpeg"
                alt="Ushqimi buffet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-2">
              <h3 className="font-bold text-zinc-800 text-base mb-2">{t("Ushqimi", "Food")}</h3>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {t(
                  "Ushqimi është all inclusive — çdo vakt (mëngjesi, dreka, darka) përfshihet në paketë. Ushqimi është buffet, me një larmishmëri specialitetesh të kuzhinës mesdhetare me cilësi të lartë.",
                  "Food is all inclusive — every meal (breakfast, lunch, dinner) is included in the package. Food is buffet with a variety of high-quality Mediterranean cuisine specialties."
                )}
              </p>
            </div>
          </div>

          {/* Fasilitetet */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-56 rounded-2xl overflow-hidden">
              <img
                src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776947079099-1.jpeg"
                alt="Pishinat dhe fasilitetet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-2">
              <h3 className="font-bold text-zinc-800 text-base mb-2">{t("Fasilitetet", "Facilities")}</h3>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {t(
                  "Pishinat e jashtme dhe të brendshme, ambienti i plazhit, shezlongët, palestra, DAMAI Wellness, SPA, parkim dhe Wi-Fi falas — gjithçka e disponueshme gjatë gjithë aktivitetit.",
                  "Outdoor and indoor pools, beach area, sunbeds, gym, DAMAI Wellness, SPA, parking and free Wi-Fi — all available throughout the event."
                )}
              </p>
            </div>
          </div>

          {/* Zonë e qetë */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-56 rounded-2xl overflow-hidden">
              <img
                src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776947079121-2.jpeg"
                alt="Zonë e qetë luksoze"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-2">
              <h3 className="font-bold text-zinc-800 text-base mb-2">{t("Zonë e qetë", "Peaceful Area")}</h3>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {t(
                  "Hoteli ndodhet në një nga zonat më të qeta dhe të rehatshme të bregdetit, por njëkohësisht i rrethuar nga resorte luksoze dhe lokale luksoze që mund t'i vizitoni në darkë.",
                  "The hotel is located in one of the most peaceful and comfortable areas of the coast, yet surrounded by luxury resorts and upscale venues you can visit in the evening."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="cmimi" className="py-20 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 border" style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
            {t("Çmimi", "Pricing")}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 text-center">
            {t("Trajnim + Hotel ALL Inclusive", "Training + Hotel ALL Inclusive")}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base text-center mb-10 max-w-xl mx-auto">
            {t(
              "Çmimet e hotelit janë të negociuara posaçërisht me hotelin në mënyrë që të merrni një ofertë më të ulët se zakonisht për sezonin kur zhvillohet aktiviteti.",
              "Hotel prices are specially negotiated with the hotel so that you receive a lower offer than usual for the season when the event takes place."
            )}
          </p>

          {/* Main pricing variants */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {pricingVariants.map((v, i) => (
              <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-7">
                <h3 className="font-bold text-lg mb-5 text-zinc-800">{v.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm leading-relaxed text-zinc-700 md:text-base">
                    <span>{t("Trajnimi", "Training")}</span>
                    <span className="font-semibold">{v.training}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm leading-relaxed text-zinc-700 md:text-base">
                    <span>{t("Hotel 5★ ALL Inclusive", "5★ Hotel ALL Inclusive")}</span>
                    <span className="font-semibold">{v.hotel}</span>
                  </div>
                  <div className="h-px bg-zinc-200" />
                  <div className="flex justify-between items-center text-zinc-800">
                    <span className="font-bold">{t("Totali", "Total")}</span>
                    <span className="text-2xl font-extrabold" style={{ color: "#9D8FEF" }}>{v.total}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{v.note}</p>
              </div>
            ))}
          </div>

          {/* Companion pricing */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-7">
            <h3 className="text-zinc-800 font-bold text-base mb-5">
              {t("Për familjarët ose shoqëruesit (pa trajnim)", "For family members or companions (without training)")}
            </h3>
            <div className="space-y-4">
              {companions.map((c, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm leading-relaxed text-zinc-700 md:text-base font-semibold">{c.label}</p>
                    <p className="text-sm leading-relaxed text-zinc-700 md:text-base mt-0.5">{c.note}</p>
                  </div>
                  <span className="font-extrabold text-lg shrink-0" style={{ color: "#9D8FEF" }}>{c.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 border" style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>FAQ</span>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10 text-center">
          {t("Pyetje të shpeshta", "Frequently asked questions")}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-zinc-100 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className="text-sm leading-relaxed text-zinc-700 md:text-base font-normal">{faq.q}</span>
                <span className={`w-6 h-6 rounded-full border border-violet-200 text-violet-600 flex items-center justify-center shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial — Përshtypje nga eventi */}
      <section className="border-y border-zinc-100 py-20 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 border" style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
            {t("Përshtypje nga eventi", "Event Impressions")}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 text-center">
            {t("Vlerësim nga pjesëmarrësit", "Participant Reviews")}
          </h2>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base text-center mb-12">
            {t("Fjalët e atyre që e përjetuan", "Words from those who lived it")}
          </p>

          <div className="relative bg-white rounded-3xl border border-violet-100 p-8 md:p-12">
            {/* Quote mark */}
            <div className="absolute -top-5 left-10 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#9D8FEF" }}>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.016.66-1.066 1.515-1.867 2.558-2.403L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.63-.576.94-1.365.94-2.368l.002.003z"/>
              </svg>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-zinc-700 md:text-base">
              <p>
                {t(
                  "Jam ende mes lotësh, mes emocionesh, sa herë shoh fotot dhe videot e këtij retreat-i me përmasa gjigante. Një eveniment me përmasa të jashtëzakonshme, të paimagjinueshme, të papërceptueshme për këdo që s'e ka përjetuar ashtu si ne.",
                  "I am still in tears, full of emotions, every time I see the photos and videos of this giant retreat. An event of extraordinary, unimaginable, imperceptible dimensions for anyone who hasn't experienced it as we did."
                )}
              </p>
              <p>
                {t(
                  "Ndoshta fjalët janë të pakta për të përshkruar atë që përjetuam aty, ku energjia shpërtheu si një central bërthamor. Erdhëm me idenë thjesht për t'u zbavitur, por ajo që ndodhi aty ishte përtej asaj që mund të imagjinonim.",
                  "Perhaps words are too few to describe what we experienced there, where energy exploded like a nuclear power plant. We came simply to have fun, but what happened there was beyond what we could imagine."
                )}
              </p>
              <p>
                {t(
                  "Leksione pa fund të shpjeguara me aq mjeshtëri nga ti, Artemis, dhe Marvini. Meditime që na lidhën me Hyjnoren, aty ku zbuluam potenciale dhe zemra u ndje e lirë. Ku shpërthyem dhe u çliruam nga çdo programim. Ku vetja jonë u ndje e lirë. Aty ku të qeshurat dhe lotët e gëzimit nuk kishin limit. Aty ku u bëmë të gjithë NJË.",
                  "Endless lectures explained with such mastery by you, Artemis, and Marvin. Meditations that connected us to the Divine, where we discovered potential and the heart felt free. Where we burst and freed ourselves from every programming. Where laughter and tears of joy had no limit. Where we all became ONE."
                )}
              </p>
              <p>
                {t(
                  "Një pjesëz parajse që po vazhdojmë ta ndiejmë ende në brendinë tonë, ku bota që na rrethon na duket edhe më e bukur se më parë. Ku flinim dhe zgjoheshim çdo ditë me një dëshirë të madhe dhe kërkonim të shijonim çdo sekondë me njëri-tjetrin. 2 orë gjumë — e papërballueshme për çdo njeri — por që ne nuk e ndjenim mungesën e gjumit asnjë çast, sepse energjia ishte spektakolare.",
                  "A small piece of paradise that we continue to feel inside us, where the world around us seems even more beautiful than before. Where we slept and woke each day with great desire, wanting to enjoy every second with each other. 2 hours of sleep — unbearable for anyone — but we didn't feel the lack of sleep for a moment, because the energy was spectacular."
                )}
              </p>
              <p>
                {t(
                  "Shërime për ata që ishin të sëmurë, shërime dhe hapje zemre për të gjithë të tjerët. Zbuluam se sa shumë mundemi. Kurset me ty kanë qenë brilante, por ky retreat ishte VULA që iu vu asaj pune të jashtëzakonshme.",
                  "Healing for those who were sick, healing and heart opening for all others. We discovered how much we can do. The courses with you have been brilliant, but this retreat was the SEAL placed on that extraordinary work."
                )}
              </p>
              <p className="font-semibold text-zinc-700">
                {t(
                  "Falënderimet dhe mirënjohjet janë pa limit për ty dhe Marvinin që nuk na keni lëshuar asnjë çast dorën, madje na keni ngritur gjithmonë edhe më fuqishëm. Ne u bëmë NJË.",
                  "Gratitude and appreciation are limitless for you and Marvin, who never let go of our hands, always lifting us even more powerfully. We became ONE."
                )}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-violet-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ backgroundColor: "#9D8FEF" }}>
                P
              </div>
              <div>
                <p className="font-semibold text-zinc-800 text-sm">{t("Pjesëmarrëse e Retreat-it", "Retreat Participant")}</p>
                <div className="flex gap-0.5 mt-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">{t("Gati të rezervosh?", "Ready to book?")}</h2>
        <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-8">
          {t(
            "Vendet janë të kufizuara. Kontaktoni na tani për të siguruar vendin tuaj në këtë eksperiencë unike.",
            "Spots are limited. Contact us now to secure your place in this unique experience."
          )}
        </p>
        <a
          href="/kontakt"
          className="inline-flex items-center gap-3 text-white font-bold px-10 py-4 rounded-full hover:scale-105 transition-all text-sm leading-relaxed md:text-base"
          style={{ backgroundColor: "#9D8FEF" }}
        >
          {t("Rezervo vendin tënd", "Reserve your spot")} →
        </a>
      </section>
    </div>
  );
};
