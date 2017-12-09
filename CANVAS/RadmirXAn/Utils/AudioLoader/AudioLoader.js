var AudioLoader = (function () {
    let AudioLoader_Singleton; 
    function AudioLoader_Action() {
		let AudioLoader_Included = {};
		this.load = function (AudioLoader_Urls, AudioLoader_Callback) {
			NextObject(AudioLoader_Urls, AudioLoader_Callback, 0);
		}
		this.getAudio = function (AudioLoader_URL) {
			if (AudioLoader_Included[AudioLoader_URL] === undefined) {
				console.error('Ошибка при получение файла [%s]', AudioLoader_URL);
			}
			return AudioLoader_Included[AudioLoader_URL];
		}
		let NextObject = function (AudioLoader_Urls, AudioLoader_Callback, AudioLoader_Index) {
			let AudioLoader_NextIndex = AudioLoader_Index + 1;
			let AudioLoader_URL = AudioLoader_Urls[AudioLoader_Index];
			console.log('AudioLoader: Загрузка файла [%d/%d:%s]', AudioLoader_Index, AudioLoader_Urls.length, AudioLoader_URL);
			if (AudioLoader_Included[AudioLoader_URL] === undefined) {
				let AudioLoader_Audio = new Audio();
				AudioLoader_Audio.src = AudioLoader_URL;
				
				AudioLoader_Audio.onloadeddata = function() 
				{
					AudioLoader_Next(AudioLoader_Urls, AudioLoader_Callback, AudioLoader_NextIndex);
				}
				AudioLoader_Audio.addEventListener('error' , function() 
				{
					console.error('AudioLoader: Ошибка при загрузке файла [%d/%d:%s]', AudioLoader_Index, AudioLoader_Urls.length, AudioLoader_URL);
				});
				AudioLoader_Included[AudioLoader_URL] = AudioLoader_Audio;
			}
			else {
				AudioLoader_Next(AudioLoader_Urls, AudioLoader_Callback, AudioLoader_NextIndex);
			}
		}
		let AudioLoader_Next = function (AudioLoader_Urls, AudioLoader_Callback, AudioLoader_Index) {
			if (AudioLoader_Index == AudioLoader_Urls.length) {
				AudioLoader_Callback();
			}
			else {
				NextObject(AudioLoader_Urls, AudioLoader_Callback, AudioLoader_Index);
			}
		}
    } 
	if (!AudioLoader_Singleton) {
		console.log('AudioLoader: --------------------------------- init');
		AudioLoader_Singleton = new AudioLoader_Action();
	}
	return AudioLoader_Singleton;
})();