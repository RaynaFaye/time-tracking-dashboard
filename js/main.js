const workTime = document.querySelector('.work-time .time-block__text__time');
const workTimePrevious = document.querySelector('.work-time .previous-time');
const playTime = document.querySelector('.play-time .time-block__text__time');
const playTimePrevious = document.querySelector('.play-time .previous-time');
const studyTime = document.querySelector('.study-time .time-block__text__time');
const studyTimePrevious = document.querySelector('.study-time .previous-time');
const exerciseTime = document.querySelector('.exercise-time .time-block__text__time');
const exerciseTimePrevious = document.querySelector('.exercise-time .previous-time');
const socialTime = document.querySelector('.social-time .time-block__text__time');
const socialTimePrevious = document.querySelector('.social-time .previous-time');
const selfTime = document.querySelector('.self-time .time-block__text__time');
const selfTimePrevious = document.querySelector('.self-time .previous-time');
const previousDates = document.querySelectorAll('.previous-date');
const headerListButtons = document.querySelectorAll('.header__list__item');

//Function to change the data on the page
function changaData(data, timestamp, pastDate) {
  workTime.textContent = data[0].timeframes[timestamp].current + 'hrs';
  workTimePrevious.textContent = data[0].timeframes[timestamp].previous + 'hrs';
  playTime.textContent = data[1].timeframes[timestamp].current + 'hrs';
  playTimePrevious.textContent = data[1].timeframes[timestamp].previous + 'hrs';
  studyTime.textContent = data[2].timeframes[timestamp].current + 'hrs';
  studyTimePrevious.textContent = data[2].timeframes[timestamp].previous + 'hrs';
  exerciseTime.textContent = data[3].timeframes[timestamp].current + 'hrs';
  exerciseTimePrevious.textContent = data[3].timeframes[timestamp].previous + 'hrs';
  socialTime.textContent = data[4].timeframes[timestamp].current + 'hrs';
  socialTimePrevious.textContent = data[4].timeframes[timestamp].previous + 'hrs';
  selfTime.textContent = data[5].timeframes[timestamp].current + 'hrs';
  selfTimePrevious.textContent = data[5].timeframes[timestamp].previous + 'hrs';
  previousDates.forEach((previousDate) => {
    previousDate.textContent = pastDate;
  });
}

//Change the times depending on if daily, weekly, monthly
function changeToWeekly() {
  fetch('http://localhost/tests/data.json')
    .then((response) => response.json())
    .then((data) => {
      changaData(data, 'weekly', 'Last Week');
    });
}
function changeToDaily() {
  fetch('http://localhost/tests/data.json')
    .then((response) => response.json())
    .then((data) => {
      changaData(data, 'daily', 'Previous Day');
    });
}
function changeToMontly() {
  fetch('http://localhost/tests/data.json')
    .then((response) => response.json())
    .then((data) => {
      changaData(data, 'monthly', 'Last Month');
    });
}

//Change content when clickcling on the buttons of the header
headerListButtons.forEach((headerListButton) => {
  headerListButton.addEventListener('click', function () {
    headerListButtons.forEach((headerListButton) => {
      headerListButton.classList.remove('selected');
    });
    headerListButton.classList.add('selected');
    if (headerListButton.classList.contains('daily')) {
      changeToDaily();
    } else if (headerListButton.classList.contains('weekly')) {
      changeToWeekly();
    } else {
      changeToMontly();
    }
  });
});

//Load weekly data on page load
changeToWeekly();
