function clock() {
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('AM');

var time = new Date();

var a = time.getHours();
var b = time.getMinutes();
var c = time.getSeconds();
hours.innerHTML= a;
minutes.innerHTML = b;
seconds.innerHTML = c ;
}
setInterval(clock,1000);