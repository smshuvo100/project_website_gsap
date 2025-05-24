import { HeroAllSection } from "../components/HeroAllSection";
import { TextCounterSection } from "../components/TextCounterSection";
export default function page() {
  return (
    <>
      <HeroAllSection
        title1={"let’s talk about"}
        title2={"growing your business"}
        description={`Need better visibility, stronger branding,<br/> or scroll-stopping video? Tell us what you<br/> need — we’ll help you get there.`}
      />

      <TextCounterSection text={`Start your project — or just start the conversation.`} paragraph={`Tell us what’s not working — and where you want to go. We’ll respond with clear steps to help.`} />

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
            {/* Name */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" placeholder="Your email address" required />
              </div>
            </div>

            {/* Phone & Company */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company/Organization</label>
                <input type="text" id="company" name="company" placeholder="Ex. Trionn" />
              </div>
            </div>

            {/* Project Type & Budget */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="project-type">Project Type*</label>
                <select id="project-type" name="project-type" required defaultValue="">
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option>Web Design</option>
                  <option>Branding</option>
                  <option>Marketing</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Project Budget (USD)*</label>
                <select id="budget" name="budget" required defaultValue="">
                  <option value="" disabled>
                    Select budget
                  </option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
            </div>

            {/* Referral Source */}
            <div className="form-group">
              <label htmlFor="referral">How did you hear about us?</label>
              <select id="referral" name="referral" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Friend/Referral</option>
                <option>Other</option>
              </select>
            </div>

            {/* ✅ This is the field you asked for */}
            <div className="form-group">
              <label htmlFor="message">Tell us about your project*</label>
              <textarea id="message" name="message" rows="5" placeholder="Ex. Hello, we need help making this project unique." required></textarea>
            </div>

            {/* Submit Button */}
            <div className="btn form-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
