import $ from 'jquery';

'use strict';

const footerAccordionLink = $('.footer__accordion_link');
//const footerAccordionContent = $('.footer__accordion_content');

footerAccordionLink.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    let footerAccordionContentThis = $(this).attr('data-target');
    $(footerAccordionContentThis).slideToggle();
});