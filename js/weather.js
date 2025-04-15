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
                'Alright lad, here is the lowdown for ${weather.datetime}: conditions are lookin like ${weather.conditions}, so take from that what you will. You are lookin at a max of ${weather.tempmax}°C and a low of ${weather.tempmin}°C, with the current temperature sittin around ${weather.temp}°C though it is feelin more like ${weather.feelslike}°C. Humidity is at ${weather.humidity}%, so it might feel a touch muggy, and there has been about ${weather.precip}mm of rain with a ${weather.precipprob}% chance of more on the way. Wind is clockin in at around ${weather.windspeed}mph, enough to ruffle your barnet but not blow you over. The sun made its entrance at ${weather.sunrise} and it will duck out again around ${weather.sunset}. Regardless of what this is chatting, remember to dress for the occasion not the weather, la.'
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
        }); //the weather api shuts down when isnt active, so sometimes errors if it has not been called in a while. this error message makes users aware that the api will work within a minute.
});
