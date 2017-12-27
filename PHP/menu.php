<?php
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
			
			<link rel="shortcut icon" href="./SITE/IMG/LOGO.png?$TIME" type="image/png">		
			<link rel="stylesheet" href="./SITE/CSS/BG.css?$TIME">
			
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
							<a class='leftimg'><img src='./SITE/IMG/LOGO.png?$TIME'></a>
							<h1 style="color:#ff0000; font-size: 40pt">RadMirXAn.RU</h1>
							<img class='lineimg' src='./SITE/IMG/LINE.png?$TIME'>
							<a class='btn btn-primary' href='?page=GAMES&$TIME'><img src='./SITE/IMG/GAMES.png?$TIME'></a>
							<a class='btn btn-primary' href='?page=CONTACTS&$TIME'><img src='./SITE/IMG/CONTACTS.png?$TIME'></a>
							<a class='btn btn-primary' href='?page=BROWSER&$TIME'><img src='./SITE/IMG/BROWSER.png?$TIME'></a>							
						</td>
					</tr>
			</table>
		
		</body>
	</html>
END;
?>