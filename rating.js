const stars = document.querySelectorAll(".star");
const submitBtns = document.querySelectorAll(".submitBtn");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const itemIndex = Math.floor(index / 5); // Determine the item index based on the star index
    const value = (index % 5) + 1; // Determine the rating value based on the star index
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

submitBtns.forEach((submitBtn) => {
  submitBtn.addEventListener("click", () => {
    alert("Thanks for the review!");
    stars.forEach((star) => {
      star.classList.remove("active");
    });
  });
});
