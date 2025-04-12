import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export function JungleSection() {
  const jungleSecRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Text 1 animation
  useGSAP(
    () => {
      gsap.from(text1Ref.current, {
        x: 100,
        duration: 2,
        ease: "power1.inOut",
        backgroundPositionX: "100%",
        scrollTrigger: {
          trigger: text1Ref.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: 2
        }
      });
    },
    { scope: text1Ref }
  );

  // Text 2 animation
  useGSAP(
    () => {
      gsap.from(text2Ref.current, {
        x: -100,
        duration: 2,
        ease: "power1.inOut",
        backgroundPositionX: "100%",
        scrollTrigger: {
          trigger: text2Ref.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: 2
        }
      });
    },
    { scope: text2Ref }
  );

  // Text 3 animation
  useGSAP(
    () => {
      gsap.from(text3Ref.current, {
        x: 100,
        duration: 2,
        ease: "power1.inOut",
        backgroundPositionX: "100%",
        scrollTrigger: {
          trigger: text3Ref.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: 2
        }
      });
    },
    { scope: text3Ref }
  );
  return (
    <>
      <section className="jungle-sec" ref={jungleSecRef}>
        <h1 className="title-3 text-center">
          <span className="block sm1" ref={text1Ref}>
            join our
          </span>
          <span className="block sm2" ref={text2Ref}>
            jungle
          </span>
          <span className="block sm3" ref={text3Ref}>
            trek
          </span>
        </h1>
      </section>
    </>
  );
}
