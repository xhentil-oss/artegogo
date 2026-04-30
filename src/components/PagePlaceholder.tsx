import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  title: string;
  titleEn?: string;
  subtitle?: string;
  subtitleEn?: string;
  emoji?: string;
  cta?: { label: string; labelEn?: string; href: string };
}

export const PagePlaceholder = ({ title, titleEn, subtitle, subtitleEn, emoji = "✨", cta }: Props) => {
  const { t } = useLanguage();
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="text-6xl mb-6">{emoji}</div>
      <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">{titleEn ? t(title, titleEn) : title}</h1>
      {subtitle && <p className="text-lg text-zinc-500 max-w-xl mb-8">{subtitleEn ? t(subtitle, subtitleEn) : subtitle}</p>}
      <div className="flex flex-wrap gap-3 justify-center">
        {cta && (
          <Link
            to={cta.href}
            className="bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-purple-700 hover:to-violet-700 transition-all shadow-md"
          >
            {cta.labelEn ? t(cta.label, cta.labelEn) : cta.label}
          </Link>
        )}
        <Link
          to="/"
          className="border border-purple-200 text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-purple-50 transition-all"
        >
          {t("← Kthehu në Home", "← Back to Home")}
        </Link>
      </div>
    </section>
  );
};
