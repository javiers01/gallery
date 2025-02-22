// Select elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on click
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
});