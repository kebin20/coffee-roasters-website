import React from "react";
import PropTypes from "prop-types";
import styles from "./OrderModal.module.css";
import MainButton from "../UI/MainButton";

export default function OrderModal(props) {
  const { coffeeMethod, coffeeType, amount, grindType, delivery } =
    props.orderContent;

  return (
    <div className={styles.backdrop}>
      <div className={styles.orderModal}>
        <h1 className={styles.orderModalTitle}>Order Summary</h1>
        <div className={styles.orderModalSummaryWrapper}>
          <p className={styles.orderModal__p}>
            “I drink my coffee {props.isCapsule ? " using " : " as "}
            <span className={styles.orderModal__span}>{coffeeMethod}</span>,
            with a <span className={styles.orderModal__span}>{coffeeType}</span>{" "}
            type of bean.{" "}
            <span className={styles.orderModal__span}>{amount}</span> ground{" "}
            {!props.isCapsule && (
              <span className={styles.orderModal__span}>ala{grindType}</span>
            )}
            , sent to me{" "}
            <span className={styles.orderModal__span}>{delivery}</span>.”
          </p>
          <p className={styles.doubleCheckOrder}>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <MainButton>Checkout - $14.00/mo</MainButton>
        </div>
      </div>
    </div>
  );
}

OrderModal.propTypes = {
  coffeeMethod: PropTypes.string.isRequired,
  caffeineOption: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
};
