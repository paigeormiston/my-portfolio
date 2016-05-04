$(document).ready(function() {

  $('#wrapper').scrollTo('#item2', 0);
  setTimeout('document.getElementById("header").style.display = "none"', 1000);
  setTimeout('document.getElementById("header2").style.display = "block"', 1000);

	$('a.panel').click(function () {

		$('a.panel').removeClass('selected');
		$(this).addClass('selected');

		current = $(this);

		$('#wrapper').scrollTo($(this).attr('href'), 1200, {easing: 'easeInOutCirc'});
    if($(this).attr('href') != "#item1" && $(this).attr('href') != "#item2" && $(this).attr('href') != "#item3") {
      setTimeout('document.getElementById("aboutbutton2").style.display = "none"', 800);
      setTimeout('document.getElementById("workbutton2").style.display = "none"', 800);
    } else {
      document.getElementById("aboutbutton2").style.display = "inline";
      document.getElementById("workbutton2").style.display = "inline";
    }


    if($(this).attr('href') == "#item3" || $(this).attr('href') == "#item5" || $(this).attr('href') == "#item6") {
      setTimeout('document.getElementById("nav-circles").style.display = "block"', 800);
      if($(this).attr('href') == "#item3") {
        document.getElementById("circle1").className = "filledcircle";
        document.getElementById("circle2").className = "circle";
        document.getElementById("circle3").className = "circle";
      }
      if($(this).attr('href') == "#item5") {
        document.getElementById("circle2").className = "filledcircle";
        document.getElementById("circle1").className = "circle";
        document.getElementById("circle3").className = "circle";
      }
      if($(this).attr('href') == "#item6") {
        document.getElementById("circle3").className = "filledcircle";
        document.getElementById("circle1").className = "circle";
        document.getElementById("circle2").className = "circle";
      }
    } else {
      document.getElementById("nav-circles").style.display = "none";
    }

		return false;

	});

	$(window).resize(function () {
		resizePanel();
	});

});

function resizePanel() {

	width = $(window).width();
	height = $(window).height();

	mask_height = height * $('.item').length;

	$('#debug').html(width  + ' ' + height + ' ' + mask_height);

	$('#wrapper, .item').css({width: width, height: height});
	$('.inner-item').css({width: width, height: height});
	$('#mask').css({width: width, height: mask_height});
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);

}
