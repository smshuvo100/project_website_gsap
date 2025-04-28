"use client";
import { ClientTestimonial } from "../components/ClientTestimonial";
import { CounterSection } from "../components/CounterSection";
import { HeroAboutSection } from "../components/HeroAboutSection";
import { LogoTracker } from "../components/LogoTracker";
import { PageTitle } from "../components/PageTitle";
import { WhoWeAre } from "../components/WhoWeAre";

export default function About() {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <HeroAboutSection />
      <section className="sm-center-text-sec">
        <div className="container">
          <div className="text-center">
            <p className="text-3">
              TRIONN® has a roaring 20+ years history
              <br />
              of empowering companies in the
              <br />
              corporate jungle.
            </p>
          </div>
        </div>
      </section>
      <section id="sm-bg-text-sec" className="sm-bg-text-sec" style={{ backgroundImage: "url('https://trionn.com/_next/static/media/lion.2b10529a.webp')" }}>
        <div className="overlay"></div>
        <div className="text-cont">
          <h2 className="title-3 text-center">majestic designs since 2000</h2>
        </div>
      </section>
      <WhoWeAre />
      <CounterSection />
      <PageTitle />
      <ClientTestimonial />
      <LogoTracker />
      {/* 
      HeroAboutSection.jsx
      */}
    </>
  );
}
