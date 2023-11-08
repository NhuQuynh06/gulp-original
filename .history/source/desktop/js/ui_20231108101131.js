// =============== js default ===================

// INFO : for header home page
$(window).scroll(function () {
  var sticky = $(".header-home.site-header .sticky");
  $(".small-logo").addClass("show");
  sticky.addClass("fixed");
  if ($(window).scrollTop() == 0) {
    $(".site-header .sticky").removeClass("fixed");
    $(".small-logo").removeClass("show");
  }
});

// INFO : for header
$(window).scroll(function () {
  var sticky = $(".site-header .sticky");
  sticky.addClass("fixed");
  if ($(window).scrollTop() == 0) {
    sticky.removeClass("fixed");
  }
});

// INFO : for navigation
var showMenu = $(".site-header .ic-menu");
var closeMenu = $(".navigation");
var menu = $(".navigation");

showMenu.click(function (e) {
  e.preventDefault();
  menu.fadeToggle();
  $("body").toggleClass("show-menu");
  $(".site-header .sticky.fixed").toggleClass("w");
});

closeMenu.click(function (e) {
  menu.fadeToggle();
  $("body").toggleClass("show-menu");
  $(".site-header .sticky").removeClass("w");
});

// INFO : for comment
var input = $(".wrap-comment .input-comment");
input.on("click", function () {
  input.addClass("active");
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

// INFO : show search
$(".search-wrapper input").focusin(function () {
  $(this).addClass("show");
  $(".site-header .menu").addClass("insivible");
});
$(".search-wrapper input").focusout(function () {
  $(this).removeClass("show");
  $(".site-header .menu").removeClass("insivible");
});

// INFO :  back to top
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

// INFO copy-source
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

// INFO : check dark theme
var body = $("body");
if (
  body.hasClass("media-page") ||
  body.hasClass("video-page") ||
  // body.hasClass("timeline-page") ||
  body.hasClass("photo-page")
) {
  $("html").addClass("dark-theme");
}
