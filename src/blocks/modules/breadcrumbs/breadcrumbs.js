import $ from 'jquery';

'use strict';

const anchorLink = $('.breadcrumbs__list_item_link');

anchorLink.on('click', function(e){
    e.preventDefault();

    var navScroll = $(this).attr('href'),
        navScrollBlock = $(navScroll).offset().top - 80;
    $('html, body').animate({
        scrollTop: navScrollBlock
    }, 2000);
});