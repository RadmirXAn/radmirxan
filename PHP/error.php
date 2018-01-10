<?php
$CSS_PATH = $SITE."SITE/DEFAULT/CSS/BG.css?".$TIME;
$ICO_PATH = $SITE."SITE/IMG/LOGO.png?".$TIME;
echo <<<END
<!DOCTYPE html>
<html>
	<head>
		<title>ERROR</title>
		
		<meta charset="utf-8">
		<meta name="description" content="RadMirXAn">
		<meta name="keywords" content="HTML,CSS,XML,JavaScript">
		<meta name="author" content="RadMirXAn">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
		<meta property=\"og:image\" content=\"$ROOT"."SITE/IMG/SHARE.png\" />
		
		<link rel="shortcut icon" href="$ICO_PATH" type="image/png">		
		<link rel="stylesheet" href="$CSS_PATH">
	</head>
	<body>
		<body>				
		<div class='centerG'>
			<div class='centerV'></div>		
			<div class='page'>
				<a id="link-img" href="$ALTERNATE"></a>
			</div>
		</div>
	</body>
</html>
END;
?>