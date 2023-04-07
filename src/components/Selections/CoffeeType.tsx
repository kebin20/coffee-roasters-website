import React, { useState } from "react";
import styles from "./PlanMenu.module.css";
import ArrowIcon from "../../UI/ArrowIcon";
import PlanDropdownItem from "./PlanDropdownItem";
import { DropdownItemProps } from "src/interfaces";

export default function CoffeeType({ plan, onHoldChoice, onButtonClick, id }) {
  const [open, setOpen] = useState(true);

  const { content, menu } = plan;

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = event.target as HTMLInputElement;
    event.preventDefault();
    onButtonClick(target.value);
  }

  const dropdownItems = content.map((item: DropdownItemProps) => {
    return (
      <PlanDropdownItem
        id={id}
        key={item.id}
        onClick={(event) => {
          onHoldChoice(item.id, event);
          handleClick(event);
        }}
        title={item.title}
        description={item.description}
        isSelected={item.isSelected}
      />
    );
  });

  return (
    <li id={id} className={styles.selectionItem}>
      <button className={styles.selectionButton} onClick={() => setOpen(!open)}>
        <span className={styles.selectionButtonText}>{menu}</span>
        <ArrowIcon open={open}/>
      </button>
      <div className={styles.dropdownItems}>{open && dropdownItems}</div>
    </li>
  );
}
