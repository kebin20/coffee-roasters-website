import React from "react";

import styles from "./Coffee.module.css";

export default function Coffee(props) {
  return (
    <li className={styles.coffee}>
      <img
        srcSet={props.image}
        src="https://medellinliving.com/wp-content/uploads/2022/08/Coffee-Shopping-Guide-Whats-the-Best-Colombian-Coffee-Brand.png"
        alt="picture of coffee"
        className={styles.coffeeImages}
      />
      <h2>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
    </li>
  );
}
