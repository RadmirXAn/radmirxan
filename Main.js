let MainClasses = [
	'./Game/Cursor/Cursor.js',
	'./Game/Preloader/Preloader.js'
];
ClassLoader.load(MainClasses, init);

var cursor;
var preloader;

function init(){
	cursor = new Cursor(10);
	preloader = new Preloader(start, 0);
}

function start(){
	
}