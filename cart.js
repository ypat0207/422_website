document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector('.submit-btn');

    submitBtn.addEventListener('click', function () {

      const confirmation = confirm("Your order has been submitted. Thank you!");

      if (confirmation) {
        window.location.href = "index.html";
      }
    });
  });