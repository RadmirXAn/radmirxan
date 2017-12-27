<?php
$browserBack = $SITE."?".$TIME;
echo <<<END
	<!DOCTYPE html>
	<html>
		<head>
		
			<meta charset="utf-8">
			<meta name="description" content="Сайт">
			<meta name="keywords" content="HTML,CSS,XML,JavaScript">
			<meta name="author" content="RadMirXAN">
			<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
			
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
						<td>
							<a class='leftimg' href='$browserBack'><img src='./SITE/IMG/BROWSER.png?$TIME'></a>
							<h1 style="color:#ff0000">СВЕДЕНИЯ О БРАУЗЕРЕ:</h1>
							<p>Свойства объекта Navigator не могут служить основой для надежной идентификации броузера.</p>							
							<img class='lineimg' src='./SITE/IMG/LINE.png?$TIME'>
							<div id="info"></div>
						</td>
					</tr>
			</table>
			
			<script type="text/javascript">
			window.onload = function() {
				var info = '';
				for(var key in navigator){
					info += '<p>'+ key + ': <white>' + navigator[key]+'</white></p>';
				}
				document.getElementById('info').innerHTML = info;
			}
			</script>
			
		</body>
	</html>
END;
?>