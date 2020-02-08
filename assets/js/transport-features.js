
// Display modal on page load
$(window).on('load', function() {
    $('#instructModal').modal('show');
});

// Call initMap on modal button click
$('#refresh-page').on('click', function (event) {
    event.preventDefault();
    initMap();
});

// Return to top of page
$('.scroll-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
});

// Display footer after scrolling down page
$(window).scroll(function() {
    if ($(this).scrollTop() < 500) {
        $('#footer').slideUp();
    } else {
        $('#footer').slideDown();
    }
});

// Toggle messsage of accordion button to display suggested action
var showHistText = "Tap here to show history";
var hideHistText = "Hide history";

function handleClick() {
    this.innerHTML = (this.innerHTML == showHistText ? hideHistText : showHistText);
}

document.getElementById("history-header").onclick=handleClick;
