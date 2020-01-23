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
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
    // console.log(url);

    var docHistoryHeader = document.getElementById("history-header");
    var docHistoryPars = document.getElementById("history-pars");

    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (response) {
            // console.log("Page title before parse: " + pageTitle);
            // console.log("URL before parsing: " + url);
            var parsedText = response.parse.text["*"];
            // console.log("Type of parsedText: " + typeof(parsedText));

            // Convert text to temporary HTML element for ease of traversing
            var tempEl = document.createElement("tempel");
            // tempEl.innerHTML = "";
            tempEl.innerHTML = parsedText;
            // console.log("Type of tempEl: " + typeof(tempEl));
            // console.log(tempEl);
            // docHistoryHeader.innerHTML = "";
            // docHistoryPars.innerHTML = "";

            // Insert contents of temporary element to DOM
            var docHiddenContent = document.getElementById("hidden-content");
            docHiddenContent.appendChild(tempEl);
            var hiddenHistHeading = document.getElementById("History");
            // console.log(historyHeading);



            if (!hiddenHistHeading) {
                docHistoryHeader.innerHTML = "Extra historical information is not available for this location.";
                docHistoryPars.innerHTML = "";
            }

            else if (hiddenHistHeading) {
                docHistoryHeader.innerHTML = "History: ";
                var histParObj = $("#History").closest("h2").nextUntil("h2", "p");
                var parUnlink = histParObj.find("a").replaceWith(function () { return this.childNodes; });
                console.log("History Paragraph Object: " + histParObj.html());
                docHistoryPars.innerHTML = parUnlink.html();
                // document.getElementById("history-pars").innerHTML = firstHPar.html();
                docHistoryPars.innerHTML = docHistoryPars.innerHTML.replace(/<sup\b[^>]*>(.*?)<\/sup>/gi, "");
                // document.getElementById("history-pars").innerHTML = document.getElementById("history-pars").innerHTML.replace(/<sup\b[^>]*>(.*?)<\/sup>/gi, "");
            }

            console.log("Contents of history pars: " + docHistoryPars.innerHTML);

            // console.log("Contents of #History: " + historyHeading.innerHTML);

            // Target first paragraph of history section

            // !historyHeading ? firstHPar = firstHPar : 

            // Remove anchor tags and display embedded links as text only

            // Remove citation markers from resulting text


            // console.log(parsedText);
            // var firstPar = parsedJSON.getElementByTagName('p')[0].innerHTML;
            // console.log(firstPar);
        })
        .catch(function (error) { console.log(error); });
}