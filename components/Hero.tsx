import React from 'react';
import Image from 'next/image';
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Image
        src="/hero.png"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default Hero;
