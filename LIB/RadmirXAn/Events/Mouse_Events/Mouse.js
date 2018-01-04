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
		let Mouse_Uplayers = [];
		let Mouse_UpFunctions = [];
		let Mouse_UpFunctionsLayer = [];
		let Mouse_IndexUplayer = 0;
		let Mouse_OnUpFunctions = 0;
		current.addUpFunction = function(Mouse_Function, Mouse_Layer){
			if(Mouse_Layer == undefined){
				Mouse_Layer = 0;
			}
			if(Mouse_UpFunctions.indexOf(Mouse_Function) == -1){
				Mouse_UpFunctionsLayer.push(Mouse_Layer);
				Mouse_UpFunctions.push(Mouse_Function);
				if(Mouse_Uplayers[Mouse_Layer] == undefined){
					Mouse_Uplayers[Mouse_Layer] = [];
				}
				Mouse_Uplayers[Mouse_Layer].push(Mouse_Function);	
			}
		}
		current.removeUpFunction = function(Mouse_Function){	
			let Mouse_Index = Mouse_UpFunctions.indexOf(Mouse_Function);
			if(Mouse_Index != -1){
				Mouse_UpFunctions.splice(Mouse_Index, 1);
				let Mouse_Layer = Mouse_UpFunctionsLayer[Mouse_Index];
				let findex = Mouse_Uplayers[Mouse_Layer].indexOf(Mouse_Function);
				Mouse_Uplayers[Mouse_Layer].splice(findex, 1);
				Mouse_UpFunctionsLayer.splice(Mouse_Index, 1);
			}
		}
		let Mouse_OnUp = function(eventData){
			let Mouse_Rect = Canvas.getVisible().getBoundingClientRect();
			Mouse_X = eventData.clientX - Mouse_Rect.left;
			Mouse_Y = eventData.clientY - Mouse_Rect.top;
			stoppropagation = false;
			for (Mouse_IndexUplayer = Mouse_Uplayers.length-1; Mouse_IndexUplayer > -1; Mouse_IndexUplayer--) {
				if(Mouse_Uplayers[Mouse_IndexUplayer] == undefined){
					continue;
				}
				for (Mouse_OnUpFunctions = 0; Mouse_OnUpFunctions < Mouse_Uplayers[Mouse_IndexUplayer].length; Mouse_OnUpFunctions++) {
					Mouse_Uplayers[Mouse_IndexUplayer][Mouse_OnUpFunctions](eventData);
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