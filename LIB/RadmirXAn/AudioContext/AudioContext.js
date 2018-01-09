const AudioContext = (function(){
	function AudioContext_Action() {
		let current = this;
		let AudioContext_ContextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
		let AudioContext_Context = new AudioContext_ContextClass;
		let AudioContext_Destination = AudioContext_Context.destination;
		current.context = function(){
			return AudioContext_Context;
		}
		current.destination = function(){
			return AudioContext_Destination;
		}
	}
	return new AudioContext_Action();
})();