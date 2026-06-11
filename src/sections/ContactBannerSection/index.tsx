import { useEffect, useRef, useState } from "react";
import { Instagram, MessageCircle, Facebook, Youtube, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TikTokIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6">
    <path d="M34.1 6h-6.2v24.6c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3c.5 0 1 .1 1.5.2V19c-.5-.1-1-.1-1.5-.1-6.3 0-11.4 5.1-11.4 11.4 0 6.3 5.1 11.4 11.4 11.4 6.3 0 11.4-5.1 11.4-11.4V18.2c2.1 1.5 4.7 2.4 7.5 2.4v-6.2c-4.1-.1-7.4-3.5-7.4-8.4z" fill="white"/>
  </svg>
);

export const ContactBannerSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-4 md:py-24 overflow-hidden bg-white">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(157,143,239,0.08) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(157,143,239,0.07) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-4 md:mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
          <div className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 mb-5"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
            <span className="badge font-bold tracking-widest uppercase"
              style={{ color: "#7c3aed", fontFamily: "'Inter', sans-serif", fontSize: 10 }}>
              {t("NA KONTAKTONI", "CONTACT US")}
            </span>
          </div>
          <h2 className="text-lg md:text-3xl font-bold text-zinc-900 mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {t("Jemi këtu", "We are here")}{" "}
            <span style={{ color: "#4e29c5" }}>
              {t("për ju", "for you")}
            </span>
          </h2>
          <p className="text-xs md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
            {t(
              "Jemi këtu për t'ju mbështetur në çdo hap të rrugëtimit tuaj. Na kontaktoni në mënyrat e mëposhtme:",
              "We are here to support you at every step of your journey. Contact us in the following ways:"
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto w-full transition-all duration-700 delay-100"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <a href="https://wa.me/355692420827" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-2 md:flex-row md:text-left md:gap-4 p-3 md:p-5 rounded-2xl border border-zinc-300 hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5" style={{ background: "#F9FAFB" }}>
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}>
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="w-full min-w-0 text-center md:text-left" style={{ wordBreak: "break-word" }}>
                <p className="text-sm md:text-base leading-relaxed font-bold mb-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>WhatsApp</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>{t("Për pyetje dhe informacione:", "For questions and information:")}</p>
                <p className="text-sm md:text-base leading-relaxed font-semibold mt-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>+355 69 242 0827</p>
              </div>
            </a>

            <a href="https://instagram.com/arte_gogo" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-2 md:flex-row md:text-left md:gap-4 p-3 md:p-5 rounded-2xl border border-zinc-300 hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5" style={{ background: "#F9FAFB" }}>
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg,#ec4899,#f97316,#f59e0b)" }}>
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="w-full min-w-0 text-center md:text-left" style={{ wordBreak: "break-word" }}>
                <p className="text-sm md:text-base leading-relaxed font-bold mb-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>Instagram</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>{t("Na ndiqni dhe na shkruani direkt:", "Follow us and write to us directly:")}</p>
                <p className="text-sm md:text-base leading-relaxed font-semibold mt-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>@arte_gogo</p>
              </div>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100070180624280" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-2 md:flex-row md:text-left md:gap-4 p-3 md:p-5 rounded-2xl border border-zinc-300 hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5" style={{ background: "#F9FAFB" }}>
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)" }}>
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <div className="w-full min-w-0 text-center md:text-left" style={{ wordBreak: "break-word" }}>
                <p className="text-sm md:text-base leading-relaxed font-bold mb-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>Facebook</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>{t("Na ndiqni:", "Follow us:")}</p>
                <p className="text-sm md:text-base leading-relaxed font-semibold mt-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>Arte Gogo — Facebook</p>
              </div>
            </a>

            <a href="https://youtube.com/@artegogo3246?si=mh18TVeVBhO5sAUO" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-2 md:flex-row md:text-left md:gap-4 p-3 md:p-5 rounded-2xl border border-zinc-300 hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5" style={{ background: "#F9FAFB" }}>
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}>
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <div className="w-full min-w-0 text-center md:text-left" style={{ wordBreak: "break-word" }}>
                <p className="text-sm md:text-base leading-relaxed font-bold mb-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>YouTube</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>{t("Na ndiqni:", "Follow us:")}</p>
                <p className="text-sm md:text-base leading-relaxed font-semibold mt-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>@artegogo3246</p>
              </div>
            </a>

            <a href="mailto:info@artogogo.com"
              className="group flex flex-col items-center text-center gap-2 md:flex-row md:text-left md:gap-4 p-3 md:p-5 rounded-2xl hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#F9FAFB", border: "1px solid #d4d4d8" }}>
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "#7c3aed" }}>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="w-full min-w-0 text-center md:text-left" style={{ wordBreak: "break-word" }}>
                <p className="text-sm md:text-base leading-relaxed font-bold mb-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>Email</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>{t("Na shkruani:", "Write to us:")}</p>
                <p className="text-sm md:text-base leading-relaxed font-semibold mt-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>info@artogogo.com</p>
              </div>
            </a>

            <a href="https://tiktok.com/@dr.artegogo" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-2 md:flex-row md:text-left md:gap-4 p-3 md:p-5 rounded-2xl border border-zinc-300 hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5" style={{ background: "#F9FAFB" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-zinc-900 transition-transform duration-300 group-hover:scale-110">
                <TikTokIcon />
              </div>
              <div className="w-full min-w-0 text-center md:text-left" style={{ wordBreak: "break-word" }}>
                <p className="text-sm md:text-base leading-relaxed font-bold mb-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>TikTok</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>{t("Na ndiqni:", "Follow us:")}</p>
                <p className="text-sm md:text-base leading-relaxed font-semibold mt-0.5" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>@dr.artegogo</p>
              </div>
            </a>
          </div>

          <div className="mt-3 flex justify-center">
            <div className="flex items-center gap-2 md:gap-3 p-3 md:p-5 rounded-2xl max-w-md w-full"
              style={{ background: "#F9FAFB", border: "1px solid #d4d4d8" }}>
              <MessageCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#7c3aed" }} />
              <p className="text-xs md:text-base leading-relaxed text-center" style={{ color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
                {t("Ju përgjigjemi brenda", "We respond within")}{" "}
                <span className="font-bold" style={{ color: "#7c3aed" }}>{t("24 orëve", "24 hours")}</span>.{" "}
                {t("Jemi këtu për t'ju ndihmuar të bëni hapin e radhës.", "We are here to help you take the next step.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
