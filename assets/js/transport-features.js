$(window).on('load', function() {
    $('#instructModal').modal('show');
});

$('#refresh-page').on('click', function (event) {
    event.preventDefault();
    initMap();
})

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


// Toggle messsage of accordion button for suggested action
var showHistText = "Tap here to show history";
var hideHistText = "Hide history";

function handleClick() {
    this.innerHTML = (this.innerHTML == showHistText ? hideHistText : showHistText);
}
document.getElementById("history-header").onclick=handleClick;