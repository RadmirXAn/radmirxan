const Canvas_TimeLapseAnimation = function(Canvas_TimeLapseAnimation_ImageList, Canvas_TimeLapseAnimation_Layer) {
	let Canvas_TimeLapseAnimation_List = Canvas_TimeLapseAnimation_ImageList;
	let Canvas_TimeLapseAnimation_Image = new Canvas_Image(Canvas_TimeLapseAnimation_List[0], Canvas_TimeLapseAnimation_Layer);
	let time = EnterFrame.getTime();
	let lastTime = EnterFrame.getTime();
	let frames_count = Canvas_TimeLapseAnimation_ImageList.length;
	let currentFrame = 0;
	this.ms = 0;
	this.x = 0;
	this.y = 0;
	this.enterFrame = function(){
		time = EnterFrame.getTime();
		if( ((time - lastTime) > this.ms)){
			lastTime = time;
			currentFrame++;
			currentFrame %= frames_count;
			Canvas_TimeLapseAnimation_Image.setImage(Canvas_TimeLapseAnimation_List[currentFrame]);
		}
	}.bind(this);
	this.setList = function(Canvas_TimeLapseAnimation_ImageList){
		Canvas_TimeLapseAnimation_List = Canvas_TimeLapseAnimation_ImageList;
		frames_count = Canvas_TimeLapseAnimation_ImageList.length;
	}.bind(this);
	this.start = function (){
		Canvas_TimeLapseAnimation_Image.start();
		EnterFrame.addFunction(this.enterFrame, Canvas_TimeLapseAnimation_Layer);
	}.bind(this);
	this.stop = function (){
		Canvas_TimeLapseAnimation_Image.stop();
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);
}