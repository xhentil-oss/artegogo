import { ShoppingCart, BookOpen, Check, X, MapPin, Globe, Mountain, ChevronRight, MessageSquare, Heart, Target, Brain, ShieldCheck, Sparkles, Sun, Leaf, LogOut, UserCheck, TrendingUp, User } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const BOOK_COVER = 'https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776931629479-0.png';
const BOOK2_COVER = 'https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776932436081-0.png';

export const ShopLibratPage = () => {
  const { t } = useLanguage();
  const [descModalOpen, setDescModalOpen] = useState(false);
  const [descModalOpen2, setDescModalOpen2] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderCover, setOrderCover] = useState(BOOK_COVER);
  const openOrderModal = (cover: string | null = BOOK_COVER) => { setOrderCover(cover ?? ''); setOrderModalOpen(true); };

  const FULL_DESCRIPTION = t(
    `Jeta është një pasqyrë.\nAjo reflekton vazhdimisht mënyrën si mendojmë, si ndihemi dhe kush jemi në të vërtetë.\nAjo që shohim jashtë… është ajo që mbajmë brenda.\n\nPo sikur të çliroheshit nga besimet kufizuese dhe çdo pengesë që ju mban pas?\nSi do të ishte të shprehnit veten tuaj të vërtetë dhe të jetonit me autenticitet, duke rizbuluar entuziazmin dhe dashurinë për jetën?\n\nKy libër është një ftesë për këtë transformim. Një dialog me veten tuaj më të thellë.\n\nMjeshtrua i Liqenit Pasqyrë nuk është thjesht një libër… është një përjetim. I ndërtuar në formën e dialogëve poetikë, ai ju udhëheq në një bisedë të thellë me veten tuaj. Një proces reflektimi që ju ndihmon të shihni më qartë mendimet, emocionet dhe modelet që formojnë realitetin tuaj.\n\nNë çdo faqe, ju filloni të kuptoni më thellë veten… dhe gradualisht të çliroheni nga ajo që nuk ju shërben më.\n\nNga kufizimi… në liri\n\nKy libër ju mëson se si të lëshoni besimet kufizuese dhe të gjitha strukturat e brendshme që ju mbajnë të lidhur me të shkuarën. Ai ju udhëzon të:\n• kuptoni dhe transformoni mendimet tuaja\n• pranoni dhe alkimizoni emocionet\n• lini pas modelet që nuk ju shërbejnë më\n• dhe të krijoni një mënyrë të re të të jetuarit\n\nSepse transformimi i vërtetë nuk ndodh duke luftuar veten… por duke e kuptuar dhe duke e tejkaluar atë me vetëdije.\n\nFuqia e transformimit të dhimbjes\n\nNjë nga mesazhet më të thella të këtij libri është ky: Momentet më të vështira dhe dhimbjet më të mëdha nuk janë pengesë… por mundësi. Kur ato "alkimizohen", ato bëhen energjia që ju çon drejt një jete pa kufij.\n\nKy libër ju ndihmon të shihni dhimbjen ndryshe… jo si diçka që duhet shmangur, por si një portë drejt rritjes dhe zgjerimit.\n\nNëse jeni në fillim të rrugëtimit tuaj apo tashmë në një nivel më të avancuar, ky libër ju jep qartësinë, mjetet dhe frymëzimin për të çuar transformimin tuaj në një nivel tjetër.\n\nSepse përgjigjet që kërkoni… janë tashmë brenda jush.`,
    `Life is a mirror.\nIt constantly reflects the way we think, feel and who we truly are.\nWhat we see outside… is what we hold inside.\n\nWhat if you freed yourself from limiting beliefs and every obstacle holding you back?\nWhat would it be like to express your true self and live with authenticity, rediscovering enthusiasm and love for life?\n\nThis book is an invitation to that transformation. A dialogue with your deepest self.\n\nThe Master of Mirror Lake is not just a book… it is an experience. Built in the form of poetic dialogues, it guides you into a deep conversation with yourself. A reflective process that helps you see more clearly the thoughts, emotions and patterns shaping your reality.\n\nOn every page, you begin to understand yourself more deeply… and gradually release what no longer serves you.\n\nFrom limitation… to freedom\n\nThis book teaches you how to release limiting beliefs and all inner structures keeping you tied to the past. It guides you to:\n• understand and transform your thoughts\n• accept and alchemize emotions\n• leave behind patterns that no longer serve you\n• and create a new way of living\n\nBecause true transformation does not happen by fighting yourself… but by understanding and transcending it with awareness.\n\nThe power of transforming pain\n\nOne of the deepest messages of this book is: The hardest moments and greatest pains are not obstacles… but opportunities. When they are "alchemized", they become the energy that leads you toward a limitless life.\n\nThis book helps you see pain differently… not as something to avoid, but as a gateway to growth and expansion.\n\nWhether you are at the beginning of your journey or already at a more advanced level, this book gives you the clarity, tools and inspiration to take your transformation to another level.\n\nBecause the answers you seek… are already within you.`
  );

  const FULL_DESCRIPTION2 = t(
    `Në rrugëtimin e zhvillimit personal, vjen një moment ku kupton një të vërtetë të thellë…\nndryshimi nuk ndodh vetëm duke mësuar…\npor duke jetuar atë që mëson.\n\nTransformimi i vërtetë fillon kur mësimet bëhen pjesë e përditshmërisë tënde. Kur fillon të mendosh, të ndiesh dhe të veprosh si versioni i ri i vetes që dëshiron të bëhesh.\n\nKrijo jetën e re është një libër-ditar i krijuar pikërisht për këtë qëllim: të të ndihmojë të kalosh nga teoria në praktikë… nga dëshira në realitet.\n\nNga njohuria… në përjetim\n\nNjë mjeshtër i vërtetë nuk është ai që di më shumë… por ai që praktikon çdo ditë atë që di. Ky libër-ditar të udhëheq të bëhesh ky version i vetes. Të jetosh çdo ditë në përputhje me atë që dëshiron të krijosh.\n\nPërmes ushtrimeve të përditshme, reflektimeve dhe teknikave të strukturuara, ti fillon:\n• të përcaktosh qartë kush dëshiron të bëhesh\n• të veprosh si ai person çdo ditë\n• të qëndrosh në energjinë e versionit tënd të ri\n• të mos ndikohesh më nga rrethanat e jashtme\n• dhe gradualisht… të ndikosh realitetin tënd\n\nFuqia e jetesës nga zemra\n\nKur mëson të qëndrosh në zemër, pavarësisht çdo rrethane… fillon të krijosh nga një nivel krejt tjetër. Një nivel ku vendimet nuk merren nga frika apo kufizimet… por nga intuita, nga një inteligjencë më e lartë dhe nga dashuria.\n\nFtesa jonë për ty\n\nTë ftojmë ta plotësosh këtë libër çdo ditë… si një angazhim ndaj vetes tënde. Çdo faqe është një hap më pranë vetes tënde të vërtetë. Çdo ushtrim është një mundësi për transformim. Çdo reflektim është një hap drejt jetës që dëshiron.\n\nKy është udhëtimi yt.\nDrejt rikthimit tek Vetja jote më e lartë.\nDhe momenti për të filluar… është tani.`,
    `On the journey of personal development, there comes a moment when you realize a deep truth…\nchange does not happen just by learning…\nbut by living what you learn.\n\nTrue transformation begins when teachings become part of your daily life. When you start to think, feel and act as the new version of yourself you wish to become.\n\nCreate Your New Life is a journal-book created for exactly this purpose: to help you move from theory to practice… from desire to reality.\n\nFrom knowledge… to experience\n\nA true master is not one who knows more… but one who practices every day what they know. This journal-book guides you to become this version of yourself. To live every day in alignment with what you wish to create.\n\nThrough daily exercises, reflections and structured techniques, you begin:\n• to clearly define who you want to become\n• to act as that person every day\n• to stay in the energy of your new version\n• to no longer be influenced by external circumstances\n• and gradually… to influence your own reality\n\nThe power of living from the heart\n\nWhen you learn to stay in your heart, regardless of any circumstance… you begin creating from a completely different level. A level where decisions are not made from fear or limitations… but from intuition, from a higher intelligence and from love.\n\nOur invitation to you\n\nWe invite you to fill in this book every day… as a commitment to yourself. Every page is a step closer to your true self. Every exercise is an opportunity for transformation. Every reflection is a step toward the life you desire.\n\nThis is your journey.\nToward returning to your Highest Self.\nAnd the moment to begin… is now.`
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Hero */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777361096433-1.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 md:py-14 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
          <div className="flex-1 text-left">
            <h1 className="font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#ffffff" }}>
              {t("Librat", "Our")}<br />
              <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("tanë", "Books")}</span>
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>♦</span>
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
            </div>

            <p className="leading-relaxed mb-4 md:mb-6 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.85)", maxWidth: 420 }}>
              {t(
                "Koleksioni ynë i plotë i librave digjitalë dhe e-books për transformim personal, zhvillim mendor dhe mirëqenie të thellë.",
                "Our complete collection of digital books and e-books for personal transformation, mental development and deep well-being."
              )}
            </p>

            <button
              onClick={() => openOrderModal(null)}
              className="inline-flex items-center gap-1.5 text-white text-sm md:text-base px-3 py-1.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              {t("Porosit librin", "Order the book")}
            </button>
          </div>
        </div>
      </div>

      {/* Featured Book Highlight */}
      <div id="librat" className="py-8 md:py-12" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-violet-100 shadow-sm" style={{ background: "linear-gradient(135deg,#f3f0ff 0%,#faf9ff 100%)" }}>
            <div className="flex flex-col md:flex-row items-center">
              {/* Book Cover */}
              <div className="flex items-center justify-center p-6 md:p-10 md:w-2/5">
                <img
                  src={BOOK_COVER}
                  alt={t("Mjeshteri i Liqenit Pasqyrë", "The Master of Mirror Lake")}
                  className="w-44 md:w-60 rounded-xl shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1 px-6 pb-8 md:py-10 md:pl-0 md:pr-10">
                <h2 className="font-bold leading-tight mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#4e29c5", fontSize: 32 }}>
                  {t("Mjeshteri i Liqenit Pasqyrë", "The Master of Mirror Lake")}
                </h2>

                <span style={{ color: "#7c3aed", fontSize: 18 }}>♦</span>

                <p className="italic text-zinc-600 text-sm md:text-base mt-2 mb-3">
                  {t("Një udhëtim drejt vetes së vërtetë", "A journey toward the true self")}
                </p>

                <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-5" style={{ maxWidth: 400 }}>
                  {t(
                    "Jeta është një pasqyrë. Ajo reflekton vazhdimisht mënyrën si mendojmë, si ndihemi dhe kush jemi në të vërtetë.",
                    "Life is a mirror. It constantly reflects the way we think, feel and who we truly are."
                  )}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setDescModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white uppercase tracking-wide transition-all hover:scale-105"
                    style={{ backgroundColor: "#1a1a2e", fontSize: 14 }}>
                    <BookOpen className="w-4 h-4" />
                    {t("Lexo përshkrimin", "Read description")}
                  </button>
                  <button
                    onClick={() => openOrderModal()}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wide border-2 transition-all hover:scale-105"
                    style={{ borderColor: "#7c3aed", color: "#7c3aed", backgroundColor: "transparent", fontSize: 14 }}>
                    <ShoppingCart className="w-4 h-4" />
                    {t("Porosite librin", "Order the book")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What will you find section */}
      <div className="py-8 md:py-14" style={{ backgroundColor: "#f3f4f6" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-2">
            <h2 className="font-bold leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, color: "#1a1a2e" }}>
              {t("Çfarë do të gjesh", "What will you find")}<br />
              <span style={{ color: "#7c3aed", fontStyle: "italic" }}>{t("në këtë libër?", "in this book?")}</span>
            </h2>
          </div>
          <div className="flex justify-center mb-5">
            <span style={{ color: "#7c3aed", fontSize: 18 }}>♦</span>
          </div>

          <div className="space-y-5">
            {/* Row 1: Dialog me veten */}
            <div className="flex flex-col sm:flex-row gap-5 rounded-2xl p-6 bg-white" style={{ border: "1px solid #ede9fe" }}>
              <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 shrink-0 sm:w-24">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#f3f0ff" }}>
                  <MessageSquare className="w-7 h-7" style={{ color: "#7c3aed" }} />
                </div>
                <div className="sm:text-center">
                  <p className="font-bold text-sm text-zinc-800">{t("Dialog", "Dialogue")}</p>
                  <p className="font-bold text-sm text-zinc-800">{t("me veten", "with self")}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                  {t("Mjeshteri i Liqenit Pasqyrë nuk është thjesht një libër... është një përjetim.", "The Master of Mirror Lake is not just a book... it is an experience.")}
                </p>
                <ul className="space-y-2">
                  {[
                    t("I ndërtuar në formën e dialogëve poetikë, ai ju udhëheq në një bisedë të thellë me veten tuaj.", "Built in the form of poetic dialogues, it guides you into a deep conversation with yourself."),
                    t("Një proces reflektimi që ju ndihmon të shihni më qartë mendimet, emocionet dhe modelet që formojnë realitetin tuaj.", "A reflective process that helps you see more clearly the thoughts, emotions and patterns shaping your reality."),
                    t("Në çdo faqe, ju filloni të kuptoni më thellë veten... dhe gradualisht të çliroheni nga ajo që nuk ju shërben më.", "On every page, you begin to understand yourself more deeply... and gradually release what no longer serves you."),
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#7c3aed" }}>
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Row 2: Nga kufizimi në liri */}
            <div className="flex flex-col sm:flex-row gap-5 rounded-2xl p-6 bg-white" style={{ border: "1px solid #ede9fe" }}>
              <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 shrink-0 sm:w-24">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#f3f0ff" }}>
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="#7c3aed" strokeWidth="1.5">
                    <path d="M12 20c-4-4-8-6-8-10a8 8 0 0 1 16 0c0 4-4 6-8 10z" strokeLinejoin="round"/>
                    <path d="M12 10c-2-2-4-2-4-4s2-2 4 0c2-2 4-2 4 0s-2 2-4 4z" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="sm:text-center">
                  <p className="font-bold text-sm text-zinc-800">{t("Nga kufizimi", "From limits")}</p>
                  <p className="font-bold text-sm text-zinc-800">{t("në liri", "to freedom")}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-zinc-600 leading-relaxed mb-2">
                  {t("Ky libër ju mëson se si të lëshoni besimet kufizuese dhe të gjitha strukturat e brendshme që ju mbajnë të lidhur me të shkuarën.", "This book teaches you how to release limiting beliefs and all inner structures keeping you tied to the past.")}
                </p>
                <p className="text-sm font-semibold mb-2" style={{ color: "#7c3aed" }}>{t("Ai ju udhëzon të:", "It guides you to:")}</p>
                <ul className="space-y-2 mb-3">
                  {[
                    t("kuptoni dhe transformoni mendimet tuaja", "understand and transform your thoughts"),
                    t("pranoni dhe alkimizoni emocionet", "accept and alchemize emotions"),
                    t("lini pas modelet që nuk ju shërbejnë më", "leave behind patterns that no longer serve you"),
                    t("dhe të krijoni një mënyrë të re të jetuari", "and create a new way of living"),
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#7c3aed" }}>
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-zinc-600 leading-relaxed italic">
                  {t("Sepse transformimi i vërtetë nuk ndodh duke luftuar veten... por duke e kuptuar dhe duke e tejkaluar atë me vetëdije.", "Because true transformation does not happen by fighting yourself... but by understanding and transcending it with awareness.")}
                </p>
              </div>
            </div>

            {/* Row 3: Transformimi i dhimbjes */}
            <div className="flex flex-col sm:flex-row gap-5 rounded-2xl p-6 bg-white" style={{ border: "1px solid #ede9fe" }}>
              <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 shrink-0 sm:w-24">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#f3f0ff" }}>
                  <Heart className="w-7 h-7" style={{ color: "#7c3aed" }} />
                </div>
                <div className="sm:text-center">
                  <p className="font-bold text-sm text-zinc-800">{t("Transformimi", "Transformation")}</p>
                  <p className="font-bold text-sm text-zinc-800">{t("i dhimbjes", "of pain")}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                  {t("Një nga mesazhet më të thella të këtij libri është ky:", "One of the deepest messages of this book is:")}
                </p>
                <div className="rounded-xl px-5 py-4 mb-3 relative" style={{ backgroundColor: "#f3f0ff" }}>
                  <span className="absolute top-2 left-3 text-2xl leading-none font-serif" style={{ color: "#7c3aed" }}>"</span>
                  <p className="text-sm text-zinc-700 leading-relaxed px-4 italic">
                    {t("Momentet më të vështira dhe dhimbjet më të mëdha nuk janë pengesë... por mundësi.", "The hardest moments and greatest pains are not obstacles... but opportunities.")}
                  </p>
                  <span className="absolute bottom-2 right-3 text-2xl leading-none font-serif" style={{ color: "#7c3aed" }}>"</span>
                </div>
                <ul className="space-y-2">
                  {[
                    t('Kur ato "alkimizohen", ato bëhen energjia që ju çon drejt një jete pa kufij.', 'When they are "alchemized", they become the energy that leads you toward a limitless life.'),
                    t("Ky libër ju ndihmon të shihni dhimbjen ndryshe... jo si diçka që duhet shmangur, por si një portë drejt rritjes dhe zgjerimit.", "This book helps you see pain differently... not as something to avoid, but as a gateway to growth and expansion."),
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#7c3aed" }}>
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What will you experience section */}
      <div className="py-8 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-2">
            <h2 className="font-bold leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, color: "#1a1a2e" }}>
              {t("Çfarë do të përjetoni", "What will you experience")}
            </h2>
          </div>
          <div className="flex justify-center mb-5">
            <span style={{ color: "#7c3aed", fontSize: 18 }}>♦</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { Icon: Target,     label: t("më shumë qartësi mbi veten dhe jetën tuaj", "more clarity about yourself and your life") },
              { Icon: LogOut,     label: t("çlirim nga mendimet dhe emocionet kufizuese", "liberation from limiting thoughts and emotions") },
              { Icon: Brain,      label: t("rritje të ndërgjegjësimit dhe vetëdijes", "growth in awareness and consciousness") },
              { Icon: Leaf,       label: t("ndjesi më të thellë paqeje dhe pranimi", "a deeper sense of peace and acceptance") },
              { Icon: UserCheck,  label: t("lidhje më të fortë me veten tuaj të vërtetë", "a stronger connection with your true self") },
              { Icon: ShieldCheck,label: t("guxim për të jetuar në mënyrë autentike", "courage to live authentically") },
              { Icon: Sparkles,   label: t("hapje ndaj mundësive dhe një realiteti të ri", "openness to possibilities and a new reality") },
              { Icon: Sun,        label: t("një jetë me më shumë kuptim dhe lehtësi", "a life with more meaning and ease") },
            ].map(({ Icon, label }, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "#f3f0ff" }}>
                  <Icon className="w-6 h-6" style={{ color: "#7c3aed" }} />
                </div>
                <p className="text-sm text-zinc-700 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="relative overflow-hidden py-14 md:py-20 flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777361096433-1.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(15,5,40,0.65)" }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32 }}>
            {t("Ky libër është një udhëtim.", "This book is a journey.")}<br />
            {t("Një pasqyrë.", "A mirror.")}<br />
            {t("Një kujtesë.", "A reminder.")}
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8">
            {t("Një kujtesë se kush jeni në të vërtetë.", "A reminder of who you truly are.")}
          </p>
          <button
            onClick={() => openOrderModal()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm md:text-base uppercase tracking-wide transition-all hover:scale-105"
            style={{ backgroundColor: "#7c3aed" }}>
            <ShoppingCart className="w-5 h-5" />
            {t("Porosite librin", "Order the book")}
          </button>
        </div>
      </div>

      {/* Featured Book 2 Highlight */}
      <div className="py-12 md:py-16" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-violet-100 shadow-sm" style={{ background: "linear-gradient(135deg,#f3f0ff 0%,#faf9ff 100%)" }}>
            <div className="flex flex-col md:flex-row items-center">
              {/* Book Cover */}
              <div className="flex items-center justify-center p-8 md:p-12 md:w-2/5">
                <img
                  src={BOOK2_COVER}
                  alt={t("Krijo jetën e re", "Create Your New Life")}
                  className="w-44 md:w-60 rounded-xl shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1 px-8 pb-10 md:py-12 md:pl-0 md:pr-12">
                <h2 className="font-bold leading-tight mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#4e29c5", fontSize: 32 }}>
                  {t("Krijo jetën e re", "Create Your New Life")}
                </h2>

                <p className="italic text-zinc-600 text-sm md:text-base mb-3">
                  {t("Libër-ditar transformimi për jetën që dëshironi të jetosh", "Transformation journal-book for the life you want to live")}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span style={{ color: "#7c3aed", fontSize: 18 }}>♦</span>
                </div>

                <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-7" style={{ maxWidth: 400 }}>
                  {t(
                    "Në rrugëtimin e zhvillimit personal, vjen një moment ku kupton një të vërtetë të thellë... ndryshimi nuk ndodh vetë, duke mësuar... por duke jetuar atë që mëson.",
                    "On the journey of personal development, there comes a moment when you realize a deep truth... change does not happen just by learning... but by living what you learn."
                  )}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setDescModalOpen2(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white uppercase tracking-wide transition-all hover:scale-105"
                    style={{ backgroundColor: "#1a1a2e", fontSize: 14 }}>
                    <BookOpen className="w-4 h-4" />
                    {t("Lexo një fragment", "Read a fragment")}
                  </button>
                  <button
                    onClick={() => openOrderModal(BOOK2_COVER)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wide border-2 transition-all hover:scale-105"
                    style={{ borderColor: "#7c3aed", color: "#7c3aed", backgroundColor: "transparent", fontSize: 14 }}>
                    <ShoppingCart className="w-4 h-4" />
                    {t("Porosite librin", "Order the book")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What will you find - Book 2 */}
      <div className="pt-2 pb-8 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-2">
            <h2 className="font-bold leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, color: "#1a1a2e" }}>
              {t("Çfarë do të gjesh", "What will you find")}<br />
              <span style={{ color: "#7c3aed", fontStyle: "italic" }}>{t("në këtë libër?", "in this book?")}</span>
            </h2>
          </div>
          <div className="flex justify-center mb-3">
            <span style={{ color: "#7c3aed", fontSize: 18 }}>♦</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { Icon: User,       title: t("Nga njohuria në përjetim", "From knowledge to experience"),    desc: t("Te jetosh çdo ditë në përputhje me atë që dëshiron të krijosh.", "Live every day aligned with what you wish to create.") },
              { Icon: Heart,      title: t("Fuqia e jetesës nga zemra", "The power of living from the heart"), desc: t("Kur je në zemër, vendimet nuk merren nga frika apo kufizimet... por nga intuita.", "When in the heart, decisions come not from fear but from intuition.") },
              { Icon: Sparkles,   title: t("Transformim i qëllimshëm", "Purposeful transformation"),       desc: t("Përmes reflektimit, teknikave dhe praktikës, ti filloni të bëhesh versioni i ri i vetes.", "Through reflection and practice, you begin to become the new version of yourself.") },
              { Icon: TrendingUp, title: t("Jeta që dëshiron", "The life you desire"),                    desc: t("Kur ndryshon ti, ndryshon energjia jote, ndryshon realiteti yt. Krijo jetën e re.", "When you change, your energy changes, your reality changes. Create your new life.") },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 rounded-2xl p-4 border border-violet-100" style={{ backgroundColor: "#faf9ff" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "#f3f0ff" }}>
                  <Icon className="w-6 h-6" style={{ color: "#7c3aed" }} />
                </div>
                <p className="font-bold text-sm text-zinc-800 leading-snug">{title}</p>
                <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What will you experience - Book 2 */}
      <div className="py-8 md:py-14" style={{ backgroundColor: "#f3f4f6" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-2">
            <h2 className="font-bold leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, color: "#1a1a2e" }}>
              {t("Çfarë do të përjetosh?", "What will you experience?")}
            </h2>
          </div>
          <div className="flex justify-center mb-5">
            <span style={{ color: "#7c3aed", fontSize: 18 }}>♦</span>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {[
              { Icon: Target,      label: t("më shumë qartësi mbi veten tuaj", "more clarity about yourself") },
              { Icon: LogOut,      label: t("çlirim nga mendimet dhe emocionet kufizuese", "liberation from limiting thoughts and emotions") },
              { Icon: Brain,       label: t("rritje të ndërgjegjësimit dhe vetëdijes", "growth in awareness and consciousness") },
              { Icon: Heart,       label: t("njësi më të thellë paqeje dhe pranimi", "a deeper sense of peace and acceptance") },
              { Icon: UserCheck,   label: t("lidhje më të fortë me veten tuaj të vërtetë", "a stronger connection with your true self") },
              { Icon: ShieldCheck, label: t("guxim për të jetuar në mënyrë autentike", "courage to live authentically") },
              { Icon: Sparkles,    label: t("hapje ndaj mundësive dhe një realiteti të ri", "openness to new possibilities and reality") },
              { Icon: Sun,         label: t("një jetë me më shumë kuptim dhe lehtësi", "a life with more meaning and ease") },
              { Icon: TrendingUp,  label: t("aftësi për të krijuar një jetë që dëshiron", "the ability to create the life you desire") },
            ].map(({ Icon, label }, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "#f3f0ff" }}>
                  <Icon className="w-6 h-6" style={{ color: "#7c3aed" }} />
                </div>
                <p className="text-sm text-zinc-700 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner Book 2 */}
      <div className="relative overflow-hidden py-14 md:py-20 flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777361096433-1.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(15,5,40,0.55)" }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32 }}>
            {t("Ky libër-ditar është krijuar", "This journal-book was created")}<br />
            {t("për të të udhëhequr çdo ditë.", "to guide you every day.")}
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-2">
            {t("Një libër. Një udhëtim. Një transformim.", "One book. One journey. One transformation.")}
          </p>
          <p className="text-white/80 text-sm md:text-base mb-8">
            {t("Një jetë e re që fillon me ty.", "A new life that begins with you.")}
          </p>
          <button
            onClick={() => openOrderModal(BOOK2_COVER)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white uppercase tracking-wide transition-all hover:scale-105"
            style={{ backgroundColor: "#7c3aed", fontSize: 14 }}>
            <ShoppingCart className="w-5 h-5" />
            {t("Porosite librin", "Order the book")}
          </button>
        </div>
      </div>

      {/* Description Modal */}
      {descModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setDescModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setDescModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-gray-100"
              style={{ backgroundColor: "#f3f0ff" }}
            >
              <X className="w-5 h-5" style={{ color: "#7c3aed" }} />
            </button>

            <div className="flex items-center gap-4 p-7 pb-5 border-b border-gray-100">
              <img src={BOOK_COVER} alt="Mjeshteri i Liqenit Pasqyrë" className="w-16 rounded-lg shadow shrink-0" />
              <div>
                <h3 className="font-bold leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", color: "#4e29c5" }}>
                  {t("Mjeshteri i Liqenit Pasqyrë", "The Master of Mirror Lake")}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">Dr. Marvin Bundo &amp; Dr. Artemisa Gogollari</p>
              </div>
            </div>

            <div className="p-7 text-zinc-700 text-sm leading-relaxed space-y-4">
              {FULL_DESCRIPTION.trim().split('\n\n').map((para: string, i: number) => (
                <p key={i} className="whitespace-pre-line">{para}</p>
              ))}
            </div>

            <div className="px-7 pb-7">
              <button
                onClick={() => setDescModalOpen(false)}
                className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-[1.02]"
                style={{ backgroundColor: "#4e29c5" }}>
                {t("Mbyll", "Close")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Description Modal Book 2 */}
      {descModalOpen2 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setDescModalOpen2(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setDescModalOpen2(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-gray-100"
              style={{ backgroundColor: "#f3f0ff" }}
            >
              <X className="w-5 h-5" style={{ color: "#7c3aed" }} />
            </button>

            <div className="flex items-center gap-4 p-7 pb-5 border-b border-gray-100">
              <img src={BOOK2_COVER} alt="Krijo jetën e re" className="w-16 rounded-lg shadow shrink-0" />
              <div>
                <h3 className="font-bold leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", color: "#4e29c5" }}>
                  {t("Krijo jetën e re", "Create Your New Life")}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">Dr. Marvin Bundo &amp; Dr. Artemisa Gogollari</p>
              </div>
            </div>

            <div className="p-7 text-zinc-700 text-sm leading-relaxed space-y-4">
              {FULL_DESCRIPTION2.trim().split('\n\n').map((para: string, i: number) => (
                <p key={i} className="whitespace-pre-line">{para}</p>
              ))}
            </div>

            <div className="px-7 pb-7">
              <button
                onClick={() => setDescModalOpen2(false)}
                className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-[1.02]"
                style={{ backgroundColor: "#4e29c5" }}>
                {t("Mbyll", "Close")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Modal */}
      {orderModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setOrderModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-gray-100"
              style={{ backgroundColor: "#f3f0ff" }}
            >
              <X className="w-5 h-5" style={{ color: "#7c3aed" }} />
            </button>

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-7 pb-5">
              {orderCover && <img src={orderCover} alt="Libri" className="w-28 rounded-xl shadow-lg shrink-0" />}
              <div className="flex-1 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#f3f0ff" }}>
                  <ShoppingCart className="w-7 h-7" style={{ color: "#7c3aed" }} />
                </div>
                <h3 className="font-bold mb-2 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.7rem", color: "#1a1a2e" }}>
                  {t("Porosite librin", "Order the book")}
                </h3>
                <div className="flex justify-center mb-2">
                  <span style={{ color: "#7c3aed", fontSize: 16 }}>♦</span>
                </div>
                <p className="text-zinc-500 text-sm">
                  {t("Zgjidh librarinë sipas vendndodhjes tënde.", "Choose the bookstore based on your location.")}
                </p>
              </div>
            </div>

            {/* Bookstores */}
            <div className="px-6 pb-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { city: t("Tiranë", "Tirana"), Icon: MapPin, handles: ["librari.arts", "librarisara", "maniaket_e_librit"] },
                { city: t("Durrës", "Durrës"), Icon: MapPin, handles: ["librariliesa"] },
                { city: t("Kosovë", "Kosovo"), Icon: MapPin, handles: ["librariabuzuku", "librari_flutura", "prizrenbooks"] },
                { city: t("Kosovë & Gjermani", "Kosovo & Germany"), Icon: Globe, handles: ["libraria_perla"] },
                { city: t("Zvicër", "Switzerland"), Icon: Mountain, handles: ["libraria_tia_shqip_ch_", "libraria_ida.ch"] },
              ].map(({ city, Icon, handles }) => (
                <div key={city} className="rounded-2xl border border-gray-100 p-4" style={{ backgroundColor: "#faf9ff" }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <Icon className="w-4 h-4" style={{ color: "#7c3aed" }} />
                      <span className="font-semibold text-sm" style={{ color: "#7c3aed" }}>{city}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div className="space-y-1.5">
                    {handles.map(handle => (
                      <a
                        key={handle}
                        href={`https://instagram.com/${handle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-violet-700 transition-colors"
                      >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        @{handle}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="px-6 pb-6">
              <div className="flex items-center gap-3 rounded-2xl p-4 border border-gray-100" style={{ backgroundColor: "#faf9ff" }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" style={{ color: "#7c3aed" }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <p className="text-xs text-zinc-500">
                  {t("Kliko mbi librarinë për ta hapur në Instagram.", "Click on the bookstore to open it on Instagram.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
