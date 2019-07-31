const $ = require("jquery");
window.jQuery = $;
require("@fancyapps/fancybox");

'use strict';

$('[data-fancybox]').fancybox({
    slideShow: false,
    thumbs: false
});