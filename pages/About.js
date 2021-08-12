import React from 'react';
import styles from '../styles/About.module.scss';

const About = (props) => {
  return (
    <div id='about-slide' className={styles.page}>
      <div className={styles.container}>
        <p className={styles.content1}>
          I'm an Industrial Engineering graduate and taught myself web
          development.
        </p>
        <p className={styles.content2}>
          I moved from the UK to Santiago, Chile when I was 14 and stayed there
          for 10 years. I speak fluent spanish, enjoy challenges and working
          with people.
        </p>
        <p className={styles.content2}>Skills</p>
        <div className={styles.skillsContainer}>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>Javascript</h1>
            <li>React.js</li>
            <li>Next.js</li>
            <li>DOM manipulation</li>
            <li>APIs</li>
          </ol>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>CSS</h1>
            <li>SASS</li>
            <li>Styled-components</li>
            <li>TailwindCSS</li>
          </ol>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>Tools</h1>
            <li>Git</li>
            <li>SQL</li>
            <li>Strapi.js</li>
            <li>Postman</li>
          </ol>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>Providers</h1>
            <li>Digital Ocean</li>
            <li>Heroku</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ol>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>HTML</h1>
            <li>Semantic HTML</li>
            <li>Server side rendering</li>
          </ol>
        </div>
        <a onClick={() => props.toContact()} className={styles.contactLink}>
          Get in touch!
        </a>
      </div>
    </div>
  );
};

export default About;
