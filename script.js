"use strict";
const nav = document.getElementById("navbar");
const navEl = document.querySelectorAll(".navEl");

navEl.forEach((e) =>
  e.addEventListener("click", function () {
    navEl.forEach((e) => e.classList.remove("current"));
    this.classList.add("current");
  })
);

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
