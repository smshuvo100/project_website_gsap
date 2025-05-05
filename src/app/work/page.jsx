import { HeroAllSection } from "../components/HeroAllSection";
import { WorkSection1 } from "../components/WorkSection1";

export default function page() {
  return (
    <>
      <HeroAllSection
        id={"sm-bg-text-sec"}
        title1={"our creative roar"}
        title2={"defines ourlegacy."}
        description={`Combining the latest trends in design, tech, branding and
  <br /> many other fields is what we do best. We don't settle to view
  <br /> the world from one perspective.`}
      />
      <WorkSection1 />
      {/* WorkSection1.jsx */}
    </>
  );
}
