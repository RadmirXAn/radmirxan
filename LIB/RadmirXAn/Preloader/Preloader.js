const Preloader = function() {
	let current = this;
	let Preloader_ImageURL_0 = './LIB/RadmirXAn/Preloader/Images/LOGO.png';
	let Preloader_ImageURLs = [Preloader_ImageURL_0];
	let Preloader_ImageLogo;
	let Preloader_Step = 0;
	let Preloader_Percent = 0;
	let Preloader_Context = Canvas.getVisibleContext();

	Preloader_OnMouseDown = function(eventData){
		switch(eventData.which){
			case 1:{
				let mX =  Mouse.getX() - Preloader_ImageLogo.x;
				let mY =  Mouse.getY() - Preloader_ImageLogo.y;
				if((0<mX && mX<Preloader_ImageLogo.width) &&  (0<mY && mY<Preloader_ImageLogo.height)){					
					Mouse.removeDownFunction(Preloader_OnMouseDown);
					ClassLoader.load(MainClasses, function(){
						Preloader_LoadResources();
					});							
				}				
				break;
			}
		}		
	};

	let Preloader_EnterFrame = function(){
		
		Preloader_Context.beginPath();
		Preloader_Context.lineWidth = 0;
		Preloader_Context.fillStyle = '#111111';
		Preloader_Context.strokeStyle = '#111111';
		Preloader_Context.rect(0, 0, Canvas.width(), Canvas.height());		
		Preloader_Context.fill();
		Preloader_Context.stroke();
		
		let Y = Preloader_ImageLogo.y+Preloader_ImageLogo.height+15;
		let X = Canvas.width()*Preloader_Percent;
		
		Preloader_Context.beginPath();
		Preloader_Context.lineWidth = 7;
		Preloader_Context.strokeStyle = '#ffffff';
		Preloader_Context.moveTo(0, Y);
		Preloader_Context.lineTo(X, Y);
		Preloader_Context.stroke();
		
		Preloader_Context.beginPath();
		Preloader_Context.lineWidth = 7;
		Preloader_Context.strokeStyle = '#aaf';
		Preloader_Context.moveTo(X, Y);
		Preloader_Context.lineTo(Canvas.width(), Y);		
		Preloader_Context.stroke();
	};
	
	Preloader_Start = function (){
        Preloader_ImageLogo = new Bitmap();
		Preloader_ImageLogo.image = ImageLoader.getImage(Preloader_ImageURL_0);
		Preloader_ImageLogo.layer = 1;
		Preloader_ImageLogo.x = Math.floor((Canvas.width()-Preloader_ImageLogo.width)/2);
		Preloader_ImageLogo.y = Math.floor((Canvas.height()-Preloader_ImageLogo.height)/2);
		Preloader_ImageLogo.start();
		
		Mouse.addDownFunction(Preloader_OnMouseDown, 1);
		EnterFrame.addFunction(Preloader_EnterFrame, 2);
	};

	Preloader_Stop = function (){
		Preloader_ImageLogo.stop();
		Mouse.removeDownFunction(Preloader_OnMouseDown);
		EnterFrame.removeFunction(Preloader_EnterFrame);
	};

	let MainClasses = [
		appPath+'/App/Images.js',
		appPath+'/App/Sounds.js',
		appPath+'/App/Classes.js'
	];
	
	ImageLoader.load(Preloader_ImageURLs, Preloader_Start);
	
	let Preloader_Progress = function(value){
		Preloader_Percent = (Preloader_Step+value)/3;
	}
	
	let Preloader_LoadResources = function(){
		AudioLoader.load(Sounds.All, function(){
			Preloader_Step = 1;
			ImageLoader.load(Images.All, function(){
				Preloader_Step = 2;
				ClassLoader.load(Classes.All, Preloader_Stop, Preloader_Progress);
			}, Preloader_Progress);
		}, Preloader_Progress);
	}
}();