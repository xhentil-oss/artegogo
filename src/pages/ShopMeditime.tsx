import { ShoppingCart, Plus, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { CartItem } from "@/context/CartContext";

interface Product {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  rating: number;
  reviews: number;
  description: string;
}
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const badgeColors: Record<string, string> = {
  Bestseller: "bg-amber-100 text-amber-700",
  "I ri": "bg-green-100 text-green-700",
  "New": "bg-green-100 text-green-700",
  Zbritje: "bg-rose-100 text-rose-700",
  Sale: "bg-rose-100 text-rose-700",
};

const ProductCard = ({
  product,
  addToCart,
  addLabel,
}: {
  product: Product;
  addToCart: (p: Product) => void;
  addLabel: string;
}) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 group">
    <div className="h-48 relative overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      {product.badge && (
        <span
          className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${badgeColors[product.badge] ?? "bg-gray-100 text-gray-600"}`}
        >
          {product.badge}
        </span>
      )}
      <div className="absolute bottom-3 left-3">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/90 text-white">
          {product.category}
        </span>
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < Math.floor(product.rating)
                ? "text-amber-400 fill-amber-400"
                : "text-gray-200 fill-gray-200"
            }`}
          />
        ))}
        <span className="text-xs text-zinc-400 ml-1">({product.reviews})</span>
      </div>
      <h3 className="font-bold text-zinc-800 text-base leading-tight mb-0.5">
        {product.title}
      </h3>
      <p className="text-sm leading-relaxed md:text-base text-violet-500 font-medium mb-2">{product.subtitle}</p>
      <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-4">{product.description}</p>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xl font-bold text-zinc-800">{product.price}€</span>
          {product.originalPrice && (
            <span className="text-sm text-zinc-400 line-through ml-2">
              {product.originalPrice}€
            </span>
          )}
        </div>
        <button
          onClick={() => addToCart(product)}
          className="flex items-center gap-1.5 bg-violet-500 hover:bg-violet-600 text-white text-sm leading-relaxed md:text-base font-semibold px-4 py-2 rounded-xl transition-all group-hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          {addLabel}
        </button>
      </div>
    </div>
  </div>
);

export const ShopMeditimePage = () => {
  const { addItem, totalItems, setCartOpen } = useCart();
  const addToCart = (p: Product) => {
    addItem({ id: p.id, title: p.title, subtitle: p.subtitle, price: p.price, image: p.image });
  };
  const { t } = useLanguage();

  const meditimeProducts: Product[] = [
    {
      id: "meditime-pack",
      title: t("Paketa Meditimesh", "Meditation Pack"),
      subtitle: t("30 meditim audio premium", "30 premium audio meditations"),
      price: 49,
      image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776848221134-0.jpeg",
      category: t("Meditime", "Meditation"),
      rating: 4.8,
      reviews: 89,
      description: t(
        "30 meditim audio të udhëhequr për mendje, zemër dhe transformim të thellë.",
        "30 guided audio meditations for mind, heart and deep transformation."
      ),
    },
    {
      id: "meditime-gjumi",
      title: t("Meditim për Gjumin", "Sleep Meditation"),
      subtitle: t("10 audio qetësuese", "10 soothing audio tracks"),
      price: 19,
      image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776849809120-1.jpeg",
      category: t("Meditime", "Meditation"),
      rating: 4.9,
      reviews: 112,
      description: t(
        "10 audio të specializuara për qetësi, lëshim dhe gjumë të thellë.",
        "10 specialized audio tracks for calm, release and deep sleep."
      ),
    },
    {
      id: "meditime-zemra",
      title: t("Meditim i Zemrës", "Heart Meditation"),
      subtitle: t("Koherencë zemër-tru", "Heart-brain coherence"),
      price: 29,
      image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776842921200-0.jpeg",
      category: t("Meditime", "Meditation"),
      badge: "Bestseller",
      rating: 5,
      reviews: 74,
      description: t(
        "Seria e meditimit për hapjen e zemrës dhe koherencën me trurin.",
        "The meditation series for opening the heart and achieving brain coherence."
      ),
    },
    {
      id: "meditime-frekuenca",
      title: t("Frekuencat Gamma", "Gamma Frequencies"),
      subtitle: t("Audio terapeutike 40Hz", "40Hz therapeutic audio"),
      price: 35,
      image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776851657068-0.png",
      category: t("Meditime", "Meditation"),
      badge: t("I ri", "New"),
      rating: 4.8,
      reviews: 41,
      description: t(
        "Audioteknologji e specializuar me valë gamma për aktivizim neuronal.",
        "Specialized audio technology with gamma waves for neuronal activation."
      ),
    },
    {
      id: "ebook-transformim",
      title: t("E-book: Rruga e Transformimit", "E-book: The Path of Transformation"),
      subtitle: t("180 faqe udhëzuese", "180 pages of guidance"),
      price: 15,
      image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776843089769-0.jpeg",
      category: t("Libra", "Books"),
      rating: 4.7,
      reviews: 34,
      description: t(
        "Manual praktik 180-faqësh me ushtrime, reflektime dhe teknika vetë-zhvillimi.",
        "A practical 180-page manual with exercises, reflections and self-development techniques."
      ),
    },
    {
      id: "meditime-ankthi",
      title: t("Meditim kundër Ankthit", "Anti-Anxiety Meditation"),
      subtitle: t("Sistem nervor & qetësi", "Nervous system & calm"),
      price: 22,
      image: "https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776847594178-0.jpeg",
      category: t("Meditime", "Meditation"),
      badge: t("I ri", "New"),
      rating: 4.9,
      reviews: 58,
      description: t(
        "Teknika frymëmarrjeje dhe meditimi të projektuara për qetësim të sistemit nervor.",
        "Breathing and meditation techniques designed to calm the nervous system."
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777361366707-1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/20 text-white border border-white/30">
            {t("Meditime", "Meditation")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {t("Produktet ", "Our")}<span style={{ color: "#C4B5FD" }}>{t("tona", "Products")}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {t(
              "Koleksioni ynë i plotë i meditimeve audio, frekuencave terapeutike dhe burimeve digjitale për transformimin tënd të brendshëm.",
              "Our complete collection of audio meditations, therapeutic frequencies and digital resources for your inner transformation."
            )}
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-zinc-800">{t("Të gjitha produktet", "All products")}</h2>
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base mt-1">
              {meditimeProducts.length} {t("produkte në dispozicion", "products available")}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {meditimeProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} addLabel={t("Shto", "Add")} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 rounded-3xl p-8 text-center">
          <p className="text-2xl font-bold text-zinc-800 mb-2">
            {t("Keni nevojë për ndihmë?", "Need help?")}
          </p>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-6 max-w-md mx-auto">
            {t(
              "Na kontaktoni për të gjetur produktin e duhur për ju ose për paketa personale.",
              "Contact us to find the right product for you or for personalized packages."
            )}
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white text-sm leading-relaxed md:text-base font-semibold px-6 py-3 rounded-xl transition-all"
          >
            {t("Na kontaktoni", "Contact us")}
          </Link>
        </div>
      </div>
    </div>
  );
};
