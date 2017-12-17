const Cursor = function() {
	let Cursor_Layer = 0;
	let Cursor_ImageURL = './RadmirXAn/Cursor/Images/0.png';	
	let _CursorImages = [
		Cursor_ImageURL
	];
	let Cursor_Image;

	Cursor_EnterFrame = function(){
		Cursor_Image.x = Mouse.getX();
		Cursor_Image.y = Mouse.getY();		
	}.bind(this);	
	
	Cursor_Start = function (){
        Cursor_Image = new Bitmap(ImageLoader.getImage(Cursor_ImageURL));
		Cursor_Image.layer = Cursor_Layer;
		Cursor_Image.start();	
		EnterFrame.addFunction(Cursor_EnterFrame);
	}.bind(this);

	this.stop = function (){
		Cursor_Image.stop();		
		EnterFrame.removeFunction(Cursor_EnterFrame);
	}.bind(this);

    ImageLoader.load(_CursorImages, Cursor_Start);
}();