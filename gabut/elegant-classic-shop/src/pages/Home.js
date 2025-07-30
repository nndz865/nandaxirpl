import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const featuredProducts = [
        {
            id: 1,
            title: 'Elegant Dress',
            price: '$49.99',
            image: 'path/to/elegant-dress.jpg',
        },
        {
            id: 2,
            title: 'Classic Watch',
            price: '$199.99',
            image: 'path/to/classic-watch.jpg',
        },
        {
            id: 3,
            title: 'Stylish Handbag',
            price: '$89.99',
            image: 'path/to/stylish-handbag.jpg',
        },
    ];

    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Our Elegant Classic Shop</h1>
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    <div className="product-list">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;