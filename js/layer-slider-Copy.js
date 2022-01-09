jQuery(document).ready(function($) {
    "use strict";


    /*
    Banner Slider*/
    // if ($('#tnit-banner-slider').length) {
    //     var outerCarousel = $('#tnit-banner-slider');
    //     outerCarousel.owlCarousel({
    //         loop: false,
    //         dots: false,
    //         nav: false,
    //         navText: '',
    //         items: 1,
    //         autoplay: false,
    //         smartSpeed: 4000,
    //         animateIn: 'zoomIn',
    //         animateOut: 'fadeOut',
    //         touchDrag: false,
    //         mouseDrag: false,
    //     });
    // }


    /*
    Old Owl Slide For Banner*/
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


    // Parallax Jquery Code
    if ($('.tnit-slide-parallax').length) {
        $('.tnit-slide-parallax').parallax();
    }


    /*Parallax Jquery Effect*/
    $(function() {
        var tnitlayerslider = $(".tnit-default-layer-slider");
        var sliderPosition = tnitlayerslider.offset().top;
        var $parallax = $('.tnit-slide-bgImage');

        $(window).on('scroll', function () {
            var scroll = $(document).scrollTop();
            scroll = sliderPosition - scroll;
            $parallax.css({
                'background-position-y': (-.6*scroll) + 'px'
            });
        });
    });


    /*
    Resize text,image,content etc jQuery code*/
    $(function() {
       var hs = [$('.tnit-slider-title'), $('.tnit-slider-text'), $('.tnit-layer-btn')]
        var hs = [$('.tnit-slider-title'), $('.tnit-slider-text'), $('.tnit-layer-btn')]

          $.each(hs, function(index, h) {

            var fontsize = h.css('font-size');
            $(window).on('resize', function() {
               // alert('Am I working?');
              if (h.parent()[0] &&
                h.parent()[0].scrollWidth > $('.tnit-layer-inner-wra').innerWidth()) {
                h.fitText(1, {
                  minFontSize: '10px',
                  maxFontSize: fontsize
                });
              }
            });
          });


          $.fn.fitText = function(kompressor, options) {
            // Setup options
            var compressor = kompressor || 1,
              settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY
              }, options);
            return this.each(function() {
               // alert('reize is working....');
              // Store the object
              var $this = $(this);
              // Resizer() resizes items based on the object width divided by the compressor * 10
              var resizer = function() {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
              };
              // var valueget('...').
              // Call once to set.
              resizer();
              // Call on resize. Opera debounces their resize by default.
              $(window).on('resize.fittext orientationchange.fittext', resizer);
            });
          };
        });


        $(function() {
            $(window).bind('resize', function() {
                 var resizeText = function () {
                // Standard height, for which the body font size is correct
                var preferredFontSize = 60; // %
                var preferredSize = 1024 * 768;

                var currentSize = $(window).width() * $(window).height();
                var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
                var newFontSize = preferredFontSize * scalePercentage;
                $(".tnit-layer-tem-responsive .tnit-slider-titl").css("font-size", newFontSize + 'px');
            };

                resizeText();
            }).trigger('resize');
        });


        function resize() {  
            $('.resize').each(function(i, obj) {
                $('.tnit-layer-tem-responsive .tnit-slider-titl').css('font-size', '4em');

                while ($(this).width() > $(this).parent().width()) {
                    $('.tnit-layer-tem-responsive .tnit-slider-titl').css('font-size', (parseInt($(this).css('font-size')) - 1) + "px");
                }
            });
        }


    // textfit();
    // $(window).on('resize', textfit);

    // function textfit() {
    //     $('.tnit-slider-title').css('font-size', 'medium');
    //     var w1 = $('.tnit-layer-wrap').width()-10;
    //     var w2 = $('.tnit-slider-title').width();
    //     var wRatio = Math.round(w1 / w2 * 10) / 10;

    //     var h1 = $('.tnit-layer-wrap').height()-10;
    //     var h2 = $('.tnit-slider-title').height();
    //     var hRatio = Math.round(h1 / h2 * 10) / 10;

    //     var constraint = Math.min(wRatio, hRatio);

    //     $('.tnit-slider-title').css('font-size', constraint + 'em');
    // }


    jQuery(document).ready(function($) {
      var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 480) {
          $('.test').removeClass('blue');
        } else if (ww >= 481) {
          $('.test').addClass('blue');
        };
      };
      $(window).resize(function(){
        alterClass();
      });

      //Fire it when the page first loads:
      alterClass();
    });





     // if ($('#tnit-layer-video').length) {
    //     $('#tnit-layer-video').YTPlayer({
    //        fitToBackground: true,
    //        videoId: 'https://www.youtube.com/watch?v=dEndyr3CAy8&t=4423s',
    //        playerVars: {
    //           modestbranding: 0,
    //           autoplay: 1, 
    //           controls: 0,
    //           showinfo: 0,
    //           rel: 0
    //        }
    //     });
    // }


    /*
    Slide Window height for different screen */
    $(document).ready(function(){
        // $('.tnit-slide-height').css('height', $(window).height());
        // $('.tnit-slide-fullHeight,.tnit-default-layer-slider .owl-item').css('height', $(window).height());
    });


    // $(window).resize(function(){
    //     $('.tnit-slide-fullHeight,.tnit-default-layer-slider .owl-item').css('height', $(window).height());
    // });


    // Latest Updated Slider Jquery Code

    /*
    Owl Slide For Banner Vertical*/
    if ($('#tnit-house-slider').length) {
        $('#tnit-house-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            navText: '',
            items: 1,
            margin: 30,
            autoplay: true,
            smartSpeed: 7000,
            animateOut: 'slideOutLeft',
            animateIn: 'slideInRight',
            // touchDrag: false,
            mouseDrag: false,

        });
    }

     /*
    Owl Slide For Banner Vertical*/
    if ($('#tnit-salon-slider').length) {
        $('#tnit-salon-slider').owlCarousel({
            loop: false,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 7000,
            animateOut: 'fadeOut',
            animateIn: 'pulse',
            mouseDrag: false,

        });
    }

    /*
    Owl Slide For Banner Vertical*/
    if ($('#tnit-food-slider').length) {
        $('#tnit-food-slider').owlCarousel({
            loop: false,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 7000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            mouseDrag: false,

        });
    }


    /*
    Owl Slide For Banner Vertical*/
    if ($('#tnit-creativity-banner').length) {
        $('#tnit-creativity-banner').owlCarousel({
            loop: false,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 0,
            autoplay: false,
            smartSpeed: 7000,
            mouseDrag: false,

        });
    }

    /*
    Owl Slide For Shoes Banner*/
    if ($('#tnit-shoes-slider').length) {
        $('#tnit-shoes-slider').owlCarousel({
            loop: false,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 7000,
            animateOut: 'fadeOut',
            animateIn: 'pulse',
            // touchDrag: false,
            mouseDrag: false,

        });
    }


    /*
    Animated Move Text JQuery code*/
    if ($('.tnit-anim-move').length) {
        $('.tnit-anim-move').tilt({
            maxTilt:        20,
            perspective:    3000,   // Transform perspective, the lower the more extreme the tilt gets.
            easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
            scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
            speed:          500,    // Speed of the enter/exit transition.
            transition:     true,   // Set a transition on enter/exit.
            disableAxis:    null,   // What axis should be disabled. Can be X or Y.
            reset:          true,   // If the tilt effect has to be reset on exit.
            glare:          false,  // Enables glare effect
            maxGlare:       1,      // From 0 - 1.
           
        });
    }


     /*
    vertical Slider window height JQuery code*/
    $(window).on('load resize', function () {
      var w = $(window).width();
      $("#tnit-vertical-slider")
        .css('max-height', w > 1441 ? 940 : w > 1280 ? 768 : w > 480 ? 615 : 715);
    });

     
    /*
    Mousehover 3d move JQuery code*/
    if ($('.tnit-movement-box_v2').length) {
        $('.tnit-movement-box_v2').plate({
          // inverse animation
          inverse: false,
          // transformation perspective in pixels
          perspective: 1000,
          // maximum rotation in degrees
          maxRotation: 2,
          // duration in milliseconds
          animationDuration: 500

        });
    }

     /*
    Movement Box JQuery code*/
    if ($('.tnit-movement-box').length) {
        $('.tnit-movement-box').plate({
          // inverse animation
          inverse: true,
          // transformation perspective in pixels
          perspective: 700,
          // maximum rotation in degrees
          maxRotation: 3,
          // duration in milliseconds
          animationDuration: 700

        });
    }



    /*
    Animated Move Text JQuery code*/
    if ($('.tnit-animate-text').length) {
        $('.tnit-animate-text').typer({
          typeSpeed: 60,
          backspaceSpeed: 20,
          backspaceDelay: 800,
          repeatDelay: 1000,
          repeat: true,
          autoStart: true,
          startDelay: 100,
        });
    }

    
    /*
    Typer Text JQuery code*/
    if ($('.tnit-type-text').length) {
        $(".tnit-type-text").typer({
            strings: [
                "Creative Team",
                "Professional Designers",
                "UI & UX Designers",
            ],
            typeSpeed: 300,
            backspaceSpeed: 20,
            backspaceDelay: 1500,
            repeatDelay: 1000,
            repeat: true,
            autoStart: true,
            startDelay: 700,

        });
    }

    /*
    Add Splitting Text JQuery code*/
    if ($('.tnit-type-text').length) {

    }


  



});








