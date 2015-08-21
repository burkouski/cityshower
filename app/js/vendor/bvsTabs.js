(function ($) {
    jQuery.fn.bvsTabs = function (options) {
        options = $.extend({
            prefix: "js-tabs",
            anchor: false,
            scroll: false,
            backward: false
        }, options);
        var init = function () {

            var tab = this,
                tabs = $(tab).find('.' + options.prefix + '__tab'),
                tabsContent = $(tab).find('.' + options.prefix + '__content');

            $(tab).on('click', '.' + options.prefix + '__tab', function (e) {
                e.preventDefault();
                //alert(true);
                var _this = $(this),
                    tabIndex = _this.attr('data-index');
                tabsContent.removeClass('active');
                tabsContent.eq(tabIndex).addClass('active');
                tabs.removeClass('active');
                tabs.each(function(index){
                    var _this = $(this);
                    if (_this.attr('data-index') === tabIndex) {
                        _this.addClass('active');
                        //console.log('true')
                    }
                });
                _this.addClass('active');
                if (options.scroll) {
                    //console.log(_this.offset().top)
                    scrollTo(tabsContent.eq(tabIndex),_this)
                }

            });
            if (options.backward) {
                $(tab).on('click', '.' + options.prefix + '__content', function (e) {
                    var _this = $(this),
                        tabContentIndex = _this.index();
                    tabsContent.removeClass('active');
                    _this.addClass('active');
                    tabs.removeClass('active');
                    tabs.each(function(index){
                        var _this = $(this);
                        if (_this.attr('data-index') == tabContentIndex) {
                            _this.addClass('active');
                            //console.log('true')
                        }
                    });
                    if (options.scroll) {
                        scrollTo(tabs.eq(tabContentIndex), _this)
                    }
                });
            }

        }

        function scrollTo(firstElem, secondElem) {
            var body = $("html, body"),
                firstTop = firstElem.offset().top,
                secondTop = secondElem.offset().top,
                scrollTop = Math.min(firstTop, secondTop)+ (Math.max(firstTop, secondTop)-Math.min(firstTop, secondTop))/2-400;
            //console.log( firstTop, secondTop, scrollTop);
            body.animate({scrollTop: scrollTop}, '500', 'swing');
        }

        return this.each(init);
        // в итоге, метод responsiveBlock вернет текущий объект jQuery обратно
    };
})(jQuery);