import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import MainButton from '../UI/MainButton';
import OrderModal from '../UI/OrderModal';
import PlanMenu from '../UI/PlanMenu';
import OrderSummary from '../UI/OrderSummary';

import plan from '../planData.jsx';

import styles from './Subscribe.module.css';

export default function Subscribe() {
  const [confirmPlan, setConfirmPlan] = useState(false);
  const [planOption, setPlanOption] = useState(plan);

  // useEffect(() => {
  //   const newPlanData = plan.map((item) => {
  //     return {
  //       ...item,
  //       id: nanoid(),
  //       content: item.content.map((option) => {
  //         return {
  //           ...option,
  //           id: nanoid(),
  //         };
  //       }),
  //     };
  //   });
  //   setPlanOption(newPlanData);
  // }, []);

  console.log(planOption);

  function holdChoice(planId, optionId) {
    setPlanOption((prevPlanOption) =>
      prevPlanOption.map((plan) => {
        if (plan.id !== planId) return plan;
        return {
          ...plan,
          content: plan.content.map((option) => {
            option.id === optionId
              ? { ...option, isSelected: !option.isSelected }
              : { ...option, isSelected: false };
          }),
        };
      })
    );
  }

  const menuComponent = plan.map((item) => {
    return (
      <PlanMenu
        key={item.id}
        plan={{
          ...item,
          id: nanoid(),
          content: item.content.map((option) => {
            return {
              ...option,
              id: nanoid(),
            };
          }),
        }}
        onHoldChoice={(id) => holdChoice(item.id, id)}
      />
    );
  });

  // const menuComponent = plan.map((item) => {
  //   return (
  //     <PlanMenu
  //       key={item.id}
  //       plan={{
  //         ...item,
  //         content: item.content.map((option) => {
  //           return {
  //             ...option,
  //             id: nanoid(),
  //           };
  //         }),
  //       }}
  //       onHoldChoice={(id) => holdChoice(item.id, id)}
  //     />
  //   );
  // });

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
          <span className={styles.circleEl}></span>
          <h1 className={styles.planStepTitle}>01</h1>
          <h2>Pick your coffee</h2>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div className={styles.planStepWrapper}>
          <span className={styles.circleEl}></span>
          <h1 className={styles.planStepTitle}>02</h1>
          <h2>Choose the frequency</h2>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div className={`${styles.planStepWrapper} ${styles.noTopBorder}`}>
          <span className={styles.circleEl}></span>
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
        <aside className={styles.sidebar}>
          <ul className={styles.listOptions}>
            <li>
              <a href="" className={styles.listItem}>
                <span className={styles.stepNumber}>01</span>
                <p className={styles.stepTitle}>Preferences</p>
              </a>
            </li>
            <li>
              <a href="" className={styles.listItem}>
                <span className={styles.stepNumber}>02</span>
                <p className={styles.stepTitle}>Bean Type</p>
              </a>
            </li>
            <li>
              <a href="" className={styles.listItem}>
                <span className={styles.stepNumber}>03</span>
                <p className={styles.stepTitle}>Quantity</p>
              </a>
            </li>
            <li>
              <a href="" className={styles.listItem}>
                <span className={styles.stepNumber}>04</span>
                <p className={styles.stepTitle}>Grind Option</p>
              </a>
            </li>
            <li>
              <a href="" className={styles.listItem}>
                <span className={styles.stepNumber}>05</span>
                <p className={styles.stepTitle}>Deliveries</p>
              </a>
            </li>
          </ul>
        </aside>
        {confirmPlan && <OrderModal />}
        <div className={styles.planContainer}>
          <ul className={styles.planWrapper}>{menuComponent}</ul>
          <OrderSummary />
          <MainButton>Create my plan!</MainButton>
        </div>
      </section>
      <Footer />
    </>
  );
}
