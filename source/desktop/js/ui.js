// INFOR : for header
var stickyOffset = $('.sticky').offset().top;
$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
    if (scroll >= stickyOffset) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

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


// INFOR :slick slider
$('.box-multimedia .box-content').slick({
    centerMode: true,
    centerPadding: 0,
    speed: 800,
    autoplaySpeed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: "<span class='prevArrow'></span>",
    nextArrow: "<span class='nextArrow'></span>",
});

$('.box-media .box-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    speed: 500,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
});