const Canvas = (function(){
	function Canvas_Action() {
		console.log('Canvas: --------------------------------- init');
		let Canvas_UnVisible = document.getElementById("game_hit");
		let Canvas_UnVisibleContext = Canvas_UnVisible.getContext("2d");
		let Canvas_Visible = document.getElementById("game");
		let Canvas_VisibleContext = Canvas_Visible.getContext("2d");
		this.width = function(){
			return Canvas_Visible.width;
		}
		this.height = function(){
			return Canvas_Visible.height;
		}	
		this.getVisibleContext = function(){
			return Canvas_VisibleContext;
		}		
		this.getUnVisibleContext = function(){
			return Canvas_UnVisibleContext;
		}
		this.getVisible = function(){
			return Canvas_Visible;
		}
		Canvas_Visible.style.cursor = "none";
	}
	return new Canvas_Action();
})();