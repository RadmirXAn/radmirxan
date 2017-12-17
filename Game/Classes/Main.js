console.log("Running Game.");
var Shirts = [];
var ShirtsStatus = [];
var Max_X = 6;
var Max_Y = 5;
var Clicked = 0;
var Animated = 0;
var Shirt_1 = -1;
var Shirt_2 = -1;

var BackGround = new Bitmap(ImageLoader.getImage(Images[15]));
BackGround.layer = 2;
BackGround.start();

function clickCalback(index){
	console.log(index+' = '+ShirtsStatus[index]);
	if(Clicked<2 && ShirtsStatus[index]!=true){
		ShirtsStatus[index] = true;
		Clicked++;
		if(Shirt_1==-1){
			Shirt_1 = index;
		}else if(Shirt_2==-1){
			Shirt_2 = index;
		}
		return true;
	}else{
		return false;
	}
}

function animationStop(index){
	Animated++;
	if(Animated>=2){
		setTimeout(action, 1000);
	}
}

function action(){
	Shirts[Shirt_1].show();
	ShirtsStatus[Shirt_1]=false;
	Shirt_1 = -1;
	Shirts[Shirt_2].show();
	ShirtsStatus[Shirt_2]=false;	
	Shirt_2 = -1;
	
	Clicked = 0;
	Animated = 0;	
}

for(var i = 0; i<Max_X; i++){
	for(var j = 0; j<Max_Y; j++){
		let index = i+j*Max_X;
		Shirts[index] = new Shirt(index);
		Shirts[index].x = (550-Max_X*50)/2+50*i;
		Shirts[index].y = (400-Max_Y*50)/2+50*j;
		Shirts[index].layer = 1;
		Shirts[index].clickCalback = clickCalback;
		Shirts[index].animationStop = animationStop;
	}
}
console.log("Game is Runnning.");