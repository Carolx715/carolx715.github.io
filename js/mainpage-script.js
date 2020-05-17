// making circles move up and down
// probably using a sin curve to determine position? At different time intervals?

var c = document.getElementsByClassName("circle");

//function moveCircleUp() {
//	var cNum = 0; // something to do with getting element based on hover
//	c[i].style.top = 
//}

var start = 0.0;

function bobbingCircles() {
	for (i=0; i<c.length; i++) {
		c[i].style.top = (10 * Math.sin(start-i) - 10) + "px";
	}
	start += 0.01;
}

window.setInterval(bobbingCircles, 5);
