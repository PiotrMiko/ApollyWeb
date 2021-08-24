const menu = document.querySelector("#menu-toggle");

const toggle = () => {
  console.log("click");
  menu.classList.toggle("menu-active");
  menu.classList.toggle("top__bar__nav");
};

const toggleBtn = document
  .querySelector(".top__bar__menu-toggle")
  .addEventListener("click", toggle);
