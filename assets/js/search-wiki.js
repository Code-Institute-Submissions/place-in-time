/*
    geosearch.js

    MediaWiki API Demos
    Demo of `Geosearch` module: Search for wiki pages nearby

    MIT License
*/

var pageId;
var pageTitle;

// Prepare google coordinates to fit geosearch params
var gscoordLabel = `${randLoc.lat}0|${randLoc.lng}0`;

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    list: "geosearch",
    // gscoord: "37.7891838|-122.4033522",
    gscoord: gscoordLabel,
    gsradius: "10000",
    gslimit: "10",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.geosearch;
        for (var place in pages) {
            console.log(pages[place].title);
        }
        pageId = pages[0].pageid;
        pageTitle = pages[0].title;

        // Replace spaces with underscores for URL query
        pageTitleU = pageTitle.replace(/ /g,"_");

        // Insert closest wikipedia entry location to page contents
        document.getElementById("selected-loc").innerHTML = pageTitle;

        // console.log("Page Id of closest entry: " + pageId);
        console.log("Title of current location: " + pageTitleU);
    })
    // Call parseContents after getting name of wikipedia page
    .then(parseContents)
    .catch(function(error){console.log(error);});

