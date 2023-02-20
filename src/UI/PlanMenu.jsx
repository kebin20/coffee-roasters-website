import React, { useState } from "react";
import styles from "./PlanMenu.module.css";
import ArrowIcon from "../Layout/ArrowIcon";
import PlanDropdownItem from "./PlanDropdownItem";
import PropTypes from "prop-types";

export default function PlanMenu(props) {
  const [open, setOpen] = useState(true);

  const { content, menu } = props.plan;

  // function savePlanTitle(e) {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // }

  const dropdownItems = content.map((item) => {
    const styles = {
      backgroundColor: item.isSelected
        ? "var(--darkCyan)"
        : "var(--big-select-option-default)",
    };

    return (
      <PlanDropdownItem
        key={item.id}
        style={styles}
        onClick={() => props.onHoldChoice(item.id)}
        onSavePlanTitle={props.savePlanTitle}
        content={item}
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

PlanMenu.propTypes = {
  plan: PropTypes.shape({
    menu: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  onHoldChoice: PropTypes.func.isRequired,
  savePlanTitle: PropTypes.func.isRequired,
};
