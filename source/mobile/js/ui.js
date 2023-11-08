// =============== js default ===================
// INFOR : for header
var showNavigation = $(".site-header .ic-menu");
var navigation = $(".navigation");
var backdrop = $(".backdrop");
var body = $("body");
showNavigation.click(function (e) {
  e.preventDefault();
  navigation.show();
  body.addClass("show-menu");
});

var showSubMenu = $(".ic-down");
showSubMenu.click(function (e) {
  e.preventDefault();
  $(this).next().slideToggle();
  $(this).toggleClass("show-submenu");
  $(this).prev().toggleClass("active");
});

backdrop.click(function (e) {
  navigation.hide();
  body.removeClass("show-menu");
});

// INFO : for audio
$(".audio .right .select-voice").click(function (e) {
  e.preventDefault();
  $(".audio .right .voice-board").toggle();
});

$(".audio .play-button").click(function (e) {
  e.preventDefault();
  $(".audio .ic-audio-pause").toggleClass("ic-audio-play");
});

$(".audio .mute-button").click(function (e) {
  e.preventDefault();
  $(".audio .ic-audio-volume").toggleClass("ic-audio-volume-slash");
});

$(".modal-body .ic-eye").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("slash");
});

// INFO : for modal
$("body").append("<div class='modal-backdrop'></div>");
$(".btn-modal").on("click", function () {
  $("body").addClass("modal-open");
  $(".modal-backdrop").fadeIn();
  var id = $(this).data("target");
  $('.modal[data-target="' + id + '"]').fadeIn();
  $(".navigation.sticky.fixed").addClass("show-modal");
});

$(".modal-backdrop").on("click", function () {
  setTimeout(() => {
    $("body").removeClass("modal-open");
    $(".navigation.sticky.fixed").removeClass("show-modal");
  }, 400);
  $(".modal-backdrop").fadeOut();
  $(".modal").fadeOut();
});

$(".btn-close").on("click", function () {
  setTimeout(() => {
    $("body").removeClass("modal-open");
    $(".navigation.sticky.fixed").removeClass("show-modal");
  }, 400);
  $(".modal-backdrop").fadeOut();
  $(".modal").fadeOut();
});

// INFOR : for comment
var input = $(".wrap-comment .input-comment");
input.on("click", function () {
  input.addClass("active");
});

// INFOR : slider
if ($(".networks").length) {
  const swiperNetworks = new Swiper(".networks .swiper", {
    slidesPerView: "auto",
    spaceBetween: 6,
    loop: true,
  });
}

if ($(".box-webstory").length) {
  const swiperbWebStory = new Swiper(".box-webstory.swiper", {
    slidesPerView: 1.5,
    spaceBetween: 16,
    loop: true,
  });
}
if ($(".mega-story").length) {
  const swiperMegaStory = new Swiper(".mega-story.swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: true,
  });
}

if ($(".short-video").length) {
  const swiperShortVideo = new Swiper(".short-video.swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
  });
}

if ($(".topics").length) {
  const swiperTopics = new Swiper(".topics.swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
  });
}

if ($(".podcast-series").length) {
  const swiperPodcastSeries = new Swiper(".podcast-series.swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
  });
}

// INFOR : check dark theme
var body = $("body");
if (
  body.hasClass("media-page") ||
  body.hasClass("video-page") ||
  // body.hasClass("timeline-page") ||
  body.hasClass("photo-page")
) {
  $("html").addClass("dark-theme");
}
// INFOR : back to top
var btn = $(".back-to-top");
$(window).scroll(function () {
  if ($(window).scrollTop() > 800) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// INFO : region filter
$(".search-filter .submit").click(function (e) {
  e.preventDefault();
  $(".search-filter .menu").fadeToggle("fast");
});

// INFO : show noti on header
var showNoti = $(".site-header .ic-bell");
showNoti.click(function (e) {
  e.preventDefault();
  $(".site-header .pick-news").fadeToggle("fast");
});

// INFO : short video detail
var mySwiper = new Swiper(".mySwiper", {
  loop: true,
  direction: "vertical",
});

// short video
if ($(".video-detail").length) {
  let w = window.innerWidth;
  $(".video-modal").css("max-width", w);
}

$(".wrapper-short-video .story").click(function (e) {
  e.preventDefault();
  setTimeout(() => {
    if ($(".video-detail .swiper-slide-active").length) {
      background();
    }
  }, 100);
});

// get img make background
const background = function () {
  let porter = $(".video-detail .swiper-slide-active .content video").attr(
    "poster"
  );
  $(".video-detail .bg-blur").css(
    "background",
    "url(" + porter + ") center center/ auto 100% no-repeat"
  );
};

mySwiper.on("slideChange", function (e) {
  setTimeout(() => {
    background();
  }, 500);
});

// INFO copy source
if ($(".article__source .getlink").length > 0) {
  $(".article__source .btn").on("click", function () {
    $(".article__source .source-toggle").toggleClass("show");
  });

  var $temp = $("<input>");
  var $url = $(".article__source .source-toggle a").attr("href");
  $(".article__source .getlink").on("click", function () {
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    $(".article__source .getlink").html("Đã copy");
  });
}
