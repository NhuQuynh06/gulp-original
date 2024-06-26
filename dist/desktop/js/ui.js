// INFO : default for article
// swiper
if ($(".article").length) {
  var swiper = new Swiper(".article__slider", {
    autoHeight: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}