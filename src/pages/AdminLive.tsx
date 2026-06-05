import { useState, useEffect } from "react";
import { getLiveConfig, setLiveConfig, type LiveConfig } from "@/lib/liveConfig";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "artegogo2024";

export const AdminLivePage = () => {
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);

  const [config, setConfig] = useState<LiveConfig>({
    isLive: false,
    meetingNumber: "",
    password: "",
    title: "",
  });
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authed) return;
    getLiveConfig().then((c) => { setConfig(c); setLoading(false); });
  }, [authed]);

  const login = () => {
    if (pwInput === ADMIN_PASSWORD) {
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  };

  const save = async (newConfig: LiveConfig) => {
    setSaving(true);
    setSaveMsg("");
    const ok = await setLiveConfig(newConfig);
    setSaving(false);
    setSaveMsg(ok ? "✓ Ruajtur me sukses!" : "✗ Gabim gjatë ruajtjes. Kontrollo Firebase URL.");
    setTimeout(() => setSaveMsg(""), 3000);
  };

  const toggle = () => {
    const updated = { ...config, isLive: !config.isLive };
    setConfig(updated);
    save(updated);
  };

  const saveDetails = () => save(config);

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F9FAFB" }}>
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm border border-zinc-200">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-3">
              <svg className="w-7 h-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-zinc-900">Panel Admin — Live</h1>
            <p className="text-sm text-zinc-500 mt-1">Fut fjalëkalimin për të hyrë</p>
          </div>
          <input
            type="password"
            placeholder="Fjalëkalimi..."
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            className="w-full border rounded-xl px-4 py-3 text-sm mb-3 outline-none focus:ring-2 focus:ring-violet-400"
            style={{ borderColor: pwError ? "#ef4444" : "#e5e7eb" }}
          />
          {pwError && <p className="text-red-500 text-xs mb-3 text-center">Fjalëkalim i gabuar</p>}
          <button
            onClick={login}
            className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #4e29c5, #3f1e92)" }}
          >
            Hyr
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F9FAFB" }}>
        <div className="w-10 h-10 border-4 border-violet-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4" style={{ background: "#F9FAFB" }}>
      <div className="max-w-lg mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-zinc-900 mb-1">Panel Admin — Live</h1>
          <p className="text-sm text-zinc-500">Kontrollo transmetimin live nga kjo faqe</p>
        </div>

        {/* Status card */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 mb-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-semibold text-zinc-800 text-base">Statusi i Live</p>
              <p className="text-sm text-zinc-500 mt-0.5">
                {config.isLive ? "🔴 Aktiv — vizitorët mund të bashkohen" : "⚫ Jo aktiv — faqja tregon mesazhin e pritjes"}
              </p>
            </div>
            {/* Toggle */}
            <button
              onClick={toggle}
              disabled={saving}
              className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none"
              style={{ background: config.isLive ? "#4e29c5" : "#d1d5db" }}
            >
              <span
                className="inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300"
                style={{ transform: config.isLive ? "translateX(28px)" : "translateX(4px)" }}
              />
            </button>
          </div>

          <div
            className="rounded-xl px-4 py-3 text-center font-bold text-lg"
            style={{
              background: config.isLive ? "#fef2f2" : "#f4f4f5",
              color: config.isLive ? "#dc2626" : "#71717a",
              border: `2px solid ${config.isLive ? "#fca5a5" : "#e4e4e7"}`,
            }}
          >
            {config.isLive ? "● LIVE TANI" : "Offline"}
          </div>
        </div>

        {/* Meeting details */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 mb-5 shadow-sm">
          <h2 className="font-semibold text-zinc-800 text-base mb-4">Detajet e Meeting-ut Zoom</h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-zinc-600 block mb-1">Titulli i sesionit (opsional)</label>
              <input
                type="text"
                placeholder="p.sh. Meditim Live — Qëndrim i Brendshëm"
                value={config.title || ""}
                onChange={(e) => setConfig({ ...config, title: e.target.value })}
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-zinc-600 block mb-1">Meeting ID (nga Zoom)</label>
              <input
                type="text"
                placeholder="123 456 7890"
                value={config.meetingNumber}
                onChange={(e) => setConfig({ ...config, meetingNumber: e.target.value })}
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-zinc-600 block mb-1">Fjalëkalimi i meeting-ut</label>
              <input
                type="text"
                placeholder="abc123"
                value={config.password}
                onChange={(e) => setConfig({ ...config, password: e.target.value })}
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>
          </div>

          <button
            onClick={saveDetails}
            disabled={saving}
            className="mt-5 w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, #4e29c5, #3f1e92)" }}
          >
            {saving ? "Duke ruajtur..." : "Ruaj detajet"}
          </button>

          {saveMsg && (
            <p className={`text-center text-sm mt-3 font-medium ${saveMsg.startsWith("✓") ? "text-green-600" : "text-red-500"}`}>
              {saveMsg}
            </p>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-violet-50 rounded-2xl border border-violet-200 p-5 text-sm text-violet-800">
          <p className="font-semibold mb-2">📋 Si funksionon:</p>
          <ol className="list-decimal list-inside space-y-1.5 text-violet-700">
            <li>Fillo meeting-un nga Zoom (merr Meeting ID dhe fjalëkalimin)</li>
            <li>Fut Meeting ID dhe fjalëkalimin këtu, pastaj shtyp <strong>Ruaj detajet</strong></li>
            <li>Aktivizo togglen <strong>Live</strong> — faqja ndryshon automatikisht për të gjithë</li>
            <li>Kur të mbarosh, çaktivizo togglen</li>
          </ol>
        </div>

      </div>
    </div>
  );
};
