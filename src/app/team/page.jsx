import React from "react";
import { BannerSection } from "../components/BannerSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { JungleSection } from "../components/JungleSection";
import { TeamMemberSection } from "../components/TeamMemberSection";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";

// ✅ Metadata API for App Router
export const metadata = {
  title: "Meet the Market Target Team | Experts in SEO, Branding & Video",
  description:
    "Get to know the passionate team behind Market Target’s success. Our experts in SEO, branding, and video help service-based businesses grow and thrive worldwide.",
};

export default function page() {
  return (
    <>
      <HeroAllSection
        title1={"het team achter"}
        title2={"market target"}
        description={`Strategen, creators en marketeers met één doel: <br/>dienstverlenende bedrijven laten groeien met SEO,<br/> branding en video die resultaat oplevert.`}
      />

      <TextCounterSection
        text={` Onze resultaten komen voort uit ervaring — niet uit hype.
 Elk project wordt gedragen door een team dat zowel strategie als uitvoering begrijpt.`}
      />
      <BannerSection
        title={"gebouwd op strategie. ondersteund door resultaten."}
        bgImg={"/images/banner11.webp"}
      />

      <WhoWeAre
        description={`Ontmoet de mensen achter het werk — SEO-specialisten, brandingexperts en videomakers die zich richten op het vooruithelpen van jouw bedrijf.`}
      />

      {/* <TeamMemberSection /> */}

      <section className="sm-video3-sec">
        <div className="video3-container">
          <video
            src={`/video/video3.mp4`}
            width="100%"
            height="auto"
            muted
            autoPlay
            loop
            playsInline
            className="video-element"
          />
        </div>
      </section>

      <JungleSection
        title1={" wij zoeken"}
        title2={"talentvolle marketeers"}
        title3={"& creators"}
        description={`Passie voor SEO, storytelling of <br/>digitale content? We horen graag van je.`}
        btn_text={"Meet the Team"}
        btn_link={"/about"}
      />

      <section
        className="banner-parallax-sec"
        style={{ backgroundImage: "url('/images/banner.webp')" }}
      ></section>
    </>
  );
}
