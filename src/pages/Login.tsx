import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login [SKIPBACKEND] — no backend connected.");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-violet-50 to-white px-4 py-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-purple-100 p-8">
          <div className="flex justify-center mb-6">
            <img src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776774255229-0.png" alt="Harmonizim Kuantik" className="h-14 w-auto object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-center text-zinc-800 mb-1">{t("Mirë se vjen!", "Welcome back!")}</h1>
          <p className="text-center text-zinc-500 text-sm mb-8">{t("Hyr në llogarinë tënde", "Sign in to your account")}</p>
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
                <Link to="/kontakt" className="text-xs text-purple-600 hover:underline">{t("Keni harruar fjalëkalimin?", "Forgot your password?")}</Link>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input type={showPass ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-10 pr-10 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
                <button type="button" onClick={() => setShowPass((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all">
              {t("Hyr", "Sign In")}
            </button>
          </form>
          <p className="text-center text-sm text-zinc-500 mt-6">
            {t("Nuk keni llogari?", "Don't have an account?")}{" "}
            <Link to="/signup" className="text-purple-600 font-semibold hover:underline">{t("Regjistrohu", "Sign Up")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
