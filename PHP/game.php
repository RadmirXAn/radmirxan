<?php
$gameID = (string)(@$_GET['game']);
$gamePath = "./SITE/GAMES/GAME_".$gameID;
$gameURL = $gamePath."/frame.html";
$gameICO = "./SITE/GAMES/IMG/".$gameID.".png";
$gameDescriptionPath = $gamePath.'/description.txt';
$gameDescription = @file_get_contents($gameDescriptionPath);
$gameBack = $SITE.'?page=GAMES';
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
			
			<link rel="shortcut icon" href="./SITE/IMG/LOGO.png" type="image/png">		
			<link rel="stylesheet" href="./SITE/CSS/BG.css">
			
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<script>
			  (adsbygoogle = window.adsbygoogle || []).push({
				google_ad_client: "ca-pub-3942502673062513",
				enable_page_level_ads: true
			  });
			</script>
			
		</head>
		<body>
			<table class="mytable">
					<tr>
						<td class="mytd">
							<a class="leftimg" href='$gameBack'><img src=$gameICO onerror="this.src='./SITE/DEFAULT/IMG/GAME_ICO.png'" ></a>
							$gameDescription
							<img class='lineimg' src='./SITE/IMG/LINE.png'>
							<iframe allowfullscreen class="test" src=$gameURL width="550" height="400" frameborder="0">
								Ваш браузер не поддерживает плавающие фреймы!
							</iframe>
						</td>
					</tr>
			</table>
		</body>
	</html>	
END;
?>