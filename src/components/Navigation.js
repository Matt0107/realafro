import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  const handleBurgerMenu = () => {
    document.body.classList.toggle("burger-menu-open");
  };

  const handleTitleClick = () => {
    window.location.href = "/";
  };

  const handleCloseButtonClick = () => {
    setIsBurgerMenuOpen(false);
    document.body.classList.remove("burger-menu-open");
  };

  const handleDocumentClick = (event) => {
    if (
      !event.target.closest(".burger-menu") &&
      !event.target.closest(".burger-menu-content")
    ) {
      setIsBurgerMenuOpen(false);
      document.body.classList.remove("burger-menu-open");
    }
  };

  React.useEffect(() => {
    const burgerMenu = document.querySelector(".burger-menu");
    const closeButton = document.querySelector(".close-button");
    const title = document.querySelector(".title");
    burgerMenu.addEventListener("click", handleBurgerMenu);
    closeButton.addEventListener("click", handleCloseButtonClick);
    document.addEventListener("click", handleDocumentClick);
    title.addEventListener("click", handleTitleClick);
    return () => {
      burgerMenu.removeEventListener("click", handleBurgerMenu);
      closeButton.removeEventListener("click", handleCloseButtonClick);
      document.removeEventListener("click", handleDocumentClick);
      title.removeEventListener("click", handleTitleClick);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsBurgerMenuOpen(false);
    document.body.classList.remove("burger-menu-open");
  };

  return (
    <div>
      <div className={`navbar ${isBurgerMenuOpen ? "burger-menu-open" : ""}`}>
        <div className="title" onClick={() => (window.location.href = "/")}>
          AFROTENNIS
        </div>
        <NavLink to="/about" onClick={handleNavLinkClick}>
          About
        </NavLink>
        <NavLink to="/podcast" onClick={handleNavLinkClick}>
          Podcast
        </NavLink>
        <NavLink to="/contact" onClick={handleNavLinkClick}>
          Contact
        </NavLink>
        <div className="burger-menu" onClick={handleBurgerMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="burger-menu-content">
        <NavLink to="/about" onClick={handleNavLinkClick}>
          About
        </NavLink>
        <NavLink to="/podcast" onClick={handleNavLinkClick}>
          Podcast
        </NavLink>
        <NavLink to="/contact" onClick={handleNavLinkClick}>
          Contact
        </NavLink>
        <button className="close-button" onClick={handleCloseButtonClick}>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
