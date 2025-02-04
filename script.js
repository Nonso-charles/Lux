        document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("close-btn");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.add("show");
    });

    closeBtn.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});


const images = document.querySelectorAll('.product img');

function fadeInImages() {
  images.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      img.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', fadeInImages);
fadeInImages();


let cart = [];
const cartElement = document.getElementById("cart");
const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartCountElement = document.getElementById("cart-count");

// Add to Cart Function
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productElement = button.closest(".product");
        const name = productElement.getAttribute("data-name");
        const price = parseFloat(productElement.getAttribute("data-price"));

        // Check if item is already in cart
        let existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCart();
    });
});

// Update Cart
function updateCart() {
    cartItemsElement.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        itemCount += item.quantity;

        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} (${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}
            <button class="remove-item" onclick="removeItem(${index})">X</button>
        `;
        cartItemsElement.appendChild(li);
    });

    cartTotalElement.textContent = total.toLocaleString();
    cartCountElement.textContent = itemCount;
}

// Remove Item
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Toggle Cart Visibility
function toggleCart() {
    cartElement.classList.toggle("open");
}

// Checkout Function
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Thank you for your purchase!");
        cart = []; // Empty the cart
        updateCart();
        toggleCart();
    }
});

// Floating icon
document.getElementById('contactIcon').addEventListener('click', function() {
    document.getElementById('contactForm').style.display = 'block';
});

document.getElementById('closeForm').addEventListener('click', function() {
    document.getElementById('contactForm').style.display = 'none';
});


// javascript for Pagination Slider
let currentSlide = 0;
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

// Function to Change Slide
function changeSlide(index) {
    cards.forEach((cards, i) => {
        cards.classList.remove('active');
        dots[i].classList.remove('active');
    });

    cards[index].classList.add('active');
    dots[index].classList.add('active');
}

// Initialise first slide
changeSlide(currentSlide);