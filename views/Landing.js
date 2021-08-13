import React from 'react';
import styles from '../styles/Landing.module.scss';

const Landing = (props) => {
  return (
    <div>
      <h1 onClick={() => props.setView('0')} className={styles.name}>
        Sebastian Strand
      </h1>
      <h2 className={styles.title}>
        {props.language === 'english' ? 'Web Developer' : 'Desarrollador Web'}
      </h2>
      <h2 className={styles.greeting}>
        {props.language === 'english'
          ? 'I enjoy building things on the web.'
          : 'Me gusta construir cosas en la web.'}
      </h2>
    </div>
  );
};

export default Landing;
