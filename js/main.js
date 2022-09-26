jQuery(".accordion-question").on("click", function () {
  $($(this).next("div")).slideToggle();
  $($(this).find(".arrow")).toggleClass("rotate");
  $($(this).find(".arrow")).toggleClass("rotate-reset");
});

/*
setInterval(() => {
  console.log(window.scrollY);
}, 1000);
*/

/*66.5*/

/*最初の一回しか通らない、動的じゃない
if (window.scrollY > 66.5) {
  var header = document.querySelector("header");
  header.classList.add("header-white");
  console.log("active");
}
*/

/*次、headerのクラスの付け替えから　これは機能してない*/
$(function () {
  var header = document.querySelector("header");
  $(window).scroll(function () {
    if ($(this).scrollTop > 67) {
      header.addClass("header-white");
    } else {
      header.removeClass();
    }
  });
});
