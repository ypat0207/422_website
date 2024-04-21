function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
  var toggle = document.querySelector(".menu-toggle");
  toggle.classList.toggle("active");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

function toggleDarkMode() {
  const body = document.body;
  const menu = document.querySelector('.menu');
  const darkModeSwitch = document.getElementById("darkModeSwitch");
  const isDarkMode = body.classList.toggle("dark-mode");
  menu.classList.toggle("dark-mode-menu");

  localStorage.setItem("darkModeEnabled", isDarkMode);
}

function initDarkModeSwitch() {
  const darkModeSwitch = document.getElementById("darkModeSwitch");

  const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

  darkModeSwitch.checked = isDarkModeEnabled;

  if (isDarkModeEnabled) {
    document.body.classList.add("dark-mode");
    document.querySelector('.menu').classList.add("dark-mode-menu");
  }
}
document.addEventListener("DOMContentLoaded", function() {
  initDarkModeSwitch();
});

