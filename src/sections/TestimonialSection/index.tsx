import { useLanguage } from "@/context/LanguageContext";

export const TestimonialSection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-white w-full px-5 py-10 md:py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-zinc-800 text-lg md:text-2xl leading-relaxed font-medium mb-4">
            &ldquo;
            {t(
              "Ne cdo meditim qe bej me ty dicka e re me vjen kam ber lirimin e cakrave, kerkova kodin personal Zoti ma dergoi dhe ne cdo meditim ndjehem plot shendet lumturi dhe te mira ti je zemer e bardh dhe e gjithe familja ime te ndjekin cdo gje qe ti poston dhe meditojme se bashku",
              "In every meditation I do with you something new comes to me, I have done the chakra liberation, I sought the personal code and God sent it to me, and in every meditation I feel full of health, happiness and goodness. You have a pure heart and my whole family follows everything you post and we meditate together"
            )}
            &rdquo;
          </p>
          <p className="text-zinc-500 text-sm">— {t("anonim", "anonymous")}</p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://c.animaapp.com/mo8jie1sg5kjlz/assets/houdW8PBT0qTVdRBU48z_dna-sequence-hands-wireframe-dna-code-molecules-structure-mesh_127544-899.jpg"
            alt=""
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
