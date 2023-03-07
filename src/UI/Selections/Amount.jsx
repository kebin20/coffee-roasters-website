import React, { useState } from 'react';
import styles from './PlanMenu.module.css';
import ArrowIcon from '../../Layout/ArrowIcon';
import PlanDropdownItem from './PlanDropdownItem';
import PropTypes from 'prop-types';

export default function Amount(props) {
  const [open, setOpen] = useState(true);
  const [amount, setAmount] = useState('');

  const { content, menu } = props.plan;

  function handleClick(event) {
    const amountValue = event.target.value;
    setAmount(amountValue);
    props.onButtonClick(amount)
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

Amount.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  onHoldChoice: PropTypes.func.isRequired,
};
