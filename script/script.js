"use strict";
/* Burger */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navText = document.querySelectorAll(".nav-text");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navText.forEach((n) => {
        n.classList.toggle("active");
    });
});
navText.forEach((n) => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
