import React from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
    const products = [
        // Sample product data
        { id: 1, title: 'Elegant Dress', price: 49.99, image: 'path/to/image1.jpg' },
        { id: 2, title: 'Classic Suit', price: 89.99, image: 'path/to/image2.jpg' },
        { id: 3, title: 'Stylish Shoes', price: 39.99, image: 'path/to/image3.jpg' },
        // Add more products as needed
    ];

    return (
        <div className="shop">
            <h1>Our Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;