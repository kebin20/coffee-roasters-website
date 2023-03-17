import React from 'react';
import styles from './MainButton.module.css';
import {MainButtonType} from '../interfaces'

export default function MainButton(props: MainButtonType) {
  return (
    <button
      className={styles.mainButton}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
