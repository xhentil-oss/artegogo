import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FooterLinks = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-3">
            <img
              src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777384541015-0.png"
              alt="Arte Gogo Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-white text-sm leading-relaxed md:text-base">
            {t("Bashkojmë shkencën moderne me meditimet dhe teknikat e transformimit.", "We combine modern science with meditations and transformation techniques.")}
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a href="https://wa.me/355692420827" target="_blank" rel="noopener noreferrer" title="WhatsApp +355 69 242 0827" className="text-white hover:text-green-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="mailto:info@artogogo.com" title="info@artogogo.com" className="text-white hover:text-purple-200 transition-colors">
              <Mail size={18} />
            </a>
            <a href="https://instagram.com/arte_gogo" target="_blank" rel="noopener noreferrer" title="@arte_gogo" className="text-white hover:text-pink-300 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100070180624280" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-white hover:text-blue-300 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://youtube.com/@artegogo3246?si=mh18TVeVBhO5sAUO" target="_blank" rel="noopener noreferrer" title="YouTube" className="text-white hover:text-red-300 transition-colors">
              <Youtube size={18} />
            </a>
            <a href="https://www.tiktok.com/@dr.artegogo" target="_blank" rel="noopener noreferrer" title="TikTok @dr.artegogo" className="text-white hover:text-cyan-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-base mb-3 uppercase tracking-wide">{t("Faqet", "Pages")}</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: t("Home", "Home"), href: "/" },
              { label: t("Rreth Nesh", "About Us"), href: "/rreth-nesh" },
              { label: t("Blog", "Blog"), href: "/blog" },
              { label: t("Meditime", "Meditation"), href: "/meditime" },
              { label: t("Live", "Live"), href: "/live" },
            ].map((l) => (
              <li key={l.href}><Link to={l.href} className="text-white hover:text-gray-300 text-sm leading-relaxed md:text-base transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-base mb-3 uppercase tracking-wide">{t("Programet", "Programs")}</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: t("Retreat", "Retreat"), href: "/eventet/retreat" },
              { label: t("Trajnime Online", "Online Trainings"), href: "/eventet/trajnime-online" },
              { label: t("Workshope", "Workshops"), href: "/eventet/workshope" },
              { label: t("Testimonials", "Testimonials"), href: "/rezultatet/testimonials" },
              { label: t("Shop", "Shop"), href: "/shop" },
            ].map((l) => (
              <li key={l.href}><Link to={l.href} className="text-white hover:text-gray-300 text-sm leading-relaxed md:text-base transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-base mb-3 uppercase tracking-wide">{t("Kontakt", "Contact")}</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: t("Na Kontaktoni", "Contact Us"), href: "/kontakt" },
              { label: t("FAQ", "FAQ"), href: "/faq" },
            ].map((l) => (
              <li key={l.href}><Link to={l.href} className="text-white hover:text-gray-300 text-sm leading-relaxed md:text-base transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-purple-400/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-white text-sm leading-relaxed md:text-base">
          {t("© 2026 by ", "© 2026 by ")}
          <a href="https://bos.al/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Bos.al</a>
          {t(". Të gjitha të drejtat e rezervuara.", ". All rights reserved.")}
        </p>
        <p className="text-white text-sm leading-relaxed md:text-base">Dr. Marvin Bundo &amp; Dr. Artemisa Gogollari</p>
      </div>
    </div>
  );
};
