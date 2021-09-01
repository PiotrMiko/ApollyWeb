const nav = document.getElementById("menu-toggle");
const hambIcon = document.querySelector(".hamb-menu");
const closeIcon = document.querySelector(".close-cross");

// const resizeCapture = () => {

// };
const toggle = () => {
  if (nav.classList == "top__bar__nav") {
    nav.classList.toggle("top__bar__nav");
    nav.classList.toggle("top__bar__nav_active");
    hambIcon.src = "./img/Icons/close-line.svg";
  } else if (nav.classList == "top__bar__nav_active") {
    nav.classList.toggle("top__bar__nav_active");
    nav.classList.toggle("top__bar__nav");
    hambIcon.src = "./img/Icons/align-justify.svg";
  }
};

const toggleBtn = document
  .querySelector(".top__bar__menu-toggle")
  .addEventListener("click", toggle);

let modes = ([] = document.querySelectorAll(".item-ani"));
let interval = 1000; //one second
modes.forEach((mode, index) => {
  setTimeout(() => {
    setTimeout(() => {
      modes[index].style.opacity = "1";
      console.log(mode);
    }, index * interval);
  }, 1000 / 2);
});
