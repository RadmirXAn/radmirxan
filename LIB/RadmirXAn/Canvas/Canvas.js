const Canvas = (function(){
	function Canvas_Action() {
		let current = this;
		let Canvas_Element = document.getElementById("game");
		let Canvas_Context2D = Canvas_Element.getContext("2d");
		current.width = function(){
			return Canvas_Element.width;
		}
		current.height = function(){
			return Canvas_Element.height;
		}	
		current.context2D = function(){
			return Canvas_Context2D;
		}
		current.element = function(){
			return Canvas_Element;
		}
	}
	return new Canvas_Action();
})();