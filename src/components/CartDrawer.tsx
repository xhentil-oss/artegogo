import { ShoppingCart, X, Plus, Minus, Trash2, ArrowRight, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";

export const CartDrawer = () => {
  const { cart, cartOpen, setCartOpen, changeQty, removeItem, totalItems, totalPrice } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <>
      {cartOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      )}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-violet-600" />
            <h2 className="text-sm leading-relaxed text-zinc-800 md:text-base font-bold" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>{t("Shporta ime", "My Cart")}</h2>
            {totalItems > 0 && (
              <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-0.5 rounded-full">{totalItems}</span>
            )}
          </div>
          <button onClick={() => setCartOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition text-zinc-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
              <span className="text-6xl">🛒</span>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base font-medium" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>{t("Shporta është bosh", "Your cart is empty")}</p>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>{t("Shko te shitorja dhe shto produkte", "Go to the shop and add products")}</p>
              <button onClick={() => setCartOpen(false)} className="mt-2 text-violet-600 font-semibold text-sm leading-relaxed md:text-base hover:underline" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>
                {t("← Kthehu te produktet", "← Back to products")}
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-start gap-3 bg-gray-50 rounded-2xl p-4">
                <div className="text-3xl w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                  {item.emoji ? (
                    <span>{item.emoji}</span>
                  ) : item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <span>🛍️</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-zinc-800 text-sm leading-relaxed md:text-base truncate" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base mb-2" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>{item.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <button onClick={() => changeQty(item.id, -1)} className="px-2.5 py-1.5 hover:bg-gray-100 transition text-zinc-500"><Minus className="w-3.5 h-3.5" /></button>
                      <span className="px-2 text-sm leading-relaxed md:text-base font-bold text-zinc-800" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>{item.qty}</span>
                      <button onClick={() => changeQty(item.id, 1)} className="px-2.5 py-1.5 hover:bg-gray-100 transition text-zinc-500"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                    <span className="font-bold text-zinc-800 text-sm leading-relaxed md:text-base" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>{item.price * item.qty}€</span>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-zinc-300 hover:text-rose-400 transition p-1 mt-0.5 shrink-0">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-4">
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                <Tag className="w-4 h-4 text-zinc-400 shrink-0" />
                <input type="text" placeholder={t("Kodi i zbritjes...", "Discount code...")} className="bg-transparent text-sm text-zinc-600 placeholder-zinc-400 outline-none w-full" />
              </div>
              <button className="bg-violet-100 hover:bg-violet-200 text-violet-700 font-semibold text-sm px-4 rounded-xl transition">
                {t("Apliko", "Apply")}
              </button>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-zinc-500 text-sm leading-relaxed md:text-base" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>
                <span>{t("Nëntotali", "Subtotal")}</span><span>{totalPrice}€</span>
              </div>
              <div className="flex justify-between text-zinc-500 text-sm leading-relaxed md:text-base" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>
                <span>{t("Ekspedimi", "Shipping")}</span>
                <span className="text-green-600 font-medium">{t("Falas", "Free")}</span>
              </div>
              <div className="flex justify-between font-bold text-zinc-800 text-sm leading-relaxed md:text-base pt-1 border-t border-gray-100" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>
                <span>{t("Totali", "Total")}</span><span>{totalPrice}€</span>
              </div>
            </div>
            <button
              onClick={() => { setCartOpen(false); navigate("/checkout"); }}
              className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-violet-200 text-sm leading-relaxed md:text-base"
              style={{ fontFamily: "'Lemon Milk', sans-serif" }}
            >
              {t("Vazhdo me pagesën", "Proceed to checkout")}
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-sm leading-relaxed text-zinc-400 md:text-base text-center" style={{ fontFamily: "'Lemon Milk', sans-serif" }}>🔒 {t("Pagesë e sigurt · SSL encrypted", "Secure payment · SSL encrypted")}</p>
          </div>
        )}
      </div>
    </>
  );
};
