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
        _image_1 = new Canvas_Image(ImageLoader.getImage(_img_1), layer);
		_image_1.start();	
		EnterFrame.addFunction(this.enterFrame);
	}.bind(this);

	this.stop = function (){
		_image_1.stop();		
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);

    ImageLoader.load(_CursorImages, this.start);
}