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

});