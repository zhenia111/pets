let burger = document.querySelector(".burger");
burger.addEventListener('click', () => {
    let menu = document.querySelector(".header__nav");
    menu.classList.toggle("opened");
});