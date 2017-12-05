//Переменная в которую записываем загруженные звуки 1.
var RadMirXAnAudios = [];
var RadMirXAnAudio = [];
//Переменная в которую записываем загруженные звуки 0.

//Функция для загрузки звуков 1.
//* urls - массив со списком подключаемых классов.
//* callback - функция которая сработает по завершению подключения всех классов.
function IncludeAudios(urls, callback, count) {	
	if(count == undefined){
		count = 0;
	}

	let url = urls[count];

	if(RadMirXAnAudios.indexOf(url) == -1){
		RadMirXAnAudios.push(url);
		let audio = new Audio();
		audio.src = url;

		audio.addEventListener('loadeddata', function() 
		{
			count++;
			if(count == urls.length){
				callback();
			}else{
				IncludeImages(urls, callback, count);
			}
		}, false);

		audio.addEventListener('error' , function() 
		{
			console.error('Ошибка при загрузке файла [%d:%s]', count, url);
			//alert('IncludeAudios. Ошибка при загрузке файла ['+count+':'+url+']');
		}, false);

		RadMirXAnAudio[url]=audio;
	}else{
		NextAudio(urls, callback, count);
	}
}

function NextAudio(urls, callback, count) {
	count++;
	if(count == urls.length){
		callback();
	}else{
		IncludeAudios(urls, callback, count);
	}
}
//Функция для загрузки звуков 0.
