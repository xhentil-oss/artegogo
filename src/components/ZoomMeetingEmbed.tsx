import { useEffect, useRef, useState } from "react";

// Generates the Zoom SDK JWT signature client-side using Web Crypto API
async function generateSignature(
  sdkKey: string,
  sdkSecret: string,
  meetingNumber: string,
  role: 0 | 1
): Promise<string> {
  const iat = Math.round(Date.now() / 1000) - 30;
  const exp = iat + 7200;

  const toB64Url = (str: string) =>
    btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");

  const header = toB64Url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = toB64Url(
    JSON.stringify({ sdkKey, appKey: sdkKey, mn: meetingNumber, role, iat, exp, tokenExp: exp })
  );

  const msg = `${header}.${payload}`;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(sdkSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sigBytes = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(msg));
  const sig = toB64Url(String.fromCharCode(...new Uint8Array(sigBytes)));

  return `${msg}.${sig}`;
}

interface Props {
  sdkKey: string;
  sdkSecret: string;
  meetingNumber: string;
  password: string;
  userName?: string;
}

export const ZoomMeetingEmbed = ({
  sdkKey,
  sdkSecret,
  meetingNumber,
  password,
  userName = "Vizitor",
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "joined" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!sdkKey || !sdkSecret || !meetingNumber) return;

    let mounted = true;

    const init = async () => {
      try {
        const { ZoomMtgEmbedded } = await import("@zoom/meetingsdk");
        if (!containerRef.current || !mounted) return;

        const client = ZoomMtgEmbedded.createClient();

        await client.init({
          zoomAppRoot: containerRef.current,
          language: "en-US",
          customize: {
            video: {
              isResizable: false,
              viewSizes: { default: { width: 1000, height: 520 } },
            },
          },
        });

        const cleanNumber = meetingNumber.replace(/\s/g, "");
        const signature = await generateSignature(sdkKey, sdkSecret, cleanNumber, 0);

        await client.join({
          sdkKey,
          signature,
          meetingNumber: cleanNumber,
          password,
          userName,
        });

        if (mounted) setStatus("joined");
      } catch (err: unknown) {
        console.error("Zoom SDK error:", err);
        if (mounted) {
          setErrorMsg(err instanceof Error ? err.message : String(err));
          setStatus("error");
        }
      }
    };

    init();
    return () => { mounted = false; };
  }, [sdkKey, sdkSecret, meetingNumber, password, userName]);

  return (
    <div className="w-full rounded-2xl overflow-hidden" style={{ background: "#1a1a2e", minHeight: 520 }}>
      {status === "loading" && (
        <div className="flex flex-col items-center justify-center h-64 gap-3">
          <div className="w-10 h-10 border-4 border-violet-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-white/70 text-sm">Duke u lidhur me Zoom...</p>
        </div>
      )}
      {status === "error" && (
        <div className="flex flex-col items-center justify-center h-64 gap-3 px-6 text-center">
          <span className="text-3xl">⚠️</span>
          <p className="text-red-400 font-semibold">Nuk u arrit të lidhesh me meeting-un.</p>
          {errorMsg && <p className="text-white/40 text-xs">{errorMsg}</p>}
        </div>
      )}
      <div ref={containerRef} style={{ width: "100%" }} />
    </div>
  );
};
