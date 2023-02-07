import React, {useState} from 'react';
import styles from './NavBar.module.css';
import coffeeRoastersLogo from '../assets/shared/desktop/logo.svg';

export default function NavBar(props) {

const [toggleMenu, setToggleMenu] = useState(false)

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

        <button className={styles.hamburgerMenu}>
          <span className={styles.hamburgerTop}></span>
          <span className={styles.hamburgerMiddle}></span>
          <span className={styles.hamburgerBottom}></span>
        </button>
      </div>

      <div className={styles.mobileMenu}>
        <ul className={styles.mobileMenuItems}>
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
