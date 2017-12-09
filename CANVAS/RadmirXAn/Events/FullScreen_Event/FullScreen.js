var FullScreen = (function () {		
    let FullScreen_Singleton; 
    function FullScreen_Action() {
		let FullScreen_Functions = [];
		let FullScreen_IsFullScreen = false;
		this.IsFullScreen = function(){
			return FullScreen_IsFullScreen;
		}
		this.addFunction = function(FullScreen_Function){
			if(FullScreen_Functions.indexOf(FullScreen_Function) == -1){
				FullScreen_Functions.push(FullScreen_Function);
			}
		}
		this.removeFunction = function(FullScreen_Function){
			let FullScreen_Index = FullScreen_Functions.indexOf(FullScreen_Function);
			if(FullScreen_Index != -1){
				FullScreen_Functions.splice(FullScreen_Index, 1);
			}
		}
		let FullScreen_OnFullScreen = function(FullScreen_Event){
			FullScreen_IsFullScreen = FullScreen_CurrentElement();
			FullScreen_Functions.forEach(
				function(FullScreen_Item, FullScreen_Index, array) {
					FullScreen_Item(FullScreen_Event);
				}
			);
		}
		let FullScreen_CurrentElement = function() {
			return (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || false);
		}
		if (canvas.requestFullscreen) {
			document.addEventListener("fullscreenchange", FullScreen_OnFullScreen);
		} else if (canvas.mozRequestFullScreen) {
			document.addEventListener("mozfullscreenchange", FullScreen_OnFullScreen);
		} else if (canvas.webkitRequestFullScreen) {
			document.addEventListener("webkitfullscreenchange", FullScreen_OnFullScreen);
		} else if (canvas.msRequestFullscreen){
			document.addEventListener("MSFullscreenChange", FullScreen_OnFullScreen);
		}else{
			alert("Fullscreen API is not supported");
		}
		this.Off = function(){	
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
		this.On = function(){	
			if (canvas.requestFullscreen) {
				canvas.requestFullscreen();
			} else if (canvas.mozRequestFullScreen) {
				canvas.mozRequestFullScreen();
			} else if (canvas.webkitRequestFullScreen) {
				if (typeof Element !== "undefined" && typeof Element.ALLOW_KEYBOARD_INPUT !== "undefined"){
					canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
				}
				else{
					canvas.webkitRequestFullScreen();
				}
			} else if (canvas.msRequestFullscreen){
				canvas.msRequestFullscreen();
			}else{
				alert("Fullscreen API is not supported");
			}
		}
    } 
	if (!FullScreen_Singleton) {
		console.log('FullScreen: --------------------------------- init');
		FullScreen_Singleton = new FullScreen_Action();
	}
	return FullScreen_Singleton;
})();