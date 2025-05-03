"use client";
import { BannerSection } from "../components/BannerSection";
import { ClientTestimonial } from "../components/ClientTestimonial";
import { CounterSection } from "../components/CounterSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { PageTitle } from "../components/PageTitle";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";

export default function About() {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <HeroAllSection
        id={"sm-bg-text-sec"}
        title1={"a versatile"}
        title2={"design agency."}
        description={`Combining the latest trends in design, tech, branding and
<br /> many other fields is what we do best. We don't settle to view
<br /> the world from one perspective.`}
      />
      <TextCounterSection />
      <BannerSection />

      {/* 
      BannerSection.jsx
      
      */}
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
      <LogoTracker />
      {/* 
      HeroAboutSection.jsx
      */}
    </>
  );
}
