import React from 'react';
import styles from '../../styles/Options.module.scss';

const Options = (props) => {
  const openCV = () => {
    if (props.language == 'english') {
      window.open('./cv-english.pdf', '_blank', (rel = 'noreferrer'));
    } else {
      window.open('./cv-spanish.pdf', '_blank', (rel = 'noreferrer'));
    }
  };
  return (
    <div className={styles.optionsContainer}>
      <a onClick={() => openCV()} className={styles.optionsButtonL}>
        {props.language === 'english' ? 'Download CV' : 'Descargar CV'}
      </a>
      <button
        onClick={() => props.toggleLanguage()}
        className={styles.optionsButtonR}
      >
        {props.language == 'english' ? 'Español' : 'English'}
      </button>
    </div>
  );
};

export default Options;
