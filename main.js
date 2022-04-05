//! variables
const dogImg = document.querySelector("#dogImg");
const nextDogButton = document.querySelector("#nextDog");
const cityForm = document.querySelector("#cityForm");
const inputCity = document.querySelector("#inputCity");
const currentWeather = document.querySelector("#currentWeather");
const city = document.querySelector("#city");
const temperature = document.querySelector("#temperature");
const wind = document.querySelector("#wind");
const description = document.querySelector("#description");
//style
currentWeather.style = `
            margin-top: 20px;
            padding: 20px;
            background-color: #f7f7f7;
            padding-left: 20px;
            border-radius: 20px;
            color:blue`;

//! Step 1: make an API request
nextDogButton.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    //? Parse the body of the raw HTTP response
    .then(function (httpResponse) {
      return httpResponse.json();
    })
    // ? Handle the response bady data
    .then(function (data) {
      // console.log(data.message);
      newImg = dogImg.src = data.message;
      return newImg;
    });
});
//! Step 2 - 10: do some other stuff
cityForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let str = inputCity.value;
  fetch(`https://goweather.herokuapp.com/weather/${str}`)
    //? Parse the body of the raw HTTP response
    .then(function (httpResponse) {
      return httpResponse.json();
    })
    // ? Handle the response bady data
    .then(function (data) {
      city.innerHTML = `Current weather in '<b>${str}</b>' is :`;
      temperature.innerHTML = `Temperature: <b>${data.temperature}</b>`;
      wind.innerHTML = `Wind: <b>${data.wind}`;
      description.innerHTML = `Description: <b>${data.description}</b>`;
    });
  cityForm.reset();
});
