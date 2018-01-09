const AudioLoader = (function () {
    function AudioLoader_Action() {
		let current = this;
		let AudioLoader_Included = {};
		let AudioLoader_ContextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
		let AudioLoader_Context = new AudioLoader_ContextClass;
		let AudioLoader_Destination;
		let AudioLoader_Buffer = {};
		let AudioLoader_Source = {};
		
		current.load = function (AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress) {
			AudioLoader_Next(AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, 0);
		}
		current.playAudio = function (AudioLoader_URL) {
			if (AudioLoader_Buffer[AudioLoader_URL] === undefined) {
				console.error('Ошибка при получение файла [%s]', AudioLoader_URL);
			}
			if(AudioLoader_Source[AudioLoader_URL]!=undefined){
				AudioLoader_Source[AudioLoader_URL].stop(0);
			}
			AudioLoader_Source[AudioLoader_URL] = AudioLoader_Context.createBufferSource();			
			AudioLoader_Source[AudioLoader_URL].buffer = AudioLoader_Buffer[AudioLoader_URL];
			AudioLoader_Destination = AudioLoader_Context.destination;
			AudioLoader_Source[AudioLoader_URL].connect(AudioLoader_Destination);
			AudioLoader_Source[AudioLoader_URL].start(0);
		}
		current.stopAudio = function (AudioLoader_URL) {
			if (AudioLoader_Buffer[AudioLoader_URL] === undefined) {
				console.error('Ошибка при получение файла [%s]', AudioLoader_URL);
			}
			if(AudioLoader_Source[AudioLoader_URL]!=undefined){
				AudioLoader_Source[AudioLoader_URL].stop(0);
				delete AudioLoader_Source[AudioLoader_URL];
			}
		}
		let NextObject = function (AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, AudioLoader_Index) {
			let AudioLoader_NextIndex = AudioLoader_Index + 1;
			let AudioLoader_URL = AudioLoader_URLs[AudioLoader_Index];
			if (AudioLoader_Buffer[AudioLoader_URL] === undefined) {
				let xhr = new XMLHttpRequest();
				xhr.open('GET', AudioLoader_URL, true);
				xhr.responseType = 'arraybuffer';
				xhr.onload = function(e) {
					AudioLoader_Context.decodeAudioData(this.response,
					function(decodedArrayBuffer) {
						AudioLoader_Buffer[AudioLoader_URL] = decodedArrayBuffer;
						AudioLoader_Next(AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, AudioLoader_NextIndex);
					}, function(e) {
						console.error('AudioLoader: Ошибка при декодирование файла [%d/%d:%s]', AudioLoader_Index, AudioLoader_URLs.length, AudioLoader_URL);
					});
					console.log('loaded');
				};
				xhr.onerror = function () {
						console.error('AudioLoader: Ошибка при загрузке файла [%d/%d:%s]', AudioLoader_Index, AudioLoader_URLs.length, AudioLoader_URL);
				}
				xhr.send();

				if(AudioLoader_Progress!== undefined){
					AudioLoader_Progress(AudioLoader_Index/AudioLoader_URLs.length);
				}
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