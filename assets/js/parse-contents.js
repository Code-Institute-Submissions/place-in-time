
function parseContents() {

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "parse",
        page: pageTitleU,
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

    var docHistoryHeader = document.getElementById("history-header");
    var docHistoryPars = document.getElementById("history-pars");

    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (response) {
            var parsedText = response.parse.text["*"];
            // Convert text to temporary HTML element for ease of traversing
            var tempEl = document.createElement("tempel");
            tempEl.innerHTML = parsedText;
            // Insert contents of temporary element to DOM
            var docHiddenContent = document.getElementById("hidden-content");
            docHiddenContent.appendChild(tempEl);
            var hiddenHistHeading = document.getElementById("History");
            var emptyHistory = "Extra historical information is not available for this location.";

            // In the event a location is without history content
            if (!hiddenHistHeading) {
                // Deactivate accordion button
                docHistoryHeader.disabled = true;
                // Display button notification
                docHistoryHeader.innerHTML = emptyHistory;
                // Set paragraph content to empty
                docHistoryPars.innerHTML = "";
            } else {
                // Activate accordion button
                docHistoryHeader.disabled = false;
                // Display appropriate message depending on current accordion active state
                // $("#collapseOne").hasClass("show") ? docHistoryHeader.innerHTML = hideHistText : docHistoryHeader.innerHTML = showHistText;
                docHistoryHeader.innerHTML = $("#collapseOne").hasClass("show") ? hideHistText : showHistText;
                
                // Target headings and paragraphs within history section
                var histParObj = $("#History").closest("h2").nextUntil("h2", "h3, p");
                // Account for empty history sections and apply button changes accordingly
                if (histParObj.length === 0) { docHistoryHeader.innerHTML = emptyHistory; docHistoryHeader.disabled = true; }
                // Initialise history paragraphs content
                var histComp = "";
                // Iterate through the history contents object and copy to text including html tags
                for (i = 0; i < histParObj.length; i++) {
                    histComp += histParObj[i].outerHTML;
                }
                // Remove anchor tags but keep inner text
                docHistoryPars.innerHTML = histComp.replace(/<\/?a[^>]*>/g, "");
                // Remove edit brackets from sub-headings
                $(".mw-editsection-bracket, .mw-editsection").remove();
                // Remove citation brackets from the text
                docHistoryPars.innerHTML = docHistoryPars.innerHTML.replace(/<sup\b[^>]*>(.*?)<\/sup>/gi, "");
                // Add styling to history sub-headings
                $("#history-pars").children("h3").addClass("subhead");
            }
            // Clear out contents of hidden HTML
            docHiddenContent.innerHTML = "";
        })
        .catch(function (error) { console.log(error); });
}
