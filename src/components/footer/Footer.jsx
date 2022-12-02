import React from "react";
import ReactLogo from "../../assets/images/logo-footer.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import { useMediaQuery } from "react-responsive";
import "./Footer.scss";

const Footer = () => {
  const isBigEnough = useMediaQuery({ query: "(min-width:768px)" });
  return (
    <div className="footer">
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
              <a>home</a>
            </li>
            <li>
              <a>pricing</a>
            </li>
            <li>
              <a>products</a>
            </li>
            <li>
              <a>about us</a>
            </li>
          </ul>
        </div>
        <div className="footer__links__second">
          <ul>
            <li>
              <a>careers</a>
            </li>
            <li>
              <a>community</a>
            </li>
            <li>
              <a>privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__icons">
        <div className="footer__icons__social">
          <ul>
            <li>
              <a>
                <img src={facebook} alt="facebook-icon" />
              </a>
            </li>
            <li>
              <a>
                <img src={youtube} alt="youtube-icon" />
              </a>
            </li>
            <li>
              <a>
                <img src={twitter} alt="twitter-icon" />
              </a>
            </li>
            <li>
              <a>
                <img src={pinterest} alt="pinterest-icon" />
              </a>
            </li>
            <li>
              <a>
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
    </div>
  );
};

export default Footer;
