// ==UserScript==
// @name        SIOZ-RFC-ZMIANA
// @namespace   http://sioz.softnet.pl/
// @include     https://sioz.softnet.com.pl/firma/notka_w.php*
// @require     http://code.jquery.com/jquery-1.6.4.min.js  
// @version     0.1
// @copyright  2012+, Maja
// ==/UserScript==



$(document).ready(function() 
{
	var rfcField = $('input[name=rfc]');
	var rfcZmiana = $('input[name=rfcZmiana]');
    
	
    rfcField.after('&nbsp;&nbsp;&nbsp;<b>RFC zmiana długa: </b> <input type="checkbox" name="rfcZmiana">');
	
	$('input[name=rfcZmiana]').click(function ()
							 {
								 var thisCheck = $(this);
								 if (thisCheck.is(':checked')) {
									 rfcField.attr('checked', true);
									 var v = "\
PRZYCZYNY POWOŁANIA ZMIANY\n\
--------------------------\n\
Klient Banku, Bank\n\n\
ZARYS UZASADNIENIA BIZNESOWEGO\n\
------------------------------\n\
Realizacja zobowiązań wobec klienta, rozwój aplikacji\n\n\
ZAKRES\n\
------\n\n\n\
KRYTERIA AKCEPTACJI\n\
-------------------\n\n\n\
OPIS ZMIANY I WYŁĄCZENIA\n\
------------------------\n\n\n\
PUNKTY STYKU\n\
------------\n\n\n\
OGRANICZENIA\n\
------------\n\n\n\
AKTY PRAWNE\n\
-----------\n\n\n\
SPOSÓB WYCOFANIA\n\
----------------\n\
Wycofanie wersji programu\n\n\
TESTY\n\
-----\n\n\n\
PROGNOZA CZASU REALIZACJI\n\
-------------------------\n\n\n\
WPŁYW NA POZIOM USŁUG\n\
---------------------\n\
nie dotyczy\n\
									 ";
								 }
								 else {
									 var v = "";
									 rfcField.attr('checked', false);
								 }
								 $('textarea[name=notka]').attr('value', v);
							 });
});