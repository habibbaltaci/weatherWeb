const url = "https://api.openweathermap.org/data/2.5/";
const key = "73c6fed6b753e5dfef707e09dc51ed9d";

const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchBar.value);
};
const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};
const displayResult = (result) => {
  let city = document.querySelector("#city");
  city.innerText = `${result.name},${result.sys.country}`;

  let temp = document.querySelector("#temp");
  temp.innerText = `${Math.round(result.main.temp)}C°`;

  let tempLevel = document.querySelector("#tempLevel");
  tempLevel.innerText = `${Math.round(result.main.temp_min)}C° | ${Math.round(
    result.main.temp_max
  )}C°`;

  let tempState = document.querySelector("#tempState");
  tempState.innerText = `weather condition: ${result.weather[0].description}`;

 
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);

let currentDate = new Date();
let currentTime = currentDate.getHours();
// alert(currentTime)
if ((currentClock) => 8) {
  document.body.style.backgroundColor = "lightblue";
}
