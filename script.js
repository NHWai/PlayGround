"use strict";
const nav = document.getElementById("navbar");
const navEl = document.querySelectorAll(".navEl");
const setBtn = document.querySelector(".setting");
const navLinks = document.querySelector(".navLinks");
const modal = document.querySelector(".modal");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const x = window.matchMedia("(max-width: 600px)");

//Window Changes
myFunction(x);
x.addListener(myFunction);

//NavEl color changes
navEl.forEach((e) =>
  e.addEventListener("click", function () {
    navEl.forEach((e) => e.classList.remove("current"));
    this.classList.add("current");
  })
);

//Navbar Color Changes
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
    line1.style.backgroundColor = "#000";
    line2.style.backgroundColor = "#000";
  } else {
    nav.classList.remove("active");
    line1.style.backgroundColor = "#fff";
    line2.style.backgroundColor = "#fff";
  }
}

//Modal Window
setBtn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  setBtn.classList.toggle("open");
});

function myFunction(x) {
  if (x.matches) {
    setBtn.classList.remove("hidden");
    navLinks.classList.add("hidden");
  } else {
    setBtn.classList.add("hidden");
    navLinks.classList.remove("hidden");
  }
}
