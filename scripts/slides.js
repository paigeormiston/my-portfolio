$(document).ready(function() {

  $('#wrapper').scrollTo('#item2', 0);

	$('a.panel').click(function () {

		$('a.panel').removeClass('selected');
		$(this).addClass('selected');

		current = $(this);

		$('#wrapper').scrollTo($(this).attr('href'), 1200, {easing: 'easeInOutCirc'});

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
	$('#mask').css({width: width, height: mask_height});
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);

}
