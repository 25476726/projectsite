var map = L.map('map').setView([53.4084, -2.9916], 10); //liverpool city centre coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    className: 'scouse-map-tiles'
}).addTo(map);

var restaurantIcon = L.divIcon({
    className: 'material-icons',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -28],
    html: '<span class="material-icons" style="color: black;">restaurant</span>', 
    className: 'restaurant-icon'
});

var userIcon = L.divIcon({
    className: 'material-icons',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    html: '<span class="material-icons" style="color: black;">my_location</span>', 
    className: 'user-icon'
});

function loadRestaurants() {
    const query = `
        [out:json];
        area["name"="Liverpool"]->.searchArea;
        (
          node["amenity"="restaurant"](area.searchArea);
          way["amenity"="restaurant"](area.searchArea);
          relation["amenity"="restaurant"](area.searchArea);
        );
        out center;
    `;

    const url = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.elements.forEach(function (element) {
                const lat = element.lat || element.center?.lat;
                const lon = element.lon || element.center?.lon;

                if (lat && lon) {
                    L.marker([lat, lon], { icon: restaurantIcon }).addTo(map)
                        .bindPopup(`
                            <div style="font-family: sans-serif;">
                                <strong>${element.tags.name || "Unnamed Restaurant"}</strong><br>
                                Cuisine: ${element.tags.cuisine || "Various"}<br>
                            </div>
                        `);
                }
            });
        })
        .catch(err => console.error("Error fetching restaurant data:", err));
}

function showUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;

                L.marker([userLat, userLon], { icon: userIcon }).addTo(map)
                    .bindPopup("<b>You are here, kidda!</b>").openPopup();

                map.setView([userLat, userLon], 14);
            },
            function (error) {
                console.warn("Geolocation error:", error.message);
            }
        );
    } else {
        console.warn("Geolocation not supported by this browser.");
    }
}

loadRestaurants();
showUserLocation();
