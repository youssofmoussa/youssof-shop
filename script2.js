document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productList");
    const cartItems = document.getElementById("cartItems");
    const checkoutBtn = document.getElementById("checkoutBtn");
    let cart = [];

    // Sample product data (replace with dynamic data retrieval)
    const products = [
        { id: 1, name: "Iphone 14", price: 19.99 },
        { id: 2, name: "Iphone 14 Pro", price: 29.99 },
        { id: 3, name: "Iphone 14 Pro Max", price: 39.99 },
        { id: 4, name: "Iphone 15", price: 49.99 }
    ];

    // Render product list
    function renderProducts() {
        productList.innerHTML = "";
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="iphone${product.id}.png" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productElement);
        });
    }

    // Add product to cart
    window.addToCart = function (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCart();
        }
    }

    // Remove product from cart
    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Update cart UI and total amount
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
            total += item.price;
        });
        checkoutBtn.textContent = `Proceed to Checkout - Total: $${total.toFixed(2)}`;
    }

    // Checkout
    checkoutBtn.addEventListener("click", function () {
        if (cart.length > 0) {
            alert("Checkout completed. Total amount: $" + checkoutBtn.textContent.split(": ")[1]);
            cart = []; // Clear the cart after checkout
            updateCart();
        } else {
            alert("Your cart is empty. Please add items before checking out.");
        }
    });

    // Initial render
    renderProducts();
});
// Render product list
function renderProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        const width = 200; // Example width
        const height = 150; // Example height
        productElement.innerHTML = `
            <img src="iphone14.png" alt="${product.name}" width="${width}" height="${height}" class="product-img">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}


console.log("2" + "2" - "2");
