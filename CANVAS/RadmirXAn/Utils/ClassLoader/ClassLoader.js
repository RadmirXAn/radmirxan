var ClassLoader = (function () {
    var instance;
 
    function action() {
		//Все загруженные классы будем хранить в объекте в формате URL:ScriptElement.
		let Included = {};
		//Загружаем скрипты из списка urls и после успешной загрузки выполняем функцию callback.
		this.load = function (urls, callback) {
			NextObject(urls, callback, 0);
		}
		//Загружаем изображение если не загружено
		let NextObject = function (urls, callback, index) {
			var next = index + 1;
			var url = urls[index];
			console.log('ClassLoader: Загрузка файла [%d/%d:%s]', index, urls.length, url);
			//проверяем загружался ли файл ранее
			if (Included[url] === undefined) {
				let script = document.createElement('script');
				script.src = url;
				document.getElementsByTagName('head')[0].appendChild(script);
				script.onload = function () {
					Next(urls, callback, next);
				}
				script.onerror = function () {
					console.error('ClassLoader: Ошибка при загрузке файла [%d/%d:%s]', index, urls.length, url);
				}
				Included[url] = script;
			}
			else {
				Next(urls, callback, next);
			}
		}
		//Проверяем все ли из списка загружено
		let Next = function (urls, callback, index) {
			if (index == urls.length) {
				callback();
			}
			else {
				NextObject(urls, callback, index);
			}
		}
    }
 
	if (!instance) {
		instance = new action();
	}
	return instance;

})();

//Список подключаемых классов 1.
let RMXClasses = [	
    './RadmirXAn/RadMirXAn_ReservedKeywords.js',
	
	'./RadmirXAn/Canvas/RadMirXAn_Canvas.js',
	'./RadmirXAn/Canvas/Image/RadMirXAn_Image.js',
	'./RadmirXAn/Canvas/Animation/RadMirXAn_Animation.js',
	
	'./RadmirXAn/FullScreen/RadMirXAn_FullScreen_On.js',
	'./RadmirXAn/FullScreen/RadMirXAn_FullScreen_Off.js',
	
	'./RadmirXAn/Utils/ImageLoader/ImageLoader.js',	
	'./RadmirXAn/Utils/AudioLoader/AudioLoader.js',
	
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

//Запускаем функцию подключения классов 1.
ClassLoader.load(RMXClasses, function(){});
//Запускаем функцию подключения классов 0.