// function initMap() {

//     var map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 3,
//         center: {
//             lat: 46.619261,
//             lng: -33.134766
//         }
//     });

//     var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     var locations = [
//         { lat: 40.785091, lng: -73.968285 },
//         { lat: 41.084045, lng: -73.874245 },
//         { lat: 40.754932, lng: -73.984016 }
//     ];

//     var markers = locations.map(function (location, i) {
//         return new google.maps.Marker({
//             position: location,
//             label: labels[i % labels.length]
//         });
//     });

//     var markerCluster = new MarkerClusterer(map, markers,
//         { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

// }

// Declare global variables
var latLoc4;
var lngLoc4;

// Generate some locations for testing
var locations = [
    { lat: 52.017949, lng: -9.493964 },
    { lat: 45.868655, lng: 6.185286 },
    { lat: -4.439318, lng: 15.258601 },
    { lat: 42.972104, lng: -71.696054 },
    { lat: 43.146907, lng: 131.996560 },
    { lat: 4.906095, lng: -52.304080 },
    { lat: -32.167691, lng: 116.031997 },
    { lat: 31.613139, lng: 130.955781 },
    { lat: 1.339617, lng: 103.851566 },
    { lat: 40.819634, lng: 14.364958 },
    { lat: 34.198795, lng: -118.819758}
];

// Select random location from array
var randLoc = locations[Math.floor(Math.random() * locations.length)];

// Truncate coordinates for reverse geocode useage
latLoc4 = parseFloat(randLoc.lat.toFixed(4));
lngLoc4 = parseFloat(randLoc.lng.toFixed(4));
console.log(latLoc4);

function initMap() {
    // Render map centered at random location from test array 
    var map = new google.maps.Map(document.getElementById("map"), {
        center: randLoc,
        zoom: 16
    });
}