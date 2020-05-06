function slick() {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return "<a>" + (i + 1) + "</a>";
    },
  });
}
