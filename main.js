const menu = document.querySelector("#menu-toggle");
const hambMenu = document.querySelector(".hamb-menu");
const cross = document.querySelector(".close-cross");
const menuopen = document.querySelector(".top__bar__nav");
const navMenu = document.querySelector(".nav__menu");
const active = document.querySelector(".active-menu");

const toggle = () => {
  if (menu.classList == "top__bar__nav") {
    console.log("click");
    hambMenu.style.display = "none";
    cross.style.display = "flex";
    menu.classList.toggle("menu-active");
    menu.classList.toggle("top__bar__nav");
  } else {
    cross.style.display = "none";
    hambMenu.style.display = "flex";
    menu.classList.toggle("menu-active");
    menu.classList.toggle("top__bar__nav");
  }
};

const toggleBtn = document
  .querySelector(".top__bar__menu-toggle")
  .addEventListener("click", toggle);
