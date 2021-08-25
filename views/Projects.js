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
            link='https://personal-website.nyc3.digitaloceanspaces.com/yachtdrop-demo.mp4'
            imageURL='/yachtdrop.jpg'
            pills={['React.js', 'Styled-components', 'Strapi']}
            textsEnglish={[
              'Ecommerce platform for yacht provisioning.',
              'Features include: cms for managing data, dynamic product filtering, shopping cart, user registration and authentication, favourite products, order creation and order history.',
            ]}
            textsSpanish={[
              'Plataforma provisionamiento para de yates.',
              'Plataforma que permite usauarios registrarse, navegar productos, agregar items al carro, guardar productos en favoritos, y acceder ordenes históricos. Para la administración se cuenta con un CMS para controlar productos, pedidos y usuarios.',
            ]}
          />
          <ProjectTile
            language={props.language}
            bodyId='comp'
            label='La Compañía'
            imageURL='/la-compania.jpg'
            pills={['Next.js', 'Styled-components', 'Strapi']}
            textsEnglish={[
              'Website built with a CMS included for a marketing agency.',
              'Design was provided by client.',
            ]}
            textsSpanish={[
              'Pagina de web para una agencia de publicidad, hecha según diseños del cliente.',
              'Cuenta con un CMS para manejar el contenido en la página.',
            ]}
          />
          <ProjectTile
            language={props.language}
            bodyId='person0'
            link='https://sejostrand.github.io/personal-website/'
            label='Personal Website v.0'
            imageURL='/website-v0.jpg'
            pills={['React.js', 'TailwindCSS']}
            textsEnglish={['First version of my personal website.']}
            textsSpanish={['F', 'Primera versión de mi página personal.']}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
