import React from 'react';
import ProjectCard from '../componentes/ProjectCard';

const Projects = () => {
  const projectsList = [
    {
      id: 'p1',
      nombre: 'Portfolio Web TP1',
      descripcion: 'Primera versión de portfolio personal estático desarrollado para la materia.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com',
      detail: 'Implementación básica de componentes y estructura maquetada en una sola vista.'
    },
    {
      id: 'p2',
      nombre: 'Aplicación Multipágina TP2',
      descripcion: 'Portfolio dinámico con React Router DOM y componentes reutilizables.',
      tech: ['React', 'Vite', 'React Router DOM'],
      link: 'https://github.com',
      detail: 'Manejo de estado local con useState, props, renderizado de listas dinámicas con map() y navegación sin recarga.'
    },
    {
      id: 'p3',
      nombre: 'Gestor de Tareas',
      descripcion: 'Proyecto personal para administración de tareas y proyectos pendientes.',
      tech: ['React', 'JavaScript', 'CSS'],
      link: 'https://github.com',
      detail: 'Permite agregar, marcar como completadas y filtrar tareas activas.'
    }
  ];

  return (
    <div>
      <h1>Mis Proyectos</h1>
      <p>A continuación se presentan los proyectos más relevantes que he realizado:</p>
      <div style={styles.list}>
        {projectsList.map((project) => (
          <ProjectCard
            key={project.id}
            nombre={project.nombre}
            descripcion={project.descripcion}
            tech={project.tech}
            link={project.link}
            detail={project.detail}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px'
  }
};

export default Projects;