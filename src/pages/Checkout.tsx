import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  CreditCard, Lock, ChevronLeft, CheckCircle2, AlertCircle,
} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import emailjs from "@emailjs/browser";
import {
  STRIPE_PUBLISHABLE_KEY,
  PAYPAL_CLIENT_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "@/config/payments";

/* ─── Stripe init ─── */
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const lemon: React.CSSProperties = { fontFamily: "'Lemon Milk', sans-serif" };

type PayMethod = "card" | "paypal";

const CARD_STYLE = {
  style: {
    base: {
      fontSize: "14px",
      color: "#27272a",
      letterSpacing: "0.025em",
      fontFamily: "'Lemon Milk', 'Helvetica Neue', sans-serif",
      "::placeholder": { color: "#a1a1aa" },
    },
    invalid: { color: "#ef4444", iconColor: "#ef4444" },
  },
};

/* ─── EmailJS helper ─── */
const sendConfirmationEmail = async (params: {
  to_name: string;
  to_email: string;
  order_items: string;
  order_total: string;
}) => {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      params,
      EMAILJS_PUBLIC_KEY
    );
  } catch (err) {
    console.warn("EmailJS send failed:", err);
  }
};

/* ─── Inner checkout form — must be a child of <Elements> ─── */
const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [method, setMethod] = useState<PayMethod>("card");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set =
    (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const orderItemsText = cart
    .map((i) => `${i.title} x${i.qty} — ${i.price * i.qty}€`)
    .join("\n");

  /* ── Stripe card submit ── */
  const handleCardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError(null);

    const card = elements.getElement(CardElement);
    if (!card) { setLoading(false); return; }

    const { error: stripeErr, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        name: form.name,
        email: form.email,
        phone: form.phone,
      },
    });

    if (stripeErr) {
      setError(stripeErr.message ?? t("Pagesa dështoi.", "Payment failed."));
      setLoading(false);
      return;
    }

    /*
     * paymentMethod.id is now ready.
     * Send it to your backend to create + confirm a PaymentIntent.
     * Example:
     *   const res = await fetch("/api/pay", {
     *     method: "POST",
     *     body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount: totalPrice * 100 }),
     *   });
     */

    await sendConfirmationEmail({
      to_name: form.name,
      to_email: form.email,
      order_items: orderItemsText,
      order_total: `${totalPrice}€`,
    });

    clearCart();
    setLoading(false);
    setSuccess(true);
  };

  /* ── PayPal approved ── */
  const handlePayPalApprove = async (_data: any, actions: any) => {
    if (!actions?.order) return;
    await actions.order.capture();
    await sendConfirmationEmail({
      to_name: form.name || "Customer",
      to_email: form.email,
      order_items: orderItemsText,
      order_total: `${totalPrice}€`,
    });
    clearCart();
    setSuccess(true);
  };

  /* ── Success screen ── */
  if (success) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center space-y-5">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-lg font-bold text-zinc-800" style={lemon}>
            {t("Pagesa u krye me sukses!", "Payment successful!")}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 md:text-base" style={lemon}>
            {t(
              "Faleminderit për porosinë tuaj. Keni marrë një email konfirmimi.",
              "Thank you for your order. A confirmation email has been sent to you."
            )}
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-2xl transition text-sm md:text-base"
            style={lemon}
          >
            {t("Kthehu në faqen kryesore", "Back to homepage")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-violet-600 hover:text-violet-800 text-sm md:text-base font-semibold mb-8 transition"
          style={lemon}
        >
          <ChevronLeft className="w-4 h-4" />
          {t("Kthehu te shporta", "Back to cart")}
        </button>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* ── LEFT: Form ── */}
          <div className="lg:col-span-3 space-y-6">

            {/* Contact info */}
            <div className="bg-white rounded-3xl shadow-sm p-6 space-y-4">
              <h3 className="text-sm md:text-base font-bold text-zinc-800 border-b border-gray-100 pb-3" style={lemon}>
                {t("Të dhënat e kontaktit", "Contact details")}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-500 mb-1.5 font-semibold" style={lemon}>
                    {t("Emri i plotë", "Full name")}
                  </label>
                  <input
                    type="text" value={form.name} onChange={set("name")} required
                    placeholder="Arta Kelmendi"
                    className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-zinc-800 outline-none focus:ring-2 focus:ring-violet-400 transition"
                    style={lemon}
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-1.5 font-semibold" style={lemon}>
                    {t("Email", "Email")}
                  </label>
                  <input
                    type="email" value={form.email} onChange={set("email")} required
                    placeholder="arta@email.com"
                    className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-zinc-800 outline-none focus:ring-2 focus:ring-violet-400 transition"
                    style={lemon}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-zinc-500 mb-1.5 font-semibold" style={lemon}>
                    {t("Numri i telefonit", "Phone number")}
                  </label>
                  <input
                    type="tel" value={form.phone} onChange={set("phone")}
                    placeholder="+383 44 000 000"
                    className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-zinc-800 outline-none focus:ring-2 focus:ring-violet-400 transition"
                    style={lemon}
                  />
                </div>
              </div>
            </div>

            {/* Payment method */}
            <div className="bg-white rounded-3xl shadow-sm p-6 space-y-4">
              <h3 className="text-sm md:text-base font-bold text-zinc-800 border-b border-gray-100 pb-3" style={lemon}>
                {t("Metoda e pagesës", "Payment method")}
              </h3>

              {/* Toggle */}
              <div className="flex gap-3">
                {(["card", "paypal"] as PayMethod[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => { setMethod(m); setError(null); }}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border-2 font-semibold text-sm transition ${
                      method === m
                        ? "border-violet-600 bg-violet-50 text-violet-700"
                        : "border-gray-200 text-zinc-500 hover:border-violet-300"
                    }`}
                    style={lemon}
                  >
                    {m === "card" ? (
                      <><CreditCard className="w-4 h-4" />{t("Kartë", "Card")}</>
                    ) : (
                      <><span className="font-black text-blue-600">Pay</span><span className="font-black text-cyan-500">Pal</span></>
                    )}
                  </button>
                ))}
              </div>

              {/* ── Stripe Card ── */}
              {method === "card" && (
                <div className="space-y-4 pt-1">
                  <div>
                    <label className="block text-xs text-zinc-500 mb-1.5 font-semibold" style={lemon}>
                      {t("Të dhënat e kartës", "Card details")}
                    </label>
                    <div className="w-full border border-gray-200 rounded-xl px-3.5 py-3 focus-within:ring-2 focus-within:ring-violet-400 transition">
                      <CardElement options={CARD_STYLE} />
                    </div>
                    <p className="text-xs text-zinc-400 mt-1.5" style={lemon}>
                      {t("Karta juaj është e sigurt — e enkriptuar nga Stripe.", "Your card is secure — encrypted by Stripe.")}
                    </p>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-center gap-2 text-rose-600 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-sm" style={lemon}>
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleCardSubmit}>
                    <button
                      type="submit"
                      disabled={loading || !stripe}
                      className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 disabled:opacity-60 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-violet-200 text-sm md:text-base"
                      style={lemon}
                    >
                      {loading ? (
                        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          {t("Konfirmo pagesën", "Confirm payment")} — {totalPrice}€
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}

              {/* ── PayPal ── */}
              {method === "paypal" && (
                <div className="space-y-4 pt-1">
                  {!form.email && (
                    <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-4 py-3 rounded-xl" style={lemon}>
                      {t("Ju lutem plotësoni emailin tuaj më lart para se të vazhdoni me PayPal.", "Please fill in your email above before continuing with PayPal.")}
                    </p>
                  )}
                  <PayPalButtons
                    style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
                    disabled={!form.email}
                    createOrder={(_data: any, actions: any) =>
                      actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                          {
                            amount: {
                              currency_code: "EUR",
                              value: totalPrice.toFixed(2),
                            },
                            description: cart.map((i) => `${i.title} x${i.qty}`).join(", "),
                          },
                        ],
                      })
                    }
                    onApprove={handlePayPalApprove}
                    onError={(err: any) => {
                      console.error("PayPal error:", err);
                      setError(t("Pagesa me PayPal dështoi.", "PayPal payment failed."));
                    }}
                  />
                  {error && (
                    <div className="flex items-center gap-2 text-rose-600 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-sm" style={lemon}>
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}
                </div>
              )}

              <p className="text-xs text-zinc-400 text-center" style={lemon}>
                🔒 {t("Pagesa e sigurt · SSL encrypted · 256-bit", "Secure payment · SSL encrypted · 256-bit")}
              </p>
            </div>
          </div>

          {/* ── RIGHT: Order summary ── */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm p-6 space-y-4 sticky top-24">
              <h3 className="text-sm md:text-base font-bold text-zinc-800 border-b border-gray-100 pb-3" style={lemon}>
                {t("Përmbledhja e porosisë", "Order summary")}
              </h3>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                      {item.emoji ? (
                        <span className="text-xl">{item.emoji}</span>
                      ) : item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <span>🛍️</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-zinc-800 truncate" style={lemon}>{item.title}</p>
                      <p className="text-xs text-zinc-400" style={lemon}>x{item.qty}</p>
                    </div>
                    <span className="text-sm font-bold text-zinc-800" style={lemon}>{item.price * item.qty}€</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-3 space-y-1.5">
                <div className="flex justify-between text-zinc-500 text-sm" style={lemon}>
                  <span>{t("Nëntotali", "Subtotal")}</span><span>{totalPrice}€</span>
                </div>
                <div className="flex justify-between text-zinc-500 text-sm" style={lemon}>
                  <span>{t("Ekspedimi", "Shipping")}</span>
                  <span className="text-green-600 font-medium">{t("Falas", "Free")}</span>
                </div>
                <div className="flex justify-between font-bold text-zinc-800 text-base pt-2 border-t border-gray-100" style={lemon}>
                  <span>{t("Totali", "Total")}</span><span>{totalPrice}€</span>
                </div>
              </div>

              {/* Accepted logos */}
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-zinc-400 mb-2" style={lemon}>{t("Pranohen:", "Accepted:")}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Visa", "Mastercard", "Amex", "PayPal"].map((brand) => (
                    <span
                      key={brand}
                      className="text-xs font-bold border border-gray-200 rounded-lg px-2.5 py-1 text-zinc-600 bg-gray-50"
                      style={lemon}
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Root: wrap with Stripe Elements + PayPal Provider ─── */
export const CheckoutPage = () => (
  <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "EUR" }}>
    <Elements stripe={stripePromise} options={{ locale: "auto" }}>
      <CheckoutForm />
    </Elements>
  </PayPalScriptProvider>
);
