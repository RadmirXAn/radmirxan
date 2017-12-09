var ImageLoader = (function () {
    let ImageLoader_Singleton; 
    function ImageLoader_Action() {
		let ImageLoader_Included = {};
		this.load = function (ImageLoader_URLs, ImageLoader_Callback) {
			ImageLoader_NextObject(ImageLoader_URLs, ImageLoader_Callback, 0);
		}
		this.getImage = function (ImageLoader_URL) {
			if (ImageLoader_Included[ImageLoader_URL] === undefined) {
				console.error('Ошибка при получение файла [%s]', ImageLoader_URL);
			}
			return ImageLoader_Included[ImageLoader_URL];
		}
		let ImageLoader_NextObject = function (ImageLoader_URLs, ImageLoader_Callback, ImageLoader_Index) {
			let ImageLoader_NextIndex = ImageLoader_Index + 1;
			let ImageLoader_URL = ImageLoader_URLs[ImageLoader_Index];
			console.log('ImageLoader: Загрузка файла [%d/%d:%s]', ImageLoader_Index, ImageLoader_URLs.length, ImageLoader_URL);
			if (ImageLoader_Included[ImageLoader_URL] === undefined) {
				let ImageLoader_Img = new Image();
				ImageLoader_Img.src = ImageLoader_URL;
				ImageLoader_Img.onload = function () {
					ImageLoader_Next(ImageLoader_URLs, ImageLoader_Callback, ImageLoader_NextIndex);
				}
				ImageLoader_Img.onerror = function () {
					console.error('ImageLoader: Ошибка при загрузке файла [%d/%d:%s]', ImageLoader_Index, ImageLoader_URLs.length, ImageLoader_URL);
				}
				ImageLoader_Included[ImageLoader_URL] = ImageLoader_Img;
			}
			else {
				ImageLoader_Next(ImageLoader_URLs, ImageLoader_Callback, ImageLoader_NextIndex);
			}
		}
		let ImageLoader_Next = function (ImageLoader_URLs, ImageLoader_Callback, ImageLoader_Index) {
			if (ImageLoader_Index == ImageLoader_URLs.length) {
				ImageLoader_Callback();
			}
			else {
				ImageLoader_NextObject(ImageLoader_URLs, ImageLoader_Callback, ImageLoader_Index);
			}
		}
    } 
	if (!ImageLoader_Singleton) {
		console.log('ImageLoader: --------------------------------- init');
		ImageLoader_Singleton = new ImageLoader_Action();
	}
	return ImageLoader_Singleton;
})();