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
        var parsedText = response.parse.text["*"];
        console.log("Type of parsedText: " + typeof(parsedText));

        // Convert text to temporary HTML element for ease of traversing
        var tempEl = document.createElement("tempel");
        tempEl.innerHTML = parsedText;
        // console.log("Type of tempEl: " + typeof(tempEl));
        console.log(tempEl);

        // Insert contents of temporary element to DOM
        document.getElementById("hidden-content").appendChild(tempEl);
        var historyHeading = document.getElementById("History");
        !historyHeading ? document.getElementById("history-header").innerHTML="Extra historical information is not available for this location." : historyHeading.innerHTML="";
        console.log("Contents of #History: " + historyHeading.innerHTML);

        // Target first paragraph of history section
        var firstHPar = $("#History").closest("h2").nextUntil("h2", "p");

        // Remove anchor tags and display links as text only
        firstHPar.find("a").replaceWith(function() { return this.childNodes; });
        console.log("Contents of first History paragraph: " + firstHPar);
        document.getElementById("history-pars").innerHTML = firstHPar.html();

        // Remove citation markers from resulting text
        document.body.innerHTML = document.body.innerHTML.replace(/<sup\b[^>]*>(.*?)<\/sup>/gi, "");

        // console.log(parsedText);
        // var firstPar = parsedJSON.getElementByTagName('p')[0].innerHTML;
        // console.log(firstPar);
    })
    .catch(function(error){console.log(error);});
}