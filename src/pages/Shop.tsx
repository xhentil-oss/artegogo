import { ShoppingCart, Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

const products: (Product & {
  titleEn: string;
  subtitleEn: string;
  descriptionEn: string;
})[] = [
  {
    id: "retreat-2026",
    title: "Retreat Harmonizim 2026",
    titleEn: "Harmonizim Retreat 2026",
    subtitle: "5 ditë transformimi i plotë",
    subtitleEn: "5 days of complete transformation",
    price: 890,
    originalPrice: 1050,
    image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776842921200-0.jpeg",
    category: "Evente",
    badge: "Bestseller",
    rating: 5,
    reviews: 47,
    description: "Retreat 5-ditor në natyrë me meditim, punë grupore dhe transformim personal.",
    descriptionEn: "5-day nature retreat with meditation, group work and personal transformation.",
  },
  {
    id: "workshop-zemra",
    title: "Workshop Hapja e Zemrës",
    titleEn: "Heart Opening Workshop",
    subtitle: "Workshopi i ardhshëm",
    subtitleEn: "Upcoming workshop",
    price: 120,
    image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776847594178-0.jpeg",
    category: "Evente",
    badge: "I ri",
    rating: 5,
    reviews: 23,
    description: "Workshop 2-ditor intensiv për punën emocionale dhe hapjen e zemrës.",
    descriptionEn: "Intensive 2-day workshop for emotional work and heart opening.",
  },
  {
    id: "trajnim-online",
    title: "Trajnim Online — 8 Javë",
    titleEn: "Online Training — 8 Weeks",
    subtitle: "Program i plotë digjital",
    subtitleEn: "Full digital program",
    price: 299,
    originalPrice: 399,
    image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776851657068-0.png",
    category: "Trajnime",
    badge: "Zbritje",
    rating: 4.9,
    reviews: 61,
    description: "8 javë udhëzim online me video, audio meditim dhe mbështetje direkte.",
    descriptionEn: "8 weeks of online guidance with video, audio meditation and direct support.",
  },
  {
    id: "meditime-pack",
    title: "Paketa Meditimesh",
    titleEn: "Meditation Bundle",
    subtitle: "30 meditim audio premium",
    subtitleEn: "30 premium audio meditations",
    price: 49,
    image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776848221134-0.jpeg",
    category: "Meditime",
    rating: 4.8,
    reviews: 89,
    description: "30 meditim audio të udhëhequr për mendje, zemër dhe transformim të thellë.",
    descriptionEn: "30 guided audio meditations for mind, heart and deep transformation.",
  },
  {
    id: "meditime-gjumi",
    title: "Meditim për Gjumin",
    titleEn: "Sleep Meditation",
    subtitle: "10 audio qetësuese",
    subtitleEn: "10 calming audios",
    price: 19,
    image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776849809120-1.jpeg",
    category: "Meditime",
    rating: 4.9,
    reviews: 112,
    description: "10 audio të specializuara për qetësi, lëshim dhe gjumë të thellë.",
    descriptionEn: "10 specialized audios for calm, release and deep sleep.",
  },
  {
    id: "ebook-transformim",
    title: "E-book: Rruga e Transformimit",
    titleEn: "E-book: The Path of Transformation",
    subtitle: "180 faqe udhëzuese",
    subtitleEn: "180 pages of guidance",
    price: 15,
    image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776843089769-0.jpeg",
    category: "Libra",
    rating: 4.7,
    reviews: 34,
    description: "Manual praktik 180-faqësh me ushtrime, reflektime dhe teknika vetë-zhvillimi.",
    descriptionEn: "180-page practical manual with exercises, reflections and self-development techniques.",
  },
];

const badgeColors: Record<string, string> = {
  Bestseller: "bg-amber-100 text-amber-700",
  "I ri": "bg-green-100 text-green-700",
  New: "bg-green-100 text-green-700",
  Zbritje: "bg-rose-100 text-rose-700",
  Sale: "bg-rose-100 text-rose-700",
};

const sectionConfig = [
  {
    key: "Evente",
    labelAl: "Evente & Retreat",
    labelEn: "Events & Retreat",
    icon: "🗓️",
    descAl: "Bashkohu me ne live — transformim real, njerëz real, rezultate të jashtëzakonshme",
    descEn: "Join us live — real transformation, real people, extraordinary results",
    accent: "from-[#9D8FEF] to-[#7c6fd4]",
    tag: "text-[#9D8FEF] bg-[#f3f0ff] border-[#d4ccf7]",
  },
  {
    key: "Trajnime",
    labelAl: "Trajnime Online",
    labelEn: "Online Training",
    icon: "💻",
    descAl: "Programe digjitale me video, audio dhe mbështetje",
    descEn: "Digital programs with video, audio and direct support",
    accent: "from-[#9D8FEF] to-[#7c6fd4]",
    tag: "text-[#9D8FEF] bg-[#f3f0ff] border-[#d4ccf7]",
  },
];

interface Product { id: string; title: string; subtitle?: string; price: number; image?: string; originalPrice?: number; badge?: string; rating: number; reviews: number; description: string; category: string; }
type BilingualProduct = Product & { titleEn: string; subtitleEn: string; descriptionEn: string };

const ProductCard = ({ product, onAdd }: { product: BilingualProduct; onAdd: (p: BilingualProduct) => void }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all group">
      <div className="h-44 relative overflow-hidden">
        <img
          src={(product as any).image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {product.badge && (
          <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${badgeColors[product.badge] ?? "bg-gray-100 text-gray-600"}`}>
            {product.badge === "I ri" ? t("I ri", "New") : product.badge === "Zbritje" ? t("Zbritje", "Sale") : product.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`}
            />
          ))}
          <span className="text-xs text-zinc-400 ml-1">({product.reviews})</span>
        </div>
        <h3 className="font-bold text-zinc-800 text-base leading-tight mb-0.5">{t(product.title, product.titleEn)}</h3>
        <p className="text-sm leading-relaxed md:text-base font-medium mb-2" style={{ color: "#9D8FEF" }}>{t(product.subtitle, product.subtitleEn)}</p>
        <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">{t(product.description, product.descriptionEn)}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-zinc-800">{product.price}€</span>
            {product.originalPrice && (
              <span className="text-sm text-zinc-400 line-through ml-2">{product.originalPrice}€</span>
            )}
          </div>
          <button
            onClick={() => onAdd(product)}
            className="flex items-center gap-1.5 text-white text-sm leading-relaxed md:text-base font-semibold px-4 py-2 rounded-xl transition-all group-hover:scale-105"
            style={{ backgroundColor: "#9D8FEF" }}
          >
            <Plus className="w-4 h-4" />
            {t("Shto", "Add")}
          </button>
        </div>
      </div>
    </div>
  );
};

export const ShopPage = () => {
  const { addItem, totalItems, setCartOpen } = useCart();
  const { t, lang } = useLanguage();
  const addToCart = (product: BilingualProduct) => addItem({
    id: product.id,
    title: lang === "en" ? product.titleEn : product.title,
    subtitle: lang === "en" ? product.subtitleEn : product.subtitle,
    price: product.price,
    image: product.image,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: "url(https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777361096433-1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/20 text-white border border-white/30">
            {t("Evente", "Events")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {t(
              <>Produktet <span style={{ color: "#C4B5FD" }}>tona</span></>,
              <>Our <span style={{ color: "#C4B5FD" }}>Products</span></>
            )}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {t(
              "Rezervo vendin tënd në retreat-et dhe workshopet transformuese — eksperienca live që ndryshojnë jetën.",
              "Reserve your spot at our transformative retreats and workshops — live experiences that change lives."
            )}
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {sectionConfig.map((section, idx) => {
          const sectionProducts = products.filter((p) => p.category === section.key || (section.key === "Meditime" && (p.category === "Meditime" || p.category === "Libra")));
          if (sectionProducts.length === 0) return null;
          return (
            <div key={section.key}>
              {/* Section header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${section.accent} flex items-center justify-center text-xl`}>
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-800">{t((section as any).labelAl, (section as any).labelEn)}</h2>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{t((section as any).descAl, (section as any).descEn)}</p>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  <span className={`text-sm leading-relaxed md:text-base font-semibold px-3 py-1 rounded-full border ${section.tag}`}>
                    {sectionProducts.length} {t("produkte", "products")}
                  </span>
                  {(section as any).link && (
                    <Link
                      to={(section as any).link}
                      className="text-xs font-semibold text-rose-500 hover:text-rose-600 underline underline-offset-2 transition-colors"
                    >
                      Shiko të gjitha →
                    </Link>
                  )}
                </div>
              </div>

              {/* Products grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectionProducts.map((product) => (
                  <ProductCard key={product.id} product={product as BilingualProduct} onAdd={addToCart} />
                ))}
              </div>

              {/* Divider */}
              {idx < sectionConfig.length - 1 && (
                <div className="mt-16 border-t border-gray-200" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
