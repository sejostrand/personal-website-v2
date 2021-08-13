import React from 'react';
import styles from '../styles/Footer.module.scss';
import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from 'react-icons/si';
import { BiCopy, BiClipboard } from 'react-icons/bi';
import { MdPhone, MdMail } from 'react-icons/md';
import copy from 'copy-to-clipboard';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.iconContainer}>
          <button className={styles.copyButton}>
            <div className={styles.copyCaption}>
              <span className={styles.clip}>
                <BiClipboard />
              </span>{' '}
              copy
            </div>
            <MdPhone
              onClick={() => copy('+447434902711')}
              className={styles.icon}
            />
          </button>
          <button className={styles.copyButton}>
            <div className={styles.copyCaption}>
              <span className={styles.clip}>
                <BiClipboard />
              </span>{' '}
              copy
            </div>
            <MdMail
              onClick={() => copy('sejostrand@gmail.com')}
              className={styles.icon}
            />
          </button>
          <a
            href='https://github.com/sejostrand'
            target='_blank'
            rel='noreferrer'
          >
            <SiGithub className={styles.icon} />
          </a>

          <a
            href='https://www.linkedin.com/in/sebastianstrand/'
            target='_blank'
            rel='noreferrer'
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
