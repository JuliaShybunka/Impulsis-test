$(document).ready(function() {
  $(".slider__items").slick({
    dots: true,
    arrows: false
  });

  var slickOpts = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    easing: "swing",
    speed: 700,
    arrows: true,
    dots: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),

    customPaging: function(slick, index) {
      return "<a>" + (index + 1) + "</a>";
    }
  };
  // Init slick carousel
  $(".shop__items").slick(slickOpts);
  //$(".header__top-numbers").hide();

  $(".header__top-number").click(function() {
    $(".header__top-numbers").toggle();
  });

  //$(".header__bottom-signup").hide();
  $(".header__bottom-signup-mobile").click(function() {
    $(".header__bottom-signup").toggle();
  });
});
