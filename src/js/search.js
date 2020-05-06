function search() {
  $(".search").click(function () {
    if ($(window).width() < 1199) {
      $(".search__inp").toggleClass("open").focus();
    } else {
      $(".search__inp").slideToggle(function () {
        $(this).focus();
      });
    }
  });
}
