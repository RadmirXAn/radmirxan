const Animation = function(){
	let current = this;
	let Animation_Index = 0;
	let Animation_Started = false;
	let Animation_List = [];
	let Animation_Bitmap = new Bitmap();
	let time = EnterFrame.getTime();
	let lastTime = EnterFrame.getTime();
	let frames_count = 0;
	let Animation_CurrentFrame = 0;
	let interval = 0;
	let x = 0;
	let y = 0;
	let Animation_Action = function(){};
	let Animation_ActionDefault = function(){
		Animation_CurrentFrame++;
		if(Animation_CurrentFrame>frames_count){
			Animation_CurrentFrame = 0;
		}
		Animation_Bitmap.image = Animation_List[Animation_CurrentFrame];
	};
	let Animation_ActionReverseDefault = function(){
		Animation_CurrentFrame--;
		if(Animation_CurrentFrame<0){
			Animation_CurrentFrame = frames_count;
		}
		Animation_Bitmap.image = Animation_List[Animation_CurrentFrame];
	};
	let Animation_ActionStop = function(){
		Animation_Bitmap.image = Animation_List[Animation_CurrentFrame];
	};
	let Animation_EnterFrame = function(){
		time = EnterFrame.getTime();
		if( ((time - lastTime) >= interval)){
			lastTime = time;			
			Animation_Action();
		}
	};
	current.start = function (){
		Animation_Bitmap.image = Animation_List[Animation_CurrentFrame];
		Animation_Bitmap.start();
		EnterFrame.addFunction(Animation_EnterFrame, Animation_Index);
		Animation_Started = true;
	};
	current.stop = function (){
		Animation_Bitmap.stop();
		EnterFrame.removeFunction(Animation_EnterFrame);
		Animation_Started = false;
	};
	//--------------------------
	current.playWithTo = function(startFrame, pauseFrame, callBack){
		Animation_CurrentFrame = startFrame;
		if(startFrame<pauseFrame){
			Animation_Action = function(){
				if(Animation_CurrentFrame==pauseFrame){
					Animation_Action = Animation_ActionStop;
					callBack();
				}else{
					Animation_ActionDefault();
				}					
			}
		}else{
			Animation_Action = function(){
				if(Animation_CurrentFrame==pauseFrame){
					Animation_Action = Animation_ActionStop;
					callBack();
				}else{
					Animation_ActionReverseDefault();
				}				
			}
		}
	};
	current.useList = function(Bitmap_List){
		Animation_List = [];
		frames_count = Bitmap_List.length-1;
		for(let i = 0; i < Bitmap_List.length; i++){
			Animation_List.push(ImageLoader.getImage(Bitmap_List[i]));
		}
	};
	current.currentFrame = function(){
		return Animation_CurrentFrame;
	}
	Object.defineProperty(current, "layer", {
		set: function(value){
			Animation_Index = value;
			Animation_Bitmap.layer = Animation_Index;
			if(Animation_Started==true){				
				EnterFrame.addFunction(Animation_EnterFrame, Animation_Index);
			}
		},
		get: function(){
			return Animation_Index;
		}
	});
	Object.defineProperty(current, "x", { 
		set: function (value) {
			x = value;
			Animation_Bitmap.x = value;
		},
		get: function () {
			return x;
		}
	});
	Object.defineProperty(current, "y", { 
		set: function (value) {
			y = value;
			Animation_Bitmap.y = value;			
		},
		get: function () {
			return y;
		}
	});
	Object.defineProperty(current, "frameRate", { 
		set: function (value) {
			interval = Math.floor(1000/value);
		},
		get: function () {
			return interval;
		}
	});
}