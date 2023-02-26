import React from 'react';
import styles from './Coffee.module.css';
import Wrapper from '../UI/Wrapper';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';

export default function Coffee(props) {
  return (
    <Wrapper>
      <NavBar />
      <li>
        <h2>Test</h2>
        <p>Test</p>
      </li>
      <Footer />
    </Wrapper>
  );
}