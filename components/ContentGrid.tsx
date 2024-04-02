import React from 'react';
import Image from 'next/image';
import styles from '../styles/ContentGrid.module.css';

const ContentGrid = () => {
  const boxes = [
    { title: 'Moonbucks® on the Record', description: 'Als Reaktion auf Fehlinformationen beziehen wir Stellung und manifestieren, woran wir glauben und wofür wir stehen.', image: '/record.png', buttonText: 'Erfahre mehr' },
    { title: 'Karriere', description: 'Komm für den Job. Bleib für die Community.', image: '/career.jpeg', buttonText: 'Erfahre mehr' },
    { title: 'Unsere Kaffees', description: 'Erfahre mehr über unser Kaffeesortiment.', image: '/coffee.jpeg', buttonText: 'Erfahre mehr' },
    { title: 'Moonbucks® Reusables', description: 'Mehrweg statt Einweg.', image: '/reusable.png', buttonText: 'Erfahre mehr' },
  ];

  return (
    <div className={styles.grid}>
      {boxes.map((box, index) => (
        <div key={index} className={styles.box}>
          <Image src={box.image} alt={box.title} width={500} height={300} objectFit="cover" />
          <h2>{box.title}</h2>
          <p>{box.description}</p>
          <button className={styles.button}>{box.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;
