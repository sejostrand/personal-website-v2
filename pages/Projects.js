import React from 'react';
import styles from '../styles/Projects.module.scss';
import ProjectTile from './components/ProjectTile';

const Projects = (props) => {
  return (
    <div id='projects-slide' className={styles.page}>
      <div className={styles.container}>
        <p className={styles.sectionTitle}>
          {props.language == 'english'
            ? 'These are some of my projects.'
            : 'Estos son algunos de mis proyectos.'}
        </p>
        <div className={styles.tileContainer}>
          <ProjectTile
            bodyId='yacht'
            label='Yachtdrop'
            imageURL='/yachtdrop.jpg'
            texts={[
              'Helooo dsfhdfkj hskjfh skjfhsf kjshf sdkjf',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
          />
          <ProjectTile
            bodyId='comp'
            label='La Compañía'
            imageURL='/la-compania.jpg'
            texts={[
              'Helooo dsfhdfkj hskjfh skjfhsf kjshf sdkjf',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
          />
          <ProjectTile
            bodyId='person0'
            link='https://sejostrand.github.io/personal-website/'
            label='Personal Website v.0'
            imageURL='/website-v0.jpg'
            texts={[
              'Helooo dsfhdfkj hskjfh skjfhsf kjshf sdkjf',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
          />
          <ProjectTile
            bodyId='person1'
            link=''
            label='Personal Website v.1'
            imageURL='/screenshot.jpg'
            texts={[
              'Helooo dsfhdfkj hskjfh skjfhsf kjshf sdkjf',
              'dskjh oidjf ksj slihf slkjhs f',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
