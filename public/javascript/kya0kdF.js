// Back To Top
const backToTop = document.querySelector("#back-top");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 560) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// ! Botão de Voltar ao topo
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#back-top").fadeIn();
    } else {
      $("#back-top").fadeOut();
    }
  });

  //Scroll body para 0px ao clicar
  $("#back-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
