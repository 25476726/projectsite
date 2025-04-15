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

            // Weather condition handling logic
            const condition = weather.conditions.toLowerCase();
            let vibes = [];

            if (condition.includes("rain")) {
                vibes.push("Bit of a wet one out there, so unless you fancy soggy socks, pack a brolly.");
            }
            if (condition.includes("cloud")) {
                vibes.push("Grey skies above – classic moody Merseyside vibes.");
            }
            if (condition.includes("sun")) {
                vibes.push("Sun’s got his hat on, but don’t be fooled – it might still be brass monkeys.");
            }
            if (condition.includes("snow")) {
                vibes.push("It’s proper Narnia out there – watch your step, and maybe dust off them wellies.");
            }
            if (condition.includes("wind")) {
                vibes.push("Blowing a gale, so hold onto your hat – or better yet, leave it at home.");
            }
            if (condition.includes("fog") || condition.includes("mist")) {
                vibes.push("Like walking through pea soup – visibility’s low, so take it steady.");
            }

            // Fallback if no recognised conditions found
            if (vibes.length === 0) {
                vibes.push("Weather’s doing its own thing today – standard Liverpool mystery.");
            }

            // Combine vibes into a natural-sounding sentence
            const vibeDescription = vibes.join(", and ");

            // Full weather report text
            const elements = [
                `Alright kidda, here’s the lowdown for the weather today the ${weather.datetime}: conditions are lookin’ like ${weather.conditions}, so take from that what you will. ${vibeDescription}. You’re lookin’ at a max of ${weather.tempmax}°C and a low of ${weather.tempmin}°C, with the current temperature sittin’ around ${weather.temp}°C – though it’s feelin’ more like ${weather.feelslike}°C. Humidity’s at ${weather.humidity}%, and there’s been about ${weather.precip}mm of rain with a ${weather.precipprob}% chance of more on the way. Wind’s clockin’ in at around ${weather.windspeed}mph. The sun made its entrance at ${weather.sunrise}AM and it’ll leg it again at around ${weather.sunset}PM.`,
            ];

            // Display weather information
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
