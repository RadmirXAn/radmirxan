const Hypnotized = function(layer) {
	//------
	let _img_1 = './Animations/0/1.png';
	let _img_2 = './Animations/0/3.png';
	let _img_3 = './Animations/0/5.png';
	let _img_4 = './Animations/0/7.png';
	let _img_5 = './Animations/0/9.png';
	let _img_6 = './Animations/0/11.png';
	let _img_7 = './Animations/0/13.png';
	let _img_8 = './Animations/0/15.png';

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
		
        _animation_1 = new Canvas_TimeLapseAnimation(_HypnotizedImagesList, layer);
		_animation_1.ms = 24;
		_animation_1.start();	
		EnterFrame.addFunction(this.enterFrame);
	}.bind(this);

	this.stop = function (){
		_animation_1.stop();
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);

    ImageLoader.load(_HypnotizedImages, this.start);
}