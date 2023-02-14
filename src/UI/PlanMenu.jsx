/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './PlanMenu.module.css';
import ArrowIcon from '../Layout/ArrowIcon';
import PlanDropdownItem from './PlanDropdownItem';
import { nanoid } from 'nanoid';

export default function PlanMenu(props) {
  const [open, setOpen] = useState(true);

  const dropdownItems = props.plan.content.map((item) => {
    const id = nanoid();
    return <PlanDropdownItem key={id} content={item} />;
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

// PlanMenu.propTypes = {
//   plan: PropTypes.arrayOf(
//     PropTypes.shape({
//       key: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
