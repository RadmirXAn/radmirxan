const Preloader = function(action, layer) {
	let Preloader_ImageURL = './Resources/Images/Preloader/0.png';
	let Preloader_ImageURLs = [
		Preloader_ImageURL
	];
	let Preloader_Image;
	let Preloader_Step = 0;
	let Preloader_Percent = 0;

	Preloader_OnMouseDown = function(eventData){
		switch(eventData.which){
			case 1:{
				let mX =  Mouse.getX() - Preloader_Image.x;
				let mY =  Mouse.getY() - Preloader_Image.y;
				if((0<mX && mX<Preloader_Image.width) &&  (0<mY && mY<Preloader_Image.height)){
					if(Preloader_Image.getPixel(mX, mY)[3]!=0){
						Mouse.removeDownFunction(Preloader_OnMouseDown);
						Preloader_LoadResources();
					}						
				}				
				break;
			}
		}		
	}.bind(this);

	let Preloader_EnterFrame = function(){
		Canvas.getVisibleContext().beginPath();

		let Y = Preloader_Image.y+Preloader_Image.height+10;
		
		Canvas.getVisibleContext().moveTo(0, Y);
		Canvas.getVisibleContext().lineTo(Canvas.width()*Preloader_Percent, Y);

		Canvas.getVisibleContext().stroke();
	};
	
	Preloader_Start = function (){
        Preloader_Image = new Bitmap(ImageLoader.getImage(Preloader_ImageURL), layer);
		Preloader_Image.x = Math.floor((Canvas.width()-Preloader_Image.width)/2);
		Preloader_Image.y = Math.floor((Canvas.height()-Preloader_Image.height)/2);
		Preloader_Image.start();
		Mouse.addDownFunction(Preloader_OnMouseDown, layer);
		EnterFrame.addFunction(Preloader_EnterFrame, layer);
	};

	Preloader_Stop = function (){
		action();
		Preloader_Image.stop();		
		Mouse.removeDownFunction(Preloader_OnMouseDown);
		EnterFrame.removeFunction(Preloader_EnterFrame);
	};

    ImageLoader.load(Preloader_ImageURLs, Preloader_Start);
	
	let Preloader_Progress = function(value){
		Preloader_Percent = (Preloader_Step+value)/3;
	}
	
	let Preloader_LoadResources = function(){
		let Class_URL_1 = "";
		let ClassURLs = [
		
		];
		let Image_URL_1 = "./Resources/Images/Animations/0/0.png";
		let Image_URL_2 = "./Resources/Images/Animations/0/1.png";
		let Image_URL_3 = "./Resources/Images/Animations/0/2.png";
		let Image_URL_4 = "./Resources/Images/Animations/0/3.png";
		let Image_URL_5 = "./Resources/Images/Animations/0/4.png";
		let Image_URL_6 = "./Resources/Images/Animations/0/5.png";
		let Image_URL_7 = "./Resources/Images/Animations/0/6.png";
		let Image_URL_8 = "./Resources/Images/Animations/0/7.png";
		let Image_URL_9 = "./Resources/Images/Animations/0/8.png";
		let Image_URL_10 = "./Resources/Images/Animations/0/9.png";
		let Image_URL_11 = "./Resources/Images/Animations/0/10.png";
		let Image_URL_12 = "./Resources/Images/Animations/0/11.png";
		let Image_URL_13 = "./Resources/Images/Animations/0/12.png";
		let Image_URL_14 = "./Resources/Images/Animations/0/13.png";
		let Image_URL_15 = "./Resources/Images/Animations/0/14.png";
		let ImageURLs = [
			Image_URL_1,
			Image_URL_2,
			Image_URL_3,
			Image_URL_4,
			Image_URL_5,
			Image_URL_6,
			Image_URL_7,
			Image_URL_8,
			Image_URL_9,
			Image_URL_10,
			Image_URL_11,
			Image_URL_12,
			Image_URL_13,
			Image_URL_14,
			Image_URL_15
		];
		let Sound_URL_1 = "./Resources/Sounds/1.mp3";
		let Sound_URL_2 = "./Resources/Sounds/2.mp3";
		let Sound_URL_3 = "./Resources/Sounds/3.mp3";
		let SoundURLs = [
			Sound_URL_1,
			Sound_URL_2,
			Sound_URL_3
		];
		ClassLoader.load(ClassURLs, function(){
			Preloader_Step = 1;
			ImageLoader.load(ImageURLs, function(){
				Preloader_Step = 2;
				AudioLoader.load(SoundURLs, Preloader_Stop, Preloader_Progress);
			}, Preloader_Progress);
		}, Preloader_Progress);
	}
}