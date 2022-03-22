$(document).ready(function () {
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
    });


    $('.img-slider').slick({
        slidesToShow: 5,
        arrows: false,
        dots: true,
    });

    $('.top-slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        asNavFor: '.bottom-slider',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]

    });
    $('.bottom-slider').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0',
        asNavFor: '.top-slider'
    });

    $('.venubox').venobox(); 

});