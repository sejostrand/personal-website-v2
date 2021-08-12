import React from 'react';
import styles from '../../styles/Footer.module.scss';
import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from 'react-icons/si';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.iconContainer}>
          <SiWhatsapp className={styles.icon} />
          <SiGmail className={styles.icon} />
          <a href='https://github.com/sejostrand' target='_blank'>
            <SiGithub className={styles.icon} />
          </a>

          <a
            href='https://www.linkedin.com/in/sebastianstrand/'
            target='_blank'
          >
            <SiLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
      <a onClick={() => props.scrollTop()} className={styles.toTop}>
        {props.language == 'english' ? 'Return to top' : 'Volver arriba'}
      </a>
      {props.language == 'english'
        ? 'Website built using Next.js and Sass.'
        : 'Página web creada con Next.js y Sass.'}
    </footer>
  );
};

export default Footer;
