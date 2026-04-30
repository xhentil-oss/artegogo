import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const RetreatPage = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: t("8 Ditë", "8 Days"), label: t("Kohëzgjatja", "Duration") },
    { value: t("Hotel 5★", "5★ Hotel"), label: t("Vendndodhja", "Location") },
    { value: t("All Inclusive", "All Inclusive"), label: t("Paketa", "Package") },
    { value: t("Bregdeti Shqiptar", "Albanian Riviera"), label: t("Lokacioni", "Location") },
  ];

  const reasons = [
    t("Të shërohesh dhe të lirohesh nga blloqet emocionale", "To heal and release emotional blockages"),
    t("Të rifitosh paqen dhe harmoninë e brendshme", "To regain inner peace and harmony"),
    t("Të tërheqësh pasuri, bollëk dhe liri financiare", "To attract wealth, abundance and financial freedom"),
    t("Të rifitosh fuqinë tënde dhe besimin tek vetja", "To reclaim your power and self-belief"),
    t("Të transformosh rrënjësisht jetën tënde", "To radically transform your life"),
    t("Të zbulosh gjallërinë dhe fuqinë e trupit tënd", "To discover the vitality and power of your body"),
  ];

  const included = [
    t("Meditime të thella çdo ditë — mëngjes, pasdite dhe mbrëmje", "Deep meditations every day — morning, afternoon and evening"),
    t("Leksione teorike dhe teknika shkencore", "Theoretical lectures and scientific techniques"),
    t("Shpjegime të teknikave dhe ushtrime të ndryshme", "Technique explanations and various exercises"),
    t("Shërim dhe çlirim emocional", "Healing and emotional release"),
    t("Fokus tek vetja dhe rifitimi i energjisë", "Focus on self and energy restoration"),
    t("Hotel 5 yje ALL inclusive — 7 netë bregdet shqiptar", "5-star hotel ALL inclusive — 7 nights Albanian Riviera"),
    t("Materiale dhe audio pas retreat-it", "Materials and audio after the retreat"),
    t("Mbështetje personale pas retreat-it", "Personal support after the retreat"),
  ];

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
      <div className="relative py-16 md:py-28 px-4 md:px-6 overflow-hidden min-h-[300px] md:min-h-[420px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776945645841-0.jpeg')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/15 text-white border border-white/20">
            Retreat
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("Retreat", "Meditation")}{" "}
            <span style={{ color: "#C4B5FD" }}>
              {t("Meditimi", "Retreat")}
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            {t(
              "Jeni të ftuar për të përjetuar eksperiencën më të paharruar të jetës suaj. 8 ditë transformimi i thellë në bregdetin shqiptar — hotel 5 yje, ALL inclusive.",
              "You are invited to experience the most unforgettable experience of your life. 8 days of deep transformation on the Albanian Riviera — 5-star hotel, ALL inclusive."
            )}
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <section className="border-y border-zinc-100 py-10 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-violet-100 p-4">
              <div className="text-sm leading-relaxed font-extrabold text-zinc-700 mb-1 md:text-base" style={{ color: "#9D8FEF" }}>{s.value}</div>
              <div className="text-sm leading-relaxed text-zinc-700 md:text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro: Invitation */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 border" style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
              {t("Ftesa jonë", "Our Invitation")}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 leading-snug">
              {t("Zbuloni gjallërinë dhe fuqinë e trupit tuaj", "Discover the vitality and power of your body")}
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-zinc-700 md:text-base">
              <p>
                {t(
                  "Jeni të ftuar për të përjetuar eksperiencën më të paharruar të jetës tuaj. Të zhyteni thellë brenda vetes, të harmonizoni trupin, biologjinë dhe fiziologjinë tuaj. Studimet kanë treguar se gjenet mund të ndryshojnë brenda 4 ditëve me meditim intensiv.",
                  "You are invited to experience the most unforgettable experience of your life. To dive deep within yourself, to harmonize your body, biology and physiology. Studies have shown that genes can change within 4 days of intensive meditation."
                )}
              </p>
              <p>
                {t(
                  "Ne do të jemi bashkë për 8 ditë — një javë për t'u mbajtur mend në një hotel me 5 yje në bregdetin shqiptar. Shkëputuni për një moment nga zhurma e jetës tuaj të përditshme, futuni thellë brenda vetes, rikrijojeni dhe ngrijeni veten sërish.",
                  "We will be together for 8 days — a week to remember in a 5-star hotel on the Albanian coast. Disconnect from the noise of your everyday life, dive deep within yourself, recreate and elevate yourself again."
                )}
              </p>
              <p>
                {t(
                  "Energjia e jashtëzakonshme në retreat-et tona transmetohet në çdo aspekt të jetës tuaj. Jo vetëm trupi, zemra dhe shpirti juaj do të ndihen më të lirë — e gjithë jeta fillon të ndryshojë. Sepse kur besoni tek vetja, besoni tek mundësitë — dhe mundësitë nuk vonojnë të vijnë.",
                  "The extraordinary energy in our retreats is transmitted to every aspect of your life. Not only your body, heart and soul will feel freer — your entire life begins to change. Because when you believe in yourself, you believe in possibilities — and possibilities don't take long to come."
                )}
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-100 p-8" style={{ backgroundColor: "#F9FAFB" }}>
            <h3 className="text-base font-bold text-zinc-800 mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center">?</span>
              {t("Çfarë është retreat-i ynë?", "What is our retreat?")}
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
              <p>
                {t(
                  "Retreat-i ynë është i veçantë, pasi është ndër të parët e këtij lloji në Shqipëri. Sjellim eksperiencën ndërkombëtare në një event 8-ditor, i cili do të mbahet në bregdetin shqiptar.",
                  "Our retreat is special, as it is among the first of its kind in Albania. We bring international experience to an 8-day event, which will be held on the Albanian coast."
                )}
              </p>
              <p>
                {t(
                  "Çdo ditë — duke nisur nga orët e para të mëngjesit deri në mbrëmje — do të mbahen meditime dhe leksione teorike, shpjegime të teknikave dhe ushtrime të ndryshme për të krijuar një jetë të re, për shërim dhe çlirim emocional.",
                  "Every day — from the early morning hours until evening — meditations and theoretical lectures will be held, technique explanations and various exercises to create a new life, for healing and emotional release."
                )}
              </p>
              <p className="font-medium" style={{ color: "#9D8FEF" }}>
                {t("Fokusi është tek vetja jote dhe rifitimi i energjisë tënde.", "The focus is on you and the recovery of your energy.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to come */}
      <section className="border-y border-zinc-100 py-16 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex justify-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 border mx-auto block text-center" style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
            {t("Pse të vish", "Why to come")}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10 text-center">
            {t("Për çfarë arsye mund të vish?", "For what reason can you come?")}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-violet-100 p-5">
                <span className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#9D8FEF" }}>{i + 1}</span>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 border" style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
          {t("Çfarë përfshin", "What's included")}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10 text-center">
          {t("Çfarë përfshin retreat-i", "What the retreat includes")}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {included.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-violet-100 p-4" style={{ backgroundColor: "#F9FAFB" }}>
              <span className="mt-0.5 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0" style={{ backgroundColor: "#9D8FEF" }}>✓</span>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{item}</p>
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
        <p className="text-sm leading-relaxed text-zinc-700 md:text-base text-center max-w-2xl mx-auto mb-12">
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
        <div className="max-w-4xl mx-auto">
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
      <section className="max-w-3xl mx-auto px-6 py-16">
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
        <div className="max-w-4xl mx-auto">
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
      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
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
