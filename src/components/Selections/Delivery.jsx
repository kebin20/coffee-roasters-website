import React, { useState, useEffect } from 'react';
import styles from './PlanMenu.module.css';
import ArrowIcon from '../../UI/ArrowIcon';
import PlanDropdownItem from './PlanDropdownItem';
import PropTypes from 'prop-types';

export default function Delivery(props) {
  const { content, menu } = props.plan;

  const [open, setOpen] = useState(true);
  const [conditionalContent, setConditionalContent] = useState();

  const { firstWeight, secondWeight, thirdWeight } = props.weight;

  function handleClick(event) {
    event.preventDefault();
    props.onButtonClick(event.target.value);
  }

  useEffect(() => {
    let newContent;
    if (secondWeight) {
      const splitContentArray = content[0].description.split(' ');
      splitContentArray.splice(0, 1, '$13.00');
      const joinedContent = splitContentArray.join(' ');
      newContent = joinedContent;
      return newContent;
    } else if (thirdWeight && !secondWeight) {
      const splitContentArray = content[0].description.split(' ');
      splitContentArray.splice(0, 1, '$22.00');
      const joinedContent = splitContentArray.join(' ');
      newContent = joinedContent;
    } else {
      newContent = content[0].description;
      return newContent;
    }
    setConditionalContent(newContent);
  }, []);

  console.log(conditionalContent);

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

Delivery.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  onHoldChoice: PropTypes.func.isRequired,
};
