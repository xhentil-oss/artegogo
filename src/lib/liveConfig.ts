export interface LiveConfig {
  isLive: boolean;
  meetingNumber: string;
  password: string;
  title?: string;
  zoomLink?: string;
}

const DEFAULTS: LiveConfig = { isLive: false, meetingNumber: '', password: '', title: '' };

export async function getLiveConfig(): Promise<LiveConfig> {
  try {
    const res = await fetch('/api/live');
    if (!res.ok) return { ...DEFAULTS };
    return await res.json();
  } catch {
    return { ...DEFAULTS };
  }
}

export async function setLiveConfig(config: LiveConfig): Promise<boolean> {
  try {
    const res = await fetch('/api/live', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(config),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function subscribeLiveConfig(
  onUpdate: (config: LiveConfig) => void
): () => void {
  let stopped = false;

  async function poll() {
    if (stopped) return;
    try {
      const res = await fetch('/api/live');
      onUpdate(res.ok ? await res.json() : { ...DEFAULTS });
    } catch {
      onUpdate({ ...DEFAULTS });
    }
    if (!stopped) setTimeout(poll, 5000);
  }

  poll();
  return () => { stopped = true; };
}
