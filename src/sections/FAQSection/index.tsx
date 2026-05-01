import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function FAQItem({ item, index, open, onToggle, visible }: {
  item: { q: string; a: string | null; list?: string[]; listIntro?: string; listOutro?: string };
  index: number; open: boolean; onToggle: () => void; visible: boolean;
}) {
  return (
    <div className="transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transitionDelay: `${index * 60}ms` }}>
      <button onClick={onToggle}
        className="w-full text-left flex items-start justify-between gap-4 py-5 px-6 rounded-2xl group transition-all duration-300"
        style={{ background: open ? "rgba(157,143,239,0.08)" : "rgba(255,255,255,0.6)", boxShadow: open ? "0 4px 24px rgba(157,143,239,0.15)" : "0 1px 4px rgba(0,0,0,0.06)", border: open ? "1.5px solid rgba(157,143,239,0.4)" : "1.5px solid rgba(0,0,0,0.06)" }}>
        <div className="flex items-start gap-4">
          <span className="mt-0.5 min-w-[28px] h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300"
            style={{ background: open ? "#9D8FEF" : "rgba(157,143,239,0.12)", color: open ? "#fff" : "#9D8FEF" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-relaxed md:text-base font-normal transition-colors duration-300 text-zinc-700">
            {item.q}
          </span>
        </div>
        <ChevronDown className="min-w-[20px] mt-1 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: open ? "#9D8FEF" : "#a1a1aa" }} size={20} />
      </button>

      <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: open ? "600px" : "0px" }}>
        <div className="px-6 pt-3 pb-5 pl-[4.5rem]">
          {item.a && <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{item.a}</p>}
          {item.list && (
            <div>
              {item.listIntro && <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-2">{item.listIntro}</p>}
              <ul className="space-y-1.5 mb-2">
                {item.list.map((li, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm leading-relaxed text-zinc-700 md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#9D8FEF" }} />
                    {li}
                  </li>
                ))}
              </ul>
              {item.listOutro && <p className="text-sm leading-relaxed text-zinc-700 md:text-base mt-2">{item.listOutro}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type FAQCategory = {
  label: string;
  labelEn: string;
  icon: string;
  items: { q: string; a: string | null; list?: string[]; listIntro?: string; listOutro?: string }[];
};

export const FAQSection = () => {
  const [openMap, setOpenMap] = useState<Record<string, number | null>>({});
  const [activeCategory, setActiveCategory] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const categories: FAQCategory[] = [
    {
      label: "Rreth Nesh & Metodës",
      labelEn: "About Us & The Method",
      icon: "🔬",
      items: [
        {
          q: t("Çfarë është metodologjia që përdorni?", "What methodology do you use?"),
          a: t(
            "Përdorim një metodologji që bashkon shkencën, meditimin dhe punën me energjinë, për t'ju ndihmuar të transformoni gjendjen emocionale, të lironi bllokimet dhe të krijoni jetën që dëshironi.",
            "We use a methodology that combines science, meditation and energy work to help you transform your emotional state, release blockages and create the life you desire."
          ),
        },
        {
          q: t("Për kë janë këto programe?", "Who are these programs for?"),
          a: t(
            "Për këdo që dëshiron më shumë qetësi, energji, qartësi dhe transformim në jetën e tij/saj — shërim apo rezultate konkrete në fusha të ndryshme të jetës. Janë të përshtatshme si për fillestarë, ashtu edhe për të avancuar.",
            "For anyone who wants more peace, energy, clarity and transformation in their life — healing or concrete results in various areas of life. They are suitable for both beginners and advanced practitioners."
          ),
        },
        {
          q: t("Çfarë e bën metodën tuaj ndryshe?", "What makes your method different?"),
          a: null,
          list: [
            t("neuroshkencën", "neuroscience"),
            t("epigjenetikën", "epigenetics"),
            t("koherencën zemër–tru", "heart-brain coherence"),
            "neurofeedback",
            t("frymëmarrjen", "breathwork"),
            t("teknika somatike", "somatic techniques"),
            t("procesimin emocional", "emotional processing"),
            t("punë me fushën elektromagnetike", "electromagnetic field work"),
          ],
          listIntro: t("Ne kombinojmë:", "We combine:"),
          listOutro: t("Kjo krijon ndryshime reale, të matshme dhe të qëndrueshme.", "This creates real, measurable and lasting changes."),
        },
        {
          q: t("A është e mundur të meditosh me teknika të bazuara në shkencë?", "Is it possible to meditate with science-based techniques?"),
          a: t(
            "Është pikërisht kombinimi i të dyjave që kemi arritur dhe bën këtë punë unike: bashkojmë shkencën moderne me përvojën e brendshme.",
            "It is precisely the combination of both that we have achieved and makes this work unique: we combine modern science with the inner experience."
          ),
        },
      ],
    },
    {
      label: "Rezultatet & Transformimi",
      labelEn: "Results & Transformation",
      icon: "✨",
      items: [
        {
          q: t("Çfarë rezultatesh mund të pres?", "What results can I expect?"),
          a: null,
          list: [
            t("qetësi dhe qartësi mendore", "peace and mental clarity"),
            t("lirime emocionale", "emotional releases"),
            t("rritje energjie dhe fokusi", "increased energy and focus"),
            t("përmirësim në marrëdhënie, shëndet dhe jetë", "improvement in relationships, health and life"),
            t("shërim emocional, mendor dhe fizik", "emotional, mental and physical healing"),
            t("rilidhje me potencialin e vërtetë", "reconnection with true potential"),
          ],
        },
        {
          q: t("Sa shpejt shfaqen rezultatet?", "How quickly do results appear?"),
          a: t(
            "Shumë njerëz ndjejnë ndryshim që në seancat e para. Transformimi i thellë ndodh me vazhdimësi.",
            "Many people feel change from the very first sessions. Deep transformation happens with consistency."
          ),
        },
        {
          q: t("A ndihmon kjo në manifestimin e qëllimeve?", "Does this help with manifesting goals?"),
          a: t(
            "Po. Sepse kur trupi, emocionet dhe energjia janë në harmoni, realiteti fillon të ndryshojë.",
            "Yes. Because when the body, emotions and energy are in harmony, reality begins to change."
          ),
        },
        {
          q: t("Çfarë ndodh nëse përjetoj emocione të ndryshme gjatë meditimit?", "What happens if I experience different emotions during meditation?"),
          a: t(
            "Kjo është pjesë e procesit të shërimit. Ne ju udhëzojmë që t&#39;i përjetoni dhe t&#39;i transformoni në mënyrë të sigurt.",
            "This is part of the healing process. We guide you to experience and transform them safely."
          ),
        },
        {
          q: t("Po nëse nuk di të meditoj ose kam mendje plot mendime?", "What if I don&#39;t know how to meditate or have a mind full of thoughts?"),
          a: t(
            "Kjo është normale. Ne ju udhëzojmë hap pas hapi që të hyni natyrshëm në gjendje të thella.",
            "This is normal. We guide you step by step to naturally enter deep states."
          ),
        },
      ],
    },
    {
      label: "Retreat",
      labelEn: "Retreat",
      icon: "🏔️",
      items: [
        {
          q: t("Çfarë ndodh gjatë retreat-it?", "What happens during the retreat?"),
          a: null,
          list: [
            t("meditime të përditshme të avancuara", "daily advanced meditations"),
            t("teknika të avancuara", "advanced techniques"),
            t("ushtrime frymëmarrjeje dhe lirim emocional", "breathwork and emotional release exercises"),
            t("leksione dhe shpjegime të thella", "lectures and deep explanations"),
            t("integrim dhe relaksim", "integration and relaxation"),
            t("një komunitet i mrekullueshëm", "a wonderful community"),
          ],
        },
        {
          q: t("A është vetëm meditim apo ka edhe mësim?", "Is it only meditation or is there also learning?"),
          a: t(
            "Retreat-i përfshin edhe teori, shpjegime dhe aplikim praktik, jo vetëm përvojë. Teoria krijon një bazë të fortë për të përjetuar eksperienca të thella në meditim.",
            "The retreat includes theory, explanations and practical application, not just experience. Theory creates a strong foundation for experiencing deep meditations."
          ),
        },
        {
          q: t("A mund të arrij ndryshime të mëdha në 8 ditë?", "Can I achieve big changes in 8 days?"),
          a: t(
            "Po. Intensiteti i retreat-it krijon një përshpejtim të madh të transformimit personal.",
            "Yes. The intensity of the retreat creates a great acceleration of personal transformation."
          ),
        },
        {
          q: t("A ka prova apo matje gjatë retreat-it?", "Are there tests or measurements during the retreat?"),
          a: t(
            "Po. Në disa raste realizohen matje për të parë ndikimin në trurin dhe sistemin nervor.",
            "Yes. In some cases, measurements are taken to see the impact on the brain and nervous system."
          ),
        },
        {
          q: t("A do mësoj teknika për jetën e përditshme?", "Will I learn techniques for daily life?"),
          a: t(
            "Po. Do largoheni me teknika konkrete për t&#39;i përdorur çdo ditë.",
            "Yes. You will leave with concrete techniques to use every day."
          ),
        },
        {
          q: t("A ka mbështetje para dhe pas retreat-it?", "Is there support before and after the retreat?"),
          a: t(
            "Po. Ka seanca përgatitore dhe integruese për të stabilizuar transformimin.",
            "Yes. There are preparatory and integrative sessions to stabilize the transformation."
          ),
        },
        {
          q: t("A duhet të shkëputem nga përditshmëria?", "Do I need to disconnect from daily life?"),
          a: t(
            "Po. Kjo është ajo që krijon hapësirën për ndryshim të thellë.",
            "Yes. This is what creates the space for deep change."
          ),
        },
        {
          q: t("Në çfarë ambienti zhvillohet?", "In what environment does it take place?"),
          a: t(
            "Në ambiente premium (hotel me 5 yje) dhe të qeta, të dizajnuara për transformim.",
            "In premium environments (5-star hotel) and peaceful settings, designed for transformation."
          ),
        },
        {
          q: t("A mund të vij vetëm?", "Can I come alone?"),
          a: t(
            "Po. Shumica vijnë vetëm dhe bëhen pjesë e një komuniteti mbështetës.",
            "Yes. Most people come alone and become part of a supportive community."
          ),
        },
        {
          q: t("Çfarë duhet të marr me vete?", "What should I bring with me?"),
          a: t(
            "Rroba komode, kufje dhe gatishmëri për transformim.",
            "Comfortable clothes, headphones and readiness for transformation."
          ),
        },
      ],
    },
    {
      label: "Programe Online",
      labelEn: "Online Programs",
      icon: "💻",
      items: [
        {
          q: t("Si funksionon programi online?", "How does the online program work?"),
          a: null,
          list: [
            t("seanca live", "live sessions"),
            t("regjistrime të disponueshme në platformë", "recordings available on the platform"),
            t("seanca pyetje përgjigje", "Q&A sessions"),
            t("seminare, teknika dhe ushtrime ditore", "seminars, techniques and daily exercises"),
            t("komunikim i vazhdueshëm me mentorët", "continuous communication with mentors"),
            t("udhëzim i vazhdueshëm", "continuous guidance"),
          ],
        },
        {
          q: t("Sa zgjat trajnimi?", "How long does the training last?"),
          a: t(
            "6 javë me 2-3 seanca në javë.",
            "6 weeks with 2-3 sessions per week."
          ),
        },
        {
          q: t("Në cilin orar mbahen seancat?", "What is the schedule for the sessions?"),
          a: t(
            "Seancat e leksioneve dhe meditimeve në orën 21.00. Seancat pyetje përgjigje orën 19.00.",
            "Lecture and meditation sessions at 21:00. Q&A sessions at 19:00."
          ),
        },
        {
          q: t("A është vetëm teori?", "Is it only theory?"),
          a: t(
            "Jo. Është kombinim i teorisë + praktikës (meditimeve dhe teknikave të avancuara) + ushtrimeve.",
            "No. It is a combination of theory + practice (meditations and advanced techniques) + exercises."
          ),
        },
        {
          q: t("A do kem kontakt me mentorët?", "Will I have contact with the mentors?"),
          a: t(
            "Po. Do të jeni në kontakt të vazhdueshëm për udhëzim me mesazhe.",
            "Yes. You will be in continuous contact for guidance via messages."
          ),
        },
        {
          q: t("A ka ushtrime të përditshme?", "Are there daily exercises?"),
          a: t(
            "Po. Do merrni ushtrime për të mbajtur progresin aktiv çdo ditë.",
            "Yes. You will receive exercises to keep your progress active every day."
          ),
        },
        {
          q: t("A ndikon edhe në trup dhe biologji?", "Does it also affect the body and biology?"),
          a: t(
            "Po. Programi aktivizon sjell ndryshime konkrete pozitive në sistemin nervor dhe trup.",
            "Yes. The program brings concrete positive changes to the nervous system and body."
          ),
        },
        {
          q: t("A mëson ky trajnim si ta mbaj gjendjen gjatë ditës?", "Does this training teach how to maintain the state during the day?"),
          a: t(
            "Po. Do mësoni si ta ruani gjendjen edhe në jetën reale.",
            "Yes. You will learn how to maintain your state even in real life."
          ),
        },
        {
          q: t("A do ruhen pas trajnimit materialet?", "Will the materials be preserved after the training?"),
          a: t(
            "Po, do ruhen për disa muaj në platformë pas trajnimit.",
            "Yes, they will be preserved for several months on the platform after the training."
          ),
        },
      ],
    },
    {
      label: "Regjistrimi & Akses",
      labelEn: "Registration & Access",
      icon: "📚",
      items: [
        {
          q: t("Si mund të regjistrohem?", "How can I register?"),
          a: t(
            "Kontaktoni stafin WhatsApp.",
            "Contact the staff via WhatsApp."
          ),
        },
        {
          q: t("Ku mund ta marr më shumë info?", "Where can I get more info?"),
          a: t(
            "Kontaktoni stafin WhatsApp.",
            "Contact the staff via WhatsApp."
          ),
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const catKey = String(activeCategory);
  const currentItems = categories[activeCategory].items;

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "#eeeaf9", border: "1.5px solid #c4baf7", color: "#9D8FEF" }}>
            {t("Pyetje të Shpeshta", "Frequently Asked Questions")}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 leading-tight">
            {t("Gjithçka Që Doni", "Everything You Want")}{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#9D8FEF,#b8adf5)" }}>
              {t("të Dini", "to Know")}
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base max-w-xl mx-auto">
            {t(
              "Gjithçka që dëshironi të dini për metodologjinë, programet dhe rezultatet tona.",
              "Everything you want to know about our methodology, programs and results."
            )}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: "150ms" }}>
          {categories.map((cat, i) => (
            <button key={i} onClick={() => { setActiveCategory(i); setOpenMap({}); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm leading-relaxed font-semibold transition-all duration-300 md:text-base"
              style={{
                background: activeCategory === i ? "#9D8FEF" : "rgba(255,255,255,0.8)",
                color: activeCategory === i ? "#fff" : "#18181b",
                boxShadow: activeCategory === i ? "0 4px 16px rgba(157,143,239,0.35)" : "0 1px 4px rgba(0,0,0,0.07)",
                border: activeCategory === i ? "1.5px solid transparent" : "1.5px solid rgba(157,143,239,0.25)",
              }}>
              <span>{t(cat.label, cat.labelEn)}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {currentItems.map((item, i) => (
            <FAQItem
              key={`${catKey}-${i}`}
              item={item}
              index={i}
              open={openMap[catKey] === i}
              onToggle={() => setOpenMap(prev => ({ ...prev, [catKey]: prev[catKey] === i ? null : i }))}
              visible={visible}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center transition-all duration-700 delay-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
            {t("Nuk gjete përgjigjen?", "Didn't find the answer?")}{" "}
            <a href="/kontakt" className="font-semibold" style={{ color: "#9D8FEF" }}>
              {t("Dërgoni mesazh →", "Send a message →")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
