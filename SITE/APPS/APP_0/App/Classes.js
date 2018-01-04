const Classes = (function(){
	function Classes_Action() {
		let current = this;
		const Images_All = [
			appPath+"/App/Classes/Shirt/Shirt.js",
			appPath+"/App/Classes/Main.js"
		];
		current.All = Images_All;
	}
	return new Classes_Action();
})();