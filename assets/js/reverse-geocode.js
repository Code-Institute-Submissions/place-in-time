document.getElementById("get-locat-btn").onclick = function () {

    /* Initialise Reverse Geocode API Client */
    var reverseGeocoder=new BDCReverseGeocode();
    
    /* Get the current user's location information, based on the coordinates provided by their browser */
    /* Fetching coordinates requires the user to be accessing your page over HTTPS and to allow the location prompt. */
    reverseGeocoder.getClientLocation(function(result) {
        // console.log(result);
    });

    /* Get the administrative location information using a set of known coordinates */
    reverseGeocoder.getClientLocation({
        latitude: latLoc4,
        longitude: lngLoc4,
    },function(result) {
        sigPlace = result.locality;
        console.log(result);
        console.log(sigPlace);
    });

    console.log(lngLoc4);

    /* You can also set the locality language as needed 
    reverseGeocoder.localityLanguage='es'; */

    /* Request the current user's coordinates (requires HTTPS and acceptance of prompt) */
    reverseGeocoder.getClientCoordinates(function(result) {
        // console.log(result);
    });
}