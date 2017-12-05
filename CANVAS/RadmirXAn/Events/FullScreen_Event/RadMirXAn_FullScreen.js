//События происходят когда отжата клавиша на клавиатуре 1.
function addFullScreen(func){
	if(FullScreenfunctions.indexOf(func) == -1){
		FullScreenfunctions.push(func);
	}
}

function removeFullScreen(func){
	let index = FullScreenfunctions.indexOf(func);
	if(index != -1){
		FullScreenfunctions.splice(index, 1);
	}
}

function onFullScreen(eventData){
	FullScreen = CurrentFullScreenElement();
	FullScreenfunctions.forEach(
		function(item, index, array) {
			item(eventData);
		}
	);
}

function CurrentFullScreenElement() {
	return (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || false);
}

if (canvas.requestFullscreen) {
	document.addEventListener("fullscreenchange", onFullScreen);
} else if (canvas.mozRequestFullScreen) {
	document.addEventListener("mozfullscreenchange", onFullScreen);
} else if (canvas.webkitRequestFullScreen) {
	document.addEventListener("webkitfullscreenchange", onFullScreen);
} else if (canvas.msRequestFullscreen){
	document.addEventListener("MSFullscreenChange", onFullScreen);
}else{
	//alert("Fullscreen API is not supported");
}
//События происходят когда отжата клавиша на клавиатуре 0.