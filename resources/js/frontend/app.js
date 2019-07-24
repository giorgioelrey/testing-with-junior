/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');


$(document).ready(function(){
  $(window).scroll(function() {
  if ($(this).scrollTop()) {
      $('#top').fadeIn();
  } else {
      $('#top').fadeOut();
  }
});

$("#top").click(function () {
 //1 second of animation time
 //html works for FFX but not Chrome
 //body works for Chrome but not FFX
 //This strange selector seems to work universally
 $("html, body").animate({scrollTop: 0}, 800);
});
})
