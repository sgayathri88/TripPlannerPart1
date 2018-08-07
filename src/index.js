
const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken = 'pk.eyJ1IjoicmVkbWFnZSIsImEiOiJjaWY4aHhzZGwxeTF1cnlsenJ4N2l6dDBwIn0.sPUU5J98mvbxORfW4GrbbQ'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
})

const markerDomElNYC = document.createElement('div')
markerDomElNYC.style.height = '39px'
markerDomElNYC.style.width = '32px'
markerDomElNYC.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'

const markerDomElChi = document.createElement('div')
markerDomElChi.style.height = '39px'
markerDomElChi.style.width = '32px'
markerDomElChi.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'

const chicago = [-87.641, 41.895]
const nyc = [-74.009151, 40.705086]

new mapboxgl.Marker(markerDomElChi).setLngLat(chicago).addTo(map)
new mapboxgl.Marker(markerDomElNYC).setLngLat(nyc).addTo(map)

