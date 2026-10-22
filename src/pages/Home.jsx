import React from 'react';

const Home = () => {
  return (
    <div style={{ color: 'rgb(16, 223, 140)' }}>
      <h1 style={{ color: 'rgb(16, 223, 140)', fontSize: '38px', marginBottom: '16px' }}>
        Bienvenido a mi Portfolio Personal
      </h1>
      <p style={{ fontSize: '18px', color: '#101113', lineHeight: '1.5' }}>
        ¡Hola! Me llamo Lisandro Paz y soy estudiante de la Universidad Tecnológica Nacional (UTN - Regional Tucumán).
      </p>
      
      <section style={{ marginTop: '24px' }}>
        <h2 style={{ color: 'rgb(16, 223, 140)', fontSize: '28px', marginBottom: '8px' }}>
          Perfil Profesional
        </h2>
        <p style={{ color: '#0c0c0d', lineHeight: '1.5' }}>
          Me apasiona el desarrollo de software y la construcción de aplicaciones web dinámicas y modernas. 
          En este portfolio encontrarás información sobre mi formación, proyectos desarrollados y tecnologías que utilizo.
        </p>
      </section>

      <section style={{ marginTop: '24px' }}>
        <h2 style={{ color: 'rgb(16, 223, 140)', fontSize: '25px', marginBottom: '8px' }}>
          Navegación
        </h2>
        <p style={{ color: '#0b0c0c', lineHeight: '1.5' }}>
          Utiliza el menú lateral para navegar entre las distintas secciones de mi sitio multipágina desarrollado con React Router DOM.
        </p>
      </section>
    </div>
  );
};

export default Home;