import React from 'react';
import styles from '../styles/About.module.scss';

const About = (props) => {
  return (
    <div id='about-slide' className={styles.page}>
      <div className={styles.container}>
        <p className={styles.sectionTitle}>
          {props.language == 'english'
            ? "I'm an Industrial Engineering graduate and taught myself web development."
            : 'Inglés hecho chileno, graduado en Ingieneria Civil Indsutrial y desarrollador web autodidacta.'}
        </p>
        <p className={styles.content2}>
          {props.language == 'english'
            ? ' I moved from the UK to Santiago, Chile when I was 14 and stayed there for 10 years. I speak fluent spanish, enjoy challenges and working with people.'
            : 'Llegue a Santiago cuando tuve 14 años, donde me quedé hasta graduarme de la universidad Adolfo Ibáñez. Billingue en inglés y español, disfruto de los desafíos, y me encanta la naturleza.'}
        </p>
        <p className={styles.content2}>
          {props.language == 'english'
            ? 'Technical Skills'
            : 'Technologias que he usado últimamente:'}
        </p>
        <div className={styles.skillsContainer}>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>Javascript</h1>
            <li>
              {props.language == 'english'
                ? 'Requests & Authentication'
                : 'Solicitudes y autenticación'}
            </li>
            <li>
              {props.language == 'english'
                ? 'DOM manipulation'
                : 'Manipulación del DOM'}
            </li>
            <li>React.js</li>
            <li>Next.js</li>
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
            <li>Strapi.js (cms)</li>
            <li>Postman</li>
          </ol>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>HTML</h1>
            <li>
              {props.language == 'english' ? 'Semantic HTML' : 'HTML semántico'}
            </li>
            <li>
              {props.language == 'english'
                ? 'Server side rendering'
                : 'Generación dinámica'}
            </li>
          </ol>{' '}
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>
              {props.language == 'english' ? 'Services' : 'Servicios'}
            </h1>
            <li>Digital Ocean</li>
            <li>Heroku</li>
            <li>Vercel</li>
          </ol>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>DBs</h1>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
