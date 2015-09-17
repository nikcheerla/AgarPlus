
function makeCircle() {
   var circle = document.createElement('div');
   circle.className = 'circle';
   console.log("Lets go");
   document.body.appendChild(circle);
   return circle;
}

function setCircleSize(circle, radius) {
	circle.style.width = 2*radius;
	circle.style.height = 2*radius;
}

function moveCircleTo(circle, x, y) {
	circle.style.left = x;
	circle.style.top = y;
	//bigger y is downwards, bigger x is rightwards
}


document.onkeypress=function(code){
	var player = makeCircle();
	moveCircleTo(player, 50, 70);

	var randomCircle = makeCircle();
	setCircleSize(randomCircle, 25);
	moveCircleTo(randomCircle, 80, 70);	
};

