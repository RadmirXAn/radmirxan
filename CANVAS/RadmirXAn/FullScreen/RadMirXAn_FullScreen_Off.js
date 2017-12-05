function FullScreenOff(){	
	if (document.exitFullscreen) {
		document.exitFullscreen();
		FullScreen = false;
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
		FullScreen = false;
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
		FullScreen = false;
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
		FullScreen = false;
	}
}