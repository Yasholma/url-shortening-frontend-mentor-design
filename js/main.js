const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const mobileNav = document.querySelector(".nav");
const shortenForm = document.querySelector(".shorten__form");
const shortInputField = document.querySelector(".shorten__form input");
const shortenBtn = document.querySelector(".shorten__form button");
const shortenResult = document.querySelector(".hero__shorten__results");
const statsContainer = document.querySelector(".stats");

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

menuBtn.addEventListener("click", toggleMenu);
shortenBtn.addEventListener("click", shortenUrl);

let showMenu = false;

function toggleMenu(event) {
  event.preventDefault();
  if (!showMenu) {
    hamburger.classList.add("open");
    mobileNav.classList.add("open");
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
    showMenu = false;
  }
}

function shortenUrl(event) {
  event.preventDefault();
  if (
    shortInputField.value.trim().length <= 0 ||
    !urlRegex.test(shortInputField.value.trim())
  ) {
    shortenForm.classList.add("error");
    shortenResult.classList.remove("open");
    statsContainer.classList.remove("open");
  } else {
    shortenForm.classList.remove("error");
    shortenResult.classList.add("open");
    statsContainer.classList.add("open");
  }
}
