import React from "react";
import ReactLogo from "/assets/images/logo-footer.svg";
import facebook from "/assets/images/icon-facebook.svg";
import instagram from "/assets/images/icon-instagram.svg";
import twitter from "/assets/images/icon-twitter.svg";
import pinterest from "/assets/images/icon-pinterest.svg";
import youtube from "/assets/images/icon-youtube.svg";
import { useMediaQuery } from "react-responsive";
import "./Footer.scss";

const Footer = () => {
  const isBigEnough = useMediaQuery({ query: "(min-width:900px)" });
  return (
    <footer>
      {isBigEnough ? (
        <div className="footer__search">
          <div>
            <input type="search" placeholder="updates in your box..." />
            <button type="button">go</button>
          </div>
          <div>
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      ) : (
        <div className="footer__search">
          <input type="search" placeholder="updates in your box..." />
          <button type="button">go</button>
        </div>
      )}
      <div className="footer__links">
        <div className="footer__links__first">
          <ul>
            <li>
              <a href="home">home</a>
            </li>
            <li>
              <a href="pricing">pricing</a>
            </li>
            <li>
              <a href="products">products</a>
            </li>
            <li>
              <a href="about_us">about us</a>
            </li>
          </ul>
        </div>
        <div className="footer__links__second">
          <ul>
            <li>
              <a href="careers">careers</a>
            </li>
            <li>
              <a href="community">community</a>
            </li>
            <li>
              <a href="privacy_policy">privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__icons">
        <div className="footer__icons__social">
          <ul>
            <li>
              <a href="facebook">
                <img src={facebook} alt="facebook-icon" />
              </a>
            </li>
            <li>
              <a href="youtube">
                <img src={youtube} alt="youtube-icon" />
              </a>
            </li>
            <li>
              <a href="twitter">
                <img src={twitter} alt="twitter-icon" />
              </a>
            </li>
            <li>
              <a href="pinterest">
                <img src={pinterest} alt="pinterest-icon" />
              </a>
            </li>
            <li>
              <a href="instagram">
                <img src={instagram} alt="instagram-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__icons__manage">
          <img src={ReactLogo} alt="logo" />
        </div>
      </div>
      {isBigEnough ? null : (
        <div className="footer__copyright">
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
