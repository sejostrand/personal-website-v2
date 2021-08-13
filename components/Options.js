import React from 'react';
import styles from '../styles/Options.module.scss';

const Options = (props) => {
  const openCV = () => {
    if (props.language == 'english') {
      window.open('./cv-english.pdf', '_blank');
    } else {
      window.open('./cv-spanish.pdf', '_blank');
    }
  };
  return (
    <div className={styles.optionsContainer}>
      <a onClick={() => openCV()} className={styles.optionsButtonL}>
        {props.language === 'english' ? 'Download CV' : 'Descargar CV'}
      </a>
      <a
        onClick={() => props.toggleLanguage()}
        className={styles.optionsButtonR}
      >
        {props.language == 'english' ? 'Español' : 'English'}
      </a>
    </div>
  );
};

export default Options;
