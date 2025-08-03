"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function CursorFollower() {
  useEffect(() => {
    const follower = document.getElementById("cursor-follower");

    const moveFollower = (e) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveFollower);
    return () => window.removeEventListener("mousemove", moveFollower);
  }, []);

  useEffect(() => {
    const follower = document.getElementById("cursor-follower");

    const hoverTargets = document.querySelectorAll(".hover-target");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const type = el.getAttribute("data-cursor");

        if (type === "transparent") {
          gsap.to(follower, {
            backgroundColor: "transparent",
            border: "0px solid var(--primary)",
            scale: 2,
            duration: 0.3,
          });
        } else if (type === "red") {
          gsap.to(follower, {
            backgroundColor: "var(--primary)",
            border: "none",
            scale: 1,
            duration: 0.3,
          });
        }
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(follower, {
          backgroundColor: "var(--primary)",
          border: "none",
          scale: 1,
          duration: 0.3,
        });
      });
    });
  }, []);

  return <div id="cursor-follower" />;
}
