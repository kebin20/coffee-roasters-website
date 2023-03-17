import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainButton.module.css';

export default function MainButton(props) {
  return (
    <button
      className={styles.mainButton}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

MainButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
