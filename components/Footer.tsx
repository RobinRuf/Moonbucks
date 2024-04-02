import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h5>Impressum</h5>
      <address>
        Moonbucks AG<br />
        Bahnhofsplatz 2<br />
        4000 Basel
      </address>
      <p>&copy; 2024 Moonbucks</p>
    </footer>
  );
};

export default Footer;
