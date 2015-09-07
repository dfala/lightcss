// DEPREACTED -- STICKY SIDE MENU

(function () {

  window.onscroll = function (e) {  
    
    var scroll = $(window).scrollTop();

    if (($(window).innerHeight() + scroll + 336) >= $("body").height()) {
      var bottom = scroll - 1210;

      // $('#side-menu').css('top', 'inherit');
      // $('#side-menu').css('bottom', bottom);

    }
  } 


})();