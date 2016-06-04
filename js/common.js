
$(document).ready(function()
 {
  $('.menu div:first').click(function()
   {
    $('.menu ul').slideToggle('fast');
    $('.wrap-search').slideUp('fast');
   });

  $('.menu button.search').click(function()
   {
    $('.wrap-search').slideToggle('fast');
   });

  $('.menu .cats > span').click(function(ev)
   {
    var index=ev.target.getAttribute('index');
    $('.menu .cats > span').removeClass('sel').eq(index).addClass('sel');
    $('.menu .cats > div').removeClass('sel').eq(index).addClass('sel');
   });

  new Swiper('.slider', {
   pagination: '.swiper-pagination',
   paginationClickable: true,
   simulateTouch: true,
   speed: 1000,
   loop: true
  });
 });
