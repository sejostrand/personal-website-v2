import React from 'react';
import styles from '../../styles/Navbar.module.scss';

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
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => props.setView('-200vw')}
              className={styles.navLinkOrange}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => props.setView('-300vw')}
              className={styles.navLinkYellow}
            >
              Contact
            </button>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Navbar;
