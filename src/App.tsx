import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartDrawer } from "@/components/CartDrawer";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { MainContent } from "@/sections/MainContent";
import { RrethNeshPage } from "@/pages/RrethNesh";
import { MisioniPage } from "@/pages/Misioni";
import { ShtyllatEPunesPage } from "@/pages/ShtyllatEPunes";
import { RetreatPage } from "@/pages/Retreat";
import { TrajnimeOnlinePage } from "@/pages/TrajnimeOnline";
import { WorkshopePage } from "@/pages/Workshope";
import { LivePage } from "@/pages/Live";
import { TestimonialsPage } from "@/pages/Testimonials";
import { VideoTestimonialsPage } from "@/pages/VideoTestimonials";
import { RezultatetShkencorePage } from "@/pages/RezultatetShkencore";
import { BlogPage } from "@/pages/Blog";
import { MeditimePage } from "@/pages/Meditime";
import { ShopPage } from "@/pages/Shop";
import { ShopMeditimePage } from "@/pages/ShopMeditime";
import { ShopLibratPage } from "@/pages/ShopLibrat";
import { KontaktPage } from "@/pages/Kontakt";
import { FAQPage } from "@/pages/FAQ";
import { LoginPage } from "@/pages/Login";
import { SignUpPage } from "@/pages/SignUp";
import { CheckoutPage } from "@/pages/Checkout";
import { AdminLivePage } from "@/pages/AdminLive";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/355692420827"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", fontFamily: "'Inter', sans-serif", fontSize: "clamp(11px, 1.5vw, 14px)" }}
  >
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    Kontakto Tani
  </a>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen font-metropolis text-zinc-800">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export const App = () => {
  return (
    <BrowserRouter>
    <LanguageProvider>
    <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><MainContent /></Layout>} />
        <Route path="/rreth-nesh" element={<Layout><RrethNeshPage /></Layout>} />
        <Route path="/rreth-nesh/misioni" element={<Layout><MisioniPage /></Layout>} />
        <Route path="/rreth-nesh/shtyllat-e-punes" element={<Layout><ShtyllatEPunesPage /></Layout>} />
        <Route path="/eventet" element={<Navigate to="/eventet/retreat" replace />} />
        <Route path="/eventet/retreat" element={<Layout><RetreatPage /></Layout>} />
        <Route path="/eventet/trajnime-online" element={<Layout><TrajnimeOnlinePage /></Layout>} />
        <Route path="/eventet/workshope" element={<Layout><WorkshopePage /></Layout>} />
        <Route path="/live" element={<Layout><LivePage /></Layout>} />
        <Route path="/rezultatet" element={<Navigate to="/rezultatet/testimonials" replace />} />
        <Route path="/rezultatet/testimonials" element={<Layout><TestimonialsPage /></Layout>} />
        <Route path="/rezultatet/video-testimonials" element={<Layout><VideoTestimonialsPage /></Layout>} />
        <Route path="/rezultatet/shkencore" element={<Layout><RezultatetShkencorePage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/meditime" element={<Layout><MeditimePage /></Layout>} />
        <Route path="/shop" element={<Layout><ShopPage /></Layout>} />
        <Route path="/shop/meditime" element={<Layout><ShopMeditimePage /></Layout>} />
        <Route path="/shop/librat" element={<Layout><ShopLibratPage /></Layout>} />
        <Route path="/kontakt" element={<Layout><KontaktPage /></Layout>} />
        <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/signup" element={<Layout><SignUpPage /></Layout>} />
        <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />
        <Route path="/admin/live" element={<AdminLivePage />} />
      </Routes>
      <CartDrawer />
    </CartProvider>
    </LanguageProvider>
    </BrowserRouter>
  );
};
