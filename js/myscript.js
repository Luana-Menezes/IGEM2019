AOS.init();
  
  
  
  //Navbar Scrolling
(function ($) {
  var SCROLLING_NAVBAR_OFFSET_TOP = 50;
  $(window).on('scroll', function () {
    var $navbar = $('.navbar');

    if ($navbar.length) {
      if ($navbar.offset().top > SCROLLING_NAVBAR_OFFSET_TOP) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    }
  });
})(jQuery);

$(document).ready(function(){
 // Smooth Scrolling
 $('#scrollspy-menu a').on('click', function(event) {
   if (this.hash !== '') {
     event.preventDefault();
     const hash = this.hash;
     $('html, body').animate(
       {scrollTop: $(hash).offset().top
       },800,
       function() {
         window.location.hash = hash;
       }
     );
   }
 });

});