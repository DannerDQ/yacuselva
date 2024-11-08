'use client';

import React from 'react';
import styles from './styles.module.css';

interface ProductCardProps {
  title: string;
  imageUrl: string;
  price: number;
  description: string;
  onAddToCart: () => void;
}

export default function ProductCard({
  title,
  imageUrl,
  price,
  description,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className={styles['product-card']}>
      <img src={imageUrl} alt={title} className={styles['product-image']} />
      <div className={styles['product-details']}>
        <h2 className={styles['product-title']}>{title}</h2>
        <p className={styles['product-description']}>{description}</p>
        <p className={styles['product-price']}>
          Precio: S/. {price.toFixed(2)}
        </p>
        <button className={styles['add-to-cart-button']} onClick={onAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
