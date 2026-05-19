import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Activity, Sparkles, ArrowRight, NotebookPen } from "lucide-react";

const POSTS = [
  {
    categoryAl: "MENDJE • ZEMËR",
    categoryEn: "MIND • HEART",
    Icon: Heart,
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    quoteAl: "Për të krijuar një jetë të re, për të ndryshuar perceptimin tënd për botën – duhet të ndryshosh informacionin që merr.",
    quoteEn: "To create a new life, to change your perception of the world – you must change the information you receive.",
    author: "Dr. Mandana Hoxha",
    day: "22", month: "MAJ", monthEn: "MAY", year: "2025",
    titleAl: "E dashuruar me të Shenjtën",
    titleEn: "In Love with the Sacred",
    descAl: "Si të krijosh një jetë të re duke ndryshuar perceptimin tënd për botën dhe informacionin që merr çdo ditë.",
    descEn: "How to create a new life by changing your perception of the world and the information you receive every day.",
  },
  {
    categoryAl: "TRUP • EMOCIONE",
    categoryEn: "BODY • EMOTIONS",
    Icon: Activity,
    img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
    quoteAl: "Nëse mund t'i mësosh trupit tënd emocionalisht çfarë do të ndodhë para se të ndodhë, nuk do të kesh nevojë të kërkosh më.",
    quoteEn: "If you can teach your body emotionally what will happen before it happens, you will no longer need to seek.",
    author: "Dr. Mandana Hoxha",
    day: "08", month: "MAJ", monthEn: "MAY", year: "2025",
    titleAl: "Trupi yt e di përpara teje",
    titleEn: "Your Body Knows Before You",
    descAl: "Si t'i mësosh trupit tënd emocionalisht çfarë do të ndodhë, për të jetuar me më shumë lehtësi dhe besim.",
    descEn: "How to emotionally teach your body what will happen, to live with more ease and trust.",
  },
];

export const BlogSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { t, lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full py-4 md:py-16 px-6 overflow-hidden"
      style={{ background: "#F9FAFB", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}>

      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4 md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-2 md:mb-4"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
            <NotebookPen className="w-3.5 h-3.5" style={{ color: "#7c3aed" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#7c3aed" }}>
              {t("BLOG", "BLOG")}
            </span>
          </div>
          <h2 className="text-lg md:text-[2.8rem] font-bold text-zinc-900 mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {t("Lexo në", "Read on")}{" "}
            <span style={{ color: "#4e29c5" }}>{t("Blog", "Blog")}</span>
          </h2>
          <p className="text-xs md:text-base leading-relaxed max-w-md mx-auto"
            style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
            {t(
              "Çdo dy javë, Dr. Mandana ndan përgjigjje, materiale të reja dhe mësime që të ndihmojnë të jetosh më i/e lirë, i/e qartë dhe i/e lidhur.",
              "Every two weeks, Dr. Mandana shares answers, new materials and lessons to help you live more free, clear and connected."
            )}
          </p>
          <div className="flex justify-center mt-2 md:mt-3">
            <Sparkles className="w-4 h-4" style={{ color: "#c4b5fd" }} />
          </div>
        </div>

        {/* Blog cards */}
        <div className="space-y-3 md:space-y-5 mb-5 md:mb-8">
          {POSTS.map((post, i) => (
            <div key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${200 + i * 150}ms, transform 0.5s ease ${200 + i * 150}ms`,
              }}>
            <div className="rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,0,0,0.13)] overflow-hidden bg-white"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                border: "1px solid #f3f0ff",
              }}>

              {/* Image + quote */}
              <div className="relative h-36 md:h-52">
                <img src={post.img} alt={lang === "al" ? post.titleAl : post.titleEn}
                  className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(76,29,149,0.55) 50%, rgba(76,29,149,0.75) 100%)" }} />

                {/* Category badge */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}>
                  <post.Icon className="w-3 h-3 text-white" strokeWidth={2} />
                  <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                    {lang === "al" ? post.categoryAl : post.categoryEn}
                  </span>
                </div>

                {/* Quote overlay right side */}
                <div className="absolute bottom-4 right-4 left-1/3 text-right">
                  <p className="text-4xl font-serif leading-none mb-1" style={{ color: "#c4b5fd" }}>&ldquo;</p>
                  <p className="text-white text-[9px] md:text-base leading-relaxed font-medium mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    {lang === "al" ? post.quoteAl : post.quoteEn}
                  </p>
                  <p className="text-white/60 text-[10px] font-bold tracking-wider">— {post.author}</p>
                </div>
              </div>

              {/* Post metadata */}
              <div className="px-5 py-4">
                {/* Title + desc + button */}
                <div className="min-w-0">
                  <h3 className="font-bold text-zinc-900 text-lg mb-1 leading-snug">
                    {lang === "al" ? post.titleAl : post.titleEn}
                  </h3>
                  <p className="text-xs md:text-base leading-relaxed mb-3"
                    style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
                    {lang === "al" ? post.descAl : post.descEn}
                  </p>
                  <button
                    onClick={() => navigate("/blog")}
                    className="inline-flex items-center gap-1.5 text-xs md:text-base font-semibold transition-all duration-200 hover:gap-2.5"
                    style={{ color: "#7c3aed", fontFamily: "'Inter', sans-serif" }}>
                    {t("Lexo më shumë", "Read more")} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-1.5 text-white font-semibold px-3 py-1.5 md:px-7 md:py-3.5 rounded-xl text-xs md:text-lg transition-all duration-300 hover:scale-105 active:scale-100"
            style={{ fontFamily: "'Inter', sans-serif" }}
            style={{ background: "linear-gradient(135deg, #4e29c5 0%, #3f1e92 100%)" }}>
            <Sparkles className="w-4 h-4" />
            {t("Shiko të gjitha artikujt", "View all articles")}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
