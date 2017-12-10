const Canvas_Animation = function(image, layer) {
	let ax = 0;
	let ay = 0;
	let dx = 0;
	let dy = 0;
	let dw = image.width;
	let dh = image.height;
	let frame = {x:0, y:0, w:dw, h:dh, dx:0, dy:0};
	let frames = [frame];
	let frames_count = frames.length;
	this.x = 0;
	this.y = 0;
	this.ms = 0;
	this.currentFrame = 0;
	this.time = EnterFrame.getTime();
	this.lastTime = 0;	
	this.animation = function(val){
		frames = val;
		frames_count = frames.length;
	}.bind(this);
	this.enterFrame = function(){
		time = EnterFrame.getTime();
		ax = this.x;
		ay = this.y;
		if( ((time - this.lastTime) > this.ms)){			
			this.lastTime = time;
			this.currentFrame++;			
			this.currentFrame %= frames_count;
			frame = frames[this.currentFrame];
			dx = frame.x;
			dy = frame.y;
			dw = frame.w;
			dh = frame.h;
			ax += frame.dx;
			ay += frame.dy;
		}
		Canvas.getVisibleContext().drawImage(image, dx, dy, dw, dh, ax, ay, dw, dh);
	}.bind(this);	
	this.hitTest = function(x, y){
		let hit = false;
		let _mX =  x - this.x;
		let _mY =  y - this.y;
		if((0<_mX && _mX<dw) &&  (0<_mY && _mY<dh)){
			hit = true;
		}
		return hit;
	}	
	this.start = function (){
		EnterFrame.addFunction(this.enterFrame, layer);
	}.bind(this);
	this.stop = function (){
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);
}