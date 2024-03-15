import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../map/map.scss';


const TOKEN = process.env.REACT_APP_TOKEN

mapboxgl.accessToken = TOKEN;

const App = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(22);
    const [lat, setLat] = useState(-56);
    const [zoom, setZoom] = useState(1.5);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/wgx-94/cltlqixjv009q01ph5id53rz8',
        center: [lng, lat],
        zoom: zoom
        });
        map.current.on('style.load', () => {
            map.current.setFog({
              color: 'rgb(186, 210, 235)', // Lower atmosphere
              'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
              'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
              'space-color': 'rgb(11, 11, 25)', // Background color
              'star-intensity': 0.0 // Background star brightness (default 0.35 at low zoooms )
            });

            map.current.addSource('mapbox-dem', {
                'type': 'raster-dem',
                'url': 'mapbox://mapbox.terrain-rgb',
                'tileSize': 512,
                'maxzoom': 14
            });
            map.current.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
        });

        

        const monument = [-73.2050, -46.4567];

        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
            "Site de construction d'une usine de chasseurs, intercepteurs et bombardiers TIE en collaboration avec Sienar Fleet Systems."
        );
    
        // create DOM element for the marker
        const el = document.createElement('div');
        el.id = 'marker';
    
        // create the marker
        new mapboxgl.Marker(el)
            .setLngLat(monument)
            .setPopup(popup) // sets a popup on this marker
            .addTo(map.current);
        
            const start = {
                center: [80, 36],
                zoom: 1,
                pitch: 0,
                bearing: 0
            };
            const end = {
                center: [-73.2050, -46.4567],
                zoom: 12.5,
                bearing: 130,
                pitch: 75
            };
    
            let isAtStart = true;
    
            document.getElementById('marker').addEventListener('click', () => {
            // depending on whether we're currently at point a or b,
            // aim for point a or b
            const target = isAtStart ? end : start;
            isAtStart = !isAtStart;
    
            map.current.flyTo({
                ...target, // Fly to the selected target
                duration: 20000, // Animate over 12 seconds
                essential: true // This animation is considered essential with
                //respect to prefers-reduced-motion
                });
            });
    

        

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
            });

            //map.current.addControl(new mapboxgl.NavigationControl());

            const secondsPerRevolution = 240;
            // Above zoom level 5, do not rotate.
            const maxSpinZoom = 5;
            // Rotate at intermediate speeds between zoom levels 3 and 5.
            const slowSpinZoom = 3;
            let userInteracting = false;
            const spinEnabled = true;
        
            function spinGlobe() {
                const zoom = map.current.getZoom();
                if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
                    let distancePerSecond = 360 / secondsPerRevolution;
                    if (zoom > slowSpinZoom) {
                        // Slow spinning at higher zooms
                        const zoomDif =
                            (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                        distancePerSecond *= zoomDif;
                    }
                    const center = map.current.getCenter();
                    center.lng -= distancePerSecond;
                    // Smoothly animate the map over one second.
                    // When this animation is complete, it calls a 'moveend' event.
                    map.current.easeTo({ center, duration: 1000, easing: (n) => n });
                }
            }
            map.current.on('mousedown', () => {
                userInteracting = true;
            });
            map.current.on('dragstart', () => {
                userInteracting = true;
            });
        
            // When animation is complete, start spinning if there is no ongoing interaction
            map.current.on('moveend', () => {
                spinGlobe();
            });
            spinGlobe();
        
    });

    

    return (
        <div>
            
            <div ref={mapContainer} className="map-container" />
        </div>
      );
}

export default App

/*
<div className="sidebar">
    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div> 
*/