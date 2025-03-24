function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.4, lng: -2.983 }, // Liverpool coordinates
        zoom: 15,
    });
}
window.initMap = initMap;
