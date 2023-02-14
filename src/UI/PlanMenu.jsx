/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './PlanMenu.module.css';
import ArrowIcon from '../Layout/ArrowIcon';
import PlanDropdownItem from './PlanDropdownItem';

export default function PlanMenu(props) {
  const [open, setOpen] = useState(true);

  const dropdownItems = props.plan.map((item) => {
    return (
      <PlanDropdownItem
        key={item.key}
        titles={item.titles}
        decriptions={item.description}
      />
    );
  });

  return (
    <li className={styles.selectionItem}>
      <button className={styles.selectionButton} onClick={() => setOpen(!open)}>
        <span className={styles.selectionButtonText}>{props.plan.menu}</span>
        <ArrowIcon />
      </button>
      {open && dropdownItems}
    </li>
  );
}
