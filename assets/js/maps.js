
// Global variables
var latLoc4;
var lngLoc4;
var sigPlace;
var infoWindow;
var pos;
var wikiLocations = []; // Initialise array for closest coordinates with wikipedia pages
var wikiTitles = []; // Initialise array for markers titles
var markers = []; // Initialise array for map markers

// Render map centered at users current location 
function initMap() {

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13
    });

    infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent("You are near here");
            infoWindow.open(map);
            map.setCenter(pos);
            searchWiki(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }

    setMarkers();

    function setMarkers() {

        // Add random offset to separate overlapping markers
        var nudgeLocs = wikiLocations.map(loc => (
            { lat: loc.lat += (Math.random() / 10000), lng: loc.lng += (Math.random() / 10000) }
            ));

        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        markers = [];

        markers = nudgeLocs.map(function (location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
                title: wikiTitles[i]
            });
        });

        var markerCluster = new MarkerClusterer(map, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

        markers.forEach(function (marker) {
            marker.addListener("click", function () {
                clickLat = marker.getPosition().lat();
                clickLng = marker.getPosition().lng();
                clickLoc = { lat: clickLat, lng: clickLng };
                searchWiki(clickLoc);
            });
        });
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        "Error: The Geolocation service failed." :
        "Error: The browser doesn\'t support geolocation.");
    infoWindow.open(map);
}
