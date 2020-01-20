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
var sigPlace;

// Generate some locations for testing
var locations = [
    { lat: 48.87276, lng: 2.389391 },
    { lat: 51.511629, lng: -0.082095 },
    { lat: 48.137836, lng: 11.579836 },
    { lat: 41.922030, lng: 12.483458 },
    { lat: 35.697685, lng: 139.711712 },
    { lat: 34.090763, lng: -118.339816 },
    { lat: 40.748238, lng: -73.995705 },
    { lat: 4.710957, lng: -74.072077 },
    { lat: -33.917679, lng: 18.420190 },
    { lat: 55.674432, lng: 12.573062 },
    { lat: 59.933969, lng: 30.338195 }
];

// Select random location from array
var randLoc = locations[Math.floor(Math.random() * locations.length)];

// Truncate coordinates for reverse geocode useage
latLoc4 = parseFloat(randLoc.lat.toFixed(4));
lngLoc4 = parseFloat(randLoc.lng.toFixed(4));
console.log(latLoc4);


// Render map centered at random location from test array 
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: randLoc,
        zoom: 16
    });
}