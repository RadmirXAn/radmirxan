const Sounds = (function(){
	function Sounds_Action() {
		let current = this;
		const Sounds_BackGround = [
		appPath+"App/Resources/Sounds/0.mp3"
		];
		const Sounds_Click = [
		appPath+"App/Resources/Sounds/1.mp3"
		];	
		const Sounds_All = Sounds_BackGround.concat(Sounds_Click);
		current.BackGround = Sounds_BackGround;
		current.Click = Sounds_Click;
		current.All = Sounds_All;
	}
	return new Sounds_Action();
})();