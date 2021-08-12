import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import React, { useState, useEffect } from 'react';

//page and components
import Navbar from './components/Navbar.js';
import Options from './components/Options';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './components/Footer';
import Default from './Default';

export default function Home() {
  const [view, setView] = useState('0');
  const [language, setLanguage] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const body = document.getElementById('view');
    body.style.transform = `translateX(${view})`;
    switch (view) {
      case '0':
        body.style.maxHeight = '15rem';
        break;
      case '-100vw':
        body.style.maxHeight = '63rem';
        break;
      case '-200vw':
        body.style.maxHeight = '130rem';
        break;
      case '-300vw':
        body.style.maxHeight = '36rem';
        break;
    }
  }, [view]);

  useEffect(() => {
    if (window.localStorage.language == null) {
      window.localStorage.setItem('language', 'english');
    } else {
      setLanguage(window.localStorage.language);
    }
  }, [refresh]);

  const toggleLanguage = () => {
    if (language == 'english') {
      window.localStorage.setItem('language', 'spanish');
    } else {
      window.localStorage.setItem('language', 'english');
    }
    setRefresh(!refresh);
  };

  const toContact = () => {
    setView('-300vw');
    // document.getElementById('contact-form').scrollIntoView();
  };

  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>Sebastian Strand | Web Developer</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Options toggleLanguage={toggleLanguage} language={language} />
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Landing language={language} setView={setView} />
          <Navbar language={language} setView={setView} />
        </div>
        <div className={styles.viewContainer}>
          <div id='view' className={styles.pageContainer}>
            <Default language={language} />
            <About toContact={toContact} language={language} />
            <Projects language={language} />
            <Contact language={language} />
          </div>
        </div>
        <Footer scrollTop={scrollTop} view={view} language={language} />
      </div>
    </div>
  );
}
