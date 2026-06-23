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
  image: string;
  quote: string;
  quoteEn: string;
}

const posts: BlogPost[] = [
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
    image: "/img/TONI2472.JPG",
    quote: "Mos e mat suksesin nga mungesa e dështimeve, por nga guximi për të vazhduar gjithmonë përpara.",
    quoteEn: "Don't measure success by the absence of failures, but by the courage to always keep moving forward.",
  },
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
    image: "/img/TONI1866.JPG",
    quote: "Ti je drita e kësaj bote. Bota do ishte pak më e trishtë pa praninë tënde.",
    quoteEn: "You are the light of this world. The world would be a little sadder without your presence.",
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
    image: "/img/TONI2629.JPG",
    quote: "Nuk ka dështim — ka vetëm leksione që na bëjnë më të fortë dhe më të urtë.",
    quoteEn: "There is no failure — there are only lessons that make us stronger and wiser.",
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
    image: "/img/TONI1692.JPG",
    quote: "Zemra jonë di rrugën — duhet vetëm të guxojmë t'i besojmë asaj pa kushte.",
    quoteEn: "Our heart knows the way — we just need the courage to trust it unconditionally.",
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
    image: "/img/TONI1503.JPG",
    quote: "Gjendja jote e brendshme krijon realitetin e jashtëm. Ndryshoje atë dhe gjithçka ndryshon.",
    quoteEn: "Your inner state creates your outer reality. Change it and everything changes.",
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
    image: "/img/TONI2743.JPG",
    quote: "Hapja e zemrës nuk është dobësi — është akti më i guximshëm që mund të bëjë një njeri.",
    quoteEn: "Opening your heart is not weakness — it is the most courageous act a person can do.",
  },
];

export const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost>(posts[0]);
  const { t } = useLanguage();
  const paragraphs = t("al", "en") === "al" ? selectedPost.content : selectedPost.contentEn;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777298085111-0.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.62)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 w-full">
          <h1 className="font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#ffffff" }}>
            {t("Sekreti që të jep mundësinë", "The secret that gives you the power")}<br />
            <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("të mos dështosh kurrë.", "to never fail.")}</span>
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>♦</span>
            <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
          </div>
          <p className="leading-relaxed mb-4 md:mb-6 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.85)", maxWidth: 420 }}>
            {t("Mendime, reflektime dhe frymëzime nga Dr. Artemisa dhe ekipi ynë.", "Thoughts, reflections and inspirations from Dr. Artemisa and our team.")}
          </p>
          <a href="/kontakt"
            className="inline-flex items-center gap-1.5 text-white text-sm md:text-base px-3 py-1.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#4e29c5", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
            </svg>
            {t("Lexo artikujt", "Read articles")}
          </a>
        </div>
      </div>

      {/* ── Main two-column layout ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-6 pb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">

          {/* LEFT: Article content + Quote (order-2 on mobile, order-1 on desktop) */}
          <div className="flex-1 min-w-0 flex flex-col gap-4 order-2 md:order-1">
            <div className="bg-white rounded-3xl px-7 py-8 border border-zinc-100 shadow-sm space-y-4">
              {paragraphs.map((para, i) => (
                <p key={i} className="leading-relaxed text-zinc-700" style={{ fontSize: 15 }}>{para}</p>
              ))}
            </div>

            {/* Quote */}
            <div className="rounded-3xl px-6 py-7 text-center border border-violet-100" style={{ background: "linear-gradient(135deg, #f5f0ff 0%, #ede9fe 100%)" }}>
              <div style={{ color: "#7c3aed", fontFamily: "Georgia, serif", fontSize: 48, lineHeight: 1 }}>"</div>
              <p className="italic font-medium leading-relaxed mt-2" style={{ color: "#4c1d95", fontSize: 16 }}>
                {t(selectedPost.quote, selectedPost.quoteEn)}
              </p>
              <div className="mt-4 flex justify-center">
                <span style={{ fontSize: 20, color: "#a78bfa" }}>✿</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Post list + CTA (order-1 on mobile, order-2 on desktop) */}
          <div className="w-full md:w-80 shrink-0 flex flex-col gap-4 order-1 md:order-2">

            {/* Post list */}
            <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-zinc-100">
                <h3 className="font-bold text-zinc-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18 }}>
                  {t("Lexo më tej", "Read more")}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-px w-5" style={{ background: "#c4b5fd" }} />
                  <span style={{ color: "#a78bfa", fontSize: 11 }}>♦</span>
                  <div className="h-px w-5" style={{ background: "#c4b5fd" }} />
                </div>
              </div>
              <div className="divide-y divide-zinc-100">
                {posts.map((post) => {
                  const isActive = selectedPost.id === post.id;
                  return (
                    <button
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="w-full flex items-stretch text-left transition-colors hover:bg-violet-50 overflow-hidden"
                      style={{ background: isActive ? "#f5f0ff" : undefined, minHeight: 90 }}
                    >
                      {/* Thumbnail */}
                      <div className="w-16 shrink-0">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0 px-3 py-3">
                        <p className="font-semibold leading-snug line-clamp-2" style={{ fontSize: 12, color: isActive ? "#7c3aed" : "#1c1917" }}>
                          {t(post.title, post.titleEn)}
                        </p>
                        <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                          {t(post.readTime, post.readTimeEn)}
                        </p>
                      </div>
                      {/* Arrow */}
                      <div className="flex items-center pr-3">
                        <svg className="w-4 h-4 shrink-0" fill="none" stroke={isActive ? "#7c3aed" : "#d4d4d8"} strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA card */}
            <div className="rounded-3xl px-5 py-6 text-center border border-violet-100" style={{ background: "linear-gradient(135deg, #f5f0ff 0%, #ede9fe 100%)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "#7c3aed" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
                </svg>
              </div>
              <h4 className="font-bold text-zinc-900 mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 16 }}>
                {t("Gati për të bërë hapin tënd të parë?", "Ready to take your first step?")}
              </h4>
              <p className="text-zinc-500 mb-4" style={{ fontSize: 16 }}>
                {t("Zbulo programet tona dhe bashkohu me komunitetin.", "Discover our programs and join the community.")}
              </p>
              <a href="/kontakt"
                className="inline-flex items-center gap-1.5 text-white rounded-xl px-4 py-2 font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: "#7c3aed", fontSize: 16 }}>
                {t("Shiko programet", "View programs")} →
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
