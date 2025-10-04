import { BannerSection } from "../components/BannerSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { ServicesSection } from "../components/ServicesSection";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";

// ✅ Metadata API for App Router
export const metadata = {
  title:
    "Our Services | SEO, Branding, Video & Web Development | Market Target",
  description:
    "Discover Market Target’s range of services for service-based businesses — from SEO and branding to video content and website development. Proven strategies for measurable growth.",
};
export default function page() {
  return (
    <>
      {/* we help you get found, 
    trusted, and chosen. 
    */}

      <HeroAllSection
        id={"secrion1"}
        title1={"wij helpen je gevonden, "}
        title2={"vertrouwd en gekozen te worden."}
        description={`Wij helpen dienstverlenende bedrijven om aandacht om<br/> te zetten in actie — met technische precisie, overtuigende <br/>messaging en visuele content die blijft hangen.`}
      />
      <TextCounterSection
        text={`We help service businesses turn attention<br /> into action — with technical precision, compelling<br /> messaging, and scroll-stopping visuals.<br />`}
      />
      <BannerSection
        title={"strategie ontmoet uitvoering. resultaten volgen."}
        bgImg={"/images/banner.webp"}
      />
      <WhoWeAre
        description={`Wij werken met dienstverlenende bedrijven die meer willen dan alleen verkeer — ze willen vertrouwen, zichtbaarheid en gekwalificeerde leads. Elke dienst die wij aanbieden is gericht op één ding: meetbare groei.`}
      />
      <ServicesSection
        title={`website <br />ontwikkeling`}
        description={`Luxe, conversiegerichte websites op maat van je merk — gespecialiseerd in vastgoed, horecadiensten en bedrijven die impact en prestaties nodig hebben.`}
        list1={`<p>React JS</p>
                <p>Next JS</p>
                <p>Node JS</p>
                <p>Angular JS</p>
                <p>WordPress</p>
                <p>Magento</p>
                <p>Shopify</p>
                <p>Laravel</p>
                <p>PHP</p>`}
        list2={`<p>HTML5 & CSS3</p>
                <p>LESS & SASS</p>
                <p>Bootstrap</p>
                <p>Tailwind</p>
                <p>Foundation</p>
                <p>Javascript</p>
                <p>jQuery</p>`}
      />
      <ServicesSection
        title={`seo waarmee je <br />wordt gevonden`}
        description={`Wij auditen, repareren en optimaliseren je site van de basis af — structuur, snelheid, schema en content — zodat je hoger scoort en zichtbaar blijft.`}
        list1={`<p>Site audits</p>
                  <p>Keyword strategy</p>
                  <p>Core Web Vitals</p>
                  <p>Structured data</p>
                  `}
        list2={`<p>Local SEO</p>
                  <p>On-page SEO</p>
                  <p>Performance optimization</p>`}
      />
      <ServicesSection
        title={`video die vertrouwen opbouwt en converteert`}
        description={`Wij creëren korte, cinematische en luchtvideo’s die jouw expertise laten zien en je merk sterker maken.`}
        list1={`<p>Drone videography</p>
                  <p>Service explainers</p>
                  <p>Social video content</p>`}
        list2={`<p>Brand overviews</p>
                  <p>ouTube & web-ready formats</p>`}
      />
      <ServicesSection
        title={`branding die jou de voor de hand liggende keuze maakt`}
        description={` Wij bouwen merken die consistent, geloofwaardig en gemakkelijk te herkennen zijn — van logo tot stijlgids en van tone of voice tot merkidentiteit.`}
        list1={`<p>Brand positioning</p>
                  <p>Messaging frameworks</p>
                  <p>Visual identity</p>`}
        list2={`<p>Logo & typography</p>
                  <p>Style guides</p>`}
      />
      <ServicesSection
        title={`drone fotogrammetrie & luchtmapping`}
        description={`Wij leggen high-resolution dronebeelden vast voor nauwkeurige mapping, 3D-modellen en projectinspecties — perfect voor vastgoed, bouw, natuurbeheer en buitenprojecten.<br /><br />
          <p>Turn aerial data into actionable plans and standout visuals.</p>
          <p>Orthophotos & high-accuracy mapping</p>
          <p>3D terrain / structure models (DEM/DSM)</p>
          <p>Campsite layout planning & capacity visuals</p>
          <p>Measurement: area, distance, volume</p>
          <p>Marketing-ready aerial photography & video</p>
          `}
        list1={`<p></p>
                  `}
        list2={`<p></p>
                 `}
      />
      <LogoTracker />
    </>
  );
}
