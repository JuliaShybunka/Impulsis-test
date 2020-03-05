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
});
