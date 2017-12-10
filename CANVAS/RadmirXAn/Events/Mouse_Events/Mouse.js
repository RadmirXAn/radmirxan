const Mouse = (function(){
	function Mouse_Action() {
		//Остановить распространение 1
		this.stoppropagation = true;
		//Остановить распространение 0
		//События происходят когда выводим контекстное меню на объектом Canvas.getVisible() 1.
		let onContextMenu = function(eventData){
			return false;
		}
		Canvas.getVisible().oncontextmenu = onContextMenu;
		//События происходят когда выводим контекстное меню на объектом Canvas.getVisible() 0.
		//События происходят когда отжимаем кнопку мыши над объектом Canvas.getVisible() 1.
		//Для событий отжатия кнопок мыши 1
		let Mouse_Uplayers = [];
		let Mouse_UpFunctions = [];
		let Mouse_UpFunctionsLayer = [];
		let Mouse_IndexUplayer = 0;
		let Mouse_OnUpFunctions = 0;
		//Для событий отжатия кнопок мыши 0
		this.addUpFunction = function(Mouse_Function, Mouse_Layer){
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

		this.removeUpFunction = function(Mouse_Function){	
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
			stoppropagation = false;
			for (Mouse_IndexUplayer = Mouse_Uplayers.length-1; Mouse_IndexUplayer > -1; Mouse_IndexUplayer--) {
				if(Mouse_Uplayers[Mouse_IndexUplayer] == undefined){
					continue;
				}
				for (Mouse_OnUpFunctions = 0; Mouse_OnUpFunctions < Mouse_Uplayers[Mouse_IndexUplayer].length; Mouse_OnUpFunctions++) {
					Mouse_Uplayers[Mouse_IndexUplayer][Mouse_OnUpFunctions](eventData);
					if(stoppropagation){
						return;
					}
				}
			}
		}

		Canvas.getVisible().onmouseup = Mouse_OnUp;
		//События происходят когда отжимаем кнопку мыши над объектом Canvas.getVisible() 0.
		//События происходят когда нажимаем кнопку мыши над объектом Canvas.getVisible() 1.
		//Для событий нажатия кнопок мыши 1
		let Mouse_Downlayers = [];
		let Mouse_DownFunctions = [];
		let MouseDownfunctionsLayer = [];
		let Mouse_IndexDownLayer = 0;
		let Mouse_OnDownFunctions = 0;
		//Для событий нажатия кнопок мыши 0
		this.addDownFunction = function(Mouse_Function, Mouse_Layer){
			if(Mouse_Layer == undefined){
				Mouse_Layer = 0;
			}
			if(Mouse_DownFunctions.indexOf(Mouse_Function) == -1){
				MouseDownfunctionsLayer.push(Mouse_Layer);
				Mouse_DownFunctions.push(Mouse_Function);
				if(Mouse_Downlayers[Mouse_Layer] == undefined){
					Mouse_Downlayers[Mouse_Layer] = [];
				}
				Mouse_Downlayers[Mouse_Layer].push(Mouse_Function);	
			}
		}

		this.removeDownFunction = function(Mouse_Function){
			let Mouse_Index = Mouse_DownFunctions.indexOf(Mouse_Function);
			if(Mouse_Index != -1){
				Mouse_DownFunctions.splice(Mouse_Index, 1);
				let Mouse_Layer = MouseDownfunctionsLayer[Mouse_Index];
				let findex = Mouse_Downlayers[Mouse_Layer].indexOf(Mouse_Function);
				Mouse_Downlayers[Mouse_Layer].splice(findex, 1);
				MouseDownfunctionsLayer.splice(Mouse_Index, 1);
			}
		}

		let Mouse_OnDown = function(eventData){
			stoppropagation = false;
			for (Mouse_IndexDownLayer = Mouse_Downlayers.length-1; Mouse_IndexDownLayer > -1; Mouse_IndexDownLayer--) {
				if(Mouse_Downlayers[Mouse_IndexDownLayer] == undefined){
					continue;
				}
				for (Mouse_OnDownFunctions = 0; Mouse_OnDownFunctions < Mouse_Downlayers[Mouse_IndexDownLayer].length; Mouse_OnDownFunctions++) {
					Mouse_Downlayers[Mouse_IndexDownLayer][Mouse_OnDownFunctions](eventData);
					if(stoppropagation){
						return;
					}
				}
			}
		}

		Canvas.getVisible().onmousedown = Mouse_OnDown;
		//События происходят когда нажимаем кнопку мыши над объектом Canvas.getVisible() 0.
		//События происходят когда водим курсором мыши по объекту Canvas.getVisible() 1.
		//Для событий перемешения курсора мыши 1
		let Mouse_MoveFunctions = [];
		let Mouse_X = 0;
		let Mouse_Y = 0;
		this.getX = function(){
			return Mouse_X;
		}
		this.getY = function(){
			return Mouse_Y;
		}
		//Для событий перемешения курсора мыши 0
		this.addMoveFunction = function(Mouse_Function){
			if(Mouse_MoveFunctions.indexOf(Mouse_Function) == -1){
				Mouse_MoveFunctions.push(Mouse_Function);
			}
		}

		this.removeMoveFunction = function(Mouse_Function){
			let Mouse_Index = Mouse_MoveFunctions.indexOf(Mouse_Function);
			if(Mouse_Index != -1){
				Mouse_MoveFunctions.splice(Mouse_Index, 1);
			}
		}

		let Mouse_OnMove = function(eventData){
			let Mouse_Rect = Canvas.getVisible().getBoundingClientRect();
			Mouse_X = eventData.clientX - Mouse_Rect.left;
			Mouse_Y = eventData.clientY - Mouse_Rect.top;
			Mouse_MoveFunctions.forEach(
				function(Mouse_Item, Mouse_Index, Mouse_Array) {
					Mouse_Item(eventData);
				}
			);
		}

		Canvas.getVisible().onmousemove = Mouse_OnMove;
		//События происходят когда водим курсором мыши по объекту Canvas.getVisible() 0.
	}
	return new Mouse_Action();
})();