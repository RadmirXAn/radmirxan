let MainClasses = [
	'./Game/Starter/Starter.js',
	'./Game/Snake/Snake.js',
	'./Game/Scot/Scot.js',
	'./Game/Cursor/Cursor.js',
	'./Game/Background/Background.js',
	'./Game/DragAndDrop/DragAndDrop.js',
	'./Game/FullScreenButton/FullScreenButton.js',
	'./Game/SoundButtons/SoundButtons.js'
];
ClassLoader.load(MainClasses, init);

var starter;
var snake;
var scot;
var cursor;
var background;
var draganddrop_1;
var draganddrop_2;
var fullScreenbutton;
var saoundbuttons;

function init(){
	background = new Background(0);
	starter = new Starter(start, 1);
	starter.x = 300;
	starter.y = 200;
	cursor = new Cursor(8);
}

function start(){
	snake = new Snake(1);
	scot = new Scot(4);	
	draganddrop_1 = new DragAndDrop(3);
	draganddrop_2 = new DragAndDrop(5);
	draganddrop_2.x = 100;
	draganddrop_2.y = 200;
	fullScreenbutton = new FullScreenButton(6);
	fullScreenbutton.x = 720;
	fullScreenbutton.y = 0;
	saoundbuttons = new SoundButtons(7);
	saoundbuttons.x = 0;
	saoundbuttons.y = 440;	
}