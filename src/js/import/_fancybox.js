//import $ from 'jquery';
//import '@fancyapps/fancybox';

//import "../../../node_modules/jquery/dist/jquery.min";
//import "../../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min";

const $ = require("jquery");
window.jQuery = $;
require("@fancyapps/fancybox");

'use strict';

$('[data-fancybox]').fancybox({
    slideShow: false,
    thumbs: false
});