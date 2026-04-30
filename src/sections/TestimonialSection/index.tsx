import { useLanguage } from "@/context/LanguageContext";

export const TestimonialSection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-white box-border caret-transparent flex justify-center outline-[3px] w-full px-5 py-[22.4px] md:py-10">
      <div className="text-gray-700 items-center box-border caret-transparent flex flex-wrap justify-center max-w-[960px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-[960px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 px-5 py-10 md:w-[calc(50%_-_12px)] md:mr-3 md:p-0">
          <div className="box-border caret-transparent outline-[3px]">
            <h4 className="text-2xl box-border caret-transparent leading-9 outline-[3px] break-words mb-[9px]">
              &quot;
              <span className="text-zinc-950 bg-gray-200 box-border caret-transparent outline-[3px] break-words">
                {t(
                  "Ne cdo meditim qe bej me ty dicka e re me vjen kam ber lirimin e cakrave, kerkova kodin personal Zoti ma dergoi dhe ne cdo meditim ndjehem plot shendet lumturi dhe te mira ti je zemer e bardh dhe e gjithe familja ime te ndjekin cdo gje qe ti poston dhe meditojme se bashku",
                  "In every meditation I do with you something new comes to me, I have done the chakra liberation, I sought the personal code and God sent it to me, and in every meditation I feel full of health, happiness and goodness. You have a pure heart and my whole family follows everything you post and we meditate together"
                )}
              </span>
              .&quot;
            </h4>
            <p className="text-base box-border caret-transparent leading-6 outline-[3px] break-words mb-2.5"><br /></p>
          </div>
          <p className="text-base box-border caret-transparent leading-6 outline-[3px] break-words">
            - {t("anonim", "anonymous")}
          </p>
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full ml-0 md:w-[calc(50%_-_12px)] md:ml-3">
          <img src="https://c.animaapp.com/mo8jie1sg5kjlz/assets/houdW8PBT0qTVdRBU48z_dna-sequence-hands-wireframe-dna-code-molecules-structure-mesh_127544-899.jpg"
            alt="" className="box-border caret-transparent outline-[3px] align-baseline w-full" />
        </div>
      </div>
    </section>
  );
};
