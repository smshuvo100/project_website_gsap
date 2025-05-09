"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
function Footer() {
  const recentWorkSecRef = useRef(null);
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
          trigger: recentWorkSecRef.current,
          start: "top 60%",
          end: "bottom 70%",
          scrub: 2
        }
      });
    },
    { scope: recentWorkSecRef }
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
          trigger: recentWorkSecRef.current,
          start: "top 60%",
          end: "bottom 70%",
          scrub: 2
        }
      });
    },
    { scope: recentWorkSecRef }
  );
  return (
    <>
      <section className="recent-work-sec" ref={recentWorkSecRef}>
        <div className="container">
          <div className="flex-box">
            <div className="text">
              <h3 className="title-3 text-left">
                <span className="block sm1" ref={text1Ref}>
                  time to
                </span>
                <span className="block sm2" ref={text2Ref}>
                  roar!
                </span>
              </h3>
            </div>
            <div className="btn">
              <Link href="/about">Explore work</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="boxa">
            <a className="f-link sm1" href="">
              <p className="ft1">Email</p>
              <p className="ft2">hello@trionn.com</p>
            </a>
            <a className="f-link sm2" href="">
              <p className="ft1">Call</p>
              <p className="ft2">0165841254</p>
            </a>
            <a className="f-link sm4" href="">
              <p className="ft1">Skype</p>
              <p className="ft2">sjsgjkh.100</p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
