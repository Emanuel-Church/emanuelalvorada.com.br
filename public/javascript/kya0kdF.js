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
var btn = $("#back-top");
btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});