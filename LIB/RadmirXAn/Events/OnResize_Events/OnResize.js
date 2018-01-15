const OnResize = (function(){
	function OnResize_Action() {
		let current = this;
		let OnResize_OnResizelayers = [];
		let OnResize_OnResizeFunctions = [];
		let OnResize_OnResizeFunctionsLayer = [];
		let OnResize_IndexUplayer = 0;
		let OnResize_OnUpFunctions = 0;
		current.addOnResizeFunction = function(OnResize_Function, OnResize_Layer){
			if(OnResize_Layer == undefined){
				OnResize_Layer = 0;
			}
			if(OnResize_OnResizeFunctions.indexOf(OnResize_Function) == -1){
				OnResize_OnResizeFunctionsLayer.push(OnResize_Layer);
				OnResize_OnResizeFunctions.push(OnResize_Function);
				if(OnResize_OnResizelayers[OnResize_Layer] == undefined){
					OnResize_OnResizelayers[OnResize_Layer] = [];
				}
				OnResize_OnResizelayers[OnResize_Layer].push(OnResize_Function);	
			}
		}
		current.removeOnResizeFunction = function(OnResize_Function){	
			let OnResize_Index = OnResize_OnResizeFunctions.indexOf(OnResize_Function);
			if(OnResize_Index != -1){
				OnResize_OnResizeFunctions.splice(OnResize_Index, 1);
				let OnResize_Layer = OnResize_OnResizeFunctionsLayer[OnResize_Index];
				let findex = OnResize_OnResizelayers[OnResize_Layer].indexOf(OnResize_Function);
				OnResize_OnResizelayers[OnResize_Layer].splice(findex, 1);
				OnResize_OnResizeFunctionsLayer.splice(OnResize_Index, 1);
			}
		}
		let OnResize_Resize = function(){
			for (OnResize_IndexUplayer = OnResize_OnResizelayers.length-1; OnResize_IndexUplayer > -1; OnResize_IndexUplayer--) {
				if(OnResize_OnResizelayers[OnResize_IndexUplayer] == undefined){
					continue;
				}
				for (OnResize_OnUpFunctions = 0; OnResize_OnUpFunctions < OnResize_OnResizelayers[OnResize_IndexUplayer].length; OnResize_OnUpFunctions++) {
					OnResize_OnResizelayers[OnResize_IndexUplayer][OnResize_OnUpFunctions](eventData);
				}
			}
		}
		current.stopPropagation = function(){
			stoppropagation = true;
		}
		window.onresize = OnResize_Resize;
	}
	return new OnResize_Action();
})();