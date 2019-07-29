import $ from 'jquery';

"use strict";

// Hamburger
const hamburger = $('.hamburger');
const menu = $('.menu-mobile');

hamburger.on('click', function(e){

    e.preventDefault();

    hamburger.toggleClass('hamburger-active');
    menu.slideToggle();

});