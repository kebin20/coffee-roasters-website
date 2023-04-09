import React, { CSSProperties } from 'react';
import styles from './PlanDropdownItem.module.css';
import { DropdownItemProps } from 'src/interfaces';

export default function PlanDropdownItem(props: DropdownItemProps) {
  const buttonSelectedStyling: CSSProperties = {
    backgroundColor: props.isSelected
      ? 'var(--darkCyan)'
      : 'var(--big-select-option-default)',
    color: props.isSelected ? 'var(--lightCream)' : 'var(--darkBlue)',
    transition: 'background-color 0.2s ease-in-out',
  };

  const isCapsuleSelected = props.isCapsule ? styles.disabled : '';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    props.onClick(event, props.id!);
  };

  return (
    <>
      <button
        className={`${styles.ddItem} ${isCapsuleSelected}`}
        type={props.type || 'button'}
        style={props.isSelected ? buttonSelectedStyling : undefined}
        onClick={handleClick}
        value={props.title}
        disabled={props.isCapsule ? true : false}
      >
        <span className={styles.buttonTitle}>{props.title}</span> <br />
        <span className={styles.buttonText}>{props.description}</span>
      </button>
    </>
  );
}
