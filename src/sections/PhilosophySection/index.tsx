import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const PhilosophySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  const pillars = [
    { icon: "♡", label: t("Zemra", "Heart"), color: "", border: "", text: "", bg: "#F3F0FF" },
    { icon: "◎", label: t("Truri", "Mind"), color: "", border: "", text: "", bg: "#F3F0FF" },
    { icon: "◈", label: t("Trupi", "Body"), color: "", border: "", text: "", bg: "#F3F0FF" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-24 md:py-32" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/60 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className={`mb-6 flex items-center justify-center gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="h-px w-10 bg-violet-300" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#9D8FEF" }}>
            Signature Philosophy
          </span>
          <span className="h-px w-10 bg-violet-400/50" />
        </div>

        <h2 className={`mb-8 text-2xl font-bold leading-tight text-zinc-900 md:text-3xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {t("Kur ndryshon", "When")}{" "}
          <span style={{ color: "#9D8FEF" }}>
            {t("energjia,", "energy changes,")}
          </span>
          <br />
          {t("ndryshon", "everything")}{" "}
            <span>{t("gjithçka", "changes")}</span>
        </h2>

        <div className={`mb-12 flex items-center justify-center gap-4 md:gap-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {pillars.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border" style={{ backgroundColor: "#F3F0FF", borderColor: "#DDD6FE" }}>
                <span className="text-2xl" style={{ color: "#9D8FEF" }}>{p.icon}</span>
              </div>
              <span className="text-sm font-semibold leading-relaxed text-zinc-700 md:text-base">{p.label}</span>
            </div>
          ))}
        </div>

        <div className={`mx-auto mb-10 flex max-w-xl items-center justify-center gap-3 transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
          {[
            { icon: "♡", label: t("Zemra", "Heart") },
            { icon: "◎", label: t("Truri", "Mind") },
            { icon: "◈", label: t("Trupi", "Body") },
          ].map((item, i, arr) => (
            <>
              <span key={item.label} className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-semibold leading-relaxed text-zinc-700 md:text-base">
                {item.icon} {item.label}
              </span>
              {i < arr.length - 1 && (
                <svg key={`arrow-${i}`} className="h-3 w-3" style={{ color: "#9D8FEF" }} fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              )}
            </>
          ))}
          <svg className="h-3 w-3" style={{ color: "#9D8FEF" }} fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
          </svg>
          <span className="rounded-full px-4 py-1.5 text-sm font-semibold leading-relaxed md:text-base" style={{ border: "1px solid #DDD6FE", backgroundColor: "#F3F0FF", color: "#9D8FEF" }}>
            ✦ {t("Harmoni", "Harmony")}
          </span>
        </div>

        <p className={`mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-zinc-700 transition-all duration-700 delay-400 md:text-base ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {t(
            "Kur zemra, truri dhe trupi fillojnë të punojnë në harmoni, ndryshon mënyra si ndihesh, si mendon, si vepron dhe çfarë tërheq në jetën tënde.",
            "When the heart, mind and body begin to work in harmony, the way you feel, think, act and what you attract into your life changes."
          )}
        </p>

        <blockquote className={`mx-auto mt-10 max-w-xl rounded-2xl border border-zinc-200 bg-white px-8 py-6 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="mb-3 block text-3xl" style={{ color: "#9D8FEF" }}>"</span>
          <p className="text-sm italic leading-relaxed text-zinc-700 md:text-base">
            {t(
              "Puna jonë nuk fillon dhe mbaron me ndjenjën e mirë — ajo ndryshon mënyrën si jeton.",
              "Our work doesn't begin and end with feeling good — it changes the way you live."
            )}
          </p>
        </blockquote>
      </div>
    </section>
  );
};
