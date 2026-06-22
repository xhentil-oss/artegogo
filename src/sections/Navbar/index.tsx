import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

type DropdownItem = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  children?: DropdownItem[];
};

const navItemsAL: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Rreth Nesh",
    href: "/rreth-nesh",
    children: [
      { label: "Kush jemi", href: "/rreth-nesh" },
      { label: "Misioni", href: "/rreth-nesh/misioni" },
      { label: "Shtyllat e punës", href: "/rreth-nesh/shtyllat-e-punes" },
    ],
  },
  {
    label: "Eventet",
    href: "/eventet",
    children: [
      { label: "Retreat", href: "/eventet/retreat" },
      { label: "Trajnime Online", href: "/eventet/trajnime-online" },
      { label: "Workshope", href: "/eventet/workshope" },
    ],
  },
  { label: "Live", href: "/live" },
  {
    label: "Rezultatet",
    href: "/rezultatet",
    children: [
      { label: "Testimonials", href: "/rezultatet/testimonials" },
      { label: "Video Testimonials", href: "/rezultatet/video-testimonials" },
      { label: "Rezultate shkencore", href: "/rezultatet/shkencore" },
      { label: "Valet Gama", href: "/rezultatet/valet-gama" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Meditime", href: "/meditime" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Regjistrohu Retreat", href: "/shop/regjistrohu-retreat" },
      { label: "Regjistrohu Trajnim Online", href: "/shop/regjistrohu-trajnim-online" },
      { label: "Regjistrohu Workshop", href: "/shop/regjistrohu-workshop" },
      { label: "Librat", href: "/shop/librat" },
    ],
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    children: [
      { label: "Na kontaktoni", href: "/kontakt" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

const navItemsEN: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/rreth-nesh",
    children: [
      { label: "Who We Are", href: "/rreth-nesh" },
      { label: "Mission", href: "/rreth-nesh/misioni" },
      { label: "Pillars of Work", href: "/rreth-nesh/shtyllat-e-punes" },
    ],
  },
  {
    label: "Events",
    href: "/eventet",
    children: [
      { label: "Retreat", href: "/eventet/retreat" },
      { label: "Online Training", href: "/eventet/trajnime-online" },
      { label: "Workshops", href: "/eventet/workshope" },
    ],
  },
  { label: "Live", href: "/live" },
  {
    label: "Results",
    href: "/rezultatet",
    children: [
      { label: "Testimonials", href: "/rezultatet/testimonials" },
      { label: "Video Testimonials", href: "/rezultatet/video-testimonials" },
      { label: "Scientific Results", href: "/rezultatet/shkencore" },
      { label: "Gamma Waves", href: "/rezultatet/valet-gama" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Meditation", href: "/meditime" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Register Retreat", href: "/shop/regjistrohu-retreat" },
      { label: "Register Online Training", href: "/shop/regjistrohu-trajnim-online" },
      { label: "Register Workshop", href: "/shop/regjistrohu-workshop" },
      { label: "Books", href: "/shop/librat" },
    ],
  },
  {
    label: "Contact",
    href: "/kontakt",
    children: [
      { label: "Contact Us", href: "/kontakt" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

const DropdownMenu = ({ items, isOpen }: { items: DropdownItem[]; isOpen: boolean }) => (
  <div
    className={`absolute top-full left-0 mt-1 w-52 rounded-xl border overflow-hidden transition-all duration-200 z-50 ${
      isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
    }`}
    style={{ backgroundColor: '#ffffff', borderColor: 'rgba(0,0,0,0.08)' }}
  >
    {items.map((item) => (
      <Link
        key={item.href}
        to={item.href}
        className="block px-4 py-2.5 text-sm text-zinc-700 hover:bg-gray-50 transition-colors"
      >
        {item.label}
      </Link>
    ))}
  </div>
);

const NavItemDesktop = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const location = useLocation();
  const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + "/");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <li ref={ref} className="relative">
      {item.children ? (
        <button
          onClick={() => setOpen((o) => !o)}
          className={`flex items-center gap-1 text-base font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
            isActive ? "text-violet-700 bg-violet-50" : "text-zinc-700 hover:text-violet-700 hover:bg-gray-100"
          }`}
        >
          {item.label}
          <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      ) : (
        <Link
          to={item.href}
          className={`flex items-center text-base font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
            isActive ? "text-violet-700 bg-violet-50" : "text-zinc-700 hover:text-violet-700 hover:bg-gray-100"
          }`}
        >
          {item.label}
        </Link>
      )}
      {item.children && <DropdownMenu items={item.children} isOpen={open} />}
    </li>
  );
};

const LangToggle = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className="text-sm font-bold text-zinc-700 hover:text-black transition-colors"
      aria-label="Toggle language"
    >
      {lang === "al" ? "EN" : "AL"}
    </button>
  );
};

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [bannerVisible, setBannerVisible] = useState(true);
  const { totalItems, setCartOpen } = useCart();
  const { lang } = useLanguage();
  const navItems = lang === "al" ? navItemsAL : navItemsEN;

  return (
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(255,255,255,0.97)', borderColor: 'rgba(0,0,0,0.08)' }}>

      {/* ── Announcement banner ── */}
      {bannerVisible && (
        <div
          className="w-full flex items-center justify-between gap-2 px-3 sm:px-6 py-1.5"
          style={{ backgroundColor: "#4e29c5" }}
        >
          {/* Left sparkle (decorative spacer) */}
          <span className="hidden sm:flex items-center shrink-0 text-white/70">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l1.5 7.5L21 12l-7.5 1.5L12 21l-1.5-7.5L3 12l7.5-1.5z" />
            </svg>
          </span>

          {/* Center text */}
          <p className="navbar-announce flex-1 text-center text-white font-semibold tracking-wide md:tracking-widest uppercase" style={{ lineHeight: 1.4 }}>
            {lang === "al"
              ? "Regjistrimet për retreatin e meditimit pranverë 2027 janë hapur"
              : "Registrations for the Spring 2027 Meditation Retreat are open"}
          </p>

          {/* Right CTA */}
          <div className="flex items-center shrink-0">
            <Link
              to="/eventet/retreat"
              className="whitespace-nowrap text-[9px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full transition-all duration-200 hover:bg-white hover:text-purple-700"
              style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}
            >
              {lang === "al" ? "Shiko ofertën →" : "View offer →"}
            </Link>
          </div>
        </div>
      )}
      <nav className="w-full px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <Link to="/" className="flex items-center shrink-0 py-2">
          <img
            src="/img/transparent-logo.png"
            alt="Arte Gogo Logo"
            className="h-14 w-auto object-contain"
            style={{ marginTop: 4, marginBottom: 4 }}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <NavItemDesktop key={item.href} item={item} />
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <LangToggle />
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center justify-center text-zinc-600 hover:text-black transition-colors p-2 rounded-lg hover:bg-gray-100"
            aria-label="Shporta"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-purple-900 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <Link
            to="/login"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-black px-3 py-2 rounded-lg hover:bg-gray-100 transition-all"
          >
            <User size={16} />
            {lang === "al" ? "Hyrja" : "Log In"}
          </Link>
          <Link
            to="/signup"
            className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-zinc-800 transition-all"
          >
            {lang === "al" ? "Regjistrohu" : "Sign Up"}
          </Link>
        </div>

        {/* Mobile right actions */}
        <div className="xl:hidden flex items-center gap-1">
          <LangToggle />
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center justify-center text-zinc-600 p-2 rounded-lg hover:bg-gray-100"
            aria-label="Shporta"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-purple-900 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 rounded-lg text-zinc-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t px-4 pb-6 pt-2 max-h-[80vh] overflow-y-auto" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(0,0,0,0.08)' }}>
          {navItems.map((item) => (
            <div key={item.href} className="border-b last:border-0" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
              {item.children ? (
                <>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 py-3 text-sm font-medium text-zinc-700 hover:text-violet-700"
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => setMobileExpanded((e) => (e === item.href ? null : item.href))}
                      className="px-2 py-3 text-zinc-400 hover:text-zinc-700"
                      aria-label="Toggle submenu"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileExpanded === item.href ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {mobileExpanded === item.href && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-sm text-zinc-500 hover:text-violet-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-zinc-700 hover:text-violet-700"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex justify-center py-2">
              <LangToggle />
            </div>
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block text-center border border-gray-200 text-zinc-700 text-sm font-semibold px-4 py-3 rounded-lg hover:bg-gray-50 transition-all"
            >
              {lang === "al" ? "Hyrja" : "Log In"}
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-black text-white text-sm font-semibold px-4 py-3 rounded-lg hover:bg-zinc-800 transition-all"
            >
              {lang === "al" ? "Regjistrohu" : "Sign Up"}
            </Link>
            <button
              onClick={() => { setMobileOpen(false); setCartOpen(true); }}
              className="flex items-center justify-center gap-2 border border-gray-200 text-zinc-600 text-sm font-medium px-4 py-3 rounded-lg hover:bg-gray-50 transition-all"
            >
              <ShoppingCart size={16} />
              {lang === "al" ? "Shporta" : "Cart"} {totalItems > 0 ? `(${totalItems})` : ""}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
