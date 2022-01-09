jQuery(document).ready(function($) {
    "use strict";


    /*
    Owl Slide For Default Style*/
    if ($('#tnit-default-layer-slider').length) {
        $('#tnit-default-layer-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 0,
            autoplay: false,
            smartSpeed: 2000,
            mouseDrag: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1199: {
                    items: 1,
                }
            }
        });
    }


    /*
    Owl Slide For Parallax*/
    if ($('#tnit-parallax-layer-slider').length) {
        $('#tnit-parallax-layer-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 0,
            autoplay: false,
            smartSpeed: 2000,
            mouseDrag: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1199: {
                    items: 1,
                }
            }
        });
    }


    /*
    Owl Slide For Banner Portfolio*/
    if ($('#tnit-portfolio-layer-slider').length) {
        $('#tnit-portfolio-layer-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 1,
            margin: 0,
            autoplay: false,
            smartSpeed: 4000,
            animateOut: 'slideOutUp',
            animateIn: 'slideInDown',
            // touchDrag: false,
            mouseDrag: false,
            rewindNav:false,
            rewindDots:false,
            rewind: false,
        });
    }



    /*
    Owl Slide For Video*/
    if ($('#tnit-video-layer-slider').length) {
        $('#tnit-video-layer-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 1,
            margin: 0,
            autoplay: false,
            smartSpeed: 6000,
            animateOut: 'slideOutUp',
            animateIn: 'slideInDown',
            // touchDrag: false,
            mouseDrag: false,
            rewindNav:false,
            rewindDots:false,
            rewind: false,
            // onInitialized: true,
            onInitialized: startProgressBar,
            onTranslate: resetProgressBar,
            onTranslated: startProgressBar,
        });
    }



    /*
    Owl Slide For Banner Pattern*/
    if ($('#tnit-pattern-layer-slider').length) {
        $('#tnit-pattern-layer-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 1,
            margin: 0,
            autoplay: false,
            smartSpeed: 2000,
            // animateOut: 'fadeIn',
            // animateIn: 'fadeOut',
            // touchDrag: false,
            mouseDrag: false,
            rewindNav:false,
            rewindDots:false,
            rewind: false,
        });
    }



    /* 
   Jquery code for Progressbar */
   function startProgressBar() {
      // apply keyframe animation
      $(".tnit-slide-progress").css({
        width: "100%",
        transition: "width 6000ms"
      });
    }

    function resetProgressBar() {
      $(".tnit-slide-progress").css({
        width: 0,
        transition: "width 0s"
      });
    }


    /*Parallax Jquery Effect*/
    $(function() {
        var tnitlayerslider = $(".tnit-default-layer-slider");
        var sliderPosition = tnitlayerslider.offset().top;
        var $parallax = $('.tnit-slide-parallax-item');

        $(window).on('scroll', function () {
            var scroll = $(document).scrollTop();
            scroll = sliderPosition - scroll;
            $parallax.css({
                'background-position-y': (-.6*scroll) + 'px'
            });
        });
    });


    jQuery(function($){
      $('.tnit-slide-video').vidbg({
          'mp4': 'media/mp4_video.mp4',
          'webm': 'media/mp4_video.webm',
          'poster': 'media/fallback.jpg',
      }, {
        // Options
        muted: true,
        loop: true,
        overlay: true,
        // overlayColor: '#03A9F4',
        overlayAlpha: 0.8,
      });
    });






});








