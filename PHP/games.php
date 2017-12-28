<?php
$gamesBack = $SITE."?".$TIME;
echo <<<END
	<!DOCTYPE html>
	<html>
		<head>
			$DEFAULT
			
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
						<a class='leftimg' href='$gamesBack'><img src='./SITE/IMG/GAMES.png?$TIME'></a>
						<h1 style="color:#ff0000">Здесь вы можете поиграть в различные игры.</h1>
						<img class='lineimg' src='./SITE/IMG/LINE.png?$TIME'>
						<a class='btn btn-primary' href='?page=GAMES&game=0&$TIME'><img src='./SITE/GAMES/IMG/0.png?$TIME'></a>
					</td>
				</tr>
			</table>			
		</body>
	</html>
END;
?>