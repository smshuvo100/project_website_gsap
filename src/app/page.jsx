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
      <WhoWeAre />
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
