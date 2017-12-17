const Shirt = function(index){
    function Shirt_Action() {
		let current = this;
		let Shirt_Index = 0;
		let x = 0;
		let y = 0;
		let Shirt_ClickCalback = function(){return false;};
		let Shirt_AnimationStopCalback = function(){return false;};
		console.log('Shirt_Action: --------------------------------- init('+index+')');
		
		let ImagesList = [
			ImageLoader.getImage(Images[0]),
			ImageLoader.getImage(Images[1]),
			ImageLoader.getImage(Images[2]),
			ImageLoader.getImage(Images[3]),
			ImageLoader.getImage(Images[4]),
			ImageLoader.getImage(Images[5]),
			ImageLoader.getImage(Images[6]),
			ImageLoader.getImage(Images[7]),
			ImageLoader.getImage(Images[8]),
			ImageLoader.getImage(Images[9]),
			ImageLoader.getImage(Images[10]),
			ImageLoader.getImage(Images[11]),
			ImageLoader.getImage(Images[12]),
			ImageLoader.getImage(Images[13]),
			ImageLoader.getImage(Images[14])
		];
		
		let _animation_1 = new Animation([ImagesList[0]]);
		_animation_1.frameRate = 24;
		_animation_1.x = x;
		_animation_1.y = y;
		_animation_1.start();
		//--------------------
		Shirt_OnMouseDown = function(eventData){
			switch(eventData.which){
				case 1:{
					let _mX =  Mouse.getX() - x;
					let _mY =  Mouse.getY() - y;
					if((0<_mX && _mX<50) &&  (0<_mY && _mY<50)){
						if(Shirt_ClickCalback(index)==true){							
							_animation_1.setList(ImagesList);
							_animation_1.playAndStop(function(){Shirt_AnimationStopCalback(index)});
						}						
					}
					break;
				}
			}		
		};
		//--------------------
		Mouse.addDownFunction(Shirt_OnMouseDown, 0);
		//--------------------
		current.show = function(){
			_animation_1.setList([ImagesList[0]]);
			_animation_1.start();
		};
		//--------------------
		Object.defineProperty(current, "animationStop", {
			set: function(value){
				Shirt_AnimationStopCalback = value;
			},
			get: function(){
				return Shirt_AnimationStopCalback;
			}
		});
		Object.defineProperty(current, "clickCalback", {
			set: function(value){
				Shirt_ClickCalback = value;
			},
			get: function(){
				return Shirt_ClickCalback;
			}
		});
		Object.defineProperty(current, "layer", {
			set: function(value){
				Shirt_Index = value;
				_animation_1.layer = Shirt_Index;
			},
			get: function(){
				return Shirt_Index;
			}
		});
		Object.defineProperty(current, "x", {
			set: function(value){
				x = value;
				_animation_1.x = value;
			},
			get: function(){
				return x;
			}
		});
		Object.defineProperty(current, "y", {
			set: function(value){
				y = value;
				_animation_1.y = value;
			},
			get: function(){
				return y;
			}
		});
    }
	return new Shirt_Action();
};