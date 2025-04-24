        // Create map centered on Liverpool City Centre (Coordinates for Liverpool)
        var map = L.map('map').setView([53.4084, -2.9916], 13); // Liverpool city centre coordinates

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Function to load hotels using Overpass API
        function loadHotels() {
            // Overpass API query for hotels in Liverpool City Centre
            var query = `
                [out:json];
                area["name"="Liverpool"]->.searchArea;
                (
                  node["tourism"="hotel"](area.searchArea);
                  way["tourism"="hotel"](area.searchArea);
                  relation["tourism"="hotel"](area.searchArea);
                );
                out body;
            `;
            
            var url = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    data.elements.forEach(function(element) {
                        // Extract coordinates for each hotel
                        var lat = element.lat || element.center.lat;
                        var lon = element.lon || element.center.lon;

                        // Add marker for each hotel
                        L.marker([lat, lon]).addTo(map)
                            .bindPopup(`<b>${element.tags.name || "Unnamed Hotel"}</b><br>Hotel Type: ${element.tags['tourism'] || 'Unknown'}`);
                    });
                })
                .catch(err => console.error("Error fetching hotel data:", err));
        }

        // Load hotels after map is initialized
        loadHotels();