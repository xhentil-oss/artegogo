import { ShoppingCart, Star, BookOpen, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

const BOOK_COVER = 'https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776931629479-0.png';
const BOOK2_COVER = 'https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776932436081-0.png';

export const ShopLibratPage = () => {
  const { totalItems, setCartOpen, addToCart } = useCart();
  const { t } = useLanguage();
  const [added, setAdded] = useState(false);
  const [descOpen, setDescOpen] = useState(false);
  const [added2, setAdded2] = useState(false);
  const [descOpen2, setDescOpen2] = useState(false);

  const highlights = [
    t('Dialogë poetikë që ju udhëheqin drejt vetes suaj', 'Poetic dialogues that guide you toward your true self'),
    t('Çlirohuni nga besimet kufizuese dhe pengesat e brendshme', 'Free yourself from limiting beliefs and inner obstacles'),
    t('Alkimizoni dhimbjen dhe transformoni emocionet', 'Alchemize pain and transform emotions'),
    t('Krijoni një mënyrë të re të të jetuarit me autenticitet', 'Create a new way of living with authenticity'),
    t('Zbuloni fuqinë e transformimit të vetëdijshëm', 'Discover the power of conscious transformation'),
  ];

  const highlights2 = [
    t('Kaloni nga teoria në praktikë me ushtrime të përditshme', 'Move from theory to practice with daily exercises'),
    t('Përcaktoni qartë kush dëshironi të bëheni', 'Clearly define who you want to become'),
    t('Veproni çdo ditë si versioni i ri i vetes', 'Act every day as the new version of yourself'),
    t('Qëndroni në energjinë e versionit tuaj të ri', 'Stay in the energy of your new version'),
    t('Mos ndikoheni nga rrethanat e jashtme', 'Stop being influenced by external circumstances'),
  ];

  const FULL_DESCRIPTION = t(
    `Jeta është një pasqyrë.\nAjo reflekton vazhdimisht mënyrën si mendojmë, si ndihemi dhe kush jemi në të vërtetë.\nAjo që shohim jashtë… është ajo që mbajmë brenda.\n\nPo sikur të çliroheshit nga besimet kufizuese dhe çdo pengesë që ju mban pas?\nSi do të ishte të shprehnit veten tuaj të vërtetë dhe të jetonit me autenticitet, duke rizbuluar entuziazmin dhe dashurinë për jetën?\n\nKy libër është një ftesë për këtë transformim. Një dialog me veten tuaj më të thellë.\n\nMjeshtrua i Liqenit Pasqyrë nuk është thjesht një libër… është një përjetim. I ndërtuar në formën e dialogëve poetikë, ai ju udhëheq në një bisedë të thellë me veten tuaj. Një proces reflektimi që ju ndihmon të shihni më qartë mendimet, emocionet dhe modelet që formojnë realitetin tuaj.\n\nNë çdo faqe, ju filloni të kuptoni më thellë veten… dhe gradualisht të çliroheni nga ajo që nuk ju shërben më.\n\nNga kufizimi… në liri\n\nKy libër ju mëson se si të lëshoni besimet kufizuese dhe të gjitha strukturat e brendshme që ju mbajnë të lidhur me të shkuarën. Ai ju udhëzon të:\n• kuptoni dhe transformoni mendimet tuaja\n• pranoni dhe alkimizoni emocionet\n• lini pas modelet që nuk ju shërbejnë më\n• dhe të krijoni një mënyrë të re të të jetuarit\n\nSepse transformimi i vërtetë nuk ndodh duke luftuar veten… por duke e kuptuar dhe duke e tejkaluar atë me vetëdije.\n\nFuqia e transformimit të dhimbjes\n\nNjë nga mesazhet më të thella të këtij libri është ky: Momentet më të vështira dhe dhimbjet më të mëdha nuk janë pengesë… por mundësi. Kur ato "alkimizohen", ato bëhen energjia që ju çon drejt një jete pa kufij.\n\nKy libër ju ndihmon të shihni dhimbjen ndryshe… jo si diçka që duhet shmangur, por si një portë drejt rritjes dhe zgjerimit.\n\nNëse jeni në fillim të rrugëtimit tuaj apo tashmë në një nivel më të avancuar, ky libër ju jep qartësinë, mjetet dhe frymëzimin për të çuar transformimin tuaj në një nivel tjetër.\n\nSepse përgjigjet që kërkoni… janë tashmë brenda jush.`,
    `Life is a mirror.\nIt constantly reflects the way we think, feel and who we truly are.\nWhat we see outside… is what we hold inside.\n\nWhat if you freed yourself from limiting beliefs and every obstacle holding you back?\nWhat would it be like to express your true self and live with authenticity, rediscovering enthusiasm and love for life?\n\nThis book is an invitation to that transformation. A dialogue with your deepest self.\n\nThe Master of Mirror Lake is not just a book… it is an experience. Built in the form of poetic dialogues, it guides you into a deep conversation with yourself. A reflective process that helps you see more clearly the thoughts, emotions and patterns shaping your reality.\n\nOn every page, you begin to understand yourself more deeply… and gradually release what no longer serves you.\n\nFrom limitation… to freedom\n\nThis book teaches you how to release limiting beliefs and all inner structures keeping you tied to the past. It guides you to:\n• understand and transform your thoughts\n• accept and alchemize emotions\n• leave behind patterns that no longer serve you\n• and create a new way of living\n\nBecause true transformation does not happen by fighting yourself… but by understanding and transcending it with awareness.\n\nThe power of transforming pain\n\nOne of the deepest messages of this book is: The hardest moments and greatest pains are not obstacles… but opportunities. When they are "alchemized", they become the energy that leads you toward a limitless life.\n\nThis book helps you see pain differently… not as something to avoid, but as a gateway to growth and expansion.\n\nWhether you are at the beginning of your journey or already at a more advanced level, this book gives you the clarity, tools and inspiration to take your transformation to another level.\n\nBecause the answers you seek… are already within you.`
  );

  const FULL_DESCRIPTION2 = t(
    `Në rrugëtimin e zhvillimit personal, vjen një moment ku kupton një të vërtetë të thellë…\nndryshimi nuk ndodh vetëm duke mësuar…\npor duke jetuar atë që mëson.\n\nTransformimi i vërtetë fillon kur mësimet bëhen pjesë e përditshmërisë tënde. Kur fillon të mendosh, të ndiesh dhe të veprosh si versioni i ri i vetes që dëshiron të bëhesh.\n\nKrijo jetën e re është një libër-ditar i krijuar pikërisht për këtë qëllim: të të ndihmojë të kalosh nga teoria në praktikë… nga dëshira në realitet.\n\nNga njohuria… në përjetim\n\nNjë mjeshtër i vërtetë nuk është ai që di më shumë… por ai që praktikon çdo ditë atë që di. Ky libër-ditar të udhëheq të bëhesh ky version i vetes. Të jetosh çdo ditë në përputhje me atë që dëshiron të krijosh.\n\nPërmes ushtrimeve të përditshme, reflektimeve dhe teknikave të strukturuara, ti fillon:\n• të përcaktosh qartë kush dëshiron të bëhesh\n• të veprosh si ai person çdo ditë\n• të qëndrosh në energjinë e versionit tënd të ri\n• të mos ndikohesh më nga rrethanat e jashtme\n• dhe gradualisht… të ndikosh realitetin tënd\n\nFuqia e jetesës nga zemra\n\nKur mëson të qëndrosh në zemër, pavarësisht çdo rrethane… fillon të krijosh nga një nivel krejt tjetër. Një nivel ku vendimet nuk merren nga frika apo kufizimet… por nga intuita, nga një inteligjencë më e lartë dhe nga dashuria.\n\nFtesa jonë për ty\n\nTë ftojmë ta plotësosh këtë libër çdo ditë… si një angazhim ndaj vetes tënde. Çdo faqe është një hap më pranë vetes tënde të vërtetë. Çdo ushtrim është një mundësi për transformim. Çdo reflektim është një hap drejt jetës që dëshiron.\n\nKy është udhëtimi yt.\nDrejt rikthimit tek Vetja jote më e lartë.\nDhe momenti për të filluar… është tani.`,
    `On the journey of personal development, there comes a moment when you realize a deep truth…\nchange does not happen just by learning…\nbut by living what you learn.\n\nTrue transformation begins when teachings become part of your daily life. When you start to think, feel and act as the new version of yourself you wish to become.\n\nCreate Your New Life is a journal-book created for exactly this purpose: to help you move from theory to practice… from desire to reality.\n\nFrom knowledge… to experience\n\nA true master is not one who knows more… but one who practices every day what they know. This journal-book guides you to become this version of yourself. To live every day in alignment with what you wish to create.\n\nThrough daily exercises, reflections and structured techniques, you begin:\n• to clearly define who you want to become\n• to act as that person every day\n• to stay in the energy of your new version\n• to no longer be influenced by external circumstances\n• and gradually… to influence your own reality\n\nThe power of living from the heart\n\nWhen you learn to stay in your heart, regardless of any circumstance… you begin creating from a completely different level. A level where decisions are not made from fear or limitations… but from intuition, from a higher intelligence and from love.\n\nOur invitation to you\n\nWe invite you to fill in this book every day… as a commitment to yourself. Every page is a step closer to your true self. Every exercise is an opportunity for transformation. Every reflection is a step toward the life you desire.\n\nThis is your journey.\nToward returning to your Highest Self.\nAnd the moment to begin… is now.`
  );

  const handleAdd = () => {
    const product: Product = {
      id: 'libri-mjeshtriliritpasqyre',
      title: t('Mieshtri i Liqenit Pasqyrë', 'The Master of Mirror Lake'),
      subtitle: 'Dr. Marvin Bundo & Dr. Artemisa Gogollari',
      price: 15,
      originalPrice: 22,
      image: BOOK_COVER,
      category: t('Libra', 'Books'),
      rating: 4.8,
      reviews: 48,
      description: t('Një udhëtim poetik drejt vetes suaj të vërtetë.', 'A poetic journey toward your true self.'),
    };
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: 'url(https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777361096433-1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/20 text-white border border-white/30">
            {t('Libra', 'Books')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {t('Produktet ', 'Our')}<span style={{ color: "#C4B5FD" }}>{t('tona', 'Products')}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {t(
              'Koleksioni ynë i plotë i librave digjitalë dhe e-books për transformim personal, zhvillim mendor dhe mirëqenie të thellë.',
              'Our complete collection of digital books and e-books for personal transformation, mental development and deep well-being.'
            )}
          </p>
        </div>
      </div>

      {/* Book Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-10">
          <BookOpen className="w-5 h-5 text-violet-500" />
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">
            {t('Libri i fundit', 'Latest Book')}
          </span>
        </div>

        {/* Main Book Card */}
        <div className="bg-white rounded-3xl border border-zinc-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Cover Image */}
            <div className="flex items-center justify-center p-10 bg-gradient-to-br from-violet-50 to-purple-100">
              <div className="relative">
                <div className="absolute -inset-4 bg-violet-200/40 rounded-3xl blur-2xl" />
                <img
                  src={BOOK_COVER}
                  alt="Mieshtri i Liqenit Pasqyrë"
                  className="relative w-64 md:w-72 rounded-2xl"
                />
              </div>
            </div>

            {/* Info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`w-4 h-4 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'text-zinc-300'}`} />
                ))}
                <span className="text-zinc-500 text-sm ml-1">({t('48 vlerësime', '48 reviews')})</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight mb-1">
                {t('Mieshtri i Liqenit Pasqyrë', 'The Master of Mirror Lake')}
              </h2>
              <p className="text-sm leading-relaxed md:text-base font-medium mb-2" style={{ color: '#9D8FEF' }}>Dr. Marvin Bundo &amp; Dr. Artemisa Gogollari</p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-6 italic">
                {t('Një udhëtim drejt vetes së vërtetë', 'A journey toward the true self')}
              </p>

              {/* Lead */}
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">
                {t(
                  'Jeta është një pasqyrë — ajo reflekton mënyrën si mendojmë, si ndihemi dhe kush jemi. Ky libër është një ftesë për transformim: një dialog poetik me veten tuaj më të thellë, për t\'u çliruar nga besimet kufizuese dhe për të jetuar me autenticitet të plotë.',
                  'Life is a mirror — it reflects the way we think, feel and who we are. This book is an invitation to transformation: a poetic dialogue with your deepest self, to free yourself from limiting beliefs and live with complete authenticity.'
                )}
              </p>

              {/* Full description collapsible */}
              <div className="mb-6">
                <button
                  onClick={() => setDescOpen(!descOpen)}
                  className="flex items-center gap-2 font-semibold text-sm transition-colors"
                  style={{ color: '#9D8FEF' }}
                >
                  {descOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {descOpen
                    ? t('Mbyll përshkrimin', 'Close description')
                    : t('Lexo përshkrimin e plotë', 'Read full description')}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    descOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5 text-zinc-700 text-sm leading-relaxed space-y-3">
                    {FULL_DESCRIPTION.trim()
                      .split('\n\n')
                      .map((para, i) => (
                        <p key={i} className="whitespace-pre-line">
                          {para}
                        </p>
                      ))}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-8">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-zinc-700 md:text-base">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#9D8FEF' }} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-3xl font-bold text-zinc-900">15€</span>
                  <span className="text-zinc-400 line-through ml-2 text-base">22€</span>
                </div>
                <button
                  onClick={handleAdd}
                  className={`flex items-center gap-2 px-7 py-3 rounded-2xl font-semibold text-white text-sm leading-relaxed md:text-base transition-all ${
                    added ? 'bg-green-500' : ''
                  }`}
                  style={!added ? { backgroundColor: '#9D8FEF' } : {}}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" />
                      {t('Shtuar!', 'Added!')}
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      {t('Shto në shportë', 'Add to cart')}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-zinc-200" />

        {/* Subtitle book 2 */}
        <div className="flex items-center gap-2 mb-10">
          <BookOpen className="w-5 h-5 text-violet-500" />
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">
            {t('Libër-ditar transformimi', 'Transformation Journal-Book')}
          </span>
        </div>

        {/* Book 2 Card */}
        <div className="bg-white rounded-3xl border border-zinc-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Cover Image */}
            <div className="flex items-center justify-center p-10 bg-gradient-to-br from-violet-50 to-purple-100">
              <div className="relative">
                <div className="absolute -inset-4 bg-violet-200/40 rounded-3xl blur-2xl" />
                <img
                  src={BOOK2_COVER}
                  alt="Krijo jetën e re"
                  className="relative w-64 md:w-72 rounded-2xl"
                />
              </div>
            </div>

            {/* Info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`w-4 h-4 ${i <= 5 ? 'fill-amber-400 text-amber-400' : 'text-zinc-300'}`} />
                ))}
                <span className="text-zinc-500 text-sm ml-1">({t('32 vlerësime', '32 reviews')})</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight mb-1">
                {t('Krijo jetën e re', 'Create Your New Life')}
              </h2>
              <p className="text-sm leading-relaxed md:text-base font-medium mb-2" style={{ color: '#9D8FEF' }}>Dr. Marvin Bundo &amp; Dr. Artemisa Gogollari</p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-6 italic">
                {t(
                  'Libër-ditar transformimi për jetën që dëshiron të jetosh',
                  'Transformation journal-book for the life you wish to live'
                )}
              </p>

              {/* Lead */}
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">
                {t(
                  'Transformimi i vërtetë fillon kur mësimet bëhen pjesë e përditshmërisë tënde. Ky libër-ditar të ndihmon të kalosh nga teoria në praktikë — me ushtrime të përditshme, reflektime dhe teknika të strukturuara për të jetuar si versioni i ri i vetes.',
                  'True transformation begins when teachings become part of your daily life. This journal-book helps you move from theory to practice — with daily exercises, reflections and structured techniques to live as the new version of yourself.'
                )}
              </p>

              {/* Full description collapsible */}
              <div className="mb-6">
                <button
                  onClick={() => setDescOpen2(!descOpen2)}
                  className="flex items-center gap-2 font-semibold text-sm transition-colors"
                  style={{ color: '#9D8FEF' }}
                >
                  {descOpen2 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {descOpen2
                    ? t('Mbyll përshkrimin', 'Close description')
                    : t('Lexo përshkrimin e plotë', 'Read full description')}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    descOpen2 ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5 text-zinc-700 text-sm leading-relaxed space-y-3">
                    {FULL_DESCRIPTION2.trim()
                      .split('\n\n')
                      .map((para, i) => (
                        <p key={i} className="whitespace-pre-line">
                          {para}
                        </p>
                      ))}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-8">
                {highlights2.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-zinc-700 md:text-base">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#9D8FEF' }} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-3xl font-bold text-zinc-900">15€</span>
                  <span className="text-zinc-400 line-through ml-2 text-base">22€</span>
                </div>
                <button
                  onClick={() => {
                    const product2: Product = {
                      id: 'libri-krijojeten',
                      title: t('Krijo jetën e re', 'Create Your New Life'),
                      subtitle: 'Dr. Marvin Bundo & Dr. Artemisa Gogollari',
                      price: 15,
                      originalPrice: 22,
                      image: BOOK2_COVER,
                      category: t('Libra', 'Books'),
                      rating: 5,
                      reviews: 32,
                      description: t(
                        'Libër-ditar transformimi për jetën që dëshiron të jetosh.',
                        'Transformation journal-book for the life you wish to live.'
                      ),
                    };
                    addToCart(product2);
                    setAdded2(true);
                    setTimeout(() => setAdded2(false), 2000);
                  }}
                  className={`flex items-center gap-2 px-7 py-3 rounded-2xl font-semibold text-white text-sm leading-relaxed md:text-base transition-all ${
                    added2 ? 'bg-green-500' : ''
                  }`}
                  style={!added2 ? { backgroundColor: '#9D8FEF' } : {}}
                >
                  {added2 ? (
                    <>
                      <Check className="w-5 h-5" />
                      {t('Shtuar!', 'Added!')}
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      {t('Shto në shportë', 'Add to cart')}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
