import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const WhyDifferentSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const pillars = [
    {
      number: "01",
      label: t("Shkenca e sistemit nervor", "Nervous System Science"),
      desc: t("Kuptojmë si funksionon truri dhe sistemi nervor për të krijuar ndryshim të vërtetë.", "We understand how the brain and nervous system work to create real change."),
    },
    {
      number: "02",
      label: t("Koherenca zemër-tru", "Heart-Brain Coherence"),
      desc: t("Rreshtojmë rrahjet e zemrës me valët e trurit për qetësi dhe fokus maksimal.", "We align heartbeats with brain waves for maximum calm and focus."),
    },
    {
      number: "03",
      label: t("Meditimet e avancuara", "Advanced Meditations"),
      desc: t("Praktika të thella që hyjnë nën sipërfaqen e mendjes ndërgjegjësuese.", "Deep practices that go beneath the surface of the conscious mind."),
    },
    {
      number: "04",
      label: t("Lirimi emocional", "Emotional Release"),
      desc: t("Çlirojmë bllokadat e fshehura dhe ngarkesën emocionale të grumbulluar me vite.", "We release hidden blockages and emotional burdens accumulated over years."),
    },
    {
      number: "05",
      label: t("Teknika praktike për jetën e përditshme", "Practical Techniques for Daily Life"),
      desc: t("Çdo mjet mund të aplikohet menjëherë — jo vetëm gjatë sesionit.", "Every tool can be applied immediately — not just during the session."),
    },
  ];

  const quadrants = [
    t("Trup", "Body"),
    t("Mendje", "Mind"),
    t("Zemër", "Heart"),
    t("Energji", "Energy"),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 px-6" style={{ backgroundColor: "#F9FAFB" }}>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-20" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <div className="flex justify-center mb-6">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1" style={{ color: '#9D8FEF', backgroundColor: '#F3F0FF', border: '1px solid #DDD6FE' }}>
              {t("Pse jemi ndryshe", "Why we are different")}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-tight text-center mb-5">
            {t("Pse kjo qasje është ndryshe", "Why this approach is different")}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base text-center max-w-2xl mx-auto">
            {t(
              "Metoda jonë nuk mbështetet vetëm në teori apo motivim të përkohshëm. Ajo bashkon pesë shtylla të fuqishme.",
              "Our method does not rely solely on theory or temporary motivation. It combines five powerful pillars."
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-center">
          <div className="relative">
            <ul className="space-y-0">
              {pillars.map((item, i) => (
                <li key={i} className="relative flex gap-8 pb-10 last:pb-0 group"
                  style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-28px)", transition: `opacity 0.55s ease ${350 + i * 110}ms, transform 0.55s ease ${350 + i * 110}ms` }}>
                  <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{ background: "rgba(157,143,239,0.12)", border: "2px solid rgba(157,143,239,0.35)" }}>
                    <span className="font-bold text-sm tracking-wider" style={{ color: "#9D8FEF" }}>{item.number}</span>
                  </div>
                  <div>
                    <h3 className="text-black font-bold text-lg mb-1 leading-snug">{item.label}</h3>
                    <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s" }}>
            <div className="rounded-3xl p-8 relative overflow-hidden"
              style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/20" style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.08)" }} />
              <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full border border-white/10" />
              <div className="relative z-10">
                <div className="w-10 h-1.5 rounded-full mb-6" style={{ background: "#9D8FEF" }} />
                <h3 className="text-black font-bold text-2xl leading-snug mb-4">{t("Qëllimi i vërtetë", "The True Goal")}</h3>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-8">
                  {t(
                    "Qëllimi nuk është vetëm të ndihesh mirë për pak çaste, por të krijosh një",
                    "The goal is not just to feel good for a few moments, but to create a"
                  )}{" "}
                  <span className="font-semibold underline underline-offset-2" style={{ color: "#9D8FEF", textDecorationColor: "rgba(157,143,239,0.5)" }}>
                    {t("ndryshim të qëndrueshëm", "lasting change")}
                  </span>{" "}
                  {t("në trup, mendje, zemër dhe energji.", "in body, mind, heart and energy.")}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {quadrants.map((w, i) => (
                    <div key={w} className="relative overflow-hidden rounded-2xl py-4 px-4 font-semibold text-sm leading-relaxed md:text-base tracking-wide text-center"
                      style={{ background: "rgba(157,143,239,0.12)", border: "1px solid rgba(157,143,239,0.35)", color: "#9D8FEF", opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.85)", transition: `opacity 0.4s ease ${800 + i * 80}ms, transform 0.4s ease ${800 + i * 80}ms` }}>
                      <span className="relative z-10">{w}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-violet-200">
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base tracking-wide font-semibold">
                    {t("Transformim real · Jo i përkohshëm", "Real Transformation · Not Temporary")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
