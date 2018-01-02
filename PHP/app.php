<?php
$appID = (string)(@$_GET["app"]);
$appPath = "SITE/APPS/APP_".$appID."/";
$appICO = "SITE/APPS/IMG/".$appID.".png";
getInfo($appPath);
$content = "
<canvas id='game' width='550' height='400'>
	<p>Ваш браузер не поддерживает рисование.</p>
</canvas>

<script type='application/javascript'>
	var appPath = '$appPath';
	var antiCache = '?$TIME';
	const StartClasses = [
		'./LIB/RadmirXAn/Utils/ImageLoader/ImageLoader.js',
		'./LIB/RadmirXAn/Utils/AudioLoader/AudioLoader.js',
	
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
echo setInfo('&page=APPS', $appICO,'back',$content);
?>