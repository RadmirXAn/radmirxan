function  Scot(layer) {
	//------
	let _img_1 = './Images/4.png';

	let _animation_1;
	
	let _ScotImages = [
		_img_1
	];
	//------
	let IncludeScotClasses = [	
		'./Game/Scot/Scot_Animation.js'
	];
	//------
	let _direction = 'right';//'left'
	let _action = 'idle';//'run'
	//------
	let setScotAnimation = function(){
		if(_action=='idle'){
			if(_direction=='right'){
				_animation_1.animation(Scot_Animation.idle_right);
			}else if(_direction=='left'){
				_animation_1.animation(Scot_Animation.idle_left);
			}
		}else if(_action=='run_up'){
			if(_direction=='right'){
				_animation_1.animation(Scot_Animation.run_right);
			}else if(_direction=='left'){
				_animation_1.animation(Scot_Animation.run_left);
			}
		}else if(_action=='run_down'){
			if(_direction=='right'){
				_animation_1.animation(Scot_Animation.run_right);
			}else if(_direction=='left'){
				_animation_1.animation(Scot_Animation.run_left);
			}
		}else if(_action=='run_left'){
			_animation_1.animation(Scot_Animation.run_left);
		}else if(_action=='run_right'){
			_animation_1.animation(Scot_Animation.run_right);
		}
	}

	this.onKeyUp = function(eventData){
		switch(eventData.keyCode){
			case 37:
			case 38:
			case 39:
			case 40:
			{				
				if(!keyCode[37] && !keyCode[38] && !keyCode[39] && !keyCode[40]){
					_action = 'idle';					
				}else if(keyCode[37]){
					_action = 'run_left';
					_direction = 'left';
				}else if(keyCode[39]){
					_action = 'run_right';
					_direction = 'right';
				}else if(keyCode[40]){
					_action = 'run_down';
				}else if(keyCode[38]){
					_action = 'run_up';
				}
				setScotAnimation();
				break;
			}
		}
	}

	this.onKeyDown = function(eventData){
		switch(eventData.keyCode){
			case 37:{
				_action = 'run_left';
				_direction = 'left';
				setScotAnimation();
				break;
			}
			case 39:{
				_action = 'run_right';
				_direction = 'right';
				setScotAnimation();				
				break;
			}
			case 40:{
				_action = 'run_down';
				setScotAnimation();
				break;
			}
			case 38:{
				_action = 'run_up';
				setScotAnimation();
				break;
			}
		}
	}

	this.test = function(item, index, array) {
			this.drawCross(item.x, item.y);
	}.bind(this);
	
	this.enterFrame = function(){
		if(_action=='run_up'){
			_animation_1.y-=1;
		}else if(_action=='run_down'){
			_animation_1.y+=1;
		}else if(_action=='run_left'){
			_animation_1.x-=1;
		}else if(_action=='run_right'){
			_animation_1.x+=1;
		}
	}.bind(this);	
	
	this.start = function (){
        _animation_1 = new Canvas_Animation(ImageLoader.getImage(_img_1), layer);
		_animation_1.animation(Scot_Animation.idle_right);
		_animation_1.ms = 100;			
		_animation_1.x = 0;
		_animation_1.y = 0;
		_animation_1.start();	
		addKeyDown(this.onKeyDown);
		addKeyUp(this.onKeyUp);
		EnterFrame.addFunction(this.enterFrame);
	}.bind(this);

	this.stop = function (){
		_animation_1.stop();
		removeKeyDown(this.onKeyDown);
		removeKeyUp(this.onKeyUp);
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);

	ClassLoader.load(IncludeScotClasses, function(){
        ImageLoader.load(_ScotImages, this.start);
	}.bind(this));
}