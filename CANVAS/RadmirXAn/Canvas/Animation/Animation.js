const Animation = function(Bitmap_List, LayerIndex) {
	let Animation_List = Bitmap_List;
	let Animation_Bitmap = new Bitmap(Animation_List[0], LayerIndex);
	let time = EnterFrame.getTime();
	let lastTime = EnterFrame.getTime();
	let frames_count = Bitmap_List.length;
	let currentFrame = 0;
	let interval = 0;
	let x = 0;
	let y = 0;
	this.enterFrame = function(){
		time = EnterFrame.getTime();
		if( ((time - lastTime) >= interval)){
			lastTime = time;
			currentFrame++;
			currentFrame %= frames_count;
			Animation_Bitmap.Image = Animation_List[currentFrame];
		}
	}.bind(this);
	this.start = function (){
		Animation_Bitmap.start();
		EnterFrame.addFunction(this.enterFrame, LayerIndex);
	}.bind(this);
	this.stop = function (){
		Animation_Bitmap.stop();
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);
	//--------------------------
	Object.defineProperty(this, "x", { 
		set: function (value) {
			x = value;
			Animation_Bitmap.x = value;
		},
		get: function () {
			return x;
		}
	});
	Object.defineProperty(this, "y", { 
		set: function (value) {
			y = value;
			Animation_Bitmap.y = value;			
		},
		get: function () {
			return y;
		}
	});
	Object.defineProperty(this, "frameRate", { 
		set: function (value) {
			interval = Math.floor(1000/value);
		},
		get: function () {
			return interval;
		}
	});
	this.setList = function(Bitmap_List){
		Animation_List = Bitmap_List;
		frames_count = Bitmap_List.length;
	}.bind(this);
}