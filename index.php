<?php
	$TIME = "time=".time();
	$SITE = "http://localhost:8080/MySite/";
	//$SITE = "https://www.radmirxan.ru/";
	$LIB = $SITE."LIB/RadmirXAn/Utils/ClassLoader/ClassLoader.js?".$TIME;
	
	$DEFAULT = "
			<meta charset=\"utf-8\">
			<meta name=\"description\" content=\"RadMirXAn\">
			<meta name=\"keywords\" content=\"HTML,CSS,XML,JavaScript\">
			<meta name=\"author\" content=\"RadMirXAn\">
			<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\" />

			<link rel=\"shortcut icon\" href=\"./SITE/IMG/LOGO.png?$TIME\" type=\"image/png\">		
			<link rel=\"stylesheet\" href=\"./SITE/CSS/BG.css?$TIME\">";
			
	$DEFAULT_TITLE = "RadMirXAn";
	
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
		case "ERROR":{include_once("PHP/error.php");break;};
		default:{include_once("PHP/menu.php");};
	};
	exit;
?>