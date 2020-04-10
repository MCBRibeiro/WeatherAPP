let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};
let cities = prompt("Enter a city");
cities = cities.trim();
cities = cities.toLowerCase();
if (cities === "") {
  alert(
    `Sorry, you need to enter a city name in order to view it's temperature and humidity in the present day.`
  );
} else {
  if (weather[cities] === undefined) {
    cities = `${cities.charAt(0).toUpperCase()}${cities.slice(1)}`;
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cities}`
    );
  } else {
    weather[cities].fahrenheit = (weather[cities].temp * 9) / 5 + 32;
    let city = `${cities.charAt(0).toUpperCase()}${cities.slice(1)}`;
    alert(
      `It is currently ${weather[cities].temp}°C (${weather[cities].fahrenheit}°F) in ${city} with a humidity of ${weather[cities].humidity}%.`
    );
  }
}
