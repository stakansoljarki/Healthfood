$(function () {
  burger();
  search();
  slick();
  accordion();
});

if ($(window).width() < 1200) {
  const slider = document.querySelector(".header__menu");
  slider.remove();
  document.querySelector(".subheader>.container").appendChild(slider);
  const search = document.querySelector(".search-button");
  search.remove();
  document.querySelector(".header>.container").appendChild(search);
  const searchInp = document.querySelector(".search-input");
  searchInp.remove();
  document.querySelector(".header>.container").appendChild(searchInp);
}
