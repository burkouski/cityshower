(function ($) {
    jQuery.fn.bvsCarousel = function () {
        var init = function () {
            var slider = this,
                ctrlLeft = $('.js-carousel__ctrl--left'),
                ctrlRight = $('.js-carousel__ctrl--right'),
                sliderWrap = $('.js-carousel__wrap'),
                slide = $('.js-carousel__slide');


            $(slider).on('click', ".js-carousel__ctrl--right", function () {
                if ($(slider).find('.js-carousel__slide:visible').length < 2) return false;
                right_carusel(slider);
                console.log('true')
                return false;
            });

            $(slider).on('click', ".js-carousel__ctrl--left", function () {
                if ($(slider).find('.js-carousel__slide:visible').length < 2) return false;
                left_carusel(slider);
                console.log('true')
                return false;
            });

            function right_carusel(slider) {
                console.log(slider);
                var slide = $(slider).find('.js-carousel__slide:visible'),
                    block_width = slide.outerWidth(),
                    sliderWrap = $(slider).find('.js-carousel__wrap');

                sliderWrap.animate({left: "-" + block_width + "px"}, 300, function () {
                    slide.eq(0).clone().appendTo(sliderWrap);
                    slide.eq(0).remove();
                    sliderWrap.css({"left": "0px"});
                });
            };

            function left_carusel(slider) {
                var slide = $(slider).find('.js-carousel__slide:visible'),
                    block_width = slide.outerWidth(),
                    sliderWrap = $(slider).find('.js-carousel__wrap');
                slide.eq(-1).clone().prependTo(sliderWrap);
                sliderWrap.css({"left": "-" + block_width + "px"});
                slide.eq(-1).remove();
                sliderWrap.animate({left: "0px"}, 300);

            }
        };

        return this.each(init);
    };
})(jQuery);