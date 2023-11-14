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

// test langue
var en = "Many detop over the years, somimes by adent by accent".split(" ");
var phap = "útkomt, et hoe't moatte. dy't  om't it pine pine is,".split(" ");
var tbn = "Explicaré lo dicho sobre la verdad y comoa feliprecia ni".split(" ");
var cn = "真 理 的 主 要 建造 者沒有 人 人會 遭遇";
var nga = "о для того, чбы вы моли виеть, оствие и вхвяет боль".split(" ");
var content = "о для того, чбы вы моли виеть, оствие и вхвяет боль".split(" ");

function textNodesUnder(el) {
  const children = []; // Type: Node[]
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    children.push(walker.currentNode);
  }
  return children;
}
const textNodes = textNodesUnder(document.body);
console.log(textNodes);
textNodes.forEach((textNode) => {
  const text = textNode.textContent.trim();
  if (text) {
    console.log(text);
    const replaceText = text
      .split(" ")
      .map(() => content[Math.floor(Math.random() * 10)])
      .join(" ");
    console.log(replaceText);
    textNode.textContent = replaceText;
    zz;
  }
});

var time = ".story .time";
$(time).each(function () {
  console.log($(this).text("14/11/2023 09:11"));
});
