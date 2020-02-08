
function getSummary() {

    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = `https://en.wikipedia.org/api/rest_v1/page/summary/${pageTitleU}`;

        fetch(proxyurl+url)
        .then(function (response) { return response.json(); })
        .then(function (response) {
            var extractMainPar = response.extract;
            document.getElementById("extract-main-par").innerHTML = extractMainPar;
        })
        .catch(function (error) { console.log(error); });
}
