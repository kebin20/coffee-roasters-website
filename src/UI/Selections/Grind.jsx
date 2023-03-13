import React, { useState } from 'react';
import styles from './PlanMenu.module.css';
import ArrowIcon from '../../Layout/ArrowIcon';
import PlanDropdownItem from './PlanDropdownItem';
import PropTypes from 'prop-types';

export default function Grind(props) {
  const [open, setOpen] = useState(true);

  const { content, menu } = props.plan;

  function handleClick(event) {
    event.preventDefault();
    props.onButtonClick(event.target.value);
  }

  const dropdownItems = content.map((item) => {
    return (
      <PlanDropdownItem
        key={item.id}
        onClick={(event) => {
          props.onHoldChoice(item.id, event);
          handleClick(event);
        }}
        title={item.title}
        description={item.description}
        isSelected={item.isSelected}
        isCapsule={props.isCapsule}
      />
    );
  });

  return (
    <li className={styles.selectionItem}>
      <button className={styles.selectionButton} onClick={() => setOpen(!open)}>
        <span className={styles.selectionButtonText}>{menu}</span>
        <ArrowIcon />
      </button>
      <div className={styles.dropdownItems}>{open && dropdownItems}</div>
    </li>
  );
}

Grind.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  onHoldChoice: PropTypes.func.isRequired,
};
