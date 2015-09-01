$(function(){
    $('.js-tabs').bvsTabs();
    //$('.js-modal').magnificPopup({
    //    type:'image',
    //    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    //});
    $(".js-modal").fancybox(
        {
            maxWidth: 1000,
            maxHeight: 900,
            fitToView: false,
            autoSize: true,
            //closeClick: false,
            padding: 0,
            closeBtn: false,
            helpers: {
                overlay: {
                    locked: false,
                }
            }
        }
    );
    $(".js-lightbox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    })
    $('.js-carousel').bvsCarousel();

    //$('.js-tabs').on('click', function(){
    //
    //})
    $('.js-select').CustomSelect({
        visRows: 6
    });
});
