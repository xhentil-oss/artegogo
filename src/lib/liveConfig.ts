export interface LiveConfig {
  isLive: boolean;
  meetingNumber: string;
  password: string;
  title?: string;
}

const DB_URL = import.meta.env.VITE_FIREBASE_DB_URL;

export async function getLiveConfig(): Promise<LiveConfig> {
  try {
    const res = await fetch(`${DB_URL}/live.json`);
    const data = await res.json();
    return data ?? { isLive: false, meetingNumber: "", password: "", title: "" };
  } catch {
    return { isLive: false, meetingNumber: "", password: "", title: "" };
  }
}

export async function setLiveConfig(config: LiveConfig): Promise<boolean> {
  try {
    const res = await fetch(`${DB_URL}/live.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// Real-time listener using Firebase SSE
export function subscribeLiveConfig(
  onUpdate: (config: LiveConfig) => void
): () => void {
  if (!DB_URL) return () => {};
  const es = new EventSource(`${DB_URL}/live.json`);
  es.addEventListener("put", (e: MessageEvent) => {
    try {
      const { data } = JSON.parse(e.data);
      if (data) onUpdate(data);
    } catch {}
  });
  return () => es.close();
}
