$(window).on('scroll load', function() {

    if ($(window).scrollTop() > 20) {
        $('#header').css({
            'background': 'white',
            'box-shadow': '0 .1rem .3rem #000'
        });
    } else {
        $('#header').css({
            'background': 'aliceblue',
            'box-shadow': 'none'
        });
    }

});

$('.product-slider').owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    autoplay: true,
    center: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.review-slider').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    autoplay: true
});