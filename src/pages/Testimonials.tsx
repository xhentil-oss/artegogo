import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

type CategoryId = "all" | "hapje-zemre" | "manifestime" | "sherim-femije" | "sherim";

interface Testimonial {
  id: number;
  image: string;
  category: Exclude<CategoryId, "all">;
  label: string;
}

const CATEGORIES: { id: CategoryId; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "Të gjitha", icon: null },
  {
    id: "hapje-zemre", label: "Hapje zemre",
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
      </svg>
    ),
  },
  {
    id: "manifestime", label: "Manifestime",
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
      </svg>
    ),
  },
  {
    id: "sherim-femije", label: "Sherim i fëmijës së brendshme",
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"/>
      </svg>
    ),
  },
  {
    id: "sherim", label: "Sherim",
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
      </svg>
    ),
  },
];

const TESTIMONIALS: Testimonial[] = [
  { id: 1, image: "/img/hapje-zemre.jpg", category: "hapje-zemre",   label: "Hapje zemre" },
  { id: 2, image: "/img/manifestime.jpg", category: "manifestime",   label: "Manifestime" },
  { id: 3, image: "/img/sherim1.jpg",     category: "sherim-femije", label: "Sherim i fëmijës së brendshme" },
  { id: 4, image: "/img/sherim2.jpg",     category: "sherim-femije", label: "Sherim i fëmijës së brendshme" },
  { id: 5, image: "/img/sherim3.jpg",     category: "sherim-femije", label: "Sherim i fëmijës së brendshme" },
  { id: 6, image: "/img/sherim4.jpg",     category: "sherim-femije", label: "Sherim i fëmijës së brendshme" },
  { id: 7, image: "/img/sherim5.jpg",     category: "sherim-femije", label: "Sherim i fëmijës së brendshme" },
  { id: 8, image: "/img/sherim-6.jpg",    category: "sherim",        label: "Sherim" },
];

export const TestimonialsPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [search, setSearch] = useState("");

  const filtered = TESTIMONIALS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.label.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/TONI1866.JPG')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
          <div className="flex-1 text-left">
            <h1 className="font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#ffffff" }}>
              {t("Fjalë që vijnë", "Words that come")}<br />
              <span style={{ color: "#c4b5fd", fontStyle: "italic" }}>{t("nga zemra.", "from the heart.")}</span>
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>♦</span>
              <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.4)" }} />
            </div>

            <p className="leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.85)", maxWidth: 420 }}>
              {t(
                "Lexo mesazhet e sinqerta nga pjesëmarrësit e ArteGogo-s që kanë përjetuar ndryshim të vërtetë në jetën e tyre.",
                "Read sincere messages from ArteGogo participants who have experienced real change in their lives."
              )}
            </p>

            <a href="/kontakt"
              className="inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#4e29c5", color: "#ffffff", fontFamily: "'Inter', sans-serif", fontSize: 16, padding: "12px 24px", fontWeight: 600 }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              {t("Dërgo edhe ti mesazhin tënd", "Send your message too")}
            </a>
          </div>
        </div>
      </div>

      {/* ── Filter + Grid ── */}
      <section style={{ background: "#f9f9fb" }}>
        <div className="max-w-5xl mx-auto px-5 py-8">

          {/* Search */}
          <div className="relative mb-5">
            <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
              <svg className="w-4 h-4" style={{ color: "#a1a1aa" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder={t("Kërko në mesazhet e transformimit...", "Search transformation messages...")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl text-sm outline-none"
              style={{ background: "#ffffff", border: "1.5px solid #e4e4e7", fontFamily: "'Inter', sans-serif", color: "#3f3f46" }}
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="inline-flex items-center gap-1.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    padding: "8px 16px",
                    background: isActive ? "#7c3aed" : "#ffffff",
                    color: isActive ? "#ffffff" : "#52525b",
                    border: isActive ? "1.5px solid #7c3aed" : "1.5px solid #e4e4e7",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Testimonial image grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {filtered.map((item) => {
                const cat = CATEGORIES.find((c) => c.id === item.category);
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl overflow-hidden"
                    style={{ background: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.13)", border: "1.5px solid #e4e4e7" }}
                  >
                    <div style={{ height: 420, background: "#f4f4f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-full"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="px-3 py-2.5 flex items-center gap-2">
                      <div
                        className="flex items-center justify-center w-7 h-7 rounded-full shrink-0"
                        style={{ background: "#ede9fe", color: "#7c3aed" }}
                      >
                        {cat?.icon}
                      </div>
                      <span
                        className="font-semibold leading-snug"
                        style={{ color: "#3f3f46", fontFamily: "'Inter', sans-serif", fontSize: 16 }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p style={{ color: "#a1a1aa", fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
                {t("Nuk u gjet asnjë testimonial për këtë kategori.", "No testimonials found for this category.")}
              </p>
            </div>
          )}

        </div>

        {/* ── CTA Banner ── */}
        <div className="max-w-5xl mx-auto px-5 pb-10">
          <div className="rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-5" style={{ background: "#ede9fe" }}>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "#7c3aed" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold leading-snug" style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#1c1917" }}>
                  {t("Ke përjetuar edhe ti një transformim?", "Have you also experienced a transformation?")}
                </p>
                <p className="leading-snug mt-0.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#52525b" }}>
                  {t("Ndaj mesazhin tënd dhe frymëzo edhe të tjerët në komunitet.", "Share your message and inspire others in the community.")}
                </p>
              </div>
            </div>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-xl font-semibold whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-105 active:scale-100"
              style={{ background: "#4e29c5", color: "#ffffff", fontFamily: "'Inter', sans-serif", fontSize: 14, padding: "12px 22px", fontWeight: 600 }}
            >
              {t("Dërgo mesazhin tënd", "Send your message")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
              </svg>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};
