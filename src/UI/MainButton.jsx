/* eslint-disable react/prop-types */
import React from "react";
import styles from "./MainButton.module.css";

export default function MainButton(props) {
  return (
    <button
      className={styles.mainButton}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
