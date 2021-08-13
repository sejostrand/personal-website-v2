import React from 'react';
import styles from '../styles/Projects.module.scss';
import ProjectTile from '../components/ProjectTile';

const Projects = (props) => {
  return (
    <div id='projects-slide' className={styles.page}>
      <div className={styles.container}>
        <p className={styles.sectionTitle}>
          {props.language == 'english'
            ? 'These are some of my projects.'
            : 'Éstos son algunos de mis proyectos.'}
        </p>
        <div className={styles.tileContainer}>
          <ProjectTile
            language={props.language}
            bodyId='yacht'
            label='Yachtdrop'
            imageURL='/yachtdrop.jpg'
            pills={['React.js', 'Styled-components', 'Strapi']}
            textsEnglish={[
              'Ecommerce platform for yacht provisioning',
              'Features include:<br>- User registration<br> -Cart',
            ]}
            textsSpanish={[
              'Pagina de web para una agencia de publicidad.',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
          />
          <ProjectTile
            language={props.language}
            bodyId='comp'
            label='La Compañía'
            imageURL='/la-compania.jpg'
            pills={['Next.js', 'Styled-components', 'Strapi']}
            textsEnglish={[
              'Helooo dsfhdfkj hskjfh skjfhsf kjshf sdkjf',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
            textsSpanish={[
              'Pagina de web para una agencia de publicidad.',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
          />
          <ProjectTile
            language={props.language}
            bodyId='person0'
            link='https://sejostrand.github.io/personal-website/'
            label='Personal Website v.0'
            imageURL='/website-v0.jpg'
            pills={['React.js', 'TailwindCSS']}
            textsEnglish={[
              'Helooo dsfhdfkj hskjfh skjfhsf kjshf sdkjf',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
            textsSpanish={[
              'Pagina de web para una agencia de publicidad.',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
          />
          <ProjectTile
            language={props.language}
            bodyId='person1'
            link=''
            label='Personal Website v.1'
            imageURL='/screenshot.jpg'
            pills={['Next.js', 'TailwindCSS']}
            textsEnglish={[
              'Helooo dsfhdfkj hskjfh skjfhsf kjshf sdkjf',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
            textsSpanish={[
              'Pagina de web para una agencia de publicidad.',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
