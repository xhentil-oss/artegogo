import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { subscribeLiveConfig, type LiveConfig } from "@/lib/liveConfig";

export const LivePage = () => {
  const { t } = useLanguage();
  const [config, setConfig] = useState<LiveConfig>({
    isLive: false,
    meetingNumber: "",
    password: "",
    title: "",
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = subscribeLiveConfig((c) => {
      setConfig(c);
      setReady(true);
    });
    // Fallback: mark ready after 3s even if no SSE event
    const t = setTimeout(() => setReady(true), 3000);
    return () => { unsub(); clearTimeout(t); };
  }, []);

  return (
    <div className="min-h-screen text-zinc-800" style={{ backgroundColor: "#F9FAFB" }}>

      {/* Hero */}
      <div className="relative py-16 md:py-28 px-4 md:px-6 overflow-hidden min-h-[300px] md:min-h-[420px] flex items-center"
        style={{ backgroundColor: "#F9FAFB" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 border border-red-300 rounded-full px-4 py-1.5 mb-6">
            <span className={`w-2 h-2 rounded-full ${config.isLive ? "bg-red-500 animate-pulse" : "bg-zinc-400"}`} />
            <span className={`text-xs font-bold uppercase tracking-widest ${config.isLive ? "text-red-500" : "text-zinc-500"}`}>
              {config.isLive ? "● LIVE TANI" : "LIVE"}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-5 leading-tight">
            {t("Transmetimet", "Live")}{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              {t("Live", "Broadcasts")}
            </span>
          </h1>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-6 py-10">

        {!ready ? (
          /* Loading */
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-violet-400 border-t-transparent rounded-full animate-spin" />
          </div>

        ) : config.isLive ? (
          /* LIVE — Zoom redirect */
          <div className="mb-10">
            {/* Live badge + title */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Live Tani</span>
              {config.title && <span className="text-zinc-500 text-sm ml-1">— {config.title}</span>}
            </div>

            {/* Join card */}
            <div className="rounded-3xl border-2 border-violet-300 bg-white p-8 text-center shadow-lg">
              {/* Zoom logo */}
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: 'linear-gradient(135deg, #2D8CFF, #1A6CD4)' }}>
                <svg viewBox="0 0 64 64" className="w-12 h-12" fill="white">
                  <path d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm11.2 33.6L36 36.8V40c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2V24c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v3.2l7.2-4.8c.8-.5 1.8.1 1.8 1v21.2c0 .9-1 1.5-1.8 1z"/>
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                {t("Sesioni Live është Aktiv!", "Live Session is Active!")}
              </h2>
              {config.title && (
                <p className="text-violet-700 font-semibold text-lg mb-3">{config.title}</p>
              )}
              <p className="text-zinc-500 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
                {t("Kliko butonin më poshtë për t'u bashkuar direkt në sesionin live përmes Zoom.", "Click the button below to join the live session directly via Zoom.")}
              </p>

              <a
                href={
                  config.zoomLink ||
                  `https://zoom.us/j/${config.meetingNumber.replace(/\s/g, '')}${config.password ? `?pwd=${config.password}` : ''}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-lg shadow-md"
                style={{ background: 'linear-gradient(135deg, #2D8CFF, #1A6CD4)' }}
              >
                <svg viewBox="0 0 64 64" className="w-6 h-6" fill="white">
                  <path d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm11.2 33.6L36 36.8V40c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2V24c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v3.2l7.2-4.8c.8-.5 1.8.1 1.8 1v21.2c0 .9-1 1.5-1.8 1z"/>
                </svg>
                {t("Bashkohu në Zoom", "Join on Zoom")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* Meeting info */}
              {config.meetingNumber && (
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Meeting ID: <strong className="text-zinc-700">{config.meetingNumber}</strong>
                  </span>
                  {config.password && (
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      {t("Fjalëkalimi", "Password")}: <strong className="text-zinc-700">{config.password}</strong>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

        ) : (
          /* OFFLINE */
          <div className="rounded-3xl border border-violet-200 bg-white p-10 text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              {t("Asnjë transmetim live aktiv momentalisht", "No live broadcast currently active")}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-7 max-w-md mx-auto">
              {t("Na ndiqni në rrjetet sociale për të mësuar kur do të fillojë transmetimi i radhës.", "Follow us on social media to learn when the next broadcast will begin.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://instagram.com/arte_gogo" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm leading-relaxed md:text-base">
                Instagram — @arte_gogo
              </a>
              <a href="https://youtube.com/@artegogo3246" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm leading-relaxed md:text-base">
                YouTube — @artegogo3246
              </a>
            </div>
          </div>
        )}

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M12 2a4 4 0 0 1 4 4c0 2.5-2 5-4 6-2-1-4-3.5-4-6a4 4 0 0 1 4-4z"/>
                  <path d="M6.5 15.5C4.5 17 3 19 3 21h18c0-2-1.5-4-3.5-5.5"/>
                  <path d="M9 13v2M15 13v2"/>
                </svg>
              ),
              bg: "#f3f0ff",
              title: t("Meditime Live", "Live Meditations"),
              desc: t("Sesione të udhëhequra nga Dr. Artemisa në kohë reale", "Sessions guided by Dr. Artemisa in real time")
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                  <path d="M9 8l2 2 4-4"/>
                </svg>
              ),
              bg: "#f3f0ff",
              title: t("Workshope Online", "Online Workshops"),
              desc: t("Mësimet dhe praktikat live me interaksion të drejtpërdrejtë", "Live lessons and practices with direct interaction")
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <path d="M8 10h8M8 14h5"/>
                </svg>
              ),
              bg: "#f3f0ff",
              title: t("Q&A dhe Koçing", "Q&A and Coaching"),
              desc: t("Pyetje dhe përgjigje live — merr ndihmë direkt", "Live questions and answers — get help directly")
            },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: item.bg }}>{item.icon}</div>
              <h3 className="font-bold text-zinc-800 text-base mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
