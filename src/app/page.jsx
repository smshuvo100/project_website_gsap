import Link from "next/link";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { VideoSection } from "./components/VideoSection";

export default function Home() {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <section className="hero-wrapper">
        <div className="container">
          <h1 className="title-1 text-center">
            <span className="block">roar in the</span>
            <span className="block">digital wilderness.</span>
          </h1>
          <p className="text-center">
            We roar with success, delivering the <br />
            TRIONN®through versatile design, branding and the
            <br /> latesttech development to companies.
          </p>
          <div>
            <div className="scroll-next-sec">
              <Link href="#video-sec">
                <HiOutlineArrowSmDown />
              </Link>
            </div>
          </div>
          <div className="btn-group">
            <div className="btn">
              <Link href="/about">Explore work</Link>
            </div>
            <div className="btn">
              <Link href="/about">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="video-sec" className="video-sec">
        <div className="container">
          <div className="video-wrapper">
            <video autoPlay loop muted>
              <source src="/video/intro-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section> */}
      <VideoSection />

      <br />
      <br />
      <br />
      <br />
      <h3 className="title-3 text-left">
        <span className="block">recent</span>
        <span className="block">work</span>
      </h3>
      <p className="text-2">
        In the creative wilderness,
        <br />
        clients find our work truly
        <br />
        beloved.
      </p>

      <br />
      <br />
      <br />
      <br />

      <h2 className="title-2">loftloom</h2>
      <p className="text-1">UI Design, UX, Wireframe</p>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}
