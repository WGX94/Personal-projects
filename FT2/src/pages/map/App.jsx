import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import dataSet1 from '../../data/dataset1.json'
import { Map } from 'react-map-gl';
import DeckGL, {GeoJsonLayer} from 'deck.gl';
import * as d3 from 'd3'; // Importez d3
import { ScatterplotLayer } from '@deck.gl/layers';

mapboxgl.accessToken = '';

function aggregateDataByRegion(data) {
  const geoJsonFeatures = data.map(entry => {
    const latitude = 48.8/* définissez la latitude pour cet élément */;
    const longitude = 2.28/* définissez la longitude pour cet élément */;

    return {
      type: 'Feature',
      properties: {
        region: entry['Région'],
        totalPax: entry['Pax'],
      },
      geometry: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
    };
  });

  return {
    type: 'FeatureCollection',
    features: geoJsonFeatures,
  };
}

export default function App() {
  const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(3.8504);
const [lat, setLat] = useState(46.5961);
const [zoom, setZoom] = useState(4.4);
 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/wgx-94/clrns6o82006h01pefio3dda4/draft',
center: [lng, lat],
zoom: zoom
});
 
map.current.on('move', () => {
setLng(map.current.getCenter().lng.toFixed(4));
setLat(map.current.getCenter().lat.toFixed(4));
setZoom(map.current.getZoom().toFixed(2));
});
});

const onClick = info => {
    if (info.object) {
      alert(`Region: ${info.object.properties.region}\nTotal Pax: ${info.object.properties.totalPax}`);
    }
  };

  const geoData = aggregateDataByRegion(dataSet1);

  const layers = [
    /*
    new GeoJsonLayer({
      id: 'PaxByRegion',
      data: geoData,
      filled: true,
      pointRadiusMinPixels: 5,
      pointRadiusScale: 2000,
      getPointRadius: f => f.properties.totalPax / 10,
      getFillColor: [86, 144, 58, 250],
      pickable: true,
      autoHighlight: true,
      onClick,
    }),
    */
    new ScatterplotLayer({
      id: 'PaxPoints',
      data: geoData.features,
      getPosition: d => d.geometry.coordinates,
      getRadius: d => d.properties.totalPax / 10,
      getFillColor: [255, 0, 0, 200],
      pickable: true,
      onClick,
    }),
  ];

  return (
    <div>
        <div className="sidebar"
        controller="true"
        layers={layers}>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
    </div>
    );
}


