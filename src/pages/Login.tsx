import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";

export const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "forgot" | "forgot-sent">("login");
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState("");
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { refetch } = useAuth();
  const redirectTo = searchParams.get("redirect") || "/";

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError("");
    setForgotLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await res.json();
      if (!res.ok) { setForgotError(data.message || t("Gabim.", "Error.")); return; }
      setMode("forgot-sent");
    } catch {
      setForgotError(t("Gabim lidhjeje.", "Connection error."));
    } finally {
      setForgotLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || t("Email ose fjalëkalim i gabuar.", "Invalid email or password."));
        return;
      }
      await refetch();
      navigate(redirectTo);
    } catch {
      setError(t("Gabim lidhjeje. Provo përsëri.", "Connection error. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-violet-50 to-white px-4 py-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-purple-100 p-8">
          <div className="flex justify-center mb-6">
            <img src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776774255229-0.png" alt="Arte Gogo" className="h-14 w-auto object-contain" />
          </div>

          {/* ── LOGIN ── */}
          {mode === "login" && (
            <>
              <h1 className="text-2xl font-bold text-center text-zinc-800 mb-1">{t("Mirë se vjen!", "Welcome back!")}</h1>
              <p className="text-center text-zinc-500 text-sm mb-8">{t("Hyr në llogarinë tënde", "Sign in to your account")}</p>
              {error && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm text-center">{error}</div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">{t("Email", "Email")}</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("emri@shembull.com", "name@example.com")} className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-sm font-medium text-zinc-700">{t("Fjalëkalimi", "Password")}</label>
                    <button type="button" onClick={() => { setMode("forgot"); setForgotEmail(email); setForgotError(""); }} className="text-xs text-purple-600 hover:underline">
                      {t("Keni harruar fjalëkalimin?", "Forgot your password?")}
                    </button>
                  </div>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input type={showPass ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-10 pr-10 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
                    <button type="button" onClick={() => setShowPass((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600">
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? t("Duke hyrë...", "Signing in...") : t("Hyr", "Sign In")}
                </button>
              </form>
              <p className="text-center text-sm text-zinc-500 mt-6">
                {t("Nuk keni llogari?", "Don't have an account?")}{" "}
                <Link to="/signup" className="text-purple-600 font-semibold hover:underline">{t("Regjistrohu", "Sign Up")}</Link>
              </p>
            </>
          )}

          {/* ── FORGOT PASSWORD FORM ── */}
          {mode === "forgot" && (
            <>
              <button onClick={() => setMode("login")} className="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-700 mb-6">
                <ArrowLeft size={15} /> {t("Kthehu", "Back")}
              </button>
              <h1 className="text-2xl font-bold text-center text-zinc-800 mb-1">{t("Rivendos fjalëkalimin", "Reset password")}</h1>
              <p className="text-center text-zinc-500 text-sm mb-8">{t("Shkruaj emailin tënd dhe do të dërgojmë një link rivendosjeje.", "Enter your email and we'll send a reset link.")}</p>
              {forgotError && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm text-center">{forgotError}</div>
              )}
              <form onSubmit={handleForgot} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">{t("Email", "Email")}</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input type="email" required value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} placeholder={t("emri@shembull.com", "name@example.com")} className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
                  </div>
                </div>
                <button type="submit" disabled={forgotLoading} className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                  {forgotLoading ? t("Duke dërguar...", "Sending...") : t("Dërgo Linkun", "Send Reset Link")}
                </button>
              </form>
            </>
          )}

          {/* ── FORGOT SENT ── */}
          {mode === "forgot-sent" && (
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Mail size={28} className="text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-zinc-800 mb-2">{t("Email-i u dërgua!", "Email sent!")}</h1>
              <p className="text-zinc-500 text-sm mb-6">
                {t(`Kontrollo inbox-in e`, "Check the inbox of")} <strong>{forgotEmail}</strong>. {t("Linku i rivendosjes skadon pas 1 ore.", "The reset link expires in 1 hour.")}
              </p>
              <button onClick={() => setMode("login")} className="text-sm text-purple-600 hover:underline font-medium">
                {t("Kthehu te Hyrja", "Back to Sign In")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
