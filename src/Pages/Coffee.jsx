import { func } from 'prop-types';
import React from 'react';

import styles from './Coffee.module.css';

export default function Coffee(props) {
  return (
    <li styles={styles.coffee}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}
