const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const hair = document.querySelector(".buhok");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  hair.classList.toggle("open");
});