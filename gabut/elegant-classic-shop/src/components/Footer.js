import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f8f8' }}>
            <p>&copy; {new Date().getFullYear()} Elegant Classic Shop. All rights reserved.</p>
            <nav>
                <a href="/privacy-policy" style={{ margin: '0 10px' }}>Privacy Policy</a>
                <a href="/terms-of-service" style={{ margin: '0 10px' }}>Terms of Service</a>
                <a href="/contact" style={{ margin: '0 10px' }}>Contact Us</a>
            </nav>
        </footer>
    );
};

export default Footer;