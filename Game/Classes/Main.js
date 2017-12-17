console.log("Running Game.");
var Shirts = [];
var Max_X = 6;
var Max_Y = 5;
var Clicked = 0;

var BackGround = new Bitmap(ImageLoader.getImage(Images[15]));
BackGround.layer = 2;
BackGround.start();

function calback(item){
	if(Clicked<2){
		Clicked++;
		return true;
	}else{
		return false;
	}
}

for(var i = 0; i<Max_X; i++){
	for(var j = 0; j<Max_Y; j++){
		let index = i+j*Max_X;
		Shirts[index] = new Shirt(index);
		Shirts[index].x = (550-Max_X*50)/2+50*i;
		Shirts[index].y = (400-Max_Y*50)/2+50*j;
		Shirts[index].layer = 1;
		Shirts[index].calback = calback;
	}
}
console.log("Game is Runnning.");