import React, { useState } from "react";
import ReactLogo from "/assets/images/logo.svg";
import "./Nav.scss";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMobileMenu = () => {
    document.querySelector(".nav__links").classList.toggle("active");
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="nav__logo">
        <img src={ReactLogo} alt="logo" />
      </div>
      <div className="nav__links">
        <ul>
          <li>
            <a href="pricing">pricing</a>
          </li>
          <li>
            <a href="product">product</a>
          </li>
          <li>
            <a href="about_us">about us</a>
          </li>
          <li>
            <a href="careers">careers</a>
          </li>
          <li>
            <a href="community">community</a>
          </li>
        </ul>
      </div>
      <div className="nav__getStarted">
        <button type="button">get started</button>
      </div>
      <div className="nav__mobileMenu">
        <button onClick={handleMobileMenu}>
          <span className={isActive ? "active" : ""}></span>
          <span className={isActive ? "active" : ""}></span>
          <span className={isActive ? "active" : ""}></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
