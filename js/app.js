document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = 'https://projectsite-1-t9yo.onrender.com/weather';
    const outputElement = document.getElementById('weather-output');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            outputElement.innerHTML = "";
            const weather = data.days[0];

            const elements = [
                `📅 Date: ${weather.datetime}`,
                `🌡️ Max Temp: ${weather.tempmax}°C`,
                `🌡️ Min Temp: ${weather.tempmin}°C`,
                `🌡️ Current Temp: ${weather.temp}°C`,
                `🤒 Feels Like: ${weather.feelslike}°C`,
                `💧 Humidity: ${weather.humidity}%`,
                `☔ Precipitation: ${weather.precip} mm`,
                `🌦️ Precipitation Probability: ${weather.precipprob}%`,
                `💨 Wind Speed: ${weather.windspeed} mph`,
                `🌅 Sunrise: ${weather.sunrise} AM`,
                `🌇 Sunset: ${weather.sunset} PM`,
                `🌤️ Conditions: ${weather.conditions}`
            ];

            elements.forEach(text => {
                const p = document.createElement("p");
                p.textContent = text;
                outputElement.appendChild(p);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            outputElement.innerHTML = `<p style="color: red;">Error fetching weather data. Try again in 30-60 seconds</p>`;
        });
});
