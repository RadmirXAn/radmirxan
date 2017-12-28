<?php
$browserBack = $SITE."?".$TIME;
$browserTitle = "Ваш браузер.";
echo <<<END
	<!DOCTYPE html>
	<html>
		<head>
			<title>$browserTitle</title>
			
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

			<table class="mytable">
					<tr>
						<td>
							<a class='leftimg' href='$browserBack'><img src='./SITE/IMG/BROWSER.png?$TIME'></a>
							<h1>$browserTitle</h1>
							<p>Проверка функциональных возможностей вашего браузера.</p>
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