document.addEventListener('DOMContentLoaded', function () {
  const dateBoxes = document.querySelectorAll('.date-box');
  const timeBoxes = document.querySelectorAll('.time-box');

  dateBoxes.forEach(dateBox => {
      dateBox.addEventListener('click', function () {
          selectDate(dateBox);
          updateButtonState();
      });
  });

  timeBoxes.forEach(timeBox => {
      timeBox.addEventListener('click', function () {
          selectTime(timeBox);
          updateButtonState();
      });
  });
});

let selectedDate = null;
let selectedTime = null;

function selectDate(dateBox) {
  const dateNumber = dateBox.id.split('-')[2];
  // Reset previously selected date box
  if (selectedDate !== null) {
      document.getElementById(`date-box-${selectedDate}`).classList.remove('selected');
  }

  // Select the clicked date box
  dateBox.classList.add('selected');
  selectedDate = dateNumber;
}

function selectTime(timeBox) {
  const timeNumber = timeBox.id.split('-')[2];
  // Reset previously selected time box
  if (selectedTime !== null) {
      document.getElementById(`time-box-${selectedTime}`).classList.remove('selected');
  }

  // Select the clicked time box
  timeBox.classList.add('selected');
  selectedTime = timeNumber;
}

function updateButtonState() {
  const confirmButton = document.querySelector('.confirm-button');
  if (selectedDate !== null && selectedTime !== null) {
      confirmButton.style.backgroundColor = '#4CAF50';
  } else {
      confirmButton.style.backgroundColor = 'lightgrey';
  }
}

function confirmReservation() {
  // Check if both date and time are selected
  if (selectedDate !== null && selectedTime !== null) {
      // Display reservation information
      displayReservationInfo();
  } else {
      alert("Please select a date and time before confirming.");
  }
}

function displayReservationInfo() {
// Remove original items and show reservation info
  const reservationContainer = document.getElementById('reservation-container');
  reservationContainer.style.display = 'none';

  const reservationInfo = document.getElementById('reservation-info');
  reservationInfo.innerHTML = `
      <h2>Reservation Information</h2>
      <p style="font-size: 22px;"><strong>Date: ${getDate(selectedDate)} </strong></p>
      <p style="font-size: 22px;"><strong>Time: ${getTime(selectedTime)}</strong></p>
      <button style="background-color: #41373b; color: #fff;" onclick="changeReservation()">Change Reservation</button>
      <button style="background-color: #41373b; color: #fff;" onclick="backToMenu()">Home</button>
  `;
}

function changeReservation() {
  // get back to original page
const reservationContainer = document.getElementById('reservation-container');
  reservationContainer.style.display = 'flex';

  const reservationInfo = document.getElementById('reservation-info');
  reservationInfo.innerHTML = '';

  // Reset selected date and time
  selectedDate = null;
  selectedTime = null;

// Remove selected state from date and time boxes
  document.querySelectorAll('.date-box.selected').forEach(dateBox => {
      dateBox.classList.remove('selected');
  });

  document.querySelectorAll('.time-box.selected').forEach(timeBox => {
      timeBox.classList.remove('selected');
  });

  // Reset confirm button color
  const confirmButton = document.querySelector('.confirm-button');
  confirmButton.style.backgroundColor = 'lightgrey';
}

function getDate(dateNumber) {
  // Function to return actual date based on the selected date number
  const dates = ['May 5', 'May 6', 'May 7', 'May 8', 'May 9'];
  return dates[dateNumber - 1];
}

function getTime(timeNumber) {
  // Function to return actual time based on the selected time number
  const times = ['11:00 AM - 12:00 PM', '12:00 PM - 01:00 PM', '01:00 PM - 02:00 PM', '02:00 PM - 03:00 PM'];
  return times[timeNumber - 1];
}

function backToMenu() {
  window.location.href = "index.html";
}

var today = new Date();
var day = today.getDate();
var month = today.toLocaleString('default', { month: 'short' });
var dateBoxes = document.querySelectorAll('.date-box');
dateBoxes[0].textContent = month + ' ' + day;
for (var i = 1; i < dateBoxes.length; i++) {
    var nextDate = new Date();
    nextDate.setDate(today.getDate() + i);
    var nextDay = nextDate.getDate();
    var nextMonth = nextDate.toLocaleString('default', { month: 'short' });
    dateBoxes[i].textContent = nextMonth + ' ' + nextDay;
}