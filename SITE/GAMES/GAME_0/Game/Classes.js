const Classes = (function(){
	function Classes_Action() {
		console.log("ClassesList init...");
		let current = this;
		const Images_All = [
			gamePath+"/Game/Classes/Shirt/Shirt.js",
			gamePath+"/Game/Classes/Main.js"
		];
		current.All = Images_All;
	}
	return new Classes_Action();
})();