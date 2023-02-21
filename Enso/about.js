// Head Page

const cutHeader = document.querySelector(".cut_header");

cutHeader.onclick = function () {
  const navBar = document.querySelector(".nav_bar");
  navBar.classList.toggle("active");
};
