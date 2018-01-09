window.onload = function() {
  console.log("this is the video page");
};
var videos = ["https://www.youtube.com/embed/Bmoo3CHzjyY?rel=0","https://www.youtube.com/embed/Orlbo9WkZ2E","https://www.youtube.com/embed/Vd1-P-R_f-0?rel=0","https://www.youtube.com/embed/Htl3XWUhUOM","https://www.youtube.com/embed/uqcTVVUFnKQ","https://www.youtube.com/embed/tC0swW-ahkM","https://www.youtube.com/embed/y2cQvZPX3OY","https://www.youtube.com/embed/n4CpypI7SOo","https://www.youtube.com/embed/lUmIkVMdjVY","https://www.youtube.com/embed/XX5wk-6Mn5s","https://www.youtube.com/embed/AXnxCnarZGs","https://www.youtube.com/embed/Eltn_nyOPh8"];
for(i = 0; i < videos.length; i++)
{
	var para = document.createElement("iframe");
	para.src = videos[i];
	var element = document.getElementById("vid");
	var child = document.getElementById("vidhead");
	element.insertBefore(para,child);
}
