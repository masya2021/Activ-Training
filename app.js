/* = = = = = = =  Скопированная часть  = = = = = = =   */
/* = = = = = = =  Скопированная часть  = = = = = = =   */
/* = = = = = = =  Скопированная часть  = = = = = = =   */

$(function () {
  console.log("працуЕ!!");

  /* = = = F i x e d  H e a d e r = = = */

  let header = $("#header");
  let masthead = $("#masthead");
  let mastheadH = masthead.innerHeight();
  let scrollPosition = $(window).scrollTop();

  checkScroll(scrollPosition, mastheadH);

  $(window).on("scroll resize", function () {
    mastheadH = masthead.innerHeight();
    scrollPosition = $(this).scrollTop(); // следим за скроллом

    checkScroll(scrollPosition, mastheadH);
  });

  function checkScroll(scrollPosition, mastheadH) {
    if (scrollPosition > mastheadH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /*  ці гЭтак  */

  //   $(window).on("scroll load resize", function () {
  //     mastheadH = masthead.innerHeight();
  //     scrollPosition = $(this).scrollTop(); // следим за скроллом

  //     if (scrollPosition > mastheadH) {
  //       header.addClass("fixed");
  //     } else {
  //       header.removeClass("fixed");
  //     }

  //     console.log(scrollPosition);
  //   });

  //   console.log(mastheadH);
  //   console.log(scrollPosition);
  //   header.addClass("fixed");

  //

  /* = = = S c r o l l  S m o o t h = = = */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    console.log(elementId);
    navigation.removeClass("show"); //   --- скрываем бургер при нажатии на раздел

    $("html, body").animate({ scrollTop: elementOffset - 57 });
  });

  /* = = = N a v  T o g g l e = = = */

  let navigation = $(".navigation");
  let navToggle = $("#burger__navigation");

  navToggle.on("click", function (event) {
    event.preventDefault();

    navigation.toggleClass("show");
  });
});
