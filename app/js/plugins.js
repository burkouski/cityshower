$(function(){
    $('.js-tabs').bvsTabs();

    $(".js-modal").fancybox(
        //{
        //    maxWidth: 1000,
        //    maxHeight: 900,
        //    fitToView: false,
        //    autoSize: true,
        //    closeClick: false,
        //    padding: 0,
        //    closeBtn: false,
        //    helpers: {
        //        overlay: {
        //            locked: false
        //        }
        //    }
        //}
    );
    $(".js-lightbox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    })
    $('.js-carousel').bvsCarousel();

    $('.js-tabs').on('click', function(){
        $.fancybox.update();
    })
    $('.js-select').CustomSelect({
        visRows: 6
    });
})