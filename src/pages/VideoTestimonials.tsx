import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type VideoCategory = "all" | "sherim" | "transformim" | "meditim" | "manifestim" | "mistike" | "femije";

interface VideoItem {
  id: number;
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  duration: string;
  category: Exclude<VideoCategory, "all">;
}

const getEmbedUrl = (src: string): { type: "iframe" | "video" | "none" } & { url: string } => {
  if (!src) return { type: "none", url: "" };
  const ytMatch = src.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (ytMatch) return { type: "iframe", url: `https://www.youtube.com/embed/${ytMatch[1]}?rel=0&autoplay=1` };
  const vimeoMatch = src.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return { type: "iframe", url: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1` };
  if (/\.(mp4|webm|ogg|mov)(\?|$)/i.test(src)) return { type: "video", url: src };
  return { type: "iframe", url: src };
};

const VIDEO_CATEGORIES: { id: VideoCategory; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "Të gjitha", icon: null },
  {
    id: "sherim", label: "Shërim",
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
      </svg>
    ),
  },
  {
    id: "transformim", label: "Transformim",
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/>
      </svg>
    ),
  },
  {
    id: "meditim", label: "Eksperienca të thella në meditim",
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
      </svg>
    ),
  },
  {
    id: "manifestim", label: "Manifestim",
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
      </svg>
    ),
  },
  {
    id: "mistike", label: "Eksperienca mistike",
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178Z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
      </svg>
    ),
  },
  {
    id: "femije", label: "Fëmijë & adoleshentë",
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
      </svg>
    ),
  },
];

const VideoListItem = ({ video }: { video: VideoItem }) => {
  const [expanded, setExpanded] = useState(false);
  const embed = getEmbedUrl(video.src);

  return (
    <div className="rounded-2xl transition-all duration-200" style={{ background: "#ffffff", border: "1.5px solid #e4e4e7", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", overflow: "hidden" }}>
      {/* List row */}
      <div className="flex items-stretch gap-0">
        {/* Thumbnail */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 relative focus:outline-none"
          style={{ width: 110, minHeight: 90 }}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
            style={{ minHeight: 90 }}
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.25)" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(124,58,237,0.9)" }}>
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </button>

        {/* Content */}
        <div className="flex-1 px-4 py-3 flex flex-col justify-between min-w-0">
          <div>
            <h3 className="font-bold leading-snug mb-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#1c1917" }}>
              {video.title}
            </h3>
            <p className="leading-relaxed line-clamp-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#71717a" }}>
              {video.description}
            </p>
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <svg className="w-3.5 h-3.5" style={{ color: "#7c3aed" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            <span style={{ fontSize: 12, color: "#7c3aed", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              {video.duration}
            </span>
          </div>
        </div>

        {/* Arrow button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 flex items-center justify-center transition-all duration-200"
          style={{ width: 48, background: expanded ? "#7c3aed" : "#f4f4f5" }}
        >
          <svg className="w-4 h-4" style={{ color: expanded ? "#ffffff" : "#7c3aed", transform: expanded ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
          </svg>
        </button>
      </div>

      {/* Expanded video player */}
      {expanded && (
        <div style={{ borderTop: "1px solid #f4f4f5" }}>
          {embed.type === "iframe" ? (
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe className="absolute inset-0 w-full h-full" src={embed.url} title={video.title} style={{ border: 0, display: "block" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          ) : embed.type === "video" ? (
            <div className="w-full" style={{ aspectRatio: "16/9", background: "#000" }}>
              <video className="w-full h-full" controls playsInline autoPlay preload="metadata" style={{ display: "block" }}>
                <source src={embed.url} />
              </video>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export const VideoTestimonialsPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("all");

  const videos: VideoItem[] = [
    {
      id: 1, src: "/img/TONI2692.mp4", thumbnail: "/img/TONI2462.JPG",
      title: t("Çliroi traumash të vjetra... dhe mbeti shatzënë pas 1 muaji", "She released old traumas... and got pregnant after 1 month"),
      description: t("Pasi u diagnostikua me sëmundje autoimune të rëndë, ajo zëshoi fuqinë e punës së brendshme dhe shumë ndryshoi.", "After being diagnosed with a severe autoimmune disease, she found the power of inner work."),
      duration: t("3 min video", "3 min video"), category: "sherim",
    },
    {
      id: 2, src: "/img/TONI2730.mp4", thumbnail: "/img/TONI2472.JPG",
      title: t("Nga ankthi dhe depresioni në paqe të brendshme dhe liri të plotë", "From anxiety and depression to inner peace and full freedom"),
      description: t("Për vite me radhë, ajo luftoi me ankth dhe depresion të rëndë. Përmes meditimit të thellë, ajo gjeti burimet e veta.", "For years she struggled with severe anxiety and depression. Through deep meditation, she found her own resources."),
      duration: t("4 min video", "4 min video"), category: "transformim",
    },
    {
      id: 3, src: "/img/2026-03-29 22-43-36.mov", thumbnail: "/img/TONI2629.JPG",
      title: t("Eksperienca e hapjes së zemrës gjatë retreat-it", "The heart opening experience during the retreat"),
      description: t("Gjatë retreat-it, ajo përjetoi një hapje të thellë zemre që ndryshoi mënyrën si e shikon veten dhe botën.", "During the retreat, she experienced a deep heart opening that changed how she sees herself and the world."),
      duration: t("3 min video", "3 min video"), category: "meditim",
    },
    {
      id: 4, src: "/img/2026-03-29 22-53-07.mov", thumbnail: "/img/TONI2719.JPG",
      title: t("Nga kanceri në fazën 4... në shërim të plotë dhe një jetë me qëllim", "From stage 4 cancer... to full healing and a life with purpose"),
      description: t("Në vitin 2024, ajo u diagnostikua me një formë agresive kanceri. Pas trajnimeve, ajo zëshoi fuqinë e punës së brendshme.", "In 2024, she was diagnosed with an aggressive form of cancer. After the trainings, she found the power of inner work."),
      duration: t("4 min video", "4 min video"), category: "sherim",
    },
  ];

  const filtered = activeCategory === "all" ? videos : videos.filter((v) => v.category === activeCategory);

  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/TONI2629.JPG')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 w-full">
          <div className="flex-1 text-left">
            <h1 className="hero-title-mobile md:hidden font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#ffffff" }}>
              {t("Histori të vërteta.", "True stories.")}<br />
              <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("Transformime që frymëzojnë.", "Transformations that inspire.")}</span>
            </h1>
            <h1 className="hidden md:block font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#ffffff" }}>
              {t("Histori të vërteta.", "True stories.")}<br />
              <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("Transformime që frymëzojnë.", "Transformations that inspire.")}</span>
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>♦</span>
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
            </div>

            <p className="leading-relaxed mb-4 md:mb-6 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.85)", maxWidth: 420 }}>
              {t(
                "Shiko dhe dëgjo histori rrëqethëse për çlirim, shërim, transformim dhe krijime të fuqishme nga komuniteti ynë në mbarë botën.",
                "Watch and hear thrilling stories of liberation, healing, transformation and powerful creations from our community around the world."
              )}
            </p>

            <a href="/kontakt"
              className="inline-flex items-center gap-1.5 text-white text-sm md:text-base px-3 py-1.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              {t("Dërgo edhe ti dëshminë tënde", "Send your testimonial too")}
            </a>
          </div>
        </div>
      </div>

      {/* ── Filter + List ── */}
      <section style={{ background: "#f9f9fb" }}>
        <div className="max-w-5xl mx-auto px-5 py-8">

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {VIDEO_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200"
                  style={{
                    padding: "8px 16px",
                    fontSize: 14,
                    background: isActive ? "#7c3aed" : "#ffffff",
                    color: isActive ? "#ffffff" : "#52525b",
                    border: isActive ? "1.5px solid #7c3aed" : "1.5px solid #e4e4e7",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Video list */}
          {filtered.length > 0 ? (
            <div className="flex flex-col gap-3">
              {filtered.map((video) => (
                <VideoListItem key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p style={{ color: "#a1a1aa", fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
                {t("Nuk u gjet asnjë video për këtë kategori.", "No videos found for this category.")}
              </p>
            </div>
          )}

        </div>

        {/* CTA Banner */}
        <div className="max-w-5xl mx-auto px-5 pb-10">
          <div className="rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-5" style={{ background: "#ede9fe" }}>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "#7c3aed" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold leading-snug" style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#1c1917" }}>
                  {t("Ke edhe ti një histori që mund të frymëzojë të tjerët?", "Do you also have a story that can inspire others?")}
                </p>
                <p className="leading-snug mt-0.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#52525b" }}>
                  {t("Ndaj historinë tënde dhe bëhu pjesë e komunitetit tonë.", "Share your story and become part of our community.")}
                </p>
              </div>
            </div>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-xl font-semibold whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-105 active:scale-100"
              style={{ background: "#4e29c5", color: "#ffffff", fontFamily: "'Inter', sans-serif", fontSize: 14, padding: "12px 22px", fontWeight: 600 }}
            >
              {t("Ndaj historinë tënde", "Share your story")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
              </svg>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};
