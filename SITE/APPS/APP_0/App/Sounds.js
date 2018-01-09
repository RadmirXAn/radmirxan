const Sounds = (function(){
	function Sounds_Action() {
		let current = this;
		const Sounds_BackGround = [
		appPath+"App/Resources/Sounds/0.mp3"
		];		
		const Sounds_All = Sounds_BackGround.concat();
		current.BackGround = Sounds_BackGround;
		current.All = Sounds_All;
	}
	return new Sounds_Action();
})();