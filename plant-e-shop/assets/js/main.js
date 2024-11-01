// Nav Menu
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")
const navMenu = document.getElementById("nav-menu")

navToggle?.addEventListener("click", toggleNavMenu)
navClose?.addEventListener("click", toggleNavMenu)

function toggleNavMenu() {
    navMenu && navMenu.classList.toggle("show-menu")
    console.log("Clicked");
}

