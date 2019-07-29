import $ from 'jquery';

"use strict";

// Hamburger
const hamburger = $('.hamburger');
const menu = $('.menu-mobile');
// const menuLink = $('.menu__list_item_link');
// const body = $('body');
// const overlay = $('.overlay');

hamburger.on('click', function(e){

    e.preventDefault();

    hamburger.toggleClass('hamburger-active');
    menu.slideToggle();
    // body.toggleClass('hidden');
    // overlay.toggleClass('active');

});

// menuLink.on('click', function (e) {
//
//     e.preventDefault();
//
//     hamburger.removeClass('hamburger-active');
//     menu.removeClass('active');
//     body.removeClass('hidden');
//     overlay.removeClass('active');
//
//     let menuLinkScroll = $(this).attr('href'),
//         menuLinkScrollBlock = ($(menuLinkScroll).offset().top) - 60;
//     $('html, body').animate({
//         scrollTop: menuLinkScrollBlock
//     }, 2000);
//
// });
//
// body.on('click', '.overlay', function(){
//     body.removeClass('active');
//     overlay.removeClass('active');
//     hamburger.removeClass('hamburger-active');
//     menu.removeClass('active');
//     body.removeClass('hidden');
// });