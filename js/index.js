// SMOOTH SCROLLING

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 425);
        return false;
      }
    }
  });
});

// END SMOOTH SCROLLING

// Click Events
$('.category-nav').click(function() {
  $('.more-less-btn').toggleClass('more-less-clicked');
  $('.category-nav-list').toggleClass('open-category-list');
});

$('.category-links').click(function() {
  $('.more-less-btn').toggleClass('more-less-clicked');
  $('.category-nav-list').toggleClass('open-category-list');

});

// Site Navigation
$('.nav-btn').click(function() {
  $(this).toggleClass('site-nav-btn-clicked');
  $('.navigation-items').toggleClass('open-site-nav');
});

// When the category nav hits the top of the window, fix its position to top of window
var stickyNav = $('.category-page').offset().top;

$(window).scroll(function() {
  if ($(window).scrollTop() > stickyNav) {
    $('.category-nav-list').addClass('fixNavList');
    $('.category-nav-wrapper').addClass('fixWrapper');
    $('.categories').addClass('category-padding-fix');
  } else {
    $('.category-nav-list').removeClass('fixNavList');
    $('.category-nav-wrapper').removeClass('fixWrapper');
    $('.categories').removeClass('category-padding-fix');
  }
});

// Active Links
$('.category-links').on('click', function(event) {
    $('a').removeClass('active');
    $(this).addClass('active');
});