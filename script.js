const inputBox = document.querySelector('#input');
const searchBtn = document.querySelector('#btn');
const weatherImg = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');
const locationNotFound = document.querySelector('.location-not-found');
const weatherBody = document.querySelector('.weather-body');

searchBtn.addEventListener('click' , ()=>{
    checkWeather(input.value);
})

async function checkWeather(city){
    const apiKey = "c6aa20fa0c961ce4e50a6729e6705b7c"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}` ; 

    const weatherData = await fetch(`${url}`).then(response => response.json());

    if(weatherData.cod=== `404`){
        locationNotFound.style.display="flex";
        weatherBody.style.display="none";
        return;
    }

    weatherBody.style.display="flex";
    locationNotFound.style.display="none";
    temp.innerHTML = `${Math.round(weatherData.main.temp-273.15)}&deg;C`;
    desc.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${weatherData.wind.speed}Km/H`;

    switch(weatherData.weather[0].main){
        case 'Clouds':
            weatherImg.src = "cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "clear.png";
            break;    
        case 'Rain':
            weatherImg.src = "rain.png";
            break; 
        case 'Mist':
            weatherImg.src = "mist.png";
            break;
        case 'Snow':
            weatherImg.src = "snow.png";
            break;        
    }


}
