"use client";
import { BannerSection } from "../components/BannerSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { JungleSection } from "../components/JungleSection";
import { TeamMemberSection } from "../components/TeamMemberSection";
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

      <TextCounterSection text={`Our work excels, driven by our<br /> wild and creative team, delivering<br /> the highest quality`} />
      <BannerSection title={"born with creative instincts."} />

      <WhoWeAre
        description={`In the heart of our<br />
                wild team, we find
                <br />
                our strength.
                <br />`}
        paragraph={`We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences.`}
      />

      <TeamMemberSection />

      <JungleSection title1={"wanna"} title2={"join"} title3={"trionn?"} description={`We are always looking for the best <br />talent in the digital jungle.`} />

      <section className="banner-parallax-sec" style={{ backgroundImage: "url(https://trionn.com/_next/static/media/lion2.813c8d36.webp)" }}></section>
    </>
  );
}
