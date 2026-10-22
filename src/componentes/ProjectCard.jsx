import React, { useState } from 'react';

const ProjectCard = ({ nombre, descripcion, tech, link, detail }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div style={styles.card}>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p><strong>Tecnologias:</strong> {tech.join(', ')}</p>
      
      {showDetail && (
        <div style={styles.detailBox}>
          <p><strong>Detalle adicional:</strong> {detail}</p>
        </div>
      )}

      <div style={styles.buttonContainer}>
        <button onClick={toggleDetail} style={styles.btn}>
          {showDetail ? 'Ocultar detalles' : 'Ver mas detalles'}
        </button>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={styles.linkBtn}>
            Ver repositorio
          </a>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  detailBox: {
    backgroundColor: '#f9fafb',
    padding: '10px',
    borderRadius: '4px',
    borderLeft: '4px solid #2563eb'
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px'
  },
  btn: {
    padding: '8px 12px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  linkBtn: {
    padding: '8px 12px',
    backgroundColor: '#4b5563',
    color: '#ffffff',
    borderRadius: '4px',
    textDecoration: 'none'
  }
};

export default ProjectCard;