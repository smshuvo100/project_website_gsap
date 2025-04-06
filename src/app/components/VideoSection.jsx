"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export function VideoSection() {
  const videoRef = useRef(null);
  const videoSecRef = useRef(null);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Video animation - Scaling on scroll
  useGSAP(
    () => {
      gsap.from(videoRef.current, {
        y: -500,
        scale: 0.14,
        duration: 2,
        borderRadius: "50rem", // ✅ Use px or rem instead of %
        scrollTrigger: {
          trigger: videoSecRef.current,
          start: "top 60%",
          end: "top 80%",
          toggleActions: "play none none none",
          scrub: 2,
          pin: true,
          onEnter: () => {
            gsap.to(videoRef.current, {
              y: 0,
              scale: 1
            });
          }
        }
      });
    },
    { scope: videoSecRef }
  );

  return (
    <>
      <section id="video-sec" ref={videoSecRef} className="video-sec">
        <div className="container">
          <div className="video-wrapper" ref={videoRef}>
            <video autoPlay loop muted>
              <source src="/video/intro-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
