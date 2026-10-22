import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <h2 style={styles.logo}>Mi Portfolio</h2>
      <nav>
        <ul style={styles.navList}>
          <li>
            <NavLink to="/" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '30%',
    minWidth: '220px',
    backgroundColor: '#1f2937',
    color: '#ffffff',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  logo: {
    margin: 0,
    fontSize: '22px',
    borderBottom: '2px solid #374151',
    paddingBottom: '10px'
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  link: {
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '16px',
    display: 'block',
    padding: '8px',
    borderRadius: '4px'
  },
  activeLink: {
    color: '#ffffff',
    backgroundColor: '#374151',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    display: 'block',
    padding: '8px',
    borderRadius: '4px'
  }
};

export default Sidebar;