function  Starter(action, layer) {
	//------
	let _img_1 = './Images/7.png';

	let _image_1;

	let _StarterImages = [
		_img_1
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

	this.onMouseDown = function(eventData){
		switch(eventData.which){
			case 1:{
				if(_image_1.hitTest(mouseX, mouseY)){
					this.stop();
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

	this.start = function (){
		_image_1 = new RadMirXAn_Image(RadMirXAnImage[_img_1], layer);
		_image_1.x = this.x;
		_image_1.y = this.y;
		_image_1.start();
		addMouseDown(this.onMouseDown, layer);
	}.bind(this);

	this.stop = function (){
		action();
		_image_1.stop();		
		removeMouseDown(this.onMouseDown);
	}.bind(this);

	IncludeImages(_StarterImages, this.start);
}

Object.defineProperty(Starter, "x", {
  get: function() {
    return _this.x;
  },
  set: function(value) {
     this.setX(value);
  }
});

Object.defineProperty(Starter, "y", {
  get: function() {
    return _this.y;
  },
  set: function(value) {
     this.setY(value);
  }
});