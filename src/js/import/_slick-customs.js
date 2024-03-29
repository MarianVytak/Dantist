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
    dots: false,
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
                slidesToShow: 1,
                dots: true
            },
        }
    ]
});

$('.works-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: false,
    swipe: true,
    infinite: false
});

$('.reviews__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.news__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: false,
    swipe: true,
});

$('.licenses__slider').slick({
    rows: 3,
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 1200,
    fade: false,
    arrows: true,
    dots: false,
    swipe: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                rows: 2,
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                rows: 2,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});


$('.collapse__content').on('shown.bs.collapse', function () {
    $('.works-slider').slick('reinit');
});