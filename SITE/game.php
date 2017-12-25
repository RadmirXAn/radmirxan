<?php
if($_SERVER['PHP_SELF']!='/game.php'){
	if($_SERVER['HTTPS']){
		header('Location: '.'https://'.$_SERVER['SERVER_NAME']);
	}else{
		header('Location: '.'http://'.$_SERVER['SERVER_NAME']);
	}	
	exit;
}
$gameID = (string)(@$_GET['game']);
$gamePath = "./SITE/GAMES/GAME_".$gameID;
$gameURL = $gamePath."/frame.html";
$gameICO = "./SITE/GAMES/IMG/".$gameID.".png";
$gameDescriptionPath = $gamePath.'/description.txt';
$gameDescription = @file_get_contents($gameDescriptionPath);
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
						
							<a class="leftimg"><img src=$gameICO onerror="this.src='./SITE/DEFAULT/IMG/GAME_ICO.png'" ></a>
							
							$gameDescription
							<iframe allowfullscreen class="test" src=$gameURL width="550" height="400" frameborder="0">
								Ваш браузер не поддерживает плавающие фреймы!
							</iframe>

							<a class="leftimg" href='?page=GAMES'><img src='./SITE/IMG/BACK.png'></a>
							<h1 style="color:#ff0000">Нажмите стрелку чтобы вернуться к предыдущему списку.</h1>
						</td>
					</tr>
			</table>
		</body>
	</html>	
END;
?>