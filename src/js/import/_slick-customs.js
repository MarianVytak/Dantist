import $ from "jquery";
import "../../../node_modules/slick-carousel/slick/slick.min.js";

'use strict';

$('.team__slider_reviews_carousel-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: false,
    prevArrow: $('.team__slider_reviews_arrow_prev-1'),
    nextArrow: $('.team__slider_reviews_arrow_next-1'),
});
$('.team__slider_reviews_carousel-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: false,
    prevArrow: $('.team__slider_reviews_arrow_prev-2'),
    nextArrow: $('.team__slider_reviews_arrow_next-2'),
});

$('.team__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    dots: false,
    swipe: false,
});

$('.cards__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 768,
            settings: "slick",
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            },
        }
    ]
});

$('.works-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    fade: false,
    arrows: true,
    dots: false,
    swipe: true,
    centerMode: false,
});


$('.collapse__content').on('shown.bs.collapse', function () {
    $('.works-slider').slick('reinit');
});