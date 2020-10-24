(function ($) {
    $("#scrollbtn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#end").offset().top
        }, 1000);
    });

    $("#scrollatas").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#atas").offset().top
        }, 1000);
    });
})(jQuery);    
