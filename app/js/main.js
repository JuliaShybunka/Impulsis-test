$(document).ready(function() {
  $(".slider__items").slick({
    dots: true,
    arrows: false
  });

  $(".shop__items").slick({
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false
  });
});
