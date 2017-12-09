var ImageLoader = (function () {
    var instance;
 
    function action() {
		//Все загруженные изображения будем хранить в объекте в формате URL:HTMLImageElement.
		let Included = {};
		//Загружаем картинки из списка urls и после успешной загрузки выполняем функцию callback.
		this.load = function (urls, callback) {
			NextObject(urls, callback, 0);
		}
		//Получаем объект HTMLImageElement по его URL
		this.getImage = function (url) {
			if (Included[url] === undefined) {
				console.error('Ошибка при получение файла [%s]', url);
			}
			return Included[url];
		}
		//Загружаем изображение если не загружено
		let NextObject = function (urls, callback, index) {
			var next = index + 1;
			var url = urls[index];
			console.log('ImageLoader: Загрузка файла [%d/%d:%s]', index, urls.length, url);
			//проверяем загружался ли файл ранее
			if (Included[url] === undefined) {
				var img = new Image();
				img.src = url;
				img.onload = function () {
					Next(urls, callback, next);
				}
				img.onerror = function () {
					console.error('ImageLoader: Ошибка при загрузке файла [%d/%d:%s]', index, urls.length, url);
				}
				Included[url] = img;
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