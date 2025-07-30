// This file contains utility functions that assist with various tasks throughout the website.

// Function to format price to a currency string
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Function to save cart items to local storage
function saveCartToLocalStorage(cartItems) {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Function to get cart items from local storage
function getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Function to remove cart items from local storage
function clearCartFromLocalStorage() {
    localStorage.removeItem('cart');
}

// Function to calculate total price of items in the cart
function calculateTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Exporting the utility functions for use in other modules
export { formatPrice, saveCartToLocalStorage, getCartFromLocalStorage, clearCartFromLocalStorage, calculateTotal };