import Image from "next/image";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
export function LeftImgSection() {
  const leftImgSecRef = useRef(null);
  const content1Ref = useRef(null);
  const images2Ref = useRef(null);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // content animation
  useGSAP(
    () => {
      gsap.from(content1Ref.current, {
        y: 250,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: leftImgSecRef.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 2
        }
      });
    },
    { scope: leftImgSecRef }
  );

  // images1 animation
  useGSAP(
    () => {
      gsap.from(images2Ref.current, {
        x: -350,
        rotate: -10,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: leftImgSecRef.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 2
        }
      });
    },
    { scope: leftImgSecRef }
  );

  return (
    <>
      <section className="right-img-section left-img-sec" ref={leftImgSecRef}>
        <div className="container">
          <div className="flex-box">
            <div className="img-box">
              <Link href="/">
                <Image ref={images2Ref} src="/images/imusic-main-landscape.webp" alt="loftloom" width={1500} height={1000} priority />
              </Link>
            </div>
            <div className="content" ref={content1Ref}>
              <h2 className="title-2">imusic</h2>
              <p className="text-1">Research, UX, UI Design</p>

              <div className="btn">
                <Link href="/about">View project</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
