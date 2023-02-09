import React from 'react';
import MainButton from '../UI/MainButton';
import NavBar from '../UI/NavBar';
import Footer from '../UI/Footer';

import styles from './Subscribe.module.css';

export default function Subscribe() {
  return (
    <>
      <NavBar />
      <section className={styles.createPlanHeroContainer}>
        <h1 className={styles.createPlanHeroTitle}>Create a plan</h1>
        <p className={styles.createPlanHeroText}>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>

      <section className={styles.planStepsContainer}>
        <div className={styles.planStepWrapper}>
          <h1 className={styles.planStepTitle}>01</h1>
          <h2>Pick your coffee</h2>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div className={styles.planStepWrapper}>
          <h1 className={styles.planStepTitle}>02</h1>
          <h2>Choose the frequency</h2>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div className={styles.planStepWrapper}>
          <h1 className={styles.planStepTitle}>03</h1>
          <h2>Receive and enjoy!</h2>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </section>

      <section className={styles.customizePlanContainer}>
      {/* <div class="dropdowns" id="dropdowns">
          <div class={styles.howDoYouDrink-container} nav-item">
            <div class="dropdown" data-dropdown-product>
              <button
                class="link dropbtn"
                id="drop-btn"
                data-dropdown-button-product
              >
                How do you drink your coffee?
                <svg
                  class="arrow arrow-down"
                  id="arrow-product"
                  width="10"
                  height="6"
                  xmlns="http://www.w3.org/2000/svg"
                  data-dropdown-button-product
                >
                  <path
                    stroke="none"
                    stroke-width="1.5"
                    fill="none"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </svg>
              </button>
              <div class="dropdown-menu product-menu" id="dropdownMenu">
                <a href="#" class="link nav-link">Overview</a>
                <a href="#" class="link nav-link"> Pricing</a>
                <a href="#" class="link nav-link">Features</a>
                <a href="#" class="link nav-link">Integrations</a>
              </div>
            </div>
          </div>

          <div class="company-container nav-item">
            <div class="dropdown" data-dropdown-company>
              <button
                class="link dropbtn"
                id="drop-btn"
                data-dropdown-button-company
              >
                Company
                <svg
                  class="arrow arrow-down"
                  id="arrow-company"
                  width="10"
                  height="6"
                  xmlns="http://www.w3.org/2000/svg"
                  data-dropdown-button-company
                >
                  <path
                    stroke="none"
                    stroke-width="1.5"
                    fill="none"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div class="dropdown-menu company-menu" id="dropdownMenu">
                <a href="#" class="link nav-link">About</a>
                <a href="#" class="link nav-link">Team</a>
                <a href="#" class="link nav-link">Blog</a>
                <a href="#" class="link nav-link">Careers</a>
              </div>
            </div>
          </div> */}
      </section>
    </>
  );
}
