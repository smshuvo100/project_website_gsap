import Image from "next/image";
export function WorkSection1() {
  return (
    <>
      <section className="work-sec1">
        <div className="container-w1">
          <div className="img-text-box">
            <div className="img-box">
              <video
                src={`/video/video2.mp4`}
                width="100%"
                height="auto"
                muted
                autoPlay
                loop
                playsInline
                className="video-element"
              />
            </div>
            <div className="content">
              <h2 className="title-4">
                <span>drone videografie</span>
              </h2>
              <p className="text-1">
                Prachtige luchtbeelden die je merk versterken en diensten tot
                leven
                <br /> brengen — perfect voor vastgoed, bouw, toerisme en lokale
                marketing.
              </p>
              <ul>
                <li>Voor/na vastgoedvluchten</li>
                <li>Bedrijfsvideo’s</li>
                <li>Shots voor social video’s</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="work-sec1">
        <div className="container-w1">
          <div className="img-text-box">
            <div className="img-box">
              <Image
                src={`/images/seo.webp`}
                width={1240}
                height={700}
                alt="alt"
              />
            </div>
            <div className="content">
              <h2 className="title-4">
                <span>seo & prestaties</span>
              </h2>
              <p className="text-1">
                Visuele rapporten, keywordstrategie-overzichten en
                webperformanceverbeteringen
                <br /> die de waarde van slimme, technische SEO laten zien.
              </p>
              <ul>
                <li>Voor/na rankings en traffic-screenshots</li>
                <li>Snelheidsverbeteringen</li>
                <li>SEO-dashboard previews</li>
                <li>Schema/technische markup-resultaten</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="work-sec1">
        <div className="container">
          <div className="sm-flex sm1">
            <div className="call sm1">
              <div className="img-text-box">
                <div className="img-box">
                  <Image
                    src={`/images/ecommerch.webp`}
                    width={400}
                    height={600}
                    alt="alt"
                  />
                </div>
                <div className="content">
                  <h2 className="title-4">
                    <span>e-commerce</span>
                  </h2>
                  <p className="text-1">
                    E-commerce website ontwerp en ontwikkeling
                  </p>
                </div>
              </div>
            </div>
            <div className="call sm2">
              <div className="img-text-box">
                <div className="img-box">
                  <Image
                    src={`/images/wordpress.webp`}
                    width={760}
                    height={345}
                    alt="alt"
                  />
                </div>
                <div className="content">
                  <h2 className="title-4">
                    <span>wordpress</span>
                  </h2>
                  <p className="text-1">
                    WordPress-website ontwerp en ontwikkeling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-sec1">
        <div className="container-w2">
          <div className="img-text-box">
            <div className="img-box">
              <Image
                src={`/images/shopify.webp`}
                width={880}
                height={372}
                alt="alt"
              />
            </div>
            <div className="content">
              <h2 className="title-4">
                <span>shopify</span>
              </h2>
              <p className="text-1">Shopify-website ontwerp en ontwikkeling</p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-sec1">
        <div className="container">
          <div className="sm-flex sm2">
            <div className="call sm1">
              <div className="img-text-box">
                <div className="img-box">
                  <Image
                    src={`/images/webflow.webp`}
                    width={400}
                    height={209}
                    alt="alt"
                  />
                </div>
                <div className="content">
                  <h2 className="title-4">
                    <span>webflow</span>
                  </h2>
                  <p className="text-1">
                    Webflow-website ontwerp en ontwikkeling
                  </p>
                </div>
              </div>
            </div>
            <div className="call sm2">
              <div className="img-text-box">
                <div className="img-box">
                  <Image
                    src={`/images/wix.webp`}
                    width={760}
                    height={427}
                    alt="alt"
                  />
                </div>
                <div className="content">
                  <h2 className="title-4">
                    <span>wix</span>
                  </h2>
                  <p className="text-1">Wix-website ontwerp en ontwikkeling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
