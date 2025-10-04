import { BannerSection } from "../components/BannerSection";
import { CounterSection } from "../components/CounterSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";

// ✅ Metadata API for App Router
export const metadata = {
  title:
    "About Market Target | Strategic Growth Partner for Service Businesses",
  description:
    "Market Target helps service-based brands get found, build trust, and win clients through data-backed SEO, compelling branding, and high-impact video.",
};

export default function About() {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <HeroAllSection
        id={"sm-bg-text-sec"}
        title1={"een strategische groeipartner "}
        title2={"voor dienstverlenende bedrijven."}
        description={`Wij helpen dienstverlenende merken gevonden te worden,<br/> vertrouwen op te bouwen en klanten te winnen — met data-gedreven <br/>SEO, sterke branding en video met impact.`}
      />
      <TextCounterSection
        text={`Market Target bouwt op meer dan 10 jaar ervaring<br/> in het helpen van dienstverlenende bedrijven om <br/> boven het lawaai uit te stijgen.`}
        paragraph={`Wij hebben bureaus, consultants en vakmensen geholpen om<br/> kliks om te zetten in leads en leads in omzet — zonder<br/> een cent te verspillen.`}
      />

      <BannerSection
        title={"strategisch. creatief. gebouwd om te converteren."}
        bgImg={"/images/banner11.webp"}
      />

      <WhoWeAre
        title1={"who"}
        title2={"we are"}
        description={`Wij zijn geen creatief bureau.
 Wij zijn een resultaatgericht <br />bureau. Market Target combineert diepgaande technische SEO,<br /> brand positioning en hoogwaardige video om <br />dienstverlenende bedrijven te helpen hun zichtbaarheid <br />te vergroten, geloofwaardigheid op te bouwen en <br />echte leads te genereren.`}
        paragraph={` Wij blijven voor op algoritme-updates, designtrends en koopgedrag, zodat jij dat niet hoeft. Wij brengen meetbare duidelijkheid in je online aanwezigheid.`}
        btn_text={"About Us"}
        btn_link={"/about"}
      />
      <CounterSection />
      {/*   <PageTitle /> */}
      {/*  <ClientTestimonial /> */}
      <LogoTracker />
      {/* 
      HeroAboutSection.jsx
      */}
    </>
  );
}
