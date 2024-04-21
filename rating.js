const stars = document.querySelectorAll(".star");
const submitBtns = document.querySelectorAll(".submitBtn");

submitBtns.forEach((submitBtn, index) => {
  submitBtn.addEventListener("click", () => {
    const starsContainer = submitBtn.parentNode.previousElementSibling;
    const starsInContainer = starsContainer.querySelectorAll(".star");
    alert("Thanks for the review!");
    starsInContainer.forEach((star) => {
      star.classList.remove("active");
    });
  });
});

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const itemIndex = Math.floor(index / 5);
    const value = (index % 5) + 1; 
    resetStars(itemIndex);
    for (let i = itemIndex * 5; i < itemIndex * 5 + value; i++) {
      stars[i].classList.add("active");
    }
    console.log(`You rated item ${itemIndex + 1} with ${value} stars.`);
  });
});

function resetStars(itemIndex) {
  for (let i = itemIndex * 5; i < (itemIndex + 1) * 5; i++) {
    stars[i].classList.remove("active");
  }
}
