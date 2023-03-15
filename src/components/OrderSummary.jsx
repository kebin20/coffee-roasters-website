import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.module.css';

export default function OrderSummary(props) {
  const { coffeeMethod, coffeeType, amount, grindType, delivery } =
    props.orderContent;

  return (
    <div className={styles.orderSummary__container}>
      <h1 className={styles.orderSummary__h1}>Order Summary</h1>
      <p className={styles.orderSummary__p}>
        “I drink my coffee {props.isCapsule ? ' using ' : ' as '}
        <span className={styles.orderSummary__span}>{coffeeMethod}</span>, with
        a <span className={styles.orderSummary__span}>{coffeeType}</span> type
        of bean. <span className={styles.orderSummary__span}>{amount}</span>{' '}
        ground{' '}
        {!props.isCapsule && (
          <>
            <span>ala</span>
            <span className={styles.orderSummary__span}>{grindType}</span>
          </>
        )}
        , sent to me{' '}
        <span className={styles.orderSummary__span}>{delivery}</span>.”
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
