import React from 'react';
import styles from './PlanDropdownItem.module.css';
import PropTypes from 'prop-types';

export default function PlanDropdownItem(props) {
  return (
    <>
      <button
        className={styles.dropDownItem}
        type={props.type || 'button'}
        style={props.style}
        onClick={props.savePlanTitle}
        value={props.content.title}
        name={props.name}
        disabled={props.disabled}
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
  type: PropTypes.string,
  style: PropTypes.object,
  savePlanTitle: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};
