// Return to top of page
$('.scroll-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
});

// Display footer after leaving main page
$(window).scroll(function() {
    if ($(this).scrollTop() < 500) {
        $('#footer').slideUp();
    } else {
        $('#footer').slideDown();
    }
});