//This script is for a proxy server for my Weather API.
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = 5000;

app.use(cors()); 

app.get("/weather", async (req, res) => {
    try {
        const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Liverpool?unitGroup=uk&key=X4XHV88EHDFM4JG779XF927MQ&contentType=json&include=days&elements=datetime,tempmax,tempmin,temp,feelslike,humidity,precip,precipprob,preciptype,windspeed,sunrise,sunset,conditions,icon";
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching weather data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});