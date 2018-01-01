<?php
	session_start();
	if (!isset($_SESSION['language'])) {
	  $_SESSION['language'] = 'RU';
	}

	$TIME = "time=".time();
	$SITE = "http://localhost/";
	//$SITE = "http://localhost:8080/MySite/";
	//$SITE = "https://www.radmirxan.ru/";
	$ROOT = "./";
	$LIB = $SITE."LIB/RadmirXAn/Utils/ClassLoader/ClassLoader.js?".$TIME;
		
	$Title = "RadMirXAn.RU";
	$Description = "RadMirXAn";
	
	switch(@$_GET['language']){
		case "BA":{$_SESSION['language'] = 'BA';break;};
		case "RU":{$_SESSION['language'] = 'RU';break;};
		case "EN":{$_SESSION['language'] = 'EN';break;};
	}
	
	$LANGUAGE = $_SESSION['language'];
	$PAGE = "";
	
	function setInfo($path, $back, $img, $content){
		global $LIB, $ROOT, $Title, $Description, $SITE, $TIME, $LANGUAGE, $PAGE;
		$infoURL = $ROOT.$path."info.xml";

		if (file_exists($infoURL)) {
			$InfoXml = simplexml_load_file($infoURL);
		} else {
			$InfoXml = simplexml_load_file($SITE."SITE/DEFAULT/XML/DEFAULT.xml?".$TIME);
		}
		
		$Title = $InfoXml->$LANGUAGE->title;
		$Description = $InfoXml->$LANGUAGE->description;
		
$PAGE = "<!DOCTYPE html>
<html>
<head>
<meta charset=\"utf-8\">
<meta name=\"description\" content=\"RadMirXAn\">
<meta name=\"keywords\" content=\"RadMirXAn,HTML,CSS,XML,JavaScript\">
<meta name=\"author\" content=\"RadMirXAn\">
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\" />

<title>$Title</title>

<link rel=\"icon\" href=\"./SITE/IMG/LOGO.png?$TIME\" type=\"image/png\">		
<link rel=\"stylesheet\" href=\"./SITE/CSS/BG.css?$TIME\">

<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
<script>
(adsbygoogle = window.adsbygoogle || []).push({
google_ad_client: 'ca-pub-3942502673062513',
enable_page_level_ads: true
});
</script>

<script type='application/javascript' src='$LIB'></script>

</head>
<body>				
<table class='mytable'>
<tr>
<td class='mytd'>
<header>
<a class='leftimg' href='$SITE?$TIME$back'><img src='$SITE$img?$TIME' onerror=\"this.src='$SITE/SITE/DEFAULT/IMG/DEFAULT.png?$TIME'\"></a>
<h1>$Title</h1>
<b>$Description</b>
<img class='lineimg' src='$SITE/SITE/IMG/LINE.png?$TIME'>
</header>
$content
</td>
</tr>
</table>				
</body>
</html>";
	}
	
	switch(@$_GET['page']){
		case "APPS":{
			if(@$_GET["app"]!=''){
				include_once("PHP/app.php");
			}else{
				include_once("PHP/apps.php");
			}
			break;
		};
		case "CONTACTS":{include_once("PHP/contacts.php");break;};
		case "BROWSER":{include_once("PHP/browser.php");break;};
		case "LANGUAGE":{include_once("PHP/language.php");break;};
		case "ERROR":{include_once("PHP/error.php");break;};
		default:{include_once("PHP/menu.php");};
	};
	exit;
?>