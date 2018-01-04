console.log("Running Game.");
var GameStarted = false;
var Cards = [];
var Shirts = [];
var ShirtsStatus = [];
var Max_X = 10;
var Max_Y = 7;
var Total = Max_X*Max_Y;
var Half = Total/2;
var Found = 0;
var Clicked = 0;
var Animated = 0;
var Shirt_1 = -1;
var Shirt_2 = -1;
var Shirt_Width = 50;
var Shirt_Height = 50;
var Shirt_Distance = -1;

var Card_Width = 48;
var Card_Height = 48;
var Card_Distance = 1;

var BackGround = new Bitmap();
BackGround.image = ImageLoader.getImage(Images.BackGround[getRandomInt(0,7)]);
BackGround.layer = 2;
BackGround.start();

function ClickCallBack(index){
	console.log(index+' = '+ShirtsStatus[index]);
	if(Clicked<2 && ShirtsStatus[index]!=true){
		Clicked++;
		ShirtsStatus[index] = true;
		Shirts[index].open();		
		if(Shirt_1==-1){
			Shirt_1 = index;
			Cards[index].start();
		}else if(Shirt_2==-1){
			Shirt_2 = index;
			Cards[index].start();
		}
	}
}

function OpennedCalback(index){
	Animated++;
	if(Animated>=2){
		setTimeout(action, 500);
	}
}

function action(){
	if(Cards[Shirt_1].image != Cards[Shirt_2].image){
		ShirtsStatus[Shirt_1]=false;
		Shirts[Shirt_1].close();
		ShirtsStatus[Shirt_2]=false;
		Shirts[Shirt_2].close();
	}else{
		Found++;
		Cards[Shirt_1].stop();
		Cards[Shirt_2].stop();
		Shirts[Shirt_1].stop();
		Shirts[Shirt_2].stop();		
		if(Found==Half){
			GameStarted = false;
		}	
	}
			
	Shirt_1 = -1;	
	Shirt_2 = -1;
	
	Clicked = 0;
	Animated = 0;
}

function ClosedCalback(index){
	Cards[index].stop();
	//ShirtsStatus[index]=false;
}

function StartGame(){
	if(GameStarted==false){
		let SOUND = AudioLoader.getAudio(Sounds.BackGround[0]);
		SOUND.play();
		SOUND.loop = true;
		Found = 0;
		GameStarted = true;
		for(let i = 0; i<Max_X; i++){
			for(let j = 0; j<Max_Y; j++){
				let index = i+j*Max_X;
				
				Cards[index] = new Bitmap();
				Cards[index].x = Math.floor((550-Max_X*Card_Width-(Max_X-1)*Card_Distance)/2+(Card_Width+Card_Distance)*i);
				Cards[index].y = Math.floor((400-Max_Y*Card_Height-(Max_Y-1)*Card_Distance)/2+(Card_Height+Card_Distance)*j);
				Cards[index].layer = 2;
				Cards[index].image = ImageLoader.getImage(Images.CardImage[Math.floor(index/2)]);
				//Cards[index].start();

				Shirts[index] = new Shirt(index);
				Shirts[index].x = Math.floor((550-Max_X*Shirt_Width-(Max_X-1)*Shirt_Distance)/2+(Shirt_Width+Shirt_Distance)*i);
				Shirts[index].y = Math.floor((400-Max_Y*Shirt_Height-(Max_Y-1)*Shirt_Distance)/2+(Shirt_Height+Shirt_Distance)*j);
				Shirts[index].layer = 1;
				Shirts[index].ClickCallBack = ClickCallBack;
				Shirts[index].OpennedCalback = OpennedCalback;
				Shirts[index].ClosedCalback = ClosedCalback;
				Shirts[index].start();
				Shirts[index].close();
				ShirtsStatus[index]=false;				
			}
		}

		for(let i = 0; i<100; i++){
			let v1 = getRandomInt(0, Half);
			let v2 = getRandomInt(Half, Total);
			let img = Cards[v1].image;
			Cards[v1].image = Cards[v2].image;
			Cards[v2].image = img;
		}
		
		BackGround.image = ImageLoader.getImage(Images.BackGround[getRandomInt(0,7)]);
	}
}

function ReStartGame(){
	if(GameStarted==false){
		Found = 0;
		GameStarted = true;
		for(let i = 0; i<Max_X; i++){
			for(let j = 0; j<Max_Y; j++){
				let index = i+j*Max_X;
				Cards[index].start();
				Shirts[index].start();
				Shirts[index].close();
				ShirtsStatus[index]=false;				
			}
		}

		for(let i = 0; i<100; i++){
			let v1 = getRandomInt(0, Half);
			let v2 = getRandomInt(Half, Total);
			let img = Cards[v1].image;
			Cards[v1].image = Cards[v2].image;
			Cards[v2].image = img;
		}
		
		BackGround.image = ImageLoader.getImage(Images.BackGround[getRandomInt(0,7)]);
	}
}

let BG_OnMouseDown = function(eventData){
	switch(eventData.which){
		case 1:{
			ReStartGame();
			break;
		}
	}		
};
Mouse.addDownFunction(BG_OnMouseDown, 0);

StartGame();

console.log("Game is Runnning.");