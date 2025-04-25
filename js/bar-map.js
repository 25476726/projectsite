var map = L.map('map').setView([53.4084, -2.9916], 10); // Liverpool city centre coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    className: 'scouse-map-tiles'
}).addTo(map);

var pubIcon = L.divIcon({
    className: 'material-icons',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -28],
    html: '<span class="material-icons" style="color: black;">local_bar</span>', 
    className: 'pub-icon'
});

var userIcon = L.divIcon({
    className: 'material-icons',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    html: '<span class="material-icons" style="color: black;">my_location</span>', 
    className: 'user-icon'
});

function loadPubsAndBars() {
    const query = `
        [out:json];
        area["name"="Liverpool"]->.searchArea;
        (
          node["amenity"="pub"](area.searchArea);
          way["amenity"="pub"](area.searchArea);
          relation["amenity"="pub"](area.searchArea);
          node["amenity"="bar"](area.searchArea);
          way["amenity"="bar"](area.searchArea);
          relation["amenity"="bar"](area.searchArea);
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
                    L.marker([lat, lon], { icon: pubIcon }).addTo(map)
                        .bindPopup(`
                            <div style="font-family: sans-serif;">
                                <strong>${element.tags.name || "Unnamed Pub/Bar"}</strong><br>
                                Type: ${element.tags['amenity'] || "Unknown"}<br>
                            </div>
                        `);
                }
            });
        })
        .catch(err => console.error("Error fetching pub/bar data:", err));
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

// Run both loaders
loadPubsAndBars();
showUserLocation();
