import React, { useState } from "react";
import styles from "./NavBar.module.css";
import coffeeRoastersLogo from "../assets/shared/desktop/logo.svg";

export default function NavBar(props) {
  const [toggle, setToggle] = useState(false);

  function toggleHamburgerMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.navFlexContainer}>
        <div>
          <img
            className={styles.mobileLogo}
            src={coffeeRoastersLogo}
            alt="coffee roasters logo"
          />
        </div>

        <ul className={styles.menuItems}>
          <li>
            <a href="#" className={styles.menuLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.menuLink}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" className={styles.menuLink}>
              Create Your Plan
            </a>
          </li>
        </ul>

        <button onClick={toggleHamburgerMenu} className={styles.hamburgerMenu}>
          <span
            className={`${styles.hamburgerTop} ${toggle && styles.open} ${
              toggle && styles.openHamburgerTop
            }`}
          ></span>
          <span
            className={`${styles.hamburgerMiddle} ${toggle && styles.open} ${
              toggle && styles.openHamburgerMiddle
            }`}
          ></span>
          <span
            className={`${styles.hamburgerBottom} ${toggle && styles.open} ${
              toggle && styles.openHamburgerBottom
            }`}
          ></span>
        </button>
      </div>

      {toggle && (
        <ul className={styles.mobileMenuItems}>
          <li>
            <a className={styles.mobileLink} href="">
              Home
            </a>
          </li>
          <li>
            <a className={styles.mobileLink} href="">
              About Us
            </a>
          </li>
          <li>
            <a className={styles.mobileLink} href="">
              Create your plan
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
