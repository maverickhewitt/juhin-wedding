(function ($) {
  "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

// $(document).on('click', function(){
//   document.getElementById("my_audio").play();
// });

$(document).ready(function() {
  $("#my_audio").get(0).play();
});

var countDownDate = new Date("Apr 19, 2025 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
  
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
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
  `%cand Wife!\n\n`,
  'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)