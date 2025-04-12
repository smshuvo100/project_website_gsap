import Image from "next/image";

export function SocialSection() {
  return (
    <>
      <section className="social-sec">
        <a className="social-item" href="">
          <p>Dribbble</p>
          <Image src="/images/dribble.svg" alt="" width={64} height={64} />
        </a>
        <a className="social-item" href="">
          <p>Linkedin</p>
          <Image src="/images/linkedin.svg" alt="" width={64} height={64} />
        </a>
        <a className="social-item" href="">
          <p>Instagram</p>
          <Image src="/images/instagram.svg" alt="" width={64} height={64} />
        </a>
        <a className="social-item" href="">
          <p>Behance</p>
          <Image src="/images/behance.svg" alt="" width={64} height={64} />
        </a>
        <a className="social-item" href="">
          <p>Facebook</p>
          <Image src="/images/facebook.svg" alt="" width={64} height={64} />
        </a>
      </section>
    </>
  );
}
