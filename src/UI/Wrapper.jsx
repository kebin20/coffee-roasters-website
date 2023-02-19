import React from "react";
import PropTypes from "prop-types";
import styles from "./Wrapper.module.css";

export default function Wrapper(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
