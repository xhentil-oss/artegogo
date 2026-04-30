import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" ref={ref}>
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777298905998-0.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-5 py-24 text-center">

        <div className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "0ms" }}>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-300 animate-pulse inline-block" />
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
              Harmonizim Kuantik
            </span>
          </div>
        </div>

        <div className={`transition-all duration-800 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "150ms" }}>
          <h1 className="font-bold leading-[1.1] tracking-tight max-w-3xl mx-auto mb-6">
            <span className="block text-4xl md:text-5xl lg:text-6xl mb-1 text-white">
              Rikthehu tek vetja.
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-violet-200 mt-1">
              Harmonizo zemrën,<br />trurin dhe trupin.
            </span>
          </h1>
        </div>

        <div className={`transition-all duration-800 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "450ms" }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="/eventet/retreat"
              className="group relative inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#9D8FEF" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              Rezervo Retreat-in
            </a>
            <a
              href="/eventet/trajnime-online"
              className="group inline-flex items-center gap-3 font-semibold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#eeeaf9", border: "1.5px solid #c4baf7", color: "#9D8FEF" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              Shiko Trajnimet Online
            </a>
          </div>
        </div>

        <div className={`transition-all duration-800 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "600ms" }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-violet-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-sm leading-relaxed text-white md:text-base">{t("Shkencë + Spiritualitet", "Science + Spirituality")}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-violet-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-sm leading-relaxed text-white md:text-base">{t("Transformim i Thellë", "Deep Transformation")}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-violet-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-sm leading-relaxed text-white md:text-base">{t("Harmoni Trup–Mendje–Zemër", "Body–Mind–Heart Harmony")}</span>
            </div>
          </div>
        </div>

        {/* Zbulo scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs tracking-widest uppercase animate-bounce">
          <span>Zbulo</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
        </div>

      </section>
    </div>
  );
};
