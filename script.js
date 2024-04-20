




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

// Show the first slide initially
showSlide(currentSlide);



// Function to toggle dark mode
// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const menu = document.querySelector('.menu');
  const darkModeSwitch = document.getElementById("darkModeSwitch");
  const isDarkMode = body.classList.toggle("dark-mode");
  menu.classList.toggle("dark-mode-menu");

  // Save the user's preference in local storage
  localStorage.setItem("darkModeEnabled", isDarkMode);
}

// Function to initialize dark mode switch state on page load
function initDarkModeSwitch() {
  const darkModeSwitch = document.getElementById("darkModeSwitch");

  // Check if dark mode is enabled in local storage
  const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

  // Update the dark mode switch based on the saved preference
  darkModeSwitch.checked = isDarkModeEnabled;

  // Apply dark mode styles if enabled
  if (isDarkModeEnabled) {
    document.body.classList.add("dark-mode");
    document.querySelector('.menu').classList.add("dark-mode-menu");
  }
}

// Add event listener for DOMContentLoaded event to initialize dark mode switch
document.addEventListener("DOMContentLoaded", function() {
  initDarkModeSwitch();
});
