import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const SignUpPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { t } = useLanguage();

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Sign Up [SKIPBACKEND] — no backend connected.");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-violet-50 to-white px-4 py-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-purple-100 p-8">
          <div className="flex justify-center mb-6">
            <img src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776774255229-0.png" alt="Harmonizim Kuantik" className="h-14 w-auto object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-center text-zinc-800 mb-1">{t("Krijo Llogari", "Create Account")}</h1>
          <p className="text-center text-zinc-500 text-sm mb-8">{t("Bashkohu me komunitetin Harmonizim Kuantik", "Join the Harmonizim Kuantik community")}</p>
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
                <input type={showPass ? "text" : "password"} required value={form.password} onChange={update("password")} placeholder={t("Minimum 8 karaktere", "Minimum 8 characters")} minLength={8} className="w-full pl-10 pr-10 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
                <button type="button" onClick={() => setShowPass((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input type="checkbox" required className="mt-0.5 accent-purple-600" />
              <span className="text-xs text-zinc-500">
                {t("Pranoj", "I agree to the")}{" "}
                <Link to="#" className="text-purple-600 hover:underline">{t("Kushtet e Shërbimit", "Terms of Service")}</Link>{" "}
                {t("dhe", "and")}{" "}
                <Link to="#" className="text-purple-600 hover:underline">{t("Politikën e Privatësisë", "Privacy Policy")}</Link>
              </span>
            </label>
            <button type="submit" className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all">
              {t("Regjistrohu", "Sign Up")}
            </button>
          </form>
          <p className="text-center text-sm text-zinc-500 mt-6">
            {t("Keni llogari?", "Already have an account?")}{" "}
            <Link to="/login" className="text-purple-600 font-semibold hover:underline">{t("Hyr", "Sign In")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
