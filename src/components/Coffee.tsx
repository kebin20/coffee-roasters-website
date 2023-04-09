import React from "react";
import { CoffeeItemProps } from "../interfaces";
import styles from "./Coffee.module.css";

export default function Coffee(props: CoffeeItemProps) {
  const { image, description, title } = props;

  return (
    <li className={styles.coffee}>
      <img
        srcSet={image}
        src="https://medellinliving.com/wp-content/uploads/2022/08/Coffee-Shopping-Guide-Whats-the-Best-Colombian-Coffee-Brand.png"
        alt="picture of coffee"
        className={styles.coffeeImages}
      />
      <div className={styles.coffeeItemContent}>
        <h2 className={styles.coffeeItemTitle}>{title}</h2>
        <p className={styles.coffeeItemDescription}>{description}</p>
      </div>
    </li>
  );
}
