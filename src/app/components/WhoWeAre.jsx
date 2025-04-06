import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

export function WhoWeAre() {
  const whoWeAreRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

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
          trigger: whoWeAreRef.current,
          start: "top 40%",
          end: "bottom 80%",
          scrub: 2
        }
      });
    },
    { scope: whoWeAreRef }
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
          trigger: whoWeAreRef.current,
          start: "top 40%",
          end: "bottom 80%",
          scrub: 2
        }
      });
    },
    { scope: whoWeAreRef }
  );

  return (
    <>
      <section className="recent-work-sec who-we-are">
        <div className="container">
          <div className="flex-box">
            <div className="text">
              <h3 className="title-3 text-left" ref={whoWeAreRef}>
                <span className="block sm1" ref={text1Ref}>
                  who
                </span>
                <span className="block sm2" ref={text2Ref}>
                  we are
                </span>
              </h3>

              <p className="text-3">
                As an award-winning agency within
                <br />
                the digital jungle, TRIONN® transcends
                <br />
                aesthetics, crafting your vision into a<br />
                legacy that endures.
                <br />
              </p>
            </div>
          </div>
          <div className="right-text">
            <div className="box1">
              <p className="text-1">
                We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences.
              </p>
              <div className="btn">
                <Link href="/about">About us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
