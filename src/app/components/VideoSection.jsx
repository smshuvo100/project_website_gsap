"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export function VideoSection() {
  const videoContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial small state
    gsap.set(videoContainerRef.current, {
      scale: 0.3,
      opacity: 0.7,
      borderRadius: "50%"
    });

    // Create scroll animation
    gsap.to(videoContainerRef.current, {
      scale: 1,
      opacity: 1,
      borderRadius: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center", // When top of section hits center of viewport
        end: "bottom center", // When bottom of section hits center of viewport
        scrub: 1, // Smooth scrubbing effect
        markers: false // Set to true to see trigger positions
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="video-sec" className="video-sec">
      <div className="container">
        <div ref={videoContainerRef} className="video-wrapper">
          <video autoPlay loop muted playsInline>
            <source src="/video/intro-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
