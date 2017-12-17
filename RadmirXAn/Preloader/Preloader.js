const Preloader = function() {
	let current = this;
	let Preloader_ImageURL_0 = './RadmirXAn/Preloader/Images/0.png';
	let Preloader_ImageURL_1 = './RadmirXAn/Preloader/Images/1.jpg';
	let Preloader_ImageURLs = [
		Preloader_ImageURL_0,
		Preloader_ImageURL_1
	];
	let Preloader_ImageLogo;
	let Preloader_ImageBackground;
	let Preloader_Step = 0;
	let Preloader_Percent = 0;
	let Preloader_Context = Canvas.getVisibleContext();

	Preloader_OnMouseDown = function(eventData){
		switch(eventData.which){
			case 1:{
				let mX =  Mouse.getX() - Preloader_ImageLogo.x;
				let mY =  Mouse.getY() - Preloader_ImageLogo.y;
				if((0<mX && mX<Preloader_ImageLogo.width) &&  (0<mY && mY<Preloader_ImageLogo.height)){
					if(Preloader_ImageLogo.getPixel(mX, mY)[3]!=0){
						Mouse.removeDownFunction(Preloader_OnMouseDown);
						Preloader_LoadResources();
					}						
				}				
				break;
			}
		}		
	};

	let Preloader_EnterFrame = function(){
		
		let Y = Preloader_ImageLogo.y+Preloader_ImageLogo.height+15;
		let X = Canvas.width()*Preloader_Percent;
		
		Preloader_Context.beginPath();
		Preloader_Context.strokeStyle = '#000000';
		Preloader_Context.moveTo(0, Y);
		Preloader_Context.lineTo(X, Y);
		Preloader_Context.stroke();
		
		Preloader_Context.beginPath();
		Preloader_Context.strokeStyle = '#ff0000';
		Preloader_Context.moveTo(X, Y);
		Preloader_Context.lineTo(Canvas.width(), Y);		
		Preloader_Context.stroke();
	};
	
	Preloader_Start = function (){
        Preloader_ImageLogo = new Bitmap(ImageLoader.getImage(Preloader_ImageURL_0));
		Preloader_ImageLogo.layer = 1;
		Preloader_ImageLogo.x = Math.floor((Canvas.width()-Preloader_ImageLogo.width)/2);
		Preloader_ImageLogo.y = Math.floor((Canvas.height()-Preloader_ImageLogo.height)/2);
		Preloader_ImageLogo.start();
		
		Preloader_ImageBackground = new Bitmap(ImageLoader.getImage(Preloader_ImageURL_1));
		Preloader_ImageBackground.layer = 2;
		Preloader_ImageBackground.start();
		
		Mouse.addDownFunction(Preloader_OnMouseDown, 1);
		EnterFrame.addFunction(Preloader_EnterFrame, 1);
	};

	Preloader_Stop = function (){
		Preloader_ImageLogo.stop();
		Preloader_ImageBackground.stop();
		Mouse.removeDownFunction(Preloader_OnMouseDown);
		EnterFrame.removeFunction(Preloader_EnterFrame);
	};

	let MainClasses = [
	'./Game/Images.js',
	'./Game/Sounds.js',
	'./Game/Classes.js'
	];
	ClassLoader.load(MainClasses, function(){
		ImageLoader.load(Preloader_ImageURLs, Preloader_Start);
	});
	
	let Preloader_Progress = function(value){
		Preloader_Percent = (Preloader_Step+value)/3;
	}
	
	let Preloader_LoadResources = function(){
		AudioLoader.load(Sounds, function(){
			Preloader_Step = 1;
			ImageLoader.load(Images, function(){
				Preloader_Step = 2;
				ClassLoader.load(Classes, Preloader_Stop, Preloader_Progress);
			}, Preloader_Progress);
		}, Preloader_Progress);
	}
}();