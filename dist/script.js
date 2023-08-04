const favoritesNav = document.querySelectorAll(".favorites__nav__link");
const favoritesContent = document.querySelectorAll(".favorites__item__content");
favoritesNav.forEach((favorites) => {
    favorites.addEventListener("click", () => {
        removeActivefavorites();
        favorites.style = "transition:.5s ease";
        favorites.classList.add("active");
        favorites.style = "transition:.5s ease";
        const activeContent = document.querySelector(`#${favorites.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    });
    
});

function removeActivefavorites() {
    favoritesNav.forEach((favorites) => {
        favorites.classList.remove("active");
    });
}

function removeActiveContent() {
    favoritesContent.forEach((favorites) => {
        favorites.classList.remove("active");
    });
}

const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const hair = document.querySelector(".buhok");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
    hair.classList.toggle("open");
});

