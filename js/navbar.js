// navbar link clic close navbar-items - OK! - NO TOCAR
$('.nav-link').click(function(){$('.navbar-collapse').collapse('hide');});
// navbar link clic close navbar-items - OK! - NO TOCAR

// al presionar el botton de menu, pone color al navbar completo - OK!
$('.navbar-toggler').click(function(){$('.navbar').addClass('solid');});
// al presionar el botton de menu, pone color al navbar completo - OK!

// click body navbar collapse - OK! - NO TOCAR
$(function() {$(document).click(function (event) {$('.navbar-collapse').collapse('hide');});});
// click body navbar collapse - OK! - NO TOCAR


//------------------------- NO TOCAR --------------------//

// no tocar - posicionamiento section
var offset = 110; //110 para este caso
$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});
// no tocar - posicionamiento section

//----------HAMBURGER ANIMATED------// - OK!
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
    });
    
});
$(document).ready(function(){
	$('.nav-link').click(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
    });
});
//----------HAMBURGER ANIMATED------// - OK!