(function($) {
  "use strict"; // Start of use strict

  if(/^(iPhone|iPad|iPod)/.test(navigator.platform) || /(MSIE|Trident\/)/.test(navigator.userAgent)){
    document.getElementById('rapydly-header').classList.add('isApple');
  }

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-icon-2', {
    delay: 400,
    scale: 0
  });
  sr.reveal('.sr-icon-3', {
    delay: 600,
    scale: 0
  });
  sr.reveal('.sr-icon-4', {
    delay: 800,
    scale: 0
  });
  sr.reveal('.sr-button', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8
  });
  sr.reveal('.sr-contact-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-contact-2', {
    delay: 400,
    scale: 0
  });

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  var recalculate = function() {
    var tables = parseInt($('#input-tables').val());
    if(!tables || tables < 0) tables = 0;
    
    var devs = parseInt($('#input-devs').val());
    if(!devs || devs < 0) devs = 0;
    
    var api = $('#checkbox-api').prop('checked');
    var app = $('#checkbox-app').prop('checked');

    if((!api && !app) || tables <= 0 || devs <= 0) {
      $('#total').text(0);
      return;
    }
    var total = 0;
    total += api ? tables * 2 : 0;
    total += app ? tables * 4 : 0;
    total = total * 1.3;
    total = total / devs;
    var realTotal = Math.round(total);
    realTotal = realTotal < 0 ? 0 : realTotal > 1000 ? 'All of the' : realTotal;
    $('#total').text(realTotal);
    var totalInfo = 'Based on 2 days per table for the api, and 4 days per table for the web app, and an additional 30% for testing.';
    $('#total-info').prop('title', totalInfo);
  };

  recalculate();
  $('#input-tables').keyup(function(){recalculate()});
  $('#input-tables').click(function(){recalculate()});
  $('#input-devs').keyup(function(){recalculate()});
  $('#input-devs').click(function(){recalculate()});
  $('#checkbox-api').click(function(){recalculate()});
  $('#checkbox-app').click(function(){recalculate()});
  $("#total-info").tooltip({ placement: 'right'});

  $('#me').prop('h' + 'r' + 'e' + 'f', 'm' + 'a' + 'ilto' + ':' + 'info' + '@' + 'rapydly' + '.' + 'com');
  $('#me').text('info' + '@' + 'rapydly' + '.' + 'com');

})(jQuery); // End of use strict
