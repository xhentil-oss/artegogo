import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface BlogPost {
  id: number;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string[];
  contentEn: string[];
  readTime: string;
  readTimeEn: string;
  category: string;
  categoryEn: string;
  color: string;
  emoji: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Jeta është një dhuratë.",
    titleEn: "Life is a gift.",
    excerpt: "Ti je dhuratë për botën. Zëri yt ka rëndësi.",
    excerptEn: "You are a gift to the world. Your voice matters.",
    content: [
      "Jeta është një dhuratë.",
      "Ti je dhuratë për botën.",
      "Zëri yt ka rëndësi.",
      "Ka zgjidhje për atë problemin që për momentin e mendon pa zgjidhje.",
      "Gjithçka do bëhet më mirë.",
      "Pas stuhisë dielli shfaqet sërish.",
      "Ti meriton të duhesh dhe pranohesh pa kushte.",
      "Bota do ishte pak më e trishtë pa dritën tënde.",
      "Sepse ti je drita e kësaj bote.",
    ],
    contentEn: [
      "Life is a gift.",
      "You are a gift to the world.",
      "Your voice matters.",
      "There is a solution to the problem you currently think has no solution.",
      "Everything will get better.",
      "After the storm the sun shines again.",
      "You deserve to be loved and accepted unconditionally.",
      "The world would be a little sadder without your light.",
      "Because you are the light of this world.",
    ],
    readTime: "2 min lexim",
    readTimeEn: "2 min read",
    category: "Frymëzim",
    categoryEn: "Inspiration",
    color: "from-violet-500 to-purple-600",
    emoji: "✨",
  },
  {
    id: 2,
    title: "Po sikur të të jepej siguria absolute që nuk do dështoje kurrë?",
    titleEn: "What if you were given the absolute certainty that you would never fail?",
    excerpt: "Si do veproje? Cili person do i lejoje vetes të ishe?",
    excerptEn: "How would you act? What person would you allow yourself to be?",
    content: [
      "Po sikur të të jepej siguria absolute që nuk do dështoje kurrë?",
      "Si do veproje? Cili person do i lejoje vetes të ishe? A nuk do i jepje vetes leje të ndjaja ëndrrat që gjithmonë ke dashur të ndjekësh? A nuk do ndjeheshe pa limite?",
      "Shpesh hezitojmë në jetë të bëjmë gjërat që duam. Të jetojmë jetën që duam me zemër. Të jemi vetja jonë autentike. Të dëgjojmë dhe t'i bindemi me vendosmëri asaj që zemra na frymëzon të bëjmë.",
      "Pse? Sepse kemi një ndjenjë frike që mos dështojmë.",
      "Është frika që mos dështojmë që na mban bllokuar a na paralizon.",
      "Është frika që mos dështojmë ajo që nuk lejon që shumë ëndrra të realizohen.",
      "Është frika që mos dështojmë ajo që na tërheq gjithmonë mbrapsh kur fillojmë t'i tregojmë botës potencialin tonë të vërtetë.",
      "Sepse të vegjël na kanë mësuar, që nëse dështojmë apo gabojmë, meritojmë të na hiqet pranimi dhe dashuria. Dhe pastaj kemi mësuar t'ia bëjmë këtë dhe vetes si të rritur.",
      "Por kemi harruar se të vetmit njerëz që nuk gabojnë, janë njerëzit që kanë pushuar së jetuari e shijuari jetën e tyre.",
    ],
    contentEn: [
      "What if you were given the absolute certainty that you would never fail?",
      "How would you act? What person would you allow yourself to be? Wouldn't you give yourself permission to pursue the dreams you've always wanted to follow? Wouldn't you feel limitless?",
      "We often hesitate in life to do the things we want. To live the life we want with our hearts. To be our authentic selves. To listen and resolutely obey what our heart inspires us to do.",
      "Why? Because we have a fear of failing.",
      "It is the fear of failure that keeps us blocked or paralyzes us.",
      "It is the fear of failure that prevents many dreams from being realized.",
      "It is the fear of failure that always pulls us back when we begin to show the world our true potential.",
      "Because as children we were taught that if we fail or make mistakes, we deserve to have our acceptance and love taken away. And then we learned to do this to ourselves as adults.",
      "But we have forgotten that the only people who don't make mistakes are people who have stopped living and enjoying their lives.",
    ],
    readTime: "4 min lexim",
    readTimeEn: "4 min read",
    category: "Zhvillim Personal",
    categoryEn: "Personal Development",
    color: "from-purple-500 to-indigo-600",
    emoji: "🦋",
  },
  {
    id: 4,
    title: "Sekreti që të jep mundësinë të mos dështosh kurrë",
    titleEn: "The secret that gives you the ability to never fail",
    excerpt: "Po sikur të kishte një sekret që të na dhuronte mundësinë që mos të dështojmë kurrë?",
    excerptEn: "What if there was a secret that granted us the ability to never fail?",
    content: [
      "Po sikur të kishte një sekret që të na dhuronte mundësinë që mos të dështojmë kurrë kur përpiqemi?",
      "A nuk do na jepte kjo liri absolute? Mos të kishim frikë më të ndërmerrnim çfarëdo lloj inspirimi që na jep zemra?",
      "Dhe sekreti është ky: Sa herë duket sikur gabojmë ose rrëzohemi në Rrugëtimin tonë, le të mësohemi që mos t'ia heqim pranimin dhe dashurinë vetes. Kështu që nuk do ketë më kurrë dështime për ne, veç leksione dhe mundësi për të avancuar më shumë, për të mjeshtëruar veten dhe për t'u bërë akoma më të denjë për ëndrrat tona.",
      "Duke ditur këtë sekret se ke aftësinë të mos dështosh më kurrë, merr guximin dhe nis sot të shkruash faqen e parë të atij libri që ke ëndërruar gjithmonë, të hapësh atë biznesin që ke menduar prej kohësh, të aplikosh për atë punën e re, të flasësh atij personi që po heziton t'i flasësh prej kohësh apo të lëvizësh në atë qytetin e ri ku dëshiron të rinisësh një jetë të re.",
      "Sepse ti tashmë e di dhe je i sigurtë që nuk do dështosh më kurrë.",
    ],
    contentEn: [
      "What if there was a secret that granted us the ability to never fail when we try?",
      "And the secret is this: Every time it seems like we make mistakes or fall on our Journey, let us learn not to take away our own acceptance and love.",
      "Knowing this secret that you have the ability to never fail again, take courage and start today to write the first page of that book you've always dreamed of.",
      "Because you already know and are certain that you will never fail again.",
    ],
    readTime: "3 min lexim",
    readTimeEn: "3 min read",
    category: "Frymëzim",
    categoryEn: "Inspiration",
    color: "from-amber-500 to-orange-600",
    emoji: "🔑",
  },
  {
    id: 5,
    title: "Rikujtesë",
    titleEn: "A Reminder",
    excerpt: "Qëllimi i këtij rrugëtimi është të rikthehemi në zemër.",
    excerptEn: "The purpose of this journey is to return to the heart.",
    content: [
      "Qëllimi i këtij rrugëtimi është të rikthehemi në zemër e nga aty të jemi përsëri si fëmijët.",
      "Dhe të besojmë sërish në ëndërra dhe se ka mundësi pafund.",
      "Dhe të pranojmë çdo emocion tonin si të shenjtë.",
      "Dhe të gjejmë gëzim dhe te gjërat e vogla.",
      "Dhe të rikujtohemi që jemi të mbështetur në çdo hap tonin nga një dashuri pa kushte.",
      "Dhe si fëmijët, pranimin dhe dashurinë tonë për veten, të tjerët dhe jetën ta kemi përsëri pa kushte.",
    ],
    contentEn: [
      "THE PURPOSE OF THIS JOURNEY IS TO RETURN TO THE HEART AND FROM THERE TO BE LIKE CHILDREN AGAIN.",
      "AND TO BELIEVE AGAIN IN DREAMS AND THAT THERE ARE INFINITE POSSIBILITIES.",
      "AND TO ACCEPT EVERY EMOTION OF OURS AS SACRED.",
      "AND TO FIND JOY IN SMALL THINGS TOO.",
      "AND TO REMEMBER THAT WE ARE SUPPORTED IN EVERY STEP OF OURS BY AN UNCONDITIONAL LOVE.",
      "AND LIKE CHILDREN, TO HAVE OUR ACCEPTANCE AND LOVE FOR OURSELVES, OTHERS AND LIFE UNCONDITIONALLY AGAIN.",
    ],
    readTime: "1 min lexim",
    readTimeEn: "1 min read",
    category: "Zemra & Shpirti",
    categoryEn: "Heart & Soul",
    color: "from-sky-400 to-blue-500",
    emoji: "🌟",
  },
  {
    id: 6,
    title: "Bëj një zotim vetes — pikërisht tani!",
    titleEn: "Make a commitment to yourself — right now!",
    excerpt: "Zotohu që të paktën për sot, nuk do të braktisësh veten për asnjë çast.",
    excerptEn: "Commit that at least for today, you will not abandon yourself for a single moment.",
    content: [
      "Bëj një zotim vetes që të paktën për sot, nuk do të braktisësh veten për asnjë çast.",
      "Që pavarësisht si shkon dita, me uljet dhe ngritjet e veta, ti do jesh aty për veten.",
      "Nëse kemi arritur të kuptojmë në thellësi se si gjendja jonë e brendshme ndikon totalisht rrethanat e jashtme të jetës sonë, atëherë është koha të veprojmë pikërisht tani!",
      "Atëherë nëse realisht e beson këtë, fillo duke vepruar tani! Bëj një eksperiment pikërisht tani.",
    ],
    contentEn: [
      "Make a commitment to yourself that at least for today, you will not abandon yourself for a single moment.",
      "That regardless of how the day goes, with its ups and downs, you will be there for yourself.",
      "If we have managed to deeply understand how our inner state totally influences the outer circumstances of our life, then it is time to act right now!",
      "So if you really believe this, start acting now! Make an experiment right now.",
    ],
    readTime: "4 min lexim",
    readTimeEn: "4 min read",
    category: "Veprim & Transformim",
    categoryEn: "Action & Transformation",
    color: "from-emerald-500 to-teal-600",
    emoji: "🌿",
  },
  {
    id: 3,
    title: "Nëse nuk do e çosh dëm asnjë ditë të jetës tënde...",
    titleEn: "If you don't want to waste a single day of your life...",
    excerpt: "Atëherë mos e kalo asnjë ditë pa hapur të paktën një herë zemrën komplet.",
    excerptEn: "Then don't let a single day pass without opening your heart completely at least once.",
    content: [
      "Nëse nuk do e çosh dëm asnjë ditë të jetës tënde...",
      "Atëherë mos e kalo asnjë ditë të jetës tënde pa hapur të paktën një herë zemrën komplet duke shkuar në thellësi të saj.",
      "Dhe nuk ka fare rëndësi se si...",
      "Rëndësi ka që të paktën një herë në ditë ta hapësh zemrën tënde komplet.",
    ],
    contentEn: [
      "If you don't want to waste a single day of your life...",
      "Then don't let a single day of your life pass without opening your heart completely at least once by going into its depths.",
      "And it doesn't matter how...",
      "What matters is that at least once a day you open your heart completely.",
    ],
    readTime: "5 min lexim",
    readTimeEn: "5 min read",
    category: "Zemra & Shpirti",
    categoryEn: "Heart & Soul",
    color: "from-pink-500 to-rose-600",
    emoji: "🌸",
  },
];

const categoryColors: Record<string, string> = {
  "Frymëzim": "bg-black text-white",
  "Inspiration": "bg-black text-white",
  "Zhvillim Personal": "bg-black text-white",
  "Personal Development": "bg-black text-white",
  "Zemra & Shpirti": "bg-black text-white",
  "Heart & Soul": "bg-black text-white",
  "Veprim & Transformim": "bg-black text-white",
  "Action & Transformation": "bg-black text-white",
};

function BlogCard({ post, onOpen }: { post: BlogPost; onOpen: () => void }) {
  const { t } = useLanguage();
  const catKey = t(post.category, post.categoryEn);
  return (
    <div
      className="bg-white rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer group border border-zinc-100 hover:-translate-y-1"
      onClick={onOpen}
    >
      <div className="h-px bg-violet-200 w-full" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full tracking-wide ${categoryColors[catKey] || "bg-zinc-100 text-zinc-500"}`}>
            {catKey}
          </span>
          <span className="text-xs text-zinc-300">{t(post.readTime, post.readTimeEn)}</span>
        </div>
        <h2 className="text-sm md:text-xl font-bold text-zinc-900 mb-2 leading-snug group-hover:text-violet-600 transition-colors">
          {t(post.title, post.titleEn)}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-700 md:text-base line-clamp-3">{t(post.excerpt, post.excerptEn)}</p>
        <div className="mt-5 text-violet-500 text-sm leading-relaxed md:text-base font-medium">
          {t("Lexo më shumë →", "Read more →")}
        </div>
      </div>
    </div>
  );
}

function BlogModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  const { t } = useLanguage();
  const paragraphs = t("al", "en") === "al" ? post.content : post.contentEn;
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full border border-zinc-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-8 py-10 text-white relative" style={{ backgroundColor: "#9D8FEF" }}>
          <button
            onClick={onClose}
            className="absolute top-4 left-4 flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            ← {t("Kthehu", "Back")}
          </button>
          <div className="mt-6">
            <span className="text-white/70 text-xs font-semibold uppercase tracking-widest block mb-3">
              {t(post.category, post.categoryEn)}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
              {t(post.title, post.titleEn)}
            </h1>
            <p className="text-white/70 text-sm">{t(post.readTime, post.readTimeEn)}</p>
          </div>
        </div>
        <div className="px-8 py-8 space-y-4">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-sm leading-relaxed text-zinc-700 md:text-base">
              {para}
            </p>
          ))}
        </div>
        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl text-white font-semibold transition-colors"
            style={{ backgroundColor: "#9D8FEF" }}
          >
            {t("Mbyll", "Close")}
          </button>
        </div>
      </div>
    </div>
  );
}

export const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative py-16 md:py-28 px-4 md:px-6 overflow-hidden min-h-[300px] md:min-h-[420px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777298085111-0.jpeg')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.52)" }} />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/15 text-white border border-white/20">
            {t("Blog & Artikuj", "Blog & Articles")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
            {t("Frymëzim &", "Inspiration &")}{" "}
            <span style={{ color: "#C4B5FD" }}>
              {t("Transformim", "Transformation")}
            </span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            {t(
              "Mendime, reflektime dhe frymëzime nga Dr. Artemisa dhe ekipi ynë.",
              "Thoughts, reflections and inspirations from Dr. Artemisa and our team."
            )}
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} onOpen={() => setSelectedPost(post)} />
          ))}
        </div>
      </section>

      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};
