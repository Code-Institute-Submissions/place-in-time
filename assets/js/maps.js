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

var latLoc4;
var lngLoc4;

function initMap() {
    
    // Generate some locations for testing
    var locations = [
        { lat: 52.017949, lng:  -9.493964 },
        { lat: 45.868655, lng: 6.185286 },
        { lat: -4.439318, lng: 15.258601 },
        { lat: 42.972104, lng: -71.696054},
        { lat: 43.146907,lng: 131.996560}
     ];

    // Select random location from array
    var location = locations[Math.floor(Math.random() * locations.length)];
    latLoc4 = parseFloat(location.lat.toFixed(4));
    lngLoc4 = parseFloat(location.lng.toFixed(4));
    console.log(latLoc4);

    // Render map centered at location selected above 
    var map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 16
    });
}