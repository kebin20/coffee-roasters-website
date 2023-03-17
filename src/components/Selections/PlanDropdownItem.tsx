import React from "react";
import styles from "./PlanDropdownItem.module.css";
import PropTypes from "prop-types";
import { DropdownItemType } from "src/interfaces";

export default function PlanDropdownItem(props: DropdownItemType) {
  const buttonSelectedStyling = {
    backgroundColor: props.isSelected
      ? "var(--darkCyan)"
      : "var(--big-select-option-default)",
    color: props.isSelected ? "var(--lightCream)" : "var(--darkBlue)",
    transition: "background-color 0.2s ease-in-out",
  };

  const isCapsuleSelected = props.isCapsule ? styles.disabled : "";

  return (
    <>
      <button
        className={`${styles.dropDownItem} ${isCapsuleSelected}`}
        type={props.type || "button"}
        style={props.isSelected ? buttonSelectedStyling : null}
        onClick={props.onClick}
        value={props.title}
        disabled={props.isCapsule ? true : false}
      >
        <span className={styles.buttonTitle}>{props.title}</span> <br />
        <span className={styles.buttonText}>{props.description}</span>
      </button>
    </>
  );
}

PlanDropdownItem.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  type: PropTypes.string,
  style: PropTypes.object,
  savePlanTitle: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};
