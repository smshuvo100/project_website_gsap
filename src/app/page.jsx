"use client";

import { ClientTestimonial } from "./components/ClientTestimonial";
import { CounterSection } from "./components/CounterSection";
import { DribbbleSection } from "./components/DribbbleSection";
import { HeroSection } from "./components/HeroSection";
import { JungleSection } from "./components/JungleSection";
import { LeftImgSection } from "./components/LeftImgSection";
import { NewsTracker } from "./components/NewsTracker";
import { PageTitle } from "./components/PageTitle";
import { RecentWorkSection } from "./components/RecentWorkSection";
import { RightImgSection } from "./components/RightImgSection";
import { SocialSection } from "./components/SocialSection";
import { VideoSection } from "./components/VideoSection";
import { WhoWeAre } from "./components/WhoWeAre";
export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <RecentWorkSection />
      <RightImgSection title={"loftloom"} description={"UI Design, UX, Wireframe"} images={"loftloom-main-landscape.webp"} />
      <LeftImgSection />
      <RightImgSection title={"technis"} description={"UI Design, UX, Wireframe"} images={"technis-main-landscape.webp"} />
      <WhoWeAre
        title1={"who"}
        title2={"we are"}
        description={`As an award-winning agency within
                <br />
                the digital jungle, TRIONN® transcends
                <br />
                aesthetics, crafting your vision into a<br />
                legacy that endures.
                <br />`}
        paragraph={`We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences.`}
        btn_text={"About Us"}
        btn_link={"/about"}
      />
      <CounterSection />
      <PageTitle />
      <ClientTestimonial />
      <NewsTracker />
      <DribbbleSection />
      <JungleSection />
      <SocialSection />
    </>
  );
}
