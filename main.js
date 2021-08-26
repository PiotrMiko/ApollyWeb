const nav = document.querySelector(".top__bar__nav");
const hambIcon = document.querySelector(".hamb-menu");
const closeIcon = document.querySelector(".close-cross");

const toggle = () => {
  if ((hambIcon.style.display = "flex")) {
    hambIcon.style.display = "none";
    closeIcon.style.display = "flex";
    nav.style.left = "0px";
  } else if ((closeIcon.style.left = "flex")) {
    closeIcon.style.display = "none";
    hambIcon.style.display = "flex";
    nav.style.left = "100%";
    console.log("ok2");
  }
};

const toggleBtn = document
  .querySelector(".top__bar__menu-toggle")
  .addEventListener("click", toggle);
