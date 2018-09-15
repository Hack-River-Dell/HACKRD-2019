$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 635) {
              $('nav').addClass('solid');
              console.log("this script works");
          } else {
              $('nav').removeClass('solid');
          }
        });

        

});
