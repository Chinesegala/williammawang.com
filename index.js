var width = $(window).width();
window.onscroll = function () {
  // Sets nav bar to fixed when page width exceeds #
  if (width >= 1000) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("#header").css("background", "#302f2f");
      $("#header").css("color", "#ffffff");
      $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
      $("#header").css("padding", "4vh 4vw");
      $("#navigation a").hover(
        function () {
          $(this).css("border-bottom", "2px solid rgb(128, 159, 255)");
        },
        function () {
          $(this).css("border-bottom", "2px solid transparent");
        }
      );
      // Otherwise nav bar stays static
    } else {
      $("#header").css("background", "transparent");
      $("#header").css("color", "#fff");
      $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
      $("#header").css("padding", "6vh 4vw");
      $("#navigation a").hover(
        function () {
          $(this).css("border-bottom", "2px solid #fff");
        },
        function () {
          $(this).css("border-bottom", "2px solid transparent");
        }
      );
    }
  }
};

function magnify(imglink) {
  $("#img_here").css("background", `url('${imglink}') center center`);
  $("#magnify").css("display", "flex");
  $("#magnify").addClass("animate__animated animate__fadeIn");
  setTimeout(function () {
    $("#magnify").removeClass("animate__animated animate__fadeIn");
  }, 800);
}

function closemagnify() {
  $("#magnify").addClass("animate__animated animate__fadeOut");
  setTimeout(function () {
    $("#magnify").css("display", "none");
    $("#magnify").removeClass("animate__animated animate__fadeOut");
    $("#img_here").css("background", `url('') center center`);
  }, 800);
}

setTimeout(function () {
  $("#loading").addClass("animate__animated animate__fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animate__animated animate__fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 1650);

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("body,html").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Back to top function //
var button = document.getElementById("back-to-top");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 700) {
    button.style.opacity = "1";
    document.getElementById("back-to-top").style.display = "block";
  } else {
    button.style.opacity = "0";
  }
});
button.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

