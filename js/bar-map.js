function initMap() {
    const liverpool = { lat: 53.4, lng: -2.983 }; // Liverpool coordinates

    const map = new google.maps.Map(document.getElementById("map"), {
        center: liverpool,
        zoom: 15,
    });

    const service = new google.maps.places.PlacesService(map);

    const request = {
        location: new google.maps.LatLng(liverpool.lat, liverpool.lng), // Correctly formatted location
        radius: 2000, // Numeric radius
        type: ["bar"], // Type must be an array of strings
    };

    console.log("Request object before nearbySearch:", request);

    service.nearbySearch(request, function (results, status) {
        // More detailed status logging
        console.log("Nearby Search Status:", status);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log("Results found:", results);
            results.forEach(place => createMarker(place, map)); // Create marker for each result
        } else {
            console.error("Nearby Search failed. Status: " + status);
            if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                console.log("No places found for the given location and radius.");
            } else if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                console.log("Query limit exceeded. Try again later.");
            } else if (status === google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
                console.log("Request denied. Check your API key permissions.");
            } else if (status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
                console.log("Invalid request. Check the parameters you are sending.");
            }
        }
    });
}

// Function to create markers on the map for each place
function createMarker(place, map) {
    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
        title: place.name,
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `<strong>${place.name}</strong><br>${place.vicinity}`,
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });

    console.log("Marker added:", place.name, place.geometry.location);
}

// Attach the initMap function to the window object
window.initMap = initMap;
