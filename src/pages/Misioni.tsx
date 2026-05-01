import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

const Divider = () => <div className="w-12 h-px bg-violet-300 my-8 mx-auto md:mx-0" />;

const GALLERY_IMAGES = [
  "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776843089769-0.jpeg",
  "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776843089797-1.jpeg",
  "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776843089829-2.jpeg",
];

export const MisioniPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const { t } = useLanguage();
  useEffect(() => { const timer = setTimeout(() => setHeroVisible(true), 80); return () => clearTimeout(timer); }, []);

  const MISSION_RESULTS = [
    t("Përmirësim të shëndetit fizik dhe mirëqenies së përgjithshme", "Improvement in physical health and general wellbeing"),
    t("Çlirim nga ankthi, stresi dhe depresioni", "Relief from anxiety, stress and depression"),
    t("Përmirësime në sëmundje të ndryshme fizike përmes aktivizimit të proceseve natyrale të trupit", "Improvements in various physical illnesses through activation of the body's natural processes"),
    t("Qartësi mendore, fokus dhe stabilitet emocional", "Mental clarity, focus and emotional stability"),
    t("Rritje të energjisë dhe ndjesi të thellë vitaliteti", "Increased energy and a deep sense of vitality"),
    t("Përmirësim të marrëdhënieve dhe lidhje më të shëndetshme me të tjerët", "Improvement in relationships and healthier connections with others"),
    t("Ndryshime pozitive në karrierë dhe qartësi në drejtimin e jetës", "Positive career changes and clarity in life direction"),
    t("Krijim të mundësive të reja dhe rritje të bollëkut në jetën e tyre", "Creation of new opportunities and increased abundance in their lives"),
    t("Frymëzim për të transformuar jo vetëm veten, por edhe jetët e të tjerëve", "Inspiration to transform not only themselves but also the lives of others"),
  ];

  return (
    <div className="bg-white text-zinc-800 min-h-screen">
      <section className="relative overflow-hidden min-h-[52vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776842921200-0.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        <div className="relative w-full max-w-3xl mx-auto px-6 py-24 text-center"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] font-semibold mb-6 px-5 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.25)" }}>
            {t("Rreth Nesh", "About Us")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {t("Misioni", "Our")}{" "}
            <span style={{ color: "#C4B5FD" }}>{t("ynë", "mission")}</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.82)" }}>
            {t("T'ju ndihmojmë të riktheheni tek vetja juaj e vërtetë.", "To help you return to your true self.")}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 px-4 py-1.5 rounded-full" style={{ background: "#EDE9FD", color: "#9D8FEF", border: "1px solid #C4B5FD" }}>{t("Misioni ynë", "Our mission")}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-snug mb-6">
              {t("Hapësira juaj e transformimit të vërtetë", "Your space of true transformation")}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">
              {t("Misioni ynë është t'ju ndihmojmë të riktheheni tek vetja juaj e vërtetë… dhe t'ju kujtojmë se ju jeni krijues të fuqishëm të realitetit tuaj.", "Our mission is to help you return to your true self… and to remind you that you are powerful creators of your reality.")}
            </p>
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">
              {t("Të krijojmë një hapësirë ku ju mund të qetësoni sistemin nervor, të lironi bllokimet emocionale dhe të rilidheni me potencialin tuaj më të lartë.", "To create a space where you can calm the nervous system, release emotional blockages and reconnect with your highest potential.")}
            </p>
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
              {t("Në një botë ku shumica jeton në stres, tension dhe mbingarkesë mendore, shumë njerëz humbasin lidhjen me veten dhe me intuitën e tyre. Ne jemi këtu për t'ju udhëhequr në këtë rikthim tek vetja.", "In a world where most people live in stress, tension and mental overload, many lose their connection with themselves and their intuition. We are here to guide you in this return to yourself.")}
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "#9D8FEF" }}>{t("Metodologjia jonë", "Our methodology")}</p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">
                {t("Përmes metodologjisë sonë unike, që bashkon shkencën moderne me praktikat më të avancuara të meditimit, ne punojmë drejtpërdrejt me trurin, zemrën dhe trupin.", "Through our unique methodology, which combines modern science with the most advanced meditation practices, we work directly with the brain, heart and body.")}
              </p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-6">
                {t("Teknikat tona bazohen në parime të studiuara si", "Our techniques are based on studied principles such as")}{" "}
                <strong className="text-zinc-800 font-semibold">{t("koherenca zemër–tru", "heart-brain coherence")}</strong>,{" "}
                {t("rregullimi i valëve të trurit, aktivizimi i sistemit parasimpatik dhe harmonizimi i proceseve biologjike.", "brain wave regulation, activation of the parasympathetic system and harmonization of biological processes.")}
              </p>
              <div className="border-l-2 border-violet-300 pl-4">
                <p className="text-zinc-700 text-sm font-medium italic leading-relaxed">
                  "{t("Kjo është pika ku fillon transformimi i vërtetë.", "This is where true transformation begins.")}"
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <FadeIn>
            <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 px-4 py-1.5 rounded-full" style={{ background: "#EDE9FD", color: "#9D8FEF", border: "1px solid #C4B5FD" }}>{t("Transformimi", "Transformation")}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">{t("Çfarë përjetojnë pjesëmarrësit", "What participants experience")}</h2>
            <Divider />
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base max-w-2xl mb-10">
              {t("Në këto gjendje të thella harmonie, trupi hyn në një fazë të avancuar autorregullimi dhe rigjenerimi. Mendja qetësohet, emocionet balancohen dhe energjia fillon të rrjedhë lirshëm.", "In these deep states of harmony, the body enters an advanced phase of self-regulation and regeneration. The mind calms, emotions balance and energy begins to flow freely.")}
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {MISSION_RESULTS.map((text, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="flex items-start gap-3 border border-zinc-100 hover:border-violet-200 bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-violet-100 text-violet-600 text-[10px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeIn>
            <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 px-4 py-1.5 rounded-full" style={{ background: "#EDE9FD", color: "#9D8FEF", border: "1px solid #C4B5FD" }}>{t("Galeria", "Gallery")}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">{t("Momentet tona", "Our moments")}</h2>
          <Divider />
        </FadeIn>
        <FadeIn delay={100}>
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-4">
            <img src={GALLERY_IMAGES[activeImg]} alt="Gallery" className="w-full h-full object-cover object-top transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="flex gap-3">
            {GALLERY_IMAGES.map((src, i) => (
              <button key={i} onClick={() => setActiveImg(i)}
                className={`relative flex-1 aspect-[3/2] rounded-xl overflow-hidden border-2 transition-all duration-200 ${activeImg === i ? "border-violet-500" : "border-transparent opacity-60 hover:opacity-90"}`}>
                <img src={src} alt={`Moment ${i + 1}`} className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <FadeIn>
            <span className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold mb-10 px-4 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)", color: "#9D8FEF", border: "1px solid rgba(157,143,239,0.3)", backdropFilter: "blur(4px)" }}>
              {t("Misioni ynë", "Our mission")}
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6 tracking-tight">
              {t("Qëllimi ynë nuk është vetëm", "Our goal is not just")}<br />
              <span style={{ color: "#9D8FEF" }}>{t("t'ju ndihmojmë të ndiheni më mirë…", "to help you feel better…")}</span>
            </h2>

            <p className="text-sm leading-relaxed text-white/55 md:text-base max-w-2xl mx-auto mb-16">
              {t("por t'ju ndihmojmë të transformoheni në mënyrë të qëndrueshme. Sepse jeta që jetoni është një reflektim i asaj që ndodh brenda jush.", "but to help you transform in a lasting way. Because the life you live is a reflection of what happens within you.")}
            </p>

            <div className="flex flex-col items-center gap-5 mb-16">
              <div className="flex items-center justify-center gap-4 max-w-lg w-full">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#9D8FEF" }} />
                <p className="text-sm leading-relaxed text-white/70 md:text-base italic text-center">
                  {t("Kur riktheheni tek vetja…", "When you return to yourself…")}
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 max-w-lg w-full">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#9D8FEF" }} />
                <p className="text-sm leading-relaxed text-white/70 md:text-base italic text-center">
                  {t("kur trupi, mendja dhe zemra hyjnë në harmoni…", "when body, mind and heart come into harmony…")}
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 max-w-lg w-full">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#9D8FEF" }} />
                <p className="text-sm leading-relaxed text-white/70 md:text-base italic text-center">
                  {t("hapet rruga për shërim, për bollëk dhe për krijimin e një realiteti të ri.", "the path opens for healing, abundance and the creation of a new reality.")}
                </p>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      <section className="border-t border-zinc-100">
        <FadeIn>
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              {t("Edhe ju mund të krijoni", "You too can create")}<br />
              <span className="font-bold text-violet-600">{t("jetën tuaj të re.", "your new life.")}</span>
            </h2>
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-10 max-w-md mx-auto">
              {t("Jeni të mirëpritur! Përmes retreat-eve dhe programeve tona online, kemi ndihmuar mijëra njerëz të transformojnë jetën e tyre.", "You are welcome! Through our retreats and online programs, we have helped thousands of people transform their lives.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/eventet/retreat" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm leading-relaxed md:text-base font-semibold transition-all">
                {t("Rezervo Retreat-in", "Book the Retreat")}
              </Link>
              <Link to="/eventet/trajnime-online" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-zinc-200 hover:border-violet-300 text-zinc-700 hover:text-violet-700 text-sm leading-relaxed md:text-base font-medium transition-all">
                {t("Shiko Trajnimet Online", "View Online Trainings")}
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};
