import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectTile.module.scss';
import { SiGithub } from 'react-icons/si';
import { BsWindow } from 'react-icons/bs';

const ProjectTile = (props) => {
  return (
    <div className={styles.container}>
      <a
        href={props.link}
        target='_blank'
        className={styles.imageContainer}
        rel='noreferrer'
      >
        <Image
          src={props.imageURL}
          width='310'
          height='150'
          alt='Website Screenshot'
        />
      </a>
      <div className={styles.blockContainer}>
        <div className={styles.labelContainer}>
          <h3 className={styles.label}>{props.label}</h3>
          <div>
            <a href={props.link} target='_blank' rel='noreferrer'>
              <BsWindow className={styles.icon} />
            </a>
            <SiGithub className={styles.icon} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <br className={styles.space}></br>
          {props.language == 'english' &&
            props.textsEnglish.map((text) => {
              return (
                <p key={text} className={styles.paragraph}>
                  {text}
                </p>
              );
            })}
          {props.language == 'spanish' &&
            props.textsSpanish.map((text) => {
              return (
                <p key={text} className={styles.paragraph}>
                  {text}
                </p>
              );
            })}
          <div className={styles.pillContainer}>
            {props.pills.map((item) => {
              return (
                <a key={item} className={styles.pill}>
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
