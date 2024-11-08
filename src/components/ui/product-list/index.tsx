'use client';

import React from 'react';
import ProductCard from '../product-card';
import styles from './styles.module.css';

interface Product {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  description: string;
}

interface ProductListProps {
  products: Product[];
  onAddToCart: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          imageUrl={product.imageUrl}
          price={product.price}
          description={product.description}
          onAddToCart={() => onAddToCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
