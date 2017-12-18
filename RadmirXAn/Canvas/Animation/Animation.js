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
			currentFrame %= frames_count;
			Animation_Bitmap.image = Animation_List[currentFrame];
		}
	let Animation_EnterFrame = function(){
		time = EnterFrame.getTime();
		if( ((time - lastTime) >= interval)){
			lastTime = time;			
			Animation_Action();
		}
	};
	current.start = function (){
		Animation_Bitmap.image = Animation_List[0];
		Animation_Bitmap.layer = Animation_Index;
		Animation_Bitmap.start();		
		Animation_Action = Animation_ActionDefault;
		EnterFrame.addFunction(Animation_EnterFrame, Animation_Index);
		Animation_Started = true;
	};
	current.stop = function (){
		Animation_Bitmap.stop();
		EnterFrame.removeFunction(Animation_EnterFrame);
		Animation_Started = false;
	};
	//--------------------------
	current.play = function(){
		Animation_Action = Animation_ActionDefault;
	};
	current.pause = function(value){
		currentFrame = value;
		Animation_Bitmap.image = Animation_List[currentFrame];
		Animation_Action = function(){};
	};
	current.playAndPause = function(callBack){
		let totalFrames = frames_count-1;
		Animation_Action = function(){
			currentFrame++;
			if(currentFrame>totalFrames){
				currentFrame=totalFrames;
			}
			Animation_Bitmap.image = Animation_List[currentFrame];
			if(currentFrame==totalFrames){
				current.pause(currentFrame);
				callBack();
			};			
		}
	};
	current.playReverseAndPause = function(callBack){
		Animation_Action = function(){
			currentFrame--;
			if(currentFrame<0){
				currentFrame=0;
			}
			Animation_Bitmap.image = Animation_List[currentFrame];
			if(currentFrame==0){
				current.pause(currentFrame);
				callBack();
			};			
		}
	};
	current.setList = function(Bitmap_List){
		currentFrame = 0;
		Animation_List = [];
		for(let i = 0; i < Bitmap_List.length; i++){
			Animation_List.push(ImageLoader.getImage(Bitmap_List[i]));
		}		
		frames_count = Bitmap_List.length;
	};
	Object.defineProperty(current, "layer", {
		set: function(value){
			Animation_Index = value;
			if(Animation_Started==true){
				Animation_Bitmap.layer = Animation_Index;
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