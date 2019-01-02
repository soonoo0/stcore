$(function () {
    var autoFont = function () {
        $(".login-box h1").css('font-size', Math.max(Math.min($("body").width() / (1.1 * 15))));
    };
    autoFont();
    if (window.innerWidth < 2200 && window.innerWidth > 800) {
        autoFont();
    }
    $(window).resize(function () {
        if (window.innerWidth < 2200 && window.innerWidth > 800) {
            autoFont();
        }
    });
});