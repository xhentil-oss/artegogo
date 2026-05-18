import { HeroSection } from "@/sections/HeroSection";
import { CommunitySection } from "@/sections/CommunitySection";
import { WhatWeOfferStrip } from "@/sections/WhatWeOfferStrip";
import { RetreatVideoSection } from "@/sections/RetreatVideoSection";
import { UniversityBanner } from "@/sections/UniversityBanner";
import { AboutSection } from "@/sections/AboutSection";
import { PromiseSection } from "@/sections/PromiseSection";
import { FoundationSection } from "@/sections/FoundationSection";
import { MissionBanner } from "@/sections/MissionBanner";
import { RetreatCardSection } from "@/sections/RetreatCardSection";
import { PhilosophySection } from "@/sections/PhilosophySection";
import { VideoTestimonialsSection } from "@/sections/VideoTestimonialsSection";
import { TrajnimOnlineSection } from "@/sections/TrajnimOnlineSection";
import { SuperkoherencaSection } from "@/sections/SuperkoherencaSection";
import { ComingSoonSection } from "@/sections/ComingSoonSection";
import { BlogSection } from "@/sections/BlogSection";
import { SignaturePhilosophySection } from "@/sections/SignaturePhilosophySection";
import { FAQSection } from "@/sections/FAQSection";
import { ContactBannerSection } from "@/sections/ContactBannerSection";
import { CTABannerSection } from "@/sections/CTABannerSection";
export const MainContent = () => {
  return (
    <main className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px]">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <HeroSection />
        <CommunitySection />
        <WhatWeOfferStrip />
        <RetreatVideoSection />
        <UniversityBanner />
        <div className="box-border caret-transparent outline-[3px]">
          <AboutSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <PromiseSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <FoundationSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <MissionBanner />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <RetreatCardSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <PhilosophySection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <VideoTestimonialsSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <TrajnimOnlineSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <SuperkoherencaSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <ComingSoonSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <BlogSection />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <SignaturePhilosophySection />
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
