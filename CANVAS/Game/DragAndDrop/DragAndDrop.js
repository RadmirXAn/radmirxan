function  DragAndDrop(image_url, layer) {
	//------
	let _image_1;

	let _DragAndDropImages = [
		image_url
	];
	//------
	this.x = 0;
	let setX = function(value){
		this.x = value;
		if(_image_1!=undefined){
			_image_1.x = value;
		}
	}.bind(this);
	
	this.y = 0;
	let setY = function(value){
		this.y = value;
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
				_drag[0] = _image_1.hitTest(mouseX, mouseY);
				_drag[1] = _image_1.x-mouseX;
				_drag[2] = _image_1.y-mouseY;
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
			_image_1.x = mouseX + _drag[1];
			_image_1.y = mouseY + _drag[2];
		}
	}.bind(this);

	this.start = function (){
        _image_1 = new Canvas_Image(ImageLoader.getImage(image_url), layer);
		_image_1.x = this.x;
		_image_1.y = this.y;
		_image_1.start();
		addMouseDown(this.onMouseDown, layer);
		addMouseUp(this.onMouseUp, layer);
		EnterFrame.addFunction(this.enterFrame);
	}.bind(this);

	this.stop = function (){
		_image_1.stop();		
		removeMouseDown(this.onMouseDown);
		removeMouseUp(this.onMouseUp);
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);

    ImageLoader.load(_DragAndDropImages, this.start);
}

Object.defineProperty(DragAndDrop, "x", {
  get: function() {
    return this.x;
  },
  set: function(value) {
     this.setX(value);
  }
});

Object.defineProperty(DragAndDrop, "y", {
  get: function() {
    return this.y;
  },
  set: function(value) {
     this.setY(value);
  }
});