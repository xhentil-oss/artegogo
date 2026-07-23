import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { GoogleIcon } from "@/components/GoogleIcon";

export const SignUpPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { refetch } = useAuth();
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError(t("Fjalëkalimet nuk përputhen.", "Passwords do not match."));
      return;
    }

    setLoading(true);

    const parts = form.name.trim().split(" ");
    const firstName = parts[0] || form.name.trim();
    const lastName = parts.slice(1).join(" ") || "-";

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: form.email, password: form.password, firstName, lastName }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.errors) {
          const allErrors = Object.values(data.errors as Record<string, string[]>).flat();
          setError(allErrors[0] || data.message || t("Gabim gjatë regjistrimit.", "Registration failed."));
        } else {
          setError(data.message || t("Gabim gjatë regjistrimit.", "Registration failed."));
        }
        return;
      }
      setSuccess(true);
      await refetch();
    } catch {
      setError(t("Gabim lidhjeje. Provo përsëri.", "Connection error. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  if (success) return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-violet-50 to-white px-4 py-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-purple-100 p-8 text-center">
          <div className="flex justify-center mb-6">
            <img src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776774255229-0.png" alt="Arte Gogo" className="h-14 w-auto object-contain" />
          </div>
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-zinc-800 mb-2">{t("Regjistrimi u krye me sukses!", "Registration successful!")}</h1>
          <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
            {t(
              `Llogaria juaj u krijua. Kemi dërguar një email konfirmimi tek ${form.email} — konfirmoni emailin tuaj para se të hyni.`,
              `Your account has been created. We sent a confirmation email to ${form.email} — please verify your email before signing in.`
            )}
          </p>
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-4 mb-6 text-left space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-violet-600 mt-0.5">✓</span>
              <p className="text-sm text-zinc-700">{t("Llogaria u krijua", "Account created")}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-violet-600 mt-0.5">✓</span>
              <p className="text-sm text-zinc-700">{t("Email konfirmimi u dërgua", "Confirmation email sent")}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">→</span>
              <p className="text-sm text-zinc-700">{t("Konfirmoni emailin pastaj hyni", "Confirm your email then sign in")}</p>
            </div>
          </div>
          <Link
            to="/login"
            className="block w-full py-3 rounded-xl text-sm font-semibold text-white text-center bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all"
          >
            {t("Hyr në llogari", "Sign In")}
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-violet-50 to-white px-4 py-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-purple-100 p-8">
          <div className="flex justify-center mb-6">
            <img src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776774255229-0.png" alt="Arte Gogo" className="h-14 w-auto object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-center text-zinc-800 mb-1">{t("Krijo Llogari", "Create Account")}</h1>
          <p className="text-center text-zinc-500 text-sm mb-8">{t("Bashkohu me komunitetin Arte Gogo", "Join the Arte Gogo community")}</p>
          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">{t("Emri i plotë", "Full Name")}</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input type="text" required value={form.name} onChange={update("name")} placeholder={t("Emri Mbiemri", "First Last")} className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input type="email" required value={form.email} onChange={update("email")} placeholder={t("emri@shembull.com", "name@example.com")} className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">{t("Fjalëkalimi", "Password")}</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input type={showPass ? "text" : "password"} required value={form.password} onChange={update("password")} placeholder={t("Min. 8 karaktere, 1 shkronjë e madhe, 1 numër", "Min. 8 chars, 1 uppercase, 1 number")} minLength={8} className="w-full pl-10 pr-10 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
                <button type="button" onClick={() => setShowPass((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">{t("Konfirmo Fjalëkalimin", "Confirm Password")}</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input type={showConfirmPass ? "text" : "password"} required value={form.confirmPassword} onChange={update("confirmPassword")} placeholder={t("Rishkruaj fjalëkalimin", "Re-enter your password")} minLength={8} className="w-full pl-10 pr-10 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
                <button type="button" onClick={() => setShowConfirmPass((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600">
                  {showConfirmPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input type="checkbox" required className="mt-0.5 accent-purple-600" />
              <span className="text-xs text-zinc-500">
                {t("Pranoj kushtet e shërbimit dhe politikën e privatësisë.", "I agree to the terms of service and privacy policy.")}
              </span>
            </label>
            <button type="submit" disabled={loading} className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? t("Duke u regjistruar...", "Creating account...") : t("Regjistrohu", "Sign Up")}
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-zinc-200" />
            <span className="text-xs text-zinc-400 font-medium">{t("OSE", "OR")}</span>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>

          <a
            href={`/api/auth/google?redirect=${encodeURIComponent(redirectTo)}`}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-semibold text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 transition-all"
          >
            <GoogleIcon />
            {t("Vazhdo me Google", "Continue with Google")}
          </a>

          <p className="text-center text-sm text-zinc-500 mt-6">
            {t("Keni llogari?", "Already have an account?")}{" "}
            <Link to="/login" className="text-purple-600 font-semibold hover:underline">{t("Hyr", "Sign In")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
