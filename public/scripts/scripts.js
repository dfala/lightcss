(function () {

  var headersElem   = $('#headers'),
      inputsElem    = $('#inputs'),
      messagesElem  = $('#messages'),
      buttonsElem   = $('#buttons'),
      fontElem      = $('#font');


  // Smooth scrolling
  headersElem.on('click', function () {
    scrollTo('#headers-title');
  });

  inputsElem.on('click', function () {
    scrollTo('#inputs-title');
  });

  messagesElem.on('click', function () {
    scrollTo('#messages-title');
  });

  buttonsElem.on('click', function () {
    scrollTo('#buttons-title');
  });

  fontElem.on('click', function () {
    scrollTo('#font-title');
  });


  function scrollTo (destination) {
    $('html, body').animate({
      scrollTop: ( $(destination).offset().top - 90)
    }, 750);
  }

  // Make menu active
  function makeActive (elem) {
    $("#side-menu>div").removeClass("active");
    elem.addClass('active');
  }


  window.onscroll = function (e) {

    var scrollTop     = $(window).scrollTop(),
        font          = ($('#font-title').offset().top) - scrollTop - 200,
        buttons       = ($('#buttons-title').offset().top) - scrollTop - 200,
        messages      = ($('#messages-title').offset().top) - scrollTop - 200,
        inputs         = ($('#inputs-title').offset().top) - scrollTop - 200,
        headers       = ($('#headers-title').offset().top) - scrollTop - 200;

    if (($(window).innerHeight() + scrollTop + 100) >= $("body").height()) {
      makeActive(headersElem);
    } else if (headers <= 0) {
      makeActive(headersElem);
    } else if (inputs <= 0) {
      makeActive(inputsElem);
    } else if (messages <= 0) {
      makeActive(messagesElem);
    } else if (buttons <= 0) {
      makeActive(buttonsElem);
    } else if (font <= 0) {
      makeActive(fontElem);
    }
  }



})();
