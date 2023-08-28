const btn = document.querySelector(".header__burger")
const nav = document.querySelector(".menu__list")

btn.addEventListener("click", () => {
    nav.classList.toggle("menu__list--open")
})