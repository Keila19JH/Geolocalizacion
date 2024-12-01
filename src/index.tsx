import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoia2VpbGEtMTkiLCJhIjoiY20wemRva3Z2MDU5MDJsb2xtNGJpMmRwdiJ9.I8Xw_-or2rBYKIyP4Lr7aQ';


if( !navigator.geolocation ){
  alert('No se encuentra tu geolocation, fuera del alcance');
  throw new Error('No se encuentra tu geolocalización, fuera del alcance')
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);

