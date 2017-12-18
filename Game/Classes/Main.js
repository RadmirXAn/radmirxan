console.log("Running Game.");
var Shirts = [];
var ShirtsStatus = [];
var Max_X = 6;
var Max_Y = 5;
var Clicked = 0;
var Animated = 0;
var Shirt_1 = -1;
var Shirt_2 = -1;

var BackGround = new Bitmap();
BackGround.image = ImageLoader.getImage(Images.BackGround[0]);
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
		}else if(Shirt_2==-1){
			Shirt_2 = index;
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
	ShirtsStatus[Shirt_1]=false;
	Shirts[Shirt_1].close();
	Shirt_1 = -1;
	
	ShirtsStatus[Shirt_2]=false;
	Shirts[Shirt_2].close();
	Shirt_2 = -1;
	
	Clicked = 0;
	Animated = 0;
}

function ClosedCalback(index){
	//ShirtsStatus[index]=false;
}

for(var i = 0; i<Max_X; i++){
	for(var j = 0; j<Max_Y; j++){
		let index = i+j*Max_X;
		Shirts[index] = new Shirt(index);
		Shirts[index].x = (550-Max_X*50)/2+50*i;
		Shirts[index].y = (400-Max_Y*50)/2+50*j;
		Shirts[index].layer = 1;
		Shirts[index].ClickCallBack = ClickCallBack;
		Shirts[index].OpennedCalback = OpennedCalback;
		Shirts[index].ClosedCalback = ClosedCalback;
	}
}
console.log("Game is Runnning.");