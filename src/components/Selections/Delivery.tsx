import React, { useState, useEffect } from "react";
import styles from "./PlanMenu.module.css";
import ArrowIcon from "../../UI/ArrowIcon";
import PlanDropdownItem from "./PlanDropdownItem";

export default function Delivery({
  onButtonClick,
  plan,
  weight,
  onHoldChoice,
  onSetFrequency,
}) {
  const { content, menu } = plan;

  const [open, setOpen] = useState(true);
  const [description, setDescription] = useState({});

  const { firstWeight, secondWeight, thirdWeight } = weight;

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = event.target as HTMLInputElement;
    event.preventDefault();
    onButtonClick(target.value);
  }

  const fiveHundredGramsPrices = {
    firstWeight: "$13.00",
    secondWeight: "$17.50",
    thirdWeight: "$22.00",
  };

  const thousandGramsPrices = {
    firstWeight: "$22.00",
    secondWeight: "$32.50",
    thirdWeight: "$42.00",
  };

  function createConditionalDescription() {
    let modWeekDescription: string;
    let modFortnightDescription: string;
    let modMonthDescription: string;

    if (secondWeight && !firstWeight && !thirdWeight) {
      const splitWeekDescriptionArr = content[0].description.split(" ");
      const splitFortnightDescriptionArr = content[1].description.split(" ");
      const splitMonthDescriptionArr = content[2].description.split(" ");
      splitWeekDescriptionArr.splice(0, 1, fiveHundredGramsPrices.firstWeight);
      splitFortnightDescriptionArr.splice(
        0,
        1,
        fiveHundredGramsPrices.secondWeight
      );
      splitMonthDescriptionArr.splice(0, 1, fiveHundredGramsPrices.thirdWeight);
      const joinedFirstWeekDescription = splitWeekDescriptionArr.join(" ");
      const joinedFirstFortnightDescription =
        splitFortnightDescriptionArr.join(" ");
      const joinedFirstMonthDescription = splitMonthDescriptionArr.join(" ");
      modWeekDescription = joinedFirstWeekDescription;
      modFortnightDescription = joinedFirstFortnightDescription;
      modMonthDescription = joinedFirstMonthDescription;
    } else if (thirdWeight && !secondWeight && !firstWeight) {
      const splitWeekDescriptionArr = content[0].description.split(" ");
      const splitFortnightDescriptionArr = content[1].description.split(" ");
      const splitMonthDescriptionArr = content[2].description.split(" ");
      splitWeekDescriptionArr.splice(0, 1, thousandGramsPrices.firstWeight);
      splitFortnightDescriptionArr.splice(
        0,
        1,
        thousandGramsPrices.secondWeight
      );
      splitMonthDescriptionArr.splice(0, 1, thousandGramsPrices.thirdWeight);
      const joinedSecondWeekDescription = splitWeekDescriptionArr.join(" ");
      const joinedSecondFortnightDescription =
        splitFortnightDescriptionArr.join(" ");
      const joinedSecondMonthDescription = splitMonthDescriptionArr.join(" ");
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
  }, [weight]);

  const dropdownItems = (
    <>
      <PlanDropdownItem
        onClick={(event, id) => {
          onHoldChoice(id, event);
          handleClick(event);
          onSetFrequency(event);
        }}
        title={content[0].title}
        description={description.week}
        isSelected={content[0].isSelected}
      />
      <PlanDropdownItem
        onClick={(event, id) => {
          onHoldChoice(id, event);
          handleClick(event);
          onSetFrequency(event);
        }}
        title={content[1].title}
        description={description.fortnight}
        isSelected={content[1].isSelected}
      />
      <PlanDropdownItem
        onClick={(event, id) => {
          onHoldChoice(id, event);
          handleClick(event);
          onSetFrequency(event);
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
