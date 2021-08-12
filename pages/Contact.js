import React from 'react';
import styles from '../styles/Contact.module.scss';

const Contact = (props) => {
  return (
    <div id='contact-slide' className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {props.language == 'english' ? 'Say hello.' : 'Dejame un mensaje!'}
        </h1>
        <form id='contact-form' className={styles.formContainer}>
          <div className={styles.labelGroup}>
            <div className={styles.itemContainer}>
              <h3 className={styles.label}>
                {props.language == 'english' ? 'Email' : 'Correo Electronico'}
              </h3>
              <input className={styles.textInputL} type='text' />
            </div>
            <div className={styles.itemContainer}>
              <h3 className={styles.label}>
                {props.language == 'english' ? 'Subject' : 'Asunto'}
              </h3>
              <input className={styles.textInputR} type='text' />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <h3 className={styles.label}>
              {props.language == 'english' ? 'Message' : 'Mensaje'}
            </h3>
            <textarea
              placeholder='Say hello..'
              type='text'
              className={styles.textArea}
            ></textarea>
          </div>
          <div className=''>
            <button type='submit' className={styles.sendButton}>
              {props.language == 'english' ? 'Send' : 'Enviar'}
            </button>
            <div className={styles.linkContainer}></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
