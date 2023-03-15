// Header scrolling change //
var width = $(window).width();
window.onscroll = function () {
  // Sets nav bar to fixed when page width exceeds #
  if (width >= 1000) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("#header").addClass("fixed-header");
    } else {
      $("#header").removeClass("fixed-header");
    }
  }
};

// add invisible class to #bio element by default
$('#bio').addClass('invisible');

let bioAnimationTriggered = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 300 && !bioAnimationTriggered) {
    // remove invisible class from #bio element
    document.querySelector('#bio').classList.remove('invisible');
    // add animate__jackInTheBox class to #bio element
    document.querySelector('#bio').classList.add('animate__fadeInUp');
    // set animationTriggered to true
    bioAnimationTriggered = true;
  } else if (window.scrollY <= 300 && bioAnimationTriggered) {
    // remove animate__jackInTheBox class from #bio element
    document.querySelector('#bio').classList.remove('animate__fadeInUp');
    // add another animation class to #bio element
    document.querySelector('#bio').classList.add('animate__backOutDown');
    // set animationTriggered to false
    bioAnimationTriggered = false;
  }
});

// add invisible class to #bio element by default
$('#hobbies').addClass('invisible');

let hobbyAnimationTriggered = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 900 && !hobbyAnimationTriggered) {
    // remove invisible class from #bio element
    document.querySelector('#hobbies').classList.remove('invisible');
    // add animate__jackInTheBox class to #bio element
    document.querySelector('#hobbies').classList.add('animate__fadeInUp');
    // set animationTriggered to true
    hobbyAnimationTriggered = true;
  } else if (window.scrollY <= 900 && hobbyAnimationTriggered) {
    // remove animate__jackInTheBox class from #bio element
    document.querySelector('#hobbies').classList.remove('animate__fadeInUp');
    // add another animation class to #bio element
    document.querySelector('#hobbies').classList.add('animate__backOutDown');
    // set animationTriggered to false
    hobbyAnimationTriggered = false;
  }
});

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

var typed = new Typed(".auto-type", {
  strings: ["Hi,", //English
          "Hello,", // English
          "你好,", // Mandarin
          "Bonjour,", //French
          "Hola,", // Spanish
          "こんにちは,", // Japanese
          "안녕하세요,", // Korean
          "Hallå,", // Swedish
          "Hej,", // Danish
          "Xin Chào,", // Vietnamese
          "Hei,", // Norwegian, Finnish
          "Cześć,", // Polish
          "Guten Tag,", // German
          "Hallo,", // Dutch
          "Χαίρετε,", // Greek
          "Salut,", // Romanian
          "Ahoj,", // Czech
          "Привет,", // Russian
          "Привіт,", // Ukranian
          "Dobar Dan,", // Croatian
          "Helo,", // Malay
          "Salve," // Italian
      ],
  typeSpeed: 100,
  backSpeed: 30,
  loop: true
})

const hobbiesList = document.querySelector("#hobbies-list");
const hobbyBubbles = document.querySelectorAll(".hobby-bubble");

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // Scrolling down
    hobbyBubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.classList.add("visible");
      }, index * 100);
    });
  } else {
    // Scrolling up
    hobbyBubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.classList.remove("visible");
      }, index * 100);
    });
  }
  lastScrollTop = st <= 0 ? 0 : st;
});