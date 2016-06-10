$(document).ready(function() {
  $('img.next').hide();
  $('#nav-circles').hide();
  $('#wrapper').scrollTo('#item2', 0);
  setTimeout('document.getElementById("header").style.display = "none"', 1000);
  setTimeout('document.getElementById("header2").style.display = "block"', 1000);

  var lastPanelClick = 0;
  var currentPanel;

	$('a.panel').click(function (e) {

    $('a.panel').removeClass('selected');
    $(this).addClass('selected');
    current = $(this);
    currentPanel = $(this);
    setTimeout('document.getElementById("next").src="images/arrow-d.svg"',200);
    e.preventDefault();
    scrollSlowTo($(this).attr('href'));
    if(current.attr('href') != "#item1" && current.attr('href') != "#item2" && current.attr('href') != "#item3") {
      setTimeout('document.getElementById("aboutbutton2").style.display = "none"', 800);
      setTimeout('document.getElementById("workbutton2").style.display = "none"', 800);
    } else {
      setTimeout('document.getElementById("aboutbutton2").style.display = "inline"', 800);
      setTimeout('document.getElementById("workbutton2").style.display = "inline"', 800);
    }

    if(currentPanel.attr("href") == "#item1" || currentPanel.attr("href") == "#item2") {
      $('img.next').hide();
      $('#nav-circles').hide();
      return;
    } else {
      $('img.next').show();
      $('#nav-circles').show();
    }

    updateCircles($(this));

	});

	$(window).resize(function () {
		resizePanel();
	});


  $('img.next').click(function (e) {

      if(currentPanel.attr("href") == "#item3") {
        $('a[href="#item5"]').trigger("click");
        return;
      }
      if(currentPanel.attr("href") == "#item5") {
        $('a[href="#item6"]').trigger("click");
        setTimeout('document.getElementById("next").src="images/arrow-u.svg"',200);
        return;
      }
      if(currentPanel.attr("href") == "#item6") {
        $('a[href="#item3"]').trigger("click");
        return;
      }
  });

  // var lastScrollEvent = 0;
  //
  // var maxItem = 6;
  // var minItem = 4;
  // var $item3 = $("#item3")
  // $item3.data("item-showing", 4);
  // $item3.bind("wheel", function(e){
  //   if (e.timeStamp < lastScrollEvent + 50){
  //     lastScrollEvent = e.timeStamp;
  //     return;
  //   }
  //   lastScrollEvent = e.timeStamp;
  //   var itemShowing = $(this).data("item-showing");
  //   if (e.originalEvent.deltaY > 0){
  //     if (itemShowing < maxItem){
  //       var goTo = itemShowing + 1;
  //       var elementIdSelector = "#item" + goTo;
  //       scrollSlowTo($(elementIdSelector));
  //       lastPanelClick = e.timeStamp;
  //       itemShowing = goTo;
  //     }
  //   }else{
  //     if (itemShowing > minItem){
  //       var goTo = itemShowing - 1;
  //       var elementIdSelector = "#item" + goTo;
  //       console.log("up : scrolling to item " + goTo);
  //       scrollSlowTo($(elementIdSelector));
  //       lastPanelClick = e.timeStamp;
  //       itemShowing = goTo;
  //     }
  //   }
  //   $(this).data("item-showing", itemShowing);
  // });
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

function scrollSlowTo($div){
  $('#wrapper').scrollTo($div, 1200, {easing: 'easeInOutCirc'});
}

function updateCircles(page) {
  currentHref = page.attr('href');
  if(currentHref == "#item3" || currentHref == "#item5" || currentHref == "#item6") {
    setTimeout('document.getElementById("nav-circles").style.display = "block"', 800);
    if(currentHref == "#item3") {
      $("#item3").data("item-showing", 4);
      $(".circle").removeClass("filled");
      $("#circle4").addClass("filled");
      $("#workbutton2").css("display", "block");
      $("#aboutbutton2").css("display", "block");
    }
    if(currentHref == "#item5") {
      $("#item3").data("item-showing", 5);
      $(".circle").removeClass("filled");
      $("#circle5").addClass("filled");
    }
    if(currentHref == "#item6") {
      $("#item3").data("item-showing", 6);
      $(".circle").removeClass("filled");
      $("#circle6").addClass("filled");
    }
  } else {
    console.log("in here");
    $("#nav-circles").css("display", "none");
  }
  return false;
}
