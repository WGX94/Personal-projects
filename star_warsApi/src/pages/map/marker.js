import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoid2d4LTk0IiwiYSI6ImNscmw0ZWE1YTBpb3MyaXBlb3A5dTh5cXkifQ.O2_PM4e2NtopKu5DOv2MfA';
    const geojson = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Everest',
                    'height': 8849
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [86.925278, 27.988056]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Denali',
                    'height': 6194
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-151.0074, 63.0695]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Aconcagua',
                    'height': 6961
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-70.0112, -32.653197]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Vinson Massif',
                    'height': 4892
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-85.617147, -78.525483]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Kilimanjaro',
                    'height': 5895
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [37.353333, -3.075833]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Elbrus',
                    'height': 5642
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [42.439167, 43.355]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Puncak Jaya',
                    'height': 4884
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [137.158333, -4.078889]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Mauna Kea',
                    'height': 4205
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-155.468056, 19.820667]
                }
            }
        ]
    };

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v11',
        center: [130, 35],
        zoom: 0.75
    });

    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });

    for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        el.className = 'marker';
        const size = marker.properties.height / 100;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;

        // Add a popup displayed on click for each marker
        const popup = new mapboxgl.Popup({ offset: 25 });
        popup.setHTML(
            `<h2>${marker.properties.name}</h2>${marker.properties.height}m<br/>`
        );

        // Add markers to the map.
        new mapboxgl.Marker({
            element: el,
            // Point markers toward the nearest horizon
            rotationAlignment: 'horizon',
            offset: [0, -size / 2]
        })
            .setLngLat(marker.geometry.coordinates)
            .setPopup(popup)
            .addTo(map);
    }