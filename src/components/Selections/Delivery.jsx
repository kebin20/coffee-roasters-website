import React, { useState, useEffect } from 'react';
import styles from './PlanMenu.module.css';
import ArrowIcon from '../../UI/ArrowIcon';
import PlanDropdownItem from './PlanDropdownItem';
import PropTypes from 'prop-types';

export default function Delivery(props) {
  const { content, menu } = props.plan;

  const [open, setOpen] = useState(true);
  const [description, setDescription] = useState({});

  const { firstWeight, secondWeight, thirdWeight } = props.weight;

  function handleClick(event) {
    event.preventDefault();
    props.onButtonClick(event.target.value);
  }

  function createConditionalDescription() {
    let modWeekDescription;
    let modFortnightDescription;
    let modMonthDescription;

    if (secondWeight && !firstWeight && !thirdWeight) {
      const splitWeekDescriptionArr = content[0].description.split(' ');
      const splitFortnightDescriptionArr = content[1].description.split(' ');
      const splitMonthDescriptionArr = content[2].description.split(' ');
      splitWeekDescriptionArr.splice(0, 1, '$13.00');
      splitFortnightDescriptionArr.splice(0, 1, '$17.50');
      splitMonthDescriptionArr.splice(0, 1, '$22.00');
      const joinedFirstWeekDescription = splitWeekDescriptionArr.join(' ');
      const joinedFirstFortnightDescription =
        splitFortnightDescriptionArr.join(' ');
      const joinedFirstMonthDescription = splitMonthDescriptionArr.join(' ');
      modWeekDescription = joinedFirstWeekDescription;
      modFortnightDescription = joinedFirstFortnightDescription;
      modMonthDescription = joinedFirstMonthDescription;
    } else if (thirdWeight && !secondWeight && !firstWeight) {
      const splitWeekDescriptionArr = content[0].description.split(' ');
      const splitFortnightDescriptionArr = content[1].description.split(' ');
      const splitMonthDescriptionArr = content[2].description.split(' ');
      splitWeekDescriptionArr.splice(0, 1, '$22.00');
      splitFortnightDescriptionArr.splice(0, 1, '$32.00');
      splitMonthDescriptionArr.splice(0, 1, '$42.00');
      const joinedSecondWeekDescription = splitWeekDescriptionArr.join(' ');
      const joinedSecondFortnightDescription =
        splitFortnightDescriptionArr.join(' ');
      const joinedSecondMonthDescription = splitMonthDescriptionArr.join(' ');
      modWeekDescription = joinedSecondWeekDescription;
      modFortnightDescription = joinedSecondFortnightDescription;
      modMonthDescription = joinedSecondMonthDescription;
    } else {
      modWeekDescription = content[0].description;
      modFortnightDescription = content[1].description;
      modMonthDescription = content[2].description;
    }
    setDescription({
      week: modWeekDescription,
      fortnight: modFortnightDescription,
      month: modMonthDescription,
    });
  }

  useEffect(() => {
    createConditionalDescription();
  }, [props.weight]);

  const dropdownItems = (
    <>
      <PlanDropdownItem
        onClick={(event) => {
          props.onHoldChoice(item.id, event);
          handleClick(event);
        }}
        title={content[0].title}
        description={description.week}
        isSelected={content[0].isSelected}
      />
      <PlanDropdownItem
        onClick={(event) => {
          props.onHoldChoice(item.id, event);
          handleClick(event);
        }}
        title={content[1].title}
        description={description.fortnight}
        isSelected={content[1].isSelected}
      />
      <PlanDropdownItem
        onClick={(event) => {
          props.onHoldChoice(item.id, event);
          handleClick(event);
        }}
        title={content[2].title}
        description={description.month}
        isSelected={content[2].isSelected}
      />
    </>
  );

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
