import { HeroAllSection } from "../components/HeroAllSection";
export default function page() {
  return (
    <>
      <HeroAllSection
        title1={"let's roarinto"}
        title2={"the wildtogether."}
        description={`In the wilderness of change, our<br />
      world's view will roar into a new<br />
      tomorrow and beyond.`}
      />

      {/* 
      In the wilderness of change, our<br />
      world's view will roar into a new<br />
      tomorrow and beyond.
      
      */}
      <section className="contact-sec">
        <div className="container-w1">
          <div className="current-time">
            <div className="clock">
              <div className="hour hand"></div>
              <div className="min hand"></div>
              <div className="sec hand"></div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" placeholder="Your email address" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company/Organisation</label>
                <input type="text" id="company" name="company" placeholder="Ex. Trionn" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="project-type">Project type*</label>
                <select id="project-type" name="project-type" required class="light-bg">
                  <option disabled selected>
                    Project type
                  </option>
                  <option>Web Design</option>
                  <option>Branding</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Project budget (USD)*</label>
                <select id="budget" name="budget" required>
                  <option disabled selected>
                    Select budget
                  </option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="referral">How did you hear about us?</label>
              <select id="referral" name="referral">
                <option disabled selected>
                  Select
                </option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Friend/Referral</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label for="message">Tell us about your project*</label>
              <textarea id="message" name="message" rows="5" placeholder="Ex. Hello, Trionn Design. We need help to make this project unique." required></textarea>
            </div>
            <div class="btn form-btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
