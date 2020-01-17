function getExtracts() {

    // Replace spaces with encoded value for URL query
    var pageTitleEncoded = pageTitle.replace(/ /g, "%20");

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        prop: "extracts&exintro&explaintext",
        redirects: "1",
        titles: pageTitleEncoded,
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
    // console.log(url);
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (response) {
            console.log("Page title before extracting: " + pageTitle);
            console.log("URL before extracting: " + url);
            console.log(response);
            console.log("Type of pages: " + typeof(response.query.pages));
            console.log("Type of pages first element: " + typeof(response.query.pages[0]));
            // console.log("data: " + JSON.stringify(response));
        })
        .catch(function (error) { console.log(error); });
}