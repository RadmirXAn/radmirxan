const Bitmap = function(Image, LayerIndex) {
	let image = Image;
	let context = Canvas.getVisibleContext();
	let buff = Canvas.getUnVisibleContext();
	let width = image.width;
	let height = image.height;
	let x = 0;
	let y = 0;
	this.enterFrame = function(){	
		context.drawImage(image, x, y);
	}.bind(this);	
	this.start = function (){
		EnterFrame.addFunction(this.enterFrame, LayerIndex);
	}.bind(this);
	this.stop = function (){
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);
	//--------------------------
	this.getPixel = function(x, y){
			buff.clearRect(0, 0, Canvas.width(), Canvas.height());
			buff.drawImage(image, 0, 0);
			let pixel = buff.getImageData(x, y, 1, 1);
			return rgba = pixel.data;
			//let data = pixel.data;
			//let rgba = 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + (data[3] / 255) + ')';			
	}
	Object.defineProperty(this, "x", { 
		set: function (value) {
			x = value;
		},
		get: function () {
			return x;
		}
	});
	Object.defineProperty(this, "y", { 
		set: function (value) {
			y = value;
		},
		get: function () {
			return y;
		}
	});
	Object.defineProperty(this, "width", { 
		get: function () {
			return width;
		}
	});
	Object.defineProperty(this, "height", { 
		get: function () {
			return height;
		}
	});
	Object.defineProperty(this, "Image", { 
		set: function (value) {
			image = value;
			width = image.width;
			height = image.height;
		},
		get: function () {
			return image;
		}
	});
}