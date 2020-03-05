$(document).ready(function() {
  $(".slider__items").slick({
    dots: true,
    arrows: false
  });

  var slickOpts = {
    slidesToShow: 4,
    slidesToScroll: 4,
    //centerMode: true,
    easing: "swing", // see http://api.jquery.com/animate/
    speed: 700,
    arrows: true,
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev">Previous</button></div>',

    customPaging: function(slick, index) {
      return "<a>" + (index + 1) + "</a>";
    }
  };
  // Init slick carousel
  $(".shop__items").slick(slickOpts);
});
