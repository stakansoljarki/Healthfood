$(function () {
  burger();
  search();
  slick();
});
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    acc[i].classList.remove("active");
    this.classList.add("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
if ($(window).width() < 1200) {
  const slider = document.querySelector(".header__menu");
  slider.remove();
  document.querySelector(".subheader>.container").appendChild(slider);
  const search = document.querySelector(".search");
  search.remove();
  document.querySelector(".header>.container").appendChild(search);
  const searchInp = document.querySelector(".search__inp");
  searchInp.remove();
  document.querySelector(".header>.container").appendChild(searchInp);
}
