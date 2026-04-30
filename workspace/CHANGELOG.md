<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-04-29 (shop-cart-bilingual-title)
- Fixed: cart items always showing Albanian title/subtitle regardless of language
- `addToCart` in ShopPage now uses `lang` from `useLanguage()` to pick `titleEn`/`subtitleEn` vs `title`/`subtitle`
- File: src/pages/Shop.tsx

## 2026-04-29 (fix-shop-addtocart-v2)
- Fixed: `addToCart is not a function` — `interface Product` was declared AFTER `ProductCard` component causing runtime issues
- Moved `Product` interface above `ProductCard`; renamed prop `addToCart` → `onAdd` to avoid shadowing
- `onAdd` prop receives `BilingualProduct` directly; local `addToCart` wrapper in `ShopPage` calls `addItem`
- File: src/pages/Shop.tsx

## 2026-04-29 (workshope-days-english)
- Added separate titleAL/titleEN + descAL/descEN fields to all 3 days in WorkshopePage
- Cards now show correct English: "Reclaim Your Energy", "Feel Your Passion for Life", "Manifest Your Dream Life"
- File: src/pages/Workshope.tsx

## 2026-04-29 (workshope-extras-english-fix)
- Fixed "What You'll Also Learn" title: &#39; → proper apostrophe
- Added separate titleEN/descEN translations for both extras accordion items
- File: src/pages/Workshope.tsx

## 2026-04-29 (rezultatet-stats-value-size)
- Stats card value (100%, 3, Para & Pas, ≥40Hz): text-2xl → text-sm leading-relaxed font-extrabold md:text-base
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-29 (manifestime-description-update)
- Manifestime card description updated: added "duke manifestuar" to AL text + EN equivalent
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-29 (why-different-subtitle-text-size)
- WhyDifferentSection subtitle: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-29 (offer-subtitle-text-size)
- OfferSection subtitle paragraph: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/sections/OfferSection/index.tsx

## 2026-04-29 (offer-cta-text-size)
- OfferSection CTA button text: added text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/sections/OfferSection/index.tsx

## 2026-04-29 (offer-button-nowrap)
- OfferSection CTA buttons: removed overflow-hidden+text-ellipsis, kept whitespace-nowrap so arrow stays on same line
- File: src/sections/OfferSection/index.tsx

## 2026-04-29 (shop-meditime-librat-tona-color)
- ShopMeditime & ShopLibrat hero "tona": now colored #C4B5FD (Albanian variant)
- Files: src/pages/ShopMeditime.tsx, src/pages/ShopLibrat.tsx

## 2026-04-29 (shop-hero-tona-color)
- Shop hero "tona" span: now colored #C4B5FD (both AL and EN variants)
- File: src/pages/Shop.tsx

## 2026-04-29 (meditime-avancuara-c4b5fd)
- Meditime hero "Avancuara" span: #9D8FEF → #C4B5FD
- File: src/pages/Meditime.tsx

## 2026-04-29 (blog-hero-transformim-color)
- Blog hero "Transformim" span: #9D8FEF → #C4B5FD
- File: src/pages/Blog.tsx

## 2026-04-29 (hero-accent-color-c4b5fd-all)
- Hero title accent span color → #C4B5FD across ALL pages with text-violet-200 or #9D8FEF in hero
- Files: Testimonials, VideoTestimonials, FAQ, Kontakt, RezultatetShkencore, Eventet, Shop, ShopLibrat, ShopMeditime

## 2026-04-29 (workshope-intensive-color)
- Hero title "Intensive" span color: #9D8FEF → #C4B5FD
- File: src/pages/Workshope.tsx

## 2026-04-29 (trajnim-online-6javor-color)
- Hero title "6 Javor" span color: #9D8FEF → #C4B5FD
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-29 (retreat-meditimi-color)
- Hero title "Meditimi" span color: #9D8FEF → #C4B5FD
- File: src/pages/Retreat.tsx

## 2026-04-29 (meditime-avancuara-color)
- Hero title "Avancuara" span: text-violet-200 → style color #9D8FEF
- File: src/pages/Meditime.tsx

## 2026-04-29 (footer-text-size)
- Footer links (all 3 columns), tagline, and bottom bar texts: text-sm → text-sm leading-relaxed md:text-base
- File: src/sections/Footer/components/FooterLinks.tsx

## 2026-04-29 (fix-shop-meditime-addtocart)
- Fixed: `addToCart is not a function` — CartContext exports `addItem`, not `addToCart`
- Removed import of non-existent `Product` type from CartContext; defined local `Product` interface
- Added local `addToCart` wrapper in ShopMeditimePage that calls `addItem`
- File: src/pages/ShopMeditime.tsx

## 2026-04-29 (checkout-page)
- Created src/pages/Checkout.tsx: contact form, card/PayPal toggle, order summary, success screen
- CartDrawer "Vazhdo me pagesën" now navigates to /checkout and closes drawer
- Added clearCart() to CartContext, added /checkout route in App.tsx
- All texts use Lemon Milk font + text-sm leading-relaxed md:text-base

## 2026-04-29 (cart-drawer-items-lemon-milk)
- Item title, subtitle, qty, price → text-sm leading-relaxed md:text-base + Lemon Milk font
- Nëntotali, Ekspedimi, Totali rows → same size + Lemon Milk
- "Vazhdo me pagesën" btn + SSL text → text-sm leading-relaxed md:text-base + Lemon Milk
- File: src/components/CartDrawer.tsx

## 2026-04-29 (cart-drawer-text-fix)
- CartDrawer: "Shporta ime" title, empty state texts & back button → text-sm leading-relaxed text-zinc-700 md:text-base + Lemon Milk font
- File: src/components/CartDrawer.tsx

## 2026-04-29 (shop-librat-hero-shop-style)
- ShopLibrat hero: replaced old hero with Shop-style (py-28, overlay 55%, pill badge "Libra", title white+violet-200, subtitle text-white/70)
- File: src/pages/ShopLibrat.tsx

## 2026-04-29 (shop-meditime-hero-shop-style)
- ShopMeditime hero: replaced old hero with Shop-style (py-28, dark overlay 55%, pill badge bg-white/20, title white+violet-200, subtitle text-white/70 mb-8)
- File: src/pages/ShopMeditime.tsx

## 2026-04-29 (meditime-hero-redesign)
- Meditime hero: applied same Shop/Kontakt-style hero (bg-cover, overlay 55%, pill badge bg-white/20, title white+violet-200, subtitle text-white/70 mb-8, z-10)
- File: src/pages/Meditime.tsx

## 2026-04-29 (shop-eventet-hero-redesign)
- Shop & Eventet hero: replaced old hero with Kontakt-style full-width bg-image hero (dark overlay, pill badge, big title white+violet-200, subtitle text-white/70)
- Files: src/pages/Shop.tsx, src/pages/Eventet.tsx

## 2026-04-29 (faq-tabs-text-fix)
- Category tab buttons: added leading-relaxed md:text-base to existing text-sm font-semibold
- File: src/sections/FAQSection/index.tsx

## 2026-04-29 (shop-librat-text-fix)
- Author line, italic subtitle, lead paragraph, highlights li, "Shto në shportë" btn (both books): → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/ShopLibrat.tsx

## 2026-04-29 (shop-meditime-cta-btn-text)
- CTA "Na kontaktoni" button: added text-sm leading-relaxed md:text-base
- File: src/pages/ShopMeditime.tsx

## 2026-04-29 (shop-meditime-text-fix)
- Hero paragraph, "N produkte" subtitle, product subtitle (violet), product description, "+ Shto" btn, CTA paragraph: → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/ShopMeditime.tsx

## 2026-04-29 (shop-subtitle-btn-text-fix)
- Product card subtitle "5 ditë transformimi i plotë" / "Workshopi i ardhshëm": text-sm font-medium → text-sm leading-relaxed md:text-base font-medium
- "+ Shto" button: added text-sm leading-relaxed md:text-base
- File: src/pages/Shop.tsx

## 2026-04-29 (shop-text-fix)
- Section desc paragraph: text-lg font-normal text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- "produkte" badge: text-xs → text-sm leading-relaxed md:text-base
- Product card description: text-lg font-normal text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/Shop.tsx

## 2026-04-29 (meditime-cta-text-fix)
- CTA paragraph: text-white/70 text-lg → text-sm leading-relaxed text-white/70 md:text-base
- CTA buttons "Shiko Trajnimet Online" & "Rezervo Retreat-in": added text-sm leading-relaxed md:text-base
- File: src/pages/Meditime.tsx

## 2026-04-29 (blog-sekret-full-content)
- Post "Sekreti që të jep mundësinë...": replaced short content with full user-provided text (5 paragraphs)
- Added: liri absolute, sekret paragraph with leksione/mundësi, full list of guxim actions
- File: src/pages/Blog.tsx

## 2026-04-29 (blog-rikujtese-uppercase-fix)
- Post "Rikujtesë" content paragraphs: converted all-caps to normal sentence case
- File: src/pages/Blog.tsx

## 2026-04-29 (blog-card-text-fix)
- Card excerpt: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- "Lexo më shumë →": removed uppercase/tracking-wide, → text-sm leading-relaxed md:text-base
- Modal paragraphs: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/Blog.tsx

## 2026-04-29 (rezultatet-shkencore-cta-text-white)
- CTA paragraph in black banner: text-zinc-700 → text-white
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-29 (rezultatet-shkencore-cta-para-text)
- CTA paragraph (black banner): text-white text-base md:text-lg font-semibold → text-sm leading-relaxed text-zinc-700 md:text-base font-semibold
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-29 (rezultatet-shkencore-stat-spacing)
- Added spaces around en-dashes in stat values: "100–400×" → "100 – 400×", "5–40 min" → "5 – 40 min"
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-29 (rezultatet-shkencore-all-circled-text)
- Gamma card paragraphs, neuro bullet descs, stats labels, summary paragraph, "Pse janë të rëndësishme" paragraphs: → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-29 (rezultatet-shkencore-gamma-text)
- EEG section subtitle paragraph: text-zinc-500 text-base md:text-lg → text-sm leading-relaxed text-zinc-700 md:text-base
- Gamma box 3 paragraphs: text-zinc-700 text-base md:text-lg → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-29 (rezultatet-shkencore-text-fix)
- Protocol paragraph, stats labels, measurement subtitles, body paragraphs: → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-29 (video-testimonials-btn-white-bg)
- CTA button: bg-black text-white → bg-white text-black hover:bg-zinc-100
- File: src/pages/VideoTestimonials.tsx

## 2026-04-29 (video-testimonials-cta-white-black-btn)
- CTA paragraph: text-zinc-700 → text-white
- CTA button: bg-white text-violet-700 → bg-black text-white hover:bg-zinc-800 + border border-white/20
- File: src/pages/VideoTestimonials.tsx

## 2026-04-29 (video-testimonials-cta-text-fix)
- CTA paragraph: text-violet-200 → text-sm leading-relaxed text-zinc-700 md:text-base
- CTA button "Rezervo vendin tënd": added text-sm leading-relaxed md:text-base
- File: src/pages/VideoTestimonials.tsx

## 2026-04-29 (video-testimonials-text-fix)
- Video card description paragraph: text-zinc-500 text-sm → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/VideoTestimonials.tsx

## 2026-04-29 (live-cards-text-fix)
- Grid cards (Meditime Live / Workshope Online / Q&A): text-zinc-500 text-sm leading-relaxed → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/Live.tsx

## 2026-04-29 (live-text-fix)
- Hero paragraph: text-zinc-500 text-lg → text-sm leading-relaxed text-zinc-700 md:text-base
- "No live broadcast" paragraph: text-zinc-500 text-base → text-sm leading-relaxed text-zinc-700 md:text-base
- Instagram & YouTube buttons: added text-sm leading-relaxed md:text-base
- File: src/pages/Live.tsx

## 2026-04-29 (workshope-testimonial-cta-text)
- Testimonial quote paragraph: text-zinc-500 text-base → text-sm leading-relaxed text-zinc-700 md:text-base
- CTA paragraph: text-white/70 text-lg → text-sm leading-relaxed text-white/70 md:text-base
- CTA button "Na kontaktoni": added text-sm leading-relaxed md:text-base
- File: src/pages/Workshope.tsx

## 2026-04-29 (workshope-accordion-qendrimi-text)
- Accordion titles (extras): font-semibold text-zinc-800 text-lg → text-sm leading-relaxed text-zinc-700 md:text-base
- Qëndrimi card paragraph: text-zinc-500 text-base → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/Workshope.tsx

## 2026-04-29 (workshope-text-fix)
- Intro paragraph: text-zinc-500 text-lg → text-sm leading-relaxed text-zinc-700 md:text-base
- Day cards (01/02/03) description paragraphs: text-base text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/Workshope.tsx

## 2026-04-29 (trajnime-cta-p-color-force)
- CTA paragraph: re-applied inline style={{ color: "#3f3f46" }} (zinc-700 hex) to override teal cascade from design tokens
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-29 (trajnime-practice-title-text)
- Practice item h3 titles: text-2xl md:text-3xl font-bold text-zinc-900 → text-sm leading-relaxed font-bold text-zinc-700 md:text-base
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-29 (trajnime-all-title-text)
- Pillar titles, program item titles, accordion titles: text-lg text-zinc-800 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-29 (trajnime-accordion-title-text)
- Meditation accordion title spans: font-semibold text-zinc-800 text-lg → font-semibold text-zinc-800 text-sm leading-relaxed md:text-base
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-29 (trajnime-stat-value-fix)
- Stats bar value text ("6 Javë", "9 Seanca", "7 Q&A", "6 Muaj"): text-xl font-extrabold → text-sm leading-relaxed font-extrabold md:text-base
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-29 (trajnime-online-text-fix)
- Stats bar labels, intro paragraphs, "Çfarë do të mësosh" box, pillars descs: → text-sm leading-relaxed text-zinc-700 md:text-base
- Program items descs, highlight banner paragraph, meditation accordion descs: same fix
- Practice items paragraphs, results list items, CTA paragraph: same fix
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-29 (retreat-cta-button-text)
- CTA "Rezervo vendin tënd" button: added text-sm leading-relaxed md:text-base
- Paragraph "Vendet janë të kufizuara..." already had correct classes, no change needed
- File: src/pages/Retreat.tsx

## 2026-04-29 (retreat-pricing-text-fix)
- Pricing variants: "Trajnimi"/"Hotel 5★ ALL Inclusive" rows: text-sm text-zinc-600 → text-sm leading-relaxed text-zinc-700 md:text-base
- Pricing variant note: text-xs leading-relaxed text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- Companion rows label: text-sm → text-sm leading-relaxed text-zinc-700 md:text-base; note: text-xs text-zinc-400 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/Retreat.tsx

## 2026-04-29 (retreat-reasons-included-text)
- Reasons grid cards paragraph: text-zinc-700 text-sm leading-relaxed → text-sm leading-relaxed text-zinc-700 md:text-base
- Included checklist items paragraph: same fix
- File: src/pages/Retreat.tsx

## 2026-04-29 (retreat-stat-value-text)
- Stats bar value labels ("8 Ditë", "Hotel 5★", etc.): text-xl font-extrabold → text-sm leading-relaxed font-extrabold text-zinc-700 md:text-base
- File: src/pages/Retreat.tsx

## 2026-04-29 (retreat-remaining-text-fix)
- Stats bar labels: text-xs text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- All 6 venue card paragraphs (Vendi/Salla/Dhomat/Ushqimi/Fasilitetet/Zonë): text-zinc-500 → text-zinc-700 + md:text-base
- "Fjalët e atyre" subtitle: text-zinc-400 text-sm → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/Retreat.tsx

## 2026-04-29 (shtyllat-text-style)
- Intro paragraph, pillar description paragraphs, benefit list items: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-29 (misioni-bottom-cta-text)
- Bottom CTA section h2: text-3xl md:text-4xl → text-2xl md:text-3xl font-bold
- Both CTA buttons: added leading-relaxed md:text-base to existing text-sm
- File: src/pages/Misioni.tsx

## 2026-04-29 (misioni-cta-body-text-size)
- Dark CTA section paragraph + 3 bullet items: text-lg/text-base md:text-lg → text-sm leading-relaxed md:text-base
- File: src/pages/Misioni.tsx

## 2026-04-29 (misioni-cta-heading-size)
- Dark CTA section h2 "Qëllimi ynë nuk është vetëm...": text-3xl md:text-5xl → text-2xl md:text-3xl font-bold
- File: src/pages/Misioni.tsx

## 2026-04-29 (misioni-text-style)
- Mission paragraphs (3x), methodology card paragraphs (2x), results list items, CTA paragraph: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/Misioni.tsx

## 2026-04-29 (rreth-nesh-cta-buttons-text)
- CTA section bottom: "Rezervo Retreat-in" & "Shiko Trajnimet Online" buttons: text-sm → text-sm leading-relaxed md:text-base
- Paragraph already correct (text-sm leading-relaxed text-zinc-700 md:text-base), no change needed
- File: src/pages/RrethNesh.tsx

## 2026-04-29 (cfar-bejme-text-style)
- "Çfarë bëjmë" section paragraph + bullet list items: confirmed text-sm leading-relaxed text-zinc-700 md:text-base
- "Baza shkencore" card paragraph: confirmed same text style
- File: src/pages/RrethNesh.tsx

## 2026-04-29 (rreth-nesh-text-fix)
- Photo caption "Dr. Marvin & Dr. Artemisa": text-xs → text-sm leading-relaxed md:text-base
- Research fields list items: text-zinc-300 text-base → text-sm leading-relaxed text-zinc-300 md:text-base
- File: src/pages/RrethNesh.tsx

## 2026-04-29 (cta-banner-button-text-style)
- Button texts "Rezervo Retreat-in" and "Shiko trajnimet online": applied text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/sections/CTABannerSection/index.tsx

## 2026-04-29 (retreat-text-style)
- Fixed all body text in Retreat.tsx: intro paragraphs, what-is box, venue description paragraph, pricing description, FAQ q/a, testimonial block, CTA paragraph → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/Retreat.tsx

## 2026-04-29 (kontakt-text-style)
- Description paragraph, card titles (WhatsApp/Instagram/Facebook/YouTube/Email/TikTok), card subtitles, response banner: → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/pages/Kontakt.tsx

## 2026-04-29 (faq-text-style)
- FAQ question text: text-lg → text-sm leading-relaxed text-zinc-700 md:text-base
- FAQ answer paragraphs, listIntro, listOutro, bullet items: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- Section description paragraph and footer CTA paragraph: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/sections/FAQSection/index.tsx

## 2026-04-29 (philosophy-text-style)
- Pillar labels (Zemra/Truri/Trupi icons): text-xs → text-sm leading-relaxed text-zinc-700 md:text-base
- Flow pills (♡ Zemra, ◎ Truri, ◈ Trupi, ✦ Harmoni): text-xs → text-sm leading-relaxed text-zinc-700 md:text-base
- Description paragraph: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- Blockquote italic paragraph: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/sections/PhilosophySection/index.tsx

## 2026-04-29 (online-programs-card-titles)
- Feature card titles (Video sesione, Audio udhëzues, Materiale pune, Nga kudo): text-sm font-bold text-zinc-800 → text-sm font-bold leading-relaxed text-zinc-700 md:text-base
- "Akses i përhershëm" title: same change
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-29 (online-programs-desc-btn-style)
- Description paragraph: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- "Shiko programet" button span: added text-sm leading-relaxed md:text-base
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-29 (rezervo-btn-text-style)
- "Rezervo vendin tënd" button span: text-sm → text-sm leading-relaxed md:text-base
- File: src/sections/FeaturedRetreatSection/index.tsx

## 2026-04-29 (featured-retreat-text-style)
- Description paragraph: text-lg text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- Topics list items: already correct, confirmed font-normal
- Italic quote paragraph: text-zinc-500 → text-zinc-700
- Stat labels (Kohëzgjatja, Seanca, Vende gjithsej): text-xs text-zinc-400 → text-sm leading-relaxed text-zinc-700 md:text-base
- "Çfarë përfshin" header + bullet list items: updated to text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/sections/FeaturedRetreatSection/index.tsx

## 2026-04-29 (testimonial-quote-tag-size)
- Testimonial quote: text-zinc-600 text-sm → text-sm leading-relaxed text-zinc-700 md:text-base
- Result tag text: text-xs → text-sm leading-relaxed text-zinc-700 md:text-base (kept purple color via style)
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-29 (stat-label-color-fix)
- Stat card labels color: text-zinc-500 → text-zinc-700 (size text-sm leading-relaxed md:text-base kept)
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-29 (testimonials-text-size-fix)
- Stat card labels: text-xs → text-sm leading-relaxed md:text-base (kept zinc-500 color)
- Category card descriptions (white text): text-xs leading-snug → text-sm leading-relaxed md:text-base (kept white/80 color)
- Featured category card description: text-lg → text-sm leading-relaxed md:text-base (kept text-white)
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-29 (whydiff-card-align-fix)
- Grid changed from items-start → items-center so card aligns vertically with pillar list
- Removed `uppercase` from bottom banner text ("Transformim real · Jo i përkohshëm")
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-29 (whydiff-quadrant-text-style)
- Updated quadrant buttons (Trup, Mendje, Zemër, Energji) text to text-sm leading-relaxed md:text-base
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-29 (whydiff-goal-text-style)
- Updated "Qëllimi i vërtetë" paragraph and bottom banner text to text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-29 (offer-button-arrow-fix)
- Removed whitespace-nowrap/overflow-hidden/text-ellipsis from OfferSection buttons (was causing "...")
- Moved → arrow into cta strings for all 4 cards; first two now show full text without truncation
- File: src/sections/OfferSection/index.tsx

## 2026-04-29 (offer-button-nowrap)
- Added whitespace-nowrap + text-ellipsis to OfferSection buttons so text stays on one line (reverted next session)
- File: src/sections/OfferSection/index.tsx

## 2026-04-29 (offer-button-size)
- OfferSection card buttons: text-sm → text-sm md:text-base
- File: src/sections/OfferSection/index.tsx

## 2026-04-29 (about-doctor-tags-size)
- Doctor specialty tag (Neuroshumënicë, EEG, etj.) font: text-xs → text-sm md:text-base
- File: src/sections/AboutSection/index.tsx

## 2026-04-29 (about-doctor-desc-color-zinc700)
- Fixed Dr. Marvin and Dr. Artemisa description color: text-zinc-500 → text-zinc-700
- File: src/sections/AboutSection/index.tsx

## 2026-04-29 (about-pillar-diff-desc-size)
- Fixed AboutSection pillar cards and differentiator cards desc: text-sm text-zinc-500 → text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/sections/AboutSection/index.tsx

## 2026-04-29 (online-programs-card-desc-size)
- Updated feature card descriptions in OnlineProgramsSection from text-xs to text-sm leading-relaxed text-zinc-700 md:text-base
- Updated bottom "Akses i përhershëm" card description to same style
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-29 (offer-whydiff-desc-size)
- Updated description text in OfferSection cards and WhyDifferentSection pillars to text-sm leading-relaxed text-zinc-700 md:text-base
- Files: src/sections/OfferSection/index.tsx, src/sections/WhyDifferentSection/index.tsx

## 2026-04-29 (about-doctor-desc-size)
- Updated Dr. Marvin and Dr. Artemisa description text to text-sm leading-relaxed text-zinc-500 md:text-base (kept color unchanged)
- File: src/sections/AboutSection/index.tsx

## 2026-04-29 (hero-badge-text-style)
- Changed hero badge text (Shkencë+Spiritualitet, Transformim i Thellë, Harmoni) to text-sm leading-relaxed text-zinc-700 md:text-base
- File: src/sections/HeroSection/index.tsx

## 2026-04-29 (online-programs-card-grid-fix)
- Fixed card grid layout: removed staggered mt-6 offsets, now 2x2 grid + full-width bottom card
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-28 (lemonmilk-font-global)
- Added LemonMilk as global font: @font-face in tailwind.css, body font-family set, added to tailwind.config.js fontFamily.sans + lemonmilk key
- Files: tailwind.css, tailwind.config.js

## 2026-04-28 (footer-logo-update-v4)
- Replaced footer logo with new outline meditation figure PNG (white outline on transparent bg)
- URL: uploaded-asset-1777384369435-0.png
- File: src/sections/Footer/components/FooterLinks.tsx

## 2026-04-28 (blog-card-title-reduce)
- Blog card title reduced: text-base md:text-2xl → text-sm md:text-xl
- File: src/pages/Blog.tsx

## 2026-04-28 (video-testimonials-embed-support)
- Added YouTube/Vimeo/direct-video embed support to VideoTestimonials page
- getEmbedUrl() detects link type and renders iframe or <video> accordingly
- Placeholder still shows when src is empty
- File: src/pages/VideoTestimonials.tsx

## 2026-04-28 (faq-question-match-desc-size)
- FAQ question text reduced from text-xl (20px) → text-lg (18px) to match description paragraph size
- File: src/sections/FAQSection/index.tsx

## 2026-04-28 (shop-meditime-card-desc-typography)
- Updated product card description paragraph in Shop.tsx: text-sm → text-lg font-normal text-zinc-500 leading-relaxed
- Applies to all product cards (Evente, Trajnime, Meditime sections)
- File: src/pages/Shop.tsx

## 2026-04-28 (shop-evente-desc-typography)
- Updated Evente section description paragraph: text-sm → text-lg font-normal text-zinc-500 leading-relaxed
- File: src/pages/Shop.tsx

## 2026-04-28 (workshope-remove-icons)
- Removed emoji icons (⚡ 🧠) from "Çfarë do të mësosh gjithashtu" accordion items
- File: src/pages/Workshope.tsx

## 2026-04-28 (qendrimi-sejshpejti-grey)
- Changed "Së shpejti" button in Qëndrimi section from violet pill to grey uppercase text (matching Vlerësime style)
- File: src/pages/Workshope.tsx

## 2026-04-28 (workshope-pill-style)
- Styled "Qëndrimi" heading as pill (EDE9FD bg, C4B5FD border, 9D8FEF text) to match other sections
- Unified "Vlerësime" pill style to same pattern (was bg-violet-100 text-violet-700, no border)
- File: src/pages/Workshope.tsx

## 2026-04-28 (testimonials-banner-desc-white)
- Changed category banner description text to white (was text-violet-200 text-zinc-500 conflict)
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-28 (footer-text-larger)
- Increased all footer text: xs → sm for links, paragraph, copyright; sm → base for column headings
- File: src/sections/Footer/components/FooterLinks.tsx

## 2026-04-28 (blog-card-title-smaller)
- Card title reduced by 8px: text-lg/md:text-3xl → text-base/md:text-2xl
- File: src/pages/Blog.tsx

## 2026-04-28 (blog-typography-fix)
- Card titles: text-base font-semibold text-zinc-800 → text-lg/md:text-3xl font-bold text-zinc-900
- Card excerpts: text-sm text-zinc-400 → text-lg text-zinc-500 leading-relaxed
- Modal paragraphs: text-zinc-700 text-base → text-lg text-zinc-500 leading-relaxed
- File: src/pages/Blog.tsx

## 2026-04-28 (meditime-card-title-smaller)
- Reduced card title: text-2xl md:text-3xl → text-lg (18px) as requested
- File: src/pages/Meditime.tsx

## 2026-04-28 (meditime-typography-fix)
- Card headings: text-base text-zinc-800 → text-2xl/md:text-3xl font-bold text-zinc-900
- Card descriptions: text-sm → text-lg text-zinc-500 leading-relaxed
- CTA paragraph: text-base → text-lg leading-relaxed
- File: src/pages/Meditime.tsx

## 2026-04-28 (faq-answer-typography-fix)
- Fixed all FAQ answer paragraphs: text-sm/base text-zinc-600 → text-lg text-zinc-500 leading-relaxed
- Fixed list items and listIntro/listOutro text same way
- Fixed footer CTA paragraph: text-sm → text-lg leading-relaxed
- File: src/sections/FAQSection/index.tsx

## 2026-04-28 (kontakt-typography-fix)
- Fixed intro paragraph: text-zinc-600 text-base → text-zinc-500 text-lg leading-relaxed
- Fixed CTA dark section paragraph: text-base → text-lg (text-white/70 preserved)
- File: src/pages/Kontakt.tsx

## 2026-04-28 (trajnime-typography-uniform)
- Fixed all small text in TrajnimeOnline.tsx: text-sm/xs → text-lg/base throughout pillars, programItems, meditations, results
- Fixed card description div from text-zinc-600 text-sm → text-zinc-500 text-base
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-28 (retreat-faq-answer-size)
- Increased Retreat FAQ answer text: text-sm → text-lg in the expanded answer panel
- File: src/pages/Retreat.tsx

## 2026-04-28 (retreat-faq-question-size)
- Updated Retreat page FAQ question text: text-sm font-semibold text-zinc-800 → text-xl font-normal leading-relaxed text-zinc-500
- File: src/pages/Retreat.tsx

## 2026-04-28 (faq-question-size-up)
- Increased FAQ question text from text-lg (18px) to text-xl (20px), keeping font-normal, text-zinc-500, leading-relaxed
- File: src/sections/FAQSection/index.tsx

## 2026-04-28 (shtyllat-e-punes-typography)
- Standardized pillar card headings: text-lg → text-2xl/md:text-3xl font-bold text-zinc-800
- Standardized descriptions and benefit list items: text-sm → text-lg text-zinc-500 leading-relaxed
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-28 (philosophy-quote-fontsize)
- Matched blockquote paragraph to standard: text-sm/base → text-lg text-zinc-500 leading-relaxed
- File: src/sections/PhilosophySection/index.tsx

## 2026-04-28 (featured-retreat-card-fontsize)
- Increased stat values text-lg → text-2xl, labels text-[10px] → text-xs, includes list text-xs → text-sm
- File: src/sections/FeaturedRetreatSection/index.tsx

## 2026-04-28 (homepage-typography-uniform)
- Standardized all homepage section headings to text-2xl/md:text-3xl font-bold text-zinc-900
- Standardized all paragraphs to text-lg text-zinc-500 leading-relaxed
- Files: OfferSection, FAQSection, PhilosophySection, TestimonialsSection, ContactBannerSection

## 2026-04-28 (misioni-remove-closing-sentence)
- Removed closing sentence "Ju jeni krijues…" and the divider line above it from the dark section
- File: src/pages/Misioni.tsx

## 2026-04-28 (misioni-bullets-uniform)
- Made all 3 bullet points in dark section identical: same size (text-base/lg), color (text-white/70), italic, same dot size
- File: src/pages/Misioni.tsx

## 2026-04-28 (misioni-dark-section-redesign)
- Redesigned dark CTA section in Misioni.tsx: larger heading with #9D8FEF accent, bullet-point list layout for three statements, cleaner spacing
- File: src/pages/Misioni.tsx

## 2026-04-28 (misioni-metodologjia-pill-color)
- Changed "METODOLOGJIA JONË" pill text color from text-violet-200 to #9D8FEF in Misioni.tsx
- File: src/pages/Misioni.tsx

## 2026-04-28 (misioni-typography-uniform)
- Standardized all body paragraphs in Misioni.tsx from text-sm to text-lg text-zinc-500 leading-relaxed
- Updated mission section, methodology card, results list, and CTA paragraph
- File: src/pages/Misioni.tsx

## 2026-04-28 (rreth-nesh-cta-typography)
- Fixed CTA section at bottom of RrethNesh.tsx: h2 text-3xl/4xl font-light → text-2xl/3xl font-bold text-zinc-900
- Paragraph: text-base → text-lg text-zinc-500 leading-relaxed
- File: src/pages/RrethNesh.tsx

## 2026-04-28 (trajnimeonline-typography-uniform)
- Standardized all headings to text-2xl/md:text-3xl font-bold text-zinc-900
- Standardized all paragraphs to text-lg text-zinc-500 leading-relaxed
- Fixed practice items h3 from text-lg/xl to text-2xl/3xl
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-28 (eventet-remove-hero-title)
- Removed "Eventet tona" h1 title from Eventet page hero section
- File: src/pages/Eventet.tsx

## 2026-04-28 (eventet-shop-hero-center)
- Centered hero content (badge/title/desc/cart button) in both Eventet and Shop pages
- Shop hero: changed from flex justify-between to flex-col items-center text-center
- Files: src/pages/Eventet.tsx, src/pages/Shop.tsx

## 2026-04-28 (eventet-hero-center-v2)
- Re-enforced Eventet hero centering: added justify-center + w-full + explicit text-center on h1 and p tags
- File: src/pages/Eventet.tsx

## 2026-04-28 (shoplibrat-hero-cart-center)
- Centered cart button in ShopLibrat hero: flex-col + items-center + text-center layout
- Removed flex justify-between, cart button now sits below the description, centered
- File: src/pages/ShopLibrat.tsx

## 2026-04-28 (shoplibrat-hero-bg-image)
- Added event hall photo as background to ShopLibrat hero section
- Replaced solid #C3B1E1 bg with background-image + rgba(0,0,0,0.55) overlay
- File: src/pages/ShopLibrat.tsx

## 2026-04-28 (eventet-hero-retreat-style)
- Redesigned Eventet page hero to match Retreat style: centered layout, pill badge, title with #9D8FEF colored word, description, dark overlay
- Removed features grid and side button from the old hero
- File: src/pages/Eventet.tsx

## 2026-04-28 (shop-hero-bg-image)
- Added event hall photo as background image to Shop page hero section
- Added rgba(0,0,0,0.55) dark overlay for text readability
- File: src/pages/Shop.tsx

## 2026-04-28 (rezultateshkencore-cta-black)
- Changed CTA banner background from #9D8FEF (purple) to #000000 (black) in RezultatetShkencore
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-28 (rezultatet-shkencore-hero-darker-overlay)
- Increased RezultatetShkencore hero overlay from rgba(0,0,0,0.35) to rgba(0,0,0,0.55)
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-28 (rezultatet-shkencore-hero-videotestimonials-style)
- Restyled RezultatetShkencore hero to match VideoTestimonials: pill badge (bg-white/15, border-white/20), overlay rgba(0,0,0,0.35), py-32 layout
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-28 (workshope-cta-black-bg)
- Changed "Regjistrohu tani" CTA banner background from rose-to-violet gradient to solid black (#000000)
- File: src/pages/Workshope.tsx

## 2026-04-28 (workshope-cards-black)
- Changed day cards top border and number boxes (01/02/03) from colorful gradients to solid black (#18181b)
- File: src/pages/Workshope.tsx

## 2026-04-28 (workshope-programi-pill)
- Restyled "PROGRAMI" pill in Workshope program section to lavender: #eeeaf9 bg, #c4baf7 border, #9D8FEF text
- File: src/pages/Workshope.tsx

## 2026-04-28 (workshope-intensive-color)
- Changed "Intensive" word color in Workshope hero from text-rose-200 to #9D8FEF
- File: src/pages/Workshope.tsx

## 2026-04-28 (misioni-remove-transformo-text)
- Removed "Transformo Jetën Tënde" label text from the CTA section at bottom of Misioni page
- File: src/pages/Misioni.tsx

## 2026-04-28 (faq-badge-retreat-style)
- Restyled "Pyetje të Shpeshta" badge in FAQSection to RETREAT pill: #eeeaf9 bg, #c4baf7 border, #9D8FEF text
- File: src/sections/FAQSection/index.tsx

## 2026-04-28 (online-programs-badge-retreat-style)
- Restyled "Trajnime Online" badge in OnlineProgramsSection to exact RETREAT pill: #eeeaf9 bg, #c4baf7 border, #9D8FEF text
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-28 (hero-trajnime-badge-retreat-match)
- Restyled "Shiko Trajnimet Online" pill to exact RETREAT badge style: #eeeaf9 bg, #c4baf7 border, #9D8FEF text
- File: src/sections/HeroSection/index.tsx

## 2026-04-28 (hero-btn-9d8fef)
- Changed "Rezervo Retreat-in" hero button color from violet-600 to #9D8FEF
- File: src/sections/HeroSection/index.tsx

## 2026-04-28 (hero-overlay-darker)
- Increased homepage HeroSection overlay opacity from 0.35 to 0.55 for better text readability
- File: src/sections/HeroSection/index.tsx

## 2026-04-28 (workshope-hero-overlay-fix)
- Changed Workshope hero overlay from violet gradient to rgba(0,0,0,0.35) matching Retreat style
- File: src/pages/Workshope.tsx

## 2026-04-28 (eventet-hero-bg-new-photo)
- Changed Eventet hero background to the new uploaded event hall photo (audience/blue floor)
- File: src/pages/Eventet.tsx

## 2026-04-28 (kontakt-cards-bg-f9fafb)
- Changed all 6 contact cards background from bg-white to #F9FAFB
- File: src/pages/Kontakt.tsx

## 2026-04-28 (kontakt-remove-message-icon)
- Removed MessageCircle icon from the response time banner on Kontakt page
- File: src/pages/Kontakt.tsx

## 2026-04-28 (kontakt-hero-darker-overlay)
- Added rgba(0,0,0,0.55) dark overlay on Kontakt page hero for better text readability
- File: src/pages/Kontakt.tsx

## 2026-04-28 (navbar-cta-black)
- Changed AL/EN toggle, Hyrja link, Regjistrohu button, and cart icon from violet to black
- File: src/sections/Navbar/index.tsx

## 2026-04-28 (faq-category-text-black)
- Changed inactive category tab text color from #9D8FEF to #18181b (black) in FAQSection
- File: src/sections/FAQSection/index.tsx

## 2026-04-27 (kontakt-cta-black-bg)
- Changed "Gati të filloni?" CTA banner background from violet gradient to solid black (#000000)
- Changed "Rezervo Retreat-in" button text from text-violet-700 to text-black
- File: src/pages/Kontakt.tsx

## 2026-04-27 (kontakt-cards-redesign)
- Redesigned contact cards to white bg + gray border style matching screenshot reference
- Label text now zinc-400, value text zinc-800 bold, layout matches 2-col grid with colored icons
- Added intro description paragraph above cards, reordered Email before TikTok
- Response banner changed to gray-50 bg with #9D8FEF accent on "24 orëve"

## 2026-04-27 (kontakt-hero-no-overlay)
- Removed violet-900/65 dark overlay from Kontakt page hero section
- File: src/pages/Kontakt.tsx

## 2026-04-27 (hero-overlay-retreat-style)
- Changed hero overlay from bg-black/55 to rgba(0,0,0,0.35) matching Retreat page style
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (hero-section-bg-image)
- Replaced homepage HeroSection background with event hall photo (uploaded-asset-1777298905998-0.jpeg)
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (eventet-hero-bg-image)
- Added event hall photo as hero background on Eventet page
- Applied rgba(0,0,0,0.45) dark overlay for text readability
- File: src/pages/Eventet.tsx

## 2026-04-27 (shop-9d8fef-accents)
- Changed section icon gradient, "produkte" badge, product subtitles, and "Shto" buttons to #9D8FEF
- Updated both sectionConfig entries (Evente & Trajnime) accent + tag colors
- File: src/pages/Shop.tsx

## 2026-04-27 (eventet-hero-9d8fef)
- Changed Eventet hero background from rose/pink/purple gradient to solid #9D8FEF
- Updated card headers, subtitles, CTA buttons, and bottom banner to match #9D8FEF theme
- File: src/pages/Eventet.tsx

## 2026-04-27 (meditime-cta-black)
- Changed CTA banner background from #9D8FEF to solid black (#000000)
- Changed "Shiko Trajnimet Online" button text color from #9D8FEF to black
- File: src/pages/Meditime.tsx

## 2026-04-27 (meditime-cta-9d8fef)
- Changed CTA banner background from violet gradient to solid #9D8FEF
- Updated "Shiko Trajnimet Online" button text color from violet-700 to #9D8FEF
- File: src/pages/Meditime.tsx

## 2026-04-27 (meditime-hero-retreat-style)
- Replaced violet gradient overlay on Meditime hero with rgba(0,0,0,0.35) flat dark matching Retreat style
- Changed gradient accent text "Avancuara" to solid #9D8FEF, text/70 → text/80
- File: src/pages/Meditime.tsx

## 2026-04-27 (blog-modal-header-9d8fef)
- Changed blog post modal header background from per-post gradient to solid #9D8FEF
- Changed "Mbyll" button from violet-600 to solid #9D8FEF
- File: src/pages/Blog.tsx

## 2026-04-27 (blog-category-badges-black)
- Changed all category badge colors to solid black (bg-black text-white)
- File: src/pages/Blog.tsx

## 2026-04-27 (blog-hero-new-bg)
- Replaced Blog hero background with event/dance photo (uploaded-asset-1777298085111-0.jpeg)
- Increased dark overlay from rgba(0,0,0,0.35) to rgba(0,0,0,0.52) for readability
- File: src/pages/Blog.tsx

## 2026-04-27 (blog-hero-retreat-style)
- Replaced violet gradient overlay on Blog hero with rgba(0,0,0,0.35) flat dark matching Retreat style
- Changed gradient accent text "Transformim" to solid #9D8FEF, pill badge to white/15 matching Retreat
- File: src/pages/Blog.tsx

## 2026-04-27 (rezultatet-shkencore-banners-9d8fef)
- Changed "Çfarë kemi arritur" banner header from violet gradient to solid #9D8FEF
- Changed stat cards inside banner from violet-50/violet-700 to #F3F0FF/#9D8FEF
- Changed bottom CTA banner from violet gradient to solid #9D8FEF
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-27 (rezultatet-shkencore-gamma-9d8fef)
- Changed "Gjendja e Superndërgjegjes" title from violet gradient to solid #9D8FEF
- Changed both card headers ("Çfarë janë valët Gamma?" & "Çfarë ndodh në tru?") from violet gradient to #9D8FEF
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-27 (rezultatet-shkencore-stat-color)
- Changed stat card values (100%, 3, Para & Pas, ≥40Hz) from text-violet-700 to #9D8FEF
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-27 (rezultatet-shkencore-hero-retreat-style)
- Replaced purple gradient overlay on RezultatetShkencore hero with rgba(0,0,0,0.35) matching Retreat style
- Changed gradient accent text to solid #9D8FEF, updated pill badge to white/70
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-27 (video-testimonials-cta-black)
- Changed CTA banner background from violet gradient to solid black (#000000)
- File: src/pages/VideoTestimonials.tsx

## 2026-04-27 (video-testimonials-hero-retreat-style)
- Replaced violet gradient overlay on VideoTestimonials hero with rgba(0,0,0,0.35) flat dark matching Retreat style
- Changed gradient accent text to solid #9D8FEF, updated pill badge to match Retreat style
- File: src/pages/VideoTestimonials.tsx

## 2026-04-27 (testimonials-hero-retreat-style)
- Replaced violet gradient overlay on Testimonials hero with rgba(0,0,0,0.35) flat dark matching Retreat style
- Changed "pjesëmarrësit tanë" gradient text to solid #9D8FEF, updated pill badge to match Retreat style
- File: src/pages/Testimonials.tsx

## 2026-04-27 (trajnime-cta-button-9d8fef)
- Changed "Regjistrohu tani" CTA button from violet gradient to solid #9D8FEF
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-27 (trajnime-banner-black)
- Changed "Programi i Ri" highlight banner bg from violet gradient to solid black (#000000)
- Removed 👩‍⚕️ emoji icon from the banner
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-27 (trajnime-program-cards-bg)
- Changed "Programi 6 Javë" cards background from bg-violet-50 to #F9FAFB
- Removed emoji icons from program cards
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-27 (trajnime-cfare-card-bg)
- Changed "Çfarë do të mësosh?" card background from violet gradient to #F9FAFB
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-27 (trajnime-9d8fef-colors)
- Applied #9D8FEF to all violet elements: stat values, section labels, circles, accordion buttons, checkmarks
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-27 (trajnime-hero-buttons-removed)
- Removed "Regjistrohu tani" and "Shiko programin" buttons from TrajnimeOnline hero
- Kept dark rgba(0,0,0,0.35) overlay matching Retreat style
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-27 (trajnime-hero-retreat-style)
- Replaced purple gradient overlay on TrajnimeOnline hero with flat rgba(0,0,0,0.35) matching Retreat
- Changed "6 Javor" gradient text to solid #9D8FEF span, removed uppercase subtitle, kept CTA buttons
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-27 (retreat-cta-button-color)
- Changed "Rezervo vendin tënd" CTA button from violet gradient to solid #9D8FEF
- File: src/pages/Retreat.tsx

## 2026-04-27 (retreat-testimonial-circles)
- Changed testimonial quote mark circle and avatar "P" circle from violet gradient to #9D8FEF
- File: src/pages/Retreat.tsx

## 2026-04-27 (retreat-pricing-color)
- Changed total prices (864€, 1,116€) and companion prices (364€, 182€/364€, 255€/364€) from text-violet-600 to #9D8FEF
- File: src/pages/Retreat.tsx

## 2026-04-27 (retreat-included-items-bg)
- Changed "Çfarë përfshin retreat-i" included item cards from bg-violet-50 to #F9FAFB
- File: src/pages/Retreat.tsx

## 2026-04-27 (retreat-card-bg-f9fafb)
- Changed "Çfarë është retreat-i ynë?" card background from violet gradient to #F9FAFB
- File: src/pages/Retreat.tsx

## 2026-04-27 (retreat-circles-9d8fef)
- Changed numbered reason circles (1–6) and checkmark included circles from bg-violet-600 to #9D8FEF
- File: src/pages/Retreat.tsx

## 2026-04-27 (retreat-9d8fef-elements)
- Applied #9D8FEF color to: stat card values (8 Ditë, Hotel 5★, etc.), "Ftesa jonë" label, and focus italic text
- File: src/pages/Retreat.tsx

## 2026-04-27 (retreat-hero-meditimi-color)
- Changed "Meditimi" in Retreat hero from violet gradient to solid #9D8FEF
- File: src/pages/Retreat.tsx

## 2026-04-27 (retreat-hero-pill-text)
- Removed icon (✦) and "2026" from Retreat hero pill badge — now shows only "Retreat"
- File: src/pages/Retreat.tsx

## 2026-04-27 (retreat-hero-buttons-overlay)
- Removed "Rezervo vendin tënd" and "Shiko çmimet" buttons from Retreat hero
- Changed overlay from violet gradient to rgba(0,0,0,0.35) flat dark (matches RrethNesh/Kush jemi)
- File: src/pages/Retreat.tsx

## 2026-04-27 (cta-pill-removed)
- Removed "TRANSFORMO JETËN TËNDE" pill badge from CTABannerSection entirely
- File: src/sections/CTABannerSection/index.tsx

## 2026-04-27 (cta-pill-distinct)
- Made CTABannerSection pill badge more visually distinct: stronger purple border (#9D8FEF), #7C3AED text, outer glow ring
- File: src/sections/CTABannerSection/index.tsx

## 2026-04-27 (cta-pill-inline-fix)
- Replaced Tailwind pill classes with full inline styles on CTABannerSection badge to ensure bg/border render correctly
- File: src/sections/CTABannerSection/index.tsx

## 2026-04-27 (misioni-dark-section-pill)
- Styled dark-bg "Misioni ynë" label in bottom dark section of Misioni.tsx as pill badge (rgba white bg, #C4B5FD text, violet border, backdrop-blur)
- File: src/pages/Misioni.tsx

## 2026-04-27 (misioni-galeria-pill)
- Styled "Galeria" label in Misioni.tsx gallery section as pill badge (#EDE9FD bg, #9D8FEF text, #C4B5FD border)
- File: src/pages/Misioni.tsx

## 2026-04-27 (misioni-transformimi-pill)
- Styled "Transformimi" section label in Misioni.tsx results section as pill badge (#EDE9FD bg, #9D8FEF text, #C4B5FD border)
- File: src/pages/Misioni.tsx

## 2026-04-27 (misioni-yne-pill)
- Styled "Misioni ynë" label in Misioni.tsx mission section as pill badge (#EDE9FD bg, #9D8FEF text, #C4B5FD border)
- File: src/pages/Misioni.tsx

## 2026-04-27 (rreth-nesh-bottom-cta-pill)
- Styled "Transformo Jetën Tënde" label in RrethNesh bottom CTA section as pill badge
- Same style: #EDE9FD bg, #9D8FEF text, #C4B5FD border, rounded-full
- File: src/pages/RrethNesh.tsx

## 2026-04-27 (cta-banner-pill-badge)
- Added pill badge "TRANSFORMO JETËN TËNDE" above heading in CTABannerSection
- Same style as RrethNesh pills: #EDE9FD bg, #9D8FEF text, #C4B5FD border, rounded-full
- File: src/sections/CTABannerSection/index.tsx

## 2026-04-27 (rreth-nesh-all-labels-pills)
- Styled all section label spans in RrethNesh.tsx as pill badges (rounded-full, border, bg #EDE9FD/#9D8FEF on light, rgba on dark bg)
- Affected: Çfarë bëjmë, Baza shkencore, Çfarë na bën ndryshe, Grante prestigjioze, Fushat e kërkimit, Metoda jonë, Eksperienca & Kërkimi
- File: src/pages/RrethNesh.tsx

## 2026-04-27 (rreth-nesh-kush-jemi-badge)
- Styled "Kush jemi" label in description section as pill badge: #EDE9FD bg, #9D8FEF text, #C4B5FD border, rounded-full
- File: src/pages/RrethNesh.tsx

## 2026-04-27 (rreth-nesh-cta-9d8fef-fix)
- Fixed RrethNesh bottom CTA: badge, accent text "jetën tuaj të re." and "Rezervo Retreat-in" button all set to #9D8FEF (were #C3B1E1)
- File: src/pages/RrethNesh.tsx

## 2026-04-27 (shtyllat-description-text-size)
- Changed pillar description text from text-base to text-sm to match benefits list size
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-27 (shtyllat-hero-fade-in)
- Added heroVisible fade-in animation to ShtyllatEPunes hero content (same as RrethNesh)
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-27 (shtyllat-badge-title-fix)
- Changed hero badge text from "Baza shkencore e punës sonë" to "Shtyllat e Punës"
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-27 (shtyllat-hero-match-rreth-nesh)
- Updated ShtyllatEPunes hero to match RrethNesh style: min-h-[52vh], rgba(0,0,0,0.35) overlay, pill badge with blur, large title + #C4B5FD accent
- Removed gradient overlay; now uses flat dark overlay like RrethNesh and Misioni
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-27 (rreth-nesh-hero-redesign)
## 2026-04-27 (shtyllat-hero-match-rreth-nesh)
- Updated ShtyllatEPunes hero to match RrethNesh style: min-h-[52vh], rgba(0,0,0,0.35) overlay, pill badge with blur, large title + #C4B5FD accent
- Removed gradient overlay; now uses flat dark overlay like RrethNesh and Misioni
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-27 (rreth-nesh-hero-redesign)
- Redesigned RrethNesh hero to: centered layout, solid purple overlay, pill badge, large white title + violet-300 accent word, white/80 subtitle
- Matches style from reference image (Meditime page hero pattern)
- File: src/pages/RrethNesh.tsx

## 2026-04-27 (contact-bottom-divider-removed)
- Removed bottom `h-px` lela gradient divider from ContactBannerSection
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-27 (cta-banner-cleanup)
- Removed "FILLO SOT" badge + horizontal lines divider from CTABannerSection
- Changed "Shiko trajnimet online" button to black border + black text (was #9D8FEF)
- Removed "Pa asnjë detyrim..." small text below buttons
- File: src/sections/CTABannerSection/index.tsx

## 2026-04-27 (cta-banner-9d8fef-v2)
- Applied #9D8FEF to "Shiko trajnimet online" button border + text (was violet-200/700)
- Applied #9D8FEF to badge lines and "Fillo sot" label (was violet-300/200)
- File: src/sections/CTABannerSection/index.tsx

## 2026-04-27 (cta-banner-9d8fef)
- Changed "hapin e parë?" accent text from violet gradient to solid #9D8FEF
- Changed "Rezervo Retreat-in" button from violet gradient to solid #9D8FEF background
- File: src/sections/CTABannerSection/index.tsx

## 2026-04-27 (contact-cards-grey-borders)
- Changed all contact card borders from black (zinc-900/#18181b) to grey (zinc-300/#d4d4d8)
- Affected: all 6 cards + bottom message bar in ContactBannerSection
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-27 (contact-cards-black-border-names)
- Changed all contact card borders to black (zinc-900 / #18181b)
- Changed all colored handle/link texts (green, pink, blue, red, purple) to zinc-800
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-27 (contact-cards-f9fafb)
- Changed all 6 contact card + bottom message bar backgrounds to #F9FAFB in ContactBannerSection
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-27 (contact-banner-9d8fef)
- Applied #9D8FEF to ContactBannerSection: badge, "për ju" text, MessageCircle icon, "24 orëve" bold, email card bg/border/text, bottom divider
- Rewrote file via write_to_file after 3 consecutive replace_in_file failures
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-27 (faq-section-9d8fef)
- Applied #9D8FEF to FAQSection: badge, "të Dini" gradient, active tab, number circles, chevron, border-open, list dots, "Na kontaktoni" link
- File: src/sections/FAQSection/index.tsx

## 2026-04-27 (trajnime-online-badge-exact)
- Matched "TRAJNIME ONLINE" badge exactly: rounded-full, #E8E4F9 bg, no border, #9D8FEF text, tracking-[0.25em]
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-27 (philosophy-9d8fef)
- Applied #9D8FEF to PhilosophySection: "energjia" text, underline, pillar icons, arrows, "Harmoni" pill, quote mark
- Removed gradient coloring from "energjia," and pillar cards; unified to #9D8FEF / #F3F0FF palette
- File: src/sections/PhilosophySection/index.tsx

## 2026-04-27 (online-programs-badge-pill)
- Changed "Trajnime Online" badge to pill style (rounded-full, #EDE9FF bg, #DDD6FE border, #9D8FEF text)
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-27 (online-programs-card-bg-f9fafb)
- Changed feature card backgrounds from white to #F9FAFB in OnlineProgramsSection
- Affected: all 4 feature cards + infinity card
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-27 (online-programs-icon-black-bg)
- Changed feature icon card backgrounds from #9D8FEF to #000000 (black) in OnlineProgramsSection
- Affected: all 4 feature icon cards + infinity card icon
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-27 (online-programs-9d8fef)
- Changed all violet/purple colors in OnlineProgramsSection to #9D8FEF
- Affected: badge, underline, bullet dots, button, feature icon cards, infinity card, borders
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-27 (why-different-circles-reverted-to-9d8fef)
- Reverted pillar number circles (01–05) back to #9D8FEF style (light purple bg + border + text)
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-27 (why-different-black-number-circles-fix)
- Re-applied black circles (01–05): background #000000, border 2px solid #000000, white text
- Restarted dev server to force changes to reflect
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-27 (retreat-card-black-stats-dots)
- Changed stat numbers (7 Ditë, 20+, 30) color from #9D8FEF to #000000
- Changed bullet list dots in "Çfarë Përfshin" from #9D8FEF to #000000
- File: src/sections/FeaturedRetreatSection/index.tsx

## 2026-04-27 (retreat-card-7days-no-badges)
- Changed "5 Ditë" → "7 Ditë" in stat grid
- Removed "Retreat 2026" and "Vende të kufizuara" badges from card image overlay
- File: src/sections/FeaturedRetreatSection/index.tsx

## 2026-04-27 (featured-retreat-card-image)
- Added hosted retreat image to FeaturedRetreatSection right card header (replaced gradient bg)
- Image: uploaded-asset-1777289586460-0.png (Retreat Meditimi 26 Prill – 3 Maj 2026)
- File: src/sections/FeaturedRetreatSection/index.tsx

## 2026-04-27 (featured-retreat-badge-pill)
- Changed "Featured · Retreat 2026" badge in FeaturedRetreatSection to pill style (rounded-full, #F3F0FF bg, #DDD6FE border, #9D8FEF text, uppercase "RETREAT")
- File: src/sections/FeaturedRetreatSection/index.tsx

## 2026-04-27 (featured-retreat-9d8fef)
- Replaced all violet/purple color instances in FeaturedRetreatSection with #9D8FEF
- Affected: badge, title gradient, step numbers, border-left, CTA button, stat numbers, dots, card header
- File: src/sections/FeaturedRetreatSection/index.tsx

## 2026-04-27 (testimonials-cta-removed)
- Removed the CTA banner block ("Gati të shkosh...") from the bottom of TestimonialsSection
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-27 (testimonials-avatar-black-bg)
- Changed testimonial avatar circle backgrounds from color gradients to solid black (#000000)
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-27 (why-different-remove-vertical-line)
- Removed the animated vertical line from the pillars list in WhyDifferentSection
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-27 (why-different-circles-dash-quadrants-9d8fef)
- Changed pillar circle numbers (01–05) bg/border/text to #9D8FEF
- Changed "Qëllimi i vërtetë" dash/bar to #9D8FEF
- Changed quadrant tags (Trup, Mendje, Zemër, Energji) border/text/bg to #9D8FEF
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-27 (testimonials-stat-number-color)
- Changed outcome stat numbers (93%, 1200+, 87%, 4.9★) color from text-violet-700 to #9D8FEF
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-27 (testimonials-card-bg-tag-color)
- Changed testimonial card background from gradient to flat #F9FAFB
- Changed result tag dot and text color to #9D8FEF
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-27 (testimonials-white-border-no-icons)
- Active tab border changed to white (#ffffff) with white glow shadow
- Removed emoji icons from all 4 categories (tab cards and banner)
- Removed arrow icon from CTA button
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-27 (testimonials-tab-center-overlay)
- Centered tab card text (items-center + text-center) and added bg-black/40 overlay for readability
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-27 (testimonials-remove-overlay)
- Removed dark gradient overlays from category tab images and active banner image in TestimonialsSection
- Reduced brightness filter from 0.38-0.55 to 0.75-0.85 (tab cards) and from 0.45 to 0.75 (banner)
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-27 (why-different-subtitle-grey)
- Changed subtitle color from text-violet-700/80 to text-zinc-500 in WhyDifferentSection
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-27 (why-different-badge-pill)
- Changed "Pse jemi ndryshe" badge from horizontal lines + text to pill style matching OfferSection
- Color #9D8FEF, bg #F3F0FF, border #DDD6FE, rounded-full, centered
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-27 (why-different-card-f9fafb)
- Changed "Qëllimi i vërtetë" card background from violet gradient to #F9FAFB with #E5E7EB border
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-27 (why-different-black-titles)
- Changed main title, pillar labels, "Qëllimi i vërtetë", and badge text to black (#000000)
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-27 (offer-icons-black)
- Changed offer card icon backgrounds from #9D8FEF to #000000 (black)
- File: src/sections/OfferSection/index.tsx

## 2026-04-27 (offer-section-9d8fef)
- Changed OfferSection badge, "me ne" text, card tags, icon backgrounds, and CTA buttons to #9D8FEF
- File: src/sections/OfferSection/index.tsx

## 2026-04-27 (differentiators-bg-f9fafb)
- Changed differentiator cards (01-04) background from bg-purple-50/border-purple-100 to #F9FAFB/#E5E7EB
- File: src/sections/AboutSection/index.tsx

## 2026-04-27 (about-icons-9d8fef)
- Changed pillar icon background/color from violet-50/violet-600 to #F3F0FF/#9D8FEF
- File: src/sections/AboutSection/index.tsx

## 2026-04-27 (about-quote-black-bg)
- Changed mission quote section background from violet/fuchsia gradient to black (bg-zinc-900)
- File: src/sections/AboutSection/index.tsx

## 2026-04-27 (about-accent-9d8fef)
- Changed badge "Rreth Nesh", word "Transformon", and all skill tags to color #9D8FEF
- File: src/sections/AboutSection/index.tsx

## 2026-04-27 (doctor-cards-bg-f9fafb)
- Changed both doctor cards background from violet/fuchsia gradient to #F9FAFB
- Border updated to #E5E7EB (zinc-200)
- File: src/sections/AboutSection/index.tsx

## 2026-04-27 (about-section-remove-badges)
- Removed "🇨🇭 Zvicër" badge and specialty subtitle from both Dr. Marvin and Dr. Artemisa cards
- File: src/sections/AboutSection/index.tsx

## 2026-04-27 (about-section-violet-200)
- Changed "Transformon" word color from gradient (violet-600→purple-600) to text-violet-200
- Changed Dr. Marvin specialty color from text-violet-600 to text-violet-200
- Changed Dr. Artemisa specialty color from text-fuchsia-600 to text-violet-200
- File: src/sections/AboutSection/index.tsx

## 2026-04-27 (hero-subtitle-reduced)
- Reduced subtitle "Harmonizo zemrën..." from text-4xl/5xl/6xl → text-2xl/3xl/4xl
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (hero-remove-description-para)
- Removed description paragraph from HeroSection (Ne kombinojmë shkencën moderne...)
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (hero-dark-overlay)
- Added dark overlay (bg-black/55) on top of hero background image
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (hero-user-uploaded-photo)
- Replaced hero background with user-uploaded retreat event photo (purple-lit room with participants)
- URL: https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1777282802836-0.jpeg
## 2026-04-27 (hero-retreat-event-purple)
- Set hero background to retreat event photo (rectangle-37.png) with deep violet/purple overlay
- Updated title to "Rikthehu tek vetja. / Harmonizo zemrën, trurin dhe trupin."
- Badge changed to "Harmonizim Kuantik", buttons rounded-full, added "Zbulo" scroll indicator
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (pse-matje-remove-top-border)
- Removed border-t border-purple-100 from "Pse janë të rëndësishme këto matje?" section
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-27 (pse-matje-section-bg-f9fafb)
- Changed "Pse janë të rëndësishme këto matje?" section bg from purple-50/violet-50 gradient to #F9FAFB
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-27 (protokolli-section-bg-f9fafb)
- Changed "Protokolli i plotë i matjeve" section bg from purple-50/violet-50 gradient to #F9FAFB
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-27 (live-page-bg-f9fafb)
- Changed Live page from dark (bg-zinc-950 + purple gradients) to #F9FAFB light theme
- Updated all text: white→zinc-900/500, violet-400→violet-600, white/10→zinc-200 borders
- Empty state card: bg-violet-900/20→bg-white, icon circle bg-violet-100
- File: src/pages/Live.tsx

## 2026-04-27 (retreat-pricing-bg-f9fafb)
- Changed Retreat pricing section from dark gradient (violet-900→purple-900→zinc-900) to #F9FAFB
- All cards changed to bg-white with zinc-200 borders; companion section bg-white
- Text colors updated: white→zinc-800/600, violet-300→violet-600, white/60→zinc-500
- File: src/pages/Retreat.tsx

## 2026-04-27 (hero-bg-f9fafb)
- Removed full-bleed image + dark overlays from HeroSection
- Background set to #F9FAFB, all text updated to dark (zinc-900/violet-600/zinc-500)
- Badge, buttons, and dividers adapted for light theme
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (hero-equal-text-sizes)
- Title reduced: text-4xl/6xl/7xl → text-3xl/4xl/5xl to match subtitle size
- Subtitle kept: text-xl/3xl/4xl → text-2xl/3xl/4xl for near-equal pairing
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (hero-subtitle-scale-up)
- Subtitle rised: text-lg/2xl/3xl → text-xl/3xl/4xl for better proportion with main title
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (hero-subtitle-smaller-button-logo-color)
- Subtitle "Harmonizo zemrën..." reduced: text-2xl/4xl/5xl → text-lg/2xl/3xl, font-bold → font-semibold
- "Rezervo Retreat-in" button changed from violet-600 gradient to purple-800/violet-800 (logo color)
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (global-bg-f9fafb)
- Changed --background CSS var from violet/lavender (hsl 249 70% 75%) to #F9FAFB (hsl 220 14% 96%)
- Removed violet blur blob from CTABannerSection
- Files: tailwind.css, src/sections/CTABannerSection/index.tsx

## 2026-04-27 (contact-banner-remove-divider)
- Removed top horizontal gradient divider line from ContactBannerSection
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-27 (faq-remove-blobs)
- Removed two radial-gradient blur blob divs from FAQSection background
- File: src/sections/FAQSection/index.tsx

## 2026-04-27 (online-programs-clean-bg)
- Removed grid overlay, violet/purple blur blobs from OnlineProgramsSection background
- Background set to pure white (#ffffff), card gradient removed, circle blob inside cards removed
- Bottom bar changed from bg-violet-50 to bg-white
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-27 (featured-retreat-remove-blobs)
- Removed violet/purple blur blobs, grid overlay, and card glow from FeaturedRetreatSection
- Background stays solid #F9FAFB with no decorative overlays
- File: src/sections/FeaturedRetreatSection/index.tsx

## 2026-04-27 (whydifferent-remove-blobs)
- Removed violet/purple blur blobs and grid overlay from WhyDifferentSection background
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-27 (remove-all-shadows)
- Removed all shadow-* classes from every section and page across the entire project
- Files: all src/sections/* and src/pages/* components

## 2026-04-27 (cta-banner-bg-f9fafb)
- Changed CTABannerSection background from bg-white to #F9FAFB
- File: src/sections/CTABannerSection/index.tsx

## 2026-04-27 (philosophy-section-light)
- Changed PhilosophySection from dark (bg-zinc-950) to light (#F9FAFB background)
- Updated all text colors: white→zinc-900, zinc-400→zinc-600, violet-400→violet-600
- Updated pill/card borders and icon backgrounds to light variants
- File: src/sections/PhilosophySection/index.tsx

## 2026-04-27 (footer-all-white-text)
- Changed all footer text from text-purple-100/200/300 to text-white
- Link hover states updated from hover:text-white to hover:text-gray-300
- File: src/sections/Footer/components/FooterLinks.tsx

## 2026-04-27 (footer-bg-black)
- Changed footer background from purple (#9D8FEF) to black (#000000)
- File: src/sections/Footer/index.tsx

## 2026-04-27 (hero-subtitle-bigger-bold)
- Increased subtitle size: text-xl/2xl/3xl → text-2xl/4xl/5xl, font-normal → font-bold
- Subtitle now matches title weight/font exactly (same h1 span, font-bold)
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (hero-subtitle-white-small)
- Removed long paragraph description from HeroSection hero
- "Harmonizo zemrën, trurin dhe trupin." made smaller (text-xl→text-3xl) and white (no gradient)
- File: src/sections/HeroSection/index.tsx

## 2026-04-27 (about-section-doctor-bios)
- Replaced minimal doctor cards with full bio cards for Dr. Marvin Bundo & Dr. Artemisa Gogollari
- Added Swiss badge, specialization tags, real bio text, hover effects per card
- Updated mission quote to use real text from brief with author attribution line
- File: src/sections/AboutSection/index.tsx

## 2026-04-27 (footer-copyright-bosAl)
- Updated footer copyright to "© 2026 by Bos.al" with link to https://bos.al/ + "Të gjitha të drejtat e rezervuara."
- File: src/sections/Footer/components/FooterLinks.tsx

## 2026-04-27 (footer-icons-fix)
- Replaced MessageCircle (wrong) with real WhatsApp SVG path icon
- Replaced Music2 (wrong) with real TikTok SVG path icon
- File: src/sections/Footer/components/FooterLinks.tsx

## 2026-04-27 (footer-social-icons)
- Added all 6 real social links to Footer: WhatsApp (+355 69 242 0827), Email (info@artogogo.com), Instagram (@arte_gogo), Facebook, YouTube, TikTok (@dr.artegogo)
- Replaced placeholder hrefs with real URLs; added Music2 icon for TikTok (lucide has no TikTok icon)
- File: src/sections/Footer/components/FooterLinks.tsx

## 2026-04-24 (shop-cards-bilingual)
- Added titleEn, subtitleEn, descriptionEn fields to all 6 product cards in Shop.tsx
- ProductCard now uses t(title, titleEn), t(subtitle, subtitleEn), t(description, descriptionEn)
- BilingualProduct type added for type safety
- File: src/pages/Shop.tsx

## 2026-04-24 (shop-events-translate)
- Added useLanguage + t() translations to Shop.tsx (events section, hero, cart button, badges, product count)
- Section labels/descriptions now bilingual: labelAl/labelEn, descAl/descEn pattern
- Badge translations: "I ri"→"New", "Zbritje"→"Sale", Add/Cart/products all translated
- File: src/pages/Shop.tsx

## 2026-04-24 (translate-meditime-shop-books)
- Added useLanguage + t() translations to Meditime, ShopMeditime, ShopLibrat pages
- All UI text: hero, cards, CTAs, product titles/descriptions, buttons, highlights — fully bilingual AL/EN
- Files: src/pages/Meditime.tsx, src/pages/ShopMeditime.tsx, src/pages/ShopLibrat.tsx

## 2026-04-24 (misioni-font-fix)
- Fixed font weights in Misioni page to match other pages (Retreat, TrajnimeOnline, etc.)
- Hero h1: font-light → font-bold; all h2 headings: font-semibold → font-bold; font-light paragraphs cleaned
- File: src/pages/Misioni.tsx

## 2026-04-24 (rrethnesh-font-fix)
- Fixed font weights in RrethNesh page to match other pages (Retreat, TrajnimeOnline, etc.)
- Hero h1: font-light → font-bold; all h2 headings: font-semibold → font-bold
- File: src/pages/RrethNesh.tsx

## 2026-04-24 (kontakt-24h-centered)
- Moved "Ju përgjigjemi brenda 24 orëve" banner out of the grid and centered it below in Kontakt page
- File: src/pages/Kontakt.tsx

## 2026-04-24 (contactbanner-24h-centered)
- Moved "Ju përgjigjemi brenda 24 orëve" banner out of the grid and centered it below
- Wrapped in justify-center flex row with max-w-md for clean centered look
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-24 (contactbanner-email-card)
- Added email card (info@artogogo.com) to ContactBannerSection on homepage
- Card styled with violet gradient icon, matching existing card layout
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-24 (kontakt-email-card)
- Added email contact card (info@artogogo.com) to Kontakt page
- Card styled with violet gradient icon, same layout as other social cards
- File: src/pages/Kontakt.tsx

## 2026-04-24 (meditime-hero-bg-image)
- Added real event photo as hero background in Meditime page
- Image: uploaded-asset-1777032248494-0.jpeg (woman laughing at event)
- Gradient overlay: violet-900/85 → purple-900/80 → zinc-900/85 for text readability
- File: src/pages/Meditime.tsx

## 2026-04-24 (meditime-real-content)
- Replaced 6 placeholder meditation cards with 8 real meditations from brief
- Layout changed to 2-col horizontal cards with lucide icon + title + description
- Icons: Sparkles, Heart, Sunrise, Wind, Zap, Baby, Footprints, HandHeart
- Removed language toggle (t()) — content is Albanian only as provided
- File: src/pages/Meditime.tsx

## 2026-04-24 (online-programs-modern-icons)
- Replaced emoji icons (🎥🎧📋🌐∞) with lucide-react SVG icons in OnlineProgramsSection
- Icons: PlayCircle, Headphones, BookOpen, MapPin, Infinity — each with gradient bg pill
- File: src/sections/OnlineProgramsSection/index.tsx

## 2026-04-23 (workshope-hero-overlay-fix)
- Changed hero overlay from rose/pink red gradient to light violet (matching Retreat/TrajnimeOnline pages)
- File: src/pages/Workshope.tsx

## 2026-04-23 (workshope-hero-bg-image)
- Added workshop crowd meditation photo as hero background in Workshope.tsx
- Image: uploaded-asset-1776948791548-0.jpeg (people meditating in event hall)
- Gradient overlay: rose-700/80 → pink-800/75 → violet-900/85 for text readability
- File: src/pages/Workshope.tsx

## 2026-04-23 (workshope-full-redesign)
- Rebuilt Workshope page with new real content (3-day program, extras accordion, qëndrimi, vlerësime placeholder)
- Removed old placeholder workshop cards; added days: Rikthe energjinë, Ndjeje pasionin, Manifesto jetën
- Added accordion for "Matni balancën" & "Çliroje sistemin nervor"; "Qëndrimi" + "Vlerësime — Së shpejti" sections
- File: src/pages/Workshope.tsx

## 2026-04-23 (trajnime-practice-alternating)
- Added alternating text+image section "Praktika ditore & teknika speciale" to TrajnimeOnline
- 3 items: frymëmarrje dinamike, meditim manifestimi, bonus meditim në ecje
- Layout: text left / image right alternating (md:flex-row / md:flex-row-reverse)
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-23 (trajnime-online-style-match)
- Restyled TrajnimeOnline to match Retreat.tsx design language exactly
- Same structure: hero → stats bar → intro 2-col → pillars → program → accordion → results checklist → CTA
- Same classes: violet-50 border-y sections, white cards, violet-600 bullets, rounded-full buttons
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-23 (trajnime-online-full-redesign)
- Full redesign of TrajnimeOnline page with real HK 6-week program content
- Sections: Hero stats, 3 Pillars (Biologji/Transformim/Fizikë Kuantike), Program 6 Javë, Advanced Meditations accordion, Results checklist, CTA
- Kept real photo hero background + violet overlay; added floating stats (6 javë, 9 seanca, 7 Q&A)
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-23 (trajnime-hero-bg-image)
- Added real photo as background image to TrajnimeOnline hero section
- Image: uploaded-asset-1776947306379-0.png (woman meditating with laptop showing ARTEGOGO)
- Added violet/purple gradient overlay (80–85% opacity) on top for text readability
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-23 (retreat-vendi-all-6-photos)
- Replaced remaining 3 Unsplash placeholders (Ushqimi, Fasilitetet, Zonë e qetë) with real hotel photos
- Ushqimi: uploaded-asset-1776947079089-0.jpeg (gourmet plate)
- Fasilitetet: uploaded-asset-1776947079099-1.jpeg (indoor pool)
- Zonë e qetë: uploaded-asset-1776947079121-2.jpeg (hotel exterior + palm pool view)
- File: src/pages/Retreat.tsx

## 2026-04-23 (retreat-vendi-real-photos)
- Replaced Unsplash placeholders with real hotel photos for Vendi, Salla, Dhomat cards
- Vendi: uploaded-asset-1776946918258-0.jpeg (pool+beach aerial)
- Salla: uploaded-asset-1776946918266-1.jpeg (Fafa conference room)
- Dhomat: uploaded-asset-1776946918274-2.jpeg (hotel room with tropical wallpaper)
- File: src/pages/Retreat.tsx

## 2026-04-23 (retreat-vendi-section)
- Added "Vendi / Hotel" section to Retreat page with 3×2 image grid before pricing
- 6 cards: Vendi, Salla, Dhomat, Ushqimi, Fasilitetet, Zonë e qetë — each with photo + title + description
- Used Unsplash images as placeholders; bilingual AL/EN text
- File: src/pages/Retreat.tsx

## 2026-04-23 (retreat-testimonial-section)
- Added "Përshtypje nga eventi / Vlerësim nga pjesëmarrësit" section to Retreat page
- Full participant testimonial text (bilingual AL/EN) in a styled quote card with stars
- Inserted between FAQ and CTA sections
- File: src/pages/Retreat.tsx

## 2026-04-23 (retreat-full-rebuild)
- Rebuilt entire Retreat page with real content: hero, invitation text, program, pricing, FAQ, CTA
- Added 2 pricing variants (864€ / 1116€) + companion pricing table (adults, children 4-8, 9-10)
- Added "Për çfarë arsye mund të vish" section, included items, accordion FAQ
- File: src/pages/Retreat.tsx

## 2026-04-23 (retreat-hero-bg-image)
- Added meditation crowd photo as background image to Retreat hero section
- Image: uploaded-asset-1776945645841-0.jpeg (hosted on animaapp CDN)
- File: src/pages/Retreat.tsx

## 2026-04-23 (faq-hero-bg-image)
- Added photo background image to FAQ hero section with violet overlay
- Image: uploaded-asset-1776944742321-0.jpeg (hosted on animaapp CDN)
- File: src/pages/FAQ.tsx

## 2026-04-23 (faq-regjistrimi-only-q29-30)
- Removed all duplicate questions from "Regjistrimi & Akses" — kept only Q29 & Q30
- Q29: "Si mund të regjistrohem?" / Q30: "Ku mund ta marr më shumë info?"
- File: src/sections/FAQSection/index.tsx

## 2026-04-23 (faq-rename-category)
- Renamed "Programi & Materialet" → "Regjistrimi & Akses" (EN: "Registration & Access")
- File: src/sections/FAQSection/index.tsx

## 2026-04-23 (faq-programe-online-updated)
- Replaced "Programe Online" FAQ category questions with 9 real questions (Q20–Q28)
- Includes: si funksionon, orari, teoria, kontakti me mentorët, ushtrime, biologji, gjendja ditore, materialet
- File: src/sections/FAQSection/index.tsx

## 2026-04-23 (faq-retreat-category)
- Added new "Retreat" FAQ category (🏔️) with 10 questions (Q10–Q19)
- Inserted before "Programi & Materialet" category
- File: src/sections/FAQSection/index.tsx

## 2026-04-23 (faq-rezultatet-q9)
- Added Q9 "Po nëse nuk di të meditoj..." to "Rezultatet & Transformimi" category in FAQSection
- Updated Q8 answer apostrophes to HTML entities
- File: src/sections/FAQSection/index.tsx

## 2026-04-23 (language-toggle)
- Created src/context/LanguageContext.tsx with LanguageProvider, useLanguage hook, and t() helper
- Added LanguageProvider wrapper in App.tsx around CartProvider
- Added AL/EN pill toggle button (LangToggle) in Navbar desktop + mobile
- Navbar menu items switch between Albanian and English arrays on toggle

## 2026-04-23 (fix-shoplib-crash)
- Fixed app crash: ShopLibrat.tsx called nonexistent `addItem` + wrong shape `{name}` instead of `addToCart` + `Product`
- Added `import type { Product }` and aligned both book add-to-cart calls with CartContext API
- File: src/pages/ShopLibrat.tsx

## 2026-04-23 (tiktok-icon-fix)
- Replaced broken TikTok SVG with correct brand icon path (note shape)
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-23 (contact-banner-2col)
- Fixed TikTok SVG icon path (now correct brand icon)
- Restructured channels into 2-column grid (sm:grid-cols-2)
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-23 (contact-banner-no-form)
- Removed contact form ("Dërgo një mesazh") from homepage ContactBannerSection
- Section now shows only social media channels, centered with max-w-2xl
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-23 (blog-hero-bg-image)
- Added photo background image to Blog hero section with purple overlay
- Image: uploaded-asset-1776934342510-0.jpeg (hosted on animaapp CDN)
- File: src/pages/Blog.tsx

## 2026-04-23 (blog-remove-emojis)
- Removed emoji icons from BlogCard and BlogModal header in Blog.tsx
- File: src/pages/Blog.tsx

## 2026-04-23 (blog-post6-zotimi)
- Added 6th blog post "Bëj një zotim vetes — pikërisht tani!" to Blog.tsx
- Emerald/teal gradient, 🌿 emoji, new category "Veprim & Transformim"
- Added categoryColors entry for new category
- File: src/pages/Blog.tsx

## 2026-04-23 (blog-post5-rikujtese)
- Added 5th blog post "Rikujtesë" to Blog.tsx
- Sky/blue gradient, 🌟 emoji, category Zemra & Shpirti
- File: src/pages/Blog.tsx

## 2026-04-23 (blog-post4-sekret)
- Added 4th blog post "Sekreti që të jep mundësinë të mos dështosh kurrë" to Blog.tsx
- Post uses amber/orange gradient, 🔑 emoji, category Frymëzim
- File: src/pages/Blog.tsx

## 2026-04-23 (blog-remove-icons)
- Removed all lucide-react icons from Blog.tsx (Clock, ArrowLeft, Heart, ChevronDown)
- Replaced with plain text equivalents (→, ←, removed Heart entirely)
- File: src/pages/Blog.tsx

## 2026-04-23 (blog-syntax-fix)
- Fixed SyntaxError in Blog.tsx: unescaped double-quotes inside string (\"fobi\", \"dështimi\") replaced with Unicode curly quotes
- File: src/pages/Blog.tsx

## 2026-04-23 (blog-page-full)
- Built full Blog page with 3 real posts (hero + card grid + modal reader)
- Cards show category badge, read time, emoji, title, excerpt; click opens full post in modal
- File: src/pages/Blog.tsx

## 2026-04-23 (shoplib-remove-quotes)
- Removed both purple quote banner sections from ShopLibrat (book 1 and book 2)
- File: src/pages/ShopLibrat.tsx

## 2026-04-23 (shoplib-book2)
- Added second book "Krijo jetën e re" to ShopLibrat with identical design as first book
- Cover image hosted, full collapsible description, highlights checklist, price+CTA, quote banner
- File: src/pages/ShopLibrat.tsx

## 2026-04-23 (shoplib-full-desc)
- Added full collapsible book description to ShopLibrat below lead paragraph
- "Lexo përshkrimin e plotë" button toggles smooth max-h transition; all paragraphs rendered from FULL_DESCRIPTION constant
- File: src/pages/ShopLibrat.tsx

## 2026-04-23 (shoplib-mjeshtrilibri)
- Added full "Mjeshtri i Liqenit Pasqyrë" book section to ShopLibrat page
- Book cover image hosted, accordion info sections, highlights checklist, price+CTA, quote banner
- File: src/pages/ShopLibrat.tsx

## 2026-04-23 (shoplib-clear-section)
- Removed entire products grid, CTA, and all product data from ShopLibrat — hero only remains
- File: src/pages/ShopLibrat.tsx

## 2026-04-23 (shopmed-violet-colors)
- Changed all rose/red colors to violet in ShopMeditime: subtitle text, category badge, Shto button, CTA section
- File: src/pages/ShopMeditime.tsx

## 2026-04-23 (shopmed-cleanup)
- Removed "Kthehu te Shitorja" back link from ShopMeditime hero
- Removed 4 feature badges (Audio HD, Çdo pajisje, Akses i përhershëm, Shkarkim offline)
- Changed hero background from pink/rose gradient to flat #9D8FEF
- File: src/pages/ShopMeditime.tsx

## 2026-04-23 (eventet-page-redesign)
- Redesigned Eventet page with pink/rose-to-purple gradient hero (same design as ShopMeditime)
- Added feature badges: Evente të rregullta, Live & Online, Grupe të vogla, Transformim real
- Event cards now have gradient image header + subtitle + CTA button in rose style
- Bottom CTA section added matching ShopMeditime layout
- File: src/pages/Eventet.tsx

## 2026-04-23 (shop-events-text)
- Personalized hero text in Shop page for events: subtitle "Evente", title "Eventet tona", new description
- Updated Evente section desc to focus on live experience
- File: src/pages/Shop.tsx

## 2026-04-23 (shop-hero-color)
- Changed Shop page hero background from violet gradient to flat #9D8FEF
- File: src/pages/Shop.tsx

## 2026-04-23 (fix-shop-meditime-type)
- Fixed ShopMeditime page not opening: Product type had `emoji` as required but ShopMeditime used `image`
- Made `emoji` and `image` both optional in CartContext Product type
- Removed `(product as any).image` cast since `image` is now typed properly
- Files: src/context/CartContext.tsx, src/pages/ShopMeditime.tsx

## 2026-04-23 (shop-meditime-page)
- Created dedicated /shop/meditime page with 6 meditime products and rose/pink theme
- Hero with feature badges (audio HD, offline, cross-device), full product grid, bottom CTA
- Added route /shop/meditime in App.tsx
- Added "Shiko të gjitha →" link in Shop.tsx Meditime section header pointing to new page
- Files: src/pages/ShopMeditime.tsx, src/App.tsx, src/pages/Shop.tsx

## 2026-04-23 (shop-3-sections)
- Split Shop page products into 3 distinct visual sections: Evente & Retreat, Trajnime Online, Meditime & Burime
- Each section has icon, title, description, accent color, product count badge
- Removed category tab bar + filter logic; replaced with static section layout
- File: src/pages/Shop.tsx

## 2026-04-22 (rreth-nesh-text-bigger)
- Increased text across ALL sections in RrethNesh: body text sm→base/lg, card descriptions xs→sm, bullet items sm→base
- File: src/pages/RrethNesh.tsx

## 2026-04-22 (shop-cart-design)
- Built full Shop page with 6 real products across 4 categories (Evente, Trajnime, Meditime, Libra)
- Slideout cart drawer with qty controls, remove, promo code input, total summary
- Category filter tabs, star ratings, badge labels (Bestseller/I ri/Zbritje), original price strikethrough
- Cart icon in hero shows item count badge; backdrop closes drawer on click
- File: src/pages/Shop.tsx

## 2026-04-22 (contact-light-theme)
- Switched ContactBannerSection from dark purple gradient bg to clean white bg
- Updated all 5 social channels with real info: WhatsApp +355 69 242 0827, @arte_gogo, Facebook, YouTube @artegogo3246, TikTok @dr.artegogo
- Form fields: dark glass → light zinc-50 bg with zinc-200 borders; text now zinc-800
- Response note card added below channels in violet-50
- File: src/sections/ContactBannerSection/index.tsx

## 2026-04-22 (whydifferent-light-contrast)
- Fixed WhyDifferentSection text contrast for light purple (#ede9fe) background
- Number circles: white/ghost → violet-100 bg + violet-700 text
- Pillar titles: text-white → text-violet-900; desc: text-white/70 → text-zinc-600
- Card: white/glass → white/85 bg; all white texts → violet-900/zinc-700/violet-500
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-22 (offer-section-simplify)
- Simplified OfferSection: removed all multi-color gradients, white bg cards, single violet color
- Tags/icons/CTA buttons all use violet-600 only; outline CTA style instead of filled gradients
- Section background changed from purple-50 gradient to plain white
- File: src/sections/OfferSection/index.tsx

## 2026-04-22 (videotestimonials-overlay-exact-match)
- Matched VideoTestimonials hero overlay exactly to TestimonialsSection category banner
- brightness(0.45) + gradient rgba(40,10,100,0.9→0.5→transparent)
- File: src/pages/VideoTestimonials.tsx

## 2026-04-22 (testimonials-white-bg)
- Switched TestimonialsSection background from dark purple gradient to white
- Updated all text colors: stats → violet-700/zinc-500, quotes → zinc-600, names → zinc-800
- Updated card borders/backgrounds to light purple tones for contrast
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-22 (testimonials-hero-bg-v3)
- Confirmed uploaded group photo as hero header background in TestimonialsSection
- Adjusted backgroundPosition to "center top" + brightness 0.38 so faces are visible
- Darkened overlay slightly for text legibility
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-22 (measurements-simplify)
- Simplified measurement cards: removed colorful gradient headers, now clean white + zinc border
- Icon moved to neutral gray bg, stat badge stays right-aligned in header row
- Body chevrons changed from colored to zinc-400 for visual lightness
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-22 (gamma-waves-section)
- Added full "Valët Gamma" section to RezultatetShkencore page (between Measurements and Why it matters)
- 2-col cards: "Çfarë janë valët Gamma?" + "Çfarë ndodh në tru?" + results stats grid (100-400×, 5-40min)
- Mini CTA strip at bottom of section linking to Retreat page
- File: src/pages/RezultatetShkencore.tsx

## 2026-04-22 (rezultatet-shkencore-page)
- Created full RezultatetShkencore page at /rezultatet/shkencore
- 3 measurement cards: EEG (violet), HRV (rose), GDV (amber) with gradient headers + stat badges
- Intro section with 4 stats, "Pse janë të rëndësishme" block, CTA strip
- Updated App.tsx route + Navbar dropdown link from #shkencore hash to real route
- Files: src/pages/RezultatetShkencore.tsx, src/App.tsx, src/sections/Navbar/index.tsx

## 2026-04-22 (testimonials-categories)
- Split TestimonialsSection into 4 clickable categories: Hapje Zemre, Manifestime, Puna e Brendshme, Shërime
- Each category has a cover image tab card + banner + 3 testimonial cards with unique color gradients
- Smooth fadeInUp animation on category switch; stats bar and CTA preserved
- File: src/sections/TestimonialsSection/index.tsx

## 2026-04-22 (workshope-real-content)
- Replaced all placeholder text in Workshope page with real client copy
- Updated intro, "çfarë do të merrni" (6 pillars), program flow (3 days + ongoing), benefits list
- Hero subtitle updated with real welcome text from client brief
- File: src/pages/Workshope.tsx

## 2026-04-22 (navbar-white-theme)
- Switched Navbar from purple (#9D8FEF) to white/light grey theme
- Desktop & mobile: white bg, zinc-700 text, violet-700 hover/active states
- Dropdown menus: white bg, zinc-700 text, gray-50 hover
- Sign Up button: violet-600 filled; Log In: text-zinc-600
- File: src/sections/Navbar/index.tsx

## 2026-04-22 (trajnime-hero-overlay-match)
- Matched TrajnimeOnline hero overlay to Retreat hero: linear-gradient(to bottom, rgba(20,10,50,0.78), rgba(70,50,130,0.70))
- Removed grid overlay and bottom fade; simplified to single overlay layer
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-22 (trajnime-hero-new-bg)
- Replaced hero background image with new photo (woman meditating with laptop)
- New image: https://c.animaapp.com/mo8jie1sg5kjlz/img/uploaded-asset-1776851657068-0.png
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-22 (trajnime-online-full-page)
- Built full TrajnimeOnline page replacing placeholder
- Sections: Hero, 3 Pillars (Biologji/Transformim/Fizikë Kuantike), Programi 6 Javë grid, Meditimet e Avancuara, Telegram card, CTA sale section
- All real client copy used; purple/violet palette; FadeIn scroll animations
- File: src/pages/TrajnimeOnline.tsx

## 2026-04-22 (retreat-vendi-all-real-images)
- Replaced Unsplash placeholders for Ushqimi, Fasilitetet, Zonë e qetë cards with real uploaded photos
- Food photo → Ushqimi, indoor pool → Fasilitetet, hotel exterior → Zonë e qetë
- File: src/pages/Retreat.tsx

## 2026-04-22 (retreat-vendi-real-images)
- Replaced Unsplash placeholders for Vendi, Salla, Dhomat cards with real uploaded photos
- Images: uploaded-asset-1776849809105-0/1/2.jpeg hosted on animaapp CDN
- File: src/pages/Retreat.tsx

## 2026-04-22 (retreat-vendi-section)
- Added "Vendi" section to Retreat page before Çmimet section
- 6 cards in 3-col grid: Vendi, Salla, Dhomat, Ushqimi, Fasilitetet, Zonë e qetë
- Each card: rounded photo (4:3) + bold title + description, same FadeIn animation style
- File: src/pages/Retreat.tsx

## 2026-04-22 (meditime-page-build)
- Built full Meditime page with hero, highlights bar, intro text, 8 meditation cards with images
- Each card has a real photo, numbered badge, gradient header, and full description from client brief
- CTA section with WhatsApp + Kontakt links at bottom
- File: src/pages/Meditime.tsx

## 2026-04-22 (hero-minheight-sync)
- Added minHeight: 420px to Kontakt hero to match FAQ hero exactly
- Both heroes now have py-28 + minHeight:420px + identical double overlays
- Files: src/pages/Kontakt.tsx, src/pages/FAQ.tsx

## 2026-04-22 (faq-hero-height-match)
- Matched FAQ hero height (py-28) to Kontakt hero
- File: src/pages/FAQ.tsx

## 2026-04-22 (faq-hero-bg-fix)
- Fixed FAQ hero backgroundPosition from "center top" to "center center" so subjects are visible
- File: src/pages/FAQ.tsx

## 2026-04-22 (faq-hero-bg)
- Added HeartMath session photo as hero background in FAQ page
- Dark overlay black/55 keeps text readable over colorful photo
- File: src/pages/FAQ.tsx

## 2026-04-22 (faq-page-rebuild)
- Rebuilt FAQ page with 3 category tabs (Rreth nesh & metodës, Rezultatet & transformimi, Kontakt)
- All real client-provided Q&A content added; multi-line answers supported as string arrays
- Added hero banner, sticky tab switcher, accordion with open/close animation, WhatsApp CTA card
- File: src/pages/FAQ.tsx

## 2026-04-22 (kontakt-card-cta-button)
- Added "Hap →" pill button (ArrowUpRight icon) at bottom of each clickable contact card
- Button uses card's own border/icon color + white bg; group-hover brightens it
- File: src/pages/Kontakt.tsx

## 2026-04-22 (kontakt-hero-bg)
- Added event photo as hero background in Kontakt page (uploaded-asset-1776847594178-0.jpeg)
- Dark overlay black/60 + violet-950/60 gradient keeps text readable; text switched to white
- File: src/pages/Kontakt.tsx

## 2026-04-22 (kontakt-page-rebuild)
- Rebuilt Kontakt page with all real channels: WhatsApp (+355 69 242 0827), Instagram (@arte_gogo), Facebook, YouTube, TikTok, Email (coming soon)
- Removed contact form (not requested); added response-time note card at bottom
- File: src/pages/Kontakt.tsx

## 2026-04-22 (retreat-hero-remove-2026)
- Removed "2026" from Retreat hero badge and h1 title
- File: src/pages/Retreat.tsx

## 2026-04-22 (retreat-pricing-section)
- Added full pricing section to Retreat page: 2 main variants (864€ double, 1116€ single) + companion table (adults, children 4-8, 9-10)
- Used breakdown card layout with dashed separators and highlighted totals in #9D8FEF
- File: src/pages/Retreat.tsx

## 2026-04-22 (retreat-sections-added)
- Added 3 new sections to Retreat page: Matjet (measurements), Benefitet (3 benefits), Detaje shtesë (staff & music)
- Used same card style as existing activities section (gradient header, #9D8FEF accent, FadeIn animations)
- File: src/pages/Retreat.tsx

## 2026-04-22 (retreat-page-full)
- Built full Retreat page at /eventet/retreat with hero, highlights bar, invitation text, "Çfarë është" section, activity cards and CTA
- Used all client-provided copy; palette: white/gray-50/#9D8FEF only; FadeIn scroll animations
- File: src/pages/Retreat.tsx

## 2026-04-22 (shtyllat-color-simplify)
- Removed all emoji icons and multi-color gradients from ShtyllatEPunes page
- Unified palette: white bg, gray-50/gray-100 borders, #9D8FEF (lejla) as sole accent
- Pillar headers now use a subtle #f7f6fe→white gradient strip; number circles in #9D8FEF
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-22 (pillar-06-update)
- Updated Pillar 06 title to "Teknikat e avancuara të frymëmarrjes" with correct description and 4 benefits
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-22 (pillar-05-update)
- Updated Pillar 05 title to "Aktivizimi dhe lirimi i fashave të trupit (indit lidhor)" with correct description and 3 benefits
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-22 (shtyllat-e-punes-content-update)
- Updated all 7 pillars with exact content provided by client (descriptions, benefits, hero intro text, CTA)
- Pillar 04 changed to Induksioni i valëve gamma; Pillar 07 to Harmonizimi i fushës energjetike
- File: src/pages/ShtyllatEPunes.tsx

## 2026-04-22 (misioni-gallery-images)
- Replaced placeholder gallery images with 3 real event photos in Misioni page
- Photos: beach meditation, dancing event, meditation session
- File: src/pages/Misioni.tsx

## 2026-04-22 (misioni-hero-bg)
- Added event photo as hero background in Misioni page (uploaded-asset-1776842921200-0.jpeg)
- Replaced gradient-only bg with real photo + dark overlay + violet bottom tint
- File: src/pages/Misioni.tsx

## 2026-04-22 (misioni-link-fix)
- Fixed Navbar "Misioni" dropdown link: was `/rreth-nesh#misioni`, now correctly points to `/rreth-nesh/misioni`
- File: src/sections/Navbar/index.tsx

## 2026-04-22 (misioni-separate-page)
- Extracted "Misioni" into its own page src/pages/Misioni.tsx at route /rreth-nesh/misioni
- Removed all Misioni sections from RrethNesh.tsx (kept: Hero, Kush Jemi, Çfarë Bëjmë, Ndryshe, Eksperienca, Metoda, CTA)
- Registered new route in src/App.tsx

## 2026-04-22 (kush-jemi-section-img)
- Replaced placeholder logo box in "Kush Jemi" section with the stage photo (Dr. Marvin & Dr. Artemisa)
- Added violet gradient overlay + caption at the bottom of the image card
- File: src/pages/RrethNesh.tsx

## 2026-04-22 (rreth-nesh-hero-bg)
- Added real photo background to RrethNesh hero section (Dr. Marvin & Dr. Artemisa on stage)
- Heavy dark overlay (black/80→40) + violet-950/60 bottom tint keeps text crisp and readable
- All hero text colors switched to white/violet-300 for contrast
- File: src/pages/RrethNesh.tsx

## 2026-04-22 (rreth-nesh-page)
- Built full "Kush Jemi" page for /rreth-nesh — minimalist white+lavender design
- 6 sections: Hero, Kush Jemi, Çfarë Bëjmë, Çfarë na Bën Ndryshe, Eksperienca, Metoda, CTA
- IntersectionObserver FadeIn animations on all sections; dot-grid decorative accents
- File: src/pages/RrethNesh.tsx

## 2026-04-22 (footer-logo-update)
- Replaced HK bubble + "Harmonizim Kuantik" text in Footer brand with Arte Gogo logo image
- File: src/sections/Footer/components/FooterLinks.tsx

## 2026-04-22 (navbar-logo-update)
- Replaced old Navbar logo with new Arte Gogo / Marvin Bundo logo (purple bg, yoga icon)
- New CDN: uploaded-asset-1776841261508-0.png
- File: src/sections/Navbar/index.tsx

## 2026-04-21 (login-signup-pages)
- Created /login page (LoginPage) with email+password form, show/hide password, forgot link
- Created /signup page (SignUpPage) with name+email+password+terms, [SKIPBACKEND] placeholders
- Registered both routes in src/App.tsx
- Files: src/pages/Login.tsx, src/pages/SignUp.tsx, src/App.tsx

## 2026-04-21 (navbar-auth-cart)
- Removed "Rezervo Retreat" CTA button from Navbar (desktop + mobile)
- Added Log In link (ghost), Sign Up button (white), ShoppingCart icon with badge (0)
- File: src/sections/Navbar/index.tsx

## 2026-04-21 (remove-contact-section)
- Removed old ContactSection ("Qendrojme ne kontakt" email signup form) from MainContent
- File: src/sections/MainContent/index.tsx

## 2026-04-21 (contact-banner-section)
- Created ContactBannerSection (Seksioni 9): dark violet bg, WhatsApp button, Email, Instagram, contact form
- Form has success state; all channels have hover animations + glassmorphism cards
- Inserted in MainContent between FAQSection and CTABannerSection
- Files: src/sections/ContactBannerSection/index.tsx, src/sections/MainContent/index.tsx

## 2026-04-21 (faq-section)
- Created FAQSection (Seksioni 8) with 6 accordion items — Pyetje të Shpeshta / Rreth Nesh & Metodës
- Animated accordion with numbered badges, bullet lists for Q3 & Q5, scroll-triggered visibility
- Inserted in MainContent before CTABannerSection
- Files: src/sections/FAQSection/index.tsx, src/sections/MainContent/index.tsx

## 2026-04-21 (fix-cta-banner-syntax)
- Fixed critical syntax error: bolt artifact markup had leaked into CTABannerSection JSX (line 9)
- Full clean rewrite of CTABannerSection — white bg, violet glow, dual CTA buttons, trust note
- File: src/sections/CTABannerSection/index.tsx

## 2026-04-21 (testimonials-section)
- Created full TestimonialsSection (Seksioni 5) with outcomes stats, video thumbnail, 6 quote cards, photo gallery, CTA
- Dark deep-purple bg gradient, glassmorphism cards, IntersectionObserver scroll animations
- Inserted in MainContent between WhyDifferentSection and ProductsSection
- File: src/sections/TestimonialsSection/index.tsx, src/sections/MainContent/index.tsx

## 2026-04-21 (why-different-innovative)
- Redesigned WhyDifferentSection: vertical numbered timeline (01–05) with animated rail
- Replaced emoji icons with numbered circles + description text per pillar
- Goal card: glassmorphism with decorative arcs, pull-quote bar, quadrant grid with alternating opacity
- IntersectionObserver scroll-triggered animations; bg texture lines overlay
- File: src/sections/WhyDifferentSection/index.tsx

## 2026-04-21 (offer-section)
- Created new OfferSection (Seksioni 3 — Çfarë Ofrojmë) with 4 cards: Retreat, Trajnime Online, Evente Live, Meditime Digjitale
- Each card has tag badge, gradient icon, description, and CTA button with routing via useNavigate
- Inserted in MainContent between AboutSection and ProductsSection
- Files: src/sections/OfferSection/index.tsx, src/sections/MainContent/index.tsx

## 2026-04-21 (spacer-remove)
- Removed SpacerSection (grey/white blank gap) from MainContent between Hero and About
- File: src/sections/MainContent/index.tsx

## 2026-04-21 (about-fix)
- Fixed corrupted AboutSection (artifact markup had leaked into JSX at line 127)
- Full clean rewrite: doctor cards, mission strip, pillars grid, differentiators list
- File: src/sections/AboutSection/index.tsx

## 2026-04-21 (hero-real-bg)
- Replaced abstract banner background in HeroSection with real retreat photo (purple-lit room)
- Added heavy dark+violet overlays (black/82–88 + violet-950/70) so image is whisper-subtle
- Vignette radial gradient on edges keeps all attention on the headline text
- Image: uploaded-asset-1776777179909-0.jpeg hosted on animaapp CDN

## 2026-04-21 (hero-iconic)
- Rebuilt HeroSection with full brand content, animations, trust badges, CTA buttons
- Fade-in stagger animations (useEffect + useState) for headline, subtext, buttons, trust strip
- Dual CTA: "Rezervo Retreat-in" (gradient primary) + "Shiko Trajnimet Online" (glass secondary)
- Ambient orbs, layered gradients, scroll indicator; all on brand: violet/purple/white

## 2026-04-21 (logo-final)
- Removed HK bubble + "Harmonizim Kuantik" text from Navbar brand area
- Replaced with only the uploaded logo image (CDN: animaapp) — `h-12 w-auto`
- Change applied directly in `src/sections/Navbar/index.tsx` Brand section

## 2026-04-21
- Built full multi-page routing structure with React Router (BrowserRouter + Routes)
- Created 10 new pages: RrethNesh, Eventet, Retreat, TrajnimeOnline, Workshope, Live, Rezultatet, Blog, Meditime, Shop, Kontakt, FAQ
- Redesigned Navbar with mega-menu dropdowns, mobile drawer, active states — `src/sections/Navbar/index.tsx`
- Rebuilt Footer with 4-column grid, social links, all nav links — `src/sections/Footer/components/FooterLinks.tsx`
- Added `src/components/PagePlaceholder.tsx` reusable placeholder for future page content
- Fixed `@` path alias in `vite.config.ts` and `package.json`
</changelog>
