function getSummary() {

    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = `https://en.wikipedia.org/api/rest_v1/page/summary/${pageTitleU}`;

        fetch(proxyurl+url,
            {
                method: "GET",
                headers: {
                    "User-Agent": "xumux@hotmail.com"
                }
            }
        )
        // fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (response) {
            // console.log("Page title before extracting: " + pageTitle);
            // console.log("URL before extracting: " + url);
            // console.log(response.extract);
            var extractMainPar = response.extract;
            document.getElementById("extract-main-par").innerHTML = extractMainPar;
            // console.log("Type of pages: " + typeof(response.query.pages));
            // console.log("Type of pages first element: " + typeof(response.query.pages[0]));
            // console.log("data: " + JSON.stringify(response));
        })
        .catch(function (error) { console.log(error); });
}