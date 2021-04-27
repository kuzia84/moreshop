function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(".banners__slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
});
$(".slider-main").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 5000,
});
$(".showroom__slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
});

$(".swichers-slider__link").click(function (e) {
  e.preventDefault();
  $(".swichers-slider__link").removeClass("active");
  $(this).addClass("active");
});
$("#swicher-link1").click(function () {
  $(".main-slider__tab").removeClass("active");
  $("#tab1").addClass("active");
});
$("#swicher-link2").click(function () {
  $(".main-slider__tab").removeClass("active");
  $("#tab2").addClass("active");
});
$("#swicher-link3").click(function () {
  $(".main-slider__tab").removeClass("active");
  $("#tab3").addClass("active");
});
$("#swicher-link4").click(function () {
  $(".main-slider__tab").removeClass("active");
  $("#tab4").addClass("active");
});
