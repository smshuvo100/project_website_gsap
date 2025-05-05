"use client";
import { BannerSection } from "../components/BannerSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { ServicesSection } from "../components/ServicesSection";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";
export default function page() {
  return (
    <>
      <HeroAllSection
        id={"secrion1"}
        title1={"experience our"}
        title2={"wild digital magic."}
        description={`Combining the latest trends in design, tech, branding and
  <br /> many other fields is what we do best. We don't settle to view
  <br /> the world from one perspective.`}
      />

      <TextCounterSection
        text={`In the wild digital realm, we craft<br />
          products that roar with user<br />
          friendly innovation.`}
      />
      <BannerSection title={"boundless creative realm."} />

      <WhoWeAre
        description={`We're here to make tech businesses roar in the digital<br />
jungle, crafting valuable impact through design,<br />
branding, and development services.`}
        paragraph={`Challenges are the soil where our growth blossoms. Armed with digital prowess, we fearlessly overcome them. Bring your branding, web design, and creative challenges; our lionhearted approach will leave a lasting impression.`}
        btn_text={"About Us"}
        btn_link={"/about"}
      />
      <ServicesSection
        title={"design"}
        description={`Your designs, a fierce roar in the digital wilderness, carve an indelible social footprint, capturing the very essence of your unique identity.`}
        list1={`<p>User interface</p>
                  <p>User experience</p>
                  <p>Websites</p>
                  <p>Visual design</p>
                  <p>Prototypes</p>`}
        list2={`<p>Web & Mobile apps</p>
                  <p>SaaS product design</p>
                  <p>Design systems</p>
                  <p>Interaction design</p>`}
      />

      <ServicesSection
        title={"development"}
        description={`In this design jungle, we don't just roar concepts; we bring them to life with practicality, emphasizing micro animations and interactions.`}
        list1={`<p>React JS</p>
                  <p>Next JS</p>
                  <p>Node JS</p>
                  <p>Angular JS</p>
                  <p>WordPress</p>`}
        list2={`<p>HTML5 & CSS3</p>
                  <p>LESS & SASS</p>
                  <p>Bootstrap</p>
                  <p>Tailwind</p>
                  <p>Foundation</p>`}
      />

      <ServicesSection
        title={"branding"}
        description={`Our goal is your brand's wild influence. Exclusive logos, mockups, and corporate identities make your unique value stand out.`}
        list1={`<p>Visual identity</p>
                  <p>Branding strategy</p>
                  <p>Mockups</p>`}
        list2={`<p>Graphic designs</p>
                  <p>Style guide</p>
                  <p>Typography</p>`}
      />
      <LogoTracker />
    </>
  );
}
