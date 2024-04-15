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
  