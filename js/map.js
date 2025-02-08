// Define the initMap function
function initMap() {
    console.log("initMap function is called!");  // Confirm it's being triggered

    // Initialize the map centered on Liverpool
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.4, lng: -2.983 }, // Liverpool coordinates
        zoom: 15,
    });

    // Create a request to get details of a specific place by placeId
    const request = {
        placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4", // Example place ID, replace it with your own
        fields: ["name", "formatted_address", "place_id", "geometry"], // Specify the fields you want
    };

    // Initialize the InfoWindow to show place details
    const infowindow = new google.maps.InfoWindow();

    // Create a PlacesService object to make requests
    const service = new google.maps.places.PlacesService(map);

    // Fetch the place details
    service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place && place.geometry && place.geometry.location) {
            // Create a marker for the place
            const marker = new google.maps.Marker({
                map,
                position: place.geometry.location,
                title: place.name,  // Title will be the place's name
            });

            // Add a click event to the marker to display the InfoWindow
            google.maps.event.addListener(marker, "click", () => {
                const content = document.createElement("div");

                // Add place name to content
                const nameElement = document.createElement("h2");
                nameElement.textContent = place.name;
                content.appendChild(nameElement);

                // Add place address to content
                const placeAddressElement = document.createElement("p");
                placeAddressElement.textContent = place.formatted_address;
                content.appendChild(placeAddressElement);

                // Set the content of the InfoWindow
                infowindow.setContent(content);
                infowindow.setOptions({ ariaLabel: place.name });

                // Open the InfoWindow on the marker
                infowindow.open(map, marker);
            });
        } else {
            console.error("Place details request failed with status: " + status);
        }
    });
}

// Make sure initMap is globally accessible
window.initMap = initMap;  // This attaches initMap to the global window object
