const nav = document.getElementById("menu-toggle");
const hambIcon = document.querySelector(".hamb-menu");
const closeIcon = document.querySelector(".close-cross");

const toggle = () => {
  if (nav.classList == "top__bar__nav") {
    nav.classList.toggle("top__bar__nav");
    nav.classList.toggle("top__bar__nav_active");
    hambIcon.src = "./img/Icons/close-line.svg";
    console.log("flex");
  } else if (nav.classList == "top__bar__nav_active") {
    nav.classList.toggle("top__bar__nav_active");
    nav.classList.toggle("top__bar__nav");
    hambIcon.src = "./img/Icons/align-justify.svg";
    console.log("none");
  }
};

const toggleBtn = document
  .querySelector(".top__bar__menu-toggle")
  .addEventListener("click", toggle);
//  <img class="close-cross" src="./img/Icons/close-line.svg" alt="" />
