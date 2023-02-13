import React, { useState } from 'react';
import MainButton from '../UI/MainButton';
import NavBar from '../UI/NavBar';
import Footer from '../UI/Footer';
import OrderModal from '../UI/OrderModal';
import PlanMenu from '../UI/PlanMenu';
import PlanDropdownItem from '../UI/PlanDropdownItem';

import styles from './Subscribe.module.css';

export default function Subscribe() {
  const [confirmPlan, setConfirmPlan] = useState(false);

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
        {confirmPlan && <OrderModal />}
        <ul>
          <PlanMenu>
            <PlanDropdownItem />
            <PlanDropdownItem />
            <PlanDropdownItem />
          </PlanMenu>
        </ul>
      </section>
    </>
  );
}
