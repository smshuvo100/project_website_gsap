"use client";

import { CounterSection } from "./components/CounterSection";
import { DribbbleSection } from "./components/DribbbleSection";
import { HeroSection } from "./components/HeroSection";
import { JungleSection } from "./components/JungleSection";
import { LeftImgSection } from "./components/LeftImgSection";
import { NewsTracker } from "./components/NewsTracker";
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
      <RightImgSection title={"technical seo"} description={"Improve your rankings with clean, fast, search-optimized foundations."} images={"seo.webp"} />
      <LeftImgSection />
      <RightImgSection title={"video & drone content "} description={"Stand out with cinematic, story-driven visuals designed to educate, impress, and convert."} images={"video2.mp4"} />
      <WhoWeAre
        title1={"work that"}
        title2={"performs"}
        paragraph={`From professional service websites
                <br />
                to branded aerial videos — our work builds
                <br />
                credibility and converts attention into leads.`}
        btn_text={"Contact Us"}
        btn_link={"/contact"}
      />
      <WhoWeAre
        title1={"who"}
        title2={"we are"}
        description={`Market Target is a results-driven digital<br /> partner for service-based businesses.<br /> Our team brings together SEO engineers,<br /> brand designers, content strategists,<br /> and drone video pros — all working<br /> toward one goal: helping you grow.`}
        paragraph={`We don’t do fluff. We do focused,<br /> aligned digital marketing that drives visibility,<br /> trust, and leads.`}
        btn_text={"Meet the Team"}
        btn_link={"/about"}
      />
      <CounterSection />
      {/*   <PageTitle /> */}
      {/*  <ClientTestimonial /> */}
      <NewsTracker />
      <DribbbleSection />
      <JungleSection title1={"join"} title2={"with us"} />
      <SocialSection />
    </>
  );
}
