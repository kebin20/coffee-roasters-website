import React from 'react';
import styles from './Wrapper.module.css';
import { WrapperProps } from '../interfaces';

export default function Wrapper(props: WrapperProps) {
  return <div className={styles.wrapper}>{props.children}</div>;
}
