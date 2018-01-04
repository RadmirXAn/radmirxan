const Mouse = (function(){
	function Mouse_Action() {
		let current = this;
		let stoppropagation = true;
		let onContextMenu = function(eventData){
			return false;
		}
		let Mouse_X = 0;
		let Mouse_Y = 0;
		current.getX = function(){
			return Mouse_X;
		}
		current.getY = function(){
			return Mouse_Y;
		}
		Canvas.getVisible().oncontextmenu = onContextMenu;
		let Mouse_OnClicklayers = [];
		let Mouse_OnClickFunctions = [];
		let Mouse_OnClickFunctionsLayer = [];
		let Mouse_IndexUplayer = 0;
		let Mouse_OnUpFunctions = 0;
		current.addOnClickFunction = function(Mouse_Function, Mouse_Layer){
			if(Mouse_Layer == undefined){
				Mouse_Layer = 0;
			}
			if(Mouse_OnClickFunctions.indexOf(Mouse_Function) == -1){
				Mouse_OnClickFunctionsLayer.push(Mouse_Layer);
				Mouse_OnClickFunctions.push(Mouse_Function);
				if(Mouse_OnClicklayers[Mouse_Layer] == undefined){
					Mouse_OnClicklayers[Mouse_Layer] = [];
				}
				Mouse_OnClicklayers[Mouse_Layer].push(Mouse_Function);	
			}
		}
		current.removeOnClickFunction = function(Mouse_Function){	
			let Mouse_Index = Mouse_OnClickFunctions.indexOf(Mouse_Function);
			if(Mouse_Index != -1){
				Mouse_OnClickFunctions.splice(Mouse_Index, 1);
				let Mouse_Layer = Mouse_OnClickFunctionsLayer[Mouse_Index];
				let findex = Mouse_OnClicklayers[Mouse_Layer].indexOf(Mouse_Function);
				Mouse_OnClicklayers[Mouse_Layer].splice(findex, 1);
				Mouse_OnClickFunctionsLayer.splice(Mouse_Index, 1);
			}
		}
		let Mouse_OnUp = function(eventData){
			let Mouse_Rect = Canvas.getVisible().getBoundingClientRect();
			Mouse_X = eventData.clientX - Mouse_Rect.left;
			Mouse_Y = eventData.clientY - Mouse_Rect.top;
			stoppropagation = false;
			for (Mouse_IndexUplayer = Mouse_OnClicklayers.length-1; Mouse_IndexUplayer > -1; Mouse_IndexUplayer--) {
				if(Mouse_OnClicklayers[Mouse_IndexUplayer] == undefined){
					continue;
				}
				for (Mouse_OnUpFunctions = 0; Mouse_OnUpFunctions < Mouse_OnClicklayers[Mouse_IndexUplayer].length; Mouse_OnUpFunctions++) {
					Mouse_OnClicklayers[Mouse_IndexUplayer][Mouse_OnUpFunctions](eventData);
					if(stoppropagation==true){
						return;
					}
				}
			}
		}
		current.stopPropagation = function(){
			stoppropagation = true;
		}
		Canvas.getVisible().onclick = Mouse_OnUp;
	}
	return new Mouse_Action();
})();