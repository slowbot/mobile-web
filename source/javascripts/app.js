$(document).foundation();

$(document).ready(function() {
  
  $(".listed .day").equalHeights(100,200);

  $('body').addClass('js');
  
  var $menu = $('#menu'),
    $menulink = $('.menu-link'),
    $control = $('.control'),
    $canvas = $('.slide-canvas'),
    $container = $('.container');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $control.toggleClass('active');
    $canvas.toggleClass('active');
    $container.toggleClass('active');
    return false;
  });
});