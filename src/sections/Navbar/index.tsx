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
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Meditime", href: "/meditime" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Evente", href: "/shop#evente" },
      { label: "Meditime", href: "/shop/meditime" },
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
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Meditation", href: "/meditime" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Events", href: "/shop#evente" },
      { label: "Meditation", href: "/shop/meditime" },
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
          className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
            isActive ? "text-violet-700 bg-violet-50" : "text-zinc-700 hover:text-violet-700 hover:bg-gray-100"
          }`}
        >
          {item.label}
          <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      ) : (
        <Link
          to={item.href}
          className={`flex items-center text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
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
      className="flex items-center gap-0.5 text-xs font-bold rounded-full border border-zinc-300 overflow-hidden transition-all hover:border-zinc-500"
      aria-label="Toggle language"
    >
      <span
        className={`px-2.5 py-1.5 transition-colors duration-200 ${
          lang === "al"
            ? "bg-black text-white"
            : "bg-transparent text-zinc-500 hover:text-zinc-800"
        }`}
      >
        AL
      </span>
      <span
        className={`px-2.5 py-1.5 transition-colors duration-200 ${
          lang === "en"
            ? "bg-black text-white"
            : "bg-transparent text-zinc-500 hover:text-zinc-800"
        }`}
      >
        EN
      </span>
    </button>
  );
};

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { totalItems, setCartOpen } = useCart();
  const { lang } = useLanguage();
  const navItems = lang === "al" ? navItemsAL : navItemsEN;

  return (
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(255,255,255,0.97)', borderColor: 'rgba(0,0,0,0.08)' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776841446390-0.png"
            alt="Arte Gogo Logo"
            className="h-12 w-auto object-contain"
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="xl:hidden p-2 rounded-lg text-zinc-600 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t px-4 pb-6 pt-2 max-h-[80vh] overflow-y-auto" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(0,0,0,0.08)' }}>
          {navItems.map((item) => (
            <div key={item.href} className="border-b last:border-0" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded((e) => (e === item.href ? null : item.href))}
                    className="flex items-center justify-between w-full py-3 text-sm font-medium text-zinc-700"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileExpanded === item.href ? "rotate-180" : ""}`}
                    />
                  </button>
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
