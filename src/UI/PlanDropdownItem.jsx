import React from 'react';
import styles from './PlanDropdownItem.module.css';
import PropTypes from 'prop-types';

export default function PlanDropdownItem(props) {
  function savePlanTitle(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <>
      <button
        className={styles.dropDownItem}
        onClick={savePlanTitle}
        value={props.content.title}
      >
        <span className={styles.buttonTitle}>{props.content.title}</span> <br />
        <span className={styles.buttonText}>{props.content.description}</span>
      </button>
    </>
  );
}

PlanDropdownItem.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
