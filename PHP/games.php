<?php
$gamesBack = $SITE;
echo <<<END
	<!DOCTYPE html>
	<html>
		<head>
		
			<meta charset="utf-8">
			<meta name="description" content="Сайт">
			<meta name="keywords" content="HTML,CSS,XML,JavaScript">
			<meta name="author" content="RadMirXAN">
			<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
			<meta http-equiv="Content-Script-Type" content="application/javascript">
			
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
			<table>
				<tr>
					<td>
						<a class='leftimg' href='$gamesBack'><img src='./SITE/IMG/GAMES.png'></a>
						<h1 style="color:#ff0000">Здесь вы можете поиграть в различные игры.</h1>
						<img class='lineimg' src='./SITE/IMG/LINE.png'>
						<a class='btn btn-primary' href='?page=GAMES&game=0'><img src='./SITE/GAMES/IMG/0.png'></a>
					</td>
				</tr>
			</table>			
		</body>
	</html>
END;
?>