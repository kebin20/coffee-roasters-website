import React, { useState } from 'react';
import styles from './PlanMenu.module.css';
import ArrowIcon from '../../Layout/ArrowIcon';
import PlanDropdownItem from './PlanDropdownItem';
import PropTypes from 'prop-types';

export default function CoffeeType(props) {
  const [open, setOpen] = useState(true);

  const { content, plan } = props.plan;

  const dropdownItems = content.map((item) => {
    return (
      <PlanDropdownItem
        key={item.id}
        onClick={(event) => {
          props.onHoldChoice(item.id, event);
        }}
        content={item}
        isSelected={item.isSelected}
      />
    );
  });

  return (
    <li className={styles.selectionItem}>
      <button className={styles.selectionButton} onClick={() => setOpen(!open)}>
        <span className={styles.selectionButtonText}>{plan.menu}</span>
        <ArrowIcon />
      </button>
      <div className={styles.dropdownItems}>{open && dropdownItems}</div>
    </li>
  );
}

CoffeeType.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  onHoldChoice: PropTypes.func.isRequired,
};
