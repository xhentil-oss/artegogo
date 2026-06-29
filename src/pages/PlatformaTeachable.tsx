import { useLanguage } from "@/context/LanguageContext";

const TEACHABLE_URL = "https://artegogo.teachable.com"; // ndrysho URL-në këtu

export const PlatformaTeachablePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden min-h-[280px] md:min-h-[520px] flex items-center"
        style={{ background: "linear-gradient(135deg, #0a0015 0%, #1a0535 50%, #0d0228 100%)" }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/TONI2472.JPG')", opacity: 0.75 }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.50)" }} />

        <div className="relative max-w-5xl mx-auto px-5 py-8 md:py-14 w-full">
          <h1 className="font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.12, fontSize: "clamp(1.8rem, 7vw, 3.5rem)" }}>
            {t(<>Platforma<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>Teachable</span></>,
               <>The<br /><span style={{ fontStyle: "italic", color: "#c4b5fd" }}>Teachable Platform</span></>)}
          </h1>

          <p className="font-semibold text-white mb-2 leading-snug"
            style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)", letterSpacing: "0.05em" }}>
            {t(<>Akseso trajnimet tona kudo<br />dhe kurdo, 24/7</>,
               <>Access our trainings anywhere<br />and anytime, 24/7</>)}
          </p>

          <p className="mb-6 max-w-xs md:max-w-sm"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)", lineHeight: 1.6, fontWeight: 400 }}>
            {t(
              "Mbi 1000+ trajnime online, meditime dhe teknika kuantike — të gjitha në një platformë të dedikuar.",
              "Over 1000+ online trainings, meditations and quantum techniques — all in one dedicated platform."
            )}
          </p>

          <a
            href={TEACHABLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white px-3 py-1.5 text-xs md:px-8 md:py-4 md:text-base rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
            style={{ backgroundColor: "#4e29c5", fontWeight: 600 }}>
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            {t("Hyr në Platformë", "Access Platform")}
          </a>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section style={{ background: "#F4F4F5" }} className="py-10 md:py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="font-bold text-zinc-900 mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 4vw, 2rem)" }}>
              {t("Çfarë të pret brenda?", "What awaits you inside?")}
            </h2>
            <p style={{ color: "#71717a", fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
              {t("Gjithçka që të nevojitet për transformim të plotë.", "Everything you need for a complete transformation.")}
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                num: "01",
                titleAL: "MBI 1000+ TRAJNIME ONLINE",
                titleEN: "OVER 1000+ ONLINE TRAININGS",
                descAL: "Bibliotekë e plotë me trajnime meditimi, teknika frymëmarrjeje, fizikë kuantike dhe zhvillim personal — të gjitha të disponueshme kudo dhe kurdo.",
                descEN: "Full library of meditation, breathing technique, quantum physics and personal development trainings — all available anywhere and anytime.",
                img: "/img/TONI0886.JPG",
              },
              {
                num: "02",
                titleAL: "AKSES 24/7 NGA ÇDO PAJISJE",
                titleEN: "24/7 ACCESS FROM ANY DEVICE",
                descAL: "Mëso në ritmin tënd — herët në mëngjes ose vonë natën, nga telefoni, tableti ose kompjuteri. Platforma është e optimizuar për të gjitha pajisjet.",
                descEN: "Learn at your own pace — early morning or late at night, from phone, tablet or computer. The platform is optimized for all devices.",
                img: "/img/TONI1379.JPG",
              },
              {
                num: "03",
                titleAL: "KOMUNITET DHE MBËSHTETJE E PLOTË",
                titleEN: "FULL COMMUNITY AND SUPPORT",
                descAL: "Bëhu pjesë e komunitetit tonë aktiv — ndaj përvojat, mbështet të tjerët dhe merr udhëzim direkt nga Dr. Artemisa dhe Dr. Marvin Bundo.",
                descEN: "Join our active community — share experiences, support others and get direct guidance from Dr. Artemisa and Dr. Marvin Bundo.",
                img: "/img/TONI2462.JPG",
              },
            ].map((p, i) => (
              <div key={i} className="flex items-stretch rounded-2xl overflow-hidden"
                style={{ background: "#ffffff", border: "1px solid rgba(124,58,237,0.12)" }}>
                <div className="relative shrink-0" style={{ width: "38%" }}>
                  <img src={p.img} alt={p.titleAL} className="w-full h-full object-cover" style={{ minHeight: 130 }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(13,1,32,0.55) 100%)" }} />
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-bold text-white"
                    style={{ background: "#7c3aed", fontSize: 12 }}>
                    {p.num}
                  </div>
                </div>
                <div className="flex-1 px-4 py-4 md:px-6 md:py-5 flex flex-col justify-center">
                  <h3 className="font-bold uppercase mb-2"
                    style={{ color: "#7c3aed", fontSize: 16, letterSpacing: "0.05em", lineHeight: 1.2 }}>
                    {t(p.titleAL, p.titleEN)}
                  </h3>
                  <p style={{ color: "#52525b", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", lineHeight: 1.6 }}>
                    {t(p.descAL, p.descEN)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-8 md:py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white grid grid-cols-2 md:grid-cols-4"
            style={{ border: "1px solid rgba(124,58,237,0.12)", boxShadow: "0 2px 12px rgba(124,58,237,0.06)", gap: "1px", background: "rgba(124,58,237,0.08)" }}>
            {[
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="#7c3aed" strokeWidth={1.4} viewBox="0 0 24 24"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/></svg>,
                valueAL: "1000+", valueEN: "1000+", labelAL: "Trajnime online", labelEN: "Online trainings",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="#7c3aed" strokeWidth={1.4} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                valueAL: "5000+", valueEN: "5000+", labelAL: "Anëtarë aktivë", labelEN: "Active members",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="#7c3aed" strokeWidth={1.4} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                valueAL: "24/7", valueEN: "24/7", labelAL: "Akses i plotë", labelEN: "Full access",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="#7c3aed" strokeWidth={1.4} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
                valueAL: "5 ★", valueEN: "5 ★", labelAL: "Vlerësim mesatar", labelEN: "Average rating",
              },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-4 bg-white">
                {s.icon}
                <div>
                  <p className="font-bold leading-none" style={{ color: "#7c3aed", fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>{t(s.valueAL, s.valueEN)}</p>
                  <p className="font-medium leading-snug mt-0.5" style={{ color: "#3f3f46", fontSize: 14 }}>{t(s.labelAL, s.labelEN)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="relative overflow-hidden px-6 py-6 md:py-16">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/TONI1692.JPG')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.52)" }} />

        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-3 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-bold text-white mb-2 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.12 }}>
              {t(<>Gati për të filluar<br />udhëtimin tënd?</>, <>Ready to begin<br />your journey?</>)}
            </h2>
            <p className="mb-2" style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.6 }}>
              {t(
                "Regjistrohu dhe fillo transformimin tënd me Arte Gogo — kudo dhe kurdo.",
                "Register and begin your transformation with Arte Gogo — anywhere and anytime."
              )}
            </p>
          </div>

          <div className="hidden md:block w-px self-stretch" style={{ background: "rgba(255,255,255,0.15)" }} />

          <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
            <a
              href={TEACHABLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 w-full md:w-auto justify-center text-sm md:text-base"
              style={{ background: "#ffffff", color: "#4e29c5" }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {t("Hyr në Platformë Tani", "Access Platform Now")} →
            </a>
            <p className="text-white text-sm" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
              {t("Akses i menjëhershëm pas regjistrimit.", "Immediate access after registration.")}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
