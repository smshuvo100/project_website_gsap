// src/app/work/page.jsx

import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { WorkSection1 } from "../components/WorkSection1";

export default function page() {
  return (
    <>
      <HeroAllSection
        id={"sm-bg-text-sec"}
        title1={"werk dat vertrouwen opbouwt "}
        title2={"en resultaten oplevert"}
        description={`Wij laten zien hoe we dienstverlenende bedrijven helpen opvallen,<br/> hoger scoren en vertrouwen winnen — via SEO, branding en <br/>luchtcontent die mensen raakt.`}
      />
      <WorkSection1 />

      <LogoTracker />
      {/* WorkSection1.jsx */}
    </>
  );
}
