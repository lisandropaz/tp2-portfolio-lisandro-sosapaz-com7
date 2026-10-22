import React from 'react';

const About = () => {
  return (
    <div style={{ color: 'rgb(16, 223, 140)' }}>
      <h1 style={{ color: 'rgb(16, 223, 140)', fontSize: '28px', marginBottom: '16px' }}>
        Sobre Mí
      </h1>
      
      <section style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#1f2937', fontSize: '22px', marginBottom: '8px' }}>
          Presentación Personal
        </h2>
        <p style={{ color: '#4b5563', lineHeight: '1.5', fontSize: '16px' }}>
          ¡Hola! Me llamo Lisandro Paz y soy estudiante de programación enfocado en adquirir habilidades sólidas en el desarrollo web frontend y backend.
        </p>
      </section>

      <section style={{ marginTop: '24px' }}>
        <h2 style={{ color: '#1f2937', fontSize: '22px', marginBottom: '8px' }}>
          Formación Académica
        </h2>
        <p style={{ color: '#4b5563', lineHeight: '1.5', fontSize: '16px' }}>
          Actualmente me encuentro cursando la materia Programación en la Universidad Tecnológica Nacional (UTN - Facultad Regional Tucumán).
        </p>
      </section>

      <section style={{ marginTop: '24px' }}>
        <h2 style={{ color: '#1f2937', fontSize: '22px', marginBottom: '8px' }}>
          Intereses y Objetivos Profesionales
        </h2>
        <ul style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '16px', paddingLeft: '20px' }}>
          <li>Creación de interfaces web dinámicas, interactivas y adaptables a distintos dispositivos.</li>
          <li>Aprender constantemente nuevas herramientas y tecnologías dentro del ecosistema de JavaScript.</li>
          <li>Desarrollarme profesionalmente como Desarrollador Full Stack.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;