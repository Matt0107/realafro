import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div id="contact-section">
        <div className="general-management page-container">
          <h2>AFROTENNIS</h2>
          <h3>The African Tennis Club</h3>
          <div>
            {/* <div className="contact-icons">
              <img src="./assets/phone.svg" alt="phone" />
              <p>+497224-995 751</p>
            </div>
            <div className="contact-icons">
              <img src="./assets/mobile_phone.svg" alt="mobile-phone" />
              <p>+49151-504 012 99</p>
            </div> */}
            <a href="mailto:hello@afrotennis.com" className="contact-links">
            hello@afrotennis.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
