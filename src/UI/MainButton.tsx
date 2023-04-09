import React from 'react';
import styles from './MainButton.module.css';
import {MainButtonProps} from '../interfaces'

export default function MainButton(props: MainButtonProps) {
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
