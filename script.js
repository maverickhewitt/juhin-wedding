(function ($) {
  "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

$(document).on('click', function(){
  document.getElementById("my_audio").play();
});


//Sliding up
document.getElementById("revealButton").addEventListener("click", function() {
  var overlay = document.getElementById("overlay");
  var audio = document.getElementById("my_audio");
  audio.muted = false; 
  audio.play(); 

  // Add a class to trigger the slide-up animation
  overlay.classList.add("slide-up");

  // Wait for the animation to finish before hiding the overlay
  overlay.addEventListener("transitionend", function() {
    overlay.style.display = "none"; // Hide the overlay after the animation
    document.getElementById("invitation").style.display = "block"; // Show the invitation
  }, { once: true }); // Ensure the event listener is only called once
});

//Normal disapear
// document.getElementById("revealButton").addEventListener("click", function() {
//   document.getElementById("overlay").style.display = "none";
//   var audio = document.getElementById("my_audio");
//   audio.muted = false; 
//   audio.play(); 

//   document.getElementById("invitation").style.display = "block";
// });

var countDownDate = new Date("Apr 19, 2025 00:00:00").getTime();
// var countDownDate = new Date("Mar 12, 2025 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";

  // document.getElementById("time").innerHTML = 
  //   "<div class='countdown-container'>" +
  //       "<span class='countdown-item days'>" + days + " days</span>" +
  //       "<span class='countdown-item hours'>" + hours + " hours</span>" +
  //       "<span class='countdown-item minutes'>" + minutes + " minutes</span>" +
  //       "<span class='countdown-item seconds'>" + seconds + " seconds</span>" +
  //   "</div>";

  document.getElementById("time").innerHTML = 
    days + " <span class=highlight-time> days</span> " + 
    hours + " <span class=highlight-time> hr</span> " + 
    minutes + " <span class=highlight-time> min</span> " + 
    seconds + " <span class=highlight-time> sec</span>";
  
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "It is the Day of Wedding!";
  }
}, 1000);

var styles = [
  'background: linear-gradient(#D33106, #571402)'
  , 'border: 4px solid #3E0E02'
  , 'color: white'
  , 'display: block'
  , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
  , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
  , 'line-height: 40px'
  , 'text-align: center'
  , 'font-weight: bold'
  , 'font-size: 32px'
].join(';');

var styles1 = [
  'color: #FF6C37'
  , 'display: block'
  , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
  , 'line-height: 40px'
  , 'font-weight: bold'
  , 'font-size: 32px'
].join(';');

var styles2 = [
  'color: teal'
  , 'display: block'
  , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
  , 'line-height: 40px'
  , 'font-weight: bold'
  , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 19th April, 2025!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Juhin', styles1, styles2);

console.log(
  `%cand Saulin!\n\n`,
  'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)

