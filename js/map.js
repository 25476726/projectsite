function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.4, lng: -2.983 }, // Liverpool Coordinates
        zoom: 15,
    });

    // Add more map functionality here if needed, like markers or places.
}

// Make sure initMap is globally accessible
window.initMap = initMap;
