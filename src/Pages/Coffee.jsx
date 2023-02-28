import React from 'react';

import styles from './Coffee.module.css';

export default function Coffee(props) {
  return (
    <li className={styles.coffee}>
      <img src={props.image} alt="" className={styles.coffeeImages}/>
      <h2>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
    </li>
  );
}
