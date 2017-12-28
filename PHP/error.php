<?php
$CSS_PATH = $SITE."SITE/DEFAULT/CSS/BG.css?".$TIME;
$ICO_PATH = $SITE."SITE/IMG/LOGO.png?".$TIME;
$errorTitle = "Не переходи границ дозволенного.";
echo <<<END
<!DOCTYPE html>
<html>
	<head>
		<title>$errorTitle</title>
		
		<meta charset="utf-8">
		<meta name="description" content="Тестирование возможностей Canvas">
		<meta name="keywords" content="HTML,CSS,XML,JavaScript">
		<meta name="author" content="RadMirXAn">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
		
		<link rel="shortcut icon" href="$ICO_PATH" type="image/png">		
		<link rel="stylesheet" href="$CSS_PATH">
	</head>
	<body>
	</body>
</html>
END;
?>