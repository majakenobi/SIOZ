// ==UserScript==
// @name        SIOZ-WAZNA
// @version     0.1
// @namespace   http://sioz.softnet.pl/
// @copyright   2013+, Maja
// ==/UserScript==

$(document).ready(function() 
{
	var waznyField = $('input[name=wazny]');
	waznyField.attr('checked', true);
});