const Bitmap = function() {
	
	let current = this;
	let Bitmap_Image;
	let Bitmap_Layer = 0;
	
	let x = 0;
	let y = 0;
	
	let Bitmap_Started = false;
	
	let Bitmap_Context = Canvas.context2D();

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
			return Bitmap_Image.width;
		}
	});
	
	Object.defineProperty(current, "height", {
		get: function(){
			return Bitmap_Image.height;
		}
	});
	
	Object.defineProperty(current, "image", {
		set: function(value){
			Bitmap_Image = value;
		},
		get: function(){
			return Bitmap_Image;
		}
	});
	
}