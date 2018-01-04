const Shirt = function(index){
    function Shirt_Action() {
		let current = this;
		let Shirt_Index = 0;
		let x = 0;
		let y = 0;
		let Shirt_ClickCallBack = function(){return false;};
		let Shirt_OpennedCalback = function(value){return false;};
		let Shirt_ClosedCalback = function(value){return false;};
		console.log('Shirt_Action: --------------------------------- init('+index+')');	
		let _animation_1 = new Animation();		
		_animation_1.useList(Images.ShirtAnimation);
		_animation_1.frameRate = 24;
		_animation_1.playWith(0,0);
		_animation_1.x = x;
		_animation_1.y = y;		
		//--------------------
		let Shirt_OnMouseUp = function(eventData){
			let _mX =  Mouse.getX() - x;
			let _mY =  Mouse.getY() - y;
			if((0<_mX && _mX<50) &&  (0<_mY && _mY<50)){
				Shirt_ClickCallBack(index);						
			}		
		};
		//--------------------
		current.start = function (){
			Mouse.addUpFunction(Shirt_OnMouseUp, 0);
			_animation_1.start();
		}
		current.stop = function (){
			Mouse.removeUpFunction(Shirt_OnMouseUp);
			_animation_1.stop();
		}
		//--------------------
		current.open = function(){
			_animation_1.playTo(1, Images.ShirtAnimation.length-1,function(){Shirt_OpennedCalback(index)});
		};
		current.close = function(){
			_animation_1.playTo(-1, 0, function(){Shirt_ClosedCalback(index)});
		};
		//--------------------
		Object.defineProperty(current, "ClosedCalback", {
			set: function(value){
				Shirt_ClosedCalback = value;
			},
			get: function(){
				return Shirt_ClosedCalback;
			}
		});
		Object.defineProperty(current, "OpennedCalback", {
			set: function(value){
				Shirt_OpennedCalback = value;
			},
			get: function(){
				return Shirt_OpennedCalback;
			}
		});
		Object.defineProperty(current, "ClickCallBack", {
			set: function(value){
				Shirt_ClickCallBack = value;
			},
			get: function(){
				return Shirt_ClickCallBack;
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