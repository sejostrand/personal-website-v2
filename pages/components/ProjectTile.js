import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/ProjectTile.module.scss';
import { SiGithub } from 'react-icons/si';
import { BsWindow } from 'react-icons/bs';

const ProjectTile = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (isOpen) {
  //     document.getElementById('person0').style.maxHeight = '0';
  //   } else document.getElementById('person0').style.maxHeight = '0';
  // }, [isOpen]);

  return (
    <div className={styles.container}>
      <a href={props.link} target='_blank' className={styles.imageContainer}>
        <Image src={props.imageURL} width='310' height='150' />
      </a>
      <div className={styles.blockContainer}>
        <div className={styles.labelContainer}>
          <h3 className={styles.label}>{props.label}</h3>
          <div>
            <a href={props.link} target='_blank'>
              <BsWindow className={styles.icon} />
            </a>
            <SiGithub className={styles.icon} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <br className={styles.space}></br>
          {props.texts.map((text) => {
            return <p className={styles.paragraph}>{text}</p>;
          })}
          <div className={styles.pillContainer}>
            <a className={styles.pill}>Next.js</a>
            <a className={styles.pill}>Tailwind CSS</a>
            <a className={styles.pill}>Strapi.js</a>
            <a className={styles.pill}>MongoDB.js</a>
            <a className={styles.pill}>Next.js</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
