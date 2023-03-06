// header
$('.site-header .hamburger').click(function () {
    $('.search-wrapper').css('display', 'none');
    $('.navigation').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.site-header .wrap-search').click(function () {
    $('.navigation').css('display', 'none');
    $('.search-wrapper').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.navigation .mask').click(function () {
    $('.navigation').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.search-wrapper .mask').click(function () {
    $('.search-wrapper').slideToggle();
    $('body').toggleClass('no-scroll');
})

// tts-player
$(".tts-player .right .select-voice").click(function (e) {
    e.preventDefault();
    $(".tts-player .right .voice-board").toggle();
});

$(".tts-player .play-button").click(function (e) {
    e.preventDefault();
    $(".tts-player .ic-audio-pause").toggleClass("ic-audio-play");
});

$(".tts-player .mute-button").click(function (e) {
    e.preventDefault();
    $(".tts-player .ic-audio-volume").toggleClass("ic-audio-volume-slash");
});

// modal
$("body").append("<div class='modal-backdrop'></div>");
$('.btn-modal').on('click', function () {
    $("body").addClass("modal-open");
    $('.modal-backdrop').fadeIn();
    var id = $(this).data('target');
    $('.modal[data-target="' + id + '"]').fadeIn();
});

$('.btn-close').on('click', function () {
    setTimeout(() => {
        $("body").removeClass("modal-open");
    }, 400);
    $('.modal-backdrop').fadeOut();
    $('.modal').fadeOut();
});

$('.modal-backdrop').on('click', function () {
    setTimeout(() => {
        $("body").removeClass("modal-open");
    }, 400);
    $('.modal-backdrop').fadeOut();
    $('.modal').fadeOut();
});

$(document).ready(function () {
    $('.box-list-story .box-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '150px',
        arrows: true,
        infinite: true,
        variableWidth: true,
        dots: true,
        arrows: true,
        prevArrow: "<span class='prevArrow'></span>",
        nextArrow: "<span class='nextArrow'></span>",
    });

    $('.multimedia .box-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        dots: false,
        prevArrow: "<span class='prevArrow'></span>",
        nextArrow: "<span class='nextArrow'></span>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.breadcrumb').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipeToSlide: true,
        infinite: true,
        variableWidth: true,
        dots: false,
        prevArrow: false,
    });

    $('.epaper-wrapper .box-content').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        prevArrow: "<span class='prevArrow'></span>",
        nextArrow: "<span class='nextArrow'></span>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

})