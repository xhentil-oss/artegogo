import { useEffect, useRef, useState } from "react";
import { Brain, Heart, Zap, ChevronRight, Activity, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
};

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, visible } = useFadeIn();
  return (
    <div ref={ref} style={{ transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}>
      {children}
    </div>
  );
};

export const RezultatetShkencorePage = () => {
  const { t } = useLanguage();

  const measurements = [
    {
      id: "eeg",
      icon: Brain,
      color: "from-violet-600 to-purple-500",
      lightBg: "bg-violet-50",
      borderColor: "border-violet-200",
      accent: "text-violet-700",
      badge: "01",
      title: t("EEG — Elektroencefalografi", "EEG — Electroencephalography"),
      subtitle: t("Aktiviteti elektrik i trurit në kohë reale", "Real-time electrical activity of the brain"),
      body: [
        t("Matim aktivitetin elektrik të trurit në kohë reale gjatë gjithë seancave të meditimit.", "We measure the brain's electrical activity in real time during all meditation sessions."),
        t("Synimi kryesor: të shohim rritjen dhe sinkronizimin e valëve Gamma (40–120 Hz e më lart), si dhe kalimin në gjendje të thella meditimi (alfa, theta, etj.).", "Main goal: to see the increase and synchronization of Gamma waves (40–120 Hz and above), as well as the transition into deep meditation states (alpha, theta, etc.)."),
        t("Kjo na tregon se sa shpejt dhe sa thellë pjesëmarrësit arrijnë gjendjen e superndërgjegjes dhe unifikimin e trurit — mendje e qetë pa mendime negative.", "This tells us how quickly and deeply participants achieve the state of super-consciousness and brain unification — a calm mind without negative thoughts."),
      ],
      stat: { value: "↑ Gamma Waves", label: "40–120 Hz" },
    },
    {
      id: "hrv",
      icon: Heart,
      color: "from-rose-500 to-pink-500",
      lightBg: "bg-rose-50",
      borderColor: "border-rose-200",
      accent: "text-rose-600",
      badge: "02",
      title: t("HRV — Variabiliteti i Rrahjeve të Zemrës", "HRV — Heart Rate Variability"),
      subtitle: t("Balanca e sistemit nervor autonom", "Balance of the autonomic nervous system"),
      body: [
        t("Matim balancën e sistemit nervor autonom (simpatic vs. parasimpatik). Një HRV i lartë tregon relaksim të thellë, qëndrueshmëri ndaj stresit, mirëqenie emocionale dhe shëndet kardiovaskular më të mirë.", "We measure the balance of the autonomic nervous system (sympathetic vs. parasympathetic). A high HRV indicates deep relaxation, stress resilience, emotional wellbeing and better cardiovascular health."),
        t("Meditimi ynë zakonisht sjell rritje të qartë të HRV-së, duke treguar se trupi kalon nga 'modaliteti i luftës ose ikjes' në 'modalitetin e shërimit dhe rigjenerimit'.", "Our meditation typically brings a clear increase in HRV, showing that the body moves from 'fight or flight mode' to 'healing and regeneration mode'."),
      ],
      stat: { value: "↑ HRV", label: t("Shërim & rigjenerim", "Healing & regeneration") },
    },
    {
      id: "gdv",
      icon: Zap,
      color: "from-amber-500 to-orange-400",
      lightBg: "bg-amber-50",
      borderColor: "border-amber-200",
      accent: "text-amber-600",
      badge: "03",
      title: t("GDV — Gas Discharge Visualization", "GDV — Gas Discharge Visualization"),
      subtitle: t("Matja e qendrave energjetike (Biofield)", "Measurement of energy centers (Biofield)"),
      body: [
        t("Pajisje jo-invazive që mat fushën energjetike (biofield) përmes emetimeve elektrofotonike nga majat e gishtave.", "Non-invasive device that measures the energy field (biofield) through electrophotonic emissions from fingertips."),
        t("Na jep informacion të detajuar për nivelet e energjisë së përgjithshme, balancën e organeve dhe sistemeve, balancimin dhe fuqinë e çakrave/qendrave energjetike, si dhe nivelet e stresit.", "Gives us detailed information about overall energy levels, organ and system balance, chakra/energy center balancing and power, as well as stress levels."),
      ],
      stat: { value: "↓ Stres", label: t("Balancim çakrash", "Chakra balancing") },
    },
  ];

  const stats = [
    { value: "100%", label: t("Retreat-eve me matje shkencore", "Retreats with scientific measurements") },
    { value: "3", label: t("Protokolle matjesh të plota", "Complete measurement protocols") },
    { value: t("Para & Pas", "Before & After"), label: t("Dokumentim i transformimit", "Transformation documentation") },
    { value: "≥40Hz", label: t("Valët Gamma të matura", "Measured Gamma waves") },
  ];

  return (
    <div className="bg-white">
      <div className="relative py-16 md:py-28 px-4 md:px-6 overflow-hidden min-h-[300px] md:min-h-[420px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776860769632-0.png')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/15 text-white border border-white/20">
            {t("Shkencë & Matje", "Science & Measurement")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("Rezultate", "Scientific")}{" "}
            <span style={{ color: "#C4B5FD" }}>
              {t("Shkencore", "Results")}
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("Matjet shkencore që kryejmë në çdo Retreat — transformimi yt nuk është vetëm ndjesi, është i matshëm dhe i verifikueshëm.", "The scientific measurements we perform at every Retreat — your transformation is not just a feeling, it is measurable and verifiable.")}
          </p>
        </div>
      </div>

      <section className="py-16 px-6 border-b border-purple-100" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">{t("Protokolli i plotë i matjeve", "The complete measurement protocol")}</h2>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {t("Në çdo retreat tonë kryejmë një protokoll të plotë matjesh shkencore", "In every retreat we perform a complete scientific measurement protocol")}{" "}
                <strong>{t("para, gjatë dhe pas", "before, during and after")}</strong>{" "}
                {t("seancave të meditimit — matjet energjetike për të gjithë pjesëmarrësit, matjet tjera për disa pjesëmarrës të përzgjedhur rastësisht. Kjo na lejon të dokumentojmë ndryshimet reale fizike, mendore dhe energjetike —", "meditation sessions — energy measurements for all participants, other measurements for a few randomly selected participants. This allows us to document real physical, mental and energy changes —")}{" "}
                <strong>{t("jo vetëm si ndjesi subjektive", "not just as subjective feelings")}</strong>,{" "}
                {t("por si prova të matshme dhe objektive.", "but as measurable and objective evidence.")}
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-purple-100 p-5 text-center">
                  <div className="text-sm leading-relaxed font-extrabold mb-1 md:text-base" style={{ color: "#9D8FEF" }}>{s.value}</div>
                  <div className="text-sm leading-relaxed text-zinc-700 md:text-base">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          {measurements.map((m, i) => {
            const Icon = m.icon;
            return (
              <FadeIn key={m.id} delay={i * 100}>
                <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
                  <div className="px-7 py-5 border-b border-zinc-100 flex items-center gap-4">
                    <div className="bg-zinc-100 rounded-xl p-2.5"><Icon size={22} className="text-zinc-500" /></div>
                    <div className="flex-1">
                      <span className="text-zinc-400 text-xs font-semibold tracking-widest uppercase">{t("Matja", "Measurement")} {m.badge}</span>
                      <h3 className="text-zinc-800 text-lg md:text-xl font-bold leading-tight">{m.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{m.subtitle}</p>
                    </div>
                    <div className="shrink-0 bg-zinc-50 rounded-xl px-5 py-3 text-center border border-zinc-100 hidden md:block">
                      <div className={`text-base font-extrabold ${m.accent} mb-0.5`}>{m.stat.value}</div>
                      <div className="text-xs text-zinc-400 leading-tight">{m.stat.label}</div>
                    </div>
                  </div>
                  <div className="px-7 py-6 space-y-3">
                    {m.body.map((paragraph, pi) => (
                      <p key={pi} className="text-sm leading-relaxed text-zinc-700 md:text-base flex gap-2">
                        <ChevronRight size={15} className="text-zinc-400 shrink-0 mt-1" />{paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-violet-300/50" />
                <span className="text-violet-200 text-xs font-bold tracking-[0.25em] uppercase">EEG — {t("Prova Shkencore", "Scientific Proof")}</span>
                <div className="h-px w-10 bg-violet-300/50" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-800 leading-tight mb-4">
                {t("Valët Gamma:", "Gamma Waves:")}{" "}
                <span style={{ color: "#9D8FEF" }}>
                  {t("Gjendja e Superndërgjegjes", "The State of Super-Consciousness")}
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base max-w-2xl mx-auto">
                {t("Matje EEG dhe prova shkencore nga retretet tona — jo teori, por dokumentim i vërtetë.", "EEG measurements and scientific evidence from our retreats — not theory, but true documentation.")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="rounded-3xl border border-violet-100 bg-violet-50/50 p-8 md:p-10 mb-10">
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">
                {t("Në retreatet tona kemi matje reale EEG që tregojnë se pjesëmarrësit arrijnë", "In our retreats we have real EEG measurements showing that participants achieve")}{" "}
                <strong>{t("valë Gamma të sinkronizuara në të gjithë trurin", "synchronized Gamma waves throughout the entire brain")}</strong>.{" "}
                {t("Kjo arrihet te të gjithë pjesëmarrësit që zbatojnë teknikat e veçanta të krijuara nga vetë ne.", "This is achieved by all participants who apply the special techniques created by us.")}
              </p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">
                {t("Valat Gamma që përjetohen nuk janë vale Gamma të zakonshme, por me", "The Gamma waves experienced are not ordinary Gamma waves, but with")}{" "}
                <strong>{t("amplitudë shumë të lartë", "very high amplitude")}</strong>,{" "}
                {t("të zgjatura në kohë dhe të sinkronizuara plotësisht me njëra-tjetrën.", "extended in time and completely synchronized with each other.")}
              </p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {t("Kjo nuk është vetëm një 'ndjesi e mirë' gjatë meditimit: është një", "This is not just a 'good feeling' during meditation: it is a")}{" "}
                <strong>{t("gjendje superndërgjegjeje e verifikuar shkencërisht", "scientifically verified state of super-consciousness")}</strong>,{" "}
                {t("ku truri punon si një superkompjuter i unifikuar.", "where the brain works like a unified supercomputer.")}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <FadeIn delay={100}>
              <div className="rounded-3xl border border-violet-200 bg-white overflow-hidden h-full">
                <div className="px-7 py-5 flex items-center gap-3" style={{ backgroundColor: "#9D8FEF" }}>
                  <div className="bg-white/20 rounded-xl p-2.5"><Activity size={24} className="text-white" /></div>
                  <div>
                    <p className="text-white/60 text-xs font-bold tracking-widest uppercase">{t("Shkencë", "Science")}</p>
                    <h3 className="text-white text-lg font-bold">{t("Çfarë janë valët Gamma?", "What are Gamma waves?")}</h3>
                  </div>
                </div>
                <div className="p-7 space-y-4">
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                    {t("Valët Gamma (31–120 Hz, mesatarisht 40 cikle/sek, deri në 200 Hz) janë aktiviteti elektrik më i shpejtë dhe më i fuqishëm i trurit.", "Gamma waves (31–120 Hz, on average 40 cycles/sec, up to 200 Hz) are the fastest and most powerful electrical activity of the brain.")}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                    {t("Ato shfaqen normalisht vetëm për fraksione të sekondës (~0.5 sek) në momente 'Eureka!', kur shijojmë diçka të veçantë ose shohim fytyrën e një personi të dashur.", "They normally appear only for fractions of a second (~0.5 sec) in 'Eureka!' moments, when we enjoy something special or see the face of a loved one.")}
                  </p>
                  <div className="bg-violet-50 rounded-2xl px-5 py-4 border border-violet-100">
                    <p className="text-violet-700 text-sm font-semibold leading-relaxed">
                      {t("Në retreatet tona, matjet tregojnë se pjesëmarrësit e mbajnë këtë gjendje për 5–40 minuta — madje deri në 100–400× mbi nivelin normal.", "In our retreats, measurements show that participants maintain this state for 5–40 minutes — even up to 100–400× above normal levels.")}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="rounded-3xl border border-purple-200 bg-white overflow-hidden h-full">
                <div className="px-7 py-5 flex items-center gap-3" style={{ backgroundColor: "#9D8FEF" }}>
                  <div className="bg-white/20 rounded-xl p-2.5"><Brain size={24} className="text-white" /></div>
                  <div>
                    <p className="text-white/60 text-xs font-bold tracking-widest uppercase">{t("Neuroshkencë", "Neuroscience")}</p>
                    <h3 className="text-white text-lg font-bold">{t("Çfarë ndodh në tru?", "What happens in the brain?")}</h3>
                  </div>
                </div>
                <div className="p-7 space-y-3">
                  {[
                    { label: t("Truri bëhet i unifikuar", "The brain becomes unified"), desc: t("Të gjitha zonat komunikojnë njëkohësisht — ideal për vizualizim dhe procesim kompleks.", "All areas communicate simultaneously — ideal for visualization and complex processing.") },
                    { label: t("Talamusi aktivizohet", "The thalamus is activated"), desc: t("Qendra gjeneruese e valëve Gamma punon me 40–200 herë/sekondë.", "The Gamma wave generating center works at 40–200 times/second.") },
                    { label: t("Aktivizohet 'truri i zemrës'", "The 'heart brain' is activated"), desc: t("40,000 neurone të zemrës — zemra mendon, truri ndjen.", "40,000 heart neurons — the heart thinks, the brain feels.") },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                      </div>
                      <div>
                        <p className="text-zinc-800 text-sm font-semibold">{item.label}</p>
                        <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={120}>
              <div className="rounded-3xl overflow-hidden border border-violet-100">
              <div className="px-8 py-5 flex items-center gap-3" style={{ backgroundColor: "#9D8FEF" }}>
                <Sparkles size={22} className="text-white/80" />
                <h3 className="text-white text-lg font-bold">{t("Çfarë kemi arritur në retreetet tona", "What we have achieved in our retreats")}</h3>
              </div>
              <div className="bg-white px-8 py-7">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-7">
                  {[
                    { value: "100 – 400×", label: t("mbi nivelin normal të Gamma", "above normal Gamma level") },
                    { value: "5 – 40 min", label: t("valë Gamma të vazhdueshme", "continuous Gamma waves") },
                    { value: "100%", label: t("sinkronizim i plotë i trurit", "complete brain synchronization") },
                    { value: t("Zemër-Tru", "Heart-Brain"), label: t("koherencë + SNA harmonik", "coherence + harmonic ANS") },
                  ].map((s, i) => (
                    <div key={i} className="rounded-2xl border p-4 text-center" style={{ backgroundColor: "#F3F0FF", borderColor: "#DDD6FE" }}>
                      <div className="font-extrabold text-lg mb-1" style={{ color: "#9D8FEF" }}>{s.value}</div>
                      <div className="text-sm leading-relaxed text-zinc-700 md:text-base">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base border-t border-zinc-100 pt-5">
                  {t("Kjo është", "This is")}{" "}<strong>{t("provë shkencore konkrete, jo teori", "concrete scientific proof, not theory")}</strong>.{" "}
                  {t("Matjet tona EEG dokumentojnë se çdo pjesëmarrës mund të arrijë gjendjen e superndërgjegjes — valë Gamma të sinkronizuara, koherencë zemër-tru dhe aktivizim i Sistemit Nervor Autonom nga energji të larta harmonike.", "Our EEG measurements document that every participant can achieve the state of super-consciousness — synchronized Gamma waves, heart-brain coherence and activation of the Autonomic Nervous System from high harmonic energies.")}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            <div className="mt-10 rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5" style={{ backgroundColor: "#000000" }}>
              <p className="text-sm leading-relaxed text-white md:text-base font-semibold max-w-xl">
                {t("Dëshiron ta provosh vetë këtë gjendje të jashtëzakonshme? Bashkohu me retreatin tonë të radhës dhe përjeto gjendjen kur sistemi nervor përjeton valët Gamma.", "Want to experience this extraordinary state yourself? Join our next retreat and experience the state when the nervous system experiences Gamma waves.")}
              </p>
              <a href="/eventet/retreat" className="shrink-0 bg-white text-violet-700 font-bold px-8 py-3 rounded-xl hover:bg-purple-50 transition-all text-sm whitespace-nowrap">
                {t("Bashkohu tani →", "Join now →")}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">
                {t("Pse janë të rëndësishme këto matje?", "Why are these measurements important?")}
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="bg-white rounded-3xl border border-purple-100 p-8 md:p-10">
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-5">
                {t("Valët Gamma, koherenca zemër-tru, hapja e qendrave energjetike dhe ulja e stresit nuk janë vetëm", "Gamma waves, heart-brain coherence, opening of energy centers and stress reduction are not just")}{" "}
                <strong>{t("'ndjesi'", "'feelings'")}</strong> —{" "}
                {t("ato janë", "they are")}{" "}<strong>{t("të matshme dhe të dokumentueshme", "measurable and documentable")}</strong>.
              </p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-5">
                {t("Rezultatet individuale ndryshojnë, por në çdo retreat shohim tendenca të qarta:", "Individual results vary, but in every retreat we see clear tendencies:")}{" "}
                <strong>{t("rritje të valëve Gamma", "increase in Gamma waves")}</strong>,{" "}
                <strong>{t("përmirësim të HRV-së", "improvement in HRV")}</strong>,{" "}
                <strong>{t("balancim më të mirë të fushës energjetike", "better balancing of the energy field")}</strong>{" "}
                {t("dhe", "and")}{" "}
                <strong>{t("ulje të ndjeshme të parametrave të stresit", "significant reduction of stress parameters")}</strong>.
              </p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {t("Këto matje janë pjesë integrale e përvojës sonë — ato e bëjnë transformimin tënd të", "These measurements are an integral part of our experience — they make your transformation")}{" "}
                <strong>{t("prekshëm", "tangible")}</strong>,{" "}
                {t("të", "")}<strong>{t("matshëm", "measurable")}</strong>{" "}
                {t("dhe të", "and")}{" "}<strong>{t("verifikueshëm", "verifiable")}</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
