const ClassLoader = (function () {
    function ClassLoader_Action() {
		let current = this;
		let ClassLoader_Included = {};
		current.load = function (ClassLoader_URLs, ClassLoader_Callback, ClassLoader_Progress) {
			ClassLoader_Next(ClassLoader_URLs, ClassLoader_Callback, ClassLoader_Progress, 0);
		}
		let ClassLoader_NextObject = function (ClassLoader_URLs, ClassLoader_Callback, ClassLoader_Progress, ClassLoader_Index) {
			let ClassLoader_NextIndex = ClassLoader_Index + 1;
			let ClassLoader_URL = ClassLoader_URLs[ClassLoader_Index];
			if (ClassLoader_Included[ClassLoader_URL] === undefined) {
				let ClassLoader_Script = document.createElement('script');
				ClassLoader_Script.src = ClassLoader_URL+antiCache;
				document.getElementsByTagName('head')[0].appendChild(ClassLoader_Script);
				ClassLoader_Script.onload = function () {
					ClassLoader_Next(ClassLoader_URLs, ClassLoader_Callback, ClassLoader_Progress, ClassLoader_NextIndex);
				}
				ClassLoader_Script.onerror = function () {
					console.error('ClassLoader: Ошибка при загрузке файла [%d/%d:%s]', ClassLoader_Index, ClassLoader_URLs.length, ClassLoader_URL);
				}
				if(ClassLoader_Progress!== undefined){
					ClassLoader_Progress(ClassLoader_Index/ClassLoader_URLs.length);
				}
				ClassLoader_Included[ClassLoader_URL] = ClassLoader_Script;
			}
			else {
				ClassLoader_Next(ClassLoader_URLs, ClassLoader_Callback, ClassLoader_Progress, ClassLoader_NextIndex);
			}
		}
		let ClassLoader_Next = function (ClassLoader_URLs, ClassLoader_Callback, ClassLoader_Progress, ClassLoader_Index) {
			if (ClassLoader_Index == ClassLoader_URLs.length) {
				ClassLoader_Callback();
			}
			else {
				ClassLoader_NextObject(ClassLoader_URLs, ClassLoader_Callback, ClassLoader_Progress, ClassLoader_Index);
			}
		}
    }
	return new ClassLoader_Action();
})();