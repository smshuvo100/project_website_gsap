"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Loading({ onComplete }) {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            onComplete?.();
          }
        });
      }
    });

    tl.to(progressRef.current, {
      width: "100%",
      duration: 2,
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        percentRef.current.textContent = progress;
      }
    });

    return () => tl.kill();
  }, [onComplete]);

  const animatePreloaderBackground = () => {
    gsap.to(containerRef.current, {
      backgroundColor: "#f5f5f5", // Change to a lighter color for preloader
      duration: 1,
      ease: "power2.inOut"
    });
    gsap.to(containerRef.current, {
      backgroundColor: "#ffffff", // Final background color for preloader
      duration: 1,
      delay: 1,
      ease: "power2.inOut"
    });
  };

  return (
    <div ref={containerRef} className="loading-container">
      <p className="loading-text">
        Loading <span ref={percentRef}>0</span>%
      </p>
      <div className="progress-bar">
        <div ref={progressRef} className="progress-fill" />
      </div>
    </div>
  );
}
