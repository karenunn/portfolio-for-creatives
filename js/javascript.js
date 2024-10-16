$(document).ready(function () {
  $(".experiment-image-1").click(function () {
    $(".experiment-image-2").fadeToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });
});

$(document).mousemove(function (event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

  $(".radial-gradient").css(
    "background",
    "radial-gradient(at " +
      mouseXpercentage +
      "% " +
      mouseYpercentage +
      "%, #c0d1b6, #ffffff)"
  );
});
