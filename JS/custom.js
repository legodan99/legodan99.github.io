window.onload = function() {
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(60,50,350,400);
	ctx.drawImage(img,310-(a/2),280 -(a/2));
	ctx.fillStyle = "#000000";
	ctx.font = "30px Arial";
	ctx.fillText("#ff0000",200,200);
};
var n = "#ff0000";
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cart = [];
function ColorUpdate() {
	ctx.clearRect(0, 0, c.width, c.height);
	n = document.getElementsByName("favcolor")[0].value;
	console.log(n);
	ctx.fillStyle = n;
	ctx.fillRect(60,50,350,400);
	ctx.drawImage(img,310-(a/2),280-(a/2));
	ctx.fillStyle = "#000000";
	ctx.font = "30px Arial";
	ctx.fillText(n,200,200);
}
function CartUpdate() {
	cart += n + " shirt";
	console.log(cart);
	var shirt = document.createElement("p");
	var node = document.createTextNode(n + " shirt");
	shirt.style.backgroundColor = n;
	shirt.appendChild(node);
	var element = document.getElementById("cart");
	var child = document.getElementById("carthead");
	element.insertBefore(shirt,child);
}
function CartCheckout() {
	alert("Your items have been purchased and are on their way.");
	location.reload();
}
var a = 500;
var img = new Image(a, a);
img.src = 'Assets/Untitled.png';