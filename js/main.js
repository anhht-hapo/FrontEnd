$(document).ready(function () {
    var sync1 = $('#sync1');
    var sync2 = $('#sync2');
    sync1.owlCarousel({
        items: 8,
        loop: true,
        padding: 10,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    sync2.owlCarousel({
        items: 1,
        dots: false,
    });
    sync1.on('change.owl.carousel', function (event) {
        sync2.trigger('next.owl.carousel');
    })
    sync2.on('change.owl.carousel', function (event) {
        sync1.trigger('next.owl.carousel');
    })
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
})