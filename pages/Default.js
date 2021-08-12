import React from 'react';
import styles from '../styles/Default.module.scss';
import Logo from './components/Logo';

const Default = () => {
  return (
    <div id='about-slide' className={styles.page}>
      <p>What would you like to see?</p>
      <div className={styles.container}></div>
    </div>
  );
};

export default Default;
