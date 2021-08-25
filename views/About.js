import React from 'react';
import styles from '../styles/About.module.scss';

const About = (props) => {
  return (
    <div id='about-slide' className={styles.page}>
      <div className={styles.container}>
        <p className={styles.sectionTitle}>
          {props.language == 'english'
            ? "I'm an Industrial Engineering graduate and I taught myself web development."
            : 'Me dicen que soy un inglés chilenizado. Me gradué en Ingienería Civil Indsutrial y soy un Desarrollador Web autodidacta.'}
        </p>
        <p className={styles.smallContent}>
          {props.language == 'english'
            ? ' I moved from the UK to Santiago, Chile when I was 14 and stayed there for 10 years. I speak fluent spanish, love challenges and enjoy working with people.'
            : 'Llegué a Chile desde Inglaterra cuando tuve 14 años, donde me quedé hasta graduarme de la Universidad Adolfo Ibáñez. Billingue en inglés y español, me encantan de los desafíos y tengo un fuerte deseo de seguir aprendiendo.'}
        </p>
        <p className={styles.smallTitle}>
          {props.language == 'english' ? 'Skills' : 'Habilidades de la web'}
        </p>
        <div className={styles.skillsContainer}>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>Javascript</h1>
            <li>
              {props.language == 'english'
                ? 'Requests & authentication'
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
            <li>Sass</li>
            <li>Styled-components</li>
            <li>TailwindCSS</li>
          </ol>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>Tools</h1>
            <li>Git</li>

            <li>Strapi (headless-cms)</li>
            <li>Postman</li>
          </ol>
          <ol className={styles.list}>
            <h1 className={styles.listTitle}>HTML</h1>
            <li>
              {props.language == 'english' ? 'Semantic HTML' : 'HTML semántico'}
            </li>
            <li>
              {props.language == 'english'
                ? 'Dynamic rendering'
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
            <h1 className={styles.listTitle}>DB</h1>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
