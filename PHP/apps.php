<?php
$appsBack = $SITE."?".$TIME;
$appsTitle = "Приложения для души.";
echo <<<END
	<!DOCTYPE html>
	<html>
		<head>
			<title>$appsTitle</title>
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
						<a class='leftimg' href='$appsBack'><img src='./SITE/IMG/APPS.png?$TIME'></a>
						<h1>$appsTitle</h1>
						<p>Всем не угодишь.</p>
						<img class='lineimg' src='./SITE/IMG/LINE.png?$TIME'>
						<a class='btn btn-primary' href='?page=APPS&app=0&$TIME'><img src='./SITE/APPS/IMG/0.png?$TIME'></a>
					</td>
				</tr>
			</table>			
		</body>
	</html>
END;
?>