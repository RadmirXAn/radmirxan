<?php
if($_SERVER['PHP_SELF']!='/index.php'){
	if($_SERVER['HTTPS']){
		header('Location: '.'https://'.$_SERVER['SERVER_NAME']);
	}else{
		header('Location: '.'http://'.$_SERVER['SERVER_NAME']);
	}	
	exit;
}
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

			<table class="mytable">
					<tr>
						<td class="mytd">
							<a class='btn btn-primary' href='?page=GAMES'><img src='./SITE/IMG/GAMES.png'></a>
							<a class='btn btn-primary' href='?page=CONTACTS'><img src='./SITE/IMG/CONTACTS.png'></a>
						</td>
					</tr>
			</table>
		
		</body>
	</html>
END;
?>