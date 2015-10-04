
function makeCircle(x, y) {
	var circle = document.createElement('div');
	circle.className = 'circle';
	document.body.appendChild(circle);
	circle.style.left = x;
	circle.style.top = y;
  	return circle;
}

function setCircleSize(circle, radius) {
	circle.style.width = 2*radius;
	circle.style.height = 2*radius;
}

function changeX(circle, dx) {
	circle.style.left = dx + circle.style.left;
	//bigger y is downwards, bigger x is rightwards
}

function changeY(circle, dy) {
	circle.style.top += dy;
	//bigger y is downwards, bigger x is rightwards
}

var player;
document.onclick=function(event){
	if(player == null)
		player = makeCircle(500, 500);
};

document.onkeydown=function(event){
	if(event.keyCode == 37) //37 is left arrow key
	{
		changeX(player, -10);
	}
	if(event.keyCode == 38) //up arrow key
	{
		changeY(player, 10);
	}
	if(event.keyCode == 39) //right arrow key
	{
		changeX(player, 10);
	}
	if(event.keyCode == 40) //down arrow key
	{
		changeY(player, -10);
	}
};

