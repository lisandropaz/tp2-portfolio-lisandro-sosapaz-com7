import React from 'react';

const SkillCard = ({ nombre, nivel, categoria }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{nombre}</h3>
      <p style={styles.text}><strong>Categoria:</strong> {categoria}</p>
      <p style={styles.text}><strong>Nivel:</strong> {nivel}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  title: {
    margin: '0 0 8px 0',
    color: '#1f2937'
  },
  text: {
    margin: '4px 0',
    color: '#4b5563'
  }
};

export default SkillCard;