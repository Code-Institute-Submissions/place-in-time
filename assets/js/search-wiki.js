/*
    geosearch.js

    MediaWiki API Demos
    Demo of `Geosearch` module: Search for wiki pages nearby

    MIT License
*/

// Prepare google coordinates for wikipedia
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
        document.getElementById("selected-loc").innerHTML = pages[0].title;
        for (var place in pages) {
            console.log(pages[place].title);
        }
    })
    .catch(function(error){console.log(error);});