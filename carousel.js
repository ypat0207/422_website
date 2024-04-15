document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const carouselDots = document.querySelectorAll(".dot");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      // Hide all slides
      carouselItems.forEach((item) => {
        item.style.display = "none";
      });
  
      // Deactivate all dots
      carouselDots.forEach((dot) => {
        dot.classList.remove("active");
      });
  
      // Show the slide at the given index
      carouselItems[index].style.display = "block";
  
      // Activate the corresponding dot
      carouselDots[index].classList.add("active");
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
    }
  
    // Initialize the carousel
    showSlide(currentIndex);
  
    // Add event listeners to carousel controls
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
  });

document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const carouselDots = document.querySelectorAll(".dot");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      // Hide all slides
      carouselItems.forEach((item) => {
        item.style.display = "none";
      });
  
      // Deactivate all dots
      carouselDots.forEach((dot) => {
        dot.classList.remove("active");
      });
  
      // Show the slide at the given index
      carouselItems[index].style.display = "block";
  
      // Activate the corresponding dot
      carouselDots[index].classList.add("active");
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
    }
  
    // Initialize the carousel
    showSlide(currentIndex);
  
    // Add event listeners to carousel controls
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");
    let timer;
  
    // Function to show slides
    function showSlides() {
      // Hide all slides
      slides.forEach((slide) => (slide.style.display = "none"));
      // Deactivate all dots
      dots.forEach((dot) => dot.classList.remove("active"));
      // Show the current slide
      slides[slideIndex].style.display = "block";
      dots[slideIndex].classList.add("active");
      // Move to the next slide
      slideIndex++;
      // If we've reached the end, start from the beginning
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
    }
  
    // Function to start the carousel rotation
    function startCarousel() {
      timer = setInterval(showSlides, 3000);
    }
  
    // Start the carousel rotation initially
    startCarousel();
  });
  
