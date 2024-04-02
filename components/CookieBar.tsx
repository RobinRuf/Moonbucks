'use client'
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from '../styles/CookieBar.module.css';

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieBar}>
      <p>Wir verwenden Cookies, um Ihr Erlebnis zu verbessern.</p>
      <button onClick={handleAccept}>OK</button>
    </div>
  );
};

export default CookieBar;
