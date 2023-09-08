import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/StyleLogo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const navbar = () => {
      if (window.scrollY >= 851) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener("scroll", navbar);

    return () => {
      window.removeEventListener("scroll", navbar);
    };
  }, []);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <header className={nav ? "not" : "sticky-header"}>
      <a href="/" className="logo">
        <img src={logo} alt="StyleMeUp logo" className="header-logo" />
      </a>
      <div
        className={`burger-icon ${burgerMenuOpen ? "open" : ""}`}
        onClick={toggleBurgerMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav-links ${burgerMenuOpen ? "open" : ""}`}>
        <div className="navDesign">
          <a
            href="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </a>
          <a
            href="/#servicess"
            className={`nav-link ${
              location.pathname === "/#servicess" ? "active" : ""
            }`}
          >
            Our Services
          </a>
          <a
            href="/#aboutUs"
            className={`nav-link ${
              location.pathname === "/#aboutUs" ? "active" : ""
            }`}
          >
            About Us
          </a>
          <a
            href="/contactUs"
            className={`nav-link ${
              location.pathname === "/contactUs" ? "active" : ""
            }`}
          >
            Location
          </a>
          <a
            href="/#servicess"
            className={`nav-link ${
              location.pathname === "/#servicess" ? "active" : ""
            }`}
          >
            Book Your Appointment
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
