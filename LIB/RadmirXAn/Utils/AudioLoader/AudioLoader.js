const AudioLoader = (function () {
    function AudioLoader_Action() {
		let current = this;
		let AudioLoader_Included = {};
		let AudioLoader_Context = AudioContext.context();
		let AudioLoader_Buffer = {};
		let AudioLoader_Source = {};
		
		current.load = function (AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress) {
			AudioLoader_Next(AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, 0);
		}
		current.playAudio = function (AudioLoader_URL, AudioLoader_Loop) {
			if (AudioLoader_Buffer[AudioLoader_URL] === undefined) {
				alert('Ошибка при получение файла '+AudioLoader_URL);
			}
			if(AudioLoader_Source[AudioLoader_URL]!=undefined){
				AudioLoader_Source[AudioLoader_URL].stop(0);
			}
			AudioLoader_Source[AudioLoader_URL] = AudioLoader_Context.createBufferSource();			
			AudioLoader_Source[AudioLoader_URL].buffer = AudioLoader_Buffer[AudioLoader_URL];
			AudioLoader_Source[AudioLoader_URL].connect(AudioContext.gain());
			AudioLoader_Source[AudioLoader_URL].start(0);
			if(AudioLoader_Loop){
				AudioLoader_Source[AudioLoader_URL].loop = AudioLoader_Loop;
			}			
		}
		current.stopAudio = function (AudioLoader_URL) {
			if (AudioLoader_Buffer[AudioLoader_URL] === undefined) {
				alert('Ошибка при получение файла '+AudioLoader_URL);
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
				let AudioLoader_XHR = new XMLHttpRequest();
				AudioLoader_XHR.open('GET', AudioLoader_URL+antiCache, true);
				AudioLoader_XHR.responseType = 'arraybuffer';
				AudioLoader_XHR.onload = function(e) {
					let audioData = AudioLoader_XHR.response;
					AudioLoader_Context.decodeAudioData(audioData,
					function(decodedArrayBuffer) {
						AudioLoader_Buffer[AudioLoader_URL] = decodedArrayBuffer;
						AudioLoader_Next(AudioLoader_URLs, AudioLoader_Callback, AudioLoader_Progress, AudioLoader_NextIndex);
					}, function(e) {
						alert('Ошибка при декодирование файла '+AudioLoader_Index+'/'+AudioLoader_URLs.length+':'+AudioLoader_URL);
					});					
				};
				AudioLoader_XHR.onerror = function () {
						alert('Ошибка при загрузке файла '+AudioLoader_Index+'/'+AudioLoader_URLs.length+':'+AudioLoader_URL);
				}
				AudioLoader_XHR.onprogress = function(e) {
				  	if(AudioLoader_Progress!== undefined){
						let p = e.loaded/e.total;
						AudioLoader_Progress((AudioLoader_Index+p)/AudioLoader_URLs.length);
					}
				}
				AudioLoader_XHR.send();

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