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
                var histParObj = $("#History").closest("h2").nextUntil("h2", "h3, p");
                var histComp = "";
                for (i = 0; i < histParObj.length; i++) {
                    histComp += histParObj[i].outerHTML;
                }
                // console.log("Contents of histComp: " + histComp);

                // Remove anchor tags but keep inner text
                docHistoryPars.innerHTML = histComp.replace(/<\/?a[^>]*>/g, "");
                $(".mw-editsection-bracket, .mw-editsection").remove();
                // Remove wikipedia citation brackets from the text
                docHistoryPars.innerHTML = docHistoryPars.innerHTML.replace(/<sup\b[^>]*>(.*?)<\/sup>/gi, "");
            }

            docHiddenContent.innerHTML = ""; 

            // console.log("Contents of history pars: " + docHistoryPars.innerHTML);
            // console.log("Contents of #History: " + historyHeading.innerHTML); 
            // console.log(parsedText);

        })
        .catch(function (error) { console.log(error); });
}