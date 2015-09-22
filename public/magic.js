// DEPREACTED -- STICKY SIDE MENU

(function () {

  window.onscroll = function (e) {


    var scrollTop     = $(window).scrollTop(),
        font          = ($('#font-title').offset().top) - scrollTop,
        buttons       = ($('#buttons-title').offset().top) - scrollTop,
        messages      = ($('#messages-title').offset().top) - scrollTop,
        inputs         = ($('#inputs-title').offset().top) - scrollTop,
        headers       = ($('#headers-title').offset().top) - scrollTop;

    if (headers <= 0) {
      makeActive('#headers');
    } else if (inputs <= 0) {
      makeActive('#inputs');
    } else if (messages <= 0) {
      makeActive('#messages');
    } else if (buttons <= 0) {
      makeActive('#buttons');
    } else if (font <= 0) {
      makeActive('#font');
    }


    function makeActive (id) {
      $("#side-menu>div").removeClass("active");
      $(id).addClass('active');
    }


    if (($(window).innerHeight() + scrollTop + 336) >= $("body").height()) {
      var bottom = scrollTop - 900;
      console.log(bottom);

      $("#side-menu>div").removeClass("active");
      $('#headers').addClass('active');

      // $('#side-menu').css('top', 'inherit');
      // $('#side-menu').css('bottom', bottom);

    }
  }


})();
