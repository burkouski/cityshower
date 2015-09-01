$(function(){
    $('.js-modal__close').click(function(){
        $.fancybox.close();
    });

    $('.js-login').click(function(){
        console.log($('#user-modal .js-tabs__tab').eq(0));
        $('#user-modal .js-tabs__tab').eq(0).trigger('click')
    })
    $('.js-registration').click(function(){
        console.log($('#user-modal .js-tabs__tab'));
        $('#user-modal .js-tabs__tab').eq(1).trigger('click')
    })


    var stickyEl = $('.main-nav'),
        stickyElPos = stickyEl.offset().top;
    $(window).on('scroll', function(){
        var scrollPos = $(window).scrollTop();
        if (scrollPos >= stickyElPos) stickyEl.addClass('fixed');
        else stickyEl.removeClass('fixed');
    });

    $(".js-sort-tab").click(function(){
            var tab = $(".js-sort-tab"),
                _this = $(this),
                content = $('.js-sort-tab__content'),
                label = $(_this).attr('data-label');

            if(_this.hasClass('active')) {
                _this.removeClass('active');
                tab.removeClass('active');
                content.each(function(){
                    $(this).show()
                })
            }
            else {
                tab.removeClass('active');
                _this.addClass('active');
                content.each(function(){
                    if($(this).attr('data-label') === label) {
                        $(this).show()
                    }
                    else {
                        $(this).hide()
                    }
                })
            }
            console.log('dfhfhdfh')
        }


    );

    var slideQuantity = $('.js-slider').eq(0).find('.js-slider__slide').length;
    curSlider = 0,
        nextSlide = 1,
        prevSlide =slideQuantity -1;
    $('.js-slider').on('click','.js-slider__ctrl:not(.active)', function(){
        var _this = $(this),
            index = parseInt(_this.attr('data-index'));
        setCurCtrl(index);
        animateSlide(index)
    })
    function animateSlide(index) {
        var tm = new TimelineLite({onComplete:setCurSlide});
        nextSlide = index;
        if (index > curSlider) {
            tm.fromTo($(".js-slider__slide[data-index='"+curSlider+"']"), 1, {left:'0%'}, {left:'-100%'})
                .fromTo($(".js-slider__slide[data-index='"+index+"']"), 1, {left:'100%'}, {left:'0'}, '-=1')
        }
        else {
            tm.fromTo($(".js-slider__slide[data-index='"+curSlider+"']"), 1, {left:'0%'}, {left:'100%'})
                .fromTo($(".js-slider__slide[data-index='"+index+"']"), 1, {left:'-100%'}, {left:'0%'}, '-=1')
        }
    }
    var timer = setInterval(initTimer, 5000);
    function changeSlide(number){
        if (number == (slideQuantity-1)) {
            nextSlide = number
        }
    };
    function setCurSlide() {
        clearInterval(timer);
        timer = setInterval(initTimer, 5000);
        curSlider = nextSlide;
        console.log(curSlider);
    };
    function initTimer () {
        var nextSlider = curSlider + 1;
        if (nextSlider == slideQuantity) nextSlider = 0;
        setCurCtrl(nextSlider);
        animateSlide(nextSlider);
    };
    function setCurCtrl(index) {
        $('.js-slider__ctrl').removeClass('active');
        $(".js-slider__ctrl[data-index='"+index+"']").addClass('active');
    };

    $('.js-other').each(function(){
        console.log(false);
        var _this = $(this),
            showBtn = $(this).find('.js-other__show'),
            count = showBtn.attr('data-count')-1,
            el = _this.find('.js-other__item'),
            elLength = el.length;
        if(elLength <= count) {
            showBtn.hide()
        }
        else {
            _this.find('.js-other__item:gt('+count+')').hide();
            showBtn.on('click', function(e){
                e.preventDefault();
                _this.find('.js-other__item:gt('+count+')').show(300);
                $(this).hide();
            })
        }
    })

    $('.js-toggle').each(function(){
        var _this = $(this),
            showBtn = $(this).find('.js-toggle__trigger');
        showBtn.each(function(){
            if ($(this).hasClass('active')) {
                $(this).parent('.js-toggle').find('> .js-toggle__item').show()
            }
            else {
                $(this).parent('.js-toggle').find('> .js-toggle__item').hide()
            }
        })
    });

    $('.js-seo__content').each(function(){
        $(this).find('p:gt(0)').hide();
    });
    $('.js-seo__btn').on('click', function(e){
        e.preventDefault();
        var _this = $(this);
        if(_this.hasClass('active')) {
            _this.parents('.js-seo').find('p:gt(0)').hide(300);
            _this.removeClass('active').text('Подробнее')
        }
        else {
            _this.parents('.js-seo').find('p:gt(0)').show(300);
            _this.addClass('active').text('Скрыть')
        }
    });

    $('.js-toggle__trigger').on('click', function(e){
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).parent('.js-toggle').find('> .js-toggle__item').hide(300);
            $(this).removeClass('active');
        }
        else {
            $(this).parent('.js-toggle').find('> .js-toggle__item').show(300);
            $(this).addClass('active');
        }
    });

    $('.js-accardion__trigger').on('click', function(){
        $('.js-accardion__content').hide(300);
        $(this).parent('.js-accardion__item').find('.js-accardion__content').show(300);
    });

    $('.js-price__trigger').on('click', function(e){
        e.preventDefault();
        $('.js-price__trigger').removeClass('active');
        $(this).addClass('active');
        $('.js-price').text($(this).attr('data-price'));
    })
});