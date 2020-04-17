/**
* Template Name: DevFolio - v2.0.0
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function() {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  /*--/ Star ScrollTop /--*/
  $('.scrolltop-mf').on("click", function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  /*--/ Star Counter /--*/
  $('.counter').counterUp({
    delay: 15,
    time: 2000
  });

  /*--/ Star Scrolling nav /--*/
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - navHeight + 5)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll').on("click", function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
  });
  /*--/ End Scrolling nav /--*/

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger('scroll');
  $(window).on('scroll', function() {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $('.navbar-expand-md').addClass('navbar-reduce');
      $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
      $('.navbar-expand-md').addClass('navbar-trans');
      $('.navbar-expand-md').removeClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
      $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
      $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Star Typed /--*/
  if ($('.text-slider').length == 1) {
    var homeDiv = $('#home')
    var typed_strings = $('.text-slider-items').text().split(',');
    var strings = [];
    var backgrounds = [];
    for (var i = 0; i < typed_strings.length; i ++) {
      var x = typed_strings[i].split('|')
      strings.push(x[0])
      backgrounds.push(x[1])
    }
    var typed = new Typed('.text-slider', {
      strings: strings,
      typeSpeed: 50,
      loop: true,
      backDelay: 1500,
      backSpeed: 30,
      preStringTyped: (pos, self) => {
        homeDiv.css("background-image", backgrounds[pos])
      },
    });
  }

  function findVisible(target) {
    var clicked = $('#flex_about_text').find(".blurb:visible")
    if (!clicked.hasClass(target)) {
      clicked.addClass('blurb_hidden');

      var targetElem = $("." + target);
      targetElem.removeClass('blurb_hidden');
      targetElem.addClass('animated');

      // var aboutDiv = $('#about');
      // aboutDiv.css("background-image", "url(assets/img/UCBerkeleyCampus.jpg)");
    }
  } 

  $('.UCBerkeleyBadge').on('click', function() {
    findVisible('UCBerkeley');
  })

  $('.IBMBadge').on('click', function() {
    findVisible('IBM');
  })

  $('.GSBadge').on('click', function() {
    findVisible('GoldmanSachs');
  })

  $('.GoogleBadge').on('click', function() {
    findVisible('Google');
  })

  $('.icons_and_blurbs').on('click', function(e) {
    if (!($(e.target).is('img'))) {
      findVisible('about-me');
    }
  })

  $('.linkedin').on('click', function() {
    window.open('https://www.linkedin.com/in/alden-liu-12212b12a/');
  })

  $('.github').on('click', function() {
    window.open('https://github.com/aldenliu98');
  })

  $('.resume').on('click', function() {
    window.open('https://www.dropbox.com/s/17n09xx92m4ik11/Alden-Liu-Resume.pdf?dl=0');
  })

})(jQuery);

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {

  var animated_about = false;

  $('.ico-block').click(function() {
    $(this).addClass('pulse_animation');
  });

  $('.ico-block').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
    $(this).removeClass('pulse_animation');
  });

  $(document).scroll(function(evt) {

    var v1 = $(this).scrollTop();
    var v2 = Math.abs($('#about').position().top - $(window).height()/5);

    if (!animated_about && v1 > v2) {

      var dankest = anime.timeline({});
      var icon_holder = document.querySelector('.icons_column').querySelectorAll("ion-icon");

      dankest
      .add({
        targets: '#about_deco',
        skew: 165,
        duration: 5000,
        easing: 'easeOutElastic(1, 0.75)',
        opacity: 1
      })

      .add({
        targets: '#about_deco',
        translateX: -75,
        duration: 5000,
      }, '-=4000')

      .add({
        targets: icon_holder,
        translateY: -50,
        duration: 300,
        delay: anime.stagger(100),
        easing: 'cubicBezier(.5, .05, .1, .3)',
        scale: 1.5,
      }, 500)

      .add({
        targets: icon_holder,
        translateY: 0,
        duration: 300,
        delay: anime.stagger(100),
        easing: 'cubicBezier(.5, .05, .1, .3)',
        scale: 1.0,
      }, 1200)

      .add({
        targets: document.querySelectorAll('.ico-block'),
        opacity: 1,
        duration: 1000,
        delay: anime.stagger(100)
      }, 200)

      .add({
        targets: '#flex_about_text',
        opacity: 1,
        duration: 1000
      }, 500)

      animated_about = true;
    }
  })

})




