<?php
$appID = intval($_GET["app"]);
$appPath = "SITE/APPS/APP_".$appID."/";
$appICO = "SITE/APPS/IMG/".$appID.".png";
getInfo($appPath);
$btn_1 = createButton('page=APPS','SITE/IMG/FULLSCREEN.png','applications');
$content = "
<div class=\"appInformation\" id=\"info\"></div>
<canvas id='game' width='550' height='400'>
	<p>Ваш браузер не поддерживает рисование.</p>
</canvas>

<div class='appButton'>
	<img src='$SITE"."SITE/IMG/FULLSCREEN.png"."?$TIME' onclick=\"fullScreenOn()\" />
</div>

<div class='appButton'>
	<img src='$SITE"."SITE/IMG/INFORMATION.png"."?$TIME' onclick=\"information()\" />
</div>

<script type='application/javascript'>
	let element = document.getElementById('game');
	let element_info = document.getElementById('info');
	let info = '';
	info += '<p>Develop by:<br><white>RadMirXAn</white></p>';
	info += '<p>Background music:<br><white>https://www.bensound.com</white></p>';
	info += '<p>Background picture:<br><white>https://www.pexels.com/</white></p>';
	info += '<p>Game Icons:<br><white>http://icones.pro/</white></p>';
	info += '<p>04.01.2018</p>';
	//---
	function information(){		
		if(element.style.visibility == 'visible' || element.style.visibility==''){
			element.style.height = \"0px\";
			element.style.width = \"0px\";
			element.style.visibility = 'hidden';
			element_info.innerHTML = info;
		}else{
			hideInformation();
		}
	}
	function hideInformation(){
		element.style.height = \"400px\";
		element.style.width = \"550px\";
		element.style.visibility = 'visible';		
		element_info.innerHTML = '';
	}
	//---
	function fullScreenOn(){
		hideInformation();
		if(element.requestFullscreen){
			element.requestFullscreen();
		}else if(element.mozRequestFullScreen){
			element.mozRequestFullScreen();
		}else if(element.webkitRequestFullScreen){
			element.webkitRequestFullScreen();
		}else if(element.msRequestFullscreen){
			element.msRequestFullscreen();
		}
	}
	//---
	var appPath = '$appPath';
	var antiCache = '?$TIME';
	const StartClasses = [
		'./LIB/RadmirXAn/Utils/ImageLoader/ImageLoader.js',
		'./LIB/RadmirXAn/Utils/AudioLoader/AudioLoader.js',
		'./LIB/RadmirXAn/Utils/Functions/Functions.js',
	
		'./LIB/RadmirXAn/Canvas/Canvas.js',
		'./LIB/RadmirXAn/Canvas/Bitmap/Bitmap.js',
		'./LIB/RadmirXAn/Canvas/Animation/Animation.js',

		'./LIB/RadmirXAn/Events/EnterFrame_Enets/EnterFrame.js',	
		'./LIB/RadmirXAn/Events/Keyboard_Events/Keyboard.js',
		'./LIB/RadmirXAn/Events/Mouse_Events/Mouse.js',
		
		'./LIB/RadmirXAn/Cursor/Cursor.js',
		'./LIB/RadmirXAn/Preloader/Preloader.js'
	];
	ClassLoader.load(StartClasses, function(){EnterFrame.start()});
</script>
";
echo setInfo('page=APPS', $appICO,'back',$content);
?>