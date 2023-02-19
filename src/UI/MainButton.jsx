import React from "react";
import PropTypes from "prop-types";
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

MainButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
