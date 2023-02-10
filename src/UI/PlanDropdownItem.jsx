import React from 'react';
import styles from './PlanDropdownItem.module.css';

export default function PlanDropdownItem(props) {
  return (
    <>
      <button
        className={styles.dropDownItem}
        onClick={() => console.log('Clicked!')}
      >
        <span className={styles.buttonTitle}>THIS IS TITLE</span> <br />
        <span className={styles.buttonText}>lorem ipsum lalalala</span>
      </button>
    </>
  );
}
