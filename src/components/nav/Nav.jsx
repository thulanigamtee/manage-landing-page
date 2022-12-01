import React, { useState } from "react";
import ReactLogo from "../../assets/images/logo.svg";
import "./_Nav.scss";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMobileMenu = () => {
    document.querySelector(".nav__links").classList.toggle("active");
    setIsActive(!isActive);
  };

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={ReactLogo} alt="logo" />
      </div>
      <div className="nav__links">
        <ul>
          <li>
            <a href="#">pricing</a>
          </li>
          <li>
            <a href="#">product</a>
          </li>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">careers</a>
          </li>
          <li>
            <a href="#">community</a>
          </li>
        </ul>
      </div>
      <div className="nav__getStarted">
        <button type="button">get started</button>
      </div>
      <div className="nav__mobileMenu">
        <button onClick={handleMobileMenu}>
          <div className={isActive ? "active" : ""}></div>
          <div className={isActive ? "active" : ""}></div>
          <div className={isActive ? "active" : ""}></div>
        </button>
      </div>
    </div>
  );
};

export default Nav;
