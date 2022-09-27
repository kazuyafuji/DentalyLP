jQuery(".accordion-question").on("click", function () {
  $($(this).next("div")).slideToggle();
  $($(this).find(".arrow")).toggleClass("rotate");
  $($(this).find(".arrow")).toggleClass("rotate-reset");
});

/*66.5*/

/*最初の一回しか通らない、動的じゃない
if (window.scrollY > 66.5) {
  var header = document.querySelector("header");
  header.classList.add("header-white");
  console.log("active");
}
*/

$(function () {
  /*
    headerという変数をjQueryの型で指定していると機能しない
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

/* slide-nav のjQuery 
slide-nav-click した時に、slide-boxのclassをONにする。
OFFがあれば、animateさせる。
OFfを消す。ONをつける
nav-l-01をrotate、nav-l-02をfadeoutさせる、nav-l-03をrotate
*/
$(".slide-nav-click, .nav-item").on("click", function () {
  if ($(".slide-box").hasClass("off")) {
    $(".slide-box").removeClass("off");
    $(".slide-box").animate({ right: 0 }, 200);
    $(".nav-l-01").addClass("rotate-clock");
    $(".nav-l-02").addClass("vanish");
    $(".nav-l-03").addClass("rotate-counter-clock");
  } else {
    $(".slide-box").addClass("off");
    $(".slide-box").animate({ right: -300 }, 200);
    $(".nav-l-01").removeClass("rotate-clock");
    $(".nav-l-02").removeClass("vanish");
    $(".nav-l-03").removeClass("rotate-counter-clock");
  }
});
