import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { blogPosts } from "@/data/blogPosts";

export const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.id === Number(id));
  const recommended = blogPosts.filter(p => p.id !== Number(id)).slice(0, 4);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-zinc-500 mb-4">{t("Artikulli nuk u gjet.", "Article not found.")}</p>
          <Link to="/blog" className="text-violet-600 font-semibold hover:underline">
            {t("← Kthehu te Blogu", "← Back to Blog")}
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = t("al", "en") === "al" ? post.content : post.contentEn;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">

        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-violet-600 text-sm font-medium mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
          </svg>
          {t("Kthehu te Blogu", "Back to Blog")}
        </Link>

        {/* Top image card with quote overlay */}
        <div className="rounded-2xl overflow-hidden mb-6 w-full" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}>
          <div className="relative h-52 md:h-[420px]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)" }} />
            <div className="absolute inset-0 flex items-center justify-end pr-10 pl-4">
              <div className="max-w-sm border-l-2 border-white/80 pl-5">
                <p className="text-white font-medium leading-relaxed mb-3" style={{ fontSize: 16, fontStyle: "italic" }}>
                  "{t(post.quote, post.quoteEn)}"
                </p>
                <p className="text-white/70" style={{ fontSize: 13 }}>— Dr. Marvin Bundo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Title + author */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <h1 className="font-bold text-zinc-900 leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
            {t(post.title, post.titleEn)}
          </h1>
          <p className="text-zinc-400 text-sm">
            Dr. Marvin Bundo &nbsp;|&nbsp; {t(post.readTime, post.readTimeEn)}
          </p>
        </div>

        {/* Two-column body */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* LEFT: Article content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl px-6 md:px-10 py-8 border border-zinc-100 shadow-sm space-y-5 mb-6">
              {paragraphs.map((para, i) => (
                <p key={i} className="leading-relaxed text-zinc-700" style={{ fontSize: 15 }}>{para}</p>
              ))}
            </div>

            {/* Quote block */}
            <div className="rounded-2xl px-6 py-6 text-center border border-violet-100"
              style={{ background: "linear-gradient(135deg, #f5f0ff 0%, #ede9fe 100%)" }}>
              <div style={{ color: "#7c3aed", fontFamily: "Georgia, serif", fontSize: 42, lineHeight: 1 }}>"</div>
              <p className="italic font-medium leading-relaxed mt-1" style={{ color: "#4c1d95", fontSize: 14 }}>
                {t(post.quote, post.quoteEn)}
              </p>
            </div>
          </div>

          {/* RIGHT: Recommended blogs */}
          <div className="w-full lg:w-72 shrink-0">
            <h2 className="font-bold text-zinc-900 mb-4 text-center lg:text-left"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20 }}>
              {t("Rekomandime Blogjesh", "Recommended Blogs")}
            </h2>
            <div className="flex flex-col gap-4">
              {recommended.map(rec => (
                <div
                  key={rec.id}
                  onClick={() => navigate(`/blog/${rec.id}`)}
                  className="cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  {/* Rec image with quote */}
                  <div className="relative overflow-hidden" style={{ height: 130 }}>
                    <img src={rec.image} alt={rec.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)" }} />
                    <div className="absolute inset-0 p-3 flex flex-col justify-end">
                      <p className="text-white leading-snug line-clamp-3" style={{ fontSize: 11, fontStyle: "italic" }}>
                        "{t(rec.quote, rec.quoteEn)}"
                      </p>
                    </div>
                  </div>
                  {/* Rec text */}
                  <div className="p-3">
                    <h3 className="font-semibold text-zinc-800 leading-snug line-clamp-2 mb-1" style={{ fontSize: 13 }}>
                      {t(rec.title, rec.titleEn)}
                    </h3>
                    <p className="text-zinc-400 line-clamp-2" style={{ fontSize: 11 }}>
                      "{t(rec.excerpt, rec.excerptEn)}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
