function  Cursor(layer) {
	//------
	let _img_1 = './Images/3.png';
	let _image_1;

	let _CursorImages = [
		_img_1
	];
	//------
	this.enterFrame = function(){
		_image_1.x = mouseX;
		_image_1.y = mouseY;		
	}.bind(this);	
	
	this.start = function (){
		_image_1 = new RadMirXAn_Image(RadMirXAnImage[_img_1], layer);
		_image_1.start();	
		addEF(this.enterFrame);
	}.bind(this);

	this.stop = function (){
		_image_1.stop();		
		removeEF(this.enterFrame);
	}.bind(this);

	IncludeImages(_CursorImages, this.start);
}