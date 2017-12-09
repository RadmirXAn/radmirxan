function  RadMirXAn_Image(image, layer) {
	
	this.x = 0;
	this.y = 0;

	this.enterFrame = function(){	
		context2D.drawImage(image, this.x, this.y);
	}.bind(this);
	
	this.hitTest = function(x, y){
		let hit = false;
		let _mX =  x - this.x;
		let _mY =  y - this.y;
		if((0<_mX && _mX<image.width) &&  (0<_mY && _mY<image.height)){
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