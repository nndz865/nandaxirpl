import React from 'react';

const ProductDetail = ({ product }) => {
    return (
        <div className="product-detail">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <h2>${product.price}</h2>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;