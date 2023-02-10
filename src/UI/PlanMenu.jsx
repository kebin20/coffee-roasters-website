import React, { useState } from 'react';
import styles from './PlanMenu.module.css';

export default function PlanMenu(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.selectionItem}>
      <button className={styles.selectionButton} onClick={() => setOpen(!open)}>
        How do you drink your coffee?
      </button>
      {open && props.children}
    </li>
  );
}
