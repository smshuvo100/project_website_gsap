import Image from "next/image";
import Link from "next/link";
export function DribbbleSection() {
  return (
    <>
      <div className="dribbble-middle-text">
        <Image src="/images/dribbble-logo.webp" alt="Logo" width={200} height={60} priority />
        <p className="text-1">
          Like a lion's roar echoing through
          <br />
          the jungle, a hint of our creative
          <br />
          minds emerges.
        </p>
        <div className="btn">
          <Link href="/about">Explore work</Link>
        </div>
      </div>
    </>
  );
}
/*  */
