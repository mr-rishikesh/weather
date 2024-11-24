  let input = document.querySelector(".input");
let temp  = document.querySelector(".temp");
let wind  = document.querySelector(".wind");
let weather  = document.querySelector(".weather");
let cityName = document.querySelector(".cityName");
let btn = document.querySelector(".btn");

// let city = "delhi";
 
// console.log();

const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const key = "&appid=885669c0a13f4581cd5afa203a233457";


async function getWeather(city) {

      


 
  const response = await fetch(url + city + key + '&units=metric');
  var data = await response.json();
  console.log(data);



 
  
 cityName.innerHTML = data.name;
 temp.innerHTML ="Temprature : " + data.main.temp;
 wind.innerHTML ="Wind  : " + data.wind.speed + " m/s" ;
 weather.innerHTML ="Weather  : " + data.weather.main;

}
   

btn.addEventListener("click", () => {
  getWeather(input.value)
}   )