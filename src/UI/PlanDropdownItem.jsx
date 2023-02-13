import React from 'react';
import styles from './PlanDropdownItem.module.css';

export default function PlanDropdownItem(props) {
  return (
    <>
      <button
        className={styles.dropDownItem}
        onClick={() => console.log('Clicked!')}
      >
        <span className={styles.buttonTitle}>Capsule</span> <br />
        <span className={styles.buttonText}>
          Compatible with Nespresso systems and similar brewers
        </span>
      </button>
    </>
  );
}
