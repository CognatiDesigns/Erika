
/* NAVIGATION MENU SCRIPTS */
var current = " "

$(document).ready(function(){
  $("#aboutMeLink").click(function(){
    $('#portfolio').hide(1500);
    $('#considerations').hide(1500);
    var current = "#aboutMe"
       $("#aboutMe").fadeIn(1500);
  });
});

$(document).ready(function(){
  $("#portfolioLink").click(function(){
    $('#aboutMe').hide(1500);
    $('#considerations').hide(1500);
    var current = "#portfolio"
      $("#portfolio").fadeIn(2200);
  });
});

$(document).ready(function(){
  $("#considerationsLink").click(function(){
    $('#aboutMe').hide(2000);
    $('#portfolio').hide(2000);
    var current = "#considerations"
      $("#considerations").fadeIn(2200);
  });
});

$(document).ready(function(){
  $("#scheduleLink").click(function(){
    $('#aboutMe').hide(2000);
    $('#portfolio').hide(2000);
    $('#considerations').hide(2000);
    var current = "#considerations"
      $("#schedule").fadeIn(2200);
  });
});


/* ICON OVERLAY SCRIPTS */

/* Open */
$(document).ready(function(){
  $("#snapchatIcon").click(function(){
      $("#snapchatOverlay").slideDown(1500);
  });
});



















/* $(document).ready(function(){
  setBindings();
});

function setBindings(){
  $("header a").click(function(e){
    $("html, body").animate({
      scrollTop: $("#aboutMe").offset().top
    }, 1500);
  })
}

*/