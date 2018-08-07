const mapboxgl = require('mapbox-gl');

const icons = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

const createMarker = (type, coords) => {
  const markerDomEl = document.createElement('div')

  markerDomEl.style.height = '39px'
  markerDomEl.style.width = '32px'
  markerDomEl.style.backgroundImage = `url(${icons[type]})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords)
};

module.exports = createMarker;
