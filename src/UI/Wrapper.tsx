import React from 'react';
import styles from './Wrapper.module.css';
import { PropsType } from '../interfaces';

export default function Wrapper(props: PropsType) {
  return <div className={styles.wrapper}>{props.children}</div>;
}
