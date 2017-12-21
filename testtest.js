function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = parseInt(current).toLocaleString("en");
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("value", 0, 1423, 2000);

var fillBars = document.querySelectorAll(".fill-bar");   
var width = 0;
var i;
	
  for (i = 0; i < fillBars.length; i++) {
  	var id = setInterval(frame, 50, fillBars[i]);
  	function frame(fillBar) {
	    if (width >= fillBar.getAttribute('data-fill')) {
	      clearInterval(id);
	    } else {
	      width++; 
	      fillBar.style.width = 53 + width + 'px'; 
	    }
  	}
};