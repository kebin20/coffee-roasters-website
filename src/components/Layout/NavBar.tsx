import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import coffeeRoastersLogo from "../../assets/shared/desktop/logo.svg";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  function toggleHamburgerMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.navFlexContainer}>
        <Link onClick={() => setToggle(false)} to="/">
          <img
            className={styles.mobileLogo}
            src={coffeeRoastersLogo as unknown as string}
            alt="coffee roasters logo"
          />
        </Link>

        <ul className={styles.menuItems}>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/"
              className={styles.menuLink}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/aboutus"
              className={styles.menuLink}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/subscribe"
              className={styles.menuLink}
            >
              Create Your Plan
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/coffee"
              className={styles.menuLink}
            >
              Coffee
            </Link>
          </li>
          {/* <li>
            <Link
              onClick={() => setToggle(false)}
              to="/registration"
              className={styles.menuLink}
            >
              Register
            </Link>
          </li> */}
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
            <Link
              onClick={() => setToggle(false)}
              to="/"
              className={styles.menuLink}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/aboutus"
              className={styles.menuLink}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/subscribe"
              className={styles.menuLink}
            >
              Create Your Plan
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/coffee"
              className={styles.menuLink}
            >
              Coffee
            </Link>
          </li>
          {/* <li>
            <Link onClick={() => setToggle(false)} to="/registration" className={styles.menuLink}>
              Register
            </Link>
          </li> */}
        </ul>
      )}
    </nav>
  );
}
