<?php
$appID = (string)(@$_GET["app"]);
$appPath = "./SITE/APPS/APP_".$appID;
$appURL = $appPath."/frame.php?".$TIME;
$appICO = "./SITE/APPS/IMG/".$appID.".png?".$TIME;
$appDescriptionPath = $appPath."/description.xml";
$xml;
if (file_exists($appDescriptionPath)) {
    $xml = simplexml_load_file($appDescriptionPath);
} else {
    $xml = simplexml_load_file("./SITE/DEFAULT/XML/app_description.xml");
}
$appName = $xml->name;
$appDescription = $xml->description;
$appBack = $SITE.'?page=APPS&'.$TIME;
$appTitle = $appName;
echo <<<END
	<!DOCTYPE html>
	<html>
		<head>
			<title>$appTitle</title>
			$DEFAULT
			
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<script>
			  (adsbygoogle = window.adsbygoogle || []).push({
				google_ad_client: "ca-pub-3942502673062513",
				enable_page_level_ads: true
			  });
			</script>
			<script type="application/javascript" src="$LIB"></script>
		</head>
		<body>
		
			<table class="mytable">
					<tr>
						<td class="mytd">
							<a class="leftimg" href='$appBack'><img src='$appICO' onerror="this.src='./SITE/DEFAULT/IMG/APP_ICO.png?$TIME'" ></a>
							<h1 style="color:#ff0000">$appTitle</h1>
							<p style="color:#ff0000">$appDescription</p>
							<img class='lineimg' src='./SITE/IMG/LINE.png?$TIME'>
							<canvas id="game" width="550" height="400">
								<p>Ваш браузер не поддерживает рисование.</p>
							</canvas>
						</td>
					</tr>
			</table>
			
			<script type="application/javascript">
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
			
		</body>
	</html>	
END;
?>