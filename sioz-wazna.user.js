// ==UserScript==
// @name        SIOZ-WAZNA
// @version     0.1
// @namespace   http://sioz.softnet.pl/
// @include     https://sioz.softnet.com.pl/firma/notka_w.php*
// @include		https://sioz.softnet.com.pl/firma/main.php*
// @copyright   2013+, Maja
// ==/UserScript==

$(document).ready(function() 
{
	var waznyField = $('input[name=wazny]');
	waznyField.attr('checked', true);
});