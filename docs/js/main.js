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

/*次、headerのクラスの付け替えから　
これは機能してない*/
$(function () {
  /*
    headerという変数をjQueryの型で指定していないから機能しない
  var header = document.querySelector("header");
  さらに、scrollTop()として関数を実行しないと数値は取得できない！
  */
  var header = $("header");
  /*
  確認用script
  $(window).scroll(function () {
    console.log($(this).scrollTop());
    console.log(header.hasClass("header-normal"));
    console.log("white", header.hasClass("header-white"));
  });
  */

  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      header.addClass("header-white");
    } else {
      header.removeClass("header-white");
    }
  });
});
