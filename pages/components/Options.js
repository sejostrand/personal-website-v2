import React from 'react';
import styles from '../../styles/Options.module.scss';

const Options = (props) => {
  return (
    <div className={styles.optionsContainer}>
      <button className={styles.optionsButtonL}>
        {props.language === 'english' ? 'Download CV' : 'Descargar CV'}
      </button>
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
