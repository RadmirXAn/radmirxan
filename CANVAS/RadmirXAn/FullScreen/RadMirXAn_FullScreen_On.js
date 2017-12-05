function FullScreenOn(){	
	if (canvas.requestFullscreen) {
		canvas.requestFullscreen();
		FullScreen = true;
	} else if (canvas.mozRequestFullScreen) {
		canvas.mozRequestFullScreen();
		FullScreen = true;
	} else if (canvas.webkitRequestFullScreen) {

		if (typeof Element !== "undefined" && typeof Element.ALLOW_KEYBOARD_INPUT !== "undefined"){
			canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			FullScreen = true;
		}
		else{
			canvas.webkitRequestFullScreen();
			FullScreen = true;
		}

	} else if (canvas.msRequestFullscreen){
		canvas.msRequestFullscreen();
		FullScreen = true;
	}else{
		alert("Fullscreen API is not supported");
	}
}