import React from "react";
import { CoffeeItemProps } from "../interfaces";
import styles from "./Coffee.module.css";

export default function Coffee(props: CoffeeItemProps) {
  const { image, description, title, ingredients} = props;


  return (
    <li className={styles.coffee} role="listitem">
      <img
        srcSet={image}
        src="https://medellinliving.com/wp-content/uploads/2022/08/Coffee-Shopping-Guide-Whats-the-Best-Colombian-Coffee-Brand.png"
        alt="picture of coffee"
        className={styles.coffeeImages}
      />
      <div className={styles.coffeeItemContent}>
        <h2 className={styles.coffeeItemTitle}>{title}</h2>
        <p className={styles.coffeeItemDescription}>{description}</p>
        <div className={styles.ingredientsContainer}>
          <h3>Ingredients:</h3>
          <ul className={styles.ingredients}>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
