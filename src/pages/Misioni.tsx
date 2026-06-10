import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const useVisible = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className={className}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  );
};

export const MisioniPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const { t } = useLanguage();
  useEffect(() => { const timer = setTimeout(() => setHeroVisible(true), 80); return () => clearTimeout(timer); }, []);

  return (
    <div className="misioni bg-white text-zinc-800 min-h-screen">
      <section className="relative overflow-hidden min-h-[35vh] md:min-h-[52vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776842921200-0.jpeg')", backgroundPosition: "center 20%" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        <div className="relative w-full max-w-3xl mx-auto px-6 py-24 text-center" />
      </section>

      {/* ── Mission pillars ── */}
      <section style={{ background: "linear-gradient(180deg, #faf7ff 0%, #ffffff 100%)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-2 md:py-12">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:gap-0 md:divide-x md:divide-violet-100">

              {/* Item 1 */}
              <div className="flex flex-row md:flex-col items-start md:items-center gap-3 md:gap-0 text-left md:text-center md:flex-1 md:px-10 pb-3 md:pb-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 md:mb-4" style={{ background: "#ede9fe" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3f3f46", fontFamily: "'Inter', sans-serif" }}>
                  {t("Misioni ynë është t'ju ndihmojmë të riktheheni tek vetja juaj e vërtetë… dhe t'ju kujtojmë se ju jeni krijues të fuqishëm të realitetit tuaj.", "Our mission is to help you return to your true self… and to remind you that you are powerful creators of your reality.")}
                </p>
              </div>

              {/* Divider mobile */}
              <div className="md:hidden w-full h-px my-2" style={{ background: "#ede9fe" }} />

              {/* Item 2 */}
              <div className="flex flex-row md:flex-col items-start md:items-center gap-3 md:gap-0 text-left md:text-center md:flex-1 md:px-10 pb-3 md:pb-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 md:mb-4" style={{ background: "#ede9fe" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>
                  </svg>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3f3f46", fontFamily: "'Inter', sans-serif" }}>
                  {t("Të krijojmë një hapësirë ku ju mund të qetësoni sistemin nervor, të lironi bllokimet emocionale dhe të rilidheni me potencialin tuaj më të lartë.", "To create a space where you can calm the nervous system, release emotional blockages and reconnect with your highest potential.")}
                </p>
              </div>

              {/* Divider mobile */}
              <div className="md:hidden w-full h-px my-2" style={{ background: "#ede9fe" }} />

              {/* Item 3 */}
              <div className="flex flex-row md:flex-col items-start md:items-center gap-3 md:gap-0 text-left md:text-center md:flex-1 md:px-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 md:mb-4" style={{ background: "#ede9fe" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V12"/>
                    <path d="M12 12C12 8 15 5 18 6c-1 3-3 5-6 6z"/>
                    <path d="M12 12C12 8 9 5 6 6c1 3 3 5 6 6z"/>
                    <path d="M12 12C12 16 9 19 6 18c1-3 3-5 6-6z"/>
                    <path d="M12 12C12 16 15 19 18 18c-1-3-3-5-6-6z"/>
                  </svg>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3f3f46", fontFamily: "'Inter', sans-serif" }}>
                  {t("Në një botë ku shumica jeton në stres, tension dhe mbingarkesë mendore, shumë njerëz humbasin lidhjen me veten dhe me intuitën e tyre.", "In a world where most people live in stress, tension and mental overload, many lose their connection with themselves and their intuition.")}
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Metodologjia ── */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-2 pb-2 md:py-12">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-3 md:gap-16 items-center">

              {/* Left: text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 md:mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {t("Metodologjia jonë", "Our methodology")}
                </h2>
                <p className="leading-relaxed mb-2 md:mb-5" style={{ fontSize: 16, color: "#3f3f46", fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
                  {t(
                    "Përmes metodologjisë sonë unike, që bashkon shkencën moderne me praktikat më të avancuara të meditimit, ne punojmë drejtpërdrejt me trurin, zemrën dhe trupin. Teknikat tona bazohen në parime të studiuara si koherenca zemër–tru, rregullimi i valëve të trurit, aktivizimi i sistemit parasimpatik dhe harmonizimi i proceseve biologjike.",
                    "Through our unique methodology, combining modern science with the most advanced meditation practices, we work directly with the brain, heart and body. Our techniques are based on studied principles such as heart-brain coherence, brain wave regulation, activation of the parasympathetic system and harmonization of biological processes."
                  )}
                </p>
                <p className="leading-relaxed mb-2 md:mb-6" style={{ fontSize: 16, color: "#3f3f46", fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
                  {t(
                    "Në këto gjendje të thella harmonie, trupi hyn në një fazë të avancuar autorregullimi dhe rigjenerimi. Mendja qetësohet, emocionet balancohen dhe energjia fillon të rrjedhë lirshëm.",
                    "In these deep states of harmony, the body enters an advanced phase of self-regulation and regeneration. The mind calms, emotions balance and energy begins to flow freely."
                  )}
                </p>
                <p className="font-bold" style={{ fontSize: 16, color: "#7c3aed", fontFamily: "'Inter', sans-serif" }}>
                  {t("Kjo është pika ku fillon transformimi i vërtetë.", "This is where true transformation begins.")}
                </p>
              </div>

              {/* Right: image */}
              <div className="rounded-2xl overflow-hidden shadow-md max-h-48 md:max-h-none">
                <img
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=700&q=80"
                  alt="Metodologjia"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 340 }}
                />
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 4 pillars ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-2 md:py-10">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch">
              {[
                {
                  icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></svg>,
                  titleAl: "Truri", titleEn: "Brain",
                  descAl: "Besimet negative dhe mendimet që na kufizojnë. Punojmë drejtpërdrejt me valët e trurit për të krijuar gjendje të reja mendore.",
                  descEn: "Negative beliefs and thoughts that limit us. We work directly with brain waves to create new mental states.",
                },
                {
                  icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
                  titleAl: "Zemra", titleEn: "Heart",
                  descAl: "Besimet dhe emocionet që krijojnë realitetin tonë. Koherenca zemër–tru është çelësi i transformimit.",
                  descEn: "Beliefs and emotions that create our reality. Heart-brain coherence is the key to transformation.",
                },
                {
                  icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v8"/><path d="M8 21l4-6 4 6"/><path d="M9 12H7a2 2 0 0 0 0 4h2"/><path d="M15 12h2a2 2 0 0 1 0 4h-2"/></svg>,
                  titleAl: "Trupi", titleEn: "Body",
                  descAl: "Kur trupin e trajnojmë të jetojë në gjendje të reja, ai bëhet shprehja e mendjes dhe zemrës së transformuar.",
                  descEn: "When we train the body to live in new states, it becomes the expression of the transformed mind and heart.",
                },
                {
                  icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
                  titleAl: "Energia", titleEn: "Energy",
                  descAl: "Mëso si të lirosh energjinë e bllokuar dhe të rilidhesh me frekuencën e lartë të jetës dhe bollëkut.",
                  descEn: "Learn how to release blocked energy and reconnect with the high frequency of life and abundance.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 80} className="h-full">
                  <div className="flex flex-col items-center text-center p-3 md:p-7 rounded-2xl h-full"
                    style={{ background: "#faf7ff", border: "1px solid #ede9fe" }}>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2 md:mb-4"
                      style={{ background: "#ede9fe" }}>
                      {item.icon}
                    </div>
                    <p className="font-bold mb-1 md:mb-2" style={{ fontSize: 13, color: "#5b21b6", fontFamily: "'Inter', sans-serif" }}>
                      {t(item.titleAl, item.titleEn)}
                    </p>
                    <div className="w-8 h-px mb-2 md:mb-3" style={{ background: "#ddd6fe" }} />
                    <p className="leading-relaxed" style={{ fontSize: 12, color: "#3f3f46", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                      {t(item.descAl, item.descEn)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Pjesëmarrësit përjetojnë ── */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-2 md:py-10">
          <FadeIn>
            {/* Lotus top */}
            <div className="flex justify-center mb-3 md:mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V12"/><path d="M12 12C12 8 15 5 18 6c-1 3-3 5-6 6z"/><path d="M12 12C12 8 9 5 6 6c1 3 3 5 6 6z"/>
                <path d="M12 12C12 16 9 19 6 18c1-3 3-5 6-6z"/><path d="M12 12C12 16 15 19 18 18c-1-3-3-5-6-6z"/>
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-10 leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#18181b" }}>
              {t("Pjesëmarrësit e trajnimeve tanë përjetojnë:", "Participants of our trainings experience:")}
            </h2>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
              {[
                t("përmirësim të shëndetit fizik dhe mirëqenies së përgjithshme", "improvement in physical health and general wellbeing"),
                t("çlirim nga ankthi, stresi dhe depresioni", "relief from anxiety, stress and depression"),
                t("përmirësime në sëmundje të ndryshme fizike përmes aktivizimit të proceseve natyrale të trupit", "improvements in various physical illnesses through activation of the body's natural processes"),
                t("qartësi mendore, fokus dhe stabilitet emocional", "mental clarity, focus and emotional stability"),
                t("rritje të energjisë dhe ndjesi të thellë vitaliteti", "increased energy and a deep sense of vitality"),
                t("përmirësim të marrëdhënieve dhe lidhje më të shëndetshme me të tjerët", "improvement in relationships and healthier connections with others"),
                t("ndryshime pozitive në karrierë dhe qartësi në drejtimin e jetës", "positive career changes and clarity in life direction"),
                t("krijim të mundësive të reja dhe rritje të bollëkut në jetën e tyre", "creation of new opportunities and increased abundance in their lives"),
                t("frymëzim për të transformuar jo vetëm veten, por edhe jetët e të tjerëve", "inspiration to transform not only themselves but also the lives of others"),
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex items-start gap-3 py-1.5 md:py-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#ede9fe" }}>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p style={{ fontSize: 16, color: "#3f3f46", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>{item}</p>
                  </div>
                  {i < 8 && <div className="w-full h-px" style={{ background: "rgba(167,139,250,0.25)" }} />}
                </div>
              ))}
            </div>

          </FadeIn>
        </div>
      </section>

      {/* ── Beach quote section ── */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=80"
          alt="Beach sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(30,10,60,0.68)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 py-8 md:py-14 text-center">
          <FadeIn>
            <p className="mb-2" style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
              {t("Qëllimi ynë nuk është vetëm t'ju ndihmojmë të ndiheni më mirë… por t'ju ndihmojmë të transformoheni në mënyrë të qëndrueshme.", "Our goal is not just to help you feel better… but to help you transform in a lasting way.")}
            </p>

            <p className="mb-2" style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
              {t("Sepse jeta që jetoni është një reflektim i asaj që ndodh brenda jush.", "Because the life you live is a reflection of what happens within you.")}
            </p>

            <p className="mb-4" style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
              {t("Kur riktheheni tek vetja… kur trupi, mendja dhe zemra hyjnë në harmoni… hapet rruga për shërim, për bollëk dhe për krijimin e një realiteti të ri.", "When you return to yourself… when body, mind and heart come into harmony… the path opens for healing, abundance and the creation of a new reality.")}
            </p>

            <h2 className="font-bold mb-2" style={{ fontSize: 28, color: "#ffffff", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.2 }}>
              {t("Misioni ynë është", "Our mission is")}
            </h2>

            <p className="mb-2" style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
              {t("t'ju kujtojmë se në çdo moment keni fuqinë për të ndryshuar jetën tuaj.", "to remind you that at every moment you have the power to change your life.")}
            </p>

            <p className="mb-6" style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
              {t("Që nuk jeni të kufizuar nga e shkuara apo nga methanat.", "That you are not limited by the past or by habits.")}
            </p>

            <h2 className="font-bold mb-6" style={{ fontSize: 28, color: "#ffffff", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.2 }}>
              {t("Ju jeni krijues.", "You are creators.")}
            </h2>

            <div className="w-12 h-px mx-auto mb-6" style={{ background: "#a78bfa" }} />

            <p className="font-semibold" style={{ fontSize: 16, color: "#e9d5ff", fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
              {t("Dhe në çdo çast keni fuqinë të ndryshoni realitetin tuaj.", "And at every moment you have the power to change your reality.")}
            </p>
          </FadeIn>
        </div>
      </section>


    </div>
  );
};
