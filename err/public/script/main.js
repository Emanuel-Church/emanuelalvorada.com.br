menuService();
yearService();
scrollNav();
serviceBtnTop();
btnTop();

function menuService() {
  const nav = document.querySelector("#header ._menu");
  const toggle = document.querySelectorAll("._menu .toggle");

  for (const element of toggle) {
    element.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }

  const links = document.querySelectorAll("nav ul li a");

  for (const link of links) {
    link.addEventListener("click", function () {
      nav.classList.remove("show");
    });
  }
}

function yearService() {
  const year = document.getElementById("copyright");
  const yearCurrent = new Date();

  year.innerHTML = yearCurrent.getFullYear();
}

function scrollNav() {
  var $doc = $("html, body");
  $("a").click(function () {
    $doc.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
    return false;
  });
}

function serviceBtnTop() {
  const backToTop = document.querySelector("#ime-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 600) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });
}

function btnTop() {
  jQuery(document).ready(function ($) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $("#ime-top").fadeIn();
      } else {
        $("#ime-top").fadeOut();
      }
    });
    //Scroll body para 0px ao clicar
    $("#ime-top").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });
}
