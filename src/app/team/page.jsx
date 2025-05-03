"use client";
import { BannerSection } from "../components/BannerSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";
export default function page() {
  return (
    <>
      <HeroAllSection
        title1={"each and every one"}
        title2={"of usis a digital lion."}
        description={`If you also see yourself as the king or<br /> 
            queen of the digital jungle, you might be<br /> 
            one of us. Drop us a line.`}
      />
      <TextCounterSection />
      <BannerSection />
      <WhoWeAre
        description={`As an award-winning agency within
                <br />
                the digital jungle, TRIONN® transcends
                <br />
                aesthetics, crafting your vision into a<br />
                legacy that endures.
                <br />`}
        paragraph={`We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences.`}
      />
    </>
  );
}
