import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS to allow Netlify frontend
const corsOptions = {
    origin: ["https://scouse-liverpool-guide.netlify.app"], 
    methods: "GET",
    allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

app.get("/weather", async (req, res) => {
    try {
        const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Liverpool?unitGroup=uk&key=X4XHV88EHDFM4JG779XF927MQ&contentType=json&include=days&elements=datetime,tempmax,tempmin,temp,feelslike,humidity,precip,precipprob,preciptype,windspeed,visibility,sunrise,sunset,conditions,icon";
        
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

// ✅ Ensure Render assigns the correct port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
