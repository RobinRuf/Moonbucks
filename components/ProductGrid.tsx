import React from 'react';
import Image from 'next/image';
import styles from "../styles/Product.module.css";

const ProductGrid = () => {
const products = [
  {
    id: 1,
    name: 'Cappuccino',
    price: 'CHF 4.50',
    image: '/cappuccino.png',
  },
  {
    id: 2,
    name: 'Latte Macchiato',
    price: 'CHF 5.00',
    image: '/macchiato.png',
  },
  {
    id: 3,
    name: 'Espresso',
    price: 'CHF 3.00',
    image: '/espresso.png',
  },
  {
    id: 4,
    name: 'Iced Coffee',
    price: 'CHF 4.50',
    image: '/iced.png',
  },
];

  return (
  <div className={styles.grid}>
    {products.map((product) => (
      <div key={product.id} className={styles.productBox}>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          objectFit="cover"
        />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    ))}
  </div>
);
};

export default ProductGrid;
