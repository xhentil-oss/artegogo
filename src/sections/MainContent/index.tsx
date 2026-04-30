import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { OfferSection } from "@/sections/OfferSection";
import { WhyDifferentSection } from "@/sections/WhyDifferentSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FeaturedRetreatSection } from "@/sections/FeaturedRetreatSection";
import { OnlineProgramsSection } from "@/sections/OnlineProgramsSection";
import { PhilosophySection } from "@/sections/PhilosophySection";
import { FAQSection } from "@/sections/FAQSection";
import { ContactBannerSection } from "@/sections/ContactBannerSection";
import { CTABannerSection } from "@/sections/CTABannerSection";
export const MainContent = () => {
  return (
    <main className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px]">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <HeroSection />
        <div className="box-border caret-transparent outline-[3px]">
          <AboutSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <OfferSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <WhyDifferentSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <TestimonialsSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <FeaturedRetreatSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <OnlineProgramsSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <PhilosophySection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <FAQSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <ContactBannerSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <CTABannerSection />
        </div>
      </div>
    </main>
  );
};
