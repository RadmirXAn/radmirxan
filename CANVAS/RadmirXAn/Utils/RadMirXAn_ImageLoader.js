//Переменная в которую записываем загруженные изображения 1.
var RadMirXAnImages = [];
var RadMirXAnImage = [];
//Переменная в которую записываем загруженные изображения 0.

//Функция для загрузки изображений 1.
//* urls - массив со списком подключаемых классов.
//* callback - функция которая сработает по завершению подключения всех классов.
function IncludeImages(urls, callback, count) {	
	if(count == undefined){
		count = 0;
	}

	let url = urls[count];

	if(RadMirXAnImages.indexOf(url) == -1){
		RadMirXAnImages.push(url);
		let img = new Image();
		img.src = url;					
		img.onload = function()
		{
			count++;
			if(count == urls.length){
				callback();
			}else{
				IncludeImages(urls, callback, count);
			}
		}
		img.onerror = function() {
		  console.error('Ошибка при загрузке файла [%d:%s]', count, url);
		  //alert('IncludeImages. Ошибка при загрузке файла ['+count+':'+url+']');
		};
		RadMirXAnImage[url]=img;
	}else{
		NextImage(urls, callback, count);
	}
}

function NextImage(urls, callback, count) {
	count++;
	if(count == urls.length){
		callback();
	}else{
		IncludeImages(urls, callback, count);
	}
}
//Функция для загрузки изображений 0.
