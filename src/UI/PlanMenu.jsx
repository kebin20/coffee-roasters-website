import React, { useState } from 'react';
import styles from './PlanMenu.module.css';
import ArrowIcon from './ArrowIcon';

export default function PlanMenu(props) {
  const [open, setOpen] = useState(true);

  return (
    <li className={styles.selectionItem}>
      <button className={styles.selectionButton} onClick={() => setOpen(!open)}>
        <span className={styles.selectionButtonText}>
          How do you drink your coffee?
        </span>
        <ArrowIcon />
      </button>
      {open && props.children}
    </li>
  );
}
