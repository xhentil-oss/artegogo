import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center px-6 py-12" style={{ backgroundColor: '#000000' }}>
        <FooterLinks />
      </div>
    </footer>
  );
};
