import { useState } from 'react';
import { CreditCard, Lock, ChevronLeft, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const RetreatPagesaPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + '/' + digits.slice(2);
    return digits;
  };

  return (
    <div className="min-h-screen pb-12" style={{ backgroundColor: '#f8f7ff' }}>

      {/* Header */}
      <div className="text-center pt-10 pb-6 px-4">
        <div className="flex justify-center mb-3">
          <svg width="44" height="44" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 8C32 8 24 18 24 28C24 33 27.6 37 32 37C36.4 37 40 33 40 28C40 18 32 8 32 8Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.3"/>
            <path d="M12 22C12 22 18 32 26 35" stroke="#7c3aed" strokeWidth="1.3" strokeLinecap="round" opacity="0.8"/>
            <path d="M52 22C52 22 46 32 38 35" stroke="#7c3aed" strokeWidth="1.3" strokeLinecap="round" opacity="0.8"/>
            <path d="M6 14C6 14 14 24 22 28" stroke="#7c3aed" strokeWidth="1" strokeLinecap="round" opacity="0.45"/>
            <path d="M58 14C58 14 50 24 42 28" stroke="#7c3aed" strokeWidth="1" strokeLinecap="round" opacity="0.45"/>
            <path d="M32 37V56" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <h1 className="font-bold leading-tight mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', color: '#1a1a2e' }}>
          {t("Pagesa me ", "Payment with ")}
          <span style={{ color: '#7c3aed', fontStyle: 'italic' }}>{t("kartë", "card")}</span>
        </h1>
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-px w-8" style={{ background: 'rgba(124,58,237,0.3)' }} />
          <span style={{ color: '#7c3aed', fontSize: 14 }}>♦</span>
          <div className="h-px w-8" style={{ background: 'rgba(124,58,237,0.3)' }} />
        </div>
        <p className="text-zinc-500 text-sm max-w-md mx-auto">
          {t("Plotëso të dhënat e kartës për të finalizuar regjistrimin tënd.", "Fill in your card details to finalize your registration.")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

          {/* Left: Card form */}
          <div className="lg:col-span-3 space-y-5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ede9fe' }}>
                  <CreditCard className="w-5 h-5" style={{ color: '#7c3aed' }} />
                </div>
                <h2 className="font-bold text-zinc-800 text-base">{t("Të dhënat e kartës", "Card details")}</h2>
              </div>

              <div className="space-y-4">
                {/* Card number */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t("Numri i kartës", "Card number")}</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={e => setCardNumber(formatCardNumber(e.target.value))}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
                      style={{ backgroundColor: '#fafafa' }}
                    />
                  </div>
                </div>

                {/* Expiry & CVV */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t("Data e skadencës", "Expiry date")}</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={e => setExpiry(formatExpiry(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
                      style={{ backgroundColor: '#fafafa' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1.5">CVC / CVV</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="text"
                        placeholder="000"
                        value={cvv}
                        onChange={e => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
                        style={{ backgroundColor: '#fafafa' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Name on card */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 mb-1.5">{t("Emri në kartë", "Name on card")}</label>
                  <input
                    type="text"
                    placeholder={t("Emri dhe mbiemri", "First and last name")}
                    value={cardName}
                    onChange={e => setCardName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 transition-all"
                    style={{ backgroundColor: '#fafafa' }}
                  />
                </div>
              </div>

              {/* SSL note */}
              <div className="mt-5 rounded-xl p-3 flex items-center gap-2" style={{ backgroundColor: '#f8f7ff', border: '1px solid #ede9fe' }}>
                <Lock className="w-4 h-4 shrink-0" style={{ color: '#7c3aed' }} />
                <p className="text-xs text-zinc-500">{t("Të dhënat e kartës janë të enkriptuara me SSL 256-bit dhe nuk ruhen nga ne.", "Card details are encrypted with 256-bit SSL and are not stored by us.")}</p>
              </div>
            </div>

            {/* Payment logos */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4 flex items-center gap-4 flex-wrap">
              <span className="font-bold text-sm" style={{ color: '#635bff', fontFamily: 'Arial, sans-serif' }}>stripe</span>
              <span className="font-extrabold text-sm px-2 py-0.5 rounded" style={{ color: '#1a1f71', border: '1.5px solid #1a1f71', fontFamily: 'Arial, sans-serif', letterSpacing: 1 }}>VISA</span>
              <div className="flex items-center -space-x-1.5">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#eb001b' }} />
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#f79e1b' }} />
              </div>
              <div className="flex items-center gap-1 ml-auto">
                <Shield className="w-3.5 h-3.5 text-green-600" />
                <span className="text-xs text-green-700 font-medium">256-bit SSL Secure</span>
              </div>
            </div>

            {/* Back + Pay buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/eventet/retreat')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-zinc-700 font-semibold text-sm hover:bg-gray-50 transition-all">
                <ChevronLeft className="w-4 h-4" />
                {t("Kthehu pas", "Go back")}
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: '#7c3aed' }}>
                <Lock className="w-4 h-4" />
                {t("Paguaj tani", "Pay now")}
              </button>
            </div>

            <p className="text-xs text-zinc-400 text-center">
              {t("Të dhënat tuaja janë të mbrojtura dhe përdoren vetëm për këtë transaksion.", "Your data is protected and used only for this transaction.")}
            </p>
          </div>

          {/* Right: Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <img
                src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776944742321-0.jpeg"
                alt="Retreat"
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-zinc-800 text-base mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {t("Rezyme e porosisë", "Order summary")}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span style={{ color: '#7c3aed', fontSize: 13 }}>♦</span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm text-zinc-700 font-medium">{t("Retreat i Meditimit — Pranverë 2027", "Meditation Retreat — Spring 2027")}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{t("1 vend", "1 spot")}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-3">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4" style={{ color: '#7c3aed' }} />
                    <p className="text-xs text-zinc-500">{t("Konfirmim i menjëhershëm pas pagesës", "Instant confirmation after payment")}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" style={{ color: '#7c3aed' }} />
                    <p className="text-xs text-zinc-500">{t("Pagesë 100% e sigurt", "100% secure payment")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
