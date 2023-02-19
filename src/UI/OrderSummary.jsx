import React from "react"
import PropTypes from 'prop-types';
import styles from "./OrderSummary.module.css"

export default function OrderSummary (props) {
  return (
    <div className={styles.orderSummary}>
        <h1 className={styles.orderSummaryTitle}>Order Summary</h1>
          <p className={styles.orderSummaryContent}>
            “I drink my coffee as {props.coffeeMethod}, with a{' '}
            {props.caffeineOption} type of bean. {props.size} ground ala{' '}
            {props.type}, sent to me {props.frequency}.”
          </p>
      </div>
  )
}

OrderSummary.propTypes = {
  coffeeMethod: PropTypes.string.isRequired,
  caffeineOption: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired
};