import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mb-14 scroll-mt-24">
    <h2 className="font-bold text-zinc-900 mb-6 pb-3 border-b border-purple-100"
      style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}>
      {title}
    </h2>
    <div className="space-y-4 text-zinc-700 leading-relaxed" style={{ fontSize: 15.5 }}>
      {children}
    </div>
  </section>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-bold text-zinc-800 mt-6 mb-2" style={{ fontSize: 16 }}>{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ lineHeight: 1.8 }}>{children}</p>
);

const Ul = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-5 space-y-1">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

export const KushtetPage = () => {
  const { t } = useLanguage();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="py-12 px-6 text-center" style={{ background: "linear-gradient(135deg, #1e0042 0%, #4c1d95 60%, #7c3aed 100%)" }}>
        <p className="text-violet-200 text-sm font-semibold tracking-widest uppercase mb-2">drartegogo.com</p>
        <h1 className="font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
          {t("Kushtet & Politikat", "Terms & Policies")}
        </h1>
        <p className="text-violet-200 text-sm">{t("Versioni i fundit: Korrik 2026", "Last updated: July 2026")}</p>
      </div>

      {/* Nav anchors */}
      <div className="sticky top-16 z-30 bg-white border-b border-zinc-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-3 flex flex-wrap gap-2">
          {[
            { href: "#kushtet", label: t("Kushtet e Përdorimit", "Terms of Use") },
            { href: "#privatesia", label: t("Politika e Privatësisë", "Privacy Policy") },
            { href: "#rimbursimet", label: t("Rimbursimet", "Refunds") },
            { href: "#dorezimi", label: t("Aksesi / Dërgesa", "Access / Delivery") },
          ].map(l => (
            <a key={l.href} href={l.href}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:bg-violet-600 hover:text-white"
              style={{ background: "#f3f0ff", color: "#5b21b6" }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* ── KUSHTET E PËRDORIMIT ── */}
        <Section id="kushtet" title={t("Kushtet e Përdorimit", "Terms of Use")}>
          <P>{t(
            "Mirë se vini në drartegogo.com. Duke përdorur këtë faqe interneti dhe duke blerë produktet ose shërbimet tona, ju pranoni Kushtet e Përdorimit të mëposhtme.",
            "Welcome to drartegogo.com. By using this website and purchasing our products or services, you accept the following Terms of Use."
          )}</P>

          <H3>{t("Shërbimet", "Services")}</H3>
          <P>{t(
            "drartegogo.com ofron evente, workshop-e, trajnime online, meditime, materiale edukative dhe produkte digjitale në fushën e zhvillimit personal dhe mirëqenies.",
            "drartegogo.com offers events, workshops, online trainings, meditations, educational materials and digital products in the field of personal development and wellbeing."
          )}</P>
          <P>{t(
            "Informacioni i ofruar ka karakter edukativ dhe informues. Ai nuk zëvendëson këshillën, diagnostikimin apo trajtimin mjekësor, psikologjik ose profesional. Për çdo shqetësim shëndetësor, rekomandohet konsultimi me një profesionist të licencuar.",
            "The information provided is educational and informational in nature. It does not replace medical, psychological or professional advice, diagnosis or treatment. For any health concerns, consultation with a licensed professional is recommended."
          )}</P>

          <H3>{t("Regjistrimi dhe Pagesa", "Registration and Payment")}</H3>
          <P>{t(
            "Regjistrimi konsiderohet i konfirmuar vetëm pasi pagesa të jetë përpunuar me sukses. Të gjitha pagesat përpunohen përmes një platforme të sigurt pagesash që përdor standarde të njohura të sigurisë për mbrojtjen e transaksioneve dhe të dhënave të klientëve.",
            "Registration is considered confirmed only after payment has been successfully processed. All payments are processed through a secure payment platform using recognized security standards to protect transactions and customer data."
          )}</P>

          <H3>{t("Pronësia Intelektuale", "Intellectual Property")}</H3>
          <P>{t(
            "Të gjitha videot, meditimet, materialet, tekstet, prezantimet, logot dhe çdo përmbajtje tjetër e publikuar në këtë faqe janë pronë intelektuale e Dr. Artemisa Gogollari, përveç rasteve kur specifikohet ndryshe, dhe mbrohen nga legjislacioni për të drejtën e autorit.",
            "All videos, meditations, materials, texts, presentations, logos and any other content published on this site are the intellectual property of Dr. Artemisa Gogollari, unless otherwise specified, and are protected by copyright law."
          )}</P>
          <P>{t(
            "Nuk lejohet kopjimi, riprodhimi, regjistrimi, shpërndarja, publikimi ose rishitja e materialeve pa autorizim paraprak me shkrim.",
            "Copying, reproduction, recording, distribution, publication or resale of materials without prior written authorization is not permitted."
          )}</P>

          <H3>{t("Kufizimi i Përgjegjësisë", "Limitation of Liability")}</H3>
          <P>{t(
            "Programet, trajnimet, meditimet dhe materialet tona synojnë të mbështesin zhvillimin personal dhe mirëqenien. Rezultatet ndryshojnë nga një individ te tjetri dhe varen nga angazhimi personal, zbatimi i teknikave dhe praktika e vazhdueshme.",
            "Our programs, trainings, meditations and materials aim to support personal development and wellbeing. Results vary from individual to individual and depend on personal engagement, application of techniques and consistent practice."
          )}</P>
          <P>{t(
            "drartegogo.com dhe Dr. Artemisa Gogollari nuk garantojnë rezultate specifike dhe nuk mbajnë përgjegjësi për vendimet ose veprimet e ndërmarra nga përdoruesit bazuar në përmbajtjen e ofruar.",
            "drartegogo.com and Dr. Artemisa Gogollari do not guarantee specific results and are not responsible for decisions or actions taken by users based on the content provided."
          )}</P>

          <H3>{t("Ndryshimet", "Changes")}</H3>
          <P>{t(
            "Ne rezervojmë të drejtën të përditësojmë ose ndryshojmë këto Kushte të Përdorimit në çdo kohë. Versioni më i fundit do të jetë gjithmonë i disponueshëm në këtë faqe dhe hyn në fuqi menjëherë pas publikimit.",
            "We reserve the right to update or change these Terms of Use at any time. The latest version will always be available on this page and takes effect immediately upon publication."
          )}</P>
        </Section>

        {/* ── POLITIKA E PRIVATËSISË ── */}
        <Section id="privatesia" title={t("Politika e Privatësisë", "Privacy Policy")}>
          <P>{t(
            "drartegogo.com respekton privatësinë e çdo klienti dhe angazhohet të mbrojë të dhënat personale në përputhje me legjislacionin në fuqi për mbrojtjen e të dhënave.",
            "drartegogo.com respects the privacy of every client and is committed to protecting personal data in accordance with applicable data protection legislation."
          )}</P>

          <H3>{t("Çfarë të dhënash mbledhim", "What data we collect")}</H3>
          <Ul items={t([
            "Emër dhe mbiemër",
            "Adresë emaili",
            "Numër telefoni",
            "Informacionin e nevojshëm për përpunimin e pagesës (pagesat përpunohen nga ofrues të autorizuar; ne nuk ruajmë të dhënat e kartës suaj bankare)",
            "Informacion të nevojshëm për regjistrimin në evente, trajnime ose programe",
          ], [
            "First and last name",
            "Email address",
            "Phone number",
            "Information required for payment processing (payments are processed by authorized providers; we do not store your card data)",
            "Information required for registration in events, trainings or programs",
          ])} />

          <H3>{t("Si përdoren të dhënat", "How data is used")}</H3>
          <P>{t("Të dhënat personale përdoren vetëm për:", "Personal data is used only for:")}</P>
          <Ul items={t([
            "Konfirmimin e pagesës dhe regjistrimit",
            "Ofrimin e aksesit në evente, trajnime dhe produkte digjitale",
            "Komunikimin me klientët",
            "Përmirësimin e shërbimeve tona",
            "Përmbushjen e detyrimeve ligjore",
          ], [
            "Payment and registration confirmation",
            "Providing access to events, trainings and digital products",
            "Communication with clients",
            "Improving our services",
            "Fulfilling legal obligations",
          ])} />

          <H3>{t("Siguria", "Security")}</H3>
          <P>{t(
            "Ne zbatojmë masa të arsyeshme teknike dhe organizative për të mbrojtur të dhënat personale nga humbja, përdorimi i paautorizuar, ndryshimi ose zbulimi i tyre.",
            "We implement reasonable technical and organizational measures to protect personal data from loss, unauthorized use, alteration or disclosure."
          )}</P>

          <H3>{t("Ndarja e të Dhënave", "Data Sharing")}</H3>
          <P>{t(
            "Ne nuk shesim, japim me qira ose shpërndajmë të dhënat tuaja personale tek palë të treta, përveç rasteve kur kjo është e nevojshme për:",
            "We do not sell, rent or distribute your personal data to third parties, except when necessary for:"
          )}</P>
          <Ul items={t([
            "Përpunimin e pagesave përmes ofruesve të autorizuar të shërbimeve të pagesave",
            "Përmbushjen e detyrimeve ligjore ose kërkesave të autoriteteve kompetente",
          ], [
            "Processing payments through authorized payment service providers",
            "Fulfilling legal obligations or requests from competent authorities",
          ])} />

          <H3>{t("Të Drejtat Tuaja", "Your Rights")}</H3>
          <P>{t(
            "Ju keni të drejtë të kërkoni akses, korrigjim, përditësim ose fshirje të të dhënave tuaja personale, si dhe të kërkoni kufizimin e përpunimit të tyre, në përputhje me legjislacionin në fuqi.",
            "You have the right to request access, correction, update or deletion of your personal data, as well as to request restriction of its processing, in accordance with applicable legislation."
          )}</P>

          <H3>{t("Kontakt", "Contact")}</H3>
          <P>{t(
            "Për çdo pyetje në lidhje me këtë Politikë Privatësie ose për ushtrimin e të drejtave tuaja, mund të na kontaktoni përmes emailit ose WhatsApp-it të publikuar në drartegogo.com.",
            "For any questions regarding this Privacy Policy or to exercise your rights, you can contact us via email or WhatsApp published on drartegogo.com."
          )}</P>
        </Section>

        {/* ── POLITIKA E RIMBURSIMIT ── */}
        <Section id="rimbursimet" title={t("Politika e Rimbursimit", "Refund Policy")}>
          <P>{t(
            "Regjistrimet në evente, workshop-e, trajnime online, programe edukative dhe produkte digjitale janë personale dhe nuk mund të transferohen tek një person tjetër pa miratimin paraprak me shkrim të Dr. Artemisa Gogollari.",
            "Registrations for events, workshops, online trainings, educational programs and digital products are personal and cannot be transferred to another person without the prior written approval of Dr. Artemisa Gogollari."
          )}</P>
          <P>{t(
            "Pasi pagesa është konfirmuar dhe klienti ka marrë akses në materialet digjitale, informacionin e eventit ose rezervimin e vendit, pagesa konsiderohet përfundimtare dhe nuk rimbursohet.",
            "Once payment is confirmed and the client has received access to digital materials, event information or seat reservation, payment is considered final and non-refundable."
          )}</P>

          <H3>{t("Rimbursimet", "Refunds")}</H3>
          <P>{t("Rimbursimi ofrohet vetëm në rastet e mëposhtme:", "Refunds are offered only in the following cases:")}</P>
          <Ul items={t([
            "Eventi, workshop-i ose trajnimi anulohet nga organizatori",
            "Shërbimi nuk mund të ofrohet për arsye që varen nga organizatori",
            "Në raste të tjera kur rimbursimi kërkohet nga legjislacioni në fuqi",
          ], [
            "The event, workshop or training is cancelled by the organizer",
            "The service cannot be provided for reasons depending on the organizer",
            "In other cases where refund is required by applicable legislation",
          ])} />

          <H3>{t("Opsionet për klientin", "Client options")}</H3>
          <P>{t("Në rastet kur aplikohet rimbursimi, klienti mund të zgjedhë:", "When a refund applies, the client may choose:")}</P>
          <Ul items={t([
            "Rimbursim të plotë të shumës së paguar, duke përdorur të njëjtën metodë pagese kur është e mundur",
            "Transferimin e pagesës për një event, trajnim ose program tjetër të organizuar nga Dr. Artemisa Gogollari, sipas marrëveshjes me klientin",
          ], [
            "Full refund of the amount paid, using the same payment method where possible",
            "Transfer of payment to another event, training or program organized by Dr. Artemisa Gogollari, as agreed with the client",
          ])} />

          <H3>{t("Kontakt", "Contact")}</H3>
          <P>{t(
            "Për çdo kërkesë në lidhje me rimbursimet, ju lutemi të na kontaktoni përmes emailit ose WhatsApp-it të publikuar në drartegogo.com.",
            "For any refund requests, please contact us via email or WhatsApp published on drartegogo.com."
          )}</P>
        </Section>

        {/* ── POLITIKA E DËRGIMIT / AKSESIT ── */}
        <Section id="dorezimi" title={t("Politika e Dërgimit / Aksesit", "Delivery / Access Policy")}>
          <P>{t(
            "drartegogo.com ofron evente fizike, evente online, programe edukative, workshop-e, trajnime dhe produkte digjitale.",
            "drartegogo.com offers physical events, online events, educational programs, workshops, trainings and digital products."
          )}</P>

          <H3>{t("Eventet Online", "Online Events")}</H3>
          <P>{t(
            "Pas konfirmimit të pagesës, pjesëmarrësi merr informacionin e nevojshëm për akses (linkun e platformës, udhëzimet ose materialet përkatëse) përmes email-it ose WhatsApp-it. Aksesi dërgohet brenda 24 orëve nga konfirmimi i pagesës ose, nëse eventi zhvillohet më vonë, përpara fillimit të tij.",
            "After payment confirmation, the participant receives the necessary access information (platform link, instructions or relevant materials) via email or WhatsApp. Access is sent within 24 hours of payment confirmation or, if the event takes place later, before its start."
          )}</P>

          <H3>{t("Eventet Fizike", "Physical Events")}</H3>
          <P>{t(
            "Pas konfirmimit të pagesës, klienti merr konfirmimin e regjistrimit, si dhe informacionin mbi vendndodhjen, datën, orarin dhe çdo udhëzim tjetër të nevojshëm për pjesëmarrje.",
            "After payment confirmation, the client receives registration confirmation, as well as information about the location, date, time and any other necessary instructions for participation."
          )}</P>

          <H3>{t("Programet dhe Trajnimet", "Programs and Trainings")}</H3>
          <P>{t(
            "Për programet shumëjavore ose trajnimet online, pjesëmarrësi merr akses në platformën përkatëse dhe udhëzimet e nevojshme përpara fillimit të programit.",
            "For multi-week programs or online trainings, the participant receives access to the relevant platform and necessary instructions before the program begins."
          )}</P>

          <H3>{t("Produkte Digjitale", "Digital Products")}</H3>
          <P>{t(
            "Produktet digjitale bëhen të disponueshme menjëherë ose brenda 24 orëve pas konfirmimit të pagesës, përveç rasteve kur në faqen e produktit specifikohet ndryshe.",
            "Digital products become available immediately or within 24 hours of payment confirmation, unless otherwise specified on the product page."
          )}</P>

          <H3>{t("Probleme me Dorëzimin ose Aksesin", "Delivery or Access Issues")}</H3>
          <P>{t(
            "Nëse nuk merrni konfirmimin e regjistrimit ose aksesin në shërbimin e blerë brenda afateve të përmendura, ju lutemi të na kontaktoni përmes emailit ose WhatsApp-it të publikuar në drartegogo.com. Ne do të përpiqemi ta zgjidhim çështjen sa më shpejt të jetë e mundur.",
            "If you do not receive registration confirmation or access to the purchased service within the mentioned timeframes, please contact us via email or WhatsApp published on drartegogo.com. We will endeavor to resolve the issue as soon as possible."
          )}</P>
        </Section>

      </div>
    </div>
  );
};
