function initMap() {
    console.log("initMap function is called!"); // Check if the function is running

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.4, lng: -2.983 }, // Coordinates for Liverpool
        zoom: 15,
    });
}

window.initMap = initMap;
