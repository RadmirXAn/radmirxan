<?php
$CSS_PATH = $SITE.'SITE/DEFAULT/CSS/BG.css';
$ICO_PATH = $SITE.'SITE/IMG/LOGO.png';
echo <<<END
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Тестирование возможностей Canvas">
		<meta name="keywords" content="HTML,CSS,XML,JavaScript">
		<meta name="author" content="RadMirXAN">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
		<meta http-equiv="Content-Script-Type" content="application/javascript">
		<title>ERROR</title>
		
		<link rel="shortcut icon" href="$ICO_PATH" type="image/png">		
		<link rel="stylesheet" href="$CSS_PATH">

	</head>
	<body>
	</body>
</html>
END;
?>