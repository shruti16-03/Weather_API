const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const weatherDesc = document.getElementById('weatherDesc');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const longitude = document.getElementById('longitude');
const lattitude = document.getElementById('lattitude');


async function checkWeather(city) {
    try {
        const apiKey = '3cd4cfffe5085d32d29293da02653a53'; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

       
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            cityName.textContent = 'City not found!';
            weatherDesc.textContent = '';
            temperature.textContent = '';
            humidity.textContent = '';
            return;
        }

       
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        weatherDesc.textContent = `${data.weather[0].description}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        lattitude.textContent = `Lattitude: ${data.coord.lat}`
        longitude.textContent =`Longitude: ${data.coord.lon}`

    } catch (error) {
        cityName.textContent = 'Error fetching weather data';
        weatherDesc.textContent = '';
        temperature.textContent = '';
        humidity.textContent = '';
    }
}


searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        checkWeather(city);
    }
});
