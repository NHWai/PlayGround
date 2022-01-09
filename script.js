"use strict";
const nav = document.getElementById("navbar");
const navEl = document.querySelectorAll(".navEl");
const serNav = document.querySelectorAll(".service-nav");
const cliNav = document.querySelectorAll(".client-nav");
const proNav = document.querySelectorAll(".project-nav");
const services = document.getElementById("services");
const clients = document.getElementById("clients");
const projects = document.getElementById("projects");
const setBtn = document.querySelector(".setting");
const navLinks = document.querySelector(".navLinks");
const modal = document.querySelector(".modal");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const btn = document.querySelector(".btn");
const btnBreak = document.querySelector(".btnBreak");
const x = window.matchMedia("(max-width: 600px)");
const x1 = window.matchMedia("(max-width: 1200px)");
const width = window.innerWidth - 15;
const height = window.innerHeight - 15;

navClick(serNav, services);
navClick(cliNav, clients);
navClick(proNav, projects);

function navClick(navEl, link) {
  navEl.forEach((e) => {
    e.addEventListener("click", () => {
      getCoords(link);
    });
  });
}

function getCoords(el) {
  const coord = el.getBoundingClientRect();
  window.scrollTo(
    coord.left + window.pageXOffset,
    coord.top + window.pageYOffset - 70
  );
}

//Window Changes
//breakpointUnder600px
frameWidthUndersix(x);
x.addListener(frameWidthUndersix);
//breakpointUnder1200px
frameWidthUnderTwl(x1);
x1.addListener(frameWidthUnderTwl);

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
  if (window.scrollY > 0) {
    btn.classList.add("scroll");

    btn.innerHTML = '<i class="fas fa-envelope"></i>';
  } else {
    btn.classList.remove("scroll");
    btn.innerHTML = "Let's Talk";
  }

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

navEl.forEach((el) => {
  el.addEventListener("click", () => {
    modal.classList.add("hidden");
    setBtn.classList.toggle("open");
  });
});

function frameWidthUndersix(x) {
  if (x.matches) {
    setBtn.classList.remove("hidden");
    setBtn.classList.remove("open");
    navLinks.classList.add("hidden");
    modal.classList.add("hidden");
  } else {
    setBtn.classList.add("hidden");
    navLinks.classList.remove("hidden");
  }
}

function frameWidthUnderTwl(x1) {
  if (x1.matches) {
    btn.classList.add("hidden");
    btnBreak.classList.remove("hidden");
  } else {
    btn.classList.remove("hidden");
    btnBreak.classList.add("hidden");
  }
}
