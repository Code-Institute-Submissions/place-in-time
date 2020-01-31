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

// Toggle accordion header message
$(document).ready(function() {
    $("#history-header").click(function() {
        $(this).toggleClass("hide-history")
        if($(this).hasClass("hide-history")) {
            $(this).html(`Tap here to show history`);
        } else {
            $(this).html(`Hide history`);
        }
    })
})