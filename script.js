const apiKey = "484da80225358ce8ccd1f1d0e9d9b12a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
const searchBar = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherImg = document.querySelector('.weather-img');

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.wind.speed + " km/h ";

  if(data.weather[0].main == "Clouds"){
      weatherImg.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Rain"){
      weatherImg.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Clear"){
      weatherImg.src = "images/clear.png";
  }
  else if(data.weather[0].main == "Drizzle"){
      weatherImg.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
      weatherImg.src = "images/mist.png";
  }

} 

searchBtn.addEventListener("click" , ()=>{
  checkWeather(searchBar.value);
})