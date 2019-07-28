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
    swipe: false
});