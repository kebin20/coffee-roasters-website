import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
/* Images */
import coffeeRoastersLogoWhite from "../assets/shared/desktop/logo-white-text.svg";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.mobileLogo}
        src={coffeeRoastersLogoWhite}
        alt="coffeeroasters icon"
      />
      <ul className={styles.linksContainer}>
        <li>
          <Link to="/" className={styles.footerLinks}>
            home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className={styles.footerLinks}>
            about us
          </Link>
        </li>
        <li>
          <Link to="/subscribe" className={styles.footerLinks}>
            create your plan
          </Link>
        </li>
      </ul>
      <div className={styles.socialLinksContainer}>
        <a href="#">
          <img
            src={facebookIcon}
            className={styles.socialLink}
            alt="facebook link"
          />
        </a>
        <a href="#">
          <img
            src={twitterIcon}
            className={styles.socialLink}
            alt="twitter link"
          />
        </a>
        <a href="#">
          <img
            src={instagramIcon}
            className={styles.socialLink}
            alt="instagram link"
          />
        </a>
      </div>
    </footer>
  );
}
