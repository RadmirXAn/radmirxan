const DragAndDrop = function(image_url, layer) {
	//------
	let _image_1;

	let _DragAndDropImages = [
		image_url
	];
	//------
	let x = 0;
	let setX = function(value){
		x = value;
		if(_image_1!=undefined){
			_image_1.x = value;
		}
	}.bind(this);
	
	let y = 0;
	let setY = function(value){
		y = value;
		if(_image_1!=undefined){
			_image_1.y = value;
		}
	}.bind(this);
	//------
	let _drag = [false, 0, 0];

	this.onMouseUp = function(eventData){
		switch(eventData.which){
			case 1:{
				//console.log('onMouseDown левая кнопка');
				_drag[0] = false;
				break;
			}
			case 2:{
				//console.log('onMouseDown средняя кнопка');
				break;
			}
			case 3:{
				//console.log('onMouseDown правая кнопка');
				break;
			}
		}		
	}.bind(this);
	
	this.onMouseDown = function(eventData){
		switch(eventData.which){
			case 1:{
				//console.log('onMouseDown левая кнопка');
				let _mX =  Mouse.getX() - _image_1.x;
				let _mY =  Mouse.getY() - _image_1.y;
				if((0<_mX && _mX<_image_1.width) &&  (0<_mY && _mY<_image_1.height)){
					_drag[0] = _image_1.getPixel(_mX, _mY)[3]!=0;
					if(_drag[0]==true){
						Mouse.stopPropagation();
					}
					_drag[1] = _image_1.x-Mouse.getX();
					_drag[2] = _image_1.y-Mouse.getY();
				}
				break;
			}
			case 2:{
				//console.log('onMouseDown средняя кнопка');
				break;
			}
			case 3:{
				//console.log('onMouseDown правая кнопка');
				break;
			}
		}		
	}.bind(this);

	this.enterFrame = function(){
		if(_drag[0]==true){
			_image_1.x = Mouse.getX() + _drag[1];
			_image_1.y = Mouse.getY() + _drag[2];
		}
	}.bind(this);

	this.start = function (){
        _image_1 = new Bitmap(ImageLoader.getImage(image_url), layer);
		_image_1.x = this.x;
		_image_1.y = this.y;
		_image_1.start();
		Mouse.addDownFunction(this.onMouseDown, layer);
		Mouse.addUpFunction(this.onMouseUp, layer);
		EnterFrame.addFunction(this.enterFrame);
	}.bind(this);

	this.stop = function (){
		_image_1.stop();		
		Mouse.removeDownFunction(this.onMouseDown);
		Mouse.removeUpFunction(this.onMouseUp);
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);

    ImageLoader.load(_DragAndDropImages, this.start);
	//----------------------------
	Object.defineProperty(this, "x", {
	  get: function() {
		return x;
	  },
	  set: function(value) {
		 setX(value);
	  }
	});

	Object.defineProperty(this, "y", {
	  get: function() {
		return y;
	  },
	  set: function(value) {
		 setY(value);
	  }
	});
}