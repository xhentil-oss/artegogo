import { ContactForm } from "@/sections/ContactSection/components/ContactForm";

export const ContactSection = () => {
  return (
    <section className="text-gray-700 bg-white box-border caret-transparent outline-[3px] text-center w-full m-auto px-5 py-[22.4px] md:py-10">
      <ContactForm />
      <div className="text-2xl box-border caret-transparent hidden leading-10 max-w-[670px] outline-[3px] border border-zinc-200 m-auto p-8 rounded-[10px] border-solid">
        Konfirmo
      </div>
    </section>
  );
};
