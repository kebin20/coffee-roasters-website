import React from "react"
import styles from "./OrderSummary.module.css"

export default function OrderSummary (props) {
  return (
    <div className={styles.orderSummary}>
        <h1 className={styles.orderSummaryTitle}>Order Summary</h1>
        <div className={styles.orderSummaryWrapper}>
          <p className={styles.orderSummaryContent}>
            “I drink my coffee as {props.coffeeMethod}, with a{' '}
            {props.caffeineOption} type of bean. {props.size} ground ala{' '}
            {props.type}, sent to me {props.frequency}.”
          </p>
        </div>
      </div>
  )
}