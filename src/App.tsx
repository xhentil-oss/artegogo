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

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen font-metropolis text-zinc-800">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
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
      </Routes>
      <CartDrawer />
    </CartProvider>
    </LanguageProvider>
    </BrowserRouter>
  );
};
