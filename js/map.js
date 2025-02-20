function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.4, lng: -2.983 }, // Liverpool coordinates
        zoom: 14,
    });

//     const service = new google.maps.places.PlacesService(map);

//     const request = {
//         location: { lat: 53.4, lng: -2.983 }, // Liverpool coordinates
//         radius: 5000, // Search radius in meters (5 km)
//         type: ['restaurant'], // Search only for restaurants
//     };

//     // Perform the nearby search request
//     service.nearbySearch(request, (results, status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//             console.log("Found " + results.length + " restaurants.");
//             results.forEach((place) => {
//                 const marker = new google.maps.Marker({
//                     map: map,
//                     position: place.geometry.location,
//                     title: place.name,
//                 });

//                 // Add a click event listener to the marker
//                 google.maps.event.addListener(marker, "click", () => {
//                     const infowindow = new google.maps.InfoWindow({
//                         content: `<h3>${place.name}</h3><p>${place.vicinity}</p>`,
//                     });
//                     infowindow.open(map, marker);
//                 });
//             });
//         } else {
//             // Log the exact error and status
//             console.error('Places API error:', status);
//             alert("Failed to load places: " + status);
//         }
//     });
// }

// Ensure that initMap is globally accessible
window.initMap = initMap;
