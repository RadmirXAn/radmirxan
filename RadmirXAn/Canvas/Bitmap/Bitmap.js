const Bitmap = function() {
	
	let current = this;
	let Bitmap_Image;
	let Bitmap_Layer = 0;
	let Bitmap_Width = 0;
	let Bitmap_Height = 0;
	
	let x = 0;
	let y = 0;
	let Bitmap_Started = false;
	
	let Bitmap_Context = Canvas.getVisibleContext();
	let Bitmap_Buff = Canvas.getUnVisibleContext();

	let Bitmap_EnterFrame = function(){
		Bitmap_Context.drawImage(Bitmap_Image, x, y);
	};
	
	current.start = function (){
		EnterFrame.addFunction(Bitmap_EnterFrame, Bitmap_Layer);
		Bitmap_Started = true;
	};
	
	current.stop = function (){
		EnterFrame.removeFunction(Bitmap_EnterFrame);
		Bitmap_Started = false;
	};
	
	current.getPixel = function(x, y){
			Bitmap_Buff.clearRect(0, 0, Canvas.width(), Canvas.height());
			Bitmap_Buff.drawImage(Bitmap_Image, 0, 0);
			let pixel = Bitmap_Buff.getImageData(x, y, 1, 1);
			return rgba = pixel.data;
			//let data = pixel.data;
			//let rgba = 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + (data[3] / 255) + ')';
	}
	
	Object.defineProperty(current, "layer", {
		set: function(value){
			Bitmap_Layer = value;
			if(Bitmap_Started==true){
				EnterFrame.addFunction(Bitmap_EnterFrame, Bitmap_Layer);
			}
		},
		get: function(){
			return Bitmap_Layer;
		}
	});
	
	Object.defineProperty(current, "x", {
		set: function(value){
			x = value;
		},
		get: function(){
			return x;
		}
	});
	
	Object.defineProperty(current, "y", {
		set: function(value){
			y = value;
		},
		get: function(){
			return y;
		}
	});
	
	Object.defineProperty(current, "width", {
		get: function(){
			return Bitmap_Width;
		}
	});
	
	Object.defineProperty(current, "height", {
		get: function(){
			return Bitmap_Height;
		}
	});
	
	Object.defineProperty(current, "image", {
		set: function(value){
			Bitmap_Image = value;
			Bitmap_Width = Bitmap_Image.width;
			Bitmap_Height = Bitmap_Image.height;
		},
		get: function(){
			return Bitmap_Image;
		}
	});
	
}