const Animation = function(){
	let current = this;
	let Animation_Index = 0;
	let Animation_Started = false;
	let Animation_List = [];
	let Animation_Bitmap = new Bitmap();
	let time = EnterFrame.getTime();
	let lastTime = EnterFrame.getTime();
	let frames_count = 0;
	let currentFrame = 0;
	let interval = 0;
	let x = 0;
	let y = 0;
	let Animation_Action = function(){};
	let Animation_ActionDefault = function(){
		currentFrame++;
		if(currentFrame>=frames_count){
			currentFrame = 0;
		}
		Animation_Bitmap.image = Animation_List[currentFrame];
	};
	let Animation_ActionReverseDefault = function(){
		currentFrame--;
		if(currentFrame<0){
			currentFrame = frames_count-1;
		}
		Animation_Bitmap.image = Animation_List[currentFrame];
	};
	let Animation_ActionStop = function(){
		Animation_Bitmap.image = Animation_List[currentFrame];
	};
	let Animation_EnterFrame = function(){
		time = EnterFrame.getTime();
		if( ((time - lastTime) >= interval)){
			lastTime = time;			
			Animation_Action();
		}
	};
	current.start = function (){
		Animation_Bitmap.image = Animation_List[currentFrame];
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
	current.playWith = function(direction, startFrame){
		currentFrame = startFrame;		
		if(direction>0){
			Animation_Action = Animation_ActionDefault;
		}else if(direction<0){
			Animation_Action = Animation_ActionReverseDefault;
		}else{
			Animation_Action = function(){};
		}		
	};
	current.playTo = function(direction, pauseFrame, callBack){
		if(direction>0){
			Animation_Action = function(){
				if(currentFrame==pauseFrame){
					Animation_Action = Animation_ActionStop;
					callBack();
				}else{
					Animation_ActionDefault();
				}					
			}
		}else if(direction<0){
			Animation_Action = function(){
				if(currentFrame==pauseFrame){
					Animation_Action = Animation_ActionStop;
					callBack();
				}else{
					Animation_ActionReverseDefault();
				}				
			}
		}else{
			current.playWith(0,pauseFrame);
			callBack();
		}
	};
	current.playWithTo = function(direction, startFrame, pauseFrame, callBack){
		currentFrame = startFrame;
		if(direction>0){
			Animation_Action = function(){
				if(currentFrame==pauseFrame){
					Animation_Action = Animation_ActionStop;
					callBack();
				}else{
					Animation_ActionDefault();
				}					
			}
		}else if(direction<0){
			Animation_Action = function(){
				if(currentFrame==pauseFrame){
					Animation_Action = Animation_ActionStop;
					callBack();
				}else{
					Animation_ActionReverseDefault();
				}				
			}
		}else{
			current.playWith(0,pauseFrame);
			callBack();
		}
	};
	current.useList = function(Bitmap_List){
		Animation_List = [];
		frames_count = Bitmap_List.length;
		for(let i = 0; i < Bitmap_List.length; i++){
			Animation_List.push(ImageLoader.getImage(Bitmap_List[i]));
		}
	};
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