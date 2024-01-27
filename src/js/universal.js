$(document).ready(function () {
   $("a").on("click", function (event) {
      if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $("body,html").animate({
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
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
});

const circleButton = document.querySelector('.circle-button');
const menu = document.querySelector('.menu');

circleButton.addEventListener('click', () => {
  circleButton.classList.toggle('close');
  menu.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !circleButton.contains(event.target)) {
    circleButton.classList.remove('close');
    menu.classList.remove('show');
  }
});