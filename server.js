const express = require("express");
const cors = require("cors");
import fetch from "node-fetch";


const app = express();
const PORT = process.env.PORT || 5000;  // Use Render's assigned port

// ✅ Update CORS to allow Netlify
const corsOptions = {
    origin: ["https://scouse-liverpool-guide.netlify.app"], // Change this to your actual Netlify frontend URL
    methods: "GET",
    allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));  // Apply updated CORS settings

app.get("/weather", async (req, res) => {
    try {
        const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Liverpool?unitGroup=uk&key=X4XHV88EHDFM4JG779XF927MQ&contentType=json&include=days&elements=datetime,tempmax,tempmin,temp,feelslike,humidity,precip,precipprob,preciptype,windspeed,sunrise,sunset,conditions,icon";
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error fetching weather data" });
    }
});

// ✅ Ensure Render assigns the correct port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
