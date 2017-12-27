const AudioLoader = (function () {
    function AudioLoader_Action() {
		let current = this;
		console.log('AudioLoader: --------------------------------- init');
		let AudioLoader_Included = {};
		current.load = function (AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress) {
			AudioLoader_Next(AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, 0);
		}
		current.getAudio = function (AudioLoader_URL) {
			if (AudioLoader_Included[AudioLoader_URL] === undefined) {
				console.error('Ошибка при получение файла [%s]', AudioLoader_URL);
			}
			return AudioLoader_Included[AudioLoader_URL];
		}
		let NextObject = function (AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, AudioLoader_Index) {
			let AudioLoader_NextIndex = AudioLoader_Index + 1;
			let AudioLoader_URL = AudioLoader_URLs[AudioLoader_Index];
			console.log('AudioLoader: Загрузка файла [%d/%d:%s]', AudioLoader_Index, AudioLoader_URLs.length, AudioLoader_URL);
			if (AudioLoader_Included[AudioLoader_URL] === undefined) {
				let AudioLoader_Audio = new Audio();
				AudioLoader_Audio.src = AudioLoader_URL+antiCache;
				
				AudioLoader_Audio.onloadeddata = function() 
				{
					AudioLoader_Next(AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, AudioLoader_NextIndex);
				}
				AudioLoader_Audio.addEventListener('error' , function() 
				{
					console.error('AudioLoader: Ошибка при загрузке файла [%d/%d:%s]', AudioLoader_Index, AudioLoader_URLs.length, AudioLoader_URL);
				});
				if(AudioLoader_Progress!== undefined){
					AudioLoader_Progress(AudioLoader_Index/AudioLoader_URLs.length);
				}
				AudioLoader_Included[AudioLoader_URL] = AudioLoader_Audio;
			}
			else {
				AudioLoader_Next(AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, AudioLoader_NextIndex);
			}
		}
		let AudioLoader_Next = function (AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, AudioLoader_Index) {
			if (AudioLoader_Index == AudioLoader_URLs.length) {
				AudioLoader_Callback();
			}
			else {
				NextObject(AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, AudioLoader_Index);
			}
		}
    }
	return new AudioLoader_Action();
})();