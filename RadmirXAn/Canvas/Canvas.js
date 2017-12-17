const Canvas = (function(){
	function Canvas_Action() {
		let current = this;
		console.log('Canvas: --------------------------------- init');
		let Canvas_UnVisible = document.getElementById("game_hit");
		let Canvas_UnVisibleContext = Canvas_UnVisible.getContext("2d");
		let Canvas_Visible = document.getElementById("game");
		let Canvas_VisibleContext = Canvas_Visible.getContext("2d");
		current.width = function(){
			return Canvas_Visible.width;
		}
		current.height = function(){
			return Canvas_Visible.height;
		}	
		current.getVisibleContext = function(){
			return Canvas_VisibleContext;
		}		
		current.getUnVisibleContext = function(){
			return Canvas_UnVisibleContext;
		}
		current.getVisible = function(){
			return Canvas_Visible;
		}
		Canvas_Visible.style.cursor = "none";
	}
	return new Canvas_Action();
})();