document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector('.submit-btn');

    submitBtn.addEventListener('click', function () {
      // Create a confirmation popup
      const confirmation = confirm("Your order has been submitted. Thank you!");

      // Check if the user confirmed
      if (confirmation) {
        // Redirect to another page or perform any other action
        // For example, redirect to the homepage after the order is submitted
        window.location.href = "index.html";
      }
    });
  });