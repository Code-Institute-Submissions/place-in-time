function parseContents() {
    /*
    parse.js

    MediaWiki API Demos
    Demo of `Parse` module: Parse content of a page

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php";

var params = {
    action: "parse",
    page: pageTitleU,
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
// console.log(url);
fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        // console.log("Page title before parse: " + pageTitle);
        console.log("URL before parsing: " + url);
        console.log(response.parse.text["*"]);
    })
    .catch(function(error){console.log(error);});
}