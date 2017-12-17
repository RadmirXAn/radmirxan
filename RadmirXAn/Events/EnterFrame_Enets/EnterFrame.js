var EnterFrame = (function () {
    function EnterFrame_Action() {
		console.log('EnterFrame: --------------------------------- init');
		let EnterFrame_Timer;
		let EnterFrame_StartTime = -1;
		let EnterFrame_SustemTime = -1;	
		this.getStartTime = function(){
			return EnterFrame_StartTime;
		}		
		this.getTime = function(){
			return EnterFrame_SustemTime;
		}
		let EnterFrame_Layers = [];
		let EnterFrame_Functions = [];
		let EnterFrame_FunctionLayer = [];
		let EnterFrame_MaxFunctions = 0;
		this.addFunction = function(EnterFrame_Function, EnterFrame_Layer){
			if(EnterFrame_Layer == undefined){
				EnterFrame_Layer = 0;
			}
			if(EnterFrame_Functions.indexOf(EnterFrame_Function) == -1){
				EnterFrame_FunctionLayer.push(EnterFrame_Layer);
				EnterFrame_Functions.push(EnterFrame_Function);
				if(EnterFrame_Layers[EnterFrame_Layer] == undefined){
					EnterFrame_Layers[EnterFrame_Layer] = [];
				}
				EnterFrame_Layers[EnterFrame_Layer].push(EnterFrame_Function);
				EnterFrame_MaxFunctions = EnterFrame_Layers.length - 1;
			}else{
				this.removeFunction(EnterFrame_Function);
				this.addFunction(EnterFrame_Function, EnterFrame_Layer);
			}
		}.bind(this);
		this.removeFunction = function(EnterFrame_Function){
			let EnterFrame_Index = EnterFrame_Functions.indexOf(EnterFrame_Function);	
			if(EnterFrame_Index != -1){
				EnterFrame_Functions.splice(EnterFrame_Index, 1);
				let EnterFrame_Layer = EnterFrame_FunctionLayer[EnterFrame_Index];
				let EnterFrame_FoundIndex = EnterFrame_Layers[EnterFrame_Layer].indexOf(EnterFrame_Function);
				EnterFrame_Layers[EnterFrame_Layer].splice(EnterFrame_FoundIndex, 1);
				EnterFrame_FunctionLayer.splice(EnterFrame_Index, 1);
			}
		}
		let EnterFrame_index_layer = 0;
		let EnterFrame_index_function = 0;
		let EnterFrame_action = function(){
			EnterFrame_SustemTime = (new Date()).getTime();
			Canvas.getVisibleContext().clearRect(0, 0, Canvas.width(), Canvas.height());			
			for (EnterFrame_index_layer = EnterFrame_MaxFunctions; EnterFrame_index_layer > -1; EnterFrame_index_layer--) {
				if(EnterFrame_Layers[EnterFrame_index_layer] == undefined){
					continue;
				}
				for (EnterFrame_index_function = 0; EnterFrame_index_function < EnterFrame_Layers[EnterFrame_index_layer].length; EnterFrame_index_function++) {
					EnterFrame_Layers[EnterFrame_index_layer][EnterFrame_index_function]();
				}
			}			
			EnterFrame_Timer = requestAnimationFrame(EnterFrame_action);
		};
		this.start = function(){
			if(EnterFrame_StartTime==-1){
				EnterFrame_StartTime = (new Date()).getTime();
			}
			EnterFrame_action();
		}
		this.stop = function(){
			cancelanimationframe(EnterFrame_Timer);
		}
    }
	return new EnterFrame_Action();
})();