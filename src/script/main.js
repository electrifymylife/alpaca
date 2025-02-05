"use strict";

const body = document.querySelector("body");
const main = document.querySelector("main");
const burger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
document.addEventListener("DOMContentLoaded", () => {
  main.classList.add("main--bg-visible");
});
burger.addEventListener("click", () => {
  if (burger.classList.contains("header__burger")) {
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    burger.classList.remove("header__burger");
    burger.classList.add("header__cross");

    headerNav.classList.add("header__nav--active");

    body.style.overflow = "hidden";
    main.appendChild(overlay);
  } else {
    burger.classList.remove("header__cross");
    burger.classList.add("header__burger");

    headerNav.classList.remove("header__nav--active");

    body.style.overflow = "unset";
    document.querySelector(".overlay").remove();
  }
});

headerNav.addEventListener("click", (e) => {
  const targetLink = e.target.closest(".header__nav button");
  if (!targetLink || !targetLink.nextElementSibling) return;
  if (targetLink) e.preventDefault();
  const targetWrapper = targetLink.nextElementSibling;
  if (window.innerWidth <= 768) {
    if (targetLink.classList.contains("header__nav-link--expanded")) {
      targetLink.classList.remove("header__nav-link--expanded");
      targetWrapper.classList.remove("header__nav-inner-wrapper--active");
    } else {
      targetLink.classList.add("header__nav-link--expanded");
      targetWrapper.classList.add("header__nav-inner-wrapper--active");
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    burger.classList.remove("header__cross");
    burger.classList.add("header__burger");
    headerNav.classList.remove("header__nav--active");
    body.style.overflow = "unset";
    document.querySelector(".overlay") && document.querySelector(".overlay").remove();

    for (const el of document.querySelectorAll(".header__nav-link--expanded")) {
      el.classList.remove("header__nav-link--expanded");
    }
    for (const el of document.querySelectorAll(".header__nav-inner-wrapper--active")) {
      el.classList.remove("header__nav-inner-wrapper--active");
    }
  }
});
