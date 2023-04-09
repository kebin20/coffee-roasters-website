import React from "react";
import { OrderSummaryProps } from "src/interfaces";
import styles from "./OrderSummary.module.css";

export default function OrderSummary(props: OrderSummaryProps) {
  const { coffeeMethod, coffeeType, amount, grindType, delivery } =
    props.orderContent;

  return (
    <div className={styles.orderSummaryContainer}>
      <h1 className={styles.orderSummaryTitle}>Order Summary</h1>
      <p className={styles.orderSummaryText}>
        “I drink my coffee {props.isCapsule ? " using " : " as "}
        <span className={styles.orderSummarySpan}>{coffeeMethod}</span>, with a{" "}
        <span className={styles.orderSummarySpan}>{coffeeType}</span> type of
        bean. <span className={styles.orderSummarySpan}>{amount}</span> ground{" "}
        {!props.isCapsule && (
          <>
            <span>ala </span>
            <span className={styles.orderSummarySpan}>{grindType}</span>
          </>
        )}
        , sent to me <span className={styles.orderSummarySpan}>{delivery}</span>
        .”
      </p>
    </div>
  );
}
