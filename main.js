const nav = document.getElementById("menu-toggle");
const hambIcon = document.querySelector(".hamb-menu");
const closeIcon = document.querySelector(".close-cross");
let modes = ([] = document.querySelectorAll(".item-ani"));

// const toggle = () => {
//   if (nav.classList == "top__bar__nav") {
//     nav.classList.toggle("top__bar__nav");
//     nav.classList.toggle("top__bar__nav_active");
//     hambIcon.src = "./img/Icons/close-line.svg";
//   } else if (nav.classList == "top__bar__nav_active") {
//     nav.classList.toggle("top__bar__nav_active");
//     nav.classList.toggle("top__bar__nav");
//     hambIcon.src = "./img/Icons/align-justify.svg";
//   }
// };

// const toggleBtn = document
//   .querySelector(".top__bar__menu-toggle")
//   .addEventListener("click", toggle);
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
let interval = 1000 / 2;
modes.forEach((i, index) => {
  setTimeout(() => {
    setTimeout(() => {
      modes[index].style.opacity = "1";
    }, index * interval);
  }, 1000 / 2);
});
//// napisz to teraz sam

const toggleBtn = document
  .querySelector(".top__bar__menu-toggle")
  .addEventListener("click", toggle);
