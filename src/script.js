let currentDate = new Date();
let day = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let currentDay = day[currentDate.getDay()];
let currentYear = currentDate.getFullYear();
let month = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];
let currentMonth = month[currentDate.getMonth()];
let currentHour = currentDate.getHours();
let currentMin = currentDate.getMinutes();
let time = document.querySelector(`#time`);
time.innerHTML = `${currentHour}:${currentMin} GMT`;

let h1 = document.querySelector(`h1`);
let button = document.querySelector(`#search-button`);
let city = "Porto";

h1.innerHTML = `${currentDay}, ${currentMonth} ${currentDate.getDate()} ${currentYear}, in ${city}.`;

function writeCityDate() {
  let inputCity = document.querySelector(`#city`);
  city = inputCity.value;
  if (city === "") {
    h1.innerHTML = `Please enter a city`;
  } else {
    h1.innerHTML = `${currentDay}, ${currentMonth} ${currentDate.getDate()} ${currentYear}, in ${city}.`;
  }
}
button.addEventListener("click", writeCityDate);

let todayTemperature = document.querySelector(`#todayTemperature`);
let defaultTemperature = 19;
todayTemperature.innerHTML = `${defaultTemperature}`;

let celsius = document.querySelector(`#celsius`);
let farenheit = document.querySelector(`#farenheit`);
function convertCelsius(event) {
  event.preventDefault();
  todayTemperature.innerHTML = `${defaultTemperature}`;
}
function convertFarenheit(event) {
  event.preventDefault();
  let farenheitTemperature = Math.round((defaultTemperature * 9) / 5 + 32);
  todayTemperature.innerHTML = `${farenheitTemperature}`;
}

celsius.addEventListener("click", convertCelsius);
farenheit.addEventListener("click", convertFarenheit);
