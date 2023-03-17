"use strict";

// ----------------------------------
// INFO : Js global
// ----------------------------------

// INFOR : for header
var stickyOffset = $('.sticky').offset().top;
$(window).scroll(function () {
  var sticky = $('.sticky'),
    scroll = $(window).scrollTop();
  if (scroll >= stickyOffset) sticky.addClass('fixed');else sticky.removeClass('fixed');
});

// INFO : for check gif img
var img = $(".story .story__thumb img");
$.each(img, function () {
  var dataSrc = this.dataset.src;
  if (dataSrc.slice(-4) === ".gif") {
    $(this).closest("figure").css("background", "#eee");
  }
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
$('.btn-modal').on('click', function () {
  $("body").addClass("modal-open");
  $('.modal-backdrop').fadeIn();
  var id = $(this).data('target');
  $('.modal[data-target="' + id + '"]').fadeIn();
  $(".navigation.sticky.fixed").addClass("show-modal");
});
$('.btn-close').on('click', function () {
  setTimeout(function () {
    $("body").removeClass("modal-open");
    $(".navigation.sticky.fixed").removeClass("show-modal");
  }, 400);
  $('.modal-backdrop').fadeOut();
  $('.modal').fadeOut();
});
$('.modal-backdrop').on('click', function () {
  setTimeout(function () {
    $("body").removeClass("modal-open");
    $(".navigation.sticky.fixed").removeClass("show-modal");
  }, 400);
  $('.modal-backdrop').fadeOut();
  $('.modal').fadeOut();
});

// style header
$("body").append("<div class='backdrop'></div>");
$(".extend .ic-menu").click(function (e) {
  e.preventDefault();
  $(".big-menu").fadeToggle("show");
  $("body").toggleClass("modal-open");
  $('.backdrop').fadeToggle();
  $(".navigation.sticky.fixed").toggleClass("w");
});
$(".backdrop").on('click', function () {
  setTimeout(function () {
    $(".big-menu").fadeToggle("show");
    $("body").toggleClass("modal-open");
    $('.backdrop').fadeToggle();
    $(".navigation.sticky.fixed").toggleClass("w");
  }, 150);
});
// ----------------------------------
// INFO : Js for project
// ----------------------------------