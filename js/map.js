// This function will be called by the Google Maps API once it's loaded
function initMap() {
    console.log("initMap function is called!");  // Log to confirm it's being called

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.4, lng: -2.983 },  // Liverpool coordinates
        zoom: 15,
    });

    // Request for place details by placeId (replace with your actual place ID)
    const request = {
        placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4", // Example Place ID, replace with yours
        fields: ["name", "formatted_address", "place_id", "geometry"],
    };

    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);

    service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            const marker = new google.maps.Marker({
                map,
                position: place.geometry.location,
                title: place.name,
            });

            google.maps.event.addListener(marker, "click", () => {
                const content = document.createElement("div");
                const nameElement = document.createElement("h2");
                nameElement.textContent = place.name;
                content.appendChild(nameElement);

                const placeAddressElement = document.createElement("p");
                placeAddressElement.textContent = place.formatted_address;
                content.appendChild(placeAddressElement);

                infowindow.setContent(content);
                infowindow.setOptions({ ariaLabel: place.name });
                infowindow.open(map, marker);
            });
        } else {
            console.error("Place details request failed with status: " + status);
        }
    });
}

// Make sure initMap is globally accessible
window.initMap = initMap;
