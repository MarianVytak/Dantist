import $ from 'jquery';

"use strict";

// Hamburger
const hamburger = $('.hamburger');
const menu = $('.navigation');
const body = $('body');
const header = $('.header');

hamburger.on('click', function(e){

    e.preventDefault();

    hamburger.toggleClass('hamburger-active');
    body.toggleClass('hidden');
    header.toggleClass('active');
    menu.slideToggle();

});