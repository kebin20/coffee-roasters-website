import React from "react";
import styles from "./NavBar.module.css";
import coffeeRoastersLogo from "../assets/shared/desktop/logo.svg";

export default function NavBar(props) {
  return (
    // <!-- Navbar -->
    <nav className={styles.navBar}>
      {/* <!-- Flex container --> */}
      <div className={styles.navFlexContainer}>
        {/* <!-- Logo */}
        <div>
          <img
            className={styles.mobileLogo}
            src={coffeeRoastersLogo}
            alt="coffee roasters logo"
          />
        </div>
        {/* <!-- Menu Items --> */}
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

        {/* <!-- Hamburger Icon--> */}
        <button
          //   id="menu-btn"
          //   className="hamburger"
          className={styles.hamburgerMenu}
        >
          <span className={styles.hamburgerTop}></span>
          <span className={styles.hamburgerMiddle}></span>
          <span className={styles.hamburgerBottom}></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div className={styles.mobileMenu}>
        <ul
          //   id="menu"
          className={styles.mobileMenuItems}
        >
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Create your plan</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
