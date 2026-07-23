import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { XCircle, Loader } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";

export const AuthCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { refetch } = useAuth();
  const [status, setStatus] = useState<"loading" | "error">("loading");
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    if (searchParams.get("status") !== "ok") {
      setStatus("error");
      return;
    }

    const redirectTo = searchParams.get("redirect") || "/dashboard";
    refetch().then(() => navigate(redirectTo, { replace: true }));
  }, []);

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

          {status === "loading" ? (
            <>
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Loader size={28} className="text-purple-600 animate-spin" />
              </div>
              <h1 className="text-2xl font-bold text-zinc-800 mb-2">
                {t("Duke kyçur...", "Signing you in...")}
              </h1>
              <p className="text-zinc-500 text-sm">{t("Ju lutemi prisni.", "Please wait.")}</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <XCircle size={28} className="text-red-500" />
              </div>
              <h1 className="text-2xl font-bold text-zinc-800 mb-2">
                {t("Hyrja me Google dështoi", "Google sign-in failed")}
              </h1>
              <p className="text-zinc-500 text-sm mb-6">
                {t("Provo përsëri ose përdor email dhe fjalëkalim.", "Please try again or use email and password.")}
              </p>
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
