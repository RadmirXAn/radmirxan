const Canvas_Image = function(Canvas_Image_Image, Canvas_Image_Layer) {
	let image = Canvas_Image_Image;
	let context = Canvas.getVisibleContext();
	let width = image.width;
	let height = image.height;
	this.x = 0;
	this.y = 0;
	this.enterFrame = function(){	
		context.drawImage(image, this.x, this.y);
	}.bind(this);	
	this.hitTest = function(x, y){
		let hit = false;
		let _mX =  x - this.x;
		let _mY =  y - this.y;
		if((0<_mX && _mX<width) &&  (0<_mY && _mY<height)){
			Canvas.getUnVisibleContext().clearRect(0, 0, Canvas.width(), Canvas.height());
			Canvas.getUnVisibleContext().drawImage(image, 0, 0);
			let pixel = Canvas.getUnVisibleContext().getImageData(_mX, _mY, 1, 1);
			let data = pixel.data;
			//let rgba = 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + (data[3] / 255) + ')';
			if(data[3]!=0){
				hit = true;
				Mouse.stopPropagation();
			}else{
				hit = false;
			}
		}			
		return hit;
	}
	Object.defineProperty(this, "Image", { 
		set: function (value) {
			image = value;
			width = image.width;
			height = image.height;
		},
		get: function () { return image; }
	});
	this.start = function (){
		EnterFrame.addFunction(this.enterFrame, Canvas_Image_Layer);
	}.bind(this);
	this.stop = function (){
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);
}