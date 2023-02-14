import React from 'react';
import styles from './PlanDropdownItem.module.css';

export default function PlanDropdownItem(props) {
  return (
    <>
      <button
        className={styles.dropDownItem}
        onClick={() => console.log('Clicked!')}
      >
        <span className={styles.buttonTitle}>{props.title}</span> <br />
        <span className={styles.buttonText}>{props.description}</span>
      </button>
    </>
  );
}
