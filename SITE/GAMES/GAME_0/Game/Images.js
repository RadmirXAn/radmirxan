const Images = (function(){
	function Images_Action() {
		console.log("ImagesList init...");
		let current = this;
		const Images_ShirtAnimation = [
		gamePath+"/Game/Resources/Images/Animations/0/0.png",
		gamePath+"/Game/Resources/Images/Animations/0/1.png",
		gamePath+"/Game/Resources/Images/Animations/0/2.png",
		gamePath+"/Game/Resources/Images/Animations/0/3.png",
		gamePath+"/Game/Resources/Images/Animations/0/4.png",
		gamePath+"/Game/Resources/Images/Animations/0/5.png",
		gamePath+"/Game/Resources/Images/Animations/0/6.png",
		gamePath+"/Game/Resources/Images/Animations/0/7.png",
		gamePath+"/Game/Resources/Images/Animations/0/8.png",
		gamePath+"/Game/Resources/Images/Animations/0/9.png",
		gamePath+"/Game/Resources/Images/Animations/0/10.png",
		gamePath+"/Game/Resources/Images/Animations/0/11.png",
		gamePath+"/Game/Resources/Images/Animations/0/12.png",
		];
		const Images_BackGround = [gamePath+"/Game/Resources/Images/Background/0.jpg"];
		const Images_All = Images_ShirtAnimation.concat(Images_BackGround);
		current.ShirtAnimation = Images_ShirtAnimation;	
		current.BackGround = Images_BackGround;	
		current.All = Images_All;
	}
	return new Images_Action();
})();