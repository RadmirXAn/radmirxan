const Animation = function(Bitmap_List){
	let current = this;
	let Animation_Index = 0;
	let Animation_Started = false;
	let Animation_List = Bitmap_List;
	let Animation_Bitmap = new Bitmap(Animation_List[0]);
	let time = EnterFrame.getTime();
	let lastTime = EnterFrame.getTime();
	let frames_count = Bitmap_List.length;
	let currentFrame = 0;
	let interval = 0;
	let x = 0;
	let y = 0;
	let Animation_Action = function(){};
	let Animation_EnterFrame = function(){
		time = EnterFrame.getTime();
		if( ((time - lastTime) >= interval)){
			lastTime = time;
			currentFrame++;
			currentFrame %= frames_count;			
			Animation_Action();
		}
	};
	current.start = function (){
		Animation_Bitmap.start();
		Animation_Bitmap.layer = Animation_Index;
		Animation_Action = function(){
			Animation_Bitmap.image = Animation_List[currentFrame];
		}
		EnterFrame.addFunction(Animation_EnterFrame, Animation_Index);
		Animation_Started = true;
	};
	current.stop = function (){
		Animation_Bitmap.stop();
		EnterFrame.removeFunction(Animation_EnterFrame);
		Animation_Started = false;
	};
	//--------------------------
	current.playAndStop = function(callBack){
		Animation_Action = function(){
			if(currentFrame==(frames_count-1)){
				current.stop();
				callBack();
			};
			Animation_Bitmap.image = Animation_List[currentFrame];
		}
	};
	current.setList = function(Bitmap_List){
		currentFrame = 0;
		Animation_List = Bitmap_List;
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