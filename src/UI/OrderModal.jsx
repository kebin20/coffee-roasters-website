import React from "react";
import PropTypes from "prop-types";
import styles from "./OrderModal.module.css";
import MainButton from "./MainButton";

export default function OrderModal(props) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.orderModal}>
        <h1 className={styles.orderModalTitle}>Order Summary</h1>
        <div className={styles.orderModalSummaryWrapper}>
          <p className={styles.orderModalSummary}>
            “I drink my coffee as {props.coffeeMethod}, with a{" "}
            {props.caffeineOption} type of bean. {props.size} ground ala{" "}
            {props.type}, sent to me {props.frequency}.”
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
