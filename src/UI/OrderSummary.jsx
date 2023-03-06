import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.module.css';

export default function OrderSummary(props) {
  const { coffeeMethod, caffeineOption, size, type, frequency } =
    props.orderContent;

  return (
    <div className={styles.orderSummary}>
      <h1 className={styles.orderSummaryTitle}>Order Summary</h1>
      <p className={styles.orderSummaryContent}>
        “I drink my coffee as {coffeeMethod}, with a {caffeineOption} type of
        bean. {size} ground ala {type}, sent to me {frequency}.”
      </p>
    </div>
  );
}

OrderSummary.propTypes = {
  coffeeMethod: PropTypes.string,
  caffeineOption: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  frequency: PropTypes.string,
};
