import React, { useState } from "react";
import styles from "./PlanMenu.module.css";
import ArrowIcon from "../Layout/ArrowIcon";
import PlanDropdownItem from "./PlanDropdownItem";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default function PlanMenu(props) {
  const [open, setOpen] = useState(true);

  // function savePlanTitle(e) {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // }

  const dropdownItems = props.plan.content.map((item) => {
    const id = nanoid();
    return (
      <PlanDropdownItem
        key={id}
        onHoldChoice={props.onHoldChoice}
        content={item}
      />
    );
  });

  // {props.choices.map((choice) => {
  //   const styles = {
  //     backgroundColor: choice.isSelected ? "#D6DBF5" : "white",
  //   };

  return (
    <li className={styles.selectionItem}>
      <button className={styles.selectionButton} onClick={() => setOpen(!open)}>
        <span className={styles.selectionButtonText}>{props.plan.menu}</span>
        <ArrowIcon />
      </button>
      <div className={styles.dropdownItems}>{open && dropdownItems}</div>
    </li>
  );
}

PlanMenu.propTypes = {
  plan: PropTypes.shape({
    menu: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  onHoldChoice: PropTypes.func.isRequired,
};
