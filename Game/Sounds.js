const Sounds = (function(){
	function Sounds_Action() {
		console.log("SoundsList init...");
		let current = this;
		const Images_All = [
			"./Game/Resources/Sounds/1.mp3",
			"./Game/Resources/Sounds/2.mp3",
			"./Game/Resources/Sounds/3.mp3"
		];
		current.All = Images_All;
	}
	return new Sounds_Action();
})();