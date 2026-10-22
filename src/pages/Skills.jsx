import React from 'react';
import SkillCard from '../componentes/SkillCard';

const Skills = () => {
  const skillsList = [
    { id: 1, nombre: 'HTML5', nivel: 'Intermedio', categoria: 'Frontend' },
    { id: 2, nombre: 'CSS3', nivel: 'Intermedio', categoria: 'Frontend' },
    { id: 3, nombre: 'JavaScript', nivel: 'Intermedio', categoria: 'Lenguaje' },
    { id: 4, nombre: 'React', nivel: 'Intermedio', categoria: 'Frontend' },
    { id: 5, nombre: 'Git & GitHub', nivel: 'Intermedio', categoria: 'Herramientas' },
    { id: 6, nombre: 'Vite', nivel: 'Inicial', categoria: 'Herramientas' }
  ];

  return (
    <div>
      <h1 style={{ color: 'rgb(16, 223, 140)', fontSize: '38px', marginBottom: '12px' }}>
        Mis Habilidades Técnicas
      </h1>
      <p style={{ color: '#131416', fontSize: '16px', marginBottom: '20px' }}>
        Listado de tecnologías y herramientas que utilizo en mis proyectos:
      </p>
        {skillsList.map((skill) => (
          <SkillCard
            key={skill.id}
            nombre={skill.nombre}
            nivel={skill.nivel}
            categoria={skill.categoria}
          />
        ))}
      </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
    marginTop: '20px'
  }
};

export default Skills;