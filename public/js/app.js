
const fetchWeather = '/weather';

const weatherForm = document.querySelector("form");

const search = document.querySelector("input");

const weatherIcon = document.querySelector(".weatherIcon i");

const tempElement = document.querySelector(".temperature span");

const weatherCondition = document.querySelector(".weatherCondition");

const locationElement = document.querySelector(".place");

const dateElement = document.querySelector(".date");

dateElement.textContent =  new Date().getDate() + "," + new Date().getMonth();




weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(search.value);
})