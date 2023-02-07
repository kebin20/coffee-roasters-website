import React from 'react';
import styles from './AboutUs.module.css';
import NavBar from '../UI/NavBar';
import Footer from '../UI/Footer';

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <main>
        <section className={styles.aboutUsHeroContainer}>
          <h1 className={styles.aboutUsHeroTitle}>About Us</h1>
          <p className={styles.aboutUsHeroText}>
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </section>
      </main>
    </>
  );
}
