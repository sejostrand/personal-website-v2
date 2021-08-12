import React from 'react';
import styles from '../styles/Projects.module.scss';
import ProjectTile from './components/ProjectTile';

const Projects = () => {
  return (
    <div id='projects-slide' className={styles.page}>
      <div className={styles.container}>
        <p className={styles.title}>Here are some of my projects.</p>
        <div className={styles.tileContainer}>
          <ProjectTile label='Yachtdrop' imageURL='/yachtdrop.jpg' />
          <ProjectTile label='La Compañía' imageURL='/la-compania.jpg' />
          <ProjectTile
            link='https://sejostrand.github.io/personal-website/'
            label='Personal Website v.0'
            imageURL='/website-v0.jpg'
          />
          <ProjectTile
            link=''
            label='Personal Website v.1'
            imageURL='/screenshot.jpg'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
