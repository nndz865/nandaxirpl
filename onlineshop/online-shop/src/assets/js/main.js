// This file contains JavaScript code for interactive elements of the online shop website.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the shopping cart
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // Function to update the cart display
    function updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.length;
    }

    // Function to add a product to the cart
    function addToCart(product) {
        cart.push(product);
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartDisplay();
    }

    // Event listener for product add buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const product = {
                id: this.dataset.id,
                name: this.dataset.name,
                price: parseFloat(this.dataset.price),
                quantity: 1
            };
            addToCart(product);
        });
    });

    // Update cart display on page load
    updateCartDisplay();
});