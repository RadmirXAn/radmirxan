function  SoundButtons(layer) {
	//------
	let _img_1 = './Images/6.png';

	let _animation_1;
	let _animation_2;
	let _animation_3;
	let _animation_4;
	let _animation_5;
	let _animation_6;

	let _SoundButtonsImages = [
		_img_1
	];
	//------
	let _sound_1 = './Sounds/1.mp3';
	
	let audio;

	let _SoundButtonsSounds = [
		_sound_1
	];
	//------
	let _IncludeSoundButtonsClasses = [	
		'./Game/SoundButtons/SoundButtons_Animation.js'
	];
	//------
	this.x = 0;
	let setX = function(value){
		this.x = value;
		if(_animation_1!=undefined){
			_animation_1.x = value;
		}
		if(_animation_2!=undefined){
			_animation_2.x = value+80;
		}
		if(_animation_3!=undefined){
			_animation_3.x = value+160;
		}
		if(_animation_4!=undefined){
			_animation_4.x = value+240;
		}
		if(_animation_5!=undefined){
			_animation_5.x = value
		}
		if(_animation_6!=undefined){
			_animation_6.x = value
		}
	}.bind(this);
	
	this.y = 0;
	let setY = function(value){
		this.y = value;
		if(_animation_1!=undefined){
			_animation_1.y = value+80;
		}
		if(_animation_2!=undefined){
			_animation_2.y = value+80;
		}
		if(_animation_3!=undefined){
			_animation_3.y = value+80;
		}
		if(_animation_4!=undefined){
			_animation_4.y = value+80;
		}
		if(_animation_5!=undefined){
			_animation_5.y = value
		}
		if(_animation_6!=undefined){
			_animation_6.y = value
		}
	}.bind(this);
	//------
	let drag = false;
	//------
	this.audioEnded = function(){
		_animation_1.animation(SoundButtons_Animation.playButton_off);
		_animation_2.animation(SoundButtons_Animation.pauseButton_off);
		_animation_3.animation(SoundButtons_Animation.stopButton_off);
	}.bind(this);
	
	let volume = function (val){
		let on = [{x:SoundButtons_Animation.volume_on[0].x,
					y:SoundButtons_Animation.volume_on[0].y,
					w:SoundButtons_Animation.volume_on[0].w,
					h:SoundButtons_Animation.volume_on[0].h,
					dx:SoundButtons_Animation.volume_on[0].dx,
					dy:SoundButtons_Animation.volume_on[0].dy}
				];
		let onW = on[0].w;
		on[0].w = onW*val;
		let off = [{x:SoundButtons_Animation.volume_off[0].x,
					y:SoundButtons_Animation.volume_off[0].y,
					w:SoundButtons_Animation.volume_off[0].w,
					h:SoundButtons_Animation.volume_off[0].h,
					dx:SoundButtons_Animation.volume_off[0].dx,
					dy:SoundButtons_Animation.volume_off[0].dy}
				];
		off[0].w = off[0].w - on[0].w;
		off[0].x += on[0].w;
		off[0].dx = on[0].w;
		_animation_5.animation(on);
		_animation_6.animation(off);
	}.bind(this);
	
	this.enterFrame = function(){	
		if(drag){
			if( (this.x < mouseX) && (mouseX < this.x+320) ){
				audio.volume = (mouseX-this.x)/320;
				volume(audio.volume);
			}
		}
	}.bind(this);
	
	this.onMouseUp = function(eventData){
		switch(eventData.which){
			case 1:{
				drag = false;
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
				if( (this.x < mouseX) && (mouseX < this.x+320) && (this.y < mouseY) && (mouseY < this.y+80) ){
					drag = true;
				}else if( (this.x < mouseX) && (mouseX < this.x+320) && (this.y+80 < mouseY) && (mouseY < this.y+160) ){
					if(_animation_1.hitTest(mouseX, mouseY)){
						_animation_1.animation(SoundButtons_Animation.playButton_on);
						_animation_2.animation(SoundButtons_Animation.pauseButton_off);
						_animation_3.animation(SoundButtons_Animation.stopButton_off);
						audio.play();
					}else if(_animation_2.hitTest(mouseX, mouseY)){
						_animation_1.animation(SoundButtons_Animation.playButton_off);
						_animation_2.animation(SoundButtons_Animation.pauseButton_on);
						_animation_3.animation(SoundButtons_Animation.stopButton_off);
						audio.pause();
					}else if(_animation_3.hitTest(mouseX, mouseY)){
						_animation_1.animation(SoundButtons_Animation.playButton_off);
						_animation_2.animation(SoundButtons_Animation.pauseButton_off);
						_animation_3.animation(SoundButtons_Animation.stopButton_on);
						audio.pause();
						audio.currentTime = 0.0;
					}else if(_animation_4.hitTest(mouseX, mouseY)){
						if(audio.loop){
							audio.loop = false;
							_animation_4.animation(SoundButtons_Animation.loopButton_off);
						}else{
							audio.loop = true;
							_animation_4.animation(SoundButtons_Animation.loopButton_on);
						}
					}
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
		audio = AudioLoader.getAudio(_sound_1);
		audio.addEventListener('ended', this.audioEnded);
		//audio.play();
		audio.volume = 0.5;
		//audio.currentTime = audio.duration*0.9;
		//audio.loop = true;//Бесконечный цикл
		//console.log('Длительность трека %s секунд', audio.duration);
		//audio.currentTime = 25.0;
		//audio.pause();
		
        _animation_1 = new RadMirXAn_Animation(ImageLoader.getImage(_img_1), layer);
		_animation_1.animation(SoundButtons_Animation.playButton_off);
		_animation_1.x = this.x;
		_animation_1.y = this.y+80;
		_animation_1.start();
		
        _animation_2 = new RadMirXAn_Animation(ImageLoader.getImage(_img_1), layer);
		_animation_2.animation(SoundButtons_Animation.pauseButton_off);
		_animation_2.x = this.x+80;
		_animation_2.y = this.y+80;
		_animation_2.start();
		
        _animation_3 = new RadMirXAn_Animation(ImageLoader.getImage(_img_1), layer);
		_animation_3.animation(SoundButtons_Animation.stopButton_off);
		_animation_3.x = this.x+160;
		_animation_3.y = this.y+80;
		_animation_3.start();
		
        _animation_4 = new RadMirXAn_Animation(ImageLoader.getImage(_img_1), layer);
		_animation_4.animation(SoundButtons_Animation.loopButton_off);
		_animation_4.x = this.x+240;
		_animation_4.y = this.y+80;
		_animation_4.start();
		
        _animation_5 = new RadMirXAn_Animation(ImageLoader.getImage(_img_1), layer);
		//_animation_5.animation(SoundButtons_Animation.volume_on);
		_animation_5.x = this.x;
		_animation_5.y = this.y;
		_animation_5.start();
		
        _animation_6 = new RadMirXAn_Animation(ImageLoader.getImage(_img_1), layer);
		//_animation_6.animation(SoundButtons_Animation.volume_off);
		_animation_6.x = this.x;
		_animation_6.y = this.y;
		_animation_6.start();
		
		volume(audio.volume);
		
		addMouseUp(this.onMouseUp, layer);
		addMouseDown(this.onMouseDown, layer);
		EnterFrame.addFunction(this.enterFrame);
	}.bind(this);

	this.stop = function (){
		audio.removeEventListener('ended', this.audioEnded);
		_animation_1.stop();
		_animation_2.stop();
		_animation_3.stop();
		_animation_4.stop();
		_animation_5.stop();
		_animation_6.stop();		
		removeMouseUp(this.onMouseUp);
		removeMouseDown(this.onMouseDown);
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);

	ClassLoader.load(_IncludeSoundButtonsClasses, function(){
        ImageLoader.load(_SoundButtonsImages, function(){
			AudioLoader.load(_SoundButtonsSounds, this.start);
		}.bind(this));
	}.bind(this));
}

Object.defineProperty(SoundButtons, "x", {
  get: function() {
    return _this.x;
  },
  set: function(value) {
     this.setX(value);
  }
});

Object.defineProperty(SoundButtons, "y", {
  get: function() {
    return _this.y;
  },
  set: function(value) {
     this.setY(value);
  }
});