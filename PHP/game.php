<?php
$gameID = (string)(@$_GET["game"]);
$gamePath = "./SITE/GAMES/GAME_".$gameID;
$gameURL = $gamePath."/frame.php?".$TIME;
$gameICO = "./SITE/GAMES/IMG/".$gameID.".png?".$TIME;
$gameDescriptionPath = $gamePath."/description.txt";
$gameDescription = @file_get_contents($gameDescriptionPath);
$gameBack = $SITE.'?page=GAMES&'.$TIME;
if (!$gameDescription) $gameDescription = @file_get_contents('./SITE/DEFAULT/TXT/game_description.txt');
echo <<<END
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta name="description" content="Игры Canvas">
			<meta name="keywords" content="HTML,CSS,XML,JavaScript">
			<meta name="author" content="RadMirXAN">
			
			<title>Главная</title>
			
			<link rel="shortcut icon" href="./SITE/IMG/LOGO.png?$TIME" type="image/png">		
			<link rel="stylesheet" href="./SITE/CSS/BG.css?$TIME">
			
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
							<a class="leftimg" href='$gameBack'><img src='$gameICO' onerror="this.src='./SITE/DEFAULT/IMG/GAME_ICO.png?$TIME'" ></a>
							$gameDescription
							<img class='lineimg' src='./SITE/IMG/LINE.png?$TIME'>
							<canvas id="game" width="550" height="400">
								<p>Ваш браузер не поддерживает рисование.</p>
							</canvas>
						</td>
					</tr>
			</table>
			
			<script type="application/javascript">
				var gamePath = '$gamePath';
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