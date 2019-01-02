$(function () {
    const downHeight = window.innerHeight + $('.content').height();

    $('.content').css('top', downHeight);

    var menuSwitch = false;

    // $('.nav-menu li').mouseover(function () {
    //     $(this).css('color', '#0060CF');
    // });

    $(".nav-menu .btn-on").click(function () {
        var id = $(this).attr('id');
        // 최초 메뉴 클릭 시 메뉴가 열리고 그 후 부터는 화면 안에 내용이 전환 된다.
        if (menuSwitch == false) {
            menuSwitch = true;
            // 헤더 부분의 스타일이 변경 되며, 모바일에서는 다르게 작동한다.
            $('.nav-menu .btn-on, .nav-menu .btn-on a, .nav-menu .lang li a').stop().animate({color: '#000'}, 1500, function () {
                $('.nav-menu').css('background', '#fff');
                $('.menu-bar').css('color', '#000');
                $('#white-logo').addClass('dis-none');
                $('#black-logo').removeClass('dis-none');
                if (window.innerWidth < 1178) {
                    $('.header').css('background', '#fff');
                }
            });
            $('#main-page-circle').css('display', 'none');
            $('#' + id + '-circle').css('display', 'flex');
            $('.content').css('display', 'block');
            // 컨텐츠의 컬러는 각 메뉴에 data-target의 값에 따라 결정 된다.
            $('.color').css('color', $(this).attr('data-target'));
            $('.color-line').css('background', $(this).attr('data-target'));
            $('#' + id + '-content').fadeIn();
            $('.content').stop().animate({top: 0}, 100);
            if (window.innerWidth < 1178) {
                $('.nav-menu').slideUp();
                $('#menu-on').removeClass('dis-none');
                $('#menu-off').addClass('dis-none');
            }
        } else {
            // 이미 화면이 띄워져 있다면 안에 있던 컨텐츠만 변경 되며, 이 때도 data-target의 컬러값을 따라간다.
            $('html, body').animate({scrollTop: 0}, 400);
            $('.color').css('color', $(this).attr('data-target'));
            $('.color-line').css('background', $(this).attr('data-target'));
            $('.content-section').css('display', 'none');
            $('.circle').css('display', 'none');
            $('#' + id + '-circle').css('display', 'flex');
            $('#' + id + '-content').css('display', 'block');
            $('#' + id + '-content .ani').addClass('animated fadeInUp');
            if (window.innerWidth < 1178) {
                $('.nav-menu').slideUp();
                $('.header').css('background', '#fff');
                $('.menu-bar').css('color', '#000');
                $('#white-logo').addClass('dis-none');
                $('#black-logo').removeClass('dis-none');
                $('#menu-on').removeClass('dis-none');
                $('#menu-off').addClass('dis-none');
            }
        }
    });

    $("#current-lang").click(function () {
       $("#lang-list").stop().slideToggle();
    });

    // 마우스 오버시 데스트탑과 모바일 버전 별도의 메뉴 스타일 변경
    $('.nav-menu .btn-on').mouseover(function () {
        var color = $(this).attr('data-target');
        if (window.innerWidth >= 1178) {
            $(this).css('color', color);
        } else {
            $(this).stop().animate({backgroundColor: color});
            // $(this).css('background', color);
        }
    });
    $('.nav-menu li').mouseout(function () {
        if (window.innerWidth >= 1178) {
            if ($('.content').css('display') == 'block') {
                $(this).css('color', '#000');
            } else {
                $(this).css('color', '#fff');
            }
        } else {
            $(this).stop().css('background', '#000');
        }
    });

    // 모바일 메뉴바 클릭시 메뉴 스타일 변경
    $('.menu-bar').click(function () {
        if (window.innerWidth < 1178) {
            $('.nav-menu').stop().slideToggle();
            $('.nav-menu li').css('color', '#fff').css('background', '#000');
            $('.menu-bar').css('color', '#fff');
            $('.menu-bar').toggleClass('dis-none');
            if (menuSwitch == true) {
                if ($('.header').css('background-color') != 'rgb(0, 0, 0)') {
                    $('.header').css('background', '#000');
                    $('.menu-bar').css('color', '#fff')
                    $('#menu-on').addClass('dis-none');
                    $('#menu-off').removeClass('dis-none');
                    $('#white-logo').removeClass('dis-none');
                    $('#black-logo').addClass('dis-none');
                } else {
                    $('.header').css('background', '#fff');
                    $('.menu-bar').css('color', '#000');
                    $('#menu-on').removeClass('dis-none');
                    $('#menu-off').addClass('dis-none');
                    $('#white-logo').addClass('dis-none');
                    $('#black-logo').removeClass('dis-none');
                }
            }
        }
    });
    // $('#about-page').click(function () {
    //    $('.content-section').css('display', 'none');
    //    $('#about-content').fadeIn();
    // });
});

$(function () {

    // 메인 화면의 텍스트 사이즈 width와 height에 따라 변동된다.
    var autoFont = function () {
        if(window.innerWidth > 1178) {
            $(".main-title").css('font-size', Math.max(Math.min($("body").height() * 4 + Math.min($("body").width())) / (3.3 * 10)));
            $(".sub-title").css('font-size', Math.max(Math.min($("body").height() * 4 + Math.min($("body").width())) / (3.8 * 40)));
        } else {
            $(".main-title").css('font-size', Math.max(Math.min($("body").width()) / (1.1 * 7)));
            $(".sub-title").css('font-size', Math.max(Math.min($("body").width()) / (1.3 * 20)));
        }
        /* else {
            $(".main-title").css('font-size', '270px');
            $(".sub-title").css('font-size', '50px');
        }*/
    };
    autoFont();
    $(window).resize(function () {
        autoFont();
    });
});