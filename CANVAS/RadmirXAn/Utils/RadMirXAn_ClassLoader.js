//Список подключаемых классов 1.
let RMXClasses = [	
    './RadmirXAn/RadMirXAn_ReservedKeywords.js',
	
	'./RadmirXAn/Canvas/RadMirXAn_Canvas.js',
	'./RadmirXAn/Canvas/Image/RadMirXAn_Image.js',
	'./RadmirXAn/Canvas/Animation/RadMirXAn_Animation.js',
	
	'./RadmirXAn/FullScreen/RadMirXAn_FullScreen_On.js',
	'./RadmirXAn/FullScreen/RadMirXAn_FullScreen_Off.js',
	
	'./RadmirXAn/Utils/ImageLoader/ImageLoader.js',
	
	'./RadmirXAn/Utils/RadMirXAn_AudioLoader.js',
	
	'./RadmirXAn/Events/FullScreen_Event/RadMirXAn_FullScreen.js',
	'./RadmirXAn/Events/EnterFrame_Enets/RadMirXAn_EnterFrame.js',	
	'./RadmirXAn/Events/Keyboard_Events/RadMirXAn_KeyDown.js',
	'./RadmirXAn/Events/Keyboard_Events/RadMirXAn_KeyUp.js',	
	'./RadmirXAn/Events/Mouse_Events/RadMirXAn_ContextMenu.js',
	'./RadmirXAn/Events/Mouse_Events/RadMirXAn_MouseUp.js',
	'./RadmirXAn/Events/Mouse_Events/RadMirXAn_MouseDown.js',
	'./RadmirXAn/Events/Mouse_Events/RadMirXAn_MouseMove.js',
	
	'./Main.js'
];
//Список подключаемых классов 0.

//Переменная в которую записываем подключенные классы 1.
let Classes = [];
//Переменная в которую записываем подключенные классы 0.

//Функция для подключения классов 1.
//* urls - массив со списком подключаемых классов.
//* callback - функция которая сработает по завершению подключения всех классов.
function Include(urls, callback, count) {	
	if(count == undefined){
		count = 0;
	}

	let url = urls[count];

	if(Classes.indexOf(url) == -1){
		Classes.push(url);
		let script = document.createElement('script');
		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);				
		script.onload = function()
		{
			NextScript(urls, callback, count);
		}
		script.onerror = function() {
		  console.error('Ошибка при загрузке файла [%d:%s]', count, url);
		  //alert('Include. Ошибка при загрузке файла ['+count+':'+url+']');
		};
	}else{
		NextScript(urls, callback, count);
	}
}

function NextScript(urls, callback, count) {
	count++;
	if(count == urls.length){
		callback();
	}else{
		Include(urls, callback, count);
	}
}
//Функция для подключения классов 0.

//Запускаем функцию подключения классов 1.
Include(RMXClasses, function(){});
//Запускаем функцию подключения классов 0.