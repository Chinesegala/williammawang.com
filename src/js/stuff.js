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

let blogAnimationTriggered = false;

// add animate__fadeIn class to #free-sect element
document.querySelector('#blog-sect').classList.add('animate__fadeIn');

window.addEventListener('scroll', () => {
  if (window.scrollY < 500 && !blogAnimationTriggered) {
     // remove animate__fadeOut class from #free-sect element
     document.querySelector('#blog-sect').classList.remove('animate__fadeOut');
     // add animate__fadeIn class to #free-sect element
     document.querySelector('#blog-sect').classList.add('animate__fadeIn');
     blogAnimationTriggered = true;
  } else if (window.scrollY >= 500 && blogAnimationTriggered) {
     // remove animate__fadeIn class from #free-sect element
     document.querySelector('#blog-sect').classList.remove('animate__fadeIn');
     // add animate__fadeOut class to #free-sect element
     document.querySelector('#blog-sect').classList.add('animate__fadeOut');
     blogAnimationTriggered = false;
  }
});

// add invisible class to element by default
$('#psych-sect').addClass('invisible');

let psychAnimationTriggered = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 300 && !psychAnimationTriggered) {
     // remove invisible class from #bio element
     document.querySelector('#psych-sect').classList.remove('invisible');
     // add animate__jackInTheBox class to #bio element
     document.querySelector('#psych-sect').classList.add('animate__fadeIn');
     // set animationTriggered to true
     psychAnimationTriggered = true;
  } else if (window.scrollY <= 300 && psychAnimationTriggered) {
     // remove animate__jackInTheBox class from #bio element
     document.querySelector('#psych-sect').classList.remove('animate__fadeIn');
     // add another animation class to #bio element
     document.querySelector('#psych-sect').classList.add('animate__backOutDown');
     // set animationTriggered to false
     psychAnimationTriggered = false;
  }
});

// add invisible class to element by default
$('#free-sect').addClass('invisible');

let freeAnimationTriggered = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 900 && !freeAnimationTriggered) {
     // remove invisible class from #bio element
     document.querySelector('#free-sect').classList.remove('invisible');
     // add animate__jackInTheBox class to #bio element
     document.querySelector('#free-sect').classList.add('animate__fadeIn');
     // set animationTriggered to true
     freeAnimationTriggered = true;
  } else if (window.scrollY <= 900 && freeAnimationTriggered) {
     // remove animate__jackInTheBox class from #bio element
     document.querySelector('#free-sect').classList.remove('animate__fadeIn');
     // add another animation class to #bio element
     document.querySelector('#free-sect').classList.add('animate__backOutDown');
     // set animationTriggered to false
     freeAnimationTriggered = false;
  }
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