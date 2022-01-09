jQuery(document).ready(function($) {
    "use strict";


    

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




     /*
    vertical Slider window height JQuery code*/
    $(window).on('load resize', function () {
      var w = $(window).width();
      $("#tnit-vertical-slider")
        .css('max-height', w > 1441 ? 940 : w > 1280 ? 768 : w > 480 ? 615 : 715);
    });




});








