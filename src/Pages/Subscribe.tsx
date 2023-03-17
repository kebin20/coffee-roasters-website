import React, { useEffect, useState } from 'react';

import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import MainButton from '../UI/MainButton';
import OrderModal from '../components/OrderModal';
import OrderSummary from '../components/OrderSummary';

/*Menu Items */
import Amount from '../components/Selections/Amount';
import CoffeeType from '../components/Selections/CoffeeType';
import Delivery from '../components/Selections/Delivery';
import Grind from '../components/Selections/Grind';
import Method from '../components/Selections/Method';

import plan from '../PlanData';

import styles from './Subscribe.module.css';

const initialState = {
  coffeeMethod: '',
  coffeeType: '',
  amount: '',
  grindType: '',
  delivery: '',
};

const weightState = {
  firstWeight: false,
  secondWeight: false,
  thirdWeight: false,
};

const frequencyState = {
  isWeekSelected: false,
  isFortnightSelected: false,
  isMonthSelected: false,
};

export default function Subscribe() {
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [planOption, setPlanOption] = useState(plan);
  const [orderContent, setOrderContent] = useState(initialState);
  const [isCapsule, setIsCapsule] = useState(false);
  const [weight, setWeight] = useState(weightState);
  const [frequency, setFrequency] = useState(frequencyState);
  const [shippingPrice, setShippingPrice] = useState(0);

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  const planHasContent = Object.values(orderContent).every(
    (value) => value !== ''
  );

  function handleCoffeeMethodBtn(value: string) {
    setOrderContent((prevOrder) => {
      return {
        ...prevOrder,
        coffeeMethod: value,
      };
    });
  }

  function handleCoffeeTypeBtn(value: string) {
    setOrderContent((prevOrder) => {
      return {
        ...prevOrder,
        coffeeType: value,
      };
    });
  }

  function handleDeliveryBtn(value: string) {
    setOrderContent((prevOrder) => {
      return {
        ...prevOrder,
        delivery: value,
      };
    });
  }

  function handleGrindTypeBtn(value: string) {
    setOrderContent((prevOrder) => {
      return {
        ...prevOrder,
        grindType: value,
      };
    });
  }

  function handleAmountBtn(value: string) {
    setOrderContent((prevOrder) => {
      return {
        ...prevOrder,
        amount: value,
      };
    });
  }

  function setCapsuleBoolean(event: MouseEvent) {
    const target = event.target as HTMLInputElement;
    if (target.value === 'Capsule') {
      setIsCapsule(true);
    } else if (target.value === 'Filter' || target.value === 'Espresso') {
      setIsCapsule(false);
    }
  }

  function setWeightBoolean(event: MouseEvent) {
    const target = event.target as HTMLInputElement;
    let weightValue = weight;
    if (target.value === '250g') {
      weightValue = {
        firstWeight: true,
        secondWeight: false,
        thirdWeight: false,
      };
    } else if (target.value === '500g') {
      weightValue = {
        firstWeight: false,
        secondWeight: true,
        thirdWeight: false,
      };
    } else {
      weightValue = {
        firstWeight: false,
        secondWeight: false,
        thirdWeight: true,
      };
    }
    setWeight(weightValue);
  }

  function setFrequencyBoolean(event: MouseEvent) {
    const target = event.target as HTMLInputElement;
    let frequencyValue = frequency;
    if (target.value === 'Every 2 weeks') {
      frequencyValue = {
        isWeekSelected: false,
        isFortnightSelected: true,
        isMonthSelected: false,
      };
    } else if (target.value === 'Every month') {
      frequencyValue = {
        isWeekSelected: false,
        isFortnightSelected: false,
        isMonthSelected: true,
      };
    } else {
      frequencyValue = {
        isWeekSelected: true,
        isFortnightSelected: false,
        isMonthSelected: false,
      };
    }
    setFrequency(frequencyValue);
  }

  function displayShippingPrice() {
    let price: number;
    if (frequency.isWeekSelected && weight.firstWeight) {
      price = 7.2 * 4;
    } else if (frequency.isFortnightSelected && weight.firstWeight) {
      price = 9.6 * 2;
    } else if (frequency.isMonthSelected && weight.firstWeight) {
      price = 12.0;
    } else if (frequency.isWeekSelected && weight.secondWeight) {
      price = 13.0 * 4;
    } else if (frequency.isFortnightSelected && weight.secondWeight) {
      price = 17.5 * 2;
    } else if (frequency.isMonthSelected && weight.secondWeight) {
      price = 22.0;
    } else if (frequency.isWeekSelected && weight.thirdWeight) {
      price = 22.0 * 4;
    } else if (frequency.isFortnightSelected && weight.thirdWeight) {
      price = 32.0 * 2;
    } else if (frequency.isMonthSelected && weight.thirdWeight) {
      price = 42.0;
    } else {
      price = 0;
    }
    setShippingPrice(price);
  }

  useEffect(() => {
    displayShippingPrice();
  }, [weight, frequency]);

  function holdChoice(planId: string, optionId: string, event: MouseEvent) {
    setPlanOption((prevPlanOption) =>
      prevPlanOption.map((plan) => {
        if (plan.id !== planId) return plan;
        return {
          ...plan,
          content: plan.content.map((option) => {
            setCapsuleBoolean(event);
            if (option.id === optionId) {
              return { ...option, isSelected: !option.isSelected };
            } else {
              return { ...option, isSelected: false };
            }
          }),
        };
      })
    );
  }

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
        {openOrderModal && (
          <OrderModal
            orderContent={orderContent}
            isCapsule={isCapsule}
            shippingPrice={shippingPrice}
            closeModal={() => setOpenOrderModal(false)}
          />
        )}
        <div className={styles.planContainer}>
          <ul className={styles.planWrapper}>
            <Method
              plan={planOption[0]}
              onHoldChoice={(id, event) =>
                holdChoice(planOption[0].id, id, event)
              }
              onButtonClick={handleCoffeeMethodBtn}
            />
            <CoffeeType
              plan={planOption[1]}
              onHoldChoice={(id, event) =>
                holdChoice(planOption[1].id, id, event)
              }
              onButtonClick={handleCoffeeTypeBtn}
            />
            <Amount
              plan={planOption[2]}
              onHoldChoice={(id, event) =>
                holdChoice(planOption[2].id, id, event)
              }
              onButtonClick={handleAmountBtn}
              onSetWeight={setWeightBoolean}
            />
            <Grind
              plan={planOption[3]}
              isCapsule={isCapsule}
              onHoldChoice={(id, event) =>
                holdChoice(planOption[3].id, id, event)
              }
              onButtonClick={handleGrindTypeBtn}
            />
            <Delivery
              plan={planOption[4]}
              onHoldChoice={(id, event) =>
                holdChoice(planOption[4].id, id, event)
              }
              onButtonClick={handleDeliveryBtn}
              onSetFrequency={setFrequencyBoolean}
              weight={weight}
            />
          </ul>
          <OrderSummary orderContent={orderContent} isCapsule={isCapsule} />
          <MainButton
            onClick={() => setOpenOrderModal(true)}
            disabled={planHasContent ? false : true}
            type={undefined}
          >
            Create my plan!
          </MainButton>
        </div>
      </section>
      <Footer />
    </>
  );
}
