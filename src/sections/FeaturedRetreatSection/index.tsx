import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export const FeaturedRetreatSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  const topics = [
    { number: "01", label: t("Harmonizimi i zemrës, mendjes dhe sistemit nervor", "Harmonization of heart, mind and nervous system") },
    { number: "02", label: t("Lirimi emocional", "Emotional release") },
    { number: "03", label: t("Hapja e zemrës", "Opening of the heart") },
    { number: "04", label: t("Rritja e energjisë jetësore", "Increasing vital energy") },
    { number: "05", label: t("Intuita dhe lidhja me veten", "Intuition and connection with yourself") },
    { number: "06", label: t("Manifestimi dhe krijimi i jetës së re", "Manifestation and creation of a new life") },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-24 md:py-32" style={{ backgroundColor: "#F9FAFB" }}>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mb-6 flex transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-flex items-center rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ backgroundColor: "#F3F0FF", borderColor: "#DDD6FE", color: "#9D8FEF" }}>
            Retreat
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          <div>
            <h2 className={`mb-5 text-2xl font-bold leading-tight text-zinc-900 md:text-3xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {t("Retreat", "Retreat")}{" "}
              <span style={{ color: "#9D8FEF" }}>
                {t("Meditimi", "Meditation")}
              </span>
            </h2>

            <p className={`mb-10 max-w-lg text-sm leading-relaxed text-zinc-700 md:text-base transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {t(
                "Një përvojë immersive për të liruar emocionet, për të harmonizuar energjinë dhe për të hyrë në një nivel të ri të vetes.",
                "An immersive experience to release emotions, harmonize energy and enter a new level of yourself."
              )}
            </p>

            <ul className="mb-12 space-y-4">
              {topics.map((topic, i) => (
                <li key={topic.number} className={`flex items-start gap-4 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                  style={{ transitionDelay: visible ? `${200 + i * 70}ms` : "0ms" }}>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold" style={{ backgroundColor: "#F3F0FF", border: "1px solid #DDD6FE", color: "#9D8FEF" }}>
                    {topic.number}
                  </span>
                  <span className="text-sm leading-relaxed text-zinc-700 md:text-base font-normal">{topic.label}</span>
                </li>
              ))}
            </ul>

            <p className={`mb-10 pl-5 text-sm italic leading-relaxed text-zinc-700 md:text-base transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ borderLeft: "2px solid #9D8FEF" }}>
              {t(
                "Ky retreat është për ata që duan të dalin nga mbijetesa dhe të hyjnë në një gjendje më të lartë paqeje, fuqie dhe krijimi.",
                "This retreat is for those who want to move beyond survival and enter a higher state of peace, power and creation."
              )}
            </p>

            <div className={`transition-all duration-700 delay-[800ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <button onClick={() => navigate("/eventet/retreat")}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.03]" style={{ backgroundColor: "#9D8FEF" }}>
                <span className="relative z-10 text-sm leading-relaxed md:text-base">{t("Rezervo vendin tënd", "Reserve your spot")}</span>
                <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute inset-0 -translate-x-full bg-white/10 skew-x-12 transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="relative h-56 w-full overflow-hidden md:h-72">
                <img
                  src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777289586460-0.png"
                  alt="Retreat Meditimi 2026"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: t("7 Ditë", "7 Days"), label: t("Kohëzgjatja", "Duration") },
                    { value: "20+", label: t("Seanca", "Sessions") },
                    { value: "30", label: t("Vende gjithsej", "Total spots") },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-200 p-3 text-center">
                      <div className="text-2xl font-extrabold" style={{ color: "#000000" }}>{s.value}</div>
                      <div className="text-sm leading-relaxed text-zinc-700 md:text-base mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="h-px w-full bg-gray-200" />
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-700">
                    {t("Çfarë përfshin", "What it includes")}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {[
                      t("Meditim i thellë", "Deep meditation"),
                      t("Praktika somatike", "Somatic practices"),
                      t("Punë me frymëmarrjen", "Breathwork"),
                      t("Grupime të vogla", "Small groups"),
                      t("Materiale & audio", "Materials & audio"),
                      t("Mbështetje pas retreat-it", "Post-retreat support"),
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm leading-relaxed text-zinc-700 md:text-base">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#000000" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
