import React from 'react';
import styles from './OrderSumModal.module.css';

export default function OrderModalSum(props) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.orderModal}>
        <h1 className={styles.orderModalTitle}>Order Summary</h1>
        <p className={styles.orderSummary}>
        “I drink my coffee as {props.coffeeMethod}, with a {props.caffeineOption} type of bean. {props.size} ground ala {props.type}, sent to me {props.frequency}.”
        </p>
        <p className={styles.doubleCheck}>
          
        </p>
      </div>
    </div>
  );
}
