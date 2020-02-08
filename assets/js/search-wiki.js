
// Global variables
var pageId;
var pageTitle;

function searchWiki(userLoc) {

    var url = "https://en.wikipedia.org/w/api.php";

    // Prepare google coordinates for geosearch params
    var tfUserLoc = `${userLoc.lat}|${userLoc.lng}`;

    var params = {
        action: "query",
        list: "geosearch",
        gscoord: tfUserLoc,
        gsradius: "10000",
        gslimit: "26",
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (response) {
            var pages = response.query.geosearch;
            // Clear out arrays used for markers
            wikiLocations = [];
            wikiTitles = [];
            for (var place in pages) {
                var latLocW = pages[place].lat;
                var lngLocW = pages[place].lon;
                var locObjW = { lat: latLocW, lng: lngLocW };
                wikiLocations.push(locObjW);
                wikiTitles.push(pages[place].title);
            }
            pageId = pages[0].pageid;
            pageTitle = pages[0].title;

            // Replace spaces with underscores for URL query
            pageTitleU = pageTitle.replace(/ /g, "_");

            // Insert closest wikipedia entry location to page contents
            document.getElementById("selected-loc").innerHTML = pageTitle;
        })
        .then(getSummary)
        .then(parseContents)
        .catch(function (error) { console.log(error); });
}
