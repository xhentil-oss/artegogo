import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { blogPosts as posts } from "@/data/blogPosts";

export const BlogPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777298085111-0.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.62)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 w-full">
          <h1 className="hero-title-mobile md:hidden font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#ffffff" }}>
            {t("Sekreti që të jep mundësinë", "The secret that gives you the power")}<br />
            <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("të mos dështosh kurrë.", "to never fail.")}</span>
          </h1>
          <h1 className="hidden md:block font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#ffffff" }}>
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
          <a href="#artikujt"
            className="inline-flex items-center gap-1.5 text-white text-sm md:text-base px-3 py-1.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#4e29c5", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
            </svg>
            {t("Lexo artikujt", "Read articles")}
          </a>
        </div>
      </div>

      {/* ── Card Grid ── */}
      <section id="artikujt" className="max-w-6xl mx-auto px-4 md:px-6 pt-8 pb-8 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ rowGap: 32 }}>
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex flex-col"
            >
              {/* Image with quote overlay */}
              <div className="relative overflow-hidden" style={{ height: 220 }}>
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.82) 100%)" }} />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="border-l-2 border-white/70 pl-3">
                    <p className="text-white leading-relaxed line-clamp-4" style={{ fontSize: 12, fontStyle: "italic" }}>
                      "{t(post.quote, post.quoteEn)}"
                    </p>
                    <p className="text-white/60 mt-1" style={{ fontSize: 10 }}>— Dr. Marvin Bundo</p>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 flex flex-col flex-1" style={{ minHeight: 150 }}>
                <h3 className="font-bold text-zinc-900 leading-snug mb-2 line-clamp-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 15, minHeight: "2.6em" }}>
                  {t(post.title, post.titleEn)}
                </h3>
                <p className="text-zinc-500 leading-relaxed line-clamp-2 mb-3" style={{ fontSize: 14 }}>
                  "{t(post.excerpt, post.excerptEn)}"
                </p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <span className="flex items-center gap-1 text-zinc-400" style={{ fontSize: 13 }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                    {t(post.readTime, post.readTimeEn)}
                  </span>
                  <span className="font-semibold text-violet-600" style={{ fontSize: 13 }}>
                    {t("Lexo →", "Read →")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
