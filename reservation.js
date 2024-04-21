document.addEventListener("DOMContentLoaded", function () {
  const dateBoxes = document.querySelectorAll(".date-box");
  const timeBoxes = document.querySelectorAll(".time-box");

  dateBoxes.forEach((dateBox) => {
    dateBox.addEventListener("click", function () {
      selectDate(dateBox);
      updateButtonState();
    });
  });

  timeBoxes.forEach((timeBox) => {
    timeBox.addEventListener("click", function () {
      selectTime(timeBox);
      updateButtonState();
    });
  });
});

var today = new Date();
var day = today.getDate();
var month = today.toLocaleString("default", { month: "short" });
var dateBoxes = document.querySelectorAll(".date-box");
dateBoxes[0].textContent = month + " " + day;
for (var i = 1; i < dateBoxes.length; i++) {
  var nextDate = new Date();
  nextDate.setDate(today.getDate() + i);
  var nextDay = nextDate.getDate();
  var nextMonth = nextDate.toLocaleString("default", { month: "short" });
  dateBoxes[i].textContent = nextMonth + " " + nextDay;
}

let selectedDate = null;
let selectedTime = null;

function selectDate(dateBox) {
  const dateNumber = dateBox.id.split("-")[2];
  if (selectedDate !== null) {
    document
      .getElementById(`date-box-${selectedDate}`)
      .classList.remove("selected");
  }

  dateBox.classList.add("selected");
  selectedDate = dateNumber;
}

function selectTime(timeBox) {
  const timeNumber = timeBox.id.split("-")[2];
  if (selectedTime !== null) {
    document
      .getElementById(`time-box-${selectedTime}`)
      .classList.remove("selected");
  }

  timeBox.classList.add("selected");
  selectedTime = timeNumber;
}

function updateButtonState() {
  const confirmButton = document.querySelector(".confirm-button");
  if (selectedDate !== null && selectedTime !== null) {
    confirmButton.style.backgroundColor = "#4CAF50";
  } else {
    confirmButton.style.backgroundColor = "lightgrey";
  }
}

function confirmReservation() {
  if (selectedDate !== null && selectedTime !== null) {
    displayReservationInfo();
  } else {
    alert("Please select a date and time before confirming.");
  }
}

function displayReservationInfo() {
  const reservationContainer = document.getElementById("reservation-container");
  reservationContainer.style.display = "none";

  const reservationInfo = document.getElementById("reservation-info");
  reservationInfo.innerHTML = `
	  <h2>Reservation Information</h2>
	  <p style="font-size: 22px;"><strong>Date: ${getDate(
      selectedDate
    )} </strong></p>
	  <p style="font-size: 22px;"><strong>Time: ${getTime(
      selectedTime
    )}</strong></p>
	  <button style="background-color: #41373b; color: #fff;" onclick="changeReservation()">Change Reservation</button>
	  <button style="background-color: #41373b; color: #fff;" onclick="backToMenu()">Home</button>
  `;
}

function changeReservation() {
  const reservationContainer = document.getElementById("reservation-container");
  reservationContainer.style.display = "flex";

  const reservationInfo = document.getElementById("reservation-info");
  reservationInfo.innerHTML = "";

  selectedDate = null;
  selectedTime = null;

  document.querySelectorAll(".date-box.selected").forEach((dateBox) => {
    dateBox.classList.remove("selected");
  });

  document.querySelectorAll(".time-box.selected").forEach((timeBox) => {
    timeBox.classList.remove("selected");
  });

  const confirmButton = document.querySelector(".confirm-button");
  confirmButton.style.backgroundColor = "lightgrey";
}

function getDate(dateNumber) {
  return dateBoxes[dateNumber - 1].textContent;
}

function getTime(timeNumber) {
  const times = [
    "11:00 AM - 11:25 PM",
    "11:35 PM - 12:00 PM",
    "12:00 PM - 12:25 PM",
    "12:35 PM - 01:00 PM",
  ];
  return times[timeNumber - 1];
}

function backToMenu() {
  window.location.href = "index.html";
}
