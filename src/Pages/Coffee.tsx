import React from 'react';
import { CoffeeItemType } from '../interfaces';
import styles from './Coffee.module.css';

export default function Coffee(props: CoffeeItemType) {
  const { image, description, title } = props;

  return (
    <li className={styles.coffee}>
      <img
        srcSet={image}
        src="https://medellinliving.com/wp-content/uploads/2022/08/Coffee-Shopping-Guide-Whats-the-Best-Colombian-Coffee-Brand.png"
        alt="picture of coffee"
        className={styles.coffeeImages}
      />
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
    </li>
  );
}
