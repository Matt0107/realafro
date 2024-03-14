import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div>
          <a
            href="https://open.spotify.com/show/4OjXoLbRFNNCuDfS5Bhr4e?si=b78624cc9f284989"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src="/assets/spotify-black.svg"
              alt="Spotify icon"
            />
          </a>
          <a
            href="https://youtube.com/@AfrotennisTV?si=AaZTMwPA7wVRlJnY"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src="/assets/youtube-black.svg"
              alt="Youtube icon"
            />
          </a>
        </div>
        <div>
          {/* <NavLink to="/impressum" className="legal">
            Impressum
          </NavLink>
          <NavLink to="/privacy" className="legal">
            Privacy Policy
          </NavLink> */}
          <p className="legal">Website by Afrotennis</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
