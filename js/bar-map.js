var map = L.map('map').setView([53.4084, -2.9916], 13); // Liverpool city centre coordinates

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Function to load pubs and bars using Overpass API
        function loadPubsAndBars() {
            // Overpass API query for pubs and bars in Liverpool City Centre
            var query = `
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
                out body;
            `;
            
            var url = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    data.elements.forEach(function(element) {
                        // Extract coordinates for each pub or bar
                        var lat = element.lat || element.center.lat;
                        var lon = element.lon || element.center.lon;

                        // Add marker for each pub/bar
                        L.marker([lat, lon]).addTo(map)
                            .bindPopup(`<b>${element.tags.name || "Unnamed Pub/Bar"}</b><br>Type: ${element.tags['amenity'] || 'Unknown'}`);
                    });
                })
                .catch(err => console.error("Error fetching pub/bar data:", err));
        }

        // Load pubs and bars after map is initialized
        loadPubsAndBars();