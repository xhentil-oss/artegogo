import { useState } from 'react';
import { Lock, ChevronLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { STRIPE_PUBLISHABLE_KEY } from '@/config/payments';

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const CARD_STYLE = {
  style: {
    base: { fontSize: '15px', color: '#27272a', '::placeholder': { color: '#a1a1aa' } },
    invalid: { color: '#ef4444' },
  },
};

const PayForm = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const stripe = useStripe();
  const elements = useElements();

  const baseAmount = parseFloat(params.get('amount') ?? '0') || 0;
  const name       = params.get('name')  ?? '';
  const email      = params.get('email') ?? '';

  const [loading,      setLoading]      = useState(false);
  const [error,        setError]        = useState<string | null>(null);
  const [success,      setSuccess]      = useState(false);
  const [couponCode,   setCouponCode]   = useState('');
  const [couponMsg,    setCouponMsg]    = useState<string | null>(null);
  const [discount,     setDiscount]     = useState(0);
  const [couponLoading,setCouponLoading]= useState(false);
  const [appliedCode,  setAppliedCode]  = useState('');

  const amount = baseAmount - Math.round(baseAmount * discount / 100);

  const applyCoupon = async () => {
    if (!couponCode.trim()) return;
    setCouponLoading(true); setCouponMsg(null);
    try {
      const res  = await fetch('/api/coupons/validate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: couponCode }),
      });
      const data = await res.json();
      if (!res.ok) { setCouponMsg(data.message ?? t('Kupon i pavlefshëm.', 'Invalid coupon.')); setDiscount(0); }
      else { setDiscount(data.data.discountPercent); setAppliedCode(couponCode); setCouponMsg(`✓ −${data.data.discountPercent}% u aplikua!`); }
    } catch { setCouponMsg(t('Gabim. Provo përsëri.', 'Error. Try again.')); }
    finally { setCouponLoading(false); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || amount <= 0) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/payments/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.round(amount * 100), currency: 'eur', email }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message ?? t('Gabim serveri.', 'Server error.')); setLoading(false); return; }

      const card = elements.getElement(CardElement);
      if (!card) { setLoading(false); return; }

      const { error: stripeErr, paymentIntent } = await stripe.confirmCardPayment(data.data.clientSecret, {
        payment_method: { card, billing_details: { name, email } },
      });

      if (stripeErr) { setError(stripeErr.message ?? t('Pagesa dështoi.', 'Payment failed.')); setLoading(false); return; }
      if (paymentIntent?.status === 'succeeded') {
        if (appliedCode) await fetch('/api/coupons/use', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ code: appliedCode }) });
        setSuccess(true);
      }
    } catch {
      setError(t('Gabim lidhjeje. Provo përsëri.', 'Connection error. Please try again.'));
    } finally {
      setLoading(false);
    }
  };

  if (success) return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#f8f7ff' }}>
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center space-y-5">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
        <h2 className="font-bold text-zinc-800 text-xl">{t('Pagesa u krye me sukses!', 'Payment successful!')}</h2>
        <p className="text-sm text-zinc-500">{t('Faleminderit! Do të merrni email konfirmimi së shpejti.', 'Thank you! You will receive a confirmation email shortly.')}</p>
        <button onClick={() => navigate('/')} className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-2xl transition text-sm">
          {t('Kthehu në faqen kryesore', 'Back to homepage')}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pb-12" style={{ backgroundColor: '#f8f7ff' }}>
      <div className="text-center pt-10 pb-6 px-4">
        <h1 className="font-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem,5vw,2.6rem)', color: '#1a1a2e' }}>
          {t('Pagesa me ', 'Payment with ')}<span style={{ color: '#7c3aed', fontStyle: 'italic' }}>{t('kartë', 'card')}</span>
        </h1>
        <p className="text-zinc-500 text-sm">{t('Plotëso të dhënat e kartës për të finalizuar regjistrimin.', 'Fill in your card details to complete registration.')}</p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

          {/* Left: Stripe card form */}
          <div className="lg:col-span-3 space-y-5">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h2 className="font-bold text-zinc-800 text-base">{t('Të dhënat e kartës', 'Card details')}</h2>
                <div className="border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-violet-400 transition">
                  <CardElement options={CARD_STYLE} />
                </div>
                <p className="text-xs text-zinc-400">{t('Karta juaj është e sigurt — e enkriptuar nga Stripe.', 'Your card is secure — encrypted by Stripe.')}</p>

                {/* Coupon */}
                <div>
                  <p className="text-xs font-semibold text-zinc-600 mb-1.5">{t('Ke kupon zbritjeje?', 'Have a discount coupon?')}</p>
                  <div className="flex gap-2">
                    <input value={couponCode} onChange={e => setCouponCode(e.target.value.toUpperCase())}
                      placeholder="KOD-KUPONI"
                      className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-400 uppercase tracking-widest" />
                    <button type="button" onClick={applyCoupon} disabled={couponLoading || discount > 0}
                      className="px-4 py-2 rounded-xl text-white text-sm font-semibold disabled:opacity-50 transition"
                      style={{ backgroundColor: '#7c3aed' }}>
                      {couponLoading ? '...' : t('Apliko', 'Apply')}
                    </button>
                  </div>
                  {couponMsg && <p className={`text-xs mt-1 ${discount > 0 ? 'text-green-600' : 'text-rose-500'}`}>{couponMsg}</p>}
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-rose-600 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />{error}
                  </div>
                )}
              </div>

              <div className="flex gap-3 mt-4">
                <button type="button" onClick={() => navigate('/shop/regjistrohu-retreat')}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-zinc-700 font-semibold text-sm hover:bg-gray-50 transition-all">
                  <ChevronLeft className="w-4 h-4" />{t('Kthehu pas', 'Go back')}
                </button>
                <button type="submit" disabled={loading || !stripe || amount <= 0}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm transition-all hover:scale-105 disabled:opacity-60"
                  style={{ backgroundColor: '#7c3aed' }}>
                  {loading
                    ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" />
                    : <><Lock className="w-4 h-4" />{t('Paguaj tani', 'Pay now')}{amount > 0 ? ` — ${amount}€` : ''}</>
                  }
                </button>
              </div>
            </form>
          </div>

          {/* Right: Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <img src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776944742321-0.jpeg" alt="Retreat" className="w-full h-40 object-cover" />
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-zinc-800 text-base" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {t('Retreat i Meditimit', 'Meditation Retreat')}
                </h3>
                {amount > 0 && (
                  <div className="flex justify-between font-bold text-zinc-800 text-lg border-t border-gray-100 pt-3">
                    <span>Total</span><span>{amount}€</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <CheckCircle2 className="w-4 h-4 text-violet-500" />
                  {t('Konfirmim i menjëhershëm pas pagesës', 'Instant confirmation after payment')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RetreatPagesaPage = () => (
  <Elements stripe={stripePromise} options={{ locale: 'auto' }}>
    <PayForm />
  </Elements>
);
