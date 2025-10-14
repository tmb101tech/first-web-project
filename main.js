var i = 0;
var images = [];
var time = 5800;

images[0] = 'img/capture.JPG';
images[1] = 'img/doggg.JPG';
images[2] = 'img/kjdjdd.JPG';

function changeImg(){
	document.slide.src = images[i];

	if(i <images.length - 1){
		i++;
	} else {
		i = 0;
		}
	
	setTimeout("changeImg()", time);
}


window.onload = changeImg;

