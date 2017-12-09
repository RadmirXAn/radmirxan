var AudioLoader = (function () {
    var instance;
 
    function action() {
		//Все загруженные аудиозаписи будем хранить в объекте в формате URL:HTMLMediaElement.
		let Included = {};
		//Загружаем картинки из списка urls и после успешной загрузки выполняем функцию callback.
		this.load = function (urls, callback) {
			NextObject(urls, callback, 0);
		}
		//Получаем объект HTMLMediaElement по его URL
		this.getAudio = function (url) {
			if (Included[url] === undefined) {
				console.error('Ошибка при получение файла [%s]', url);
			}
			return Included[url];
		}
		//Загружаем аудио если не загружено
		let NextObject = function (urls, callback, index) {
			var next = index + 1;
			var url = urls[index];
			console.log('AudioLoader: Загрузка файла [%d/%d:%s]', index, urls.length, url);
			//проверяем загружался ли файл ранее
			if (Included[url] === undefined) {
				let audio = new Audio();
				audio.src = url;
				
				audio.onloadeddata = function() 
				{
					Next(urls, callback, next);
				}
				audio.addEventListener('error' , function() 
				{
					console.error('AudioLoader: Ошибка при загрузке файла [%d/%d:%s]', index, urls.length, url);
				});
				Included[url] = audio;
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