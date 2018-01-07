window.onload = function() {
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(50,50,350,400);
	ctx.drawImage(img,300-(a/2),300-(a/2));
};
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
function ColorUpdate() {
	var n = document.getElementsByName("favcolor")[0].value;
	console.log(n);
	ctx.fillStyle = n;
	ctx.fillRect(50,50,350,400);
	ctx.drawImage(img,300-(a/2),300-(a/2));
}
var a = 500;
var img = new Image(a, a);
img.src = 'Assets/Untitled.png';