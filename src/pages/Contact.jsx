import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Si deseas comunicarte conmigo, puedes hacerlo a traves de los siguientes medios:</p>
      
      <div style={styles.contactContainer}>
        <p><strong>Email:</strong> sampatimm@gmail.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/tu-usuario</a></p>
        
      </div>
    </div>
  );
};

const styles = {
  contactContainer: {
    backgroundColor: '#f9fafb',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    marginTop: '20px'
  }
};

export default Contact;