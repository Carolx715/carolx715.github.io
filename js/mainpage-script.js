// making circles move up and down
// probably using a sin curve to determine position? At different time intervals?

var c = document.getElementsByClassName("circle");
var cNum = 0;
var originalTop;
var interval;
var start = 0.0;

function onHoverOver(i) {
	originalTop = c[i].style.top;
	cNum = i;
	interval = window.setInterval(bobbingCircle, 5);
	//	c[cNum].style.top = 0.3*Math.sin(Math.PI) + "em";
	//	if (!c[cNum].mouseout) {
	//		return;
	//	}
}

function stopHoverOver(i) {
	var dest = originalTop;
	c[i].style.top = dest;
	//	while (-0.4*Math.sin(start) <= 0) {
	//		interval = window.setInterval(bobbingCircle, 5);
	//	}

	clearInterval(interval);
	start = 0;
}

function stahp() {
	if (-0.4 * Math.sin(start) <= 0.1 && -0.4 * Math.sin(start) >= -0.1) {
		clearInterval(interval);
	}
}

//function bobbingCircles() {
//	for (i=0; i<c.length; i++) {
//		c[i].style.top = (0.3 * Math.sin(start-i)) + "em";
//	}
//	start += 0.01;
//}

function bobbingCircle() {
	c[cNum].style.top = (-0.5 * Math.abs(Math.sin(start)) + 0.5) + "em";
	//	c[cNum].style.top = -200 + "px";
	start += 0.02;
}

//window.setInterval(bobbingCircles, 5);
