function search() {
  $(".search-button").click(function () {
    if ($(window).width() < 1199) {
      $(".search-input").toggleClass("open").focus();
    } else {
      $(".search-input").slideToggle(function () {
        $(this).focus();
      });
    }
  });
}
