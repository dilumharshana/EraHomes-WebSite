
  // TOGGLE HAMBURGER & COLLAPSE NAV
  $('.nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse');
  });
  // REMOVE X & COLLAPSE NAV ON ON CLICK
  $('.menu-left a').on('click', function() {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
  });
  
  // SHOW/HIDE NAV
 
  
  function hasScrolled() {
      var st = $(this).scrollTop();
      console.log("test")
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
  
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('show-nav').addClass('hide-nav');
          $('.nav-toggle').removeClass('open');
          $('.menu-left').removeClass('collapse');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('hide-nav').addClass('show-nav');
            $('header').removeClass('hide-nav').addClass('show-nav');
          }
      }
  
      lastScrollTop = st;
  }


  
  $(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100){
          $('#navhead').addClass('naveffect');
          $('#eralogoimg').addClass('logoeffect');
          $('.floatmenu').addClass('menueffect');
          $('.faded').addClass('fadenow');
        }
        else{
          $('#navhead').removeClass('naveffect').addClass('navhead');
          $('#eralogoimg').removeClass('logoeffect').addClass('eralogo');
          $('.floatmenu').removeClass('menueffect').addClass('resetmenustyle');
          $('.faded').removeClass('fadenow').addClass('faded');
        }
    });
}); 