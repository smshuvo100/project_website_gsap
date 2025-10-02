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

      <LeftImgSection
        title={"website ontwikkeling"}
        description={
          "Luxury, conversion-focused websites tailored to your brand - specializing in real estate, home services, and corporate sites that impress and perform."
        }
        images={"wdev.webp"}
      />

      <RightImgSection
        title={"technische seo"}
        description={
          "Improve your rankings with clean, fast, search-optimized foundations."
        }
        images={"seo.webp"}
      />
      <LeftImgSection
        title={"brand development"}
        description={
          "Build a cohesive, trustworthy identity that clients remember."
        }
        images={"brand-building.webp"}
      />
      <RightImgSection
        title={"video & drone content"}
        description={
          "Stand out with cinematic, story-driven visuals designed to educate, impress, and convert."
        }
        images={"video2.mp4"}
      />
      <LeftImgSection
        title={"drone fotogrammetrie & luchtmapping"}
        description={
          "We capture high-resolution drone imagery to create detailed maps, 3D models, and precision measurements — perfect for campsites, resorts, and outdoor venues looking to plan, manage, and showcase their spaces from above."
        }
        images={"smmap.webp"}
      />
      <WhoWeAre
        title1={"werk dat"}
        title2={"presteert"}
        paragraph={`From professional service websites
                <br />
                to branded aerial videos — our work builds
                <br />
                credibility and converts attention into leads.`}
        btn_text={"Contact Us"}
        btn_link={"/contact"}
      />
      <WhoWeAre
        title1={"wie"}
        title2={"wij zijn"}
        description={`Market Target is een resultaatgericht digitaal <br /> partner voor dienstverlenende bedrijven.`}
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
