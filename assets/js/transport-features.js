$('.scroll-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
});