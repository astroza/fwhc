// ==UserScript==
// @name       FWHC
// @namespace  http://astroza.cl
// @version    0.1
// @description Script to hide annoying comments from usual FW users
// @match      http://www.fayerwayer.com/*
// @copyright  2014+, Felipe Astroza
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$("<h2>Los comentarios fueron omitidos por FWHC</h2>").insertAfter('#disqus_thread');
$('#disqus_thread').hide();

