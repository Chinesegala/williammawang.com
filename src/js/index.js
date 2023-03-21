var typed = new Typed(".auto-type", {
  strings: ["",
     "Hi,", //English
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


document.getElementById('rightImage').setAttribute('draggable', false);

document.getElementById('bio-img').addEventListener('contextmenu', function (event) {
   event.preventDefault();
});
document.getElementById('bio-img').setAttribute('draggable', false);

$('#bio').addClass('invisible');

let bioAnimationTriggered = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 500 && !bioAnimationTriggered) {
     // remove invisible class from #bio element
     document.querySelector('#bio').classList.remove('invisible');
     // add animate__jackInTheBox class to #bio element
     document.querySelector('#bio').classList.add('animate__fadeIn');
     // set animationTriggered to true
     bioAnimationTriggered = true;
  } else if (window.scrollY <= 500 && bioAnimationTriggered) {
     // remove animate__jackInTheBox class from #bio element
     document.querySelector('#bio').classList.remove('animate__fadeIn');
     // add another animation class to #bio element
     document.querySelector('#bio').classList.add('animate__backOutDown');
     // set animationTriggered to false
     bioAnimationTriggered = false;
  }
});

// add invisible class to element by default
$('.sectbubble').addClass('invisible');

let sectAnimationTriggered = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 1100 && !sectAnimationTriggered) {
     // remove invisible class from #bio element
     document.querySelector('.sectbubble').classList.remove('invisible');
     // add animate__jackInTheBox class to #bio element
     document.querySelector('.sectbubble').classList.add('animate__fadeIn');
     // set animationTriggered to true
     sectAnimationTriggered = true;
  } else if (window.scrollY <= 1100 && sectAnimationTriggered) {
     // remove animate__jackInTheBox class from #bio element
     document.querySelector('.sectbubble').classList.remove('animate__fadeIn');
     // add another animation class to #bio element
     document.querySelector('.sectbubble').classList.add('animate__backOutDown');
     // set animationTriggered to false
     sectAnimationTriggered = false;
  }
});

// add invisible class to element by default
$('.hobbyContainer').addClass('invisible');

let timelineAnimationTriggered = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 1900 && !timelineAnimationTriggered) {
     // remove invisible class from all .hobbyContainer elements
     document.querySelectorAll('.hobbyContainer').forEach((element) => {
        element.classList.remove('invisible');
        // add animate__jackInTheBox class to each .hobbyContainer element
        element.classList.add('animate__fadeIn');
     });
     // set animationTriggered to true
     timelineAnimationTriggered = true;
  } else if (window.scrollY <= 1900 && timelineAnimationTriggered) {
     // remove animate__jackInTheBox class from all .hobbyContainer elements
     document.querySelectorAll('.hobbyContainer').forEach((element) => {
        element.classList.remove('animate__fadeIn');
        // add another animation class to each .hobbyContainer element
        element.classList.add('animate__backOutDown');
     });
     // set animationTriggered to false
     timelineAnimationTriggered = false;
  }
});