const AudioContext = (function(){
	function AudioContext_Action() {
		let current = this;
		let AudioContext_ContextClass = (window.AudioContext || window.webkitAudioContext || alert('AudioContext не поддерживаеться данным браузером.'));
		let AudioContext_Context = new AudioContext_ContextClass;
		let AudioContext_Destination = AudioContext_Context.destination;
		let AudioContext_Gain = AudioContext_Context.createGain();
		AudioContext_Gain.connect(AudioContext_Destination);
		current.context = function(){
			return AudioContext_Context;
		}
		current.gain = function(){
			return AudioContext_Gain;
		}
		current.destination = function(){
			return AudioContext_Destination;
		}
		current.setVolume = function(value){
			AudioContext_Gain.gain.setTargetAtTime(value, AudioContext_Context.currentTime, 0.1);
		}
	}
	return new AudioContext_Action();
})();