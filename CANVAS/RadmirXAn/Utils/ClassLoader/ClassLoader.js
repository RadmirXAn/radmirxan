var ClassLoader = (function () {
    let ClassLoader_Singleton;
    function ClassLoader_Action() {
		let ClassLoader_Included = {};
		this.load = function (ClassLoader_URLs, ClassLoader_Callback) {
			ClassLoader_NextObject(ClassLoader_URLs, ClassLoader_Callback, 0);
		}
		let ClassLoader_NextObject = function (ClassLoader_URLs, ClassLoader_Callback, ClassLoader_Index) {
			let ClassLoader_NextIndex = ClassLoader_Index + 1;
			let ClassLoader_URL = ClassLoader_URLs[ClassLoader_Index];
			console.log('ClassLoader: Загрузка файла [%d/%d:%s]', ClassLoader_Index, ClassLoader_URLs.length, ClassLoader_URL);
			if (ClassLoader_Included[ClassLoader_URL] === undefined) {
				let ClassLoader_Script = document.createElement('script');
				ClassLoader_Script.src = ClassLoader_URL;
				document.getElementsByTagName('head')[0].appendChild(ClassLoader_Script);
				ClassLoader_Script.onload = function () {
					ClassLoader_Next(ClassLoader_URLs, ClassLoader_Callback, ClassLoader_NextIndex);
				}
				ClassLoader_Script.onerror = function () {
					console.error('ClassLoader: Ошибка при загрузке файла [%d/%d:%s]', ClassLoader_Index, ClassLoader_URLs.length, ClassLoader_URL);
				}
				ClassLoader_Included[ClassLoader_URL] = ClassLoader_Script;
			}
			else {
				ClassLoader_Next(ClassLoader_URLs, ClassLoader_Callback, ClassLoader_NextIndex);
			}
		}
		let ClassLoader_Next = function (ClassLoader_URLs, ClassLoader_Callback, ClassLoader_Index) {
			if (ClassLoader_Index == ClassLoader_URLs.length) {
				ClassLoader_Callback();
			}
			else {
				ClassLoader_NextObject(ClassLoader_URLs, ClassLoader_Callback, ClassLoader_Index);
			}
		}
    }
	if (!ClassLoader_Singleton) {
		console.log('ClassLoader: --------------------------------- init');
		ClassLoader_Singleton = new ClassLoader_Action();
	}
	return ClassLoader_Singleton;
})();
//----------------------------------------------------------------------------------------------------------------------
var StartClasses = [
    './RadmirXAn/RadMirXAn_ReservedKeywords.js',

	'./RadmirXAn/Canvas/RadMirXAn_Canvas.js',
	'./RadmirXAn/Canvas/Image/RadMirXAn_Image.js',
	'./RadmirXAn/Canvas/Animation/RadMirXAn_Animation.js',
	
	'./RadmirXAn/Utils/ImageLoader/ImageLoader.js',	
	'./RadmirXAn/Utils/AudioLoader/AudioLoader.js',
	
	'./RadmirXAn/Events/FullScreen_Event/FullScreen.js',
	'./RadmirXAn/Events/EnterFrame_Enets/EnterFrame.js',	
	'./RadmirXAn/Events/Keyboard_Events/RadMirXAn_KeyDown.js',
	'./RadmirXAn/Events/Keyboard_Events/RadMirXAn_KeyUp.js',	
	'./RadmirXAn/Events/Mouse_Events/RadMirXAn_ContextMenu.js',
	'./RadmirXAn/Events/Mouse_Events/RadMirXAn_MouseUp.js',
	'./RadmirXAn/Events/Mouse_Events/RadMirXAn_MouseDown.js',
	'./RadmirXAn/Events/Mouse_Events/RadMirXAn_MouseMove.js',
	
	'./Main.js'
];
ClassLoader.load(StartClasses, function(){EnterFrame.start()});