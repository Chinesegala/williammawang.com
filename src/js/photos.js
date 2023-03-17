function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animate__animated animate__fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animate__animated animate__fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animate__animated animate__fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animate__animated animate__fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animate__animated animate__fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animate__animated animate__adeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });