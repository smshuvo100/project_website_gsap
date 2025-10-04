"use client";
import { useState } from "react";
import { HeroAllSection } from "../components/HeroAllSection";
import { TextCounterSection } from "../components/TextCounterSection";
import AnimatedButton from "../components/AnimatedButton";

export default function page() {
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };
  return (
    <>
      <HeroAllSection
        title1={" laten we praten over het"}
        title2={"groeien van jouw bedrijf"}
        description={`Heb je behoefte aan meer zichtbaarheid, sterkere branding<br/> of video die direct de aandacht trekt? Vertel ons<br/> wat je nodig hebt — wij helpen je daar te komen.`}
      />

      <TextCounterSection
        text={`Start je project — of begin gewoon het gesprek.`}
        paragraph={`Vertel ons wat er niet werkt — en waar je heen wilt. Wij reageren met duidelijke stappen om je te helpen.`}
      />

      <section className="contact-sec">
        <div className="container-w1">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Naam*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Telefoon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Bedrijf</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="projectType">Projecttype*</label>
                <select id="projectType" name="projectType" required>
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option>Web Design</option>
                  <option>Branding</option>
                  <option>Marketing</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Projectbudget*</label>
                <select id="budget" name="budget" required>
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

            <div className="form-group">
              <label htmlFor="referral">Hoe heb je van ons gehoord?</label>
              <select id="referral" name="referral">
                <option value="" disabled>
                  Select
                </option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Friend/Referral</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Vertel ons meer over je project*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us more..."
                required
              ></textarea>
            </div>

            <div className="btn form-btn">
              <AnimatedButton as="button" type="submit">
                Verstuur
              </AnimatedButton>
            </div>

            {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
