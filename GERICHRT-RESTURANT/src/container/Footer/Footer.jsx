import React from "react";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Address , City , State , 000000</p>
        <p className="p__opensans">+919999999999</p>
        <p className="p__opensans">+919191919191</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">
          "The best way to find your self is to lose yourself in the service of
          others."{" "}
        </p>
        <img src={images.spoon} className="spoon__img" alt="" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">8:00am - 8:00pm</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">10:00am - 10:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">@2023 Gericht. Studied from "JSM" with ❤ by PRAKASH</p>
    </div>
  </div>
);

export default Footer;
