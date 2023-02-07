import React from 'react';
import styles from './Home.module.css';
import MainButton from '../UI/MainButton';
import NavBar from '../UI/NavBar';
import Footer from '../UI/Footer';

/* Images */
import granEspresso from '../assets/home/desktop/image-gran-espresso.png';
import planalto from '../assets/home/desktop/image-planalto.png';
import piccollo from '../assets/home/desktop/image-piccollo.png';
import danche from '../assets/home/desktop/image-danche.png';
import coffeeBean from '../assets/home/desktop/icon-coffee-bean.svg';
import gift from '../assets/home/desktop/icon-gift.svg';
import truck from '../assets/home/desktop/icon-truck.svg';

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
            <img
              src={granEspresso}
              alt="gran espresso package"
              className={styles.collectionImage}
            />
            <h2>Gran Espresso</h2>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
          <div className={styles.collectionItem}>
            <img
              src={planalto}
              alt="planalto package"
              className={styles.collectionImage}
            />
            <h2>Planalto</h2>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
          <div className={styles.collectionItem}>
            <img
              src={piccollo}
              alt="piccollo package"
              className={styles.collectionImage}
            />
            <h2>Piccollo</h2>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>
          </div>
          <div className={styles.collectionItem}>
            <img
              src={danche}
              alt="danche package"
              className={styles.collectionImage}
            />
            <h2>Danche</h2>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </section>

        <section className={styles.whyUs}>
          <div className={styles.whyUsBgContainer}>
            <div className={styles.whyUsContainer}>
              <h1 className={styles.whyUsTitle}>Why choose us?</h1>
              <p>
                A large part of our role is choosing which particular coffees
                will be featured in our range. This means working closely with
                the best coffee growers to give you a more impactful experience
                on every level.
              </p>
            </div>
          </div>
          <div className={styles.whyUsFeaturesContainer}>
            <div className={styles.featuresItem}>
              <img
                className={styles.featuresImage}
                src={coffeeBean}
                alt="coffee bean icon"
              />
              <h2>Best Quality</h2>
              <p>
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
            <div className={styles.featuresItem}>
              <img
                className={styles.featuresImage}
                src={gift}
                alt="gift icon"
              />
              <h2>Exclusive Benefits</h2>
              <p>
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
            <div className={styles.featuresItem}>
              <img
                className={styles.featuresImage}
                src={truck}
                alt="truck icon"
              />
              <h2>Free Shipping</h2>
              <p>
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.howItWorks}>
          <h1 className={styles.howItWorksTitle}>How it works</h1>
          <div className={styles.steps}>
            <h1 className={styles.stepTitle}>01</h1>
            <h2>Pick your coffee</h2>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className={styles.steps}>
            <h1 className={styles.stepTitle}>02</h1>
            <h2>Choose the frequency</h2>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className={styles.steps}>
            <h1 className={styles.stepTitle}>03</h1>
            <h2>Receive and enjoy!</h2>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
          <MainButton>Create your plan</MainButton>
        </section>

        <Footer />
      </main>
    </>
  );
}