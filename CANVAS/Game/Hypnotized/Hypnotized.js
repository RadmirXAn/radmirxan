const Hypnotized = function(layer) {
	//------
	let _img_1 = './Images/Hypnotized/0/1.png';
	let _img_2 = './Images/Hypnotized/0/3.png';
	let _img_3 = './Images/Hypnotized/0/5.png';
	let _img_4 = './Images/Hypnotized/0/7.png';
	let _img_5 = './Images/Hypnotized/0/9.png';
	let _img_6 = './Images/Hypnotized/0/11.png';
	let _img_7 = './Images/Hypnotized/0/13.png';
	let _img_8 = './Images/Hypnotized/0/15.png';

	let _animation_1;
	
	let _HypnotizedImages = [
		_img_1,
		_img_2,
		_img_3,
		_img_4,
		_img_5,
		_img_6,
		_img_7,
		_img_8
	];
	
	let x = 0;
	let y = 0;
	//------
	this.enterFrame = function(){

	}.bind(this);	
	
	this.start = function (){
		
		let _HypnotizedImagesList = [
			ImageLoader.getImage(_img_1),
			ImageLoader.getImage(_img_2),
			ImageLoader.getImage(_img_3),
			ImageLoader.getImage(_img_4),
			ImageLoader.getImage(_img_5),
			ImageLoader.getImage(_img_6),
			ImageLoader.getImage(_img_7),
			ImageLoader.getImage(_img_8)
		];
		
        _animation_1 = new Animation(_HypnotizedImagesList, layer);
		_animation_1.frameRate = 24;
		_animation_1.x = x;
		_animation_1.y = y;
		_animation_1.start();	
		EnterFrame.addFunction(this.enterFrame);
	}.bind(this);

	this.stop = function (){
		_animation_1.stop();
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);

    ImageLoader.load(_HypnotizedImages, this.start);
	//------
	Object.defineProperty(this, "x", { 
		set: function (value) {
			x = value;
			if(_animation_1!=undefined){
				_animation_1.x = value;
			}
		},
		get: function () {
			return x;
		}
	});
	Object.defineProperty(this, "y", { 
		set: function (value) {
			y = value;
			if(_animation_1!=undefined){
				_animation_1.y = value;
			}			
		},
		get: function () {
			return y;
		}
	});
}