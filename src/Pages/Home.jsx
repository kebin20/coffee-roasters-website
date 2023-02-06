import React from 'react';
import styles from './Home.module.css';
import MainButton from '../UI/MainButton';
import NavBar from '../UI/NavBar';

import granEspresso from '../assets/home/desktop/image-gran-espresso.png';
import planalto from '../assets/home/desktop/image-planalto.png';
import piccollo from '../assets/home/desktop/image-piccollo.png';
import danche from '../assets/home/desktop/image-danche.png';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className={styles.homeHeroContainer}>
          <h1 className={styles.homeHeroTitle}>Great coffee made simple.</h1>
          <p className={styles.homeHeroText}>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <MainButton>Create your plan</MainButton>
        </section>

        <section className={styles.collectionContainer}>
          <h1 className={styles.collectionContainerTitle}>our collection</h1>
          <div className={styles.collectionItem}>
            <img src={granEspresso} alt="gran espresso package" className={styles.collectionImage}/>
            <h2>Gran Espresso</h2>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
          <div className={styles.collectionItem}>
            <img src={planalto} alt="planalto package" className={styles.collectionImage}/>
            <h2>Planalto</h2>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
          <div className={styles.collectionItem}>
            <img src={piccollo} alt="piccollo package" className={styles.collectionImage}/>
            <h2>Piccollo</h2>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>
          </div>
          <div className={styles.collectionItem}>
            <img src={danche} alt="danche package" className={styles.collectionImage}/>
            <h2>Danche</h2>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
