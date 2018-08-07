
const mapboxgl = require('mapbox-gl');
const createMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoicmVkbWFnZSIsImEiOiJjaWY4aHhzZGwxeTF1cnlsenJ4N2l6dDBwIn0.sPUU5J98mvbxORfW4GrbbQ'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
})

const marker = createMarker('activity', [-74.009151, 40.705086]);
marker.addTo(map);
