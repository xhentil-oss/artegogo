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

export const RrethNeshPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const { t } = useLanguage();
  useEffect(() => { const timer = setTimeout(() => setHeroVisible(true), 80); return () => clearTimeout(timer); }, []);

  return (
    <div className="bg-white text-zinc-800 min-h-screen">
      <section className="relative overflow-hidden min-h-[52vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776841953356-0.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        <div className="relative w-full max-w-3xl mx-auto px-6 py-24 text-center"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] font-semibold mb-6 px-5 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.25)" }}>
            {t("Kush Jemi Ne", "Who We Are")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {t("Kush jemi", "Who we are")}{" "}
            <span style={{ color: "#C4B5FD" }}>{t("ne", "we")}</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.82)" }}>
            {t(
              "Mjekë, studiues shkencorë dhe mentorë të transformimit të thellë personal — nga harmonizimi energjitik deri te krijimi i realitetit të ri.",
              "Doctors, scientific researchers and mentors of deep personal transformation — from energetic harmonization to the creation of a new reality."
            )}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold mb-5 px-4 py-1.5 rounded-full border"
              style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
              {t("Rreth Nesh", "Rreth Nesh")}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-snug mb-6">
              Dr. Marvin Bundo &amp;<br />Dr. Artemisa Gogollari
            </h2>
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">
              {t("Mjekë, studiues shkencorë në Zvicër dhe mentorë të zhvillimit personal dhe meditimit.", "Doctors, scientific researchers in Switzerland and mentors of personal development and meditation.")}
            </p>
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">
              {t("Misioni ynë është t'ju ndihmojmë të riktheheni tek vetja juaj e vërtetë, të lironi bllokimet emocionale dhe të krijoni një jetë me më shumë qartësi, energji dhe dashuri.", "Our mission is to help you return to your true self, release emotional blockages and create a life with more clarity, energy and love.")}
            </p>
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
              {t("Kemi krijuar një metodologji unike që bashkon shkencën moderne me praktikat më të avancuara të meditimit, duke ofruar një rrugë transformimi të thellë dhe të qëndrueshëm.", "We have created a unique methodology that combines modern science with the most advanced meditation practices, offering a path of deep and lasting transformation.")}
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden">
                <img src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776841953356-0.jpeg"
                  alt="Dr. Marvin and Dr. Artemisa" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm leading-relaxed text-white/90 md:text-base font-light tracking-wider text-center drop-shadow">Dr. Marvin &amp; Dr. Artemisa</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20"
                style={{ backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)", backgroundSize: "8px 8px" }} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-zinc-100" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <FadeIn>
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold mb-5 px-4 py-1.5 rounded-full border"
              style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
              {t("Çfarë bëjmë", "What we do")}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 mt-2">{t("Çfarë bëjmë", "What we do")}</h2>
            <Divider />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn delay={100}>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-6">
                {t("Në trajnimet dhe retreat-et tona, ju ndihmojmë të transformoni jetën tuaj nëpërmjet metodave të provuara shkencërisht.", "In our trainings and retreats, we help you transform your life through scientifically proven methods.")}
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  t("Shëroni emocionet e bllokuara dhe traumat e së shkuarës", "Heal blocked emotions and past traumas"),
                  t("Aktivizoni energjinë dhe potencialin tuaj të plotë", "Activate your full energy and potential"),
                  t("Arrini koherencën zemër-tru dhe qartësi mendore", "Achieve heart-brain coherence and mental clarity"),
                  t("Përdorni teknika të avancuara për manifestim dhe krijim", "Use advanced techniques for manifestation and creation"),
                  t("Transformoni modelet e vjetra dhe krijoni një realitet të ri", "Transform old patterns and create a new reality"),
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    <span className="text-sm leading-relaxed text-zinc-700 md:text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-2xl border border-violet-100 bg-white p-8">
                <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold mb-4 px-4 py-1.5 rounded-full border"
                  style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
                  {t("Baza shkencore", "Scientific Foundation")}
                </span>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                  {t("Metodat tona bazohen në kërkime shkencore — përfshirë matje", "Our methods are based on scientific research — including")} <strong className="text-zinc-800 font-semibold">EEG</strong> {t("dhe koherencën", "measurements and")} <strong className="text-zinc-800 font-semibold">{t("zemër-tru", "heart-brain coherence")}</strong> — {t("të kombinuara me përvojë të drejtpërdrejtë transformuese.", "combined with direct transformative experience.")}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeIn>
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold mb-5 px-4 py-1.5 rounded-full border"
              style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
              {t("Çfarë na bën ndryshe", "What makes us different")}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">{t("Çfarë na bën ndryshe", "What makes us different")}</h2>
            <Divider />
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base max-w-xl mb-10">
            {t("Ne krijojmë një eksperiencë ku trupi, mendja dhe zemra hyjnë në një gjendje koherence të thellë, ku transformimi ndodh natyrshëm.", "We create an experience where body, mind and heart enter a state of deep coherence, where transformation happens naturally.")}
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "01", text: t("Lirim emocional i menjëhershëm", "Immediate emotional release") },
            { num: "02", text: t("Rritje e energjisë dhe qartësisë", "Increase in energy and clarity") },
            { num: "03", text: t("Përmirësim i gjendjes fizike dhe mendore", "Improvement in physical and mental state") },
            { num: "04", text: t("Ndjenjë e thellë lidhjeje me veten", "Deep sense of connection with yourself") },
          ].map(({ num, text }) => (
            <FadeIn key={num} delay={parseInt(num) * 60}>
              <div className="group border border-zinc-100 hover:border-violet-200 rounded-2xl p-6 transition-all duration-300">
                <p className="text-[11px] font-mono text-violet-200 mb-3">{num}</p>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#18181b" }} className="text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <FadeIn>
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold mb-5 px-4 py-1.5 rounded-full border"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#C4B5FD", borderColor: "rgba(196,181,253,0.3)" }}>
              {t("Eksperienca & Kërkimi", "Experience & Research")}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {t("Eksperienca dhe kërkimi shkencor", "Experience and scientific research")}
            </h2>
            <div className="w-12 h-px bg-violet-600 my-8" />
            <p className="text-sm leading-relaxed text-white md:text-base max-w-xl mb-12">
              {t("Mjekë dhe studiues shkencorë në Zvicër, me fokus në edukimin mjekësor, mjekësinë parandaluese dhe shëndetin mendor. Karrierë kërkimore në Austri dhe Zvicër.", "Doctors and scientific researchers in Switzerland, focusing on medical education, preventive medicine and mental health. Research careers in Austria and Switzerland.")}
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={100}>
              <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold mb-4 px-4 py-1.5 rounded-full border"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#C4B5FD", borderColor: "rgba(196,181,253,0.3)" }}>
                {t("Grante prestigjioze", "Prestigious grants")}
              </span>
              <ul className="flex flex-col gap-4">
                {[
                  t("Grant i Komisionit Evropian", "European Commission Grant"),
                  "Marie Skłodowska-Curie",
                  t("Grante nacionale në Zvicër (SNF)", "National grants in Switzerland (SNF)"),
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-sm leading-relaxed text-white md:text-base">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />{text}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={180}>
              <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold mb-4 px-4 py-1.5 rounded-full border"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#C4B5FD", borderColor: "rgba(196,181,253,0.3)" }}>
                {t("Fushat e kërkimit", "Research fields")}
              </span>
              <ul className="flex flex-col gap-4">
                {[
                  t("Edukimi mjekësor dhe të mësuarit dixhital", "Medical education and digital learning"),
                  t("Epigjenetika dhe ndikimi i mendjes në trup", "Epigenetics and the mind-body impact"),
                  t("Shëndeti mendor dhe faktorët mjedisorë", "Mental health and environmental factors"),
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />{text}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeIn>
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold mb-5 px-4 py-1.5 rounded-full border"
              style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
              {t("Metoda jonë", "Our method")}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">{t("Metoda jonë", "Our method")}</h2>
            <Divider />
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base max-w-xl mb-12">
            {t("Kjo qasje krijon një transformim që nuk është vetëm mendor, por i ndjerë në trup, zemër dhe i reflektuar në jetën reale.", "This approach creates a transformation that is not only mental, but felt in the body, heart and reflected in real life.")}
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { title: t("Meditime &amp; frymëmarrje", "Meditations &amp; breathwork"), desc: t("Teknika të avancuara meditimi dhe frymëmarrje dinamike", "Advanced meditation techniques and dynamic breathwork") },
            { title: t("Sistemi nervor", "Nervous system"), desc: t("Aktivizimi i sistemit nervor dhe nervit vagus", "Activation of the nervous system and vagus nerve") },
            { title: t("Koherence zemër-tru", "Heart-brain coherence"), desc: t("Punë me valët gama dhe koherencën zemër-tru", "Work with gamma waves and heart-brain coherence") },
            { title: t("Shërim emocional", "Emotional healing"), desc: t("Puna me nënndërgjegjen dhe shërim i thellë emocional", "Working with the subconscious and deep emotional healing") },
            { title: t("Aktivizimi i fashave", "Fascia activation"), desc: t("Lirimi dhe aktivizimi i fashave të bllokuara", "Release and activation of blocked fascia") },
            { title: t("Transformim i qëndrueshëm", "Lasting transformation"), desc: t("Ndryshim i reflektuar në trup, zemër dhe jetën reale", "Change reflected in body, heart and real life") },
          ].map(({ title, desc }, i) => (
            <FadeIn key={title} delay={i * 70}>
              <div className="border border-zinc-100 hover:border-violet-200 rounded-2xl p-6 group transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-violet-50 group-hover:bg-violet-100 flex items-center justify-center mb-4 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                </div>
                <p className="text-zinc-900 text-base font-semibold mb-2" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-100">
        <FadeIn>
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-center">
            <div className="flex justify-center mb-6">
              <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full border"
                style={{ backgroundColor: "#EDE9FD", color: "#9D8FEF", borderColor: "#C4B5FD" }}>
                {t("Transformo Jetën Tënde", "Transform Your Life")}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 leading-tight">
              {t("Edhe ju mund të krijoni", "You too can create")}<br />
              <span style={{ color: '#9D8FEF' }}>{t("jetën tuaj të re.", "your new life.")}</span>
            </h2>
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-10 max-w-md mx-auto">
              {t("Jeni të mirëpritur! Përmes retreat-eve dhe programeve tona online, kemi ndihmuar mijëra njerëz të transformojnë jetën e tyre.", "You are welcome! Through our retreats and online programs, we have helped thousands of people transform their lives.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/eventet/retreat"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-white font-semibold transition-all hover:opacity-90 text-sm leading-relaxed md:text-base"
                style={{ backgroundColor: '#9D8FEF' }}>
                {t("Rezervo Retreat-in", "Book the Retreat")}
              </Link>
              <Link to="/eventet/trajnime-online"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-zinc-200 hover:border-violet-300 text-zinc-700 hover:text-violet-700 font-medium transition-all text-sm leading-relaxed md:text-base">
                {t("Shiko Trajnimet Online", "View Online Trainings")}
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};
