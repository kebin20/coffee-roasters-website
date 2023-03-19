import React, { CSSProperties } from "react";
import styles from "./PlanDropdownItem.module.css";
import { DropdownItemType } from "src/interfaces";

export default function PlanDropdownItem(props: DropdownItemType) {
  const buttonSelectedStyling: CSSProperties = {
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
        style={props.isSelected ? buttonSelectedStyling : undefined}
        //https://stackoverflow.com/questions/73581794/how-to-solve-type-void-is-not-assignable-to-type-mouseeventhandlerhtmlelemen
        onClick={() => props.onClick}
        value={props.title}
        disabled={props.isCapsule ? true : false}
      >
        <span className={styles.buttonTitle}>{props.title}</span> <br />
        <span className={styles.buttonText}>{props.description}</span>
      </button>
    </>
  );
}
