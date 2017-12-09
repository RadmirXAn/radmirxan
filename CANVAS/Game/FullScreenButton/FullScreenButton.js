function  FullScreenButton(layer) {
	//------
	let _img_1 = './Images/5.png';

	let _animation_1;

	let _FullScreenImages = [
		_img_1
	];
	//------
		let IncludeFullScreenButtonClasses = [	
		'./Game/FullScreenButton/FullScreenButton_Animation.js'
	];
	//------
	this.x = 0;
	let setX = function(value){
		this.x = value;
		if(_animation_1!=undefined){
			_animation_1.x = value;
		}
	}.bind(this);
	
	this.y = 0;
	let setY = function(value){
		this.y = value;
		if(_animation_1!=undefined){
			_animation_1.y = value;
		}
	}.bind(this);
	//------
	this.onFullScreen = function(eventData){
		if (FullScreen.IsFullScreen()) {
			_animation_1.animation(FullScreenButton_Animation.fullScreen_on);
		}else{
			_animation_1.animation(FullScreenButton_Animation.fullScreen_off);
		}
	}
	
	this.onMouseUp = function(eventData){
		switch(eventData.which){
			case 1:{
				if(_animation_1.hitTest(mouseX, mouseY)){					
					if(FullScreen.IsFullScreen()){
						FullScreen.Off();												
					}else{
						FullScreen.On();						
					}
					return stoppropagation;
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
        _animation_1 = new RadMirXAn_Animation(ImageLoader.getImage(_img_1), layer);
		_animation_1.animation(FullScreenButton_Animation.fullScreen_off);
		_animation_1.x = this.x;
		_animation_1.y = this.y;
		_animation_1.start();
		addMouseUp(this.onMouseUp);
		FullScreen.addFunction(this.onFullScreen);
	}.bind(this);

	this.stop = function (){
		_animation_1.stop();
		removeMouseUp(this.onMouseUp);
		FullScreen.removeFunction(this.onFullScreen);
	}.bind(this);

	ClassLoader.load(IncludeFullScreenButtonClasses, function(){
        ImageLoader.load(_FullScreenImages, this.start);
	}.bind(this));
}

Object.defineProperty(FullScreenButton, "x", {
  get: function() {
    return _this.x;
  },
  set: function(value) {
     this.setX(value);
  }
});

Object.defineProperty(FullScreenButton, "y", {
  get: function() {
    return _this.y;
  },
  set: function(value) {
     this.setY(value);
  }
});