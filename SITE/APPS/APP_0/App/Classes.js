const Classes = (function(){
	function Classes_Action() {
		console.log("ClassesList init...");
		let current = this;
		const Images_All = [
			appPath+"/App/Classes/Shirt/Shirt.js",
			appPath+"/App/Classes/Main.js"
		];
		current.All = Images_All;
	}
	return new Classes_Action();
})();