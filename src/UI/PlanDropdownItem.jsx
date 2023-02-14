import React from 'react';
import styles from './PlanDropdownItem.module.css';

export default function PlanDropdownItem(props) {

console.log(props.content)

  return (
    <>
      <button
        className={styles.dropDownItem}
        onClick={() => console.log('Clicked!')}
      >
        <span className={styles.buttonTitle}>{title}</span> <br />
        <span className={styles.buttonText}>{description}</span>
      </button>
    </>
  );
}
