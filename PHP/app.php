<?php
$appWidth = 800;
$appHeight = 480;
$appID = intval($_GET["app"]);
$appPath = "SITE/APPS/APP_".$appID."/";
$appICO = "SITE/APPS/IMG/".$appID.".png";
$appSHARE = $appPath."SHARE.png";
getInfo($appPath);
$About = $InfoXml->about;

$Scripts = "
		<script type='application/javascript' src='LIB/RadmirXAn/Utils/ClassLoader/ClassLoader.js'></script>
";

$content = "
<div class=\"appInformation\" id=\"info\"></div>
<canvas id='game' width='$appWidth' height='$appHeight' >
	<p>Ваш браузер не поддерживает рисование.</p>
</canvas>

<div class='appButton'>
	<img alt='img_fullScreenOn' src='$SITE"."SITE/IMG/FULLSCREEN.png"."?$TIME' onclick=\"fullScreenOn()\" />
</div>

<div class='appButton'>
	<img alt='img_information' src='$SITE"."SITE/IMG/INFORMATION.png"."?$TIME' onclick=\"information()\"/>
</div>

<script type='application/javascript'>
	let element = document.getElementById('game');
	let element_info = document.getElementById('info');
	let info = '$About';
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
		element.style.height = \"$appHeight"."px\";
		element.style.width = \"$appWidth"."px\";
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
	var root = '$ROOT';
	var appPath = '$ROOT"."$appPath';
	var antiCache = '?$TIME';
	const StartClasses = [
		'$ROOT"."LIB/RadmirXAn/Utils/ImageLoader/ImageLoader.js',
		'$ROOT"."LIB/RadmirXAn/AudioContext/AudioContext.js',
		'$ROOT"."LIB/RadmirXAn/Utils/AudioLoader/AudioLoader.js',
		'$ROOT"."LIB/RadmirXAn/Utils/Functions/Functions.js',
	
		'$ROOT"."LIB/RadmirXAn/Canvas/Canvas.js',
		'$ROOT"."LIB/RadmirXAn/Canvas/Bitmap/Bitmap.js',
		'$ROOT"."LIB/RadmirXAn/Canvas/Animation/Animation.js',

		'$ROOT"."LIB/RadmirXAn/Events/EnterFrame_Enets/EnterFrame.js',
		'$ROOT"."LIB/RadmirXAn/Events/Mouse_Events/Mouse.js',
		
		'$ROOT"."LIB/RadmirXAn/Preloader/Preloader.js'
	];
	ClassLoader.load(StartClasses, function(){EnterFrame.start()});
</script>
";

echo setInfo('page=APPS',$appICO,'back',$content,$appSHARE);
?>