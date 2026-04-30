import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { PlayCircle, Headphones, BookOpen, MapPin, Infinity } from "lucide-react";

export const OnlineProgramsSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  const benefits = [
    t("Të kuptosh më mirë emocionet dhe modelet e tua", "To better understand your emotions and patterns"),
    t("Të çlirohesh nga bllokimet emocionale që përsëriten", "To free yourself from recurring emotional blockages"),
    t("Të forcosh marrëdhënien me veten", "To strengthen your relationship with yourself"),
    t("Të lirohesh nga stresi, lodhja dhe mbingarkesa", "To free yourself from stress, fatigue and overwhelm"),
    t("Të rritësh intuitën dhe vetëbesimin", "To increase your intuition and self-confidence"),
    t("Të manifestosh një jetë të re duke krijuar harmoni të brendshme", "To manifest a new life by creating inner harmony"),
  ];

  const features = [
    { Icon: PlayCircle, title: t("Video sesione", "Video Sessions"), desc: t("Akses i menjëhershëm 24/7 nga çdo pajisje", "Instant 24/7 access from any device"), color: "" },
    { Icon: Headphones, title: t("Audio udhëzues", "Audio Guides"), desc: t("Meditim & praktika somatike të guiduara", "Guided meditation & somatic practices"), color: "" },
    { Icon: BookOpen, title: t("Materiale pune", "Work Materials"), desc: t("Fletë pune, ushtrime dhe mjete reflektimi", "Worksheets, exercises and reflection tools"), color: "" },
    { Icon: MapPin, title: t("Nga kudo", "From Anywhere"), desc: t("Puno me veten në shtëpi, në udhëtim ose kudo", "Work on yourself at home, traveling or anywhere"), color: "" },
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
    <section ref={sectionRef} className="relative w-full overflow-hidden py-24 md:py-32" style={{ backgroundColor: "#ffffff" }}>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mb-5 flex items-center gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span
            className="inline-block rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "#eeeaf9",
              color: "#9D8FEF",
              border: "1.5px solid #c4baf7",
              boxShadow: "0 1px 8px 0 rgba(157,143,239,0.07)"
            }}
          >
            {t("Trajnime Online", "Online Trainings")}
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className={`mb-6 text-2xl font-bold leading-tight text-zinc-900 md:text-3xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {t("Nuk mund të vish", "Can't come")}{" "}
              <span className="relative inline-block">
                <span style={{ color: "#9D8FEF" }}>
                  {t("fizikisht?", "in person?")}
                </span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M0 6 Q50 1 100 5 Q150 9 200 4" stroke="#9D8FEF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className={`mb-10 text-sm leading-relaxed text-zinc-700 md:text-base transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {t(
                "Fillo me trajnimet tona online dhe puno me veten nga kudo që ndodhesh. Këto programe të ndihmojnë të:",
                "Start with our online trainings and work on yourself from wherever you are. These programs help you to:"
              )}
            </p>

            <ul className="mb-10 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className={`flex items-start gap-3 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                  style={{ transitionDelay: visible ? `${250 + i * 70}ms` : "0ms" }}>
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#EDE9FF" }}>
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#9D8FEF" }} />
                  </span>
                  <span className="text-sm leading-relaxed text-zinc-700 md:text-base">{b}</span>
                </li>
              ))}
            </ul>

            <div className={`transition-all duration-700 delay-[800ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <button onClick={() => navigate("/eventet/trajnime-online")}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]" style={{ backgroundColor: "#9D8FEF" }}>
                <span className="relative z-10 text-sm leading-relaxed md:text-base">{t("Shiko programet", "View programs")}</span>
                <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute inset-0 -translate-x-full bg-white/15 skew-x-12 transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </div>
          </div>

          <div className={`flex flex-col gap-4 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "#F9FAFB", border: "1px solid #EDE9FF" }}>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl" style={{ backgroundColor: "#000000" }}>
                    <f.Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold leading-relaxed text-zinc-700 md:text-base">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-2xl px-5 py-4" style={{ backgroundColor: "#F9FAFB", border: "1px solid #EDE9FF" }}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: "#000000" }}>
                <Infinity className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-sm font-bold leading-relaxed text-zinc-700 md:text-base">{t("Akses i përhershëm", "Permanent Access")}</p>
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{t("Pas regjistrimit, materiali është i yt përgjithmonë", "After registration, the material is yours forever")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
