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
          <SiGithub
            className={styles.icon}
            onClick={() => console.log('https://github.com/sejostrand')}
          />
          <SiLinkedin
            className={styles.icon}
            onClick={() =>
              console.log('https://www.linkedin.com/in/sebastianstrand/')
            }
          />
        </div>
      </div>
      <a onClick={() => props.scrollTop()} className={styles.toTop}>
        Return to top
      </a>
      Website built using Next.js and Sass.
    </footer>
  );
};

export default Footer;
