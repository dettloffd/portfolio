let num = 100;

      $(window).bind('scroll', function () 
      {
        if ($(window).scrollTop() > num) 
        {
          $('.section-container--navbar').addClass('navbar-sticky');
          $('.nav__link--anchor').addClass('navbar-sticky--anchor');
          $('.nav').addClass('margin-navbar-sticky');
        } 
        else 
        {
          $('.section-container--navbar').removeClass('navbar-sticky');
          $('.nav__link--anchor').removeClass('navbar-sticky--anchor');
          $('.nav').removeClass('margin-navbar-sticky');

        }
      });