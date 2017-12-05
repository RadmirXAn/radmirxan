function  Background(layer) {
	//------
	let _img_1 = './Images/1.jpg';

	let _image_1;

	let _BackgroundImages = [
		_img_1
	];
	//------
	this.start = function (){
		_image_1 = new RadMirXAn_Image(RadMirXAnImage[_img_1], layer);
		_image_1.start();
	}.bind(this);

	this.stop = function (){
		_image_1.stop();		
	}.bind(this);
	
	IncludeImages(_BackgroundImages, this.start);
}