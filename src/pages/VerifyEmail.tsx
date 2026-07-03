import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, Loader } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    if (!token) {
      setStatus("error");
      setMessage(t("Token i pavlefshëm. Kërko një link të ri.", "Invalid token. Please request a new link."));
      return;
    }

    fetch("/api/auth/verify-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          setStatus("success");
          setTimeout(() => navigate("/login"), 4000);
        } else {
          setStatus("error");
          setMessage(data.message || t("Gabim. Provo përsëri.", "Error. Please try again."));
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage(t("Gabim lidhjeje.", "Connection error."));
      });
  }, [token]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-violet-50 to-white px-4 py-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-purple-100 p-8 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776774255229-0.png"
              alt="Arte Gogo"
              className="h-14 w-auto object-contain"
            />
          </div>

          {status === "loading" && (
            <>
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Loader size={28} className="text-purple-600 animate-spin" />
              </div>
              <h1 className="text-2xl font-bold text-zinc-800 mb-2">
                {t("Duke verifikuar...", "Verifying...")}
              </h1>
              <p className="text-zinc-500 text-sm">
                {t("Ju lutemi prisni.", "Please wait.")}
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={28} className="text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-zinc-800 mb-2">
                {t("Emaili u verifikua!", "Email verified!")}
              </h1>
              <p className="text-zinc-500 text-sm mb-6">
                {t("Llogaria juaj është aktive. Po ju ridrejtojmë tek hyrja...", "Your account is active. Redirecting to login...")}
              </p>
              <button
                onClick={() => navigate("/login")}
                className="text-sm text-purple-600 hover:underline font-medium"
              >
                {t("Hyr tani →", "Sign in now →")}
              </button>
            </>
          )}

          {status === "error" && (
            <>
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <XCircle size={28} className="text-red-500" />
              </div>
              <h1 className="text-2xl font-bold text-zinc-800 mb-2">
                {t("Verifikimi dështoi", "Verification failed")}
              </h1>
              <p className="text-red-500 text-sm mb-6">{message}</p>
              <button
                onClick={() => navigate("/login")}
                className="text-sm text-purple-600 hover:underline font-medium"
              >
                {t("Kthehu te Hyrja", "Back to Sign In")}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
