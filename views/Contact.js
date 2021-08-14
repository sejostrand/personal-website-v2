import React from 'react';
import styles from '../styles/Contact.module.scss';
import { BiCopy } from 'react-icons/bi';
import copy from 'copy-to-clipboard';
import emailjs from 'emailjs-com';

const Contact = (props) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'sejostrand@gmail.com',
        'contactform',
        e.target,
        'user_7rbJqSng965018cyPU0nP'
      )
      .then(
        (result) => {
          window.alert(
            props.language == 'english'
              ? 'Message sent: ' + result.text
              : 'Mensaje enviado: ' + result.text
          );
        },
        (error) => {
          window.alert('Error: ' + error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id='contact-slide' className={styles.page}>
      <div className={styles.container}>
        <p className={styles.sectionTitle}>
          {props.language == 'english' ? 'Say hello!' : 'Déjame un mensaje!'}
        </p>
        <form
          onSubmit={sendEmail}
          id='contact-form'
          className={styles.formContainer}
        >
          <div className={styles.labelGroup}>
            <div className={styles.itemContainer}>
              <h3 className={styles.label}>
                {props.language == 'english' ? 'Email' : 'Correo Electrónico'}
              </h3>
              <input className={styles.textInputL} type='text' name='email' />
            </div>
            <div className={styles.itemContainer}>
              <h3 className={styles.label}>
                {props.language == 'english' ? 'Subject' : 'Asunto'}
              </h3>
              <input className={styles.textInputR} type='text' name='subject' />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <h3 className={styles.label}>
              {props.language == 'english' ? 'Message' : 'Mensaje'}
            </h3>
            <textarea
              placeholder='Hi Sebastian,'
              type='text'
              name='message'
              className={styles.textArea}
            ></textarea>
          </div>
          <div className={styles.row}>
            <button
              type='submit'
              className={styles.sendButton}
              value='send'
              disabled='true'
            >
              {props.language == 'english' ? 'Send' : 'Enviar'}
            </button>
            <div className={styles.linkContainer}>
              <div className={styles.col}>
                <a
                  onClick={() => copy('sejostrand@gmail.com')}
                  className={styles.detailRow}
                >
                  sejostrand@gmail.com
                  <BiCopy className={styles.icon} />
                </a>
                <a
                  onClick={() => copy('+447434902711')}
                  className={styles.detailRow}
                >
                  + (44) 7434 902 711
                  <BiCopy className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
