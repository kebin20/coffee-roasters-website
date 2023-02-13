import React from 'react';
import styles from './Footer.module.css';
/* Images */
import coffeeRoastersLogoWhite from '../assets/shared/desktop/logo-white-text.svg';
import facebookIcon from '../assets/shared/desktop/icon-facebook.svg';
import twitterIcon from '../assets/shared/desktop/icon-twitter.svg';
import instagramIcon from '../assets/shared/desktop/icon-instagram.svg';

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
          <a className={styles.footerLinks} href="#">
            home
          </a>
        </li>
        <li>
          <a className={styles.footerLinks} href="#">
            about us
          </a>
        </li>
        <li>
          <a className={styles.footerLinks} href="#">
            create your plan
          </a>
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
