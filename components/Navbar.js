import React from 'react';
import styles from '../styles/Navbar.module.scss';

const Navbar = (props) => {
  return (
    <>
      <nav className={styles.navContainer}>
        <ol className={styles.navList}>
          <li>
            <button
              onClick={() => props.setView('-100vw')}
              className={styles.navLinkDarkOrange}
            >
              {props.language === 'english' ? 'About' : 'Acerca'}
            </button>
          </li>
          <li>
            <button
              onClick={() => props.setView('-200vw')}
              className={styles.navLinkOrange}
            >
              {props.language === 'english' ? 'Projects' : 'Proyectos'}
            </button>
          </li>
          <li>
            {' '}
            <button
              onClick={() => props.setView('-300vw')}
              className={styles.navLinkYellow}
            >
              {props.language === 'english' ? 'Contact' : 'Contacto'}
            </button>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Navbar;
