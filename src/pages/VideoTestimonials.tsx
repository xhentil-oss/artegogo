import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getEmbedUrl = (src: string): { type: "iframe" | "video" | "none" } & { url: string } => {
  if (!src) return { type: "none", url: "" };
  // YouTube
  const ytMatch = src.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (ytMatch) return { type: "iframe", url: `https://www.youtube.com/embed/${ytMatch[1]}?rel=0` };
  // Vimeo
  const vimeoMatch = src.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return { type: "iframe", url: `https://player.vimeo.com/video/${vimeoMatch[1]}` };
  // Direct video file
  if (/\.(mp4|webm|ogg|mov)(\?|$)/i.test(src)) return { type: "video", url: src };
  // Generic iframe (Google Drive, etc.)
  return { type: "iframe", url: src };
};

const VideoCard = ({ video }: { video: { id: number; src: string; title: string; description: string } }) => {
  const { t } = useLanguage();
  const embed = getEmbedUrl(video.src);
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-purple-100 bg-white transition-transform duration-300 hover:-translate-y-1">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {embed.type === "iframe" ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embed.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : embed.type === "video" ? (
          <video className="absolute inset-0 w-full h-full object-cover" controls playsInline preload="metadata">
            <source src={embed.url} />
            {t("Shfletuesi juaj nuk e mbështet videon.", "Your browser does not support video.")}
          </video>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg, #ede9fe 0%, #f3e8ff 50%, #ede9fe 100%)" }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7c3aed 0%, #9D8FEF 100%)" }}>
              <Play size={28} fill="white" className="text-white ml-1" />
            </div>
            <p className="text-violet-200 text-sm font-medium">{t("Video do të shtohet së shpejti", "Video coming soon")}</p>
          </div>
        )}
      </div>
      <div className="px-5 py-4">
        <h3 className="font-bold text-zinc-800 text-base mb-1">{video.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{video.description}</p>
      </div>
    </div>
  );
};

export const VideoTestimonialsPage = () => {
  const { t } = useLanguage();

  const videos = [
    { id: 1, src: "", title: t("Dëshmi #1", "Testimonial #1"), description: t("Pjesëmarrëse në Retreat 2025", "Retreat 2025 participant") },
    { id: 2, src: "", title: t("Dëshmi #2", "Testimonial #2"), description: t("Trajnim Online - Transformim personal", "Online Training - Personal transformation") },
    { id: 3, src: "", title: t("Dëshmi #3", "Testimonial #3"), description: t("Workshop - Hapje Zemre", "Workshop - Heart Opening") },
    { id: 4, src: "", title: t("Dëshmi #4", "Testimonial #4"), description: t("Retreat 2024 - Ndryshim i jetës", "Retreat 2024 - Life change") },
  ];

  return (
    <div>
      <div className="relative py-32 px-6 overflow-hidden" style={{ minHeight: 380 }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776860167679-0.png')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/15 text-white border border-white/20">
            {t("Video Dëshmi", "Video Testimonials")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("Dëgjo historite", "Hear their stories")}{" "}
            <span style={{ color: "#C4B5FD" }}>
              {t("në zërin e tyre", "in their own voice")}
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("Transformimet më të vërteta i sheh dhe i dëgjon. Këto janë historitë reale të njerëzve që kanë kaluar nëpër udhëtimin tonë.", "The truest transformations you see and hear. These are the real stories of people who have gone through our journey.")}
          </p>
        </div>
      </div>
      <section className="bg-gradient-to-b from-purple-50/40 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => <VideoCard key={video.id} video={video} />)}
          </div>
          <div className="mt-16 rounded-2xl p-10 text-center text-white"
            style={{ background: "#000000" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {t("Dëshiron të bëhesh pjesë e historive tona?", "Want to become part of our stories?")}
            </h2>
            <p className="text-sm leading-relaxed text-white md:text-base mb-6">
              {t("Bashkohu me retreat-in apo trajnimin tonë të ardhshëm dhe ndryshime reale.", "Join our upcoming retreat or training and make real changes.")}
            </p>
            <a href="/eventet/retreat" className="inline-block bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-zinc-100 transition-all text-sm leading-relaxed md:text-base border border-white/20">
              {t("Rezervo vendin tënd", "Reserve your spot")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
