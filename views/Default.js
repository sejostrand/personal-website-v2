import React from 'react';
import styles from '../styles/Default.module.scss';

const Default = (props) => {
  return (
    <div className={styles.page}>
      <p className={styles.sectionTitle}>
        {props.language == 'english'
          ? 'What would you like to know?'
          : 'Qué te gustaría saber?'}
      </p>
      <div className={styles.container}></div>
    </div>
  );
};

export default Default;
