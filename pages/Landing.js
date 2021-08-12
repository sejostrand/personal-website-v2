import React from 'react';
import styles from '../styles/Landing.module.scss';

const Landing = (props) => {
  return (
    <div>
      <h1 onClick={() => props.setView('0')} className={styles.name}>
        Sebastian Strand
      </h1>
      <h2 className={styles.title}>Web Developer</h2>
      <h2 className={styles.greeting}>I enjoy building things on the web.</h2>
    </div>
  );
};

export default Landing;
