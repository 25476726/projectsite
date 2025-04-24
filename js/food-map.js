// Create map centered on Liverpool City Centre (Coordinates for Liverpool)
var map = L.map('map').setView([53.4084, -2.9916], 13); // Liverpool city centre coordinates

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to load restaurants using Overpass API
function loadRestaurants() {
    // Overpass API query for restaurants in Liverpool City Centre
    var query = `
        [out:json];
        area["name"="Liverpool"]->.searchArea;
        (
          node["amenity"="restaurant"](area.searchArea);
          way["amenity"="restaurant"](area.searchArea);
          relation["amenity"="restaurant"](area.searchArea);
        );
        out body;
    `;
    
    var url = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.elements.forEach(function(element) {
                // Extract coordinates for each restaurant
                var lat = element.lat || element.center.lat;
                var lon = element.lon || element.center.lon;

                // Add marker for each restaurant
                L.marker([lat, lon]).addTo(map)
                    .bindPopup(`<b>${element.tags.name || "Unnamed Restaurant"}</b><br>Type: ${element.tags['amenity'] || 'Restaurant'}`);
            });
        })
        .catch(err => console.error("Error fetching restaurant data:", err));
}

// Load restaurants after map is initialized
loadRestaurants();
