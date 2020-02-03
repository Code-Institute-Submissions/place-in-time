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
// $(document).ready(function() {
//     $("#history-header").click(function() {
//         $('#collapseOne').toggleClass("show")
//         if($('#collapseOne').hasClass("show")) {
//             $(this).html(`Hide history`);
//         } else {
//             $(this).html(`Tap here to show history`);
//         }
//     })
// })

// $(document).ready(function() {
//     $("#collapseOne").hasClass("show") ? docHistoryHeader.innerHTML = `Hide History` : docHistoryHeader.innerHTML = `Tap here to show history`;
//     $("#history-header").click(function() {
// });

function handleClick() {
    this.innerHTML = (this.innerHTML == "Tap here to show history" ? "Hide history" : "Tap here to show history");
}
document.getElementById("history-header").onclick=handleClick;