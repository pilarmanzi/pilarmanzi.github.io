/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/


var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if(window.innerWidth < 400) {

    // Record the width of the list
    // breaks.push($vlinks.width());

    var count = $vlinks.children().length

    // Move all items to the hidden list
     $vlinks.children().each(function(){
      $(this).prependTo($hlinks);
    });

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

    $btn.attr("count",count);

  // The visible list is not overflowing
  } else {

    $hlinks.children().each(function(){
      $(this).prependTo($vlinks);
    });
    $btn.addClass('hidden');
    $hlinks.addClass('hidden');

    // Keep counter updated
    $btn.attr("count",0);
  }
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
