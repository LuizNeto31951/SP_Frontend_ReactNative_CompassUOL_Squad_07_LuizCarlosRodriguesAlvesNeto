/* Burger */
const hamburger = document.querySelector(".hamburger") as HTMLDivElement;
const navMenu = document.querySelector(".nav-menu") as HTMLDivElement;
const navText = document.querySelectorAll(".nav-text");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  navText.forEach((n) => {
    n.classList.toggle("active");
  });
});

navText.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
