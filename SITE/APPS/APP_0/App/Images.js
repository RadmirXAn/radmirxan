const Images = (function(){
	function Images_Action() {
		let current = this;
		const Images_ShirtAnimation = [
		appPath+"App/Resources/Images/Animations/0/0.png",
		appPath+"App/Resources/Images/Animations/0/1.png",
		appPath+"App/Resources/Images/Animations/0/2.png",
		appPath+"App/Resources/Images/Animations/0/3.png",
		appPath+"App/Resources/Images/Animations/0/4.png",
		appPath+"App/Resources/Images/Animations/0/5.png",
		appPath+"App/Resources/Images/Animations/0/6.png",
		appPath+"App/Resources/Images/Animations/0/7.png",
		appPath+"App/Resources/Images/Animations/0/8.png",
		appPath+"App/Resources/Images/Animations/0/9.png",
		appPath+"App/Resources/Images/Animations/0/10.png",
		appPath+"App/Resources/Images/Animations/0/11.png",
		appPath+"App/Resources/Images/Animations/0/12.png",
		appPath+"App/Resources/Images/Animations/1/0.png",
		appPath+"App/Resources/Images/Animations/1/1.png",
		appPath+"App/Resources/Images/Animations/1/2.png",
		appPath+"App/Resources/Images/Animations/1/3.png",
		appPath+"App/Resources/Images/Animations/1/4.png",
		appPath+"App/Resources/Images/Animations/1/5.png",
		appPath+"App/Resources/Images/Animations/1/6.png",
		appPath+"App/Resources/Images/Animations/1/7.png",
		appPath+"App/Resources/Images/Animations/1/8.png",
		appPath+"App/Resources/Images/Animations/1/9.png",
		appPath+"App/Resources/Images/Animations/1/10.png",
		appPath+"App/Resources/Images/Animations/1/11.png",
		appPath+"App/Resources/Images/Animations/1/12.png",
		appPath+"App/Resources/Images/Animations/1/13.png",
		appPath+"App/Resources/Images/Animations/1/14.png"
		];
		const Images_FrontSideImages = [
		appPath+"App/Resources/Images/Animals/0.png",
		appPath+"App/Resources/Images/Animals/1.png",
		appPath+"App/Resources/Images/Animals/2.png",
		appPath+"App/Resources/Images/Animals/3.png",
		appPath+"App/Resources/Images/Animals/4.png",
		appPath+"App/Resources/Images/Animals/5.png",
		appPath+"App/Resources/Images/Animals/6.png",
		appPath+"App/Resources/Images/Animals/7.png",
		appPath+"App/Resources/Images/Animals/8.png",
		appPath+"App/Resources/Images/Animals/9.png",
		appPath+"App/Resources/Images/Animals/10.png",
		appPath+"App/Resources/Images/Animals/11.png",
		appPath+"App/Resources/Images/Animals/12.png",
		appPath+"App/Resources/Images/Animals/13.png",
		appPath+"App/Resources/Images/Animals/14.png",
		appPath+"App/Resources/Images/Animals/15.png",
		appPath+"App/Resources/Images/Animals/16.png",
		appPath+"App/Resources/Images/Animals/17.png",
		appPath+"App/Resources/Images/Animals/18.png",
		appPath+"App/Resources/Images/Animals/19.png",
		appPath+"App/Resources/Images/Animals/20.png",
		appPath+"App/Resources/Images/Animals/21.png",
		appPath+"App/Resources/Images/Animals/22.png",
		appPath+"App/Resources/Images/Animals/23.png",
		appPath+"App/Resources/Images/Animals/24.png",
		appPath+"App/Resources/Images/Animals/25.png",
		appPath+"App/Resources/Images/Animals/26.png",
		appPath+"App/Resources/Images/Animals/27.png",
		appPath+"App/Resources/Images/Animals/28.png",
		appPath+"App/Resources/Images/Animals/29.png",
		appPath+"App/Resources/Images/Animals/30.png",
		appPath+"App/Resources/Images/Animals/31.png",
		appPath+"App/Resources/Images/Animals/32.png",
		appPath+"App/Resources/Images/Animals/33.png",
		appPath+"App/Resources/Images/Animals/34.png"
		];
		const Images_BackGround = [
		appPath+"App/Resources/Images/Background/0.jpeg",
		appPath+"App/Resources/Images/Background/1.jpeg",
		appPath+"App/Resources/Images/Background/2.jpeg",
		appPath+"App/Resources/Images/Background/3.jpeg",
		appPath+"App/Resources/Images/Background/4.jpeg",
		appPath+"App/Resources/Images/Background/5.jpeg",
		appPath+"App/Resources/Images/Background/6.jpeg"
		];
		const Images_All = Images_ShirtAnimation.concat(Images_BackGround, Images_FrontSideImages);
		current.CardImage = Images_FrontSideImages;
		current.ShirtAnimation = Images_ShirtAnimation;	
		current.BackGround = Images_BackGround;	
		current.All = Images_All;
	}
	return new Images_Action();
})();