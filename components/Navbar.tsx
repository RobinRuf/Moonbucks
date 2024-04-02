'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  activeTab: 'Home' | 'Über Uns' | 'Produkte' | 'Kontakt' | 'Karriere';
}

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image src="/logo.png" alt="Logo" width={120} height={120} priority />
        </Link>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Kreuz-Symbol zum Schließen, Burger-Icon zum Öffnen */}
      </div>

      <div className={isMenuOpen ? styles.navigationActive : styles.navigation}>
        <a href='/' className={activeTab === 'Home' ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</a>
        <a href='/about' className={activeTab === 'Über Uns' ? `${styles.navLink} ${styles.active}` : styles.navLink}>Über Uns</a>
        <a href='/products' className={activeTab === 'Produkte' ? `${styles.navLink} ${styles.active}` : styles.navLink}>Produkte</a>
        <a href='/contact' className={activeTab === 'Kontakt' ? `${styles.navLink} ${styles.active}` : styles.navLink}>Kontakt</a>
        <a href='/career' className={activeTab === 'Karriere' ? `${styles.navLink} ${styles.active}` : styles.navLink}>Karriere</a>
      </div>
    </nav>
  );
};

export default Navbar;
